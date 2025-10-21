// assets/js/chat.js
(function () {
  
  // === OGX skin sync helpers (debug) ===
  window.SKIN_REGISTRY = window.SKIN_REGISTRY || new Map();
  async function ogxNameHash(tag, nick) {
    const raw = (String(tag||"")+":"+String(nick||"")).toLowerCase().trim();
    const buf = new TextEncoder().encode(raw);
    const dig = await crypto.subtle.digest("SHA-1", buf);
    return Array.from(new Uint8Array(dig)).map(b=>b.toString(16).padStart(2,"0")).join("");
  }
  function ogxCurrentNames() {
    const tagEl = document.getElementById('tag') || document.querySelector('input[placeholder*="tag" i]');
    const nickEl = document.getElementById('nickname') || document.querySelector('input[name="nick"], input[name="nickname"], input[placeholder*="name" i]');
    return [(tagEl?.value)||'', (nickEl?.value)||''];
  }
  function ogxCurrentSkins() {
    const s1 = document.getElementById('skin1')?.value.trim() || '';
    const s2 = document.getElementById('skin2')?.value.trim() || '';
    return [s1, s2];
  }
  function ogxSendSkin(ws, op, h, s1, s2) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const msg = { t:'skin', op, h, s1, s2, ver:1 };
      console.log('[skin][send]', msg);
      try { ws.send(JSON.stringify(msg)); } catch (e) { console.warn('[skin][send][fail]', e); }
    } else {
      console.log('[skin][send][skip] socket not open');
    }
  }
  const ogxDebounce = (fn, ms)=>{ let id; return (...a)=>{ clearTimeout(id); id=setTimeout(()=>fn(...a),ms); }; };
  // === end helpers ===
'use strict';

  // --- prevent double mount ---
  if (window.__OGX_CHAT_MOUNTED__) return;
  window.__OGX_CHAT_MOUNTED__ = true;

  // ===== WS endpoint (your Replit URL) =====
const PROD_BASE = 'wss://chat-smge.onrender.com';
const CHAT_WS =
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'ws://localhost:8080/chat'   // local dev
    : `${PROD_BASE}/chat`;          // deployed on Render

  // ===== Build UI (transparent, no header/minimize) =====
  const css = `
  .ogx-chat{
    position:fixed;left:12px;bottom:12px;width:360px;height:220px;display:flex;flex-direction:column;
    background:transparent;border:0;border-radius:10px;color:#fff;
    font:12px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;z-index:2147483000;pointer-events:auto
  }
  .ogx-chat__log{
    flex:1;overflow-y:auto;padding:6px 6px 4px;word-break:break-word;
    background:rgba(0,0,0,0.28);border-radius:10px
  }
  .ogx-chat__log .me{color:#7bdcff}
  .ogx-chat__log .msg{margin:2px 0}
  .ogx-chat__input{
    border:0;outline:0;padding:8px;margin-top:6px;border-radius:8px;
    background:rgba(0,0,0,0.18);color:#fff
  }`;
  const style = document.createElement('style'); style.textContent = css;
  document.documentElement.appendChild(style);

  const box = document.createElement('div');
  box.className = 'ogx-chat';
  box.innerHTML = `
    <div id="ogx-chat-log" class="ogx-chat__log"></div>
    <input id="ogx-chat-input" class="ogx-chat__input"
      placeholder="Type… (Enter to send, second Enter exits)" autocomplete="off" maxlength="400"/>
  `;
  window.addEventListener('DOMContentLoaded', () => document.body.appendChild(box));

  const logEl = box.querySelector('#ogx-chat-log');
  const inpEl = box.querySelector('#ogx-chat-input');

  // ===== helpers =====
  const url = new URL(location.href);
  const esc = (s) => (s||'').toString().replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  function addLine(html, cls){
    const div = document.createElement('div');
    div.className = `msg ${cls||''}`;
    div.innerHTML = html;
    logEl.appendChild(div);
    logEl.scrollTop = logEl.scrollHeight;
  }

  // ===== room & name detection =====
  const room = url.searchParams.get('room') || 'global';

  function detectGameNick(){
    try {
      if (window.game?.myName)  return String(game.myName);
      if (window.App?.myName)   return String(App.myName);
      if (window.player?.name)  return String(player.name);
      if (window.NICK)          return String(window.NICK);
      if (window.nick)          return String(window.nick);
      const elById = document.getElementById('nick') || document.getElementById('nickname');
      if (elById?.value) return String(elById.value);
      const elBySel = document.querySelector('input[name="nick"], input[name="nickname"], input[placeholder*="name" i], input[placeholder*="nick" i]');
      if (elBySel?.value) return String(elBySel.value);
      if (url.searchParams.get('name')) return String(url.searchParams.get('name'));
      for (const k of ['nick','nickname','playerName','ogarx:name','ogx_nick']) {
        const v = localStorage.getItem(k);
        if (v) return String(v);
      }
    } catch {}
    return '';
  }
  const defaultNick = () => 'player-' + Math.random().toString(36).slice(2,7);

  let myName = (detectGameNick() || defaultNick()).slice(0,24);
  let ws, retry = 0, killed = false;

  // ===== keyboard UX =====
  function chatFocused(){ return document.activeElement === inpEl; }

  document.addEventListener('keydown', (e) => {
    if (chatFocused()) return;              // when focused, input handles Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      inpEl.focus();
      const v = inpEl.value; inpEl.value=''; inpEl.value = v; // caret to end
    }
  });

  // Stop game controls while typing
  inpEl.addEventListener('keydown', e => e.stopPropagation());
  inpEl.addEventListener('keyup',   e => e.stopPropagation());

  // In input: Enter sends and exits; empty Enter just exits
  inpEl.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const text = (inpEl.value || '').trim();
    if (text) send({ type: 'say', text });
    inpEl.value = '';
    inpEl.blur(); // exit chat so game controls resume
  });

  // ===== WS client =====
  function connect(){
    // inside connect(), replace the whole ws.onmessage with this:
  ws.onmessage = (e) => {
    let m; try { m = JSON.parse(e.data); } catch { return; }

    // ---- SKIN PROTOCOL ----
    if (m && m.t === 'skin') {
      // helper to upsert a record + prefetch images
      const upsert = (h, s1, s2) => {
        if (!h) return;
        const prev = window.SKIN_REGISTRY.get(h) || {};
        const rec  = { ...prev };
        if (typeof s1 === 'string' && s1.trim()) rec.s1 = s1.trim();
        if (typeof s2 === 'string' && s2.trim()) rec.s2 = s2.trim();
        window.SKIN_REGISTRY.set(h, rec);
        // prime image cache so drawSkin() has it ready
        if (rec.s1 && window.skins?.setOrGetSkin) window.skins.setOrGetSkin(rec.s1);
        if (rec.s2 && window.skins?.setOrGetSkin) window.skins.setOrGetSkin(rec.s2);
      };

      if (m.op === 'update') {
        upsert(m.h, m.s1, m.s2);
      } else if (m.op === 'bulk' && Array.isArray(m.data)) {
        for (const row of m.data) {
          const [h, s1, s2] = row;
          upsert(h, s1, s2);
        }
      }
      return; // handled
    }

    // ---- CHAT MESSAGES (existing) ----
    if (m.type !== 'msg') return;
    const me = (m.from === myName);
    addLine(`<b class="${me?'me':''}">${esc(m.from)}:</b> ${esc(m.text||'')}`, me?'me':'');
  };

    }

    function send(obj){
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(obj));
      }
  }

  connect();

  // ===== silent nickname syncing (no UI logs) =====
  let lastSent = myName;
  setInterval(() => {
    const nick = (detectGameNick() || '').trim().slice(0,24);
    if (nick && nick !== lastSent) {
      lastSent = nick;
      myName = nick;
      // inform server so subsequent messages use the new name (no broadcast/UI logs)
      send({ type: 'rename', name: nick });
    }
  }, 1500);
})();
