(() => {
    'use strict';
  
    class _0x21afee {
      constructor() {
        this.events = {};
      }
      ['on'](_0x355034, _0xb2ebab) {
        if (!this.events[_0x355034]) {
          this.events[_0x355034] = [];
        }
        this.events[_0x355034].push(_0xb2ebab);
      }
      ["once"](_0x20e66e, _0x133c2b) {
        const _0xa7f617 = (..._0x32c209) => {
          _0x133c2b(..._0x32c209);
          this.off(_0x20e66e, _0xa7f617);
        };
        this.on(_0x20e66e, _0xa7f617);
      }
      ['emit'](_0x5a4710, ..._0x460328) {
        if (this.events[_0x5a4710]) {
          this.events[_0x5a4710].forEach(_0xc0e707 => {
            _0xc0e707(..._0x460328);
          });
        }
      }
      ["off"](_0x42b6e9, _0x171489) {
        if (this.events[_0x42b6e9]) {
          this.events[_0x42b6e9] = this.events[_0x42b6e9].filter(_0x5df288 => _0x5df288 !== _0x171489);
        }
      }
      ["removeAllListeners"](_0x17b83c) {
        if (this.events[_0x17b83c]) {
          delete this.events[_0x17b83c];
        }
      }
      ["listeners"](_0x4892b8) {
        return this.events[_0x4892b8] || [];
      }
      ["resetEvents"]() {
        this.events = {};
      }
    }
    class _0x109239 {
      static ['CONNECTING'] = 0x0;
      static ["OPEN"] = 0x1;
      static ["CLOSING"] = 0x2;
      static ["CLOSED"] = 0x3;
      #t = _0x109239.CONNECTING;
      #e = 'arraybuffer';
      #s = '*';
      ['onopen'] = null;
      ["onmessage"] = null;
      ['onclose'] = null;
      ["onerror"] = null;
      constructor(_0x3c0bae) {
        this.serverUrl = _0x3c0bae;
        this.validateUrl(_0x3c0bae);
        this.iframe = null;
        this.iframePath = "./iframe.html";
        this.createElement();
        this.listenForMessages();
      }
      get ["readyState"]() {
        return this.#t;
      }
      get ["binaryType"]() {
        return this.#e;
      }
      get ["origin"]() {
        return this.#s;
      }
      ['validateUrl'](_0x1ba9c9) {
        if (!_0x1ba9c9 || "string" != typeof _0x1ba9c9 || '' === _0x1ba9c9.trim()) {
          throw new Error("URL is either null, empty, or invalid");
        }
        if (!/^(ws|wss):\/\//.test(_0x1ba9c9)) {
          throw new Error("URL must start with ws:// or wss://");
        }
        try {
          new URL(_0x1ba9c9);
        } catch (_0x173a8b) {
          throw new Error("The URL format is incorrect");
        }
        return true;
      }
      ["createElement"]() {
        if (!this.iframe) {
          this.iframe = document.createElement('iframe');
          this.iframe.src = this.iframePath;
          this.iframe.style.display = 'none';
          document.body.appendChild(this.iframe);
          this.iframe.onload = () => {
            if (this.iframe.contentWindow) {
              this.log("Iframe created, opening new websocket connection with target url:", this.serverUrl);
              this.iframe.contentWindow.postMessage({
                'command': "new",
                'targetUrl': this.serverUrl,
                'binaryType': this.binaryType
              }, this.origin);
            }
          };
        }
      }
      ["listenForMessages"]() {
        window.addEventListener("message", _0x6cfe88 => {
          if (this.iframe && _0x6cfe88.source === this.iframe.contentWindow) {
            this.handleIframeMessage(_0x6cfe88.data);
          }
        });
      }
      ['handleIframeMessage'](_0x33f7c9) {
        if ("connecting" === _0x33f7c9.type) {
          this.#t = _0x33f7c9.readyState;
        } else if ('open' === _0x33f7c9.type) {
          this.#t = _0x33f7c9.readyState;
          this.onopen?.();
        } else if ("message" === _0x33f7c9.type) {
          this.onmessage?.(_0x33f7c9.message);
        } else if ("close" === _0x33f7c9.type) {
          this.#t = _0x33f7c9.readyState;
          this.onclose?.(_0x33f7c9);
          this.deleteElement();
        } else if ("error" === _0x33f7c9.type) {
          this.#t = _0x33f7c9.readyState;
          this.onerror?.(_0x33f7c9);
        }
      }
      ["send"](_0x4201b9) {
        if (this.#t === _0x109239.OPEN) {
          this.iframe.contentWindow.postMessage({
            'command': "send",
            'message': _0x4201b9
          }, this.origin);
        } else {
          this.logError("Cannot send message, WebSocket is not open.");
        }
      }
      ["senpaModuleAlloc"]() {
        if (this.#t === _0x109239.OPEN) {
          this.iframe.contentWindow.postMessage({
            'command': "senpaModuleAlloc"
          }, this.origin);
        } else {
          this.logError("Cannot allocate, WebSocket is not open.");
        }
      }
      ["senpaModuleAllocArray"](_0x89c715) {
        if (this.#t === _0x109239.OPEN) {
          this.iframe.contentWindow.postMessage({
            'command': 'senpaModuleAllocArray',
            'array': _0x89c715
          }, this.origin);
        } else {
          this.logError("Cannot allocate array, WebSocket is not open.");
        }
      }
      ["close"](_0x3720de, _0x980038) {
        if (this.#t !== _0x109239.CLOSED) {
          this.iframe.contentWindow.postMessage({
            'command': "close",
            'code': _0x3720de,
            'reason': _0x980038
          }, this.origin);
        } else {
          this.logError("Cannot close, WebSocket is already closed.");
        }
      }
      ['deleteElement']() {
        if (this.iframe) {
          this.iframe.remove();
          this.iframe = null;
          this.log("Deleting Element...");
        }
      }
      ['log'](_0x5f2f20, ..._0x595127) {
        console.log("%c[Iframe]", "color: rgb(176, 39, 153); font-weight: bold;", _0x5f2f20, ..._0x595127);
      }
      ["logError"](_0x4e5bf6) {
        console.error("%c[Iframe Error]", "color: red; font-weight: bold;", _0x4e5bf6);
      }
    }
    class _0x537a43 {
      constructor() {
        this.buffer = new Uint8Array(0x10);
        this.offset = 0x0;
      }
      ['ensureCapacity'](_0x56db5d) {
        const _0x2a8fbb = this.offset + _0x56db5d;
        if (_0x2a8fbb > this.buffer.length) {
          let _0x357cc4 = 0x2 * this.buffer.length;
          for (; _0x357cc4 < _0x2a8fbb;) {
            _0x357cc4 *= 0x2;
          }
          const _0x393863 = new Uint8Array(_0x357cc4);
          _0x393863.set(this.buffer);
          this.buffer = _0x393863;
        }
      }
      ["writeInt8"](_0x29035c) {
        this.ensureCapacity(0x1);
        new DataView(this.buffer.buffer).setInt8(this.offset, _0x29035c);
        this.offset += 0x1;
      }
      ['writeUInt8'](_0x19feb8) {
        this.ensureCapacity(0x1);
        new DataView(this.buffer.buffer).setUint8(this.offset, _0x19feb8);
        this.offset += 0x1;
      }
      ["writeInt16"](_0xf09f12) {
        this.ensureCapacity(0x2);
        new DataView(this.buffer.buffer).setInt16(this.offset, _0xf09f12, true);
        this.offset += 0x2;
      }
      ["writeUInt16"](_0xc98c62) {
        this.ensureCapacity(0x2);
        new DataView(this.buffer.buffer).setUint16(this.offset, _0xc98c62, true);
        this.offset += 0x2;
      }
      ['writeInt32'](_0x139621) {
        this.ensureCapacity(0x4);
        new DataView(this.buffer.buffer).setInt32(this.offset, _0x139621, true);
        this.offset += 0x4;
      }
      ['writeUInt32'](_0xedf756) {
        this.ensureCapacity(0x4);
        new DataView(this.buffer.buffer).setUint32(this.offset, _0xedf756, true);
        this.offset += 0x4;
      }
      ["writeFloat"](_0x5e68e9) {
        this.ensureCapacity(0x4);
        new DataView(this.buffer.buffer).setFloat32(this.offset, _0x5e68e9, true);
        this.offset += 0x4;
      }
      ['writeDouble'](_0x2f8d08) {
        this.ensureCapacity(0x8);
        new DataView(this.buffer.buffer).setFloat64(this.offset, _0x2f8d08, true);
        this.offset += 0x8;
      }
      ["writeString8"](_0x35c03c) {
        this.writeUInt8(_0x35c03c.length);
        for (let _0x168e91 = 0x0; _0x168e91 < _0x35c03c.length; _0x168e91++) {
          this.writeUInt8(_0x35c03c.charCodeAt(_0x168e91));
        }
      }
      ['writeLongString8'](_0x29f11c) {
        this.writeUInt16(_0x29f11c.length);
        for (let _0x412fea = 0x0; _0x412fea < _0x29f11c.length; _0x412fea++) {
          this.writeUInt8(_0x29f11c.charCodeAt(_0x412fea));
        }
      }
      ["writeString16"](_0x181e54) {
        this.writeUInt8(_0x181e54.length);
        for (let _0x506aa2 = 0x0; _0x506aa2 < _0x181e54.length; _0x506aa2++) {
          this.writeUInt16(_0x181e54.charCodeAt(_0x506aa2));
        }
      }
      ["writeLongString16"](_0x1104fa) {
        this.writeUInt16(_0x1104fa.length);
        for (let _0x5b1811 = 0x0; _0x5b1811 < _0x1104fa.length; _0x5b1811++) {
          this.writeUInt16(_0x1104fa.charCodeAt(_0x5b1811));
        }
      }
      ['getBuffer']() {
        return this.buffer.subarray(0x0, this.offset);
      }
    }
    class _0x20616e {
      constructor(_0x276a08) {
        this.view = new DataView(_0x276a08);
        this.index = 0x0;
        this.maxIndex = _0x276a08.byteLength;
      }
      ['readInt8']() {
        const _0x25600e = this.view.getInt8(this.index, true);
        this.index += 0x1;
        return _0x25600e;
      }
      ["readUInt8"]() {
        const _0x3707a6 = this.view.getUint8(this.index, true);
        this.index += 0x1;
        return _0x3707a6;
      }
      ["readInt16"]() {
        const _0x3874f1 = this.view.getInt16(this.index, true);
        this.index += 0x2;
        return _0x3874f1;
      }
      ["readUInt16"]() {
        const _0x434a3e = this.view.getUint16(this.index, true);
        this.index += 0x2;
        return _0x434a3e;
      }
      ['readInt32']() {
        const _0x1a6751 = this.view.getInt32(this.index, true);
        this.index += 0x4;
        return _0x1a6751;
      }
      ["readUInt32"]() {
        const _0x1ca757 = this.view.getUint32(this.index, true);
        this.index += 0x4;
        return _0x1ca757;
      }
      ["readFloat"]() {
        const _0x387d7b = this.view.getFloat32(this.index, true);
        this.index += 0x4;
        return _0x387d7b;
      }
      ['readDouble']() {
        const _0x195cc0 = this.view.getFloat64(this.index, true);
        this.index += 0x8;
        return _0x195cc0;
      }
      ["readString8"]() {
        const _0x5ae417 = this.readUInt8();
        let _0x1d0dbf = '';
        for (let _0x59fec0 = 0x0; _0x59fec0 < _0x5ae417 && !this.end; _0x59fec0++) {
          const _0x5b0514 = this.readUInt8();
          _0x1d0dbf += String.fromCharCode(_0x5b0514);
        }
        return _0x1d0dbf;
      }
      ["readLongString8"]() {
        const _0x31e76a = this.readUInt16();
        let _0x66bdce = '';
        for (let _0x50bc21 = 0x0; _0x50bc21 < _0x31e76a && !this.end; _0x50bc21++) {
          const _0x260d5c = this.readUInt8();
          _0x66bdce += String.fromCharCode(_0x260d5c);
        }
        return _0x66bdce;
      }
      ['readUTF8StringZero']() {
        let _0x8c8856 = '';
        for (; this.index < this.maxIndex;) {
          const _0x114b95 = this.readUInt8();
          if (!_0x114b95) {
            break;
          }
          _0x8c8856 += String.fromCharCode(_0x114b95);
        }
        return decodeURIComponent(escape(_0x8c8856));
      }
      ['readString16']() {
        const _0x1fc276 = this.readUInt8();
        let _0x3d656b = '';
        for (let _0x4a9b67 = 0x0; _0x4a9b67 < _0x1fc276 && !this.end; _0x4a9b67++) {
          const _0x5cc776 = this.readUInt16();
          _0x3d656b += String.fromCharCode(_0x5cc776);
        }
        return _0x3d656b;
      }
      ["readLongString16"]() {
        const _0x2320e6 = this.readUInt16();
        let _0x38d086 = '';
        for (let _0x23adda = 0x0; _0x23adda < _0x2320e6 && !this.end; _0x23adda++) {
          const _0x4391ba = this.readUInt16();
          _0x38d086 += String.fromCharCode(_0x4391ba);
        }
        return _0x38d086;
      }
      ["decodeString"](_0x1571a7) {
        return decodeURI(_0x1571a7);
      }
      get ['bytesLeft']() {
        return this.maxIndex - this.index;
      }
      get ["end"]() {
        return this.index === this.maxIndex;
      }
    }
    class _0x54a10e {
      constructor() {
        this.left = -0x1f40;
        this.top = -0x1f40;
        this.right = 0x1f40;
        this.bottom = 0x1f40;
        this.width = 0x3e80;
        this.height = 0x3e80;
      }
      ["update"](_0x125cac, _0x26e186, _0x205297, _0x2b3b11) {
        this.left = _0x125cac;
        this.top = _0x26e186;
        this.right = _0x205297;
        this.bottom = _0x2b3b11;
        this.width = _0x205297 - _0x125cac;
        this.height = _0x2b3b11 - _0x26e186;
      }
    }
    class _0xb0820e {
      constructor(_0x2fac46 = 0xff, _0x3d8b40 = 0xff, _0x2bba58 = 0xff) {
        this.value = _0xb0820e.rgb2Hex(_0x2fac46, _0x3d8b40, _0x2bba58);
        this.darkerValue = _0xb0820e.darken(_0x2fac46, _0x3d8b40, _0x2bba58);
      }
      static ["rgb2Hex"](_0x4386bf, _0x49500e, _0x3ba839) {
        if (_0x4386bf < 0x0 || _0x4386bf > 0xff || _0x49500e < 0x0 || _0x49500e > 0xff || _0x3ba839 < 0x0 || _0x3ba839 > 0xff) {
          throw new Error("Each color component must be between 0 and 255");
        }
        return '#' + (16777216 | _0x4386bf << 0x10 | _0x49500e << 0x8 | _0x3ba839).toString(0x10).slice(0x1);
      }
      static ["randomColor"]() {
        const _0x509149 = [0xff, Math.floor(0x64 * Math.random()), Math.floor(0x100 * Math.random())];
        _0x509149.sort(() => Math.random() - 0.5);
        return _0xb0820e.rgb2Hex(..._0x509149);
      }
      static ['darken'](_0x1eab01, _0x3247f2, _0x3664df, _0x310231 = 0x1) {
        _0x1eab01 = _0x1eab01 * (0x1 - (_0x310231 /= 0xa)) | 0x0;
        _0x3247f2 = _0x3247f2 * (0x1 - _0x310231) | 0x0;
        _0x3664df = _0x3664df * (0x1 - _0x310231) | 0x0;
        return _0xb0820e.rgb2Hex(_0x1eab01, _0x3247f2, _0x3664df);
      }
    }
    const _0xa630e8 = new class {
      constructor() {
        this.clients = [];
        this.activeClient = null;
        this.maxClientsAllowed = 0x2;
      }
      ["addClient"](_0x3fae9b) {
        if (this.clients.length > this.maxClientsAllowed) {
          this.log("Cannot add client. Max clients (" + this.maxClientsAllowed + ") reached.");
        } else {
          this.clients.push(_0x3fae9b);
          if (0x1 === this.clients.length) {
            this.setClient(_0x3fae9b);
            this.log("Added Parent:", _0x3fae9b);
          } else if (0x2 === this.clients.length) {
            this.log("Added Child:", _0x3fae9b);
          }
        }
      }
      ["removeClient"](_0x72b87) {
        const _0x3e2e04 = this.clients.indexOf(_0x72b87);
        if (-0x1 !== _0x3e2e04) {
          if (this.activeClient === _0x72b87) {
            const _0x28fa36 = this.getNextClient(_0x72b87);
            if (_0x28fa36) {
              this.setClient(_0x28fa36);
              this.log("Active client set to:", this.activeClient);
            } else {
              this.activeClient = null;
              this.log("No available clients left.");
            }
          }
          this.clients.splice(_0x3e2e04, 0x1);
          this.log("Deleted client:", _0x72b87);
        }
      }
      ["getNextClient"](_0xef8350) {
        if (this.clients.length > 0x1) {
          const _0x523a09 = (this.clients.indexOf(_0xef8350) + 0x1) % this.clients.length;
          return this.clients[_0x523a09];
        }
        return null;
      }
      ["setClient"](_0x1ddb88) {
        this.activeClient = _0x1ddb88;
      }
      ["getActiveClient"]() {
        return this.activeClient;
      }
      ["getClients"]() {
        return this.clients;
      }
      ["resetToParent"]() {
        const _0x1a97e1 = this.clients.find(_0x779763 => "parent" === _0x779763.clientType);
        if (_0x1a97e1) {
          this.setClient(_0x1a97e1);
        }
      }
      ["totalPlaying"]() {
        return this.clients.reduce((_0x8e6aee, _0x27e150) => _0x8e6aee + (_0x27e150.playing ? 0x1 : 0x0), 0x0);
      }
      ["getParent"]() {
        return this.clients.find(_0x14eef8 => "parent" === _0x14eef8.clientType) || null;
      }
      ["getChild"]() {
        return this.clients.find(_0x326891 => 'child' === _0x326891.clientType) || null;
      }
      ["eachClientByPriority"](_0x31d9a4) {
        if (0x0 === this.clients.length) {
          return;
        }
        let _0x573277 = null;
        let _0x5e1032 = null;
        let _0x5ef796 = 0x0;
        for (let _0x14c77e = 0x0; _0x5ef796 < this.clients.length; _0x5ef796++, _0x14c77e++) {
          _0x5e1032 = this.clients[_0x5ef796];
          if (_0x5e1032) {
            _0x31d9a4(_0x5e1032, _0x573277, _0x14c77e, _0x5ef796);
            _0x573277 = _0x5e1032;
          }
        }
      }
      ["findClientOrigin"](_0x290548 = null, _0x18088f = null) {
        if (_0x290548) {
          return this.clients.find(_0x3a745c => _0x3a745c.clientID === _0x290548);
        }
        if (_0x18088f) {
          for (const _0x2d5b30 of this.clients) for (const _0x19c981 of Object.values(_0x2d5b30.stores.cellsByID)) if (_0x19c981.id === _0x18088f) {
            return _0x2d5b30;
          }
        }
        return null;
      }
      ["log"](_0x552739, ..._0x2cb29e) {
        console.log('%c[Multibox]', "color: #3d8fb3; font-weight: bold;", _0x552739, ..._0x2cb29e);
      }
    }();
    const _0x518936 = new class {
      constructor() {
        this.canvas = null;
        this.ctx = null;
        this.graphicsQualityFactor = 0x1;
        this.camera = {
          'x': 0x0,
          'y': 0x0,
          'viewScale': 0x1,
          'zoom': 0.55
        };
        this.mouse = {
          'worldX': 0x0,
          'worldY': 0x0,
          'clientX': 0x0,
          'clientY': 0x0
        };
        this.removedCells = [];
        this.pelletsFrame = [];
        this.cellsFrame = [];
      }
      ["start"]() {
        this.canvas = document.getElementById("game-display");
        this.ctx = this.canvas.getContext('2d');
        this.minimapCanvas = document.getElementById("minimap-canvas");
        this.minimapCtx = this.minimapCanvas.getContext('2d');
        this.canvas.addEventListener("wheel", _0x4ee4a1 => {
          this.setZoom(_0x4ee4a1);
        }, {
          'passive': true
        });
        window.addEventListener('resize', () => {
          this.setScreenSize();
        }, {
          'passive': true
        });
        this.canvas.addEventListener("mousemove", _0x41a399 => {
          this.mouse.clientX = _0x41a399.clientX;
          this.mouse.clientY = _0x41a399.clientY;
        });
        this.setScreenSize();
        this.loop();
      }
      ["setScreenSize"]() {
        this.canvas.width = window.innerWidth * this.graphicsQualityFactor;
        this.canvas.height = window.innerHeight * this.graphicsQualityFactor;
        this.drawMinimap();
        this.drawLeaderboard();
      }
      ["setZoom"](_0x3c8a35) {
        const _0x3c333e = (_0x3c8a35.wheelDelta ? _0x3c8a35.wheelDelta / 0x78 : -_0x3c8a35.detail / 0x3) || 0x0;
        let _0x33dc39 = this.camera.zoom * 1.1 ** _0x3c333e;
        this.camera.zoom = Math.max(0.0014, Math.min(_0x33dc39, 0x2));
      }
      ['updateZoom']() {
        const _0x2c8d1b = Math.max(this.canvas.width / 0x780, this.canvas.height / 0x438) * this.camera.zoom;
        this.camera.viewScale = (0x9 * this.camera.viewScale + _0x2c8d1b) / 0xa;
      }
      ['updateMouseWorld']() {
        this.mouse.worldX = (this.mouse.clientX - this.canvas.width / 0x2) / this.camera.viewScale + this.camera.x;
        this.mouse.worldY = (this.mouse.clientY - this.canvas.height / 0x2) / this.camera.viewScale + this.camera.y;
        const _0x25dbfc = _0xa630e8.getActiveClient();
        const _0x46c440 = _0xa630e8.getNextClient(_0x25dbfc);
        if (_0x25dbfc) {
          _0x25dbfc.sendCursorPosition(this.mouse.worldX, this.mouse.worldY);
        }
        if (_0x46c440 && !_0x46c440.playing) {
          _0x46c440.sendCursorPosition(this.mouse.worldX, this.mouse.worldY);
        }
      }
      ["setCamera"]() {
        this.ctx.translate(this.canvas.width / 0x2, this.canvas.height / 0x2);
        this.ctx.scale(this.camera.viewScale, this.camera.viewScale);
        this.ctx.translate(-this.camera.x, -this.camera.y);
      }
      ["updateCamera"]() {
        this.updateZoom();
        const _0x283cb3 = _0xa630e8.getActiveClient();
        const _0x5a780c = _0xa630e8.getClients();
        const _0x25e370 = _0xa630e8.totalPlaying();
        let _0x17ce57 = 0x0;
        let _0x4badaa = 0x0;
        _0x5a780c.forEach(_0x4ceb20 => {
          _0x4ceb20.calculatePlayerPositionAndMass();
          if (_0x4ceb20.stores.ownedCells.length) {
            _0x17ce57 += _0x4ceb20.playerPoint.x / _0x25e370;
            _0x4badaa += _0x4ceb20.playerPoint.y / _0x25e370;
          }
        });
        if (_0x25e370 > 0x0) {
          this.camera.x = (this.camera.x + _0x17ce57) / 0x2;
          this.camera.y = (this.camera.y + _0x4badaa) / 0x2;
        }
        if (_0x283cb3 && 0x0 === _0x25e370) {
          this.camera.x = (0x1d * this.camera.x + _0x283cb3.spectatePoint.x) / 0x1e;
          this.camera.y = (0x1d * this.camera.y + _0x283cb3.spectatePoint.y) / 0x1e;
        }
      }
      ['clearCanvas']() {
        this.ctx.fillStyle = "#111111";
        this.ctx.fillRect(0x0, 0x0, this.canvas.width, this.canvas.height);
      }
      ['drawGrid']() {
        this.ctx.save();
        this.ctx.lineWidth = 0x1;
        this.ctx.strokeStyle = "#282828";
        const _0x2ec327 = this.canvas.width / this.camera.viewScale;
        const _0x1d1292 = this.canvas.height / this.camera.viewScale;
        const _0x1de156 = (-this.camera.x + _0x2ec327 / 0x2) % 0x32;
        const _0x1e6339 = (-this.camera.y + _0x1d1292 / 0x2) % 0x32;
        this.ctx.scale(this.camera.viewScale, this.camera.viewScale);
        this.ctx.beginPath();
        for (let _0x3d9566 = _0x1de156; _0x3d9566 < _0x2ec327; _0x3d9566 += 0x32) {
          this.ctx.moveTo(_0x3d9566, 0x0);
          this.ctx.lineTo(_0x3d9566, _0x1d1292);
        }
        for (let _0x593e33 = _0x1e6339; _0x593e33 < _0x1d1292; _0x593e33 += 0x32) {
          this.ctx.moveTo(0x0, _0x593e33);
          this.ctx.lineTo(_0x2ec327, _0x593e33);
        }
        this.ctx.stroke();
        this.ctx.restore();
      }
      ["drawSectors"]() {
        const _0x1e8618 = _0xa630e8.getActiveClient();
        let _0x5b6af8 = {
          'left': -0x1f40,
          'top': -0x1f40,
          'right': 0x1f40,
          'bottom': 0x1f40
        };
        if (_0x1e8618) {
          _0x5b6af8 = _0x1e8618.border;
        }
        const _0x4b11c5 = (_0x5b6af8.right - _0x5b6af8.left) / 0x5;
        const _0x505df1 = (_0x5b6af8.bottom - _0x5b6af8.top) / 0x5;
        this.ctx.strokeStyle = "#222222";
        this.ctx.lineWidth = 0x1a;
        this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
        for (let _0x2d2a39 = 0x0; _0x2d2a39 <= 0x5; _0x2d2a39++) {
          const _0x519e27 = _0x5b6af8.left + _0x2d2a39 * _0x4b11c5;
          this.ctx.beginPath();
          this.ctx.moveTo(_0x519e27, _0x5b6af8.top);
          this.ctx.lineTo(_0x519e27, _0x5b6af8.bottom);
          this.ctx.stroke();
        }
        for (let _0x174c66 = 0x0; _0x174c66 <= 0x5; _0x174c66++) {
          const _0x309ddb = _0x5b6af8.top + _0x174c66 * _0x505df1;
          this.ctx.beginPath();
          this.ctx.moveTo(_0x5b6af8.left, _0x309ddb);
          this.ctx.lineTo(_0x5b6af8.right, _0x309ddb);
          this.ctx.stroke();
        }
        this.ctx.fillStyle = "#222222";
        this.ctx.font = "700 740px ubuntu";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        for (let _0x192cd2 = 0x0; _0x192cd2 < 0x5; _0x192cd2++) {
          for (let _0x48ae28 = 0x0; _0x48ae28 < 0x5; _0x48ae28++) {
            const _0x556817 = String.fromCharCode(0x41 + _0x192cd2) + (_0x48ae28 + 0x1);
            const _0x4faeb2 = _0x5b6af8.left + (_0x48ae28 + 0.5) * _0x4b11c5;
            const _0x2fb577 = _0x5b6af8.top + (_0x192cd2 + 0.5) * _0x505df1;
            this.ctx.fillText(_0x556817, _0x4faeb2, _0x2fb577);
          }
        }
      }
      ["drawMapBorder"]() {
        const _0x2d33a8 = _0xa630e8.getActiveClient();
        let _0x52e4fe = {
          'left': -0x1f40,
          'top': -0x1f40,
          'right': 0x1f40,
          'bottom': 0x1f40
        };
        if (_0x2d33a8) {
          _0x52e4fe = _0x2d33a8.border;
        }
        this.ctx.lineWidth = 0x32;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = "round";
        this.ctx.strokeStyle = '#DDDDDD';
        this.ctx.beginPath();
        this.ctx.moveTo(_0x52e4fe.left - 0x32, _0x52e4fe.bottom + 0x32);
        this.ctx.lineTo(_0x52e4fe.right + 0x32, _0x52e4fe.bottom + 0x32);
        this.ctx.lineTo(_0x52e4fe.right + 0x32, _0x52e4fe.top - 0x32);
        this.ctx.lineTo(_0x52e4fe.left - 0x32, _0x52e4fe.top - 0x32);
        this.ctx.closePath();
        this.ctx.stroke();
      }
      ["drawMinimap"]() {
        const _0x4dd6bc = _0xa630e8.getActiveClient();
        const _0x57913f = this.minimapCanvas;
        const _0x3c3521 = this.minimapCtx;
        const _0x291480 = 0.2 * Math.min(window.innerWidth, window.innerHeight);
        _0x57913f.width = _0x291480;
        _0x57913f.height = _0x291480;
        _0x3c3521.clearRect(0x0, 0x0, _0x57913f.width, _0x57913f.height);
        const _0x125327 = _0x57913f.width / 0x5;
        const _0x3d9177 = _0x57913f.height / 0x5;
        _0x3c3521.strokeStyle = "#DDD";
        _0x3c3521.fillStyle = "#A2A2A2";
        _0x3c3521.textBaseline = "middle";
        _0x3c3521.textAlign = "center";
        const _0x1b18f3 = Math.min(_0x125327, _0x3d9177) / 0x3;
        _0x3c3521.font = "500 " + _0x1b18f3 + "px Ubuntu";
        for (let _0x57c682 = 0x0; _0x57c682 < 0x5; _0x57c682++) {
          const _0x19bcf4 = (_0x57c682 + 0.5) * _0x125327;
          for (let _0x3c267d = 0x0; _0x3c267d < 0x5; _0x3c267d++) {
            const _0x17769a = (_0x3c267d + 0.5) * _0x3d9177;
            _0x3c3521.fillText('ABCDE'[_0x57c682] + "12345"[_0x3c267d], _0x19bcf4, _0x17769a);
          }
        }
        let _0x1da83f = {
          'left': -0x1f40,
          'top': -0x1f40,
          'right': 0x1f40,
          'bottom': 0x1f40
        };
        if (_0x4dd6bc) {
          _0x1da83f = _0x4dd6bc.border;
        }
        const _0x2fda54 = this.camera.x;
        const _0x19ffca = this.camera.y;
        const _0x267d52 = _0x57913f.width / (_0x1da83f.right - _0x1da83f.left);
        const _0x378857 = _0x57913f.height / (_0x1da83f.bottom - _0x1da83f.top);
        const _0x1f52f3 = (_0x2fda54 - _0x1da83f.left) * _0x267d52;
        const _0x4bf864 = (_0x19ffca - _0x1da83f.top) * _0x378857;
        const _0x262129 = Math.floor(_0x1f52f3 / _0x125327);
        const _0x5c9d45 = Math.floor(_0x4bf864 / _0x3d9177);
        _0x3c3521.fillStyle = "rgba(255, 255, 255, 0.13)";
        _0x3c3521.fillRect(_0x262129 * _0x125327, _0x5c9d45 * _0x3d9177, _0x125327, _0x3d9177);
        _0x3c3521.fillStyle = "red";
        _0x3c3521.beginPath();
        _0x3c3521.arc(_0x1f52f3, _0x4bf864, 0x5, 0x0, 0x2 * Math.PI);
        _0x3c3521.fill();
        let _0x510813 = [];
        if (_0x4dd6bc) {
          _0x510813 = _0x4dd6bc.stores.minimap;
        }
        _0x510813.forEach(_0x339e72 => {
          _0x339e72.prevX = _0x339e72.prevX + (_0x339e72.x - _0x339e72.prevX) * 0.01;
          _0x339e72.prevY = _0x339e72.prevY + (_0x339e72.y - _0x339e72.prevY) * 0.01;
          const _0x5f5132 = (_0x339e72.prevX - _0x1da83f.left) * _0x267d52;
          const _0x35a041 = (_0x339e72.prevY - _0x1da83f.top) * _0x378857;
          _0x3c3521.fillStyle = _0x339e72.color || "#00F";
          _0x3c3521.beginPath();
          _0x3c3521.arc(_0x5f5132, _0x35a041, 0x5, 0x0, 0x2 * Math.PI);
          _0x3c3521.fill();
          _0x3c3521.font = "12px Ubuntu";
          _0x3c3521.textAlign = "center";
          _0x3c3521.textBaseline = "bottom";
          _0x3c3521.strokeStyle = '#000';
          _0x3c3521.lineWidth = 0x1;
          _0x3c3521.strokeText(_0x339e72.nickname, _0x5f5132, _0x35a041 - 0x8);
          _0x3c3521.fillStyle = '#FFFFFF';
          _0x3c3521.fillText(_0x339e72.nickname, _0x5f5132, _0x35a041 - 0x8);
        });
      }
      ['drawLeaderboard']() {
        const _0x11a4e6 = _0xa630e8.getActiveClient();
        if (!_0x11a4e6) {
          return;
        }
        const _0x227fca = {
          'items': _0x11a4e6.stores.leaderboard.map(_0x4c33c0 => ({
            'name': _0x4c33c0.nickname,
            'pos': _0x4c33c0.position,
            'mass': _0x4c33c0.totalMass,
            'isMe': _0x4c33c0.isMe
          }))
        };
        const _0x18b203 = document.getElementById('leaderboard-canvas');
        const _0x16162f = _0x18b203.getContext('2d');
        const _0x4304f0 = 0.23 * Math.min(window.innerWidth, window.innerHeight);
        _0x18b203.width = _0x4304f0;
        const _0x43ccf5 = Math.min(0xa, _0x227fca.items.length);
        const _0x438185 = 0x2f + 0x17 * _0x43ccf5;
        const _0x18b2e3 = _0x18b203.width / 0xfa;
        const _0x33ed1d = _0x438185 / (0x20 + 0x17 * _0x43ccf5 + 0xf + 0xf);
        const _0x3db33f = Math.min(_0x18b2e3, _0x33ed1d);
        _0x18b203.height = _0x438185 * _0x3db33f;
        _0x16162f.clearRect(0x0, 0x0, _0x18b203.width, _0x18b203.height);
        _0x16162f.fillStyle = '#FFFFFF';
        _0x16162f.font = "500 " + 0x19 * _0x3db33f + "px Ubuntu";
        const _0x11bcd3 = _0x16162f.measureText("Leaderboard").width;
        _0x16162f.fillText("Leaderboard", (_0x18b203.width - _0x11bcd3) / 0x2, 0x20 * _0x3db33f);
        _0x16162f.font = "500 " + 0x10 * _0x3db33f + "px Ubuntu";
        _0x16162f.textAlign = 'left';
        _0x16162f.textBaseline = 'top';
        _0x227fca.items.slice(0x0, 0xa).forEach((_0xc70d43, _0xb54417) => {
          const _0x550480 = 0x20 * _0x3db33f + 0xf * _0x3db33f + _0xb54417 * (0x17 * _0x3db33f);
          var _0x3a0926;
          _0x16162f.fillStyle = _0xc70d43.isMe ? '#FFD700' : "#FFFFFF";
          _0x3a0926 = _0xc70d43.mass;
          _0x16162f.fillText(" " + _0xc70d43.pos + ".  [" + (_0x3a0926 >= 0x3e8 ? (_0x3a0926 / 0x3e8).toFixed(0x1) + 'k' : _0x3a0926.toString()) + "]  " + _0xc70d43.name, 0xa * _0x3db33f, _0x550480);
        });
      }
      ["drawViewport"](_0x24264a, _0x43b78a, _0x3753d6, _0x23da10, _0x396fbf, _0x4422fc, _0x34ae05, _0x243ce1) {
        _0x24264a.strokeStyle = _0x34ae05;
        _0x24264a.lineWidth = _0x243ce1;
        _0x24264a.fillStyle = 'white';
        _0x24264a.font = "100px sans-serif";
        _0x24264a.textAlign = "end";
        _0x24264a.textBaseline = 'hanging';
        _0x24264a.fillText(_0x43b78a, _0x396fbf, _0x23da10);
        _0x24264a.beginPath();
        _0x24264a.moveTo(_0x3753d6, _0x23da10);
        _0x24264a.lineTo(_0x396fbf, _0x23da10);
        _0x24264a.lineTo(_0x396fbf, _0x4422fc);
        _0x24264a.lineTo(_0x3753d6, _0x4422fc);
        _0x24264a.closePath();
        _0x24264a.stroke();
      }
      ["isInDisplay"](_0x293552, _0x12cf8f, _0x22cbe5) {
        const _0xb008fd = this.canvas.width / 0x2 / this.camera.viewScale;
        const _0x58e9fc = this.canvas.height / 0x2 / this.camera.viewScale;
        const _0x25f069 = this.camera.x;
        const _0x3f0887 = this.camera.y;
        return !(_0x293552 + _0x22cbe5 < _0x25f069 - _0xb008fd || _0x12cf8f + _0x22cbe5 < _0x3f0887 - _0x58e9fc || _0x293552 - _0x22cbe5 > _0x25f069 + _0xb008fd || _0x12cf8f - _0x22cbe5 > _0x3f0887 + _0x58e9fc);
      }
      ["reverseCheckView"](_0x200bab, _0x46c26a, _0x27088c, _0x1f937f) {
        return _0xa630e8.clients.slice(0x0, _0x1f937f).some(_0x102a10 => _0x102a10.isInViewHSLO(_0x200bab, _0x46c26a, _0x27088c));
      }
      ["updateScene"](_0xc209c9) {
        _0xa630e8.clients.forEach((_0x100616, _0xf5167c) => {
          _0x100616.updateBound();
          _0x100616.stores.cellsToRemove.forEach(_0x3ae55f => {
            if (!(_0x3ae55f.flags.isPellet && !_0x2395ab.settings.showPellets)) {
              _0x3ae55f.animate(_0xc209c9);
              this.removedCells.push(_0x3ae55f);
            }
          });
          _0x100616.stores.cellsToRender.forEach(_0x51400e => {
            if (!(_0x51400e.flags.isPellet && !_0x2395ab.settings.showPellets)) {
              _0x51400e.animate(_0xc209c9);
              _0x100616.updateStaticBound(_0x51400e);
              if (!this.reverseCheckView(_0x51400e.targetX, _0x51400e.targetY, _0x51400e.size, _0xf5167c)) {
                if (_0x51400e.flags.isPellet) {
                  this.pelletsFrame.push(_0x51400e);
                }
                if (!_0x51400e.flags.isPellet) {
                  this.cellsFrame.push(_0x51400e);
                }
              }
            }
          });
        });
        this.cellsFrame.sort((_0x352838, _0x27d093) => _0x352838.size == _0x27d093.size ? _0x352838.id - _0x27d093.id : _0x352838.size - _0x27d093.size);
        this.clearCanvas();
        if (_0x2395ab.settings.showGrid) {
          this.drawGrid();
        }
        this.ctx.save();
        this.setCamera();
        if (_0x2395ab.settings.showSectors) {
          this.drawSectors();
        }
        this.drawMapBorder();
        this.removedCells.forEach(_0x19d535 => {
          if (this.isInDisplay(_0x19d535.targetX, _0x19d535.targetY, _0x19d535.size)) {
            _0x19d535.draw(this.ctx);
          }
        });
        this.pelletsFrame.forEach(_0x282a1e => {
          _0x282a1e.draw(this.ctx);
        });
        this.cellsFrame.forEach(_0x2626b1 => {
          if (this.isInDisplay(_0x2626b1.targetX, _0x2626b1.targetY, _0x2626b1.size)) {
            _0x2626b1.draw(this.ctx);
          }
        });
        this.removedCells = [];
        this.pelletsFrame = [];
        this.cellsFrame = [];
        if (_0x2395ab.settings.showDebug) {
          _0xa630e8.clients.forEach(_0xc538d3 => {
            this.drawViewport(this.ctx, _0xc538d3.clientType + " viewport", _0xc538d3.bound.left, _0xc538d3.bound.top, _0xc538d3.bound.right, _0xc538d3.bound.bottom, "parent" === _0xc538d3.clientType ? "red" : "blue", 0xf);
          });
        }
        this.ctx.restore();
        this.drawMinimap();
        this.drawLeaderboard();
      }
      ["loop"]() {
        const _0x5a4a82 = Date.now();
        this.updateMouseWorld();
        this.updateCamera();
        this.updateScene(_0x5a4a82);
        requestAnimationFrame(() => this.loop());
      }
    }();
    const _0x525553 = new class {
      constructor() {
        this.downloads = new Map();
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.gifCanvas = document.createElement("canvas");
        this.gifCtx = this.gifCanvas.getContext('2d');
        this.initialize();
      }
      ["initialize"]() {
        this.canvas.width = 0x200;
        this.canvas.height = 0x200;
        this.canvas.style.imageRendering = 'pixelated';
        this.canvas.imageSmoothingEnabled = false;
        this.canvas.imageSmoothingQuality = "low";
        this.ctx.beginPath();
        this.ctx.arc(0x100, 0x100, 0x100, 0x0, 0x2 * Math.PI, true);
        this.ctx.closePath();
        this.ctx.clip();
        this.gifCanvas.width = 0x200;
        this.gifCanvas.height = 0x200;
        this.gifCanvas.style.imageRendering = "pixelated";
        this.gifCtx.imageSmoothingEnabled = false;
        this.gifCtx.imageSmoothingQuality = 'low';
      }
      ["setOrGetSkin"](_0x54285e) {
        if ("no-skin" === _0x54285e) {
          return false;
        }
        if (!_0x54285e) {
          return false;
        }
        const _0x1e7687 = this.downloads.get(_0x54285e);
        return "downloading" !== _0x1e7687 && "error" !== _0x1e7687 && (undefined !== _0x1e7687 ? _0x1e7687 : void (_0x54285e.endsWith('.gif') ? this.downloadGif(_0x54285e) : this.download(_0x54285e)));
      }
      ["download"](_0x3b31fe) {
        this.downloads.set(_0x3b31fe, "downloading");
        const _0x4977c7 = new Image();
        _0x4977c7.crossOrigin = "anonymous";
        _0x4977c7.onload = () => {
          this.ctx.clearRect(0x0, 0x0, 0x200, 0x200);
          this.ctx.drawImage(_0x4977c7, 0x0, 0x0, 0x200, 0x200);
          const _0x49ad85 = this.canvas.toDataURL();
          _0x4977c7.onload = null;
          _0x4977c7.src = _0x49ad85;
          this.downloads.set(_0x3b31fe, _0x4977c7);
          this.log("Successfully added skin:", _0x3b31fe);
        };
        _0x4977c7.onerror = () => {
          this.downloads.set(_0x3b31fe, "error");
        };
        _0x4977c7.src = _0x3b31fe;
      }
      ["downloadGif"](_0x240bfc) {
        this.downloads.set(_0x240bfc, 'downloading');
        try {
          gifler(_0x240bfc).get(_0xd674ea => {
            _0xd674ea.animateInCanvas(this.gifCanvas);
            this.downloads.set(_0x240bfc, this.gifCanvas);
            this.log("Successfully added GIF skin:", _0x240bfc);
          }, _0x3a4f8b => {
            this.downloads.set(_0x240bfc, 'error');
          });
        } catch (_0x196511) {
          this.downloads.set(_0x240bfc, 'error');
          this.log("Unexpected error during GIF loading:", _0x240bfc, _0x196511);
        }
      }
      ["log"](_0x2d47c4, ..._0x4d13f4) {
        console.log("%c[Skins]", "color: rgb(176, 39, 69); font-weight: bold;", _0x2d47c4, ..._0x4d13f4);
      }
    }();
    const _0x337cc2 = new class {
      constructor() {
        this.fontFamily = "Ubuntu";
        this.fontWeight = "600";
        this.textColor = "#FFFFFF";
        this.textStrokeColor = '#000000';
        this.nickCaches = new Map();
        this.massCaches = new Map();
        this.maxCacheLife = 0x3e8;
        this.massUpdateInterval = 0x1f4;
        this.quality = 0.38;
        this.canvasPool = [];
        this.nickShadowCtx = this.createShadowContext();
        this.massShadowCtx = this.createShadowContext();
        this.initializePool(0x64);
        this.startCleaner();
      }
      ["drawNickname"](_0x2de972, _0x3b6903, _0x92cf7a, _0x80e999) {
        if (!_0x2de972.nickname) {
          return;
        }
        const _0x48b407 = Date.now();
        const _0x4c48b7 = _0x2de972.targetSize * _0x3b6903 * _0x92cf7a;
        if (_0x4c48b7 < 0x14) {
          return;
        }
        const _0xa7c529 = this.nickCaches.get(_0x2de972.nickname) || this.createNickCache(_0x2de972.nickname);
        _0xa7c529.lastUsedAt = _0x48b407;
        const _0x4ca4d3 = Math.min(Math.floor(_0x4c48b7 / 0x32), 0x7);
        const _0x13e7f4 = _0xa7c529.level[_0x4ca4d3];
        if (_0x13e7f4) {
          return _0x13e7f4;
        }
        const _0x422636 = this.getNewCanvas();
        const _0x6275a = _0x422636.getContext('2d');
        const _0x51dab8 = 0x32 * (_0x4ca4d3 + 0x1) * this.quality;
        const _0x79a451 = _0x80e999 * (_0x51dab8 / 0xa);
        const _0x4a6a1a = 0x14 * _0x80e999;
        _0x422636.height = _0x51dab8 + 0.4 * _0x79a451 + 0.7 * _0x51dab8;
        _0x422636.width = Math.floor(this.getNickWidth(_0x2de972.nickname, _0x51dab8) + _0x79a451);
        _0x422636.originWidth = (this.getNickWidth(_0x2de972.nickname, 0xc8) + _0x4a6a1a) / 0x28a;
        _0x422636.originHeight = _0x422636.height * (_0x422636.originWidth / _0x422636.width);
        _0x6275a.font = this.fontWeight + " " + _0x51dab8 + "px " + this.fontFamily;
        _0x6275a.textBaseline = "middle";
        _0x6275a.textAlign = "center";
        _0x6275a.imageSmoothingEnabled = false;
        _0x422636.style.imageRendering = "pixelated";
        _0x6275a.strokeStyle = this.textStrokeColor;
        _0x6275a.lineWidth = _0x79a451 * _0x80e999;
        _0x6275a.lineJoin = "miter";
        _0x6275a.miterLimit = 0x0;
        _0x6275a.strokeText(_0x2de972.nickname, _0x422636.width / 0x2, _0x422636.height / 0x2);
        _0x6275a.fillStyle = this.textColor;
        _0x6275a.fillText(_0x2de972.nickname, _0x422636.width / 0x2, _0x422636.height / 0x2);
        return _0xa7c529.level[_0x4ca4d3] = _0x422636;
      }
      ["drawMass"](_0x151c6c, _0x281df9, _0x2cc7ca, _0x1faa62) {
        const _0x85234e = Date.now();
        const _0x1954e2 = _0x151c6c.targetSize * _0x281df9 * _0x2cc7ca;
        if (_0x1954e2 < 0x14) {
          return;
        }
        const _0x263292 = this.massCaches.get(_0x151c6c.id) || this.createMassCache(_0x151c6c.id);
        _0x263292.lastUsedAt = _0x85234e;
        const _0x5e8971 = Math.min(Math.floor(_0x1954e2 / 0x32), 0x7);
        let _0x2334ff = _0x151c6c.mass > 0x3e7 ? Math.floor(_0x151c6c.mass / 0x64) / 0xa + 'k' : _0x151c6c.mass;
        _0x263292.fontSize = 0x32 * (_0x5e8971 + 0x1) * this.quality;
        const _0x3b3ee5 = _0x85234e - _0x263292.lastUpdateAt;
        if (_0x263292.needsRedraw || _0x3b3ee5 > this.massUpdateInterval) {
          _0x263292.mass = _0x2334ff;
        }
        if (!_0x263292.canvas) {
          _0x263292.canvas = this.getNewCanvas();
          _0x263292.ctx = _0x263292.canvas.getContext('2d');
        }
        if (_0x263292.needsRedraw) {
          _0x263292.needsRedraw = false;
          const _0x567a10 = _0x263292.canvas;
          const _0x1566ba = _0x263292.ctx;
          const _0x1255dc = _0x1faa62 * (_0x263292.fontSize / 0xa);
          const _0x420d36 = _0x1faa62 * 20;
          _0x567a10.height = _0x263292.fontSize + 0.4 * _0x1255dc + 0.4 * _0x263292.fontSize;
          _0x567a10.width = Math.floor(this.getMassWidth(_0x263292.mass, _0x263292.fontSize) + _0x1255dc);
          _0x567a10.originWidth = (this.getMassWidth(_0x263292.mass, 0xc8) + _0x420d36) / 0x28a;
          _0x567a10.originHeight = _0x567a10.height * (_0x567a10.originWidth / _0x567a10.width);
          _0x1566ba.font = this.fontWeight + " " + _0x263292.fontSize + "px " + this.fontFamily;
          _0x1566ba.textBaseline = "middle";
          _0x1566ba.textAlign = "center";
          _0x1566ba.strokeStyle = this.textStrokeColor;
          _0x1566ba.lineWidth = _0x1255dc;
          _0x1566ba.lineJoin = "miter";
          _0x1566ba.miterLimit = 0x0;
          _0x1566ba.strokeText(_0x263292.mass, _0x567a10.width / 0x2, _0x567a10.height / 0x2);
          _0x1566ba.fillStyle = this.textColor;
          _0x1566ba.fillText(_0x263292.mass, _0x567a10.width / 0x2, _0x567a10.height / 0x2);
          _0x263292.lastUpdateAt = _0x85234e;
        }
        return _0x263292.canvas;
      }
      ['createNickCache'](_0x3c9ae1) {
        const _0xa50eac = {
          'level': [null, null, null, null, null, null, null, null],
          'lastUsedAt': Date.now()
        };
        this.nickCaches.set(_0x3c9ae1, _0xa50eac);
        return _0xa50eac;
      }
      ["createMassCache"](_0x63d416) {
        const _0x39603d = Date.now();
        const _0x2a08c7 = {
          'lastUsedAt': _0x39603d,
          'lastUpdateAt': _0x39603d,
          'canvas': null,
          'ctx': null,
          'needsRedraw': true,
          '_mass': 0x0,
          '_fontSize': 0x5,
          'lastMass': 0x0,
          set 'mass'(_0x2b5c5b) {
            this._mass = _0x2b5c5b;
            if (this._mass !== this.lastMass) {
              this.lastMass = this._mass;
              this.needsRedraw = true;
            }
          },
          get 'mass'() {
            return this._mass;
          },
          set 'fontSize'(_0x34a463) {
            const _0x359227 = _0x34a463 !== this._fontSize;
            if (_0x34a463 > 0x5 && (_0x359227 && Math.abs(_0x34a463 - this._fontSize) > 0.8 || Math.abs(this._fontSize - _0x34a463) > 0.8)) {
              this._fontSize = _0x34a463;
              this.needsRedraw = true;
            }
          },
          get 'fontSize'() {
            return this._fontSize;
          }
        };
        this.massCaches.set(_0x63d416, _0x2a08c7);
        return _0x2a08c7;
      }
      ["createShadowContext"]() {
        const _0x30b50c = document.createElement("canvas");
        const _0x4c75ab = _0x30b50c.getContext('2d');
        _0x4c75ab.font = this.fontWeight + " 25px " + this.fontFamily;
        _0x4c75ab.imageSmoothingEnabled = false;
        _0x4c75ab.imageSmoothingQuality = "low";
        _0x30b50c.style.imageRendering = "pixelated";
        return _0x4c75ab;
      }
      ['getNickWidth'](_0x1e1958, _0x1861e8) {
        return this.nickShadowCtx.measureText(_0x1e1958).width * _0x1861e8 / 0x19;
      }
      ["getMassWidth"](_0x2b2cf4, _0xf666fa) {
        return this.massShadowCtx.measureText(_0x2b2cf4).width * _0xf666fa / 0x19;
      }
      ["getNewCanvas"]() {
        return this.canvasPool.shift() || document.createElement("canvas");
      }
      ['cleaner']() {
        const _0x5c6a64 = Date.now();
        this.cleanNickCaches(_0x5c6a64);
        this.cleanMassCaches(_0x5c6a64);
      }
      ["cleanNickCaches"](_0x2535b2) {
        this.nickCaches.forEach((_0x12b22b, _0x35039d) => {
          if (_0x2535b2 - _0x12b22b.lastUsedAt > this.maxCacheLife) {
            this.nickCaches['delete'](_0x35039d);
            _0x12b22b.level.forEach(_0x5bba60 => _0x5bba60 && this.recycleCanvas(_0x5bba60));
          }
        });
      }
      ["cleanMassCaches"](_0x5559ef) {
        this.massCaches.forEach((_0xe274eb, _0x8773f4) => {
          if (_0x5559ef - _0xe274eb.lastUsedAt > this.maxCacheLife) {
            this.massCaches['delete'](_0x8773f4);
            if (_0xe274eb.canvas) {
              this.recycleCanvas(_0xe274eb.canvas);
            }
          }
        });
      }
      ["recycleCanvas"](_0xb2fbee) {
        if (_0xb2fbee && this.canvasPool.length < 0x32) {
          _0xb2fbee.width = 0x0;
          this.canvasPool.push(_0xb2fbee);
        }
      }
      ["initializePool"](_0x486097) {
        for (let _0x3a9892 = 0x0; _0x3a9892 < _0x486097; _0x3a9892++) {
          this.canvasPool.push(document.createElement("canvas"));
        }
      }
      ["startCleaner"]() {
        setInterval(() => this.cleaner(), 0x1f4);
      }
    }();
    const _0x584fcf = new Image();
    _0x584fcf.src = "../../assets/images/Virus.webp";
    _0x584fcf.width = 0x100;
    _0x584fcf.height = 0x100;
    class _0x270f21 {
      constructor() {
        this.client = null;
        this.playerID = null;
        this.id = null;
        this.x = null;
        this.y = null;
        this.size = null;
        this.color = null;
        this.sColor = null;
        this.skin = null;
        this.nickname = null;
        this.targetX = null;
        this.targetY = null;
        this.targetSize = null;
        this.killedBy = null;
        this.isMe = false;
        this.drawCompleted = false;
        this.isMarkedForRemoval = false;
        this.born = Date.now();
        this.lastUpdated = Date.now();
        this.globalAlpha = 0x1;
      }
      get ["mass"]() {
        return ~~(this.size * this.size / 0x64);
      }
      ['initialize'](_0x2257bc, _0x97bf1d, _0x33e338, _0x47e09f, _0x443a84, _0x5ae1a0, _0x501202, _0x1deab7, _0x3a17f9, _0x1895e8) {
        this.client = _0x2257bc;
        this.playerID = _0x97bf1d;
        this.id = _0x33e338;
        this.x = _0x47e09f;
        this.y = _0x443a84;
        this.size = _0x5ae1a0;
        this.color = _0x501202;
        this.sColor = _0x1deab7;
        this.skin = _0x3a17f9;
        this.nickname = _0x1895e8;
        this.targetX = _0x47e09f;
        this.targetY = _0x443a84;
        this.targetSize = _0x5ae1a0;
        this.flags = {
          'isPellet': false,
          'isEject': false,
          'isVirus': false,
          'isMotherCell': false
        };
        this.isMarkedForRemoval = false;
        this.drawCompleted = false;
        this.lastUpdated = Date.now();
      }
      ["setFlags"](_0x486a90 = false, _0x4fb304 = false, _0x3f9e26 = false, _0x568e37 = false) {
        this.flags.isPellet = _0x486a90;
        this.flags.isEject = _0x4fb304;
        this.flags.isVirus = _0x3f9e26;
        this.flags.isMotherCell = _0x568e37;
      }
      ['setKiller'](_0x3cbd24, _0x233c8b) {
        this.killedBy = {
          'x': _0x3cbd24,
          'y': _0x233c8b
        };
        this.lastUpdated = Date.now();
      }
      ['update'](_0x7f2ea7, _0x321334, _0x268a66) {
        this.targetX = _0x7f2ea7;
        this.targetY = _0x321334;
        this.targetSize = _0x268a66;
        this.lastUpdated = Date.now();
      }
      ["animate"](_0x5664e5) {
        let _0xf8602b = (_0x5664e5 - this.lastUpdated) / _0x2395ab.settings.animationDelay;
        _0xf8602b = _0xf8602b < 0x0 ? 0x0 : _0xf8602b > 0x1 ? 0x1 : _0xf8602b;
        if (this.killedBy) {
          this.targetX = this.killedBy.x;
          this.targetY = this.killedBy.y;
        }
        this.x += (this.targetX - this.x) * _0xf8602b;
        this.y += (this.targetY - this.y) * _0xf8602b;
        this.size += (this.targetSize - this.size) * _0xf8602b;
        this.globalAlpha = Math.min(Date.now() - this.born, 0x78) / 0x78;
        if (this.isMarkedForRemoval) {
          this.alphaOnRemoval = Math.max(0x78 - _0x5664e5 + this.lastUpdated, 0x0) / 0x78;
          return void (0x0 === this.alphaOnRemoval && this.client.stores.cellsToRemove.remove(this));
        }
        this.lastUpdated = _0x5664e5;
      }
      ["destroy"]() {
        this.client.stores.cellsToRender.remove(this);
        this.client.stores.ownedIDs.remove(this.id);
        this.client.stores.ownedCells.remove(this);
        delete this.client.stores.cellsByID[this.id];
        this.isMarkedForRemoval = true;
        if (this.drawCompleted) {
          this.client.stores.cellsToRemove.push(this);
        }
      }
      ['draw'](_0x253428) {
        _0x253428.save();
        if (this.isMarkedForRemoval) {
          _0x253428.globalAlpha = this.alphaOnRemoval;
        } else {
          _0x253428.globalAlpha = this.globalAlpha;
        }
        if (this.flags.isVirus) {
          this.drawVirus(_0x253428);
        } else {
          this.drawCell(_0x253428);
        }
        _0x253428.restore();
        this.drawCompleted = true;
      }
      ["drawCell"](_0x3c496a) {
        const _0x29160e = _0xa630e8.totalPlaying();
        const _0x59894d = _0xa630e8.getActiveClient();
        const _0x578b35 = _0xa630e8.findClientOrigin(this.playerID, null);
        if (!this.flags.isPellet) {
          _0x3c496a.globalAlpha *= _0x2395ab.settings.cellTransparency;
        }
        _0x3c496a.fillStyle = this.color;
        _0x3c496a.beginPath();
        _0x3c496a.arc(this.x, this.y, this.size, 0x0, 0x2 * Math.PI, false);
        _0x3c496a.fill();
        if (this.isMarkedForRemoval) {
          _0x3c496a.globalAlpha = this.alphaOnRemoval;
        } else {
          _0x3c496a.globalAlpha = this.globalAlpha;
        }
        if (!(this.flags.isPellet && this.flags.isEject && this.flags.isVirus)) {
          if (_0x578b35 && 'parent' === _0x578b35.clientType) {
            if (_0x2395ab.playerInfo.customSkin1) {
              this.skin = _0x2395ab.playerInfo.customSkin1;
            }
          } else if (_0x578b35 && "child" === _0x578b35.clientType) {
            this.skin = _0x2395ab.playerInfo.customSkin2;
          }
          if (this.skin && _0x2395ab.settings.showSkins) {
            this.drawSkin(_0x3c496a);
          }
          if (_0x578b35 && _0x29160e > 0x1 && !this.flags.isPellet && !this.flags.isEject && !this.flags.isVirus) {
            const _0x433719 = _0x578b35.multiboxID === _0x59894d.multiboxID;
            _0x3c496a.lineWidth = this.size / 0x64 * 0xf;
            _0x3c496a.strokeStyle = _0x433719 ? '#00B9E8' : "#FFFFFF";
            const _0x486576 = this.size / 0x64 * 0x64 - _0x3c496a.lineWidth / 0x2;
            _0x3c496a.beginPath();
            _0x3c496a.arc(this.x, this.y, _0x486576, 0x2 * Math.PI, false);
            _0x3c496a.closePath();
            _0x3c496a.stroke();
          }
          this.drawText(_0x3c496a);
        }
      }
      ["drawVirus"](_0x5cb68d) {
        if (!_0x584fcf.complete || 0x0 === _0x584fcf.naturalWidth) {
          return;
        }
        const _0x21653d = this.size * _0x584fcf.width / 0x64;
        _0x5cb68d.drawImage(_0x584fcf, this.x - _0x21653d / 0x2, this.y - _0x21653d / 0x2, _0x21653d, _0x21653d);
      }
      ["drawSkin"](_0x3e8565) {
        _0x3e8565.globalAlpha *= _0x2395ab.settings.cellTransparency;
        const _0x37a009 = 0x2 * this.size * 1.002;
        const _0x3f4ec3 = _0x525553.setOrGetSkin(this.skin);
        if (_0x3f4ec3) {
          if (this.skin && this.skin.endsWith(".gif")) {
            _0x3e8565.save();
            _0x3e8565.clip();
            _0x3e8565.drawImage(_0x3f4ec3, this.x - _0x37a009 / 0x2, this.y - _0x37a009 / 0x2, _0x37a009, _0x37a009);
            _0x3e8565.restore();
          } else {
            _0x3e8565.drawImage(_0x3f4ec3, this.x - _0x37a009 / 0x2, this.y - _0x37a009 / 0x2, _0x37a009, _0x37a009);
          }
        }
        if (this.isMarkedForRemoval) {
          _0x3e8565.globalAlpha = this.alphaOnRemoval;
        } else {
          _0x3e8565.globalAlpha = this.globalAlpha;
        }
      }
      ["drawText"](_0xa431b0) {
        let _0x5103b9 = 0.9;
        if (_0x2395ab.settings.showNicknames) {
          const _0x108c9d = _0x337cc2.drawNickname(this, _0x518936.camera.viewScale, _0x5103b9, 0x1);
          if (_0x108c9d) {
            const _0x5b1fdb = _0x108c9d.originWidth * this.size * _0x5103b9;
            const _0x1a9e75 = _0x108c9d.originHeight * this.size * _0x5103b9;
            _0xa431b0.drawImage(_0x108c9d, this.x - _0x5b1fdb / 0x2, this.y - _0x1a9e75 / 0x2, _0x5b1fdb, _0x1a9e75);
          }
        }
        if (_0x2395ab.settings.showMass) {
          _0x5103b9 = 0.7;
          const _0x55fa31 = _0x337cc2.drawMass(this, _0x518936.camera.viewScale, _0x5103b9, 0x1);
          if (_0x55fa31) {
            const _0x398a1e = _0x55fa31.originWidth * this.size * _0x5103b9;
            const _0x474ab8 = _0x55fa31.originHeight * this.size * _0x5103b9;
            const _0x301d68 = this.size / 0x5 + this.y;
            _0xa431b0.drawImage(_0x55fa31, this.x - _0x398a1e / 0x2, _0x301d68, _0x398a1e, _0x474ab8);
          }
        }
      }
    }
    class _0x2275aa extends _0x21afee {
      constructor(_0x2a1183) {
        super();
        this.clientType = _0x2a1183;
        this.clientID = null;
        this.multiboxID = null;
        this.clientReady = false;
        this.handshakeCompleted = false;
        this.serverUrl = null;
        this.websocket = null;
        this.border = new _0x54a10e();
        this.stores = {
          'clientsByID': {},
          'playersByID': {},
          'cellsByID': {},
          'cellsToRender': [],
          'cellsToRemove': [],
          'ownedIDs': [],
          'ownedCells': [],
          'leaderboard': [],
          'minimap': []
        };
        this.bound = {
          'left': 0x0,
          'top': 0x0,
          'right': 0x0,
          'bottom': 0x0
        };
        this.spectating = true;
        this.playing = false;
        this.spectatePoint = {
          'x': 0x0,
          'y': 0x0
        };
        this.playerPoint = {
          'x': 0x0,
          'y': 0x0
        };
      }
      get ["isConnected"]() {
        return this.websocket && this.websocket.readyState === WebSocket.OPEN || false;
      }
      ["cleanUp"](_0x2af333) {
        if (_0x2af333) {
          this.close();
        }
        Object.values(this.stores.cellsByID).forEach(_0x333967 => _0x333967.destroy());
        this.border = new _0x54a10e();
        this.stores.clientsByID = {};
        this.stores.playersByID = {};
        this.stores.leaderboard = [];
        this.stores.minimap = [];
        this.clientID = null;
        this.multiboxID = null;
        this.clientReady = false;
        this.handshakeCompleted = false;
        this.spectating = true;
        this.playing = false;
        this.spectatePoint = {
          'x': 0x0,
          'y': 0x0
        };
        this.playerPoint = {
          'x': 0x0,
          'y': 0x0
        };
      }
      ['connect'](_0xd6c5cb) {
        this.cleanUp(!!this.isConnected);
        this.serverUrl = _0xd6c5cb;
        this.websocket = new _0x109239(_0xd6c5cb);
        this.websocket.onopen = this.onOpen.bind(this);
        this.websocket.onmessage = this.onMessage.bind(this);
        this.websocket.onclose = this.onClose.bind(this);
        this.websocket.onerror = this.onError.bind(this);
      }
      ["onOpen"]() {
        this.log("Connection is open!");
        this.emit("open");
      }
      ["onMessage"](_0x275afd) {
        const _0xd272f = new _0x20616e(_0x275afd);
        switch (_0xd272f.readUInt8()) {
          case 0x0:
            const _0x3fb407 = _0xd272f.readUInt32();
            this.border.update(0x0, 0x0, _0x3fb407, _0x3fb407);
            this.log("World size: " + _0x3fb407 + " x " + _0x3fb407);
            const _0x396b7d = _0xd272f.readUInt16();
            this.clientID = _0x396b7d;
            let _0x2f0e94 = _0xd272f.readUInt8();
            for (; _0x2f0e94--;) {
              const _0x143fdc = _0xd272f.readUInt16();
              this.stores.ownedIDs.push(_0x143fdc);
              this.log("Added unit: " + _0x143fdc);
              if (0x1 === this.stores.ownedIDs.length) {
                this.multiboxID = _0x143fdc;
                this.log("Active unit set: " + _0x143fdc);
              }
            }
            this.clientReady = true;
            setTimeout(() => this.emit('clientReady', this), 0x1f4);
            break;
          case 0x1:
            const _0x33169a = _0xd272f.readUInt32();
            this.border.update(0x0, 0x0, _0x33169a, _0x33169a);
            this.log("World size: " + _0x33169a + " x " + _0x33169a);
            break;
          case 0x5:
            const _0x4a7451 = _0xd272f.readUInt32() / 0x3e8;
            Math.floor(_0x4a7451 / 0xe10);
            Math.floor(_0x4a7451 % 0xe10 / 0x3c);
            Math.floor(_0x4a7451 % 0x3c);
            break;
          case 0x7:
            _0xd272f.readUInt8();
            const _0x2293cb = _0xd272f.readUInt8();
            this.log("Request captcha type (" + _0x2293cb + ')');
            break;
          case 0x8:
            this.sendAuth();
            break;
          case 0xa:
            let _0x4977bc = _0xd272f.readUInt8();
            for (; _0x4977bc--;) {
              const _0x1d004a = _0xd272f.readUInt16();
              const _0x59a604 = Boolean(_0xd272f.readUInt8());
              const _0x4a2208 = _0xd272f.readString16();
              const _0xe5cb17 = _0xd272f.readString16();
              const _0xaae51e = _0xd272f.readUInt8();
              const _0xa20c0 = _0xd272f.readUInt8();
              const _0x2eaa86 = _0xd272f.readUInt8();
              const _0x228560 = new _0xb0820e(_0xaae51e, _0xa20c0, _0x2eaa86);
              const _0x18e12b = Boolean(_0xd272f.readUInt8());
              const _0x2da8dd = {
                'clientID': _0x1d004a,
                'isBot': _0x59a604,
                'nickname': _0x4a2208,
                'team': _0xe5cb17,
                'color': _0x228560.value,
                'hasReservedName': _0x18e12b
              };
              this.stores.clientsByID[_0x1d004a] = _0x2da8dd;
            }
            let _0x4a1a94 = _0xd272f.readUInt8();
            for (; _0x4a1a94--;) {
              const _0x50b781 = _0xd272f.readUInt16();
              const _0x13e179 = _0xd272f.readUInt8();
              let _0x2adbd9 = null;
              let _0x1b210a = null;
              let _0x252673 = null;
              let _0xe7a4d6 = false;
              if (0x1 & _0x13e179) {
                _0x2adbd9 = _0xd272f.readString16();
              }
              if (0x2 & _0x13e179) {
                _0x1b210a = _0xd272f.readString16();
              }
              if (0x4 & _0x13e179) {
                const _0x329646 = _0xd272f.readUInt8();
                const _0x52c074 = _0xd272f.readUInt8();
                const _0x3006ce = _0xd272f.readUInt8();
                _0x252673 = new _0xb0820e(_0x329646, _0x52c074, _0x3006ce);
                _0xe7a4d6 = Boolean(_0xd272f.readUInt8());
              }
              const _0x320897 = this.stores.clientsByID[_0x50b781] || {};
              if (_0x2adbd9) {
                _0x320897.nickname = _0x2adbd9;
              }
              if (_0x1b210a) {
                _0x320897.team = _0x1b210a;
              }
              if (_0x252673) {
                _0x320897.color = _0x252673.value;
              }
              if (_0xe7a4d6) {
                _0x320897.hasReservedName = _0xe7a4d6;
              }
            }
            let _0x418104 = _0xd272f.readUInt8();
            for (; _0x418104--;) {
              const _0x1491f3 = _0xd272f.readUInt16();
              delete this.stores.clientsByID[_0x1491f3];
            }
            break;
          case 0xb:
            let _0x1a5316 = _0xd272f.readUInt8();
            for (; _0x1a5316--;) {
              const _0x9e7b3d = _0xd272f.readUInt16();
              const _0x83ba86 = _0xd272f.readUInt16();
              const _0x377653 = _0xd272f.readUInt8();
              const _0x3a3b25 = _0xd272f.readUInt8();
              const _0x1b7fc2 = _0xd272f.readUInt8();
              let _0x11deb9 = _0xd272f.readString8() || null;
              const _0x411b08 = this.stores.clientsByID[_0x83ba86];
              this.stores.ownedIDs.includes(_0x83ba86);
              const _0x428bee = {
                'playerID': _0x9e7b3d,
                'client': _0x411b08,
                'color': new _0xb0820e(_0x377653, _0x3a3b25, _0x1b7fc2).value,
                'skin': _0x11deb9
              };
              this.stores.playersByID[_0x9e7b3d] = _0x428bee;
            }
            let _0x689009 = _0xd272f.readUInt8();
            for (; _0x689009--;) {
              const _0x3b6124 = _0xd272f.readUInt16();
              const _0x561f4f = _0xd272f.readUInt8();
              const _0x178eec = this.stores.playersByID[_0x3b6124] || {};
              if (0x1 & _0x561f4f) {
                const _0xe06463 = _0xd272f.readUInt8();
                const _0x1edb30 = _0xd272f.readUInt8();
                const _0x4fdcf9 = _0xd272f.readUInt8();
                _0x178eec.color = new _0xb0820e(_0xe06463, _0x1edb30, _0x4fdcf9).value;
              }
              if (0x2 & _0x561f4f) {
                const _0x12ab69 = _0xd272f.readString8() || null;
                _0x178eec.skin = _0x12ab69;
              }
            }
            let _0x7d0631 = _0xd272f.readUInt8();
            for (; _0x7d0631--;) {
              const _0xe2e02a = _0xd272f.readUInt16();
              this.stores.playersByID[_0xe2e02a];
              delete this.stores.playersByID[_0xe2e02a];
            }
            break;
          case 0x14:
            let _0xbaf0 = _0xd272f.readUInt16();
            for (; _0xbaf0--;) {
              const _0x1af834 = _0xd272f.readUInt32();
              const _0x5c6e26 = _0xd272f.readUInt32();
              const _0x21f6ff = this.stores.cellsByID[_0x1af834];
              const _0x27e0d8 = this.stores.cellsByID[_0x5c6e26];
              const _0x485623 = this.stores.ownedIDs.includes(_0x27e0d8.playerID);
              if (_0x27e0d8) {
                if (_0x21f6ff) {
                  _0x27e0d8.setKiller(_0x21f6ff.x, _0x21f6ff.y);
                }
                _0x27e0d8.destroy();
              }
              if (_0x485623 && 0x0 === this.stores.ownedCells.length) {
                this.playing = false;
                this.spectating = true;
                this.emit('playerDied');
              }
            }
            let _0x59acc9 = _0xd272f.readUInt16();
            for (; _0x59acc9--;) {
              const _0x5efa40 = _0xd272f.readUInt32();
              const _0x1227d9 = _0xd272f.readInt32();
              const _0x2e40fa = _0xd272f.readInt32();
              const _0x260a94 = _0xd272f.readUInt16();
              const _0x4fb784 = _0xd272f.readUInt8();
              let _0x24388c = null;
              let _0x375c22 = null;
              let _0x236c6f = null;
              let _0x5300f6 = null;
              let _0x43315f = null;
              let _0x5d313f = false;
              let _0x3b5d5f = false;
              let _0x33c05a = false;
              if (0x0 === _0x4fb784) {
                _0x24388c = _0xd272f.readUInt16();
                const _0x36d788 = this.stores.playersByID[_0x24388c];
                const _0x4fe8a2 = _0xd272f.readUInt8();
                const _0x1424b3 = _0xd272f.readUInt8();
                const _0x278e9e = _0xd272f.readUInt8();
                const _0x17ac82 = new _0xb0820e(_0x4fe8a2, _0x1424b3, _0x278e9e);
                _0x375c22 = _0x17ac82.value;
                _0x236c6f = _0x17ac82.darkerValue;
                _0x43315f = _0x36d788?.["client"]["nickname"];
                _0x5300f6 = _0x36d788?.["skin"];
              }
              if (0x1 === _0x4fb784) {
                _0x33c05a = true;
                _0x375c22 = "#00CD21";
                _0x236c6f = "#009F1A";
              }
              if (0x2 === _0x4fb784) {
                _0x3b5d5f = true;
                const _0x10ea0b = _0xd272f.readUInt8();
                const _0x551ff1 = _0xd272f.readUInt8();
                const _0x35e0fd = _0xd272f.readUInt8();
                const _0x228030 = new _0xb0820e(_0x10ea0b, _0x551ff1, _0x35e0fd);
                _0x375c22 = _0x228030.value;
                _0x236c6f = _0x228030.darkerValue;
              }
              if (0x3 === _0x4fb784) {
                _0x5d313f = true;
                _0x375c22 = _0xb0820e.randomColor();
              }
              if (0x5 === _0x4fb784) {
                const _0x59b655 = _0xd272f.readUInt16();
                const _0x59535b = new Uint8Array(_0x59b655);
                for (let _0x2ee426 = 0x0; _0x2ee426 < _0x59b655; _0x2ee426++) {
                  _0x59535b[_0x2ee426] = _0xd272f.readUInt8();
                }
                console.log(_0x59535b);
                this.websocket.senpaModuleAllocArray(_0x59535b);
              }
              if (0x13a0 == _0x5efa40) {
                continue;
              }
              const _0x156910 = this.stores.ownedIDs.includes(_0x24388c);
              const _0x10f482 = new _0x270f21();
              _0x10f482.initialize(this, _0x24388c, _0x5efa40, _0x1227d9, _0x2e40fa, _0x260a94, _0x375c22, _0x236c6f, _0x5300f6, _0x43315f);
              _0x10f482.setFlags(_0x5d313f, _0x3b5d5f, _0x33c05a, false);
              this.stores.cellsByID[_0x5efa40] = _0x10f482;
              this.stores.cellsToRender.push(_0x10f482);
              if (_0x156910) {
                this.stores.ownedCells.push(_0x10f482);
                this.playing = true;
                this.spectating = false;
                this.emit('playerAlive');
              }
            }
            let _0x4bf7b1 = _0xd272f.readUInt16();
            for (; _0x4bf7b1--;) {
              const _0x4ad965 = _0xd272f.readUInt32();
              const _0x3883ab = _0xd272f.readInt32();
              const _0x578b43 = _0xd272f.readInt32();
              const _0x1f4fe3 = _0xd272f.readUInt16();
              const _0x203477 = this.stores.cellsByID[_0x4ad965];
              if (!_0x203477) {
                this.log("No cell with ID " + _0x4ad965 + " exist. Request full sync.");
                return void this.fullSync();
              }
              _0x203477.update(_0x3883ab, _0x578b43, _0x1f4fe3);
            }
            let _0x20857b = _0xd272f.readUInt16();
            for (; _0x20857b--;) {
              const _0x55f71b = _0xd272f.readUInt32();
              const _0x511b13 = this.stores.cellsByID[_0x55f71b];
              if (_0x511b13) {
                _0x511b13.destroy();
              }
            }
            this.websocket.senpaModuleAlloc();
            if (_0xd272f.offset + 0x1 <= _0xd272f.view.byteLength) {
              console.log("active tab", _0xd272f.readUInt8());
            }
            if (_0xd272f.offset + 0x4 <= _0xd272f.view.byteLength) {
              const _0x2dc1a7 = _0xd272f.readUInt32();
              console.log("new border", _0x2dc1a7);
            }
            break;
          case 0x15:
            this.stores.leaderboard = [];
            let _0x19b677 = _0xd272f.readInt8();
            let _0x2990c3 = [];
            for (; _0x19b677--;) {
              const _0x53b405 = _0xd272f.readUInt16();
              const _0x198eff = _0xd272f.readUInt32();
              const _0x10365d = this.stores.clientsByID[_0x53b405].nickname;
              _0x2990c3.push({
                'nickname': _0x10365d,
                'totalMass': _0x198eff,
                'clientID': _0x53b405
              });
            }
            _0x2990c3.sort((_0x1d6e48, _0x2cf360) => _0x2cf360.totalMass - _0x1d6e48.totalMass);
            _0x2990c3.forEach((_0x430d15, _0xd2c185) => {
              this.stores.leaderboard.push({
                'position': _0xd2c185 + 0x1,
                'nickname': _0x430d15.nickname,
                'totalMass': _0x430d15.totalMass,
                'isMe': this.stores.ownedIDs.includes(_0x430d15.clientID)
              });
            });
            break;
          case 0x16:
            const _0xf1e63f = Date.now();
            let _0x133074 = _0xd272f.readInt8();
            for (; _0x133074--;) {
              const _0x4b2d8e = _0xd272f.readUInt16();
              const _0x53f19d = _0xd272f.readInt32();
              const _0x729271 = _0xd272f.readInt32();
              const _0x33fb7 = _0xd272f.readUInt16();
              const _0x3c2277 = this.stores.clientsByID[_0x4b2d8e];
              if (!_0x3c2277?.["isBot"]) {
                let _0x2af203 = this.stores.minimap.find(_0x400fb7 => _0x400fb7.clientID === _0x4b2d8e);
                if (_0x2af203) {
                  _0x2af203.prevX = _0x2af203.x;
                  _0x2af203.prevY = _0x2af203.y;
                  _0x2af203.x = _0x53f19d;
                  _0x2af203.y = _0x729271;
                  _0x2af203.size = _0x33fb7;
                  _0x2af203.lastUpdated = _0xf1e63f;
                } else {
                  this.stores.minimap.push({
                    'clientID': _0x4b2d8e,
                    'x': _0x53f19d,
                    'y': _0x729271,
                    'size': _0x33fb7,
                    'prevX': _0x53f19d,
                    'prevY': _0x729271,
                    'nickname': _0x3c2277?.["nickname"],
                    'color': _0x3c2277?.["color"],
                    'lastUpdated': _0xf1e63f
                  });
                }
              }
            }
            this.stores.minimap = this.stores.minimap.filter(_0x56fe77 => _0xf1e63f - _0x56fe77.lastUpdated < 0x3e8);
            break;
          case 0x17:
            this.spectatePoint.x = _0xd272f.readInt32();
            this.spectatePoint.y = _0xd272f.readInt32();
            break;
          case 0x1e:
            break;
          case 0x28:
            _0xd272f.readUInt16();
            _0xd272f.readUInt8();
            _0xd272f.readString16();
            break;
          case 0x29:
            _0xd272f.readUInt8();
            _0xd272f.readString16();
            break;
          case 0x2a:
            _0xd272f.readUInt8();
            _0xd272f.readUInt8();
            _0xd272f.readUInt8();
            _0xd272f.readUInt8();
            _0xd272f.readUInt8();
            _0xd272f.readUInt8();
            _0xd272f.readUInt16();
            break;
          case 0x2b:
            _0xd272f.readString16();
            _0xd272f.readUInt8();
            _0xd272f.readString16();
        }
      }
      ["onClose"]() {
        this.cleanUp();
        this.log("Connection closed.");
        this.emit('close', this);
      }
      ["onError"](_0x2b7e86) {
        this.log("Connection error.", _0x2b7e86);
        this.emit("error");
      }
      ["sendMessage"](_0x3ffc42) {
        if (this.isConnected) {
          this.websocket.send(_0x3ffc42);
        }
      }
      ['sendAuth']() {
        const _0x1c302c = new _0x537a43();
        _0x1c302c.writeUInt8(0xd);
        _0x1c302c.writeUInt16(0x4);
        _0x1c302c.writeString16('null');
        this.sendMessage(_0x1c302c.getBuffer());
        this.handshakeCompleted = true;
      }
      ["sendCursorPosition"](_0x39c2dc, _0x18fca1) {
        if (!this.handshakeCompleted) {
          return;
        }
        const _0x446a4d = new _0x537a43();
        _0x446a4d.writeUInt8(0x14);
        _0x446a4d.writeUInt8(this.spectating ? 0x1 : 0x0);
        if (0x0 == this.spectating) {
          _0x446a4d.writeUInt8(this.multiboxID);
        }
        _0x446a4d.writeInt32(_0x39c2dc);
        _0x446a4d.writeInt32(_0x18fca1);
        this.sendMessage(_0x446a4d.getBuffer());
      }
      ['sendPlayerInfo']({
        nickname: _0x2c3c5a,
        tag: _0x3cd692
      }) {
        if (this.handshakeCompleted) {
          if (undefined !== _0x2c3c5a) {
            const _0x299fa5 = new _0x537a43();
            _0x299fa5.writeUInt8(0xa);
            _0x299fa5.writeString16(_0x2c3c5a);
            this.sendMessage(_0x299fa5.getBuffer());
          }
          if (undefined !== _0x3cd692) {
            const _0x335fd4 = new _0x537a43();
            _0x335fd4.writeUInt8(0xb);
            _0x335fd4.writeString16(_0x3cd692);
            this.sendMessage(_0x335fd4.getBuffer());
          }
        }
      }
      ["sendSpawn"]() {
        if (!this.handshakeCompleted) {
          return;
        }
        const _0x1ab6b9 = new _0x537a43();
        _0x1ab6b9.writeUInt8(0x0);
        _0x1ab6b9.writeUInt8(this.multiboxID);
        this.sendMessage(_0x1ab6b9.getBuffer());
      }
      ['sendSpectate']() {
        if (!this.playing) {
          this.spectating = true;
        }
      }
      ["sendSplit"](_0xec7637 = 0x1) {
        if (!this.handshakeCompleted) {
          return;
        }
        const _0xf2df0 = new _0x537a43();
        _0xf2df0.writeUInt8(0x16);
        _0xf2df0.writeUInt8(this.multiboxID);
        _0xf2df0.writeUInt8(_0xec7637);
        this.sendMessage(_0xf2df0.getBuffer());
      }
      ["sendEject"]() {
        if (!this.handshakeCompleted) {
          return;
        }
        const _0x449f59 = new _0x537a43();
        _0x449f59.writeUInt8(0x17);
        _0x449f59.writeUInt8(this.multiboxID);
        _0x449f59.writeUInt8(Number(false));
        this.sendMessage(_0x449f59.getBuffer());
      }
      ["calculatePlayerPositionAndMass"]() {
        let _0x187f7f = 0x0;
        let _0x499cee = 0x0;
        let _0x57e32b = 0x0;
        this.stores.ownedCells.forEach(_0xd7a5 => {
          _0x187f7f += _0xd7a5.mass;
          _0x499cee += _0xd7a5.x / this.stores.ownedCells.length;
          _0x57e32b += _0xd7a5.y / this.stores.ownedCells.length;
        });
        this.playerPoint.x = _0x499cee;
        this.playerPoint.y = _0x57e32b;
      }
      ["updateBound"]() {
        this.stores.cellsToRender.forEach(_0x29bad4 => {
          this.bound.left = _0x29bad4.targetX;
          this.bound.right = _0x29bad4.targetX;
          this.bound.top = _0x29bad4.targetY;
          this.bound.bottom = _0x29bad4.targetY;
        });
      }
      ["updateStaticBound"](_0x301b9e) {
        if (this.bound.left > _0x301b9e.targetX - 0x0 + _0x301b9e.size) {
          this.bound.left = _0x301b9e.targetX - 0x0 + _0x301b9e.size;
        }
        if (this.bound.right < _0x301b9e.targetX - 0x0 - _0x301b9e.size) {
          this.bound.right = _0x301b9e.targetX - 0x0 - _0x301b9e.size;
        }
        if (this.bound.top > _0x301b9e.targetY - 0x0 + _0x301b9e.size) {
          this.bound.top = _0x301b9e.targetY - 0x0 + _0x301b9e.size;
        }
        if (this.bound.bottom < _0x301b9e.targetY - 0x0 - _0x301b9e.size) {
          this.bound.bottom = _0x301b9e.targetY - 0x0 - _0x301b9e.size;
        }
      }
      ["isInViewHSLO"](_0x4b454d, _0x4ee1fc, _0x2dfc36) {
        return !(_0x4b454d + _0x2dfc36 < this.bound.left || _0x4b454d - _0x2dfc36 > this.bound.right || _0x4ee1fc + _0x2dfc36 < this.bound.top || _0x4ee1fc - _0x2dfc36 > this.bound.bottom);
      }
      ["fullSync"]() {
        Object.values(this.stores.cellsByID).forEach(_0x13ddc8 => _0x13ddc8.destroy());
        const _0x259a97 = new _0x537a43(0x1);
        _0x259a97.writeUInt8(0x1f);
        this.sendMessage(_0x259a97.getBuffer());
      }
      ["close"]() {
        if (this.websocket) {
          this.websocket.close();
        }
      }
      ["log"](_0x2b1d28, ..._0x4a5f82) {
        console.log("%c[Client]", "color: rgb(39, 176, 158); font-weight: bold;", _0x2b1d28, ..._0x4a5f82);
      }
    }
    const _0x2395ab = new class {
      constructor() {
        this.settings = null;
        this.menuVisible = true;
        this.settingsVisible = false;
        this.playerInfo = {
          'customSkin1': null,
          'customSkin2': null,
          'nickname': null,
          'tag': null
        };
        this.connecting = false;
        this.macroFeedInterval = null;
        this.serverUrl = 'wss://eu.senpa.io:2001/';
      }
      ['initClient'](_0x2390ba, _0x5ba875) {
        if (_0xa630e8.clients.length > 0x2) {
          return;
        }
        toastr.info("Connecting..", "Client (" + _0x2390ba + ')');
        const _0x4d98a0 = new _0x2275aa(_0x2390ba);
        _0x4d98a0.connect(_0x5ba875);
        _0x4d98a0.once("clientReady", _0x5e553e => {
          toastr.success('Connected!', "Client (" + _0x2390ba + ')');
          _0xa630e8.addClient(_0x5e553e);
          console.log("Sending player info...");
          _0x5e553e.sendPlayerInfo({
            'nickname': this.playerInfo.nickname,
            'tag': this.playerInfo.tag
          });
        });
        _0x4d98a0.on("close", _0x3d4a54 => {
          toastr.warning("Connection closed.", "Client (" + _0x2390ba + ')');
          _0xa630e8.removeClient(_0x3d4a54);
        });
        _0x4d98a0.on("playerDied", () => {
          const _0xa76ba6 = _0xa630e8.getParent();
          const _0x516d31 = _0xa630e8.getChild();
          if ("parent" === _0x2390ba && _0x516d31 && _0x516d31.playing) {
            _0xa630e8.setClient(_0x516d31);
          }
          if ("child" === _0x2390ba && _0xa76ba6 && _0xa76ba6.playing) {
            _0xa630e8.setClient(_0xa76ba6);
          }
        });
        return _0x4d98a0;
      }
      ["switchClient"]() {
        const _0x5bd2b3 = _0xa630e8.getActiveClient();
        const _0x5b671b = _0xa630e8.getParent();
        const _0x28d924 = _0xa630e8.getChild();
        const _0x1f18fc = _0xa630e8.totalPlaying();
        if (!_0x5b671b) {
          if (this.connecting) {
            return;
          }
          this.connecting = true;
          const _0x25d524 = this.initClient("parent", this.serverUrl);
          _0x25d524.once('clientReady', _0x5ce415 => {
            this.connecting = false;
            _0x5ce415.sendSpawn();
          });
          return void _0x25d524.on("close", () => this.connecting = false);
        }
        if (_0x5bd2b3 && "child" === _0x5bd2b3.clientType && 0x0 === _0x1f18fc) {
          _0xa630e8.setClient(_0x5b671b);
          return void _0x5b671b.sendSpawn();
        }
        if (_0x5bd2b3 && "parent" === _0x5bd2b3.clientType) {
          if (_0x5bd2b3.playing) {
            if (_0x28d924) {
              if (_0x28d924.playing) {
                _0xa630e8.setClient(_0x28d924);
              } else {
                _0x28d924.sendSpawn();
                _0x28d924.once("playerAlive", () => {
                  _0xa630e8.setClient(_0x28d924);
                });
              }
            } else {
              const _0x2d0f52 = this.initClient('child', this.serverUrl);
              _0x2d0f52.once("clientReady", () => {
                _0x2d0f52.sendSpawn();
                _0x2d0f52.once("playerAlive", () => {
                  _0xa630e8.setClient(_0x2d0f52);
                });
              });
            }
          } else {
            _0x5b671b.sendSpawn();
          }
        } else if (_0x5bd2b3 && "child" === _0x5bd2b3.clientType) {
          if (_0x5b671b.playing) {
            _0xa630e8.setClient(_0x5b671b);
          } else {
            _0x5b671b.sendSpawn();
            _0x5b671b.once("playerAlive", () => {
              _0xa630e8.setClient(_0x5b671b);
            });
          }
        }
      }
      ['start']() {
        this.handelResizing();
        this.handleESCKey();
        this.initSettingsTabs();
        this.initSettings();
        this.handleSettingsMenu();
        this.initPlayerControls();
        this.initMouseControls();
        this.initPlayerInputs();
      }
      ["handelResizing"]() {
        const _0x464c5d = () => {
          const _0x5dbdc7 = document.getElementById("menu-display-center");
          const _0x476d6d = document.getElementById("settings-display-center");
          const _0x5af9b0 = document.getElementById('gallery-display-center');
          const _0x51ab6e = window.innerWidth;
          const _0x36f5e7 = window.innerHeight;
          const _0x3bd89e = _0x51ab6e < 0x4b0 ? _0x51ab6e / 0x4b0 : 0x1;
          const _0x35c76c = _0x36f5e7 < 0x320 ? _0x36f5e7 / 0x320 : 0x1;
          const _0x534ce5 = Math.min(_0x3bd89e, _0x35c76c);
          _0x5dbdc7.style.transform = "translate(-50%, -50%) scale(" + _0x534ce5 + ')';
          _0x476d6d.style.transform = "translate(-50%, -50%) scale(" + _0x534ce5 + ')';
          _0x5af9b0.style.transform = "translate(-50%, -50%) scale(" + _0x534ce5 + ')';
        };
        window.addEventListener("resize", _0x464c5d);
        _0x464c5d();
      }
      ["handleESCKey"]() {
        let _0x4753ba = false;
        document.addEventListener("keydown", _0x54048c => {
          if ("Escape" === _0x54048c.code && !_0x4753ba) {
            if ('Escape' === _0x54048c.code && this.settingsVisible) {
              return void _0x54048c.preventDefault();
            }
            _0x4753ba = true;
            if (document.getElementById("menu-display")) {
              this.toggleMenuVisibility();
            }
          }
        });
        document.addEventListener("keyup", _0x5762d6 => {
          if ("Escape" === _0x5762d6.code) {
            _0x4753ba = false;
          }
        });
      }
      ["toggleMenuVisibility"]() {
        const _0x3ac887 = document.getElementById("menu-display");
        if (_0x3ac887) {
          this.menuVisible = !this.menuVisible;
          this.setElementVisibility(_0x3ac887, this.menuVisible);
        }
      }
      ["setElementVisibility"](_0x1f259d, _0x4b663c) {
        if (_0x1f259d) {
          if (_0x4b663c) {
            _0x1f259d.classList.remove("hidden");
            _0x1f259d.classList.add("visible");
          } else {
            _0x1f259d.classList.remove('visible');
            _0x1f259d.classList.add('hidden');
          }
        }
      }
      ["handleSettingsMenu"]() {
        const _0x1d1c10 = document.getElementById("open-settings");
        const _0x59d309 = document.getElementById("settings-close-btn");
        const _0x52be78 = document.getElementById('settings-display');
        _0x59d309.addEventListener('click', () => {
          this.setElementVisibility(_0x52be78, false);
          this.settingsVisible = false;
        });
        _0x1d1c10.addEventListener("click", () => {
          this.setElementVisibility(_0x52be78, true);
          this.settingsVisible = true;
        });
      }
      ['initPlayerInputs']() {
        const _0x3a6a1c = document.getElementById("nickname");
        const _0xdfd103 = document.getElementById("tag");
        const _0x27ae72 = document.getElementById('play');
        const _0x4f2956 = document.getElementById("spectate");
        const _0x12e68b = document.getElementById("menu-display");
        const _0xeeb4e0 = document.getElementById("servers");
        const _0x4efb40 = document.getElementById('restart');
        this.playerInfo.nickname = _0x3a6a1c.value = localStorage.getItem("ogarx:nickname") || '';
        this.playerInfo.tag = _0xdfd103.value = localStorage.getItem("ogarx:tag") || '';
        const _0x12d85a = localStorage.getItem("ogarx:server") || _0xeeb4e0.options[0x0].value;
        _0xeeb4e0.value = _0x12d85a;
        this.serverUrl = _0x12d85a;
        this.initClient("parent", this.serverUrl);
        _0x3a6a1c.addEventListener("input", () => {
          this.playerInfo.nickname = _0x3a6a1c.value;
          if (_0xa630e8.clients.length) {
            _0xa630e8.clients.forEach(_0x50c1d7 => {
              _0x50c1d7.sendPlayerInfo({
                'nickname': this.playerInfo.nickname
              });
            });
          }
          localStorage.setItem('ogarx:nickname', _0x3a6a1c.value);
        });
        _0xdfd103.addEventListener("input", () => {
          this.playerInfo.tag = _0xdfd103.value;
          _0xa630e8.clients.forEach(_0x5a4fcc => {
            _0x5a4fcc.sendPlayerInfo({
              'tag': this.playerInfo.tag
            });
          });
          localStorage.setItem("ogarx:tag", _0xdfd103.value);
        });
        _0xeeb4e0.addEventListener("change", () => {
          const _0x485497 = _0xeeb4e0.value;
          localStorage.setItem("ogarx:server", _0x485497);
          this.serverUrl = _0x485497;
          if (_0xa630e8.clients.length) {
            _0xa630e8.clients.forEach(_0x48a2cd => {
              _0x48a2cd.close();
              _0x48a2cd.on("close", () => this.initClient("parent", this.serverUrl));
            });
          } else {
            this.initClient("parent", this.serverUrl);
          }
        });
        _0x4efb40.addEventListener("click", () => {
          if (_0xa630e8.clients.length) {
            _0xa630e8.clients.forEach(_0x5c0f0a => {
              _0x5c0f0a.close();
              _0x5c0f0a.on('close', () => this.initClient("parent", this.serverUrl));
            });
          } else {
            this.initClient("parent", this.serverUrl);
          }
        });
        _0x27ae72.addEventListener("click", () => {
          const _0x5e571f = _0xa630e8.getActiveClient();
          if (_0x5e571f) {
            _0x5e571f.sendSpawn();
          }
          this.setElementVisibility(_0x12e68b, false);
          this.menuVisible = false;
        });
        _0x4f2956.addEventListener("click", () => {
          const _0x442609 = _0xa630e8.getActiveClient();
          if (_0x442609) {
            _0x442609.sendSpectate();
          }
          this.setElementVisibility(_0x12e68b, false);
          this.menuVisible = false;
        });
      }
      ["initPlayerControls"]() {
        const _0x4115da = document.querySelectorAll('.hotkey-input');
        let _0x41330b = null;
        const _0x3a1ef2 = new Set();
        let _0x51887d = null;
        _0x4115da.forEach(_0x167948 => {
          const _0x2a753d = localStorage.getItem(_0x167948.id);
          if (_0x2a753d) {
            _0x167948.value = _0x2a753d;
          } else {
            localStorage.setItem(_0x167948.id, _0x167948.value);
          }
        });
        _0x4115da.forEach(_0x4cf31b => {
          _0x4cf31b.addEventListener("focus", () => {
            if (_0x41330b && _0x41330b !== _0x4cf31b) {
              _0x41330b.classList.remove("selected");
              _0x41330b = null;
            }
            _0x41330b = _0x4cf31b;
            _0x4cf31b.classList.add("selected");
            _0x4cf31b.value = '';
            _0x4cf31b.addEventListener('keydown', function (_0x3659a4) {
              _0x3659a4.preventDefault();
              if ("Escape" === _0x3659a4.code) {
                _0x3659a4.preventDefault();
                _0x4cf31b.classList.remove("selected");
                return void (_0x41330b = null);
              }
              if ("Tab" === _0x3659a4.code) {
                _0x3659a4.preventDefault();
              }
              const _0x123d95 = _0x3659a4.code;
              _0x4cf31b.value = _0x123d95;
              localStorage.setItem(_0x4cf31b.id, _0x123d95);
              _0x4cf31b.classList.remove("selected");
              _0x41330b = null;
            });
          });
        });
        document.addEventListener("keydown", _0x18521b => {
          if ('Escape' !== _0x18521b.code) {
            if (!_0x3a1ef2.has(_0x18521b.code)) {
              _0x3a1ef2.add(_0x18521b.code);
              _0x4115da.forEach(_0x422486 => {
                if (localStorage.getItem(_0x422486.id) === _0x18521b.code) {
                  this.triggerAction(_0x422486.id, _0x18521b);
                }
              });
              _0x4115da.forEach(_0x2b1abc => {
                if (!(_0x2b1abc.value !== _0x18521b.code || "macroFeedKey" !== _0x2b1abc.id || _0x51887d)) {
                  _0x51887d = setInterval(() => {
                    const _0x48f62a = _0xa630e8.getActiveClient();
                    if (_0x48f62a) {
                      _0x48f62a.sendEject();
                    }
                  }, 0x28);
                }
              });
            }
          } else {
            _0x18521b.preventDefault();
          }
        });
        document.addEventListener("keyup", _0x3ec2c3 => {
          _0x3a1ef2["delete"](_0x3ec2c3.code);
          _0x4115da.forEach(_0x1229a9 => {
            if (_0x1229a9.value === _0x3ec2c3.code && "macroFeedKey" === _0x1229a9.id && _0x51887d) {
              clearInterval(_0x51887d);
              _0x51887d = null;
            }
          });
        });
      }
      ["triggerAction"](_0x47d3fc, _0x1a0bbe) {
        if (this.menuVisible) {
          return;
        }
        if (this.settingsVisible) {
          return;
        }
        const _0x425a26 = _0xa630e8.getActiveClient();
        switch (_0x47d3fc) {
          case "macroFeedKey":
            break;
          case 'splitKey':
            if (!_0x425a26) {
              return;
            }
            _0x425a26.sendSplit(0x1);
            break;
          case "doubleSplitKey":
            if (!_0x425a26) {
              return;
            }
            _0x425a26.sendSplit(0x2);
            break;
          case "tricksplitKey":
            if (!_0x425a26) {
              return;
            }
            _0x425a26.sendSplit(0x4);
            break;
          case "switchPlayerkey":
            _0x1a0bbe.preventDefault();
            this.switchClient();
            break;
          default:
            console.log("Action for " + _0x47d3fc + " not defined");
        }
      }
      ['initMouseControls']() {
        const _0x545ce2 = document.getElementById("leftClick");
        const _0x44845d = document.getElementById("middleClick");
        const _0x1aa694 = document.getElementById("rightClick");
        _0x545ce2.addEventListener("change", () => {
          this.setMouseAction('leftClick', _0x545ce2.value);
        });
        _0x44845d.addEventListener("change", () => {
          this.setMouseAction("middleClick", _0x44845d.value);
        });
        _0x1aa694.addEventListener('change', () => {
          this.setMouseAction("rightClick", _0x1aa694.value);
        });
        this.setupMouseListeners();
      }
      ['setMouseAction'](_0x150b26, _0x2efa0d) {
        localStorage.setItem(_0x150b26 + 'Action', _0x2efa0d);
      }
      ['triggerMouseAction'](_0x162f0b) {
        const _0x4154b3 = localStorage.getItem(_0x162f0b + "Action");
        const _0x49b22f = _0xa630e8.getActiveClient();
        if ("macroFeed" === _0x4154b3) {
          if (_0x49b22f) {
            if (!this["macroFeedInterval_" + _0x162f0b]) {
              this['macroFeedInterval_' + _0x162f0b] = setInterval(() => {
                _0xa630e8.getActiveClient().sendEject();
              }, 0x28);
            }
          }
        } else if ('split' === _0x4154b3) {
          if (_0x49b22f) {
            _0x49b22f.sendSplit(0x1);
          }
        } else if ("doubleSplit" === _0x4154b3) {
          if (_0x49b22f) {
            _0x49b22f.sendSplit(0x2);
          }
        } else if ("tricksplit" === _0x4154b3) {
          if (_0x49b22f) {
            _0x49b22f.sendSplit(0x4);
          }
        } else if ("switchPlayer" === _0x4154b3) {
          this.switchClient();
        }
      }
      ['clearMacroFeed'](_0x41f76b) {
        if (this["macroFeedInterval_" + _0x41f76b]) {
          clearInterval(this["macroFeedInterval_" + _0x41f76b]);
          this["macroFeedInterval_" + _0x41f76b] = null;
        }
      }
      ['setupMouseListeners']() {
        if (!localStorage.getItem("leftClickAction")) {
          localStorage.setItem("leftClickAction", "tricksplit");
        }
        if (!localStorage.getItem("middleClickAction")) {
          localStorage.setItem('middleClickAction', "noAction");
        }
        if (!localStorage.getItem('rightClickAction')) {
          localStorage.setItem("rightClickAction", "noAction");
        }
        document.addEventListener("mousedown", _0x40dd2a => {
          if (this.menuVisible || this.settingsVisible) {
            return;
          }
          const _0x4032f0 = 0x0 === _0x40dd2a.button ? "leftClick" : 0x1 === _0x40dd2a.button ? "middleClick" : "rightClick";
          this.triggerMouseAction(_0x4032f0);
        });
        document.addEventListener("mouseup", _0x189fd3 => {
          const _0x3ec4bb = 0x0 === _0x189fd3.button ? "leftClick" : 0x1 === _0x189fd3.button ? "middleClick" : "rightClick";
          this.clearMacroFeed(_0x3ec4bb);
        });
        document.addEventListener("contextmenu", _0x3b4efa => {
          _0x3b4efa.preventDefault();
        });
      }
      ["initSettingsTabs"]() {
        const _0x65aad7 = document.querySelectorAll('.tab');
        const _0x3688bb = document.querySelectorAll('.tab-content');
        function _0x2b36db(_0x1abf3a) {
          const _0x453345 = _0x1abf3a.currentTarget;
          _0x65aad7.forEach(_0x1823eb => _0x1823eb.classList.remove("active"));
          _0x3688bb.forEach(_0x2cad4f => _0x2cad4f.classList.remove("active"));
          _0x453345.classList.add('active');
          const _0x122bbe = _0x453345.getAttribute("data-tab");
          const _0x1f7fc9 = document.getElementById(_0x122bbe);
          if (_0x1f7fc9) {
            _0x1f7fc9.classList.add("active");
          }
        }
        _0x65aad7.forEach(_0x218865 => {
          _0x218865.addEventListener('click', _0x2b36db);
        });
      }
      ['initSettings']() {
        this.settings = JSON.parse(localStorage.getItem('ogarx:settings')) || {
          'animationDelay': 0x8c,
          'cellTransparency': 0x1,
          'showNicknames': true,
          'showMass': true,
          'showSkins': true,
          'showGrid': true,
          'showSectors': false,
          'showPellets': true,
          'showDebug': false
        };
        this.bindSlider("animationDelay", 'animationDelay', "animationDelayValue");
        this.bindSlider('cellTransparency', 'cellTransparency', "cellTransparencyValue");
        this.bindToggleSwitch('showNicknames', "showNicknames");
        this.bindToggleSwitch("showMass", "showMass");
        this.bindToggleSwitch('showSkins', "showSkins");
        this.bindToggleSwitch('showGrid', 'showGrid');
        this.bindToggleSwitch("showSectors", 'showSectors');
        this.bindToggleSwitch("showPellets", "showPellets");
        this.bindToggleSwitch("showDebug", 'showDebug');
      }
      ["bindSlider"](_0x58fd39, _0x554ea3, _0x4b168c) {
        const _0x145425 = document.getElementById(_0x554ea3);
        const _0x11e2a2 = document.getElementById(_0x4b168c);
        if (!_0x145425) {
          return void console.warn("Slider with id \"" + _0x554ea3 + "\" not found.");
        }
        if (!_0x11e2a2) {
          return void console.warn("Display element with id \"" + _0x4b168c + "\" not found.");
        }
        const _0x3eaac9 = this.settings[_0x58fd39];
        _0x145425.value = _0x3eaac9;
        _0x11e2a2.textContent = _0x3eaac9;
        _0x145425.addEventListener("input", _0x6d5416 => {
          const _0x50df51 = parseFloat(_0x6d5416.target.value);
          _0x11e2a2.textContent = _0x50df51;
          this.settings[_0x58fd39] = _0x50df51;
          localStorage.setItem("ogarx:settings", JSON.stringify(this.settings));
        });
      }
      ["bindToggleSwitch"](_0x52d5ee, _0x3afca6) {
        const _0x30896c = document.getElementById(_0x3afca6);
        if (_0x30896c) {
          _0x30896c.checked = this.settings[_0x52d5ee];
          _0x30896c.addEventListener("change", _0x268ab7 => {
            this.settings[_0x52d5ee] = _0x268ab7.target.checked;
            localStorage.setItem("ogarx:settings", JSON.stringify(this.settings));
          });
        } else {
          console.warn("Element with id \"" + _0x3afca6 + "\" not found.");
        }
      }
    }();
    Array.prototype.remove = function (_0x3d2c0a) {
      const _0x4581a7 = this.indexOf(_0x3d2c0a);
      if (-0x1 !== _0x4581a7) {
        this.splice(_0x4581a7, 0x1);
      }
      return -0x1 !== _0x4581a7;
    };
    document.addEventListener("DOMContentLoaded", () => {
      console.log("Document is ready, initializing OgarX Engine...");
      _0x2395ab.start();
      _0x518936.start();
      window.app = _0x2395ab;
      window.skins = _0x525553;
      window.renderer = _0x518936;
      window.multibox = _0xa630e8;
      window.textCache = _0x337cc2;
    });
  })();