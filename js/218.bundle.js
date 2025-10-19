'use strict';

(self.webpackChunkogarx = self.webpackChunkogarx || []).push([[0xda], {
  0xda: (_0x4fe687, _0x1dfd6b, _0xacbe3c) => {
    _0xacbe3c.r(_0x1dfd6b);
    _0xacbe3c.d(_0x1dfd6b, {
      'Module': () => _0x3472e7
    });
    var _0x3472e7 = undefined !== _0x3472e7 ? _0x3472e7 : {};
    let _0x248dde;
    let _0xd426e3 = {};
    for (_0x248dde in _0x3472e7) if (_0x3472e7.hasOwnProperty(_0x248dde)) {
      _0xd426e3[_0x248dde] = _0x3472e7[_0x248dde];
    }
    let _0x3e4262 = [];
    let _0xb5b55f = function (_0x18dc71, _0x12b731) {
      throw _0x12b731;
    };
    const _0x15fcf4 = "object" == typeof window;
    const _0xa4d004 = "function" == typeof importScripts;
    let _0x214b09;
    let _0x23bf1b;
    let _0x3204b4;
    let _0x5779d0;
    let _0x2c366b = '';
    if (!("object" == typeof process && "object" == typeof process.versions && 'string' == typeof process.versions.node)) {
      if (_0x15fcf4 || _0xa4d004) {
        if (_0xa4d004) {
          _0x2c366b = self.location.href;
        } else if ("undefined" != typeof document && document.currentScript) {
          _0x2c366b = document.currentScript.src;
        }
        _0x2c366b = 0x0 !== _0x2c366b.indexOf("blob:") ? _0x2c366b.substr(0x0, _0x2c366b.lastIndexOf('/') + 0x1) : '';
        _0x214b09 = function (_0x720b27) {
          const _0x4cbd63 = new XMLHttpRequest();
          _0x4cbd63.open('GET', _0x720b27, false);
          _0x4cbd63.send(null);
          return _0x4cbd63.responseText;
        };
        if (_0xa4d004) {
          _0x3204b4 = function (_0x1a6de8) {
            const _0x33a115 = new XMLHttpRequest();
            _0x33a115.open("GET", _0x1a6de8, false);
            _0x33a115.responseType = 'arraybuffer';
            _0x33a115.send(null);
            return new Uint8Array(_0x33a115.response);
          };
        }
        _0x23bf1b = function (_0x394541, _0x3ff639, _0x5c5c7b) {
          const _0x424857 = new XMLHttpRequest();
          _0x424857.open("GET", _0x394541, true);
          _0x424857.responseType = 'arraybuffer';
          _0x424857.onload = function () {
            if (0xc8 == _0x424857.status || 0x0 == _0x424857.status && _0x424857.response) {
              _0x3ff639(_0x424857.response);
            } else {
              _0x5c5c7b();
            }
          };
          _0x424857.onerror = _0x5c5c7b;
          _0x424857.send(null);
        };
        _0x5779d0 = function (_0x532a68) {
          document.title = _0x532a68;
        };
      }
    }
    if (!_0x3472e7.print) {
      console.log.bind(console);
    }
    const _0x450e60 = _0x3472e7.printErr || console.warn.bind(console);
    for (_0x248dde in _0xd426e3) if (_0xd426e3.hasOwnProperty(_0x248dde)) {
      _0x3472e7[_0x248dde] = _0xd426e3[_0x248dde];
    }
    let _0x5939ad;
    _0xd426e3 = null;
    if (_0x3472e7.arguments) {
      _0x3e4262 = _0x3472e7.arguments;
    }
    if (_0x3472e7.thisProgram) {
      _0x3472e7.thisProgram;
    }
    if (_0x3472e7.quit) {
      _0xb5b55f = _0x3472e7.quit;
    }
    if (_0x3472e7.wasmBinary) {
      _0x5939ad = _0x3472e7.wasmBinary;
    }
    const _0x558949 = _0x3472e7.noExitRuntime || true;
    let _0x15f5f9;
    if ("object" != typeof WebAssembly) {
      _0x5b2646("no native wasm support detected");
    }
    let _0x261a21;
    let _0xa55d4a = false;
    const _0x18cac6 = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : undefined;
    const _0x2d18be = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : undefined;
    function _0x355913(_0x5ed48a, _0x301ec3) {
      let _0x396566 = _0x5ed48a;
      let _0x8fb7af = _0x396566 >> 0x1;
      const _0xcaaf0c = _0x8fb7af + _0x301ec3 / 0x2;
      for (; !(_0x8fb7af >= _0xcaaf0c) && _0x28eb78[_0x8fb7af];) {
        ++_0x8fb7af;
      }
      _0x396566 = _0x8fb7af << 0x1;
      if (_0x396566 - _0x5ed48a > 0x20 && _0x2d18be) {
        return _0x2d18be.decode(_0x3e5848.subarray(_0x5ed48a, _0x396566));
      }
      {
        let _0x22d775 = '';
        for (let _0x29802f = 0x0; !(_0x29802f >= _0x301ec3 / 0x2); ++_0x29802f) {
          const _0x85b276 = _0x197777[_0x5ed48a + 0x2 * _0x29802f >> 0x1];
          if (0x0 == _0x85b276) {
            break;
          }
          _0x22d775 += String.fromCharCode(_0x85b276);
        }
        return _0x22d775;
      }
    }
    function _0x19fed4(_0x36367a, _0x5c9bc7, _0x569592) {
      if (undefined === _0x569592) {
        _0x569592 = 0x7fffffff;
      }
      if (_0x569592 < 0x2) {
        return 0x0;
      }
      const _0x40de1b = _0x5c9bc7;
      const _0x170d34 = (_0x569592 -= 0x2) < 0x2 * _0x36367a.length ? _0x569592 / 0x2 : _0x36367a.length;
      for (let _0x4dab01 = 0x0; _0x4dab01 < _0x170d34; ++_0x4dab01) {
        const _0x5cba62 = _0x36367a.charCodeAt(_0x4dab01);
        _0x197777[_0x5c9bc7 >> 0x1] = _0x5cba62;
        _0x5c9bc7 += 0x2;
      }
      _0x197777[_0x5c9bc7 >> 0x1] = 0x0;
      return _0x5c9bc7 - _0x40de1b;
    }
    function _0x80adcc(_0xece52c) {
      return 0x2 * _0xece52c.length;
    }
    function _0x297bcc(_0x50e29f, _0x63cee3) {
      let _0x349ec4 = 0x0;
      let _0x4073f3 = '';
      for (; !(_0x349ec4 >= _0x63cee3 / 0x4);) {
        const _0x47643c = _0x279174[_0x50e29f + 0x4 * _0x349ec4 >> 0x2];
        if (0x0 == _0x47643c) {
          break;
        }
        ++_0x349ec4;
        if (_0x47643c >= 0x10000) {
          const _0x5e0502 = _0x47643c - 0x10000;
          _0x4073f3 += String.fromCharCode(0xd800 | _0x5e0502 >> 0xa, 0xdc00 | 0x3ff & _0x5e0502);
        } else {
          _0x4073f3 += String.fromCharCode(_0x47643c);
        }
      }
      return _0x4073f3;
    }
    function _0x3e3f37(_0x514ef6, _0x2a6631, _0x5a89b6) {
      if (undefined === _0x5a89b6) {
        _0x5a89b6 = 0x7fffffff;
      }
      if (_0x5a89b6 < 0x4) {
        return 0x0;
      }
      const _0x4516c3 = _0x2a6631;
      const _0x388576 = _0x4516c3 + _0x5a89b6 - 0x4;
      for (let _0x4fa386 = 0x0; _0x4fa386 < _0x514ef6.length; ++_0x4fa386) {
        let _0x4043df = _0x514ef6.charCodeAt(_0x4fa386);
        if (_0x4043df >= 0xd800 && _0x4043df <= 0xdfff) {
          _0x4043df = 0x10000 + ((0x3ff & _0x4043df) << 0xa) | 0x3ff & _0x514ef6.charCodeAt(++_0x4fa386);
        }
        _0x279174[_0x2a6631 >> 0x2] = _0x4043df;
        if ((_0x2a6631 += 0x4) + 0x4 > _0x388576) {
          break;
        }
      }
      _0x279174[_0x2a6631 >> 0x2] = 0x0;
      return _0x2a6631 - _0x4516c3;
    }
    function _0x4b5553(_0xbb9388) {
      let _0x7d5ebb = 0x0;
      for (let _0x5c73a2 = 0x0; _0x5c73a2 < _0xbb9388.length; ++_0x5c73a2) {
        const _0x5001ac = _0xbb9388.charCodeAt(_0x5c73a2);
        if (_0x5001ac >= 0xd800 && _0x5001ac <= 0xdfff) {
          ++_0x5c73a2;
        }
        _0x7d5ebb += 0x4;
      }
      return _0x7d5ebb;
    }
    let _0x559953;
    let _0x574c4b;
    let _0x3e5848;
    let _0x197777;
    let _0x28eb78;
    let _0x279174;
    let _0x30effc;
    let _0x2c85f5;
    let _0xb33b1b;
    let _0x430175;
    _0x3472e7.INITIAL_MEMORY;
    const _0x11c2f9 = [];
    const _0x2d38e5 = [];
    const _0x5a6f61 = [];
    const _0x3bd028 = [];
    let _0xa5450e = false;
    let _0x184096 = false;
    let _0x13a03b = 0x0;
    let _0x328f8a = null;
    let _0x5676f5 = null;
    function _0x5b2646(_0x4f8b5f) {
      if (_0x3472e7.onAbort) {
        _0x3472e7.onAbort(_0x4f8b5f);
      }
      _0x450e60(_0x4f8b5f += '');
      _0xa55d4a = true;
      _0x261a21 = 0x1;
      _0x4f8b5f = "abort(" + _0x4f8b5f + "). Build with -s ASSERTIONS=1 for more info.";
      throw new WebAssembly.RuntimeError(_0x4f8b5f);
    }
    _0x3472e7.preloadedImages = {};
    _0x3472e7.preloadedAudios = {};
    function _0xa8bd0b(_0x1779ae) {
      try {
        if (_0x1779ae == "https://senpa.io/web/static/js/bundle.wasm" && _0x5939ad) {
          return new Uint8Array(_0x5939ad);
        }
        if (_0x3204b4) {
          return _0x3204b4(_0x1779ae);
        }
        throw "both async and sync fetching of the wasm failed";
      } catch (_0x48bff1) {
        _0x5b2646(_0x48bff1);
      }
    }
    function _0x4e9d21(_0x442187) {
      for (; _0x442187.length > 0x0;) {
        const _0x41b78d = _0x442187.shift();
        if ("function" == typeof _0x41b78d) {
          _0x41b78d(_0x3472e7);
          continue;
        }
        const _0x397048 = _0x41b78d.func;
        if ("number" == typeof _0x397048) {
          if (undefined === _0x41b78d.arg) {
            _0x430175.get(_0x397048)();
          } else {
            _0x430175.get(_0x397048)(_0x41b78d.arg);
          }
        } else {
          _0x397048(undefined === _0x41b78d.arg ? null : _0x41b78d.arg);
        }
      }
    }
    function _0x19f8fe(_0x1620a4) {
      switch (_0x1620a4) {
        case 0x1:
          return 0x0;
        case 0x2:
          return 0x1;
        case 0x4:
          return 0x2;
        case 0x8:
          return 0x3;
        default:
          throw new TypeError("Unknown type size: " + _0x1620a4);
      }
    }
    "https://senpa.io/web/static/js/bundle.wasm".startsWith("data:application/octet-stream;base64,");
    var _0x164bfa = undefined;
    function _0xdaced5(_0x369da0) {
      let _0x3903ba = '';
      let _0x359c70 = _0x369da0;
      for (; _0x3e5848[_0x359c70];) {
        _0x3903ba += _0x164bfa[_0x3e5848[_0x359c70++]];
      }
      return _0x3903ba;
    }
    const _0x42a0d5 = {};
    const _0x32fce7 = {};
    const _0x5d3a70 = {};
    function _0x27f885(_0x297016) {
      if (undefined === _0x297016) {
        return "_unknown";
      }
      const _0x1af9ac = (_0x297016 = _0x297016.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0x0);
      return _0x1af9ac >= 0x30 && _0x1af9ac <= 0x39 ? '_' + _0x297016 : _0x297016;
    }
    function _0x4a6874(_0x42e564, _0x206758) {
      _0x42e564 = _0x27f885(_0x42e564);
      return new Function("body", "return function " + _0x42e564 + "() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(_0x206758);
    }
    function _0xe7e4d8(_0xddf696, _0x31bd9f) {
      const _0x4da28e = _0x4a6874(_0x31bd9f, function (_0x30261f) {
        this.name = _0x31bd9f;
        this.message = _0x30261f;
        const _0x23c893 = new Error(_0x30261f).stack;
        if (undefined !== _0x23c893) {
          this.stack = this.toString() + "\n" + _0x23c893.replace(/^Error(:[^\n]*)?\n/, '');
        }
      });
      _0x4da28e.prototype = Object.create(_0xddf696.prototype);
      _0x4da28e.prototype.constructor = _0x4da28e;
      _0x4da28e.prototype.toString = function () {
        return undefined === this.message ? this.name : this.name + ": " + this.message;
      };
      return _0x4da28e;
    }
    let _0x26f7ff;
    let _0xd77907;
    function _0x105027(_0x31282a) {
      throw new _0x26f7ff(_0x31282a);
    }
    function _0x494846(_0xd48603) {
      throw new _0xd77907(_0xd48603);
    }
    function _0x519d0e(_0x4d4d40, _0x1edafc, _0x14c99c) {
      _0x14c99c = _0x14c99c || {};
      if (!("argPackAdvance" in _0x1edafc)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      }
      const _0x1956e7 = _0x1edafc.name;
      if (!_0x4d4d40) {
        _0x105027("type \"" + _0x1956e7 + "\" must have a positive integer typeid pointer");
      }
      if (_0x32fce7.hasOwnProperty(_0x4d4d40)) {
        if (_0x14c99c.ignoreDuplicateRegistrations) {
          return;
        }
        _0x105027("Cannot register type '" + _0x1956e7 + "' twice");
      }
      _0x32fce7[_0x4d4d40] = _0x1edafc;
      delete _0x5d3a70[_0x4d4d40];
      if (_0x42a0d5.hasOwnProperty(_0x4d4d40)) {
        const _0x61c880 = _0x42a0d5[_0x4d4d40];
        delete _0x42a0d5[_0x4d4d40];
        _0x61c880.forEach(function (_0x1e2879) {
          _0x1e2879();
        });
      }
    }
    const _0x34f795 = [];
    const _0x2dfb98 = [{}, {
      'value': undefined
    }, {
      'value': null
    }, {
      'value': true
    }, {
      'value': false
    }];
    function _0x4cc533(_0x52cf40) {
      if (_0x52cf40 > 0x4 && 0x0 == --_0x2dfb98[_0x52cf40].refcount) {
        _0x2dfb98[_0x52cf40] = undefined;
        _0x34f795.push(_0x52cf40);
      }
    }
    function _0x30e5ad(_0x428d03) {
      switch (_0x428d03) {
        case undefined:
          return 0x1;
        case null:
          return 0x2;
        case true:
          return 0x3;
        case false:
          return 0x4;
        default:
          {
            const _0x46b67c = _0x34f795.length ? _0x34f795.pop() : _0x2dfb98.length;
            _0x2dfb98[_0x46b67c] = {
              'refcount': 0x1,
              'value': _0x428d03
            };
            return _0x46b67c;
          }
      }
    }
    function _0xfb25a7(_0x357e2b) {
      return this.fromWireType(_0x30effc[_0x357e2b >> 0x2]);
    }
    function _0x45fb6b(_0x39150a) {
      if (null === _0x39150a) {
        return "null";
      }
      const _0xe4ee64 = typeof _0x39150a;
      return "object" === _0xe4ee64 || "array" === _0xe4ee64 || "function" === _0xe4ee64 ? _0x39150a.toString() : '' + _0x39150a;
    }
    function _0x45655e(_0x3bc48c, _0x55c579) {
      switch (_0x55c579) {
        case 0x2:
          return function (_0x50cd84) {
            return this.fromWireType(_0x2c85f5[_0x50cd84 >> 0x2]);
          };
        case 0x3:
          return function (_0x3668a7) {
            return this.fromWireType(_0xb33b1b[_0x3668a7 >> 0x3]);
          };
        default:
          throw new TypeError("Unknown float type: " + _0x3bc48c);
      }
    }
    function _0x3764e5(_0x3e61d4, _0x1a1189) {
      const _0x1aa179 = _0x4a6874(_0x3e61d4.name || "unknownFunctionName", function () {});
      _0x1aa179.prototype = _0x3e61d4.prototype;
      const _0x6d57ac = new _0x1aa179();
      const _0x2573e3 = _0x3e61d4.apply(_0x6d57ac, _0x1a1189);
      return _0x2573e3 instanceof Object ? _0x2573e3 : _0x6d57ac;
    }
    function _0x6d0097(_0x574f8f) {
      for (; _0x574f8f.length;) {
        const _0xdb538b = _0x574f8f.pop();
        _0x574f8f.pop()(_0xdb538b);
      }
    }
    function _0x4b959f(_0x32e542, _0x14da1a) {
      const _0x20dbf8 = (_0x32e542 = _0xdaced5(_0x32e542)).includes('j') ? function (_0x4c74f1, _0x50e1a5) {
        const _0x161f7f = [];
        return function () {
          _0x161f7f.length = arguments.length;
          for (let _0x51b3ff = 0x0; _0x51b3ff < arguments.length; _0x51b3ff++) {
            _0x161f7f[_0x51b3ff] = arguments[_0x51b3ff];
          }
          return function (_0x1e8ac0, _0x5ea091, _0x54f8ee) {
            return _0x1e8ac0.includes('j') ? function (_0x80d0af, _0x26cf6f, _0x3c3c25) {
              const _0x3d754a = _0x3472e7["dynCall_" + _0x80d0af];
              return _0x3c3c25 && _0x3c3c25.length ? _0x3d754a.apply(null, [_0x26cf6f].concat(_0x3c3c25)) : _0x3d754a.call(null, _0x26cf6f);
            }(_0x1e8ac0, _0x5ea091, _0x54f8ee) : _0x430175.get(_0x5ea091).apply(null, _0x54f8ee);
          }(_0x4c74f1, _0x50e1a5, _0x161f7f);
        };
      }(_0x32e542, _0x14da1a) : _0x430175.get(_0x14da1a);
      if ('function' != typeof _0x20dbf8) {
        _0x105027("unknown function pointer with signature " + _0x32e542 + ": " + _0x14da1a);
      }
      return _0x20dbf8;
    }
    let _0x341266;
    function _0x25ebb2(_0xeee106) {
      const _0x467d33 = _0x3bebe9(_0xeee106);
      const _0x508350 = _0xdaced5(_0x467d33);
      _0x18f9a8(_0x467d33);
      return _0x508350;
    }
    function _0x2d3f82(_0x57c85e, _0x324ea3, _0x3fe9b3) {
      switch (_0x324ea3) {
        case 0x0:
          return _0x3fe9b3 ? function (_0x46816b) {
            return _0x574c4b[_0x46816b];
          } : function (_0x42b050) {
            return _0x3e5848[_0x42b050];
          };
        case 0x1:
          return _0x3fe9b3 ? function (_0xc99f71) {
            return _0x197777[_0xc99f71 >> 0x1];
          } : function (_0xbb933f) {
            return _0x28eb78[_0xbb933f >> 0x1];
          };
        case 0x2:
          return _0x3fe9b3 ? function (_0x268dbb) {
            return _0x279174[_0x268dbb >> 0x2];
          } : function (_0x3c4dfd) {
            return _0x30effc[_0x3c4dfd >> 0x2];
          };
        default:
          throw new TypeError("Unknown integer type: " + _0x57c85e);
      }
    }
    function _0x306d2f(_0x524d5b) {
      if (!_0x524d5b) {
        _0x105027("Cannot use deleted val. handle = " + _0x524d5b);
      }
      return _0x2dfb98[_0x524d5b].value;
    }
    function _0x210245(_0x490cfc, _0x197f74) {
      const _0x3f307c = _0x32fce7[_0x490cfc];
      if (undefined === _0x3f307c) {
        _0x105027(_0x197f74 + " has unknown type " + _0x25ebb2(_0x490cfc));
      }
      return _0x3f307c;
    }
    function _0x37d765(_0x5244b4, _0x492fd3) {
      const _0x11bcff = new Array(_0x5244b4);
      for (let _0x163b2f = 0x0; _0x163b2f < _0x5244b4; ++_0x163b2f) {
        _0x11bcff[_0x163b2f] = _0x210245(_0x279174[(_0x492fd3 >> 0x2) + _0x163b2f], "parameter " + _0x163b2f);
      }
      return _0x11bcff;
    }
    const _0x53efb3 = {};
    function _0x43aa74(_0x355616) {
      const _0x5036fc = _0x53efb3[_0x355616];
      return undefined === _0x5036fc ? _0xdaced5(_0x355616) : _0x5036fc;
    }
    const _0x362d3c = [];
    const _0x103628 = {};
    !function () {
      const _0x10241a = new Array(0x100);
      for (let _0x15635d = 0x0; _0x15635d < 0x100; ++_0x15635d) {
        _0x10241a[_0x15635d] = String.fromCharCode(_0x15635d);
      }
      _0x164bfa = _0x10241a;
    }();
    _0x26f7ff = _0x3472e7.BindingError = _0xe7e4d8(Error, "BindingError");
    _0xd77907 = _0x3472e7.InternalError = _0xe7e4d8(Error, 'InternalError');
    _0x3472e7.count_emval_handles = function () {
      let _0x34ddd3 = 0x0;
      for (let _0x2b0cff = 0x5; _0x2b0cff < _0x2dfb98.length; ++_0x2b0cff) {
        if (undefined !== _0x2dfb98[_0x2b0cff]) {
          ++_0x34ddd3;
        }
      }
      return _0x34ddd3;
    };
    _0x3472e7.get_first_emval = function () {
      for (let _0x2e04ec = 0x5; _0x2e04ec < _0x2dfb98.length; ++_0x2e04ec) {
        if (undefined !== _0x2dfb98[_0x2e04ec]) {
          return _0x2dfb98[_0x2e04ec];
        }
      }
      return null;
    };
    _0x341266 = _0x3472e7.UnboundTypeError = _0xe7e4d8(Error, "UnboundTypeError");
    var _0x12edbc = {
      't': function (_0x439fe2, _0x469e67, _0x40df17, _0x219b6d, _0x5615c2) {},
      'w': function (_0x35c269, _0x2e01da, _0x54ffe0, _0x13d7d2, _0x439c83) {
        const _0x21b355 = _0x19f8fe(_0x54ffe0);
        _0x519d0e(_0x35c269, {
          'name': _0x2e01da = _0xdaced5(_0x2e01da),
          'fromWireType': function (_0x2d7a46) {
            return !!_0x2d7a46;
          },
          'toWireType': function (_0x102a6c, _0x3fd7af) {
            return _0x3fd7af ? _0x13d7d2 : _0x439c83;
          },
          'argPackAdvance': 0x8,
          'readValueFromPointer': function (_0x62b8f2) {
            let _0x5ba163;
            if (0x1 === _0x54ffe0) {
              _0x5ba163 = _0x574c4b;
            } else {
              if (0x2 === _0x54ffe0) {
                _0x5ba163 = _0x197777;
              } else {
                if (0x4 !== _0x54ffe0) {
                  throw new TypeError("Unknown boolean type size: " + _0x2e01da);
                }
                _0x5ba163 = _0x279174;
              }
            }
            return this.fromWireType(_0x5ba163[_0x62b8f2 >> _0x21b355]);
          },
          'destructorFunction': null
        });
      },
      'v': function (_0x12e334, _0x31e909) {
        _0x519d0e(_0x12e334, {
          'name': _0x31e909 = _0xdaced5(_0x31e909),
          'fromWireType': function (_0x35cc67) {
            const _0x36c015 = _0x2dfb98[_0x35cc67].value;
            _0x4cc533(_0x35cc67);
            return _0x36c015;
          },
          'toWireType': function (_0x2f1b06, _0x56cc10) {
            return _0x30e5ad(_0x56cc10);
          },
          'argPackAdvance': 0x8,
          'readValueFromPointer': _0xfb25a7,
          'destructorFunction': null
        });
      },
      'o': function (_0x28c4c2, _0x495d1c, _0x5f231a) {
        const _0x10af37 = _0x19f8fe(_0x5f231a);
        _0x519d0e(_0x28c4c2, {
          'name': _0x495d1c = _0xdaced5(_0x495d1c),
          'fromWireType': function (_0x584537) {
            return _0x584537;
          },
          'toWireType': function (_0xf89385, _0x821014) {
            if ('number' != typeof _0x821014 && "boolean" != typeof _0x821014) {
              throw new TypeError("Cannot convert \"" + _0x45fb6b(_0x821014) + "\" to " + this.name);
            }
            return _0x821014;
          },
          'argPackAdvance': 0x8,
          'readValueFromPointer': _0x45655e(_0x495d1c, _0x10af37),
          'destructorFunction': null
        });
      },
      'l': function (_0x3f420b, _0x388b2e, _0x193b7b, _0x5b4499, _0x3a6aff, _0x21ed34) {
        const _0x31ef6e = function (_0x21ffd1, _0x586c9e) {
          const _0x29e709 = [];
          for (let _0x20790f = 0x0; _0x20790f < _0x21ffd1; _0x20790f++) {
            _0x29e709.push(_0x279174[(_0x586c9e >> 0x2) + _0x20790f]);
          }
          return _0x29e709;
        }(_0x388b2e, _0x193b7b);
        _0x3f420b = _0xdaced5(_0x3f420b);
        _0x3a6aff = _0x4b959f(_0x5b4499, _0x3a6aff);
        (function (_0x438f4c, _0x58d98a, _0x211767) {
          if (_0x3472e7.hasOwnProperty(_0x438f4c)) {
            if (undefined === _0x211767 || undefined !== _0x3472e7[_0x438f4c].overloadTable && undefined !== _0x3472e7[_0x438f4c].overloadTable[_0x211767]) {
              _0x105027("Cannot register public name '" + _0x438f4c + "' twice");
            }
            (function (_0x25c58c, _0x5d572b, _0x4d88f4) {
              if (undefined === _0x25c58c[_0x5d572b].overloadTable) {
                const _0x2005fe = _0x25c58c[_0x5d572b];
                _0x25c58c[_0x5d572b] = function () {
                  if (!_0x25c58c[_0x5d572b].overloadTable.hasOwnProperty(arguments.length)) {
                    _0x105027("Function '" + _0x4d88f4 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + _0x25c58c[_0x5d572b].overloadTable + ')!');
                  }
                  return _0x25c58c[_0x5d572b].overloadTable[arguments.length].apply(this, arguments);
                };
                _0x25c58c[_0x5d572b].overloadTable = [];
                _0x25c58c[_0x5d572b].overloadTable[_0x2005fe.argCount] = _0x2005fe;
              }
            })(_0x3472e7, _0x438f4c, _0x438f4c);
            if (_0x3472e7.hasOwnProperty(_0x211767)) {
              _0x105027("Cannot register multiple overloads of a function with the same number of arguments (" + _0x211767 + ')!');
            }
            _0x3472e7[_0x438f4c].overloadTable[_0x211767] = _0x58d98a;
          } else {
            _0x3472e7[_0x438f4c] = _0x58d98a;
            if (undefined !== _0x211767) {
              _0x3472e7[_0x438f4c].numArguments = _0x211767;
            }
          }
        })(_0x3f420b, function () {
          !function (_0x521f62, _0x2b1e2e) {
            const _0x1f57fb = [];
            const _0xd61090 = {};
            _0x2b1e2e.forEach(function _0x30201c(_0x4ea722) {
              if (!(_0xd61090[_0x4ea722] || _0x32fce7[_0x4ea722])) {
                if (_0x5d3a70[_0x4ea722]) {
                  _0x5d3a70[_0x4ea722].forEach(_0x30201c);
                } else {
                  _0x1f57fb.push(_0x4ea722);
                  _0xd61090[_0x4ea722] = true;
                }
              }
            });
            throw new _0x341266(_0x521f62 + ": " + _0x1f57fb.map(_0x25ebb2).join([", "]));
          }("Cannot call " + _0x3f420b + " due to unbound types", _0x31ef6e);
        }, _0x388b2e - 0x1);
        (function (_0xeed97a, _0x26ae0e) {
          function _0x28552a(_0x2d0f83) {
            const _0x19ef63 = function (_0x1cca14) {
              const _0x1fd7e1 = [_0x1cca14[0x0], null].concat(_0x1cca14.slice(0x1));
              (function (_0x4d8da0, _0x4b1e0e, _0x268197) {
                if (!_0x3472e7.hasOwnProperty(_0x4d8da0)) {
                  _0x494846("Replacing nonexistant public symbol");
                }
                if (undefined !== _0x3472e7[_0x4d8da0].overloadTable && undefined !== _0x268197) {
                  _0x3472e7[_0x4d8da0].overloadTable[_0x268197] = _0x4b1e0e;
                } else {
                  _0x3472e7[_0x4d8da0] = _0x4b1e0e;
                  _0x3472e7[_0x4d8da0].argCount = _0x268197;
                }
              })(_0x3f420b, function (_0x3db07d, _0x1532ba, _0x293183, _0x56ed1c, _0x2b8479) {
                const _0x1a59a2 = _0x1532ba.length;
                if (_0x1a59a2 < 0x2) {
                  _0x105027("argTypes array size mismatch! Must at least get return value and 'this' types!");
                }
                const _0x404b09 = null !== _0x1532ba[0x1] && null !== _0x293183;
                let _0x3ea500 = false;
                for (var _0x41028e = 0x1; _0x41028e < _0x1532ba.length; ++_0x41028e) {
                  if (null !== _0x1532ba[_0x41028e] && undefined === _0x1532ba[_0x41028e].destructorFunction) {
                    _0x3ea500 = true;
                    break;
                  }
                }
                const _0xac4aa8 = "void" !== _0x1532ba[0x0].name;
                let _0x49544e = '';
                let _0x56bfb3 = '';
                for (_0x41028e = 0x0; _0x41028e < _0x1a59a2 - 0x2; ++_0x41028e) {
                  _0x49544e += (0x0 !== _0x41028e ? ", " : '') + 'arg' + _0x41028e;
                  _0x56bfb3 += (0x0 !== _0x41028e ? ", " : '') + "arg" + _0x41028e + 'Wired';
                }
                let _0xab68b1 = "return function " + _0x27f885(_0x3db07d) + '(' + _0x49544e + ") {\nif (arguments.length !== " + (_0x1a59a2 - 0x2) + ") {\nthrowBindingError('function " + _0x3db07d + " called with ' + arguments.length + ' arguments, expected " + (_0x1a59a2 - 0x2) + " args!');\n}\n";
                if (_0x3ea500) {
                  _0xab68b1 += "var destructors = [];\n";
                }
                const _0x476f4d = _0x3ea500 ? 'destructors' : "null";
                const _0x196a37 = ["throwBindingError", "invoker", 'fn', "runDestructors", "retType", "classParam"];
                const _0x274437 = [_0x105027, _0x56ed1c, _0x2b8479, _0x6d0097, _0x1532ba[0x0], _0x1532ba[0x1]];
                if (_0x404b09) {
                  _0xab68b1 += "var thisWired = classParam.toWireType(" + _0x476f4d + ", this);\n";
                }
                for (_0x41028e = 0x0; _0x41028e < _0x1a59a2 - 0x2; ++_0x41028e) {
                  _0xab68b1 += "var arg" + _0x41028e + "Wired = argType" + _0x41028e + ".toWireType(" + _0x476f4d + ", arg" + _0x41028e + "); // " + _0x1532ba[_0x41028e + 0x2].name + "\n";
                  _0x196a37.push('argType' + _0x41028e);
                  _0x274437.push(_0x1532ba[_0x41028e + 0x2]);
                }
                if (_0x404b09) {
                  _0x56bfb3 = "thisWired" + (_0x56bfb3.length > 0x0 ? ", " : '') + _0x56bfb3;
                }
                _0xab68b1 += (_0xac4aa8 ? "var rv = " : '') + "invoker(fn" + (_0x56bfb3.length > 0x0 ? ", " : '') + _0x56bfb3 + ");\n";
                if (_0x3ea500) {
                  _0xab68b1 += "runDestructors(destructors);\n";
                } else {
                  for (_0x41028e = _0x404b09 ? 0x1 : 0x2; _0x41028e < _0x1532ba.length; ++_0x41028e) {
                    const _0x238cc9 = 0x1 === _0x41028e ? "thisWired" : "arg" + (_0x41028e - 0x2) + "Wired";
                    if (null !== _0x1532ba[_0x41028e].destructorFunction) {
                      _0xab68b1 += _0x238cc9 + "_dtor(" + _0x238cc9 + "); // " + _0x1532ba[_0x41028e].name + "\n";
                      _0x196a37.push(_0x238cc9 + '_dtor');
                      _0x274437.push(_0x1532ba[_0x41028e].destructorFunction);
                    }
                  }
                }
                if (_0xac4aa8) {
                  _0xab68b1 += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
                }
                _0xab68b1 += "}\n";
                _0x196a37.push(_0xab68b1);
                return _0x3764e5(Function, _0x196a37).apply(null, _0x274437);
              }(_0x3f420b, _0x1fd7e1, null, _0x3a6aff, _0x21ed34), _0x388b2e - 0x1);
              return [];
            }(_0x2d0f83);
            if (_0x19ef63.length !== _0xeed97a.length) {
              _0x494846("Mismatched type converter count");
            }
            for (let _0x3b57fb = 0x0; _0x3b57fb < _0xeed97a.length; ++_0x3b57fb) {
              _0x519d0e(_0xeed97a[_0x3b57fb], _0x19ef63[_0x3b57fb]);
            }
          }
          _0xeed97a.forEach(function (_0x4ec8d0) {
            _0x5d3a70[_0x4ec8d0] = _0x26ae0e;
          });
          const _0x13d690 = new Array(_0x26ae0e.length);
          const _0x59c300 = [];
          let _0x5b4cf3 = 0x0;
          _0x26ae0e.forEach(function (_0x5ec905, _0x56ba6f) {
            if (_0x32fce7.hasOwnProperty(_0x5ec905)) {
              _0x13d690[_0x56ba6f] = _0x32fce7[_0x5ec905];
            } else {
              _0x59c300.push(_0x5ec905);
              if (!_0x42a0d5.hasOwnProperty(_0x5ec905)) {
                _0x42a0d5[_0x5ec905] = [];
              }
              _0x42a0d5[_0x5ec905].push(function () {
                _0x13d690[_0x56ba6f] = _0x32fce7[_0x5ec905];
                ++_0x5b4cf3;
                if (_0x5b4cf3 === _0x59c300.length) {
                  _0x28552a(_0x13d690);
                }
              });
            }
          });
          if (0x0 === _0x59c300.length) {
            _0x28552a(_0x13d690);
          }
        })([], _0x31ef6e);
      },
      'd': function (_0x39d935, _0x47dd7f, _0x4a3a47, _0x4fb129, _0x3cf01f) {
        _0x47dd7f = _0xdaced5(_0x47dd7f);
        if (-0x1 === _0x3cf01f) {
          _0x3cf01f = 0xffffffff;
        }
        const _0x1f2718 = _0x19f8fe(_0x4a3a47);
        let _0x1689d2 = function (_0x1990a2) {
          return _0x1990a2;
        };
        if (0x0 === _0x4fb129) {
          const _0x13ddff = 0x20 - 0x8 * _0x4a3a47;
          _0x1689d2 = function (_0x259062) {
            return _0x259062 << _0x13ddff >>> _0x13ddff;
          };
        }
        const _0x3929a4 = _0x47dd7f.includes("unsigned");
        _0x519d0e(_0x39d935, {
          'name': _0x47dd7f,
          'fromWireType': _0x1689d2,
          'toWireType': function (_0xd610e0, _0x3ae889) {
            if ("number" != typeof _0x3ae889 && 'boolean' != typeof _0x3ae889) {
              throw new TypeError("Cannot convert \"" + _0x45fb6b(_0x3ae889) + "\" to " + this.name);
            }
            if (_0x3ae889 < _0x4fb129 || _0x3ae889 > _0x3cf01f) {
              throw new TypeError("Passing a number \"" + _0x45fb6b(_0x3ae889) + "\" from JS side to C/C++ side to an argument of type \"" + _0x47dd7f + "\", which is outside the valid range [" + _0x4fb129 + ", " + _0x3cf01f + ']!');
            }
            return _0x3929a4 ? _0x3ae889 >>> 0x0 : 0x0 | _0x3ae889;
          },
          'argPackAdvance': 0x8,
          'readValueFromPointer': _0x2d3f82(_0x47dd7f, _0x1f2718, 0x0 !== _0x4fb129),
          'destructorFunction': null
        });
      },
      'c': function (_0x2d60ef, _0x5667ec, _0x486645) {
        const _0x51cbbb = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][_0x5667ec];
        function _0x63bdcd(_0x1f5874) {
          const _0x33cf0f = _0x30effc[_0x1f5874 >>= 0x2];
          const _0x19509f = _0x30effc[_0x1f5874 + 0x1];
          return new _0x51cbbb(_0x559953, _0x19509f, _0x33cf0f);
        }
        _0x519d0e(_0x2d60ef, {
          'name': _0x486645 = _0xdaced5(_0x486645),
          'fromWireType': _0x63bdcd,
          'argPackAdvance': 0x8,
          'readValueFromPointer': _0x63bdcd
        }, {
          'ignoreDuplicateRegistrations': true
        });
      },
      'p': function (_0x15e5e2, _0x47b527) {
        const _0xeb58ca = "std::string" === (_0x47b527 = _0xdaced5(_0x47b527));
        _0x519d0e(_0x15e5e2, {
          'name': _0x47b527,
          'fromWireType': function (_0x2020eb) {
            const _0xc56cdf = _0x30effc[_0x2020eb >> 0x2];
            let _0x3a322b;
            if (_0xeb58ca) {
              let _0x549a5b = _0x2020eb + 0x4;
              for (var _0x1da817 = 0x0; _0x1da817 <= _0xc56cdf; ++_0x1da817) {
                const _0x4cec15 = _0x2020eb + 0x4 + _0x1da817;
                if (_0x1da817 == _0xc56cdf || 0x0 == _0x3e5848[_0x4cec15]) {
                  _0x311082 = _0x4cec15 - _0x549a5b;
                  const _0x2bf10f = (_0x427061 = _0x549a5b) ? function (_0x46cde4, _0x17cf6a, _0x190260) {
                    const _0x29513e = _0x17cf6a + _0x190260;
                    let _0x2a5468 = _0x17cf6a;
                    for (; _0x46cde4[_0x2a5468] && !(_0x2a5468 >= _0x29513e);) {
                      ++_0x2a5468;
                    }
                    if (_0x2a5468 - _0x17cf6a > 0x10 && _0x46cde4.subarray && _0x18cac6) {
                      return _0x18cac6.decode(_0x46cde4.subarray(_0x17cf6a, _0x2a5468));
                    }
                    for (var _0x15f960 = ''; _0x17cf6a < _0x2a5468;) {
                      let _0x51216d = _0x46cde4[_0x17cf6a++];
                      if (!(0x80 & _0x51216d)) {
                        _0x15f960 += String.fromCharCode(_0x51216d);
                        continue;
                      }
                      const _0x48ab4a = 0x3f & _0x46cde4[_0x17cf6a++];
                      if (0xc0 == (0xe0 & _0x51216d)) {
                        _0x15f960 += String.fromCharCode((0x1f & _0x51216d) << 0x6 | _0x48ab4a);
                        continue;
                      }
                      const _0x51cb3c = 0x3f & _0x46cde4[_0x17cf6a++];
                      _0x51216d = 0xe0 == (0xf0 & _0x51216d) ? (0xf & _0x51216d) << 0xc | _0x48ab4a << 0x6 | _0x51cb3c : (0x7 & _0x51216d) << 0x12 | _0x48ab4a << 0xc | _0x51cb3c << 0x6 | 0x3f & _0x46cde4[_0x17cf6a++];
                      if (_0x51216d < 0x10000) {
                        _0x15f960 += String.fromCharCode(_0x51216d);
                      } else {
                        const _0x2c04e9 = _0x51216d - 0x10000;
                        _0x15f960 += String.fromCharCode(0xd800 | _0x2c04e9 >> 0xa, 0xdc00 | 0x3ff & _0x2c04e9);
                      }
                    }
                    return _0x15f960;
                  }(_0x3e5848, _0x427061, _0x311082) : '';
                  if (undefined === _0x3a322b) {
                    _0x3a322b = _0x2bf10f;
                  } else {
                    _0x3a322b += String.fromCharCode(0x0);
                    _0x3a322b += _0x2bf10f;
                  }
                  _0x549a5b = _0x4cec15 + 0x1;
                }
              }
            } else {
              const _0x597efd = new Array(_0xc56cdf);
              for (_0x1da817 = 0x0; _0x1da817 < _0xc56cdf; ++_0x1da817) {
                _0x597efd[_0x1da817] = String.fromCharCode(_0x3e5848[_0x2020eb + 0x4 + _0x1da817]);
              }
              _0x3a322b = _0x597efd.join('');
            }
            var _0x427061;
            var _0x311082;
            _0x18f9a8(_0x2020eb);
            return _0x3a322b;
          },
          'toWireType': function (_0x36cb90, _0x436345) {
            let _0x3e28c4;
            if (_0x436345 instanceof ArrayBuffer) {
              _0x436345 = new Uint8Array(_0x436345);
            }
            const _0x1153c1 = "string" == typeof _0x436345;
            if (!(_0x1153c1 || _0x436345 instanceof Uint8Array || _0x436345 instanceof Uint8ClampedArray || _0x436345 instanceof Int8Array)) {
              _0x105027("Cannot pass non-string to std::string");
            }
            _0x3e28c4 = _0xeb58ca && _0x1153c1 ? function () {
              return function (_0x34ee47) {
                let _0x26b643 = 0x0;
                for (let _0x308307 = 0x0; _0x308307 < _0x34ee47.length; ++_0x308307) {
                  let _0x4f8892 = _0x34ee47.charCodeAt(_0x308307);
                  if (_0x4f8892 >= 0xd800 && _0x4f8892 <= 0xdfff) {
                    _0x4f8892 = 0x10000 + ((0x3ff & _0x4f8892) << 0xa) | 0x3ff & _0x34ee47.charCodeAt(++_0x308307);
                  }
                  if (_0x4f8892 <= 0x7f) {
                    ++_0x26b643;
                  } else {
                    _0x26b643 += _0x4f8892 <= 0x7ff ? 0x2 : _0x4f8892 <= 0xffff ? 0x3 : 0x4;
                  }
                }
                return _0x26b643;
              }(_0x436345);
            } : function () {
              return _0x436345.length;
            };
            const _0x33c406 = _0x3e28c4();
            const _0x99412b = _0x4ea44a(0x4 + _0x33c406 + 0x1);
            _0x30effc[_0x99412b >> 0x2] = _0x33c406;
            if (_0xeb58ca && _0x1153c1) {
              !function (_0x5852f7, _0x3f8be3, _0x446d7a, _0x25427e) {
                if (!(_0x25427e > 0x0)) {
                  return 0x0;
                }
                const _0x43a5dd = _0x446d7a + _0x25427e - 0x1;
                for (let _0x20df64 = 0x0; _0x20df64 < _0x5852f7.length; ++_0x20df64) {
                  let _0x376547 = _0x5852f7.charCodeAt(_0x20df64);
                  if (_0x376547 >= 0xd800 && _0x376547 <= 0xdfff) {
                    _0x376547 = 0x10000 + ((0x3ff & _0x376547) << 0xa) | 0x3ff & _0x5852f7.charCodeAt(++_0x20df64);
                  }
                  if (_0x376547 <= 0x7f) {
                    if (_0x446d7a >= _0x43a5dd) {
                      break;
                    }
                    _0x3f8be3[_0x446d7a++] = _0x376547;
                  } else {
                    if (_0x376547 <= 0x7ff) {
                      if (_0x446d7a + 0x1 >= _0x43a5dd) {
                        break;
                      }
                      _0x3f8be3[_0x446d7a++] = 0xc0 | _0x376547 >> 0x6;
                      _0x3f8be3[_0x446d7a++] = 0x80 | 0x3f & _0x376547;
                    } else {
                      if (_0x376547 <= 0xffff) {
                        if (_0x446d7a + 0x2 >= _0x43a5dd) {
                          break;
                        }
                        _0x3f8be3[_0x446d7a++] = 0xe0 | _0x376547 >> 0xc;
                        _0x3f8be3[_0x446d7a++] = 0x80 | _0x376547 >> 0x6 & 0x3f;
                        _0x3f8be3[_0x446d7a++] = 0x80 | 0x3f & _0x376547;
                      } else {
                        if (_0x446d7a + 0x3 >= _0x43a5dd) {
                          break;
                        }
                        _0x3f8be3[_0x446d7a++] = 0xf0 | _0x376547 >> 0x12;
                        _0x3f8be3[_0x446d7a++] = 0x80 | _0x376547 >> 0xc & 0x3f;
                        _0x3f8be3[_0x446d7a++] = 0x80 | _0x376547 >> 0x6 & 0x3f;
                        _0x3f8be3[_0x446d7a++] = 0x80 | 0x3f & _0x376547;
                      }
                    }
                  }
                }
                _0x3f8be3[_0x446d7a] = 0x0;
              }(_0x436345, _0x3e5848, _0x99412b + 0x4, _0x33c406 + 0x1);
            } else {
              if (_0x1153c1) {
                for (var _0x1e27d5 = 0x0; _0x1e27d5 < _0x33c406; ++_0x1e27d5) {
                  const _0x1f44e5 = _0x436345.charCodeAt(_0x1e27d5);
                  if (_0x1f44e5 > 0xff) {
                    _0x18f9a8(_0x99412b);
                    _0x105027("String has UTF-16 code units that do not fit in 8 bits");
                  }
                  _0x3e5848[_0x99412b + 0x4 + _0x1e27d5] = _0x1f44e5;
                }
              } else {
                for (_0x1e27d5 = 0x0; _0x1e27d5 < _0x33c406; ++_0x1e27d5) {
                  _0x3e5848[_0x99412b + 0x4 + _0x1e27d5] = _0x436345[_0x1e27d5];
                }
              }
            }
            if (null !== _0x36cb90) {
              _0x36cb90.push(_0x18f9a8, _0x99412b);
            }
            return _0x99412b;
          },
          'argPackAdvance': 0x8,
          'readValueFromPointer': _0xfb25a7,
          'destructorFunction': function (_0x2692cd) {
            _0x18f9a8(_0x2692cd);
          }
        });
      },
      'j': function (_0x546435, _0xadd9d0, _0x3290e4) {
        let _0x5db74a;
        let _0x5d4467;
        let _0x713252;
        let _0xca837f;
        let _0x2b9222;
        _0x3290e4 = _0xdaced5(_0x3290e4);
        if (0x2 === _0xadd9d0) {
          _0x5db74a = _0x355913;
          _0x5d4467 = _0x19fed4;
          _0xca837f = _0x80adcc;
          _0x713252 = function () {
            return _0x28eb78;
          };
          _0x2b9222 = 0x1;
        } else if (0x4 === _0xadd9d0) {
          _0x5db74a = _0x297bcc;
          _0x5d4467 = _0x3e3f37;
          _0xca837f = _0x4b5553;
          _0x713252 = function () {
            return _0x30effc;
          };
          _0x2b9222 = 0x2;
        }
        _0x519d0e(_0x546435, {
          'name': _0x3290e4,
          'fromWireType': function (_0x46c470) {
            const _0x39b29b = _0x30effc[_0x46c470 >> 0x2];
            const _0x4ceae7 = _0x713252();
            let _0x39d357;
            let _0x45d655 = _0x46c470 + 0x4;
            for (let _0x41b30e = 0x0; _0x41b30e <= _0x39b29b; ++_0x41b30e) {
              const _0x1ae400 = _0x46c470 + 0x4 + _0x41b30e * _0xadd9d0;
              if (_0x41b30e == _0x39b29b || 0x0 == _0x4ceae7[_0x1ae400 >> _0x2b9222]) {
                const _0x4caf7b = _0x5db74a(_0x45d655, _0x1ae400 - _0x45d655);
                if (undefined === _0x39d357) {
                  _0x39d357 = _0x4caf7b;
                } else {
                  _0x39d357 += String.fromCharCode(0x0);
                  _0x39d357 += _0x4caf7b;
                }
                _0x45d655 = _0x1ae400 + _0xadd9d0;
              }
            }
            _0x18f9a8(_0x46c470);
            return _0x39d357;
          },
          'toWireType': function (_0x37f61c, _0x2ecfd9) {
            if ("string" != typeof _0x2ecfd9) {
              _0x105027("Cannot pass non-string to C++ string type " + _0x3290e4);
            }
            const _0x437765 = _0xca837f(_0x2ecfd9);
            const _0x1388f9 = _0x4ea44a(0x4 + _0x437765 + _0xadd9d0);
            _0x30effc[_0x1388f9 >> 0x2] = _0x437765 >> _0x2b9222;
            _0x5d4467(_0x2ecfd9, _0x1388f9 + 0x4, _0x437765 + _0xadd9d0);
            if (null !== _0x37f61c) {
              _0x37f61c.push(_0x18f9a8, _0x1388f9);
            }
            return _0x1388f9;
          },
          'argPackAdvance': 0x8,
          'readValueFromPointer': _0xfb25a7,
          'destructorFunction': function (_0x540146) {
            _0x18f9a8(_0x540146);
          }
        });
      },
      'x': function (_0x2be305, _0x5b4a5a) {
        _0x519d0e(_0x2be305, {
          'isVoid': true,
          'name': _0x5b4a5a = _0xdaced5(_0x5b4a5a),
          'argPackAdvance': 0x0,
          'fromWireType': function () {},
          'toWireType': function (_0x4da976, _0x3ffe3b) {}
        });
      },
      'g': function (_0x31ee65, _0x7a1931, _0x5cf8d1) {
        _0x31ee65 = _0x306d2f(_0x31ee65);
        _0x7a1931 = _0x210245(_0x7a1931, "emval::as");
        const _0x9540cd = [];
        const _0x3340f5 = _0x30e5ad(_0x9540cd);
        _0x279174[_0x5cf8d1 >> 0x2] = _0x3340f5;
        return _0x7a1931.toWireType(_0x9540cd, _0x31ee65);
      },
      'D': function (_0x46170a, _0xee7916, _0x29b36d, _0xab3458) {
        _0x46170a = _0x306d2f(_0x46170a);
        const _0x33dcae = _0x37d765(_0xee7916, _0x29b36d);
        const _0x128d81 = new Array(_0xee7916);
        for (let _0x324643 = 0x0; _0x324643 < _0xee7916; ++_0x324643) {
          const _0x1aa996 = _0x33dcae[_0x324643];
          _0x128d81[_0x324643] = _0x1aa996.readValueFromPointer(_0xab3458);
          _0xab3458 += _0x1aa996.argPackAdvance;
        }
        return _0x30e5ad(_0x46170a.apply(undefined, _0x128d81));
      },
      'b': function (_0x5acc3b, _0x4d161c, _0x338bd6, _0xd0e822, _0x56ed2b) {
        return (_0x5acc3b = _0x362d3c[_0x5acc3b])(_0x4d161c = _0x306d2f(_0x4d161c), _0x338bd6 = _0x43aa74(_0x338bd6), function (_0x118c3b) {
          const _0x1fe84b = [];
          _0x279174[_0x118c3b >> 0x2] = _0x30e5ad(_0x1fe84b);
          return _0x1fe84b;
        }(_0xd0e822), _0x56ed2b);
      },
      'f': function (_0x149c02, _0x35c931, _0x3877ee, _0x810870) {
        (_0x149c02 = _0x362d3c[_0x149c02])(_0x35c931 = _0x306d2f(_0x35c931), _0x3877ee = _0x43aa74(_0x3877ee), null, _0x810870);
      },
      'm': _0x4cc533,
      'y': function (_0x41797f) {
        return 0x0 === _0x41797f ? _0x30e5ad("object" == typeof globalThis ? globalThis : Function("return this")()) : (_0x41797f = _0x43aa74(_0x41797f), _0x30e5ad(("object" == typeof globalThis ? globalThis : Function("return this")())[_0x41797f]));
      },
      'a': function (_0x517333, _0x5a2356) {
        const _0x4e413b = _0x37d765(_0x517333, _0x5a2356);
        const _0xd59a00 = _0x4e413b[0x0];
        const _0x497c25 = _0xd59a00.name + '_$' + _0x4e413b.slice(0x1).map(function (_0x1a6299) {
          return _0x1a6299.name;
        }).join('_') + '$';
        const _0x5c0cfd = ["retType"];
        const _0x235636 = [_0xd59a00];
        let _0x5408c2 = '';
        for (var _0x1d9c4d = 0x0; _0x1d9c4d < _0x517333 - 0x1; ++_0x1d9c4d) {
          _0x5408c2 += (0x0 !== _0x1d9c4d ? ", " : '') + "arg" + _0x1d9c4d;
          _0x5c0cfd.push("argType" + _0x1d9c4d);
          _0x235636.push(_0x4e413b[0x1 + _0x1d9c4d]);
        }
        let _0x471869 = "return function " + _0x27f885("methodCaller_" + _0x497c25) + "(handle, name, destructors, args) {\n";
        let _0x3c92be = 0x0;
        for (_0x1d9c4d = 0x0; _0x1d9c4d < _0x517333 - 0x1; ++_0x1d9c4d) {
          _0x471869 += "    var arg" + _0x1d9c4d + " = argType" + _0x1d9c4d + '.readValueFromPointer(args' + (_0x3c92be ? '+' + _0x3c92be : '') + ");\n";
          _0x3c92be += _0x4e413b[_0x1d9c4d + 0x1].argPackAdvance;
        }
        _0x471869 += "var rv = handle[name](" + _0x5408c2 + ");\n";
        for (_0x1d9c4d = 0x0; _0x1d9c4d < _0x517333 - 0x1; ++_0x1d9c4d) {
          if (_0x4e413b[_0x1d9c4d + 0x1].deleteObject) {
            _0x471869 += "    argType" + _0x1d9c4d + ".deleteObject(arg" + _0x1d9c4d + ");\n";
          }
        }
        if (!_0xd59a00.isVoid) {
          _0x471869 += "    return retType.toWireType(destructors, rv);\n";
        }
        _0x471869 += "};\n";
        _0x5c0cfd.push(_0x471869);
        return function (_0x1f73e7) {
          const _0x9711cf = _0x362d3c.length;
          _0x362d3c.push(_0x1f73e7);
          return _0x9711cf;
        }(_0x3764e5(Function, _0x5c0cfd).apply(null, _0x235636));
      },
      'r': function (_0x51ce85) {
        _0x51ce85 = _0x43aa74(_0x51ce85);
        return _0x30e5ad(_0x3472e7[_0x51ce85]);
      },
      'i': function (_0x7af3db, _0x2fcfb0) {
        return _0x30e5ad((_0x7af3db = _0x306d2f(_0x7af3db))[_0x2fcfb0 = _0x306d2f(_0x2fcfb0)]);
      },
      'h': function (_0x3e060b) {
        if (_0x3e060b > 0x4) {
          _0x2dfb98[_0x3e060b].refcount += 0x1;
        }
      },
      'q': function (_0x280540, _0x1ca6f4) {
        return (_0x280540 = _0x306d2f(_0x280540)) instanceof _0x306d2f(_0x1ca6f4);
      },
      's': function (_0x53f6e9, _0x3e21ce, _0x10fe35, _0x33dc18) {
        _0x53f6e9 = _0x306d2f(_0x53f6e9);
        let _0x18ffde = _0x103628[_0x3e21ce];
        if (!_0x18ffde) {
          _0x18ffde = function (_0x1f5388) {
            let _0x252627 = '';
            for (var _0x593b17 = 0x0; _0x593b17 < _0x1f5388; ++_0x593b17) {
              _0x252627 += (0x0 !== _0x593b17 ? ", " : '') + "arg" + _0x593b17;
            }
            let _0x3d9aa3 = "return function emval_allocator_" + _0x1f5388 + "(constructor, argTypes, args) {\n";
            for (_0x593b17 = 0x0; _0x593b17 < _0x1f5388; ++_0x593b17) {
              _0x3d9aa3 += "var argType" + _0x593b17 + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + _0x593b17 + "], \"parameter " + _0x593b17 + "\");\nvar arg" + _0x593b17 + " = argType" + _0x593b17 + ".readValueFromPointer(args);\nargs += argType" + _0x593b17 + "['argPackAdvance'];\n";
            }
            _0x3d9aa3 += "var obj = new constructor(" + _0x252627 + ");\nreturn __emval_register(obj);\n}\n";
            return new Function("requireRegisteredType", "Module", "__emval_register", _0x3d9aa3)(_0x210245, _0x3472e7, _0x30e5ad);
          }(_0x3e21ce);
          _0x103628[_0x3e21ce] = _0x18ffde;
        }
        return _0x18ffde(_0x53f6e9, _0x10fe35, _0x33dc18);
      },
      'C': function () {
        return _0x30e5ad([]);
      },
      'z': function (_0x23fa3d) {
        return _0x30e5ad(_0x43aa74(_0x23fa3d));
      },
      'E': function () {
        return _0x30e5ad({});
      },
      'A': function (_0x5987b8) {
        _0x6d0097(_0x2dfb98[_0x5987b8].value);
        _0x4cc533(_0x5987b8);
      },
      'e': function (_0x379262, _0x27100b, _0x3f1473) {
        _0x379262 = _0x306d2f(_0x379262);
        _0x27100b = _0x306d2f(_0x27100b);
        _0x3f1473 = _0x306d2f(_0x3f1473);
        _0x379262[_0x27100b] = _0x3f1473;
      },
      'k': function (_0x44bad2, _0x2914be) {
        return _0x30e5ad((_0x44bad2 = _0x210245(_0x44bad2, '_emval_take_value')).readValueFromPointer(_0x2914be));
      },
      'B': function (_0x1a45ba) {
        return _0x30e5ad(typeof (_0x1a45ba = _0x306d2f(_0x1a45ba)));
      },
      'n': function () {
        _0x5b2646();
      },
      'u': function (_0x1060d) {
        _0x3e5848.length;
        _0x5b2646("OOM");
      }
    };
    !function () {
      const _0x1cee43 = {
        'a': _0x12edbc
      };
      function _0x3379db(_0x479a48, _0x214db9) {
        const _0x2f4a04 = _0x479a48.exports;
        var _0x426033;
        var _0x31125d;
        _0x3472e7.asm = _0x2f4a04;
        _0x15f5f9 = _0x3472e7.asm.F;
        _0x426033 = _0x15f5f9.buffer;
        _0x559953 = _0x426033;
        _0x3472e7.HEAP8 = _0x574c4b = new Int8Array(_0x426033);
        _0x3472e7.HEAP16 = _0x197777 = new Int16Array(_0x426033);
        _0x3472e7.HEAP32 = _0x279174 = new Int32Array(_0x426033);
        _0x3472e7.HEAPU8 = _0x3e5848 = new Uint8Array(_0x426033);
        _0x3472e7.HEAPU16 = _0x28eb78 = new Uint16Array(_0x426033);
        _0x3472e7.HEAPU32 = _0x30effc = new Uint32Array(_0x426033);
        _0x3472e7.HEAPF32 = _0x2c85f5 = new Float32Array(_0x426033);
        _0x3472e7.HEAPF64 = _0xb33b1b = new Float64Array(_0x426033);
        _0x430175 = _0x3472e7.asm.J;
        _0x31125d = _0x3472e7.asm.G;
        _0x2d38e5.unshift(_0x31125d);
        (function () {
          _0x13a03b--;
          if (_0x3472e7.monitorRunDependencies) {
            _0x3472e7.monitorRunDependencies(_0x13a03b);
          }
          if (0x0 == _0x13a03b && (null !== _0x328f8a && (clearInterval(_0x328f8a), _0x328f8a = null), _0x5676f5)) {
            const _0x149e6a = _0x5676f5;
            _0x5676f5 = null;
            _0x149e6a();
          }
        })();
      }
      function _0x918679(_0x1f370a) {
        _0x3379db(_0x1f370a.instance);
      }
      function _0x1f39a1(_0x38e8e6) {
        return function () {
          if (!_0x5939ad && (_0x15fcf4 || _0xa4d004)) {
            if ("function" == typeof fetch && !"https://senpa.io/web/static/js/bundle.wasm".startsWith("file://")) {
              return fetch("https://senpa.io/web/static/js/bundle.wasm", {
                'credentials': "same-origin"
              }).then(function (_0x169bff) {
                if (!_0x169bff.ok) {
                  throw "failed to load wasm binary file at 'https://senpa.io/web/static/js/bundle.wasm'";
                }
                return _0x169bff.arrayBuffer();
              })["catch"](function () {
                return _0xa8bd0b("https://senpa.io/web/static/js/bundle.wasm");
              });
            }
            if (_0x23bf1b) {
              return new Promise(function (_0x150d4c, _0x498c20) {
                _0x23bf1b("https://senpa.io/web/static/js/bundle.wasm", function (_0x32f074) {
                  _0x150d4c(new Uint8Array(_0x32f074));
                }, _0x498c20);
              });
            }
          }
          return Promise.resolve().then(function () {
            return _0xa8bd0b("https://senpa.io/web/static/js/bundle.wasm");
          });
        }().then(function (_0x3dfa64) {
          return WebAssembly.instantiate(_0x3dfa64, _0x1cee43);
        }).then(function (_0x3f7df7) {
          return _0x3f7df7;
        }).then(_0x38e8e6, function (_0x4c783a) {
          _0x450e60("failed to asynchronously prepare wasm: " + _0x4c783a);
          _0x5b2646(_0x4c783a);
        });
      }
      _0x13a03b++;
      if (_0x3472e7.monitorRunDependencies) {
        _0x3472e7.monitorRunDependencies(_0x13a03b);
      }
      if (_0x3472e7.instantiateWasm) {
        try {
          return _0x3472e7.instantiateWasm(_0x1cee43, _0x3379db);
        } catch (_0x4323ae) {
          _0x450e60("Module.instantiateWasm callback failed with error: " + _0x4323ae);
          return false;
        }
      }
      if (_0x5939ad || "function" != typeof WebAssembly.instantiateStreaming || "https://senpa.io/web/static/js/bundle.wasm".startsWith("data:application/octet-stream;base64,") || "https://senpa.io/web/static/js/bundle.wasm".startsWith("file://") || "function" != typeof fetch) {
        _0x1f39a1(_0x918679);
      } else {
        fetch(new URL(_0xacbe3c(0x357), _0xacbe3c.b).toString(), {
          'credentials': 'same-origin'
        }).then(function (_0x4670eb) {
          return WebAssembly.instantiateStreaming(_0x4670eb, _0x1cee43).then(_0x918679, function (_0x1bbe7c) {
            _0x450e60("wasm streaming compile failed: " + _0x1bbe7c);
            _0x450e60("falling back to ArrayBuffer instantiation");
            return _0x1f39a1(_0x918679);
          });
        });
      }
    }();
    _0x3472e7.___wasm_call_ctors = function () {
      return (_0x3472e7.___wasm_call_ctors = _0x3472e7.asm.G).apply(null, arguments);
    };
    var _0x4ea44a = _0x3472e7._malloc = function () {
      return (_0x4ea44a = _0x3472e7._malloc = _0x3472e7.asm.H).apply(null, arguments);
    };
    _0x3472e7._main = function () {
      return (_0x3472e7._main = _0x3472e7.asm.I).apply(null, arguments);
    };
    var _0x3bebe9 = _0x3472e7.___getTypeName = function () {
      return (_0x3bebe9 = _0x3472e7.___getTypeName = _0x3472e7.asm.K).apply(null, arguments);
    };
    _0x3472e7.___embind_register_native_and_builtin_types = function () {
      return (_0x3472e7.___embind_register_native_and_builtin_types = _0x3472e7.asm.L).apply(null, arguments);
    };
    var _0x18f9a8 = _0x3472e7._free = function () {
      return (_0x18f9a8 = _0x3472e7._free = _0x3472e7.asm.M).apply(null, arguments);
    };
    let _0x4186b4;
    function _0xe8d781(_0x3e6421) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x3e6421 + ')';
      this.status = _0x3e6421;
    }
    let _0x4437d4 = false;
    function _0x304d18(_0x401de0) {
      function _0x119e3e() {
        if (!_0x4186b4) {
          _0x4186b4 = true;
          _0x3472e7.calledRun = true;
          if (!_0xa55d4a) {
            _0xa5450e = true;
            _0x4e9d21(_0x2d38e5);
            _0x4e9d21(_0x5a6f61);
            if (_0x3472e7.onRuntimeInitialized) {
              _0x3472e7.onRuntimeInitialized();
            }
            if (_0x3365ed) {
              (function () {
                const _0x32e1ee = _0x3472e7._main;
                try {
                  const _0x14bfe6 = _0x32e1ee(0x0, 0x0);
                  _0x261a21 = _0x5ec5b2 = _0x14bfe6;
                  if (!(_0x558949 || false)) {
                    _0x184096 = true;
                  }
                  _0x261a21 = _0x5e427e = _0x5ec5b2;
                  if (!(_0x558949 || false)) {
                    if (_0x3472e7.onExit) {
                      _0x3472e7.onExit(_0x5e427e);
                    }
                    _0xa55d4a = true;
                  }
                  _0xb5b55f(_0x5e427e, new _0xe8d781(_0x5e427e));
                  return _0x14bfe6;
                } catch (_0x3f30b) {
                  return function (_0x4f9217) {
                    if (_0x4f9217 instanceof _0xe8d781 || "unwind" == _0x4f9217) {
                      return _0x261a21;
                    }
                    _0x450e60("exception thrown: " + _0x4f9217);
                    _0xb5b55f(0x1, _0x4f9217);
                  }(_0x3f30b);
                } finally {
                  _0x4437d4 = true;
                }
                var _0x5ec5b2;
                var _0x5e427e;
              })();
            }
            (function () {
              if (_0x3472e7.postRun) {
                for ("function" == typeof _0x3472e7.postRun && (_0x3472e7.postRun = [_0x3472e7.postRun]); _0x3472e7.postRun.length;) {
                  _0x281a33 = _0x3472e7.postRun.shift();
                  _0x3bd028.unshift(_0x281a33);
                }
              }
              var _0x281a33;
              _0x4e9d21(_0x3bd028);
            })();
          }
        }
      }
      _0x401de0 = _0x401de0 || _0x3e4262;
      if (!(_0x13a03b > 0x0)) {
        (function () {
          if (_0x3472e7.preRun) {
            for ('function' == typeof _0x3472e7.preRun && (_0x3472e7.preRun = [_0x3472e7.preRun]); _0x3472e7.preRun.length;) {
              _0x36ba14 = _0x3472e7.preRun.shift();
              _0x11c2f9.unshift(_0x36ba14);
            }
          }
          var _0x36ba14;
          _0x4e9d21(_0x11c2f9);
        })();
        if (!(_0x13a03b > 0x0)) {
          if (_0x3472e7.setStatus) {
            _0x3472e7.setStatus("Running...");
            setTimeout(function () {
              setTimeout(function () {
                _0x3472e7.setStatus('');
              }, 0x1);
              _0x119e3e();
            }, 0x1);
          } else {
            _0x119e3e();
          }
        }
      }
    }
    _0x5676f5 = function _0x1692ce() {
      if (!_0x4186b4) {
        _0x304d18();
      }
      if (!_0x4186b4) {
        _0x5676f5 = _0x1692ce;
      }
    };
    _0x3472e7.run = _0x304d18;
    if (_0x3472e7.preInit) {
      for ("function" == typeof _0x3472e7.preInit && (_0x3472e7.preInit = [_0x3472e7.preInit]); _0x3472e7.preInit.length > 0x0;) {
        _0x3472e7.preInit.pop()();
      }
    }
    var _0x3365ed = true;
    if (_0x3472e7.noInitialRun) {
      _0x3365ed = false;
    }
    _0x304d18();
    window.Module = _0x3472e7;
  },
  0x357: (_0x46485c, _0x3549cb, _0x34284e) => {
    _0x46485c.exports = _0x34284e.p + "c51c683181e1a6c84878.wasm";
  }
}]);