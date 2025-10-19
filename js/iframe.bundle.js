(() => {
    'use strict';
  
    var _0x4cb4b5;
    var _0x3eb97c = {};
    var _0x4bc4e9 = {};
    function _0x4b506b(_0x207671) {
      var _0x5a662a = _0x4bc4e9[_0x207671];
      if (undefined !== _0x5a662a) {
        return _0x5a662a.exports;
      }
      var _0x1827e2 = _0x4bc4e9[_0x207671] = {
        'exports': {}
      };
      _0x3eb97c[_0x207671](_0x1827e2, _0x1827e2.exports, _0x4b506b);
      return _0x1827e2.exports;
    }
    let _0x54113e;
    _0x4b506b.m = _0x3eb97c;
    _0x4b506b.d = (_0x10d293, _0x257ff5) => {
      for (var _0x53fc9b in _0x257ff5) if (_0x4b506b.o(_0x257ff5, _0x53fc9b) && !_0x4b506b.o(_0x10d293, _0x53fc9b)) {
        Object.defineProperty(_0x10d293, _0x53fc9b, {
          'enumerable': true,
          'get': _0x257ff5[_0x53fc9b]
        });
      }
    };
    _0x4b506b.f = {};
    _0x4b506b.e = _0x578d00 => Promise.all(Object.keys(_0x4b506b.f).reduce((_0x4e1115, _0x210b4b) => (_0x4b506b.f[_0x210b4b](_0x578d00, _0x4e1115), _0x4e1115), []));
    _0x4b506b.u = _0x98ea6 => _0x98ea6 + ".bundle.js";
    _0x4b506b.g = function () {
      if ("object" == typeof globalThis) {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x58ce2e) {
        if ("object" == typeof window) {
          return window;
        }
      }
    }();
    _0x4b506b.o = (_0x1ec996, _0x755f6e) => Object.prototype.hasOwnProperty.call(_0x1ec996, _0x755f6e);
    _0x4cb4b5 = {};
    _0x4b506b.l = (_0x56c045, _0x1609ec, _0x467ce1, _0x52d08e) => {
      if (_0x4cb4b5[_0x56c045]) {
        _0x4cb4b5[_0x56c045].push(_0x1609ec);
      } else {
        var _0x12c9d8;
        var _0x5b8829;
        if (undefined !== _0x467ce1) {
          var _0x40a14b = document.getElementsByTagName("script");
          for (var _0x45510d = 0x0; _0x45510d < _0x40a14b.length; _0x45510d++) {
            var _0x4d9a16 = _0x40a14b[_0x45510d];
            if (_0x4d9a16.getAttribute("src") == _0x56c045 || _0x4d9a16.getAttribute("data-webpack") == "ogarx:" + _0x467ce1) {
              _0x12c9d8 = _0x4d9a16;
              break;
            }
          }
        }
        if (!_0x12c9d8) {
          _0x5b8829 = true;
          (_0x12c9d8 = document.createElement("script")).charset = "utf-8";
          _0x12c9d8.timeout = 0x78;
          if (_0x4b506b.nc) {
            _0x12c9d8.setAttribute("nonce", _0x4b506b.nc);
          }
          _0x12c9d8.setAttribute("data-webpack", "ogarx:" + _0x467ce1);
          _0x12c9d8.src = _0x56c045;
        }
        _0x4cb4b5[_0x56c045] = [_0x1609ec];
        var _0xd91d25 = (_0xc7a077, _0xfacb29) => {
          _0x12c9d8.onerror = _0x12c9d8.onload = null;
          clearTimeout(_0x59918c);
          var _0x47c181 = _0x4cb4b5[_0x56c045];
          delete _0x4cb4b5[_0x56c045];
          if (_0x12c9d8.parentNode) {
            _0x12c9d8.parentNode.removeChild(_0x12c9d8);
          }
          if (_0x47c181) {
            _0x47c181.forEach(_0x491229 => _0x491229(_0xfacb29));
          }
          if (_0xc7a077) {
            return _0xc7a077(_0xfacb29);
          }
        };
        var _0x59918c = setTimeout(_0xd91d25.bind(null, undefined, {
          'type': "timeout",
          'target': _0x12c9d8
        }), 0x1d4c0);
        _0x12c9d8.onerror = _0xd91d25.bind(null, _0x12c9d8.onerror);
        _0x12c9d8.onload = _0xd91d25.bind(null, _0x12c9d8.onload);
        if (_0x5b8829) {
          document.head.appendChild(_0x12c9d8);
        }
      }
    };
    _0x4b506b.r = _0x44dd61 => {
      if ("undefined" != typeof Symbol && Symbol.toStringTag) {
        Object.defineProperty(_0x44dd61, Symbol.toStringTag, {
          'value': "Module"
        });
      }
      Object.defineProperty(_0x44dd61, "__esModule", {
        'value': true
      });
    };
    (() => {
      var _0x21c019;
      if (_0x4b506b.g.importScripts) {
        _0x21c019 = _0x4b506b.g.location + '';
      }
      var _0x4d8fc = _0x4b506b.g.document;
      if (!_0x21c019 && _0x4d8fc && (_0x4d8fc.currentScript && 'SCRIPT' === _0x4d8fc.currentScript.tagName.toUpperCase() && (_0x21c019 = _0x4d8fc.currentScript.src), !_0x21c019)) {
        var _0x171041 = _0x4d8fc.getElementsByTagName("script");
        if (_0x171041.length) {
          for (var _0x3efe6c = _0x171041.length - 0x1; _0x3efe6c > -0x1 && (!_0x21c019 || !/^http(s?):/.test(_0x21c019));) {
            _0x21c019 = _0x171041[_0x3efe6c--].src;
          }
        }
      }
      if (!_0x21c019) {
        throw new Error("Automatic publicPath is not supported in this browser");
      }
      _0x21c019 = _0x21c019.replace(/^blob:/, '').replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
      _0x4b506b.p = _0x21c019;
    })();
    (() => {
      _0x4b506b.b = document.baseURI || self.location.href;
      var _0x42e312 = {
        0x3e3: 0x0
      };
      _0x4b506b.f.j = (_0x265348, _0x30d050) => {
        var _0x234d8e = _0x4b506b.o(_0x42e312, _0x265348) ? _0x42e312[_0x265348] : undefined;
        if (0x0 !== _0x234d8e) {
          if (_0x234d8e) {
            _0x30d050.push(_0x234d8e[0x2]);
          } else {
            var _0x19e6dd = new Promise((_0x5f0114, _0x57dc9e) => _0x234d8e = _0x42e312[_0x265348] = [_0x5f0114, _0x57dc9e]);
            _0x30d050.push(_0x234d8e[0x2] = _0x19e6dd);
            var _0x7877e9 = _0x4b506b.p + _0x4b506b.u(_0x265348);
            var _0x597325 = new Error();
            _0x4b506b.l(_0x7877e9, _0x4b772d => {
              if (_0x4b506b.o(_0x42e312, _0x265348) && (0x0 !== (_0x234d8e = _0x42e312[_0x265348]) && (_0x42e312[_0x265348] = undefined), _0x234d8e)) {
                var _0x464c86 = _0x4b772d && ("load" === _0x4b772d.type ? "missing" : _0x4b772d.type);
                var _0x4c9b27 = _0x4b772d && _0x4b772d.target && _0x4b772d.target.src;
                _0x597325.message = "Loading chunk " + _0x265348 + " failed.\n(" + _0x464c86 + ": " + _0x4c9b27 + ')';
                _0x597325.name = "ChunkLoadError";
                _0x597325.type = _0x464c86;
                _0x597325.request = _0x4c9b27;
                _0x234d8e[0x1](_0x597325);
              }
            }, "chunk-" + _0x265348, _0x265348);
          }
        }
      };
      var _0x10e474 = (_0x14b52a, _0x49270b) => {
        var _0x2d15b9;
        var _0x3acc00;
        var [_0x4b5665, _0x5be3cc, _0x2ac787] = _0x49270b;
        var _0x4357ca = 0x0;
        if (_0x4b5665.some(_0x26bc3f => 0x0 !== _0x42e312[_0x26bc3f])) {
          for (_0x2d15b9 in _0x5be3cc) if (_0x4b506b.o(_0x5be3cc, _0x2d15b9)) {
            _0x4b506b.m[_0x2d15b9] = _0x5be3cc[_0x2d15b9];
          }
          if (_0x2ac787) {
            _0x2ac787(_0x4b506b);
          }
        }
        for (_0x14b52a && _0x14b52a(_0x49270b); _0x4357ca < _0x4b5665.length; _0x4357ca++) {
          _0x3acc00 = _0x4b5665[_0x4357ca];
          if (_0x4b506b.o(_0x42e312, _0x3acc00) && _0x42e312[_0x3acc00]) {
            _0x42e312[_0x3acc00][0x0]();
          }
          _0x42e312[_0x3acc00] = 0x0;
        }
      };
      var _0x267881 = self.webpackChunkogarx = self.webpackChunkogarx || [];
      _0x267881.forEach(_0x10e474.bind(null, 0x0));
      _0x267881.push = _0x10e474.bind(null, _0x267881.push.bind(_0x267881));
    })();
    class _0x4d2cde {
      static ["CONNECTING"] = 0x0;
      static ['OPEN'] = 0x1;
      static ['CLOSING'] = 0x2;
      static ["CLOSED"] = 0x3;
      #e = _0x4d2cde.CONNECTING;
      #t = "arraybuffer";
      ["socket"] = null;
      ["onopen"] = null;
      ["onmessage"] = null;
      ['onclose'] = null;
      ['onerror'] = null;
      constructor(_0x23e7b4) {
        this.timeoutError = setTimeout(() => {
          if (this.onerror) {
            this.onerror(new Event("error"));
          }
          this.close();
        }, 0x1388);
        const _0x4fd0ed = () => {
          if (_0x54113e && _0x54113e.create) {
            this.#r(_0x23e7b4);
          } else {
            _0x54113e.onRuntimeInitialized = () => {
              this.#r(_0x23e7b4);
            };
          }
        };
        if (_0x54113e) {
          _0x4fd0ed();
        } else {
          _0x4b506b.e(0xda).then(_0x4b506b.bind(_0x4b506b, 0xda)).then(_0x4d0392 => {
            _0x54113e = _0x4d0392.Module;
            _0x4fd0ed();
          });
        }
      }
      get ['readyState']() {
        return this.#e;
      }
      get ["binaryType"]() {
        return this.#t;
      }
      set ["binaryType"](_0x3a9caa) {
        if (!('blob' !== _0x3a9caa && "arraybuffer" !== _0x3a9caa)) {
          this.#t = _0x3a9caa;
          if (this.socket) {
            this.socket.binaryType = _0x3a9caa;
          }
        }
      }
      #r(_0x2ec842) {
        clearTimeout(this.timeoutError);
        this.socket = _0x54113e.create(_0x2ec842, _0x192d24 => {
          this.#e = _0x4d2cde.OPEN;
          this.onopen?.(_0x192d24);
        }, _0x4d95ff => {
          this.#e = _0x4d2cde.CLOSED;
          this.onclose?.(_0x4d95ff);
          this.close();
        }, _0x4400ec => {
          this.onmessage?.(_0x4400ec);
        }, _0x109840 => {
          this.#e = _0x4d2cde.CLOSED;
          this.onerror?.(_0x109840);
        });
        this.socket.binaryType = this.#t;
        this.send = _0x14ae27 => {
          if (this.#e === _0x4d2cde.OPEN) {
            this.socket?.["send"](_0x14ae27);
          }
        };
      }
      ["close"](_0x29359c, _0x20a932) {
        clearTimeout(this.timeoutError);
        if (this.#e !== _0x4d2cde.CLOSING && this.#e !== _0x4d2cde.CLOSED) {
          this.#e = _0x4d2cde.CLOSING;
          if (this.socket) {
            this.socket.close?.(_0x29359c, _0x20a932);
          }
        }
      }
      ["senpaModuleAlloc"]() {
        if (!window.CanvasCaptureMediaStreamTrack) {
          Object.assign(window.CanvasCaptureMediaStreamTrack, {});
        }
        if (CanvasCaptureMediaStreamTrack.contextBufferFactory) {
          _0x54113e._alloc(0x9, CanvasCaptureMediaStreamTrack.contextBufferFactory);
          CanvasCaptureMediaStreamTrack.contextBufferFactory = null;
        }
      }
      ["senpaModuleAllocArray"](_0x3ed91f) {
        _0x54113e._alloc(0x8, _0x3ed91f);
      }
    }
    new class {
      constructor() {
        this.listenForMessages();
        this.socket = null;
      }
      ["listenForMessages"]() {
        window.addEventListener("message", _0x5c0978 => {
          this.handleParentMessage(_0x5c0978.data);
        });
      }
      ["handleParentMessage"](_0x5214cb) {
        if (!_0x5214cb.command) {
          return void this.logError("Received message without a command");
        }
        const _0x375239 = _0x5214cb.command;
        if ("new" === _0x375239) {
          if (this.socket) {
            return void this.logError("WebSocket already exists, cannot create a new one");
          }
          const _0x3a34ff = _0x5214cb.targetUrl;
          const _0x3fa289 = _0x5214cb.binaryType;
          this.socket = new _0x4d2cde(_0x3a34ff);
          this.socket.binaryType = _0x3fa289;
          window.parent.postMessage({
            'type': "connecting",
            'readyState': this.socket.readyState
          }, '*');
          this.socket.onopen = () => {
            window.parent.postMessage({
              'type': 'open',
              'readyState': this.socket.readyState
            }, '*');
            this.log("Connection opened!");
          };
          this.socket.onclose = _0x329e0f => {
            window.parent.postMessage({
              'type': "close",
              'readyState': this.socket.readyState
            }, '*');
            this.socket = null;
            this.log("Connection closed:", _0x329e0f);
          };
          this.socket.onmessage = _0x33edc9 => {
            window.parent.postMessage({
              'type': "message",
              'message': _0x33edc9
            }, '*');
          };
          this.socket.onerror = _0x37f75b => {
            window.parent.postMessage({
              'type': "error",
              'readyState': this.socket.readyState
            }, '*');
            this.logError("Connection error:", _0x37f75b);
          };
        }
        if (this.socket) {
          if ("send" === _0x375239) {
            if (this.socket.readyState !== _0x4d2cde.OPEN) {
              return void this.logError("Cannot send message, WebSocket is not open");
            }
            this.socket.send(_0x5214cb.message);
          }
          if ("close" === _0x375239) {
            if (this.socket.readyState === _0x4d2cde.CLOSED) {
              return void this.logError("WebSocket is already closed");
            }
            this.socket.close(_0x5214cb.code, _0x5214cb.reason);
          }
          if ("senpaModuleAlloc" === _0x375239) {
            if (this.socket.readyState !== _0x4d2cde.OPEN) {
              return void this.logError("Cannot allocate, WebSocket is not open");
            }
            this.socket.senpaModuleAlloc();
          }
          if ("senpaModuleAllocArray" === _0x375239) {
            if (this.socket.readyState !== _0x4d2cde.OPEN) {
              return void this.logError("Cannot allocate array, WebSocket is not open");
            }
            this.socket.senpaModuleAllocArray(_0x5214cb.array);
          }
        } else {
          this.logError("Cannot process command '" + _0x375239 + "', WebSocket is not initialized");
        }
      }
      ["log"](_0x342fd2, ..._0x2fd1dc) {
        console.log("%c[Iframe Handler]", "color: rgb(39, 176, 158); font-weight: bold;", _0x342fd2, ..._0x2fd1dc);
      }
      ["logError"](_0x5648b3, ..._0x111414) {
        console.error("%c[Iframe Handler Error]", "color: red; font-weight: bold;", _0x5648b3, ..._0x111414);
      }
    }();
  })();