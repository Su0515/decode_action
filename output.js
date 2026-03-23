//Mon Mar 23 2026 08:59:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  var _0x599c22 = {
    7377(_0x54e674, _0x28c136, _0x3ed500) {
      _0x54e674.exports = {
        parallel: _0x3ed500(9790),
        serial: _0x3ed500(4225),
        serialOrdered: _0x3ed500(1500)
      };
    },
    9355(_0x4c634e) {
      {
        function _0x1dc859(_0xcbe761) {
          "function" == typeof this.jobs[_0xcbe761] && this.jobs[_0xcbe761]();
        }
        _0x4c634e.exports = function (_0x255377) {
          {
            Object.keys(_0x255377.jobs).forEach(_0x1dc859.bind(_0x255377));
            _0x255377.jobs = {};
          }
        };
      }
    },
    7913(_0x413fd9, _0x4f6bf4, _0x522682) {
      {
        var _0x719c6a = _0x522682(6181);
        _0x413fd9.exports = function (_0x7f9a7d) {
          var _0x3d7917 = false;
          _0x719c6a(function () {
            {
              _0x3d7917 = true;
            }
          });
          return function (_0x9ba178, _0x2a2c09) {
            _0x3d7917 ? _0x7f9a7d(_0x9ba178, _0x2a2c09) : _0x719c6a(function () {
              {
                _0x7f9a7d(_0x9ba178, _0x2a2c09);
              }
            });
          };
        };
      }
    },
    6181(_0x272c5f) {
      _0x272c5f.exports = function (_0x356a91) {
        var _0x45c5b9 = "function" == typeof setImmediate ? setImmediate : "object" == typeof process && "function" == typeof process.nextTick ? process.nextTick : null;
        _0x45c5b9 ? _0x45c5b9(_0x356a91) : setTimeout(_0x356a91, 0);
      };
    },
    2851(_0x44e12f, _0x4347be, _0x1cfc2e) {
      var _0xa74291 = _0x1cfc2e(7913);
      var _0x70c204 = _0x1cfc2e(9355);
      _0x44e12f.exports = function (_0x55ba19, _0x31c14f, _0x2118be, _0x49bb37) {
        var _0x3e8c04 = _0x2118be.keyedList ? _0x2118be.keyedList[_0x2118be.index] : _0x2118be.index;
        _0x2118be.jobs[_0x3e8c04] = function (_0x2cc651, _0x54e49c, _0x4a0fe6, _0x598e0d) {
          return 2 == _0x2cc651.length ? _0x2cc651(_0x4a0fe6, _0xa74291(_0x598e0d)) : _0x2cc651(_0x4a0fe6, _0x54e49c, _0xa74291(_0x598e0d));
        }(_0x31c14f, _0x3e8c04, _0x55ba19[_0x3e8c04], function (_0xaf0bd5, _0x110da8) {
          _0x3e8c04 in _0x2118be.jobs && (delete _0x2118be.jobs[_0x3e8c04], _0xaf0bd5 ? _0x70c204(_0x2118be) : _0x2118be.results[_0x3e8c04] = _0x110da8, _0x49bb37(_0xaf0bd5, _0x2118be.results));
        });
      };
    },
    3996(_0x620692) {
      _0x620692.exports = function (_0x5ceef6, _0x4637c2) {
        var _0x3134c8 = !Array.isArray(_0x5ceef6);
        var _0x598532 = {
          index: 0,
          keyedList: _0x3134c8 || _0x4637c2 ? Object.keys(_0x5ceef6) : null,
          jobs: {},
          results: _0x3134c8 ? {} : [],
          size: _0x3134c8 ? Object.keys(_0x5ceef6).length : _0x5ceef6.length
        };
        _0x4637c2 && _0x598532.keyedList.sort(_0x3134c8 ? _0x4637c2 : function (_0x249581, _0x5f25ff) {
          {
            return _0x4637c2(_0x5ceef6[_0x249581], _0x5ceef6[_0x5f25ff]);
          }
        });
        return _0x598532;
      };
    },
    1044(_0x1a0a2d, _0x5c4153, _0x59e1e9) {
      {
        var _0x52150d = _0x59e1e9(9355);
        var _0x166c34 = _0x59e1e9(7913);
        _0x1a0a2d.exports = function (_0x382a7d) {
          Object.keys(this.jobs).length && (this.index = this.size, _0x52150d(this), _0x166c34(_0x382a7d)(null, this.results));
        };
      }
    },
    9790(_0x3f89d3, _0x12be6b, _0x29403b) {
      {
        var _0xd496a6 = _0x29403b(2851);
        var _0x2f10af = _0x29403b(3996);
        var _0x272f0f = _0x29403b(1044);
        _0x3f89d3.exports = function (_0x298f8a, _0x48f02f, _0x4d8268) {
          {
            for (var _0x110bb3 = _0x2f10af(_0x298f8a); _0x110bb3.index < (_0x110bb3.keyedList || _0x298f8a).length;) {
              _0xd496a6(_0x298f8a, _0x48f02f, _0x110bb3, function (_0x3a1c37, _0x2988a5) {
                _0x3a1c37 ? _0x4d8268(_0x3a1c37, _0x2988a5) : 0 !== Object.keys(_0x110bb3.jobs).length || _0x4d8268(null, _0x110bb3.results);
              });
              _0x110bb3.index++;
            }
            return _0x272f0f.bind(_0x110bb3, _0x4d8268);
          }
        };
      }
    },
    4225(_0x3969ba, _0x3eae68, _0x18b3b7) {
      var _0x5a88df = _0x18b3b7(1500);
      _0x3969ba.exports = function (_0x11a7cc, _0x299c0c, _0xa74969) {
        return _0x5a88df(_0x11a7cc, _0x299c0c, null, _0xa74969);
      };
    },
    1500(_0x5d3e02, _0x4ba774, _0x47bac4) {
      {
        var _0x55a64a = _0x47bac4(2851);
        var _0x3f09a4 = _0x47bac4(3996);
        var _0x3593d2 = _0x47bac4(1044);
        function _0x3818a4(_0x45357b, _0x458255) {
          {
            return _0x458255 > _0x45357b ? -1 : _0x45357b > _0x458255 ? 1 : 0;
          }
        }
        _0x5d3e02.exports = function (_0x116051, _0x1179e6, _0x32fa87, _0x27d3ee) {
          var _0x6327d2 = _0x3f09a4(_0x116051, _0x32fa87);
          _0x55a64a(_0x116051, _0x1179e6, _0x6327d2, function _0x516523(_0x124382, _0x278814) {
            _0x124382 ? _0x27d3ee(_0x124382, _0x278814) : (_0x6327d2.index++, _0x6327d2.index < (_0x6327d2.keyedList || _0x116051).length ? _0x55a64a(_0x116051, _0x1179e6, _0x6327d2, _0x516523) : _0x27d3ee(null, _0x6327d2.results));
          });
          return _0x3593d2.bind(_0x6327d2, _0x27d3ee);
        };
        _0x5d3e02.exports.ascending = _0x3818a4;
        _0x5d3e02.exports.descending = function (_0x1a4efc, _0x31296b) {
          return -1 * _0x3818a4(_0x1a4efc, _0x31296b);
        };
      }
    },
    5674(_0x300389, _0x4eec4e, _0x276dce) {
      "use strict";

      var _0x4865fa = _0x276dce(3583);
      var _0x61baeb = _0x276dce(1948);
      var _0x193992 = _0x276dce(2878);
      var _0x3e362b = _0x276dce(741);
      _0x300389.exports = _0x3e362b || _0x4865fa.call(_0x193992, _0x61baeb);
    },
    1948(_0x47d92b) {
      "use strict";

      {
        _0x47d92b.exports = function () {}.apply;
      }
    },
    2878(_0x33ee34) {
      "use strict";

      _0x33ee34.exports = function () {}.call;
    },
    5312(_0x2d050a, _0x36f955, _0x338531) {
      "use strict";

      var _0x1b7b9e = _0x338531(3583);
      var _0x39b9d1 = _0x338531(7379);
      var _0x3032d1 = _0x338531(2878);
      var _0x15bba1 = _0x338531(5674);
      _0x2d050a.exports = function (_0x534874) {
        if (1 > _0x534874.length || "function" != typeof _0x534874[0]) {
          throw new _0x39b9d1("a function is required");
        }
        return _0x15bba1(_0x1b7b9e, _0x3032d1, _0x534874);
      };
    },
    741(_0x181cfb) {
      "use strict";

      _0x181cfb.exports = "undefined" != typeof Reflect && Reflect && Reflect.apply;
    },
    3564(_0x38c9e8, _0x33835f, _0x50f35f) {
      var _0x95a883 = _0x50f35f(9023);
      var _0x1c332e = _0x50f35f(2203).Stream;
      var _0x19febb = _0x50f35f(1003);
      function _0x831298() {
        {
          this.writable = false;
          this.readable = true;
          this.dataSize = 0;
          this.maxDataSize = 2097152;
          this.pauseStreams = true;
          this._released = false;
          this._streams = [];
          this._currentStream = null;
          this._insideLoop = false;
          this._pendingNext = false;
        }
      }
      _0x38c9e8.exports = _0x831298;
      _0x95a883.inherits(_0x831298, _0x1c332e);
      _0x831298.create = function (_0xa4ccf0) {
        var _0x223b80 = new this();
        for (var _0x5bfc42 in _0xa4ccf0 = _0xa4ccf0 || {}) _0x223b80[_0x5bfc42] = _0xa4ccf0[_0x5bfc42];
        return _0x223b80;
      };
      _0x831298.isStreamLike = function (_0x7e584e) {
        return "function" != typeof _0x7e584e && "string" != typeof _0x7e584e && "boolean" != typeof _0x7e584e && "number" != typeof _0x7e584e && !Buffer.isBuffer(_0x7e584e);
      };
      _0x831298.prototype.append = function (_0x447b55) {
        if (_0x831298.isStreamLike(_0x447b55)) {
          if (!(_0x447b55 instanceof _0x19febb)) {
            var _0x4b45ac = _0x19febb.create(_0x447b55, {
              maxDataSize: Infinity,
              pauseStream: this.pauseStreams
            });
            _0x447b55.on("data", this._checkDataSize.bind(this));
            _0x447b55 = _0x4b45ac;
          }
          this._handleErrors(_0x447b55);
          this.pauseStreams && _0x447b55.pause();
        }
        this._streams.push(_0x447b55);
        return this;
      };
      _0x831298.prototype.pipe = function (_0x56a602, _0x19330c) {
        {
          _0x1c332e.prototype.pipe.call(this, _0x56a602, _0x19330c);
          this.resume();
          return _0x56a602;
        }
      };
      _0x831298.prototype._getNext = function () {
        {
          if (this._currentStream = null, this._insideLoop) {
            this._pendingNext = true;
          } else {
            this._insideLoop = true;
            try {
              do {
                this._pendingNext = false;
                this._realGetNext();
              } while (this._pendingNext);
            } finally {
              this._insideLoop = false;
            }
          }
        }
      };
      _0x831298.prototype._realGetNext = function () {
        var _0x4dede0 = this._streams.shift();
        undefined !== _0x4dede0 ? "function" == typeof _0x4dede0 ? _0x4dede0(function (_0x1af2d3) {
          _0x831298.isStreamLike(_0x1af2d3) && (_0x1af2d3.on("data", this._checkDataSize.bind(this)), this._handleErrors(_0x1af2d3));
          this._pipeNext(_0x1af2d3);
        }.bind(this)) : this._pipeNext(_0x4dede0) : this.end();
      };
      _0x831298.prototype._pipeNext = function (_0x890bfa) {
        {
          if (this._currentStream = _0x890bfa, _0x831298.isStreamLike(_0x890bfa)) {
            _0x890bfa.on("end", this._getNext.bind(this));
            return void _0x890bfa.pipe(this, {
              end: false
            });
          }
          var _0x28244d = _0x890bfa;
          this.write(_0x28244d);
          this._getNext();
        }
      };
      _0x831298.prototype._handleErrors = function (_0x32c719) {
        var _0x4ebfa0 = this;
        _0x32c719.on("error", function (_0x594ea2) {
          _0x4ebfa0._emitError(_0x594ea2);
        });
      };
      _0x831298.prototype.write = function (_0x5cb093) {
        this.emit("data", _0x5cb093);
      };
      _0x831298.prototype.pause = function () {
        this.pauseStreams && (this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.pause && this._currentStream.pause(), this.emit("pause"));
      };
      _0x831298.prototype.resume = function () {
        this._released || (this._released = true, this.writable = true, this._getNext());
        this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.resume && this._currentStream.resume();
        this.emit("resume");
      };
      _0x831298.prototype.end = function () {
        this._reset();
        this.emit("end");
      };
      _0x831298.prototype.destroy = function () {
        this._reset();
        this.emit("close");
      };
      _0x831298.prototype._reset = function () {
        this.writable = false;
        this._streams = [];
        this._currentStream = null;
      };
      _0x831298.prototype._checkDataSize = function () {
        if (this._updateDataSize(), this.dataSize > this.maxDataSize) {
          var _0x1c148d = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
          this._emitError(Error(_0x1c148d));
        }
      };
      _0x831298.prototype._updateDataSize = function () {
        {
          this.dataSize = 0;
          var _0xc76748 = this;
          this._streams.forEach(function (_0xbcf39f) {
            _0xbcf39f.dataSize && (_0xc76748.dataSize += _0xbcf39f.dataSize);
          });
          this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
        }
      };
      _0x831298.prototype._emitError = function (_0x2e3fa3) {
        this._reset();
        this.emit("error", _0x2e3fa3);
      };
    },
    221(_0x30e033, _0x54a989, _0x2e1ea3) {
      _0x54a989.formatArgs = function (_0x8231b6) {
        {
          if (_0x8231b6[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + _0x8231b6[0] + (this.useColors ? "%c " : " ") + "+" + _0x30e033.exports.humanize(this.diff), !this.useColors) {
            return;
          }
          const _0x2599cc = "color: " + this.color;
          _0x8231b6.splice(1, 0, _0x2599cc, "color: inherit");
          let _0x4230aa = 0;
          let _0x4dc39b = 0;
          _0x8231b6[0].replace(/%[a-zA-Z%]/g, _0x34fc02 => {
            "%%" !== _0x34fc02 && (_0x4230aa++, "%c" === _0x34fc02 && (_0x4dc39b = _0x4230aa));
          });
          _0x8231b6.splice(_0x4dc39b, 0, _0x2599cc);
        }
      };
      _0x54a989.save = function (_0x14a3f9) {
        try {
          {
            _0x14a3f9 ? _0x54a989.storage.setItem("debug", _0x14a3f9) : _0x54a989.storage.removeItem("debug");
          }
        } catch (_0x563d3) {}
      };
      _0x54a989.load = function () {
        let _0x29a4c1;
        try {
          _0x29a4c1 = _0x54a989.storage.getItem("debug") || _0x54a989.storage.getItem("DEBUG");
        } catch (_0xe5a557) {}
        !_0x29a4c1 && "undefined" != typeof process && "env" in process && (_0x29a4c1 = process.env.DEBUG);
        return _0x29a4c1;
      };
      _0x54a989.useColors = function () {
        if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) {
          return true;
        }
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let _0x31cdad;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (_0x31cdad = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(_0x31cdad[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      };
      _0x54a989.storage = function () {
        try {
          return localStorage;
        } catch (_0x3197c8) {}
      }();
      _0x54a989.destroy = (() => {
        let _0x2eb24c = false;
        return () => {
          {
            _0x2eb24c || (_0x2eb24c = true);
          }
        };
      })();
      _0x54a989.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      _0x54a989.log = console.debug || console.log || (() => {});
      _0x30e033.exports = _0x2e1ea3(6156)(_0x54a989);
      const {
        formatters: _0x1d4480
      } = _0x30e033.exports;
      _0x1d4480.j = function (_0x281d12) {
        try {
          return JSON.stringify(_0x281d12);
        } catch (_0xba9505) {
          return "[UnexpectedJSONParseError]: " + _0xba9505.message;
        }
      };
    },
    6156(_0x370b38, _0x477402, _0x4a58ef) {
      _0x370b38.exports = function (_0x36f1bd) {
        function _0x160297(_0x43641a) {
          let _0x3770b7;
          let _0x2dd28c;
          let _0x4b44ce;
          let _0x1dedee = null;
          function _0x583e39(..._0x473bc7) {
            {
              if (!_0x583e39.enabled) {
                return;
              }
              const _0x4ddb8d = _0x583e39;
              const _0xe823bc = +new Date();
              const _0x1a2cfa = _0xe823bc - (_0x3770b7 || _0xe823bc);
              _0x4ddb8d.diff = _0x1a2cfa;
              _0x4ddb8d.prev = _0x3770b7;
              _0x4ddb8d.curr = _0xe823bc;
              _0x3770b7 = _0xe823bc;
              _0x473bc7[0] = _0x160297.coerce(_0x473bc7[0]);
              "string" != typeof _0x473bc7[0] && _0x473bc7.unshift("%O");
              let _0x3204d5 = 0;
              _0x473bc7[0] = _0x473bc7[0].replace(/%([a-zA-Z%])/g, (_0x4ab3a4, _0x588fce) => {
                {
                  if ("%%" === _0x4ab3a4) {
                    return "%";
                  }
                  _0x3204d5++;
                  const _0x5234d9 = _0x160297.formatters[_0x588fce];
                  if ("function" == typeof _0x5234d9) {
                    {
                      const _0x57b9cc = _0x473bc7[_0x3204d5];
                      _0x4ab3a4 = _0x5234d9.call(_0x4ddb8d, _0x57b9cc);
                      _0x473bc7.splice(_0x3204d5, 1);
                      _0x3204d5--;
                    }
                  }
                  return _0x4ab3a4;
                }
              });
              _0x160297.formatArgs.call(_0x4ddb8d, _0x473bc7);
              (_0x4ddb8d.log || _0x160297.log).apply(_0x4ddb8d, _0x473bc7);
            }
          }
          _0x583e39.namespace = _0x43641a;
          _0x583e39.useColors = _0x160297.useColors();
          _0x583e39.color = _0x160297.selectColor(_0x43641a);
          _0x583e39.extend = _0x3f1a2c;
          _0x583e39.destroy = _0x160297.destroy;
          Object.defineProperty(_0x583e39, "enabled", {
            enumerable: true,
            configurable: false,
            get() {
              return null !== _0x1dedee ? _0x1dedee : (_0x2dd28c !== _0x160297.namespaces && (_0x2dd28c = _0x160297.namespaces, _0x4b44ce = _0x160297.enabled(_0x43641a)), _0x4b44ce);
            },
            set(_0x141a47) {
              _0x1dedee = _0x141a47;
            }
          });
          "function" == typeof _0x160297.init && _0x160297.init(_0x583e39);
          return _0x583e39;
        }
        function _0x3f1a2c(_0x53d52d, _0x248c22) {
          const _0x4ac4d0 = _0x160297(this.namespace + (undefined === _0x248c22 ? ":" : _0x248c22) + _0x53d52d);
          _0x4ac4d0.log = this.log;
          return _0x4ac4d0;
        }
        function _0x32b7ca(_0x1860bb, _0x406757) {
          let _0x4cd8e9 = 0;
          let _0x2ed1ec = 0;
          let _0xd68782 = -1;
          let _0x3e60a2 = 0;
          for (; _0x4cd8e9 < _0x1860bb.length;) {
            if (_0x2ed1ec >= _0x406757.length || _0x406757[_0x2ed1ec] !== _0x1860bb[_0x4cd8e9] && "*" !== _0x406757[_0x2ed1ec]) {
              if (-1 === _0xd68782) {
                return false;
              }
              _0x2ed1ec = _0xd68782 + 1;
              _0x3e60a2++;
              _0x4cd8e9 = _0x3e60a2;
            } else {
              "*" === _0x406757[_0x2ed1ec] ? (_0xd68782 = _0x2ed1ec, _0x3e60a2 = _0x4cd8e9, _0x2ed1ec++) : (_0x4cd8e9++, _0x2ed1ec++);
            }
          }
          for (; _0x2ed1ec < _0x406757.length && "*" === _0x406757[_0x2ed1ec];) {
            _0x2ed1ec++;
          }
          return _0x2ed1ec === _0x406757.length;
        }
        _0x160297.debug = _0x160297;
        _0x160297.default = _0x160297;
        _0x160297.coerce = function (_0x14519f) {
          return _0x14519f instanceof Error ? _0x14519f.stack || _0x14519f.message : _0x14519f;
        };
        _0x160297.disable = function () {
          const _0x4bdd91 = [..._0x160297.names, ..._0x160297.skips.map(_0x18816c => "-" + _0x18816c)].join(",");
          _0x160297.enable("");
          return _0x4bdd91;
        };
        _0x160297.enable = function (_0x53ca52) {
          _0x160297.save(_0x53ca52);
          _0x160297.namespaces = _0x53ca52;
          _0x160297.names = [];
          _0x160297.skips = [];
          const _0x357ec8 = ("string" == typeof _0x53ca52 ? _0x53ca52 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
          for (const _0x47a03d of _0x357ec8) "-" === _0x47a03d[0] ? _0x160297.skips.push(_0x47a03d.slice(1)) : _0x160297.names.push(_0x47a03d);
        };
        _0x160297.enabled = function (_0x405a2d) {
          for (const _0x45b1d7 of _0x160297.skips) if (_0x32b7ca(_0x405a2d, _0x45b1d7)) {
            return false;
          }
          for (const _0x272374 of _0x160297.names) if (_0x32b7ca(_0x405a2d, _0x272374)) {
            return true;
          }
          return false;
        };
        _0x160297.humanize = _0x4a58ef(9049);
        _0x160297.destroy = function () {};
        Object.keys(_0x36f1bd).forEach(_0x387d9c => {
          {
            _0x160297[_0x387d9c] = _0x36f1bd[_0x387d9c];
          }
        });
        _0x160297.names = [];
        _0x160297.skips = [];
        _0x160297.formatters = {};
        _0x160297.selectColor = function (_0x317462) {
          let _0x378572 = 0;
          for (let _0x458bc1 = 0; _0x458bc1 < _0x317462.length; _0x458bc1++) {
            _0x378572 = (_0x378572 << 5) - _0x378572 + _0x317462.charCodeAt(_0x458bc1);
            _0x378572 |= 0;
          }
          return _0x160297.colors[Math.abs(_0x378572) % _0x160297.colors.length];
        };
        _0x160297.enable(_0x160297.load());
        return _0x160297;
      };
    },
    7181(_0x1df040, _0x1fa738, _0x9b1839) {
      "undefined" == typeof process || "renderer" === process.type || true === process.browser || process.__nwjs ? _0x1df040.exports = _0x9b1839(221) : _0x1df040.exports = _0x9b1839(9365);
    },
    9365(_0x43cefd, _0x461253, _0x4a2cdd) {
      const _0x33926f = _0x4a2cdd(2018);
      const _0x30c657 = _0x4a2cdd(9023);
      _0x461253.init = function (_0xcd74ca) {
        _0xcd74ca.inspectOpts = {};
        const _0xcde6ca = Object.keys(_0x461253.inspectOpts);
        for (let _0x434c3e = 0; _0x434c3e < _0xcde6ca.length; _0x434c3e++) {
          _0xcd74ca.inspectOpts[_0xcde6ca[_0x434c3e]] = _0x461253.inspectOpts[_0xcde6ca[_0x434c3e]];
        }
      };
      _0x461253.log = function (..._0x301e70) {
        {
          return process.stderr.write(_0x30c657.formatWithOptions(_0x461253.inspectOpts, ..._0x301e70) + "\n");
        }
      };
      _0x461253.formatArgs = function (_0x2eb973) {
        const {
          namespace: _0x189a8e,
          useColors: _0x6a015d
        } = this;
        if (_0x6a015d) {
          {
            const _0x51cfbf = this.color;
            const _0x45fd1e = "[3" + (8 > _0x51cfbf ? _0x51cfbf : "8;5;" + _0x51cfbf);
            const _0x655785 = "  " + _0x45fd1e + ";1m" + _0x189a8e + " [0m";
            _0x2eb973[0] = _0x655785 + _0x2eb973[0].split("\n").join("\n" + _0x655785);
            _0x2eb973.push(_0x45fd1e + "m+" + _0x43cefd.exports.humanize(this.diff) + "[0m");
          }
        } else {
          _0x2eb973[0] = (_0x461253.inspectOpts.hideDate ? "" : new Date().toISOString() + " ") + _0x189a8e + " " + _0x2eb973[0];
        }
      };
      _0x461253.save = function (_0x5b627d) {
        {
          _0x5b627d ? process.env.DEBUG = _0x5b627d : delete process.env.DEBUG;
        }
      };
      _0x461253.load = function () {
        return process.env.DEBUG;
      };
      _0x461253.useColors = function () {
        return "colors" in _0x461253.inspectOpts ? !!_0x461253.inspectOpts.colors : _0x33926f.isatty(process.stderr.fd);
      };
      _0x461253.destroy = _0x30c657.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      _0x461253.colors = [6, 2, 3, 4, 5, 1];
      try {
        {
          const _0x4cbe35 = _0x4a2cdd(4217);
          _0x4cbe35 && (_0x4cbe35.stderr || _0x4cbe35).level >= 2 && (_0x461253.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
        }
      } catch (_0x7af226) {}
      _0x461253.inspectOpts = Object.keys(process.env).filter(_0x4b1e59 => /^debug_/i.test(_0x4b1e59)).reduce((_0x1bd9dc, _0x6ae0c8) => {
        const _0x115abf = _0x6ae0c8.substring(6).toLowerCase().replace(/_([a-z])/g, (_0x54f7a8, _0x45a16c) => _0x45a16c.toUpperCase());
        let _0x17d4fd = process.env[_0x6ae0c8];
        _0x17d4fd = !!/^(yes|on|true|enabled)$/i.test(_0x17d4fd) || !/^(no|off|false|disabled)$/i.test(_0x17d4fd) && ("null" === _0x17d4fd ? null : +_0x17d4fd);
        _0x1bd9dc[_0x115abf] = _0x17d4fd;
        return _0x1bd9dc;
      }, {});
      _0x43cefd.exports = _0x4a2cdd(6156)(_0x461253);
      const {
        formatters: _0x293226
      } = _0x43cefd.exports;
      _0x293226.o = function (_0x22c0ac) {
        this.inspectOpts.colors = this.useColors;
        return _0x30c657.inspect(_0x22c0ac, this.inspectOpts).split("\n").map(_0x493b57 => _0x493b57.trim()).join(" ");
      };
      _0x293226.O = function (_0x57612f) {
        this.inspectOpts.colors = this.useColors;
        return _0x30c657.inspect(_0x57612f, this.inspectOpts);
      };
    },
    1003(_0x1ac928, _0x2d5551, _0x2465d1) {
      var _0x300680 = _0x2465d1(2203).Stream;
      var _0x2c6fe0 = _0x2465d1(9023);
      function _0x1c5db5() {
        this.source = null;
        this.dataSize = 0;
        this.maxDataSize = 1048576;
        this.pauseStream = true;
        this._maxDataSizeExceeded = false;
        this._released = false;
        this._bufferedEvents = [];
      }
      _0x1ac928.exports = _0x1c5db5;
      _0x2c6fe0.inherits(_0x1c5db5, _0x300680);
      _0x1c5db5.create = function (_0x287493, _0x333d16) {
        var _0x23a2bc = new this();
        for (var _0x3fb9d6 in _0x333d16 = _0x333d16 || {}) _0x23a2bc[_0x3fb9d6] = _0x333d16[_0x3fb9d6];
        _0x23a2bc.source = _0x287493;
        var _0x181ae5 = _0x287493.emit;
        _0x287493.emit = function () {
          {
            _0x23a2bc._handleEmit(arguments);
            return _0x181ae5.apply(_0x287493, arguments);
          }
        };
        _0x287493.on("error", function () {});
        _0x23a2bc.pauseStream && _0x287493.pause();
        return _0x23a2bc;
      };
      Object.defineProperty(_0x1c5db5.prototype, "readable", {
        configurable: true,
        enumerable: true,
        get() {
          return this.source.readable;
        }
      });
      _0x1c5db5.prototype.setEncoding = function () {
        return this.source.setEncoding.apply(this.source, arguments);
      };
      _0x1c5db5.prototype.resume = function () {
        this._released || this.release();
        this.source.resume();
      };
      _0x1c5db5.prototype.pause = function () {
        {
          this.source.pause();
        }
      };
      _0x1c5db5.prototype.release = function () {
        this._released = true;
        this._bufferedEvents.forEach(function (_0x160f30) {
          this.emit.apply(this, _0x160f30);
        }.bind(this));
        this._bufferedEvents = [];
      };
      _0x1c5db5.prototype.pipe = function () {
        {
          var _0x18bc8c = _0x300680.prototype.pipe.apply(this, arguments);
          this.resume();
          return _0x18bc8c;
        }
      };
      _0x1c5db5.prototype._handleEmit = function (_0x29b391) {
        this._released ? this.emit.apply(this, _0x29b391) : ("data" === _0x29b391[0] && (this.dataSize += _0x29b391[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(_0x29b391));
      };
      _0x1c5db5.prototype._checkIfMaxDataSizeExceeded = function () {
        if (!this._maxDataSizeExceeded && this.dataSize > this.maxDataSize) {
          this._maxDataSizeExceeded = true;
          var _0x2d527c = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
          this.emit("error", Error(_0x2d527c));
        }
      };
    },
    1449(_0x495409, _0x167451, _0x5caf1e) {
      "use strict";

      var _0x358d14;
      var _0x4978d8 = _0x5caf1e(5312);
      var _0x11e6d5 = _0x5caf1e(3492);
      try {
        _0x358d14 = [].__proto__ === Array.prototype;
      } catch (_0x3dba24) {
        if (!_0x3dba24 || "object" != typeof _0x3dba24 || !("code" in _0x3dba24) || "ERR_PROTO_ACCESS" !== _0x3dba24.code) {
          throw _0x3dba24;
        }
      }
      var _0x3fbf99 = !!_0x358d14 && _0x11e6d5 && _0x11e6d5(Object.prototype, "__proto__");
      var _0x45126a = Object;
      var _0xf06a32 = _0x45126a.getPrototypeOf;
      _0x495409.exports = _0x3fbf99 && "function" == typeof _0x3fbf99.get ? _0x4978d8([_0x3fbf99.get]) : "function" == typeof _0xf06a32 && function (_0x3492db) {
        {
          return _0xf06a32(null == _0x3492db ? _0x3492db : _0x45126a(_0x3492db));
        }
      };
    },
    9173(_0x470e01) {
      "use strict";

      var _0x33f58e = Object.defineProperty || false;
      if (_0x33f58e) {
        try {
          {
            _0x33f58e({}, "a", {
              value: 1
            });
          }
        } catch (_0x53acee) {
          _0x33f58e = false;
        }
      }
      _0x470e01.exports = _0x33f58e;
    },
    1101(_0x54e717) {
      "use strict";

      {
        _0x54e717.exports = EvalError;
      }
    },
    9183(_0x14d356) {
      "use strict";

      {
        _0x14d356.exports = Error;
      }
    },
    7570(_0x173cf2) {
      "use strict";

      _0x173cf2.exports = RangeError;
    },
    9898(_0x340607) {
      "use strict";

      _0x340607.exports = ReferenceError;
    },
    7388(_0x577089) {
      "use strict";

      _0x577089.exports = SyntaxError;
    },
    7379(_0x187b3f) {
      "use strict";

      {
        _0x187b3f.exports = TypeError;
      }
    },
    4585(_0x4ee591) {
      "use strict";

      {
        _0x4ee591.exports = URIError;
      }
    },
    2410(_0x3853ae) {
      "use strict";

      _0x3853ae.exports = Object;
    },
    3148(_0xb593fb, _0x47fa82, _0x39466f) {
      "use strict";

      var _0x1e826c = _0x39466f(703)("%Object.defineProperty%", true);
      var _0x197b15 = _0x39466f(6618)();
      var _0x56b8d3 = _0x39466f(7533);
      var _0x37bafd = _0x39466f(7379);
      var _0x49336d = _0x197b15 ? Symbol.toStringTag : null;
      _0xb593fb.exports = function (_0x2003a1, _0x5f39e4) {
        var _0x5476d9 = arguments.length > 2 && !!arguments[2] && arguments[2].force;
        var _0x3af92c = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
        if (undefined !== _0x5476d9 && "boolean" != typeof _0x5476d9 || undefined !== _0x3af92c && "boolean" != typeof _0x3af92c) {
          throw new _0x37bafd("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
        }
        !_0x49336d || !_0x5476d9 && _0x56b8d3(_0x2003a1, _0x49336d) || (_0x1e826c ? _0x1e826c(_0x2003a1, _0x49336d, {
          configurable: !_0x3af92c,
          enumerable: false,
          value: _0x5f39e4,
          writable: false
        }) : _0x2003a1[_0x49336d] = _0x5f39e4);
      };
    },
    553(_0x38f92d, _0x39c565, _0xa6133a) {
      var _0x43a95d;
      _0x38f92d.exports = function () {
        if (!_0x43a95d) {
          {
            try {
              _0x43a95d = _0xa6133a(7181)("follow-redirects");
            } catch (_0x1147a9) {}
            "function" != typeof _0x43a95d && (_0x43a95d = function () {});
          }
        }
        _0x43a95d.apply(null, arguments);
      };
    },
    9870(_0x19c557, _0x3d62e6, _0x3477ab) {
      var _0xa45127 = _0x3477ab(7016);
      var _0x332106 = _0xa45127.URL;
      var _0x3c6649 = _0x3477ab(8611);
      var _0x19c567 = _0x3477ab(5692);
      var _0x27b67e = _0x3477ab(2203).Writable;
      var _0x242415 = _0x3477ab(2613);
      var _0x4cb927 = _0x3477ab(553);
      _0x4ab2b8(Error.captureStackTrace);
      var _0x563fe3 = false;
      try {
        _0x242415(new _0x332106(""));
      } catch (_0x2fb38e) {
        _0x563fe3 = "ERR_INVALID_URL" === _0x2fb38e.code;
      }
      var _0x4aebe0 = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"];
      var _0x57099b = ["abort", "aborted", "connect", "error", "socket", "timeout"];
      var _0x4aa3aa = Object.create(null);
      _0x57099b.forEach(function (_0xc45848) {
        {
          _0x4aa3aa[_0xc45848] = function (_0x54c48e, _0x4e76fc, _0x2d3f58) {
            this._redirectable.emit(_0xc45848, _0x54c48e, _0x4e76fc, _0x2d3f58);
          };
        }
      });
      var _0x37c2ad = _0x190801("ERR_INVALID_URL", "Invalid URL", TypeError);
      var _0x4ef3be = _0x190801("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
      var _0x1424d0 = _0x190801("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", _0x4ef3be);
      var _0x485479 = _0x190801("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
      var _0x413633 = _0x190801("ERR_STREAM_WRITE_AFTER_END", "write after end");
      var _0x1b7252 = _0x27b67e.prototype.destroy || _0x2f557b;
      function _0x26827e(_0x13ab57, _0xe6888e) {
        _0x27b67e.call(this);
        this._sanitizeOptions(_0x13ab57);
        this._options = _0x13ab57;
        this._ended = false;
        this._ending = false;
        this._redirectCount = 0;
        this._redirects = [];
        this._requestBodyLength = 0;
        this._requestBodyBuffers = [];
        _0xe6888e && this.on("response", _0xe6888e);
        var _0x776d69 = this;
        this._onNativeResponse = function (_0x498125) {
          try {
            {
              _0x776d69._processResponse(_0x498125);
            }
          } catch (_0x5bb5b9) {
            _0x776d69.emit("error", _0x5bb5b9 instanceof _0x4ef3be ? _0x5bb5b9 : new _0x4ef3be({
              cause: _0x5bb5b9
            }));
          }
        };
        this._performRequest();
      }
      function _0xcefd7b(_0x43054a) {
        var _0x445819 = {
          maxRedirects: 21,
          maxBodyLength: 10485760
        };
        var _0x4eb7ba = {};
        Object.keys(_0x43054a).forEach(function (_0x5a6f2c) {
          {
            var _0x1b71f3 = _0x5a6f2c + ":";
            _0x4eb7ba[_0x1b71f3] = _0x43054a[_0x5a6f2c];
            var _0xdd3b8d = _0x4eb7ba[_0x1b71f3];
            _0x445819[_0x5a6f2c] = Object.create(_0xdd3b8d);
            var _0x508fc8 = _0x445819[_0x5a6f2c];
            Object.defineProperties(_0x508fc8, {
              request: {
                value(_0x5c9470, _0x561252, _0x2d4aff) {
                  {
                    _0x332106 && _0x5c9470 instanceof _0x332106 ? _0x5c9470 = _0x4bbbe1(_0x5c9470) : _0x419a2e(_0x5c9470) ? _0x5c9470 = _0x4bbbe1(_0x19f902(_0x5c9470)) : (_0x2d4aff = _0x561252, _0x561252 = _0x22d66a(_0x5c9470), _0x5c9470 = {
                      protocol: _0x1b71f3
                    });
                    _0x4ab2b8(_0x561252) && (_0x2d4aff = _0x561252, _0x561252 = null);
                    (_0x561252 = Object.assign({
                      maxRedirects: _0x445819.maxRedirects,
                      maxBodyLength: _0x445819.maxBodyLength
                    }, _0x5c9470, _0x561252)).nativeProtocols = _0x4eb7ba;
                    _0x419a2e(_0x561252.host) || _0x419a2e(_0x561252.hostname) || (_0x561252.hostname = "::1");
                    _0x242415.equal(_0x561252.protocol, _0x1b71f3, "protocol mismatch");
                    _0x4cb927("options", _0x561252);
                    return new _0x26827e(_0x561252, _0x2d4aff);
                  }
                },
                configurable: true,
                enumerable: true,
                writable: true
              },
              get: {
                value(_0x365eb7, _0x40b043, _0x37fc10) {
                  {
                    var _0x597ea8 = _0x508fc8.request(_0x365eb7, _0x40b043, _0x37fc10);
                    _0x597ea8.end();
                    return _0x597ea8;
                  }
                },
                configurable: true,
                enumerable: true,
                writable: true
              }
            });
          }
        });
        return _0x445819;
      }
      function _0x2f557b() {}
      function _0x19f902(_0x4af96c) {
        var _0x2ff14a;
        if (_0x563fe3) {
          _0x2ff14a = new _0x332106(_0x4af96c);
        } else {
          if (!_0x419a2e((_0x2ff14a = _0x22d66a(_0xa45127.parse(_0x4af96c))).protocol)) {
            throw new _0x37c2ad({
              input: _0x4af96c
            });
          }
        }
        return _0x2ff14a;
      }
      function _0x22d66a(_0xc24c25) {
        if (/^\[/.test(_0xc24c25.hostname) && !/^\[[:0-9a-f]+\]$/i.test(_0xc24c25.hostname)) {
          throw new _0x37c2ad({
            input: _0xc24c25.href || _0xc24c25
          });
        }
        if (/^\[/.test(_0xc24c25.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(_0xc24c25.host)) {
          throw new _0x37c2ad({
            input: _0xc24c25.href || _0xc24c25
          });
        }
        return _0xc24c25;
      }
      function _0x4bbbe1(_0x1b2d9c, _0x319a1e) {
        var _0x1ee4b1 = _0x319a1e || {};
        for (var _0x3bbde5 of _0x4aebe0) _0x1ee4b1[_0x3bbde5] = _0x1b2d9c[_0x3bbde5];
        _0x1ee4b1.hostname.startsWith("[") && (_0x1ee4b1.hostname = _0x1ee4b1.hostname.slice(1, -1));
        "" !== _0x1ee4b1.port && (_0x1ee4b1.port = +_0x1ee4b1.port);
        _0x1ee4b1.path = _0x1ee4b1.search ? _0x1ee4b1.pathname + _0x1ee4b1.search : _0x1ee4b1.pathname;
        return _0x1ee4b1;
      }
      function _0x5e7280(_0x563c5d, _0x3fde92) {
        var _0xd03688;
        for (var _0x535852 in _0x3fde92) _0x563c5d.test(_0x535852) && (_0xd03688 = _0x3fde92[_0x535852], delete _0x3fde92[_0x535852]);
        return null == _0xd03688 ? undefined : (_0xd03688 + "").trim();
      }
      function _0x190801(_0x3d5ca0, _0x571f6e, _0x559c88) {
        function _0x269150(_0x1c927a) {
          {
            _0x4ab2b8(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor);
            Object.assign(this, _0x1c927a || {});
            this.code = _0x3d5ca0;
            this.message = this.cause ? _0x571f6e + ": " + this.cause.message : _0x571f6e;
          }
        }
        _0x269150.prototype = new (_0x559c88 || Error)();
        Object.defineProperties(_0x269150.prototype, {
          constructor: {
            value: _0x269150,
            enumerable: false
          },
          name: {
            value: "Error [" + _0x3d5ca0 + "]",
            enumerable: false
          }
        });
        return _0x269150;
      }
      function _0xc73594(_0x93d78c, _0x592d3b) {
        {
          for (var _0x1b8e06 of _0x57099b) _0x93d78c.removeListener(_0x1b8e06, _0x4aa3aa[_0x1b8e06]);
          _0x93d78c.on("error", _0x2f557b);
          _0x93d78c.destroy(_0x592d3b);
        }
      }
      function _0x419a2e(_0x49b817) {
        return "string" == typeof _0x49b817 || _0x49b817 instanceof String;
      }
      function _0x4ab2b8(_0x3cf3b0) {
        return "function" == typeof _0x3cf3b0;
      }
      _0x26827e.prototype = Object.create(_0x27b67e.prototype);
      _0x26827e.prototype.abort = function () {
        _0xc73594(this._currentRequest);
        this._currentRequest.abort();
        this.emit("abort");
      };
      _0x26827e.prototype.destroy = function (_0x3d55c0) {
        _0xc73594(this._currentRequest, _0x3d55c0);
        _0x1b7252.call(this, _0x3d55c0);
        return this;
      };
      _0x26827e.prototype.write = function (_0x567653, _0x4b5562, _0x39a282) {
        if (this._ending) {
          throw new _0x413633();
        }
        if (!(_0x419a2e(_0x567653) || "object" == typeof (_0x134642 = _0x567653) && "length" in _0x134642)) {
          throw new TypeError("data should be a string, Buffer or Uint8Array");
        }
        var _0x134642;
        _0x4ab2b8(_0x4b5562) && (_0x39a282 = _0x4b5562, _0x4b5562 = null);
        0 !== _0x567653.length ? this._requestBodyLength + _0x567653.length > this._options.maxBodyLength ? (this.emit("error", new _0x485479()), this.abort()) : (this._requestBodyLength += _0x567653.length, this._requestBodyBuffers.push({
          data: _0x567653,
          encoding: _0x4b5562
        }), this._currentRequest.write(_0x567653, _0x4b5562, _0x39a282)) : _0x39a282 && _0x39a282();
      };
      _0x26827e.prototype.end = function (_0x625f4f, _0x22c249, _0x444332) {
        if (_0x4ab2b8(_0x625f4f) ? (_0x444332 = _0x625f4f, _0x625f4f = _0x22c249 = null) : _0x4ab2b8(_0x22c249) && (_0x444332 = _0x22c249, _0x22c249 = null), _0x625f4f) {
          var _0x5118db = this;
          var _0x50bf72 = this._currentRequest;
          this.write(_0x625f4f, _0x22c249, function () {
            _0x5118db._ended = true;
            _0x50bf72.end(null, null, _0x444332);
          });
          this._ending = true;
        } else {
          this._ended = this._ending = true;
          this._currentRequest.end(null, null, _0x444332);
        }
      };
      _0x26827e.prototype.setHeader = function (_0x4ec1a6, _0x36d919) {
        {
          this._options.headers[_0x4ec1a6] = _0x36d919;
          this._currentRequest.setHeader(_0x4ec1a6, _0x36d919);
        }
      };
      _0x26827e.prototype.removeHeader = function (_0x2a8956) {
        {
          delete this._options.headers[_0x2a8956];
          this._currentRequest.removeHeader(_0x2a8956);
        }
      };
      _0x26827e.prototype.setTimeout = function (_0x2c97f2, _0x18a74a) {
        var _0x265b5f = this;
        function _0x41bd17(_0x2f8d47) {
          _0x2f8d47.setTimeout(_0x2c97f2);
          _0x2f8d47.removeListener("timeout", _0x2f8d47.destroy);
          _0x2f8d47.addListener("timeout", _0x2f8d47.destroy);
        }
        function _0x94b884(_0xf51854) {
          {
            _0x265b5f._timeout && clearTimeout(_0x265b5f._timeout);
            _0x265b5f._timeout = setTimeout(function () {
              _0x265b5f.emit("timeout");
              _0x184f86();
            }, _0x2c97f2);
            _0x41bd17(_0xf51854);
          }
        }
        function _0x184f86() {
          {
            _0x265b5f._timeout && (clearTimeout(_0x265b5f._timeout), _0x265b5f._timeout = null);
            _0x265b5f.removeListener("abort", _0x184f86);
            _0x265b5f.removeListener("error", _0x184f86);
            _0x265b5f.removeListener("response", _0x184f86);
            _0x265b5f.removeListener("close", _0x184f86);
            _0x18a74a && _0x265b5f.removeListener("timeout", _0x18a74a);
            _0x265b5f.socket || _0x265b5f._currentRequest.removeListener("socket", _0x94b884);
          }
        }
        _0x18a74a && this.on("timeout", _0x18a74a);
        this.socket ? _0x94b884(this.socket) : this._currentRequest.once("socket", _0x94b884);
        this.on("socket", _0x41bd17);
        this.on("abort", _0x184f86);
        this.on("error", _0x184f86);
        this.on("response", _0x184f86);
        this.on("close", _0x184f86);
        return this;
      };
      ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function (_0x13de3f) {
        _0x26827e.prototype[_0x13de3f] = function (_0x1bd3ae, _0x29cd97) {
          return this._currentRequest[_0x13de3f](_0x1bd3ae, _0x29cd97);
        };
      });
      ["aborted", "connection", "socket"].forEach(function (_0x340ade) {
        Object.defineProperty(_0x26827e.prototype, _0x340ade, {
          get() {
            return this._currentRequest[_0x340ade];
          }
        });
      });
      _0x26827e.prototype._sanitizeOptions = function (_0x4f4850) {
        {
          if (_0x4f4850.headers || (_0x4f4850.headers = {}), _0x4f4850.host && (_0x4f4850.hostname || (_0x4f4850.hostname = _0x4f4850.host), delete _0x4f4850.host), !_0x4f4850.pathname && _0x4f4850.path) {
            {
              var _0x482ae4 = _0x4f4850.path.indexOf("?");
              0 > _0x482ae4 ? _0x4f4850.pathname = _0x4f4850.path : (_0x4f4850.pathname = _0x4f4850.path.substring(0, _0x482ae4), _0x4f4850.search = _0x4f4850.path.substring(_0x482ae4));
            }
          }
        }
      };
      _0x26827e.prototype._performRequest = function () {
        var _0x4a09ae = this._options.protocol;
        var _0x716572 = this._options.nativeProtocols[_0x4a09ae];
        if (!_0x716572) {
          throw new TypeError("Unsupported protocol " + _0x4a09ae);
        }
        if (this._options.agents) {
          var _0x43d0a2 = _0x4a09ae.slice(0, -1);
          this._options.agent = this._options.agents[_0x43d0a2];
        }
        this._currentRequest = _0x716572.request(this._options, this._onNativeResponse);
        var _0x562f60 = this._currentRequest;
        for (var _0x5de681 of (_0x562f60._redirectable = this, _0x57099b)) _0x562f60.on(_0x5de681, _0x4aa3aa[_0x5de681]);
        if (this._currentUrl = /^\//.test(this._options.path) ? _0xa45127.format(this._options) : this._options.path, this._isRedirect) {
          {
            var _0x407ebf = 0;
            var _0x1c1dd4 = this;
            var _0x4811f3 = this._requestBodyBuffers;
            !function _0xd2fcdc(_0x8d3bb4) {
              {
                if (_0x562f60 === _0x1c1dd4._currentRequest) {
                  if (_0x8d3bb4) {
                    _0x1c1dd4.emit("error", _0x8d3bb4);
                  } else {
                    if (_0x407ebf < _0x4811f3.length) {
                      var _0x5ecbfa = _0x4811f3[_0x407ebf++];
                      _0x562f60.finished || _0x562f60.write(_0x5ecbfa.data, _0x5ecbfa.encoding, _0xd2fcdc);
                    } else {
                      _0x1c1dd4._ended && _0x562f60.end();
                    }
                  }
                }
              }
            }();
          }
        }
      };
      _0x26827e.prototype._processResponse = function (_0x3a9f19) {
        var _0x35fdfb = _0x3a9f19.statusCode;
        this._options.trackRedirects && this._redirects.push({
          url: this._currentUrl,
          headers: _0x3a9f19.headers,
          statusCode: _0x35fdfb
        });
        var _0x3f41bb;
        var _0x1c647e = _0x3a9f19.headers.location;
        if (!_0x1c647e || false === this._options.followRedirects || 300 > _0x35fdfb || _0x35fdfb >= 400) {
          _0x3a9f19.responseUrl = this._currentUrl;
          _0x3a9f19.redirects = this._redirects;
          this.emit("response", _0x3a9f19);
          return void (this._requestBodyBuffers = []);
        }
        if (_0xc73594(this._currentRequest), _0x3a9f19.destroy(), ++this._redirectCount > this._options.maxRedirects) {
          throw new _0x1424d0();
        }
        var _0x196b16 = this._options.beforeRedirect;
        _0x196b16 && (_0x3f41bb = Object.assign({
          Host: _0x3a9f19.req.getHeader("host")
        }, this._options.headers));
        var _0x4625df = this._options.method;
        ((301 === _0x35fdfb || 302 === _0x35fdfb) && "POST" === this._options.method || 303 === _0x35fdfb && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], _0x5e7280(/^content-/i, this._options.headers));
        var _0x301001;
        var _0x53fda1;
        var _0x290b36 = _0x5e7280(/^host$/i, this._options.headers);
        var _0x309b7e = _0x19f902(this._currentUrl);
        var _0x5a83de = _0x290b36 || _0x309b7e.host;
        var _0x383db7 = /^\w+:/.test(_0x1c647e) ? this._currentUrl : _0xa45127.format(Object.assign(_0x309b7e, {
          host: _0x5a83de
        }));
        _0x301001 = _0x1c647e;
        _0x53fda1 = _0x383db7;
        var _0x13ff7f = _0x563fe3 ? new _0x332106(_0x301001, _0x53fda1) : _0x19f902(_0xa45127.resolve(_0x53fda1, _0x301001));
        if (_0x4cb927("redirecting to", _0x13ff7f.href), this._isRedirect = true, _0x4bbbe1(_0x13ff7f, this._options), (_0x13ff7f.protocol !== _0x309b7e.protocol && "https:" !== _0x13ff7f.protocol || _0x13ff7f.host !== _0x5a83de && !function (_0x1ff688, _0xf87cf4) {
          {
            _0x242415(_0x419a2e(_0x1ff688) && _0x419a2e(_0xf87cf4));
            var _0x4d48d4 = _0x1ff688.length - _0xf87cf4.length - 1;
            return _0x4d48d4 > 0 && "." === _0x1ff688[_0x4d48d4] && _0x1ff688.endsWith(_0xf87cf4);
          }
        }(_0x13ff7f.host, _0x5a83de)) && _0x5e7280(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), _0x4ab2b8(_0x196b16)) {
          var _0xc2d2a2 = {
            headers: _0x3a9f19.headers,
            statusCode: _0x35fdfb
          };
          var _0x57799b = {
            url: _0x383db7,
            method: _0x4625df,
            headers: _0x3f41bb
          };
          _0x196b16(this._options, _0xc2d2a2, _0x57799b);
          this._sanitizeOptions(this._options);
        }
        this._performRequest();
      };
      _0x19c557.exports = _0xcefd7b({
        http: _0x3c6649,
        https: _0x19c567
      });
      _0x19c557.exports.wrap = _0xcefd7b;
    },
    8848(_0x534d80, _0x43c802, _0x7fa302) {
      "use strict";

      {
        var _0xb23725 = _0x7fa302(3564);
        var _0x146dbd = _0x7fa302(9023);
        var _0x3149e1 = _0x7fa302(6928);
        var _0x1e2bbe = _0x7fa302(8611);
        var _0x7d509 = _0x7fa302(5692);
        var _0x21dfe9 = _0x7fa302(7016).parse;
        var _0x1c437f = _0x7fa302(9896);
        var _0xa3a295 = _0x7fa302(2203).Stream;
        var _0xb74228 = _0x7fa302(6982);
        var _0x4137d4 = _0x7fa302(1976);
        var _0x2b7f2c = _0x7fa302(7377);
        var _0x3ea100 = _0x7fa302(3148);
        var _0x2baa90 = _0x7fa302(7533);
        var _0x103edf = _0x7fa302(8357);
        function _0x455a5b(_0x4aae89) {
          {
            if (!(this instanceof _0x455a5b)) {
              return new _0x455a5b(_0x4aae89);
            }
            for (var _0x17d054 in this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], _0xb23725.call(this), _0x4aae89 = _0x4aae89 || {}) this[_0x17d054] = _0x4aae89[_0x17d054];
          }
        }
        _0x146dbd.inherits(_0x455a5b, _0xb23725);
        _0x455a5b.LINE_BREAK = "\r\n";
        _0x455a5b.DEFAULT_CONTENT_TYPE = "application/octet-stream";
        _0x455a5b.prototype.append = function (_0x46a163, _0x476a40, _0x2c7acd) {
          "string" == typeof (_0x2c7acd = _0x2c7acd || {}) && (_0x2c7acd = {
            filename: _0x2c7acd
          });
          var _0x162b26 = _0xb23725.prototype.append.bind(this);
          if ("number" != typeof _0x476a40 && null != _0x476a40 || (_0x476a40 += ""), Array.isArray(_0x476a40)) {
            this._error(Error("Arrays are not supported."));
          } else {
            var _0x55255d = this._multiPartHeader(_0x46a163, _0x476a40, _0x2c7acd);
            var _0x270d49 = this._multiPartFooter();
            _0x162b26(_0x55255d);
            _0x162b26(_0x476a40);
            _0x162b26(_0x270d49);
            this._trackLength(_0x55255d, _0x476a40, _0x2c7acd);
          }
        };
        _0x455a5b.prototype._trackLength = function (_0x44f77f, _0x503f61, _0x2d23fb) {
          var _0x51ed60 = 0;
          null != _0x2d23fb.knownLength ? _0x51ed60 += +_0x2d23fb.knownLength : Buffer.isBuffer(_0x503f61) ? _0x51ed60 = _0x503f61.length : "string" == typeof _0x503f61 && (_0x51ed60 = Buffer.byteLength(_0x503f61));
          this._valueLength += _0x51ed60;
          this._overheadLength += Buffer.byteLength(_0x44f77f) + _0x455a5b.LINE_BREAK.length;
          _0x503f61 && (_0x503f61.path || _0x503f61.readable && _0x2baa90(_0x503f61, "httpVersion") || _0x503f61 instanceof _0xa3a295) && (_0x2d23fb.knownLength || this._valuesToMeasure.push(_0x503f61));
        };
        _0x455a5b.prototype._lengthRetriever = function (_0x5e35b6, _0x362b09) {
          _0x2baa90(_0x5e35b6, "fd") ? null != _0x5e35b6.end && _0x5e35b6.end != Infinity && null != _0x5e35b6.start ? _0x362b09(null, _0x5e35b6.end + 1 - (_0x5e35b6.start ? _0x5e35b6.start : 0)) : _0x1c437f.stat(_0x5e35b6.path, function (_0x3e198a, _0x210ec7) {
            if (_0x3e198a) {
              _0x362b09(_0x3e198a);
            } else {
              {
                var _0x10656d = _0x210ec7.size - (_0x5e35b6.start ? _0x5e35b6.start : 0);
                _0x362b09(null, _0x10656d);
              }
            }
          }) : _0x2baa90(_0x5e35b6, "httpVersion") ? _0x362b09(null, +_0x5e35b6.headers["content-length"]) : _0x2baa90(_0x5e35b6, "httpModule") ? (_0x5e35b6.on("response", function (_0x139872) {
            {
              _0x5e35b6.pause();
              _0x362b09(null, +_0x139872.headers["content-length"]);
            }
          }), _0x5e35b6.resume()) : _0x362b09("Unknown stream");
        };
        _0x455a5b.prototype._multiPartHeader = function (_0x53db95, _0x5043a5, _0x300c5a) {
          if ("string" == typeof _0x300c5a.header) {
            return _0x300c5a.header;
          }
          var _0x1f3ce2;
          var _0x20a110 = this._getContentDisposition(_0x5043a5, _0x300c5a);
          var _0x596916 = this._getContentType(_0x5043a5, _0x300c5a);
          var _0x1731df = "";
          var _0x165ff7 = {
            "Content-Disposition": ["form-data", "name=\"" + _0x53db95 + "\""].concat(_0x20a110 || []),
            "Content-Type": [].concat(_0x596916 || [])
          };
          for (var _0x8a6fb1 in "object" == typeof _0x300c5a.header && _0x103edf(_0x165ff7, _0x300c5a.header), _0x165ff7) if (_0x2baa90(_0x165ff7, _0x8a6fb1)) {
            if (null == (_0x1f3ce2 = _0x165ff7[_0x8a6fb1])) {
              continue;
            }
            Array.isArray(_0x1f3ce2) || (_0x1f3ce2 = [_0x1f3ce2]);
            _0x1f3ce2.length && (_0x1731df += _0x8a6fb1 + ": " + _0x1f3ce2.join("; ") + _0x455a5b.LINE_BREAK);
          }
          return "--" + this.getBoundary() + _0x455a5b.LINE_BREAK + _0x1731df + _0x455a5b.LINE_BREAK;
        };
        _0x455a5b.prototype._getContentDisposition = function (_0x37ce3c, _0x4ab63b) {
          var _0x4dae30;
          if ("string" == typeof _0x4ab63b.filepath ? _0x4dae30 = _0x3149e1.normalize(_0x4ab63b.filepath).replace(/\\/g, "/") : _0x4ab63b.filename || _0x37ce3c && (_0x37ce3c.name || _0x37ce3c.path) ? _0x4dae30 = _0x3149e1.basename(_0x4ab63b.filename || _0x37ce3c && (_0x37ce3c.name || _0x37ce3c.path)) : _0x37ce3c && _0x37ce3c.readable && _0x2baa90(_0x37ce3c, "httpVersion") && (_0x4dae30 = _0x3149e1.basename(_0x37ce3c.client._httpMessage.path || "")), _0x4dae30) {
            return "filename=\"" + _0x4dae30 + "\"";
          }
        };
        _0x455a5b.prototype._getContentType = function (_0x3d6542, _0x59bd24) {
          var _0x3e00ed = _0x59bd24.contentType;
          !_0x3e00ed && _0x3d6542 && _0x3d6542.name && (_0x3e00ed = _0x4137d4.lookup(_0x3d6542.name));
          !_0x3e00ed && _0x3d6542 && _0x3d6542.path && (_0x3e00ed = _0x4137d4.lookup(_0x3d6542.path));
          !_0x3e00ed && _0x3d6542 && _0x3d6542.readable && _0x2baa90(_0x3d6542, "httpVersion") && (_0x3e00ed = _0x3d6542.headers["content-type"]);
          _0x3e00ed || !_0x59bd24.filepath && !_0x59bd24.filename || (_0x3e00ed = _0x4137d4.lookup(_0x59bd24.filepath || _0x59bd24.filename));
          !_0x3e00ed && _0x3d6542 && "object" == typeof _0x3d6542 && (_0x3e00ed = _0x455a5b.DEFAULT_CONTENT_TYPE);
          return _0x3e00ed;
        };
        _0x455a5b.prototype._multiPartFooter = function () {
          return function (_0x4a9193) {
            {
              var _0x2db2a7 = _0x455a5b.LINE_BREAK;
              0 === this._streams.length && (_0x2db2a7 += this._lastBoundary());
              _0x4a9193(_0x2db2a7);
            }
          }.bind(this);
        };
        _0x455a5b.prototype._lastBoundary = function () {
          {
            return "--" + this.getBoundary() + "--" + _0x455a5b.LINE_BREAK;
          }
        };
        _0x455a5b.prototype.getHeaders = function (_0xa4b373) {
          var _0xd6dc75;
          var _0xf5d790 = {
            "content-type": "multipart/form-data; boundary=" + this.getBoundary()
          };
          for (_0xd6dc75 in _0xa4b373) _0x2baa90(_0xa4b373, _0xd6dc75) && (_0xf5d790[_0xd6dc75.toLowerCase()] = _0xa4b373[_0xd6dc75]);
          return _0xf5d790;
        };
        _0x455a5b.prototype.setBoundary = function (_0x217b86) {
          {
            if ("string" != typeof _0x217b86) {
              throw new TypeError("FormData boundary must be a string");
            }
            this._boundary = _0x217b86;
          }
        };
        _0x455a5b.prototype.getBoundary = function () {
          {
            this._boundary || this._generateBoundary();
            return this._boundary;
          }
        };
        _0x455a5b.prototype.getBuffer = function () {
          {
            for (var _0xbb5918 = new Buffer.alloc(0), _0x5a003c = this.getBoundary(), _0x3403fa = 0, _0x44a93b = this._streams.length; _0x44a93b > _0x3403fa; _0x3403fa++) {
              "function" != typeof this._streams[_0x3403fa] && (_0xbb5918 = Buffer.isBuffer(this._streams[_0x3403fa]) ? Buffer.concat([_0xbb5918, this._streams[_0x3403fa]]) : Buffer.concat([_0xbb5918, Buffer.from(this._streams[_0x3403fa])]), "string" == typeof this._streams[_0x3403fa] && this._streams[_0x3403fa].substring(2, _0x5a003c.length + 2) === _0x5a003c || (_0xbb5918 = Buffer.concat([_0xbb5918, Buffer.from(_0x455a5b.LINE_BREAK)])));
            }
            return Buffer.concat([_0xbb5918, Buffer.from(this._lastBoundary())]);
          }
        };
        _0x455a5b.prototype._generateBoundary = function () {
          this._boundary = "--------------------------" + _0xb74228.randomBytes(12).toString("hex");
        };
        _0x455a5b.prototype.getLengthSync = function () {
          var _0x27ecf7 = this._overheadLength + this._valueLength;
          this._streams.length && (_0x27ecf7 += this._lastBoundary().length);
          this.hasKnownLength() || this._error(Error("Cannot calculate proper length in synchronous way."));
          return _0x27ecf7;
        };
        _0x455a5b.prototype.hasKnownLength = function () {
          var _0x4d6e6a = true;
          this._valuesToMeasure.length && (_0x4d6e6a = false);
          return _0x4d6e6a;
        };
        _0x455a5b.prototype.getLength = function (_0x44d833) {
          var _0x5dbb68 = this._overheadLength + this._valueLength;
          this._streams.length && (_0x5dbb68 += this._lastBoundary().length);
          this._valuesToMeasure.length ? _0x2b7f2c.parallel(this._valuesToMeasure, this._lengthRetriever, function (_0x188602, _0x460a85) {
            _0x188602 ? _0x44d833(_0x188602) : (_0x460a85.forEach(function (_0x3ffe71) {
              _0x5dbb68 += _0x3ffe71;
            }), _0x44d833(null, _0x5dbb68));
          }) : process.nextTick(_0x44d833.bind(this, null, _0x5dbb68));
        };
        _0x455a5b.prototype.submit = function (_0x43bfec, _0x1ff271) {
          var _0x5c6dd3;
          var _0x25981a;
          var _0x5b618e = {
            method: "post"
          };
          "string" == typeof _0x43bfec ? (_0x43bfec = _0x21dfe9(_0x43bfec), _0x25981a = _0x103edf({
            port: _0x43bfec.port,
            path: _0x43bfec.pathname,
            host: _0x43bfec.hostname,
            protocol: _0x43bfec.protocol
          }, _0x5b618e)) : (_0x25981a = _0x103edf(_0x43bfec, _0x5b618e)).port || (_0x25981a.port = "https:" === _0x25981a.protocol ? 443 : 80);
          _0x25981a.headers = this.getHeaders(_0x43bfec.headers);
          _0x5c6dd3 = "https:" === _0x25981a.protocol ? _0x7d509.request(_0x25981a) : _0x1e2bbe.request(_0x25981a);
          this.getLength(function (_0x582911, _0x354f06) {
            if (_0x582911 && "Unknown stream" !== _0x582911) {
              this._error(_0x582911);
            } else {
              if (_0x354f06 && _0x5c6dd3.setHeader("Content-Length", _0x354f06), this.pipe(_0x5c6dd3), _0x1ff271) {
                var _0x19634d;
                var _0x296b8c = function (_0x489981, _0x4d6d5c) {
                  _0x5c6dd3.removeListener("error", _0x296b8c);
                  _0x5c6dd3.removeListener("response", _0x19634d);
                  return _0x1ff271.call(this, _0x489981, _0x4d6d5c);
                };
                _0x19634d = _0x296b8c.bind(this, null);
                _0x5c6dd3.on("error", _0x296b8c);
                _0x5c6dd3.on("response", _0x19634d);
              }
            }
          }.bind(this));
          return _0x5c6dd3;
        };
        _0x455a5b.prototype._error = function (_0x474f4e) {
          this.error || (this.error = _0x474f4e, this.pause(), this.emit("error", _0x474f4e));
        };
        _0x455a5b.prototype.toString = function () {
          {
            return "[object FormData]";
          }
        };
        _0x3ea100(_0x455a5b, "FormData");
        _0x534d80.exports = _0x455a5b;
      }
    },
    8357(_0x6ea03b) {
      "use strict";

      _0x6ea03b.exports = function (_0xa18855, _0x186baa) {
        Object.keys(_0x186baa).forEach(function (_0x788f0d) {
          _0xa18855[_0x788f0d] = _0xa18855[_0x788f0d] || _0x186baa[_0x788f0d];
        });
        return _0xa18855;
      };
    },
    1777(_0x5de180) {
      "use strict";

      {
        var _0x149366 = {}.toString;
        var _0x389153 = Math.max;
        var _0xbda8fb = function (_0x363da1, _0x3f77c3) {
          for (var _0x4af7d4 = [], _0x33e961 = 0; _0x33e961 < _0x363da1.length; _0x33e961 += 1) {
            _0x4af7d4[_0x33e961] = _0x363da1[_0x33e961];
          }
          for (var _0x3c95d5 = 0; _0x3c95d5 < _0x3f77c3.length; _0x3c95d5 += 1) {
            _0x4af7d4[_0x3c95d5 + _0x363da1.length] = _0x3f77c3[_0x3c95d5];
          }
          return _0x4af7d4;
        };
        _0x5de180.exports = function (_0x28a411) {
          var _0x258e33 = this;
          if ("function" != typeof _0x258e33 || "[object Function]" !== _0x149366.apply(_0x258e33)) {
            throw new TypeError("Function.prototype.bind called on incompatible " + _0x258e33);
          }
          for (var _0xe4615d, _0x57d64a = function (_0x30cc8f) {
              {
                for (var _0x37de94 = [], _0x585ed5 = 1, _0x524ad6 = 0; _0x30cc8f.length > _0x585ed5; _0x585ed5 += 1, _0x524ad6 += 1) {
                  _0x37de94[_0x524ad6] = _0x30cc8f[_0x585ed5];
                }
                return _0x37de94;
              }
            }(arguments), _0x29f707 = _0x389153(0, _0x258e33.length - _0x57d64a.length), _0x543c9b = [], _0x27926f = 0; _0x29f707 > _0x27926f; _0x27926f++) {
            _0x543c9b[_0x27926f] = "$" + _0x27926f;
          }
          if (_0xe4615d = Function("binder", "return function (" + function (_0x3e6534) {
            for (var _0x12261a = "", _0x123d93 = 0; _0x123d93 < _0x3e6534.length; _0x123d93 += 1) {
              _0x12261a += _0x3e6534[_0x123d93];
              _0x123d93 + 1 < _0x3e6534.length && (_0x12261a += ",");
            }
            return _0x12261a;
          }(_0x543c9b) + "){ return binder.apply(this,arguments); }")(function () {
            {
              if (this instanceof _0xe4615d) {
                {
                  var _0xe71981 = _0x258e33.apply(this, _0xbda8fb(_0x57d64a, arguments));
                  return Object(_0xe71981) === _0xe71981 ? _0xe71981 : this;
                }
              }
              return _0x258e33.apply(_0x28a411, _0xbda8fb(_0x57d64a, arguments));
            }
          }), _0x258e33.prototype) {
            {
              var _0x3a1942 = function () {};
              _0x3a1942.prototype = _0x258e33.prototype;
              _0xe4615d.prototype = new _0x3a1942();
              _0x3a1942.prototype = null;
            }
          }
          return _0xe4615d;
        };
      }
    },
    3583(_0x46b419, _0xf588a3, _0xcbe4b7) {
      "use strict";

      {
        var _0x5da96b = _0xcbe4b7(1777);
        _0x46b419.exports = function () {}.bind || _0x5da96b;
      }
    },
    703(_0x5bc830, _0x37e84b, _0x35621b) {
      "use strict";

      var _0x5b1a98;
      var _0x52f6eb = _0x35621b(2410);
      var _0x3492be = _0x35621b(9183);
      var _0x1bf793 = _0x35621b(1101);
      var _0x226de5 = _0x35621b(7570);
      var _0x35c587 = _0x35621b(9898);
      var _0x12188b = _0x35621b(7388);
      var _0x41965a = _0x35621b(7379);
      var _0x522358 = _0x35621b(4585);
      var _0x47386c = _0x35621b(9895);
      var _0xb32d76 = _0x35621b(2153);
      var _0x177f45 = _0x35621b(457);
      var _0x48413 = _0x35621b(1179);
      var _0x9596ed = _0x35621b(5985);
      var _0x373ef4 = _0x35621b(8639);
      var _0x4c226b = _0x35621b(5738);
      var _0x4c6610 = Function;
      var _0x4938b8 = function (_0x30337a) {
        try {
          return _0x4c6610("\"use strict\"; return (" + _0x30337a + ").constructor;")();
        } catch (_0xf9991c) {}
      };
      var _0x3d52f4 = _0x35621b(3492);
      var _0x328208 = _0x35621b(9173);
      var _0x193f66 = function () {
        {
          throw new _0x41965a();
        }
      };
      var _0x1fc45d = _0x3d52f4 ? function () {
        try {
          return _0x193f66;
        } catch (_0xb78c47) {
          try {
            return _0x3d52f4(arguments, "callee").get;
          } catch (_0x22593b) {
            return _0x193f66;
          }
        }
      }() : _0x193f66;
      var _0x34096c = _0x35621b(7657)();
      var _0x1ceecf = _0x35621b(1611);
      var _0x44206e = _0x35621b(8819);
      var _0xb2e134 = _0x35621b(2517);
      var _0x523512 = _0x35621b(1948);
      var _0x1169c8 = _0x35621b(2878);
      var _0x33c856 = {};
      var _0x32d342 = "undefined" != typeof Uint8Array && _0x1ceecf ? _0x1ceecf(Uint8Array) : _0x5b1a98;
      var _0x4e0ad0 = {
        __proto__: null,
        "%AggregateError%": "undefined" == typeof AggregateError ? _0x5b1a98 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? _0x5b1a98 : ArrayBuffer,
        "%ArrayIteratorPrototype%": _0x34096c && _0x1ceecf ? _0x1ceecf([][Symbol.iterator]()) : _0x5b1a98,
        "%AsyncFromSyncIteratorPrototype%": _0x5b1a98,
        "%AsyncFunction%": _0x33c856,
        "%AsyncGenerator%": _0x33c856,
        "%AsyncGeneratorFunction%": _0x33c856,
        "%AsyncIteratorPrototype%": _0x33c856,
        "%Atomics%": "undefined" == typeof Atomics ? _0x5b1a98 : Atomics,
        "%BigInt%": "undefined" == typeof BigInt ? _0x5b1a98 : BigInt,
        "%BigInt64Array%": "undefined" == typeof BigInt64Array ? _0x5b1a98 : BigInt64Array,
        "%BigUint64Array%": "undefined" == typeof BigUint64Array ? _0x5b1a98 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": "undefined" == typeof DataView ? _0x5b1a98 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": _0x3492be,
        "%eval%": eval,
        "%EvalError%": _0x1bf793,
        "%Float16Array%": "undefined" == typeof Float16Array ? _0x5b1a98 : Float16Array,
        "%Float32Array%": "undefined" == typeof Float32Array ? _0x5b1a98 : Float32Array,
        "%Float64Array%": "undefined" == typeof Float64Array ? _0x5b1a98 : Float64Array,
        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? _0x5b1a98 : FinalizationRegistry,
        "%Function%": _0x4c6610,
        "%GeneratorFunction%": _0x33c856,
        "%Int8Array%": "undefined" == typeof Int8Array ? _0x5b1a98 : Int8Array,
        "%Int16Array%": "undefined" == typeof Int16Array ? _0x5b1a98 : Int16Array,
        "%Int32Array%": "undefined" == typeof Int32Array ? _0x5b1a98 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": _0x34096c && _0x1ceecf ? _0x1ceecf(_0x1ceecf([][Symbol.iterator]())) : _0x5b1a98,
        "%JSON%": "object" == typeof JSON ? JSON : _0x5b1a98,
        "%Map%": "undefined" == typeof Map ? _0x5b1a98 : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && _0x34096c && _0x1ceecf ? _0x1ceecf(new Map()[Symbol.iterator]()) : _0x5b1a98,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": _0x52f6eb,
        "%Object.getOwnPropertyDescriptor%": _0x3d52f4,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? _0x5b1a98 : Promise,
        "%Proxy%": "undefined" == typeof Proxy ? _0x5b1a98 : Proxy,
        "%RangeError%": _0x226de5,
        "%ReferenceError%": _0x35c587,
        "%Reflect%": "undefined" == typeof Reflect ? _0x5b1a98 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "undefined" == typeof Set ? _0x5b1a98 : Set,
        "%SetIteratorPrototype%": "undefined" != typeof Set && _0x34096c && _0x1ceecf ? _0x1ceecf(new Set()[Symbol.iterator]()) : _0x5b1a98,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? _0x5b1a98 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": _0x34096c && _0x1ceecf ? _0x1ceecf(""[Symbol.iterator]()) : _0x5b1a98,
        "%Symbol%": _0x34096c ? Symbol : _0x5b1a98,
        "%SyntaxError%": _0x12188b,
        "%ThrowTypeError%": _0x1fc45d,
        "%TypedArray%": _0x32d342,
        "%TypeError%": _0x41965a,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? _0x5b1a98 : Uint8Array,
        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? _0x5b1a98 : Uint8ClampedArray,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? _0x5b1a98 : Uint16Array,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? _0x5b1a98 : Uint32Array,
        "%URIError%": _0x522358,
        "%WeakMap%": "undefined" == typeof WeakMap ? _0x5b1a98 : WeakMap,
        "%WeakRef%": "undefined" == typeof WeakRef ? _0x5b1a98 : WeakRef,
        "%WeakSet%": "undefined" == typeof WeakSet ? _0x5b1a98 : WeakSet,
        "%Function.prototype.call%": _0x1169c8,
        "%Function.prototype.apply%": _0x523512,
        "%Object.defineProperty%": _0x328208,
        "%Object.getPrototypeOf%": _0x44206e,
        "%Math.abs%": _0x47386c,
        "%Math.floor%": _0xb32d76,
        "%Math.max%": _0x177f45,
        "%Math.min%": _0x48413,
        "%Math.pow%": _0x9596ed,
        "%Math.round%": _0x373ef4,
        "%Math.sign%": _0x4c226b,
        "%Reflect.getPrototypeOf%": _0xb2e134
      };
      if (_0x1ceecf) {
        try {
          null.error;
        } catch (_0x15a188) {
          var _0x2456c7 = _0x1ceecf(_0x1ceecf(_0x15a188));
          _0x4e0ad0["%Error.prototype%"] = _0x2456c7;
        }
      }
      var _0x29c018 = function _0xd05fa9(_0x3756c6) {
        var _0x3fbb85;
        if ("%AsyncFunction%" === _0x3756c6) {
          _0x3fbb85 = _0x4938b8("async function () {}");
        } else {
          if ("%GeneratorFunction%" === _0x3756c6) {
            _0x3fbb85 = _0x4938b8("function* () {}");
          } else {
            if ("%AsyncGeneratorFunction%" === _0x3756c6) {
              _0x3fbb85 = _0x4938b8("async function* () {}");
            } else {
              if ("%AsyncGenerator%" === _0x3756c6) {
                {
                  var _0xd803a7 = _0xd05fa9("%AsyncGeneratorFunction%");
                  _0xd803a7 && (_0x3fbb85 = _0xd803a7.prototype);
                }
              } else {
                if ("%AsyncIteratorPrototype%" === _0x3756c6) {
                  var _0x511dc7 = _0xd05fa9("%AsyncGenerator%");
                  _0x511dc7 && _0x1ceecf && (_0x3fbb85 = _0x1ceecf(_0x511dc7.prototype));
                }
              }
            }
          }
        }
        _0x4e0ad0[_0x3756c6] = _0x3fbb85;
        return _0x3fbb85;
      };
      var _0x5ce59b = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var _0x207c03 = _0x35621b(3583);
      var _0x563395 = _0x35621b(7533);
      var _0x252484 = _0x207c03.call(_0x1169c8, [].concat);
      var _0x33522f = _0x207c03.call(_0x523512, [].splice);
      var _0x441491 = _0x207c03.call(_0x1169c8, "".replace);
      var _0x17f948 = _0x207c03.call(_0x1169c8, "".slice);
      var _0x5e1d0b = _0x207c03.call(_0x1169c8, /t/.exec);
      var _0x507a65 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var _0x2b9bc9 = /\\(\\)?/g;
      var _0x2cebd1 = function (_0xb0afb3, _0x27cef2) {
        var _0x345665;
        var _0x2a0f5e = _0xb0afb3;
        if (_0x563395(_0x5ce59b, _0x2a0f5e) && (_0x2a0f5e = "%" + (_0x345665 = _0x5ce59b[_0x2a0f5e])[0] + "%"), _0x563395(_0x4e0ad0, _0x2a0f5e)) {
          var _0x248ac8 = _0x4e0ad0[_0x2a0f5e];
          if (_0x248ac8 === _0x33c856 && (_0x248ac8 = _0x29c018(_0x2a0f5e)), _0x5b1a98 === _0x248ac8 && !_0x27cef2) {
            throw new _0x41965a("intrinsic " + _0xb0afb3 + " exists, but is not available. Please file an issue!");
          }
          return {
            alias: _0x345665,
            name: _0x2a0f5e,
            value: _0x248ac8
          };
        }
        throw new _0x12188b("intrinsic " + _0xb0afb3 + " does not exist!");
      };
      _0x5bc830.exports = function (_0x3d9d1b, _0x6831ab) {
        {
          if ("string" != typeof _0x3d9d1b || 0 === _0x3d9d1b.length) {
            throw new _0x41965a("intrinsic name must be a non-empty string");
          }
          if (arguments.length > 1 && "boolean" != typeof _0x6831ab) {
            throw new _0x41965a("\"allowMissing\" argument must be a boolean");
          }
          if (null === _0x5e1d0b(/^%?[^%]*%?$/, _0x3d9d1b)) {
            throw new _0x12188b("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
          }
          var _0x108d85 = function (_0x154154) {
            var _0x12d032 = _0x17f948(_0x154154, 0, 1);
            var _0x28522d = _0x17f948(_0x154154, -1);
            if ("%" === _0x12d032 && "%" !== _0x28522d) {
              throw new _0x12188b("invalid intrinsic syntax, expected closing `%`");
            }
            if ("%" === _0x28522d && "%" !== _0x12d032) {
              throw new _0x12188b("invalid intrinsic syntax, expected opening `%`");
            }
            var _0x8f6ad5 = [];
            _0x441491(_0x154154, _0x507a65, function (_0x6fc196, _0x397c3a, _0x40cddd, _0x1b1187) {
              _0x8f6ad5[_0x8f6ad5.length] = _0x40cddd ? _0x441491(_0x1b1187, _0x2b9bc9, "$1") : _0x397c3a || _0x6fc196;
            });
            return _0x8f6ad5;
          }(_0x3d9d1b);
          var _0xd4f471 = _0x108d85.length > 0 ? _0x108d85[0] : "";
          var _0x3f4ec5 = _0x2cebd1("%" + _0xd4f471 + "%", _0x6831ab);
          var _0xf19382 = _0x3f4ec5.name;
          var _0x49d83d = _0x3f4ec5.value;
          var _0x6e76c = false;
          var _0x248fc8 = _0x3f4ec5.alias;
          _0x248fc8 && (_0xd4f471 = _0x248fc8[0], _0x33522f(_0x108d85, _0x252484([0, 1], _0x248fc8)));
          for (var _0x36f49b = 1, _0x2563b3 = true; _0x36f49b < _0x108d85.length; _0x36f49b += 1) {
            var _0x1d3013 = _0x108d85[_0x36f49b];
            var _0x393f12 = _0x17f948(_0x1d3013, 0, 1);
            var _0x59e1c6 = _0x17f948(_0x1d3013, -1);
            if (("\"" === _0x393f12 || "'" === _0x393f12 || "`" === _0x393f12 || "\"" === _0x59e1c6 || "'" === _0x59e1c6 || "`" === _0x59e1c6) && _0x393f12 !== _0x59e1c6) {
              throw new _0x12188b("property names with quotes must have matching quotes");
            }
            if ("constructor" !== _0x1d3013 && _0x2563b3 || (_0x6e76c = true), _0x563395(_0x4e0ad0, _0xf19382 = "%" + (_0xd4f471 += "." + _0x1d3013) + "%")) {
              _0x49d83d = _0x4e0ad0[_0xf19382];
            } else {
              if (null != _0x49d83d) {
                if (!(_0x1d3013 in _0x49d83d)) {
                  if (!_0x6831ab) {
                    throw new _0x41965a("base intrinsic for " + _0x3d9d1b + " exists, but the property is not available.");
                  }
                  return;
                }
                if (_0x3d52f4 && _0x36f49b + 1 >= _0x108d85.length) {
                  var _0x36ae02 = _0x3d52f4(_0x49d83d, _0x1d3013);
                  _0x49d83d = (_0x2563b3 = !!_0x36ae02) && "get" in _0x36ae02 && !("originalValue" in _0x36ae02.get) ? _0x36ae02.get : _0x49d83d[_0x1d3013];
                } else {
                  _0x2563b3 = _0x563395(_0x49d83d, _0x1d3013);
                  _0x49d83d = _0x49d83d[_0x1d3013];
                }
                _0x2563b3 && !_0x6e76c && (_0x4e0ad0[_0xf19382] = _0x49d83d);
              }
            }
          }
          return _0x49d83d;
        }
      };
    },
    8819(_0x113d18, _0x5112ca, _0x314301) {
      "use strict";

      {
        var _0xaf6463 = _0x314301(2410);
        _0x113d18.exports = _0xaf6463.getPrototypeOf || null;
      }
    },
    2517(_0xe908ff) {
      "use strict";

      _0xe908ff.exports = "undefined" != typeof Reflect && Reflect.getPrototypeOf || null;
    },
    1611(_0x2440af, _0x1cd886, _0x2a09d3) {
      "use strict";

      {
        var _0x2863d7 = _0x2a09d3(2517);
        var _0x472ef3 = _0x2a09d3(8819);
        var _0x3e2b76 = _0x2a09d3(1449);
        _0x2440af.exports = _0x2863d7 ? function (_0x5e0983) {
          return _0x2863d7(_0x5e0983);
        } : _0x472ef3 ? function (_0x315729) {
          if (!_0x315729 || "object" != typeof _0x315729 && "function" != typeof _0x315729) {
            throw new TypeError("getProto: not an object");
          }
          return _0x472ef3(_0x315729);
        } : _0x3e2b76 ? function (_0x37c0da) {
          return _0x3e2b76(_0x37c0da);
        } : null;
      }
    },
    4656(_0x379793) {
      "use strict";

      _0x379793.exports = Object.getOwnPropertyDescriptor;
    },
    3492(_0x2b8d84, _0x230cf3, _0x453dca) {
      "use strict";

      var _0x4797ec = _0x453dca(4656);
      if (_0x4797ec) {
        try {
          _0x4797ec([], "length");
        } catch (_0x498e63) {
          _0x4797ec = null;
        }
      }
      _0x2b8d84.exports = _0x4797ec;
    },
    1533(_0x5ef051) {
      "use strict";

      _0x5ef051.exports = (_0x59a6e7, _0x35e225 = process.argv) => {
        {
          const _0xb7811a = _0x59a6e7.startsWith("-") ? "" : 1 === _0x59a6e7.length ? "-" : "--";
          const _0x42cba6 = _0x35e225.indexOf(_0xb7811a + _0x59a6e7);
          const _0x5176db = _0x35e225.indexOf("--");
          return -1 !== _0x42cba6 && (-1 === _0x5176db || _0x5176db > _0x42cba6);
        }
      };
    },
    7657(_0x491328, _0x5ef49f, _0x1b9a78) {
      "use strict";

      {
        var _0x1220fd = "undefined" != typeof Symbol && Symbol;
        var _0x2640ad = _0x1b9a78(8123);
        _0x491328.exports = function () {
          return "function" == typeof _0x1220fd && "function" == typeof Symbol && "symbol" == typeof _0x1220fd("foo") && "symbol" == typeof Symbol("bar") && _0x2640ad();
        };
      }
    },
    8123(_0x46dc8c) {
      "use strict";

      {
        _0x46dc8c.exports = function () {
          if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) {
            return false;
          }
          if ("symbol" == typeof Symbol.iterator) {
            return true;
          }
          var _0xd227b7 = {};
          var _0x3c0a61 = Symbol("test");
          var _0x5b3c21 = Object(_0x3c0a61);
          if ("string" == typeof _0x3c0a61) {
            return false;
          }
          if ("[object Symbol]" !== {}.toString.call(_0x3c0a61)) {
            return false;
          }
          if ("[object Symbol]" !== {}.toString.call(_0x5b3c21)) {
            return false;
          }
          for (var _0x1c09ac in _0xd227b7[_0x3c0a61] = 42, _0xd227b7) return false;
          if ("function" == typeof Object.keys && 0 !== Object.keys(_0xd227b7).length) {
            return false;
          }
          if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(_0xd227b7).length) {
            return false;
          }
          var _0xe98368 = Object.getOwnPropertySymbols(_0xd227b7);
          if (1 !== _0xe98368.length || _0xe98368[0] !== _0x3c0a61) {
            return false;
          }
          if (!{}.propertyIsEnumerable.call(_0xd227b7, _0x3c0a61)) {
            return false;
          }
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var _0x2b0b24 = Object.getOwnPropertyDescriptor(_0xd227b7, _0x3c0a61);
            if (42 !== _0x2b0b24.value || true !== _0x2b0b24.enumerable) {
              return false;
            }
          }
          return true;
        };
      }
    },
    6618(_0x44e86c, _0x4b94e6, _0x45b695) {
      "use strict";

      {
        var _0x5b7d9e = _0x45b695(8123);
        _0x44e86c.exports = function () {
          return _0x5b7d9e() && !!Symbol.toStringTag;
        };
      }
    },
    7533(_0x408de2, _0xe70f7, _0x1565ae) {
      "use strict";

      var _0xef07dc = function () {}.call;
      var _0x4a7fc5 = {}.hasOwnProperty;
      var _0x44ffbb = _0x1565ae(3583);
      _0x408de2.exports = _0x44ffbb.call(_0xef07dc, _0x4a7fc5);
    },
    9895(_0x26da20) {
      "use strict";

      _0x26da20.exports = Math.abs;
    },
    2153(_0x13ef18) {
      "use strict";

      _0x13ef18.exports = Math.floor;
    },
    5518(_0x7a37ee) {
      "use strict";

      _0x7a37ee.exports = Number.isNaN || function (_0x56f15f) {
        return _0x56f15f != _0x56f15f;
      };
    },
    457(_0x3b4f8a) {
      "use strict";

      _0x3b4f8a.exports = Math.max;
    },
    1179(_0x4cb1d2) {
      "use strict";

      _0x4cb1d2.exports = Math.min;
    },
    5985(_0x271e1e) {
      "use strict";

      {
        _0x271e1e.exports = Math.pow;
      }
    },
    8639(_0x121325) {
      "use strict";

      {
        _0x121325.exports = Math.round;
      }
    },
    5738(_0x2cbeab, _0x17691a, _0x5243ee) {
      "use strict";

      {
        var _0x36cdb4 = _0x5243ee(5518);
        _0x2cbeab.exports = function (_0x3c5d46) {
          return _0x36cdb4(_0x3c5d46) || 0 === _0x3c5d46 ? _0x3c5d46 : 0 > _0x3c5d46 ? -1 : 1;
        };
      }
    },
    6713(_0x9f91d1, _0x1349fe, _0x15337d) {
      _0x9f91d1.exports = _0x15337d(7080);
    },
    1976(_0x158419, _0x400e29, _0x44e811) {
      "use strict";

      var _0x367ed3;
      var _0x337cd0;
      var _0x5ede83;
      var _0x25878c = _0x44e811(6713);
      var _0x23b829 = _0x44e811(6928).extname;
      var _0x42ea97 = /^\s*([^;\s]*)(?:;|\s|$)/;
      var _0x175cfd = /^text\//i;
      function _0x39ec9b(_0x36f3bd) {
        if (!_0x36f3bd || "string" != typeof _0x36f3bd) {
          return false;
        }
        var _0x322afc = _0x42ea97.exec(_0x36f3bd);
        var _0x492f79 = _0x322afc && _0x25878c[_0x322afc[1].toLowerCase()];
        return _0x492f79 && _0x492f79.charset ? _0x492f79.charset : !(!_0x322afc || !_0x175cfd.test(_0x322afc[1])) && "UTF-8";
      }
      _0x400e29.charset = _0x39ec9b;
      _0x400e29.charsets = {
        lookup: _0x39ec9b
      };
      _0x400e29.contentType = function (_0x2185fa) {
        {
          if (!_0x2185fa || "string" != typeof _0x2185fa) {
            return false;
          }
          var _0x19c213 = -1 === _0x2185fa.indexOf("/") ? _0x400e29.lookup(_0x2185fa) : _0x2185fa;
          if (!_0x19c213) {
            return false;
          }
          if (-1 === _0x19c213.indexOf("charset")) {
            var _0x3308ea = _0x400e29.charset(_0x19c213);
            _0x3308ea && (_0x19c213 += "; charset=" + _0x3308ea.toLowerCase());
          }
          return _0x19c213;
        }
      };
      _0x400e29.extension = function (_0x438373) {
        {
          if (!_0x438373 || "string" != typeof _0x438373) {
            return false;
          }
          var _0x4b3579 = _0x42ea97.exec(_0x438373);
          var _0x14a9c2 = _0x4b3579 && _0x400e29.extensions[_0x4b3579[1].toLowerCase()];
          return !(!_0x14a9c2 || !_0x14a9c2.length) && _0x14a9c2[0];
        }
      };
      _0x400e29.extensions = Object.create(null);
      _0x400e29.lookup = function (_0x557256) {
        {
          if (!_0x557256 || "string" != typeof _0x557256) {
            return false;
          }
          var _0x3ac69b = _0x23b829("x." + _0x557256).toLowerCase().substr(1);
          return _0x3ac69b && _0x400e29.types[_0x3ac69b] || false;
        }
      };
      _0x400e29.types = Object.create(null);
      _0x367ed3 = _0x400e29.extensions;
      _0x337cd0 = _0x400e29.types;
      _0x5ede83 = ["nginx", "apache", undefined, "iana"];
      Object.keys(_0x25878c).forEach(function (_0x278441) {
        var _0x5395ca = _0x25878c[_0x278441];
        var _0x4a4fb8 = _0x5395ca.extensions;
        if (_0x4a4fb8 && _0x4a4fb8.length) {
          {
            _0x367ed3[_0x278441] = _0x4a4fb8;
            for (var _0x10f71d = 0; _0x10f71d < _0x4a4fb8.length; _0x10f71d++) {
              {
                var _0xb73624 = _0x4a4fb8[_0x10f71d];
                if (_0x337cd0[_0xb73624]) {
                  {
                    var _0x587fd9 = _0x5ede83.indexOf(_0x25878c[_0x337cd0[_0xb73624]].source);
                    var _0x179b67 = _0x5ede83.indexOf(_0x5395ca.source);
                    if ("application/octet-stream" !== _0x337cd0[_0xb73624] && (_0x587fd9 > _0x179b67 || _0x587fd9 === _0x179b67 && "application/" === _0x337cd0[_0xb73624].substr(0, 12))) {
                      continue;
                    }
                  }
                }
                _0x337cd0[_0xb73624] = _0x278441;
              }
            }
          }
        }
      });
    },
    9049(_0x43f25d) {
      var _0x53519f = 1000;
      var _0x41aa94 = 60 * _0x53519f;
      var _0x375929 = 60 * _0x41aa94;
      var _0x215475 = 24 * _0x375929;
      var _0xa9d566 = 7 * _0x215475;
      function _0x2b1ecb(_0x18ad45, _0x3ef3da, _0x32800a, _0x560244) {
        {
          var _0x36e75b = _0x3ef3da >= 1.5 * _0x32800a;
          return Math.round(_0x18ad45 / _0x32800a) + " " + _0x560244 + (_0x36e75b ? "s" : "");
        }
      }
      _0x43f25d.exports = function (_0xb723be, _0x23600e) {
        _0x23600e = _0x23600e || {};
        var _0x126d68;
        var _0x1155bc;
        var _0x485627 = typeof _0xb723be;
        if ("string" === _0x485627 && _0xb723be.length > 0) {
          return function (_0xc60ae2) {
            {
              if (100 >= (_0xc60ae2 += "").length) {
                {
                  var _0x4ed976 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0xc60ae2);
                  if (_0x4ed976) {
                    {
                      var _0x3015f3 = parseFloat(_0x4ed976[1]);
                      switch ((_0x4ed976[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                          return 31557600000 * _0x3015f3;
                        case "weeks":
                        case "week":
                        case "w":
                          return _0x3015f3 * _0xa9d566;
                        case "days":
                        case "day":
                        case "d":
                          return _0x3015f3 * _0x215475;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                          return _0x3015f3 * _0x375929;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                          return _0x3015f3 * _0x41aa94;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                          return _0x3015f3 * _0x53519f;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                          return _0x3015f3;
                        default:
                          return;
                      }
                    }
                  }
                }
              }
            }
          }(_0xb723be);
        }
        if ("number" === _0x485627 && isFinite(_0xb723be)) {
          return _0x23600e.long ? _0x215475 > (_0x1155bc = Math.abs(_0x126d68 = _0xb723be)) ? _0x375929 > _0x1155bc ? _0x41aa94 > _0x1155bc ? _0x53519f > _0x1155bc ? _0x126d68 + " ms" : _0x2b1ecb(_0x126d68, _0x1155bc, _0x53519f, "second") : _0x2b1ecb(_0x126d68, _0x1155bc, _0x41aa94, "minute") : _0x2b1ecb(_0x126d68, _0x1155bc, _0x375929, "hour") : _0x2b1ecb(_0x126d68, _0x1155bc, _0x215475, "day") : function (_0x4014c2) {
            {
              var _0x225213 = Math.abs(_0x4014c2);
              return _0x215475 > _0x225213 ? _0x375929 > _0x225213 ? _0x41aa94 > _0x225213 ? _0x53519f > _0x225213 ? _0x4014c2 + "ms" : Math.round(_0x4014c2 / _0x53519f) + "s" : Math.round(_0x4014c2 / _0x41aa94) + "m" : Math.round(_0x4014c2 / _0x375929) + "h" : Math.round(_0x4014c2 / _0x215475) + "d";
            }
          }(_0xb723be);
        }
        throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(_0xb723be));
      };
    },
    8805(_0x58b0eb, _0x2a4d2b, _0x36ae63) {
      "use strict";

      var _0x2749f4 = _0x36ae63(7016).parse;
      var _0x204389 = {
        ftp: 21,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      };
      var _0x18a93a = "".endsWith || function (_0x305072) {
        return _0x305072.length <= this.length && -1 !== this.indexOf(_0x305072, this.length - _0x305072.length);
      };
      function _0x55ed68(_0xd6c6ad) {
        return process.env[_0xd6c6ad.toLowerCase()] || process.env[_0xd6c6ad.toUpperCase()] || "";
      }
      _0x2a4d2b.getProxyForUrl = function (_0x4398b7) {
        {
          var _0x4ac5bf = "string" == typeof _0x4398b7 ? _0x2749f4(_0x4398b7) : _0x4398b7 || {};
          var _0x3d9377 = _0x4ac5bf.protocol;
          var _0x1ffee0 = _0x4ac5bf.host;
          var _0x2305c0 = _0x4ac5bf.port;
          if ("string" != typeof _0x1ffee0 || !_0x1ffee0 || "string" != typeof _0x3d9377) {
            return "";
          }
          if (_0x3d9377 = _0x3d9377.split(":", 1)[0], !function (_0x44a2af, _0x5dafea) {
            var _0x563996 = (_0x55ed68("npm_config_no_proxy") || _0x55ed68("no_proxy")).toLowerCase();
            return !_0x563996 || "*" !== _0x563996 && _0x563996.split(/[,\s]/).every(function (_0xe3c308) {
              {
                if (!_0xe3c308) {
                  return true;
                }
                var _0x17cd2c = _0xe3c308.match(/^(.+):(\d+)$/);
                var _0x1fdb7c = _0x17cd2c ? _0x17cd2c[1] : _0xe3c308;
                var _0x3ffed4 = _0x17cd2c ? parseInt(_0x17cd2c[2]) : 0;
                return !(!_0x3ffed4 || _0x3ffed4 === _0x5dafea) || (/^[.*]/.test(_0x1fdb7c) ? ("*" === _0x1fdb7c.charAt(0) && (_0x1fdb7c = _0x1fdb7c.slice(1)), !_0x18a93a.call(_0x44a2af, _0x1fdb7c)) : _0x44a2af !== _0x1fdb7c);
              }
            });
          }(_0x1ffee0 = _0x1ffee0.replace(/:\d*$/, ""), _0x2305c0 = parseInt(_0x2305c0) || _0x204389[_0x3d9377] || 0)) {
            return "";
          }
          var _0x39c0ff = _0x55ed68("npm_config_" + _0x3d9377 + "_proxy") || _0x55ed68(_0x3d9377 + "_proxy") || _0x55ed68("npm_config_proxy") || _0x55ed68("all_proxy");
          _0x39c0ff && -1 === _0x39c0ff.indexOf("://") && (_0x39c0ff = _0x3d9377 + "://" + _0x39c0ff);
          return _0x39c0ff;
        }
      };
    },
    4217(_0x369941, _0x25c0da, _0x327c60) {
      "use strict";

      {
        const _0x2e1295 = _0x327c60(857);
        const _0x153054 = _0x327c60(2018);
        const _0x4cc2f8 = _0x327c60(1533);
        const {
          env: _0xcf1ed6
        } = process;
        let _0xad2019;
        function _0x59fd11(_0x5a79cf, _0x3da41c = {}) {
          return 0 !== (_0x4fa13e = function (_0x2f7251, {
            streamIsTTY: _0x8b0218,
            sniffFlags: _0x3e88bb = true
          } = {}) {
            const _0x1e55e9 = function () {
              if ("FORCE_COLOR" in _0xcf1ed6) {
                return "true" === _0xcf1ed6.FORCE_COLOR ? 1 : "false" === _0xcf1ed6.FORCE_COLOR ? 0 : 0 === _0xcf1ed6.FORCE_COLOR.length ? 1 : Math.min(Number.parseInt(_0xcf1ed6.FORCE_COLOR, 10), 3);
              }
            }();
            undefined !== _0x1e55e9 && (_0xad2019 = _0x1e55e9);
            const _0x2a4c60 = _0x3e88bb ? _0xad2019 : _0x1e55e9;
            if (0 === _0x2a4c60) {
              return 0;
            }
            if (_0x3e88bb) {
              if (_0x4cc2f8("color=16m") || _0x4cc2f8("color=full") || _0x4cc2f8("color=truecolor")) {
                return 3;
              }
              if (_0x4cc2f8("color=256")) {
                return 2;
              }
            }
            if (_0x2f7251 && !_0x8b0218 && undefined === _0x2a4c60) {
              return 0;
            }
            const _0xf37fd4 = _0x2a4c60 || 0;
            if ("dumb" === _0xcf1ed6.TERM) {
              return _0xf37fd4;
            }
            if ("win32" === process.platform) {
              const _0x44dadd = _0x2e1295.release().split(".");
              return 10 > +_0x44dadd[0] || 10586 > +_0x44dadd[2] ? 1 : 14931 > +_0x44dadd[2] ? 2 : 3;
            }
            if ("CI" in _0xcf1ed6) {
              return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some(_0x5b0c5f => _0x5b0c5f in _0xcf1ed6) || "codeship" === _0xcf1ed6.CI_NAME ? 1 : _0xf37fd4;
            }
            if ("TEAMCITY_VERSION" in _0xcf1ed6) {
              return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(_0xcf1ed6.TEAMCITY_VERSION) ? 1 : 0;
            }
            if ("truecolor" === _0xcf1ed6.COLORTERM) {
              return 3;
            }
            if ("TERM_PROGRAM" in _0xcf1ed6) {
              const _0x2640e1 = Number.parseInt((_0xcf1ed6.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
              switch (_0xcf1ed6.TERM_PROGRAM) {
                case "iTerm.app":
                  return 3 > _0x2640e1 ? 2 : 3;
                case "Apple_Terminal":
                  return 2;
              }
            }
            return /-256(color)?$/i.test(_0xcf1ed6.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(_0xcf1ed6.TERM) || "COLORTERM" in _0xcf1ed6 ? 1 : _0xf37fd4;
          }(_0x5a79cf, {
            streamIsTTY: _0x5a79cf && _0x5a79cf.isTTY,
            ..._0x3da41c
          })) && {
            level: _0x4fa13e,
            hasBasic: true,
            has256: _0x4fa13e >= 2,
            has16m: _0x4fa13e >= 3
          };
          var _0x4fa13e;
        }
        _0x4cc2f8("no-color") || _0x4cc2f8("no-colors") || _0x4cc2f8("color=false") || _0x4cc2f8("color=never") ? _0xad2019 = 0 : (_0x4cc2f8("color") || _0x4cc2f8("colors") || _0x4cc2f8("color=true") || _0x4cc2f8("color=always")) && (_0xad2019 = 1);
        _0x369941.exports = {
          supportsColor: _0x59fd11,
          stdout: _0x59fd11({
            isTTY: _0x153054.isatty(1)
          }),
          stderr: _0x59fd11({
            isTTY: _0x153054.isatty(2)
          })
        };
      }
    },
    6439(_0x305bb6, _0x19cdb0, _0x3313e4) {
      "use strict";

      var _0x4382b4 = this && this.__createBinding || (Object.create ? function (_0x347c1b, _0x1c9fae, _0x509572, _0x2ed587) {
        {
          undefined === _0x2ed587 && (_0x2ed587 = _0x509572);
          var _0x379bc6 = Object.getOwnPropertyDescriptor(_0x1c9fae, _0x509572);
          _0x379bc6 && !("get" in _0x379bc6 ? !_0x1c9fae.__esModule : _0x379bc6.writable || _0x379bc6.configurable) || (_0x379bc6 = {
            enumerable: true,
            get() {
              {
                return _0x1c9fae[_0x509572];
              }
            }
          });
          Object.defineProperty(_0x347c1b, _0x2ed587, _0x379bc6);
        }
      } : function (_0x3e2d3a, _0x407e78, _0x5022a4, _0x4a61d0) {
        undefined === _0x4a61d0 && (_0x4a61d0 = _0x5022a4);
        _0x3e2d3a[_0x4a61d0] = _0x407e78[_0x5022a4];
      });
      var _0x1dcca6 = this && this.__setModuleDefault || (Object.create ? function (_0x577076, _0x37a371) {
        {
          Object.defineProperty(_0x577076, "default", {
            enumerable: true,
            value: _0x37a371
          });
        }
      } : function (_0x845d50, _0x5a6d87) {
        _0x845d50.default = _0x5a6d87;
      });
      var _0x4d02ec = this && this.__importStar || function (_0x1ffeb8) {
        if (_0x1ffeb8 && _0x1ffeb8.__esModule) {
          return _0x1ffeb8;
        }
        var _0x4b44a9 = {};
        if (null != _0x1ffeb8) {
          for (var _0x20c899 in _0x1ffeb8) "default" !== _0x20c899 && {}.hasOwnProperty.call(_0x1ffeb8, _0x20c899) && _0x4382b4(_0x4b44a9, _0x1ffeb8, _0x20c899);
        }
        _0x1dcca6(_0x4b44a9, _0x1ffeb8);
        return _0x4b44a9;
      };
      Object.defineProperty(_0x19cdb0, "__esModule", {
        value: true
      });
      _0x19cdb0.deactivate = _0x19cdb0.activate = undefined;
      const _0x360524 = _0x3313e4(6928);
      const _0x1be87d = _0x4d02ec(_0x3313e4(1398));
      const _0x73273f = _0x3313e4(1398);
      const _0x149bb1 = _0x3313e4(9896);
      const _0x54df6a = _0x3313e4(819);
      const _0x23068b = _0x3313e4(7556);
      const _0x28fffd = _0x3313e4(6342);
      const _0x22f58d = _0x3313e4(7985);
      const _0x5768ce = _0x3313e4(761);
      const _0x451506 = _0x3313e4(2908);
      const _0x15bfef = _0x3313e4(1447);
      const _0x3b2cc9 = _0x3313e4(9340);
      const _0x1d0841 = _0x3313e4(5411);
      const _0x525d38 = _0x3313e4(2343);
      const _0x28fe91 = _0x3313e4(2875);
      const _0x14e49a = _0x3313e4(6700);
      const _0x3a7e7e = _0x3313e4(7811);
      let _0x53b279;
      let _0x55eaab;
      let _0x3ea101;
      let _0xbdd519;
      let _0xae4379;
      let _0x22b02f;
      let _0xa8db44;
      let _0x3182e2;
      _0x19cdb0.activate = async function (_0x547c7d) {
        _0x53b279 = new _0x54df6a.StorageService(_0x547c7d);
        _0x55eaab = new _0x23068b.ApiService();
        _0x3ea101 = new _0x28fffd.CursorAutoLoginService(_0x547c7d);
        const _0x123560 = _0x3313e4(8330).version || "0.0.1";
        const _0x34dea3 = await _0x451506.VersionCheckService.checkVersionCompatibility(_0x123560);
        await _0x53b279.setVersionCheck(_0x34dea3);
        const _0x46a430 = !_0x34dea3.isCompatible;
        const _0x21057e = !_0x34dea3.isCursorVersionCompatible;
        if (_0x46a430 || _0x21057e) {
          const _0x3f39d7 = [];
          _0x46a430 && _0x3f39d7.push("插件版本过低（当前: " + _0x34dea3.currentVersion + "，要求: " + _0x34dea3.minVersion + "），请安装最新版本");
          _0x21057e && _0x3f39d7.push("Cursor 版本不支持（当前: " + _0x34dea3.cursorVersion + "，支持: " + _0x34dea3.minCursorVersion + " ~ " + _0x34dea3.maxCursorVersion + "），请安装建议版本");
          _0x1be87d.window.showWarningMessage(_0x3f39d7.join("；"));
        }
        _0xbdd519 = new _0x22f58d.NotificationService(_0x55eaab, _0x53b279, _0x547c7d);
        _0xbdd519.startPolling();
        _0xae4379 = new _0x5768ce.AnnouncementService(_0x55eaab, _0x53b279, _0x547c7d);
        _0x3182e2 = new _0x4d31a2(_0x547c7d);
        _0x547c7d.subscriptions.push(_0x1be87d.window.registerWebviewViewProvider("cursor-free.view", _0x3182e2, {
          webviewOptions: {
            retainContextWhenHidden: true
          }
        }));
        _0xae4379.setUpdateCallback(() => {
          _0x3182e2 && _0x3182e2.notifyAnnouncementUpdate();
        });
        _0xae4379.startPolling();
        _0x22b02f = new _0x15bfef.AccountCleanupService(_0x53b279, _0x55eaab);
        _0x22b02f.startPolling();
        _0x28fe91.wasmCryptoService.initialize().catch(_0x1a5889 => {
          {
            _0x1be87d.window.showErrorMessage("动态补丁系统初始化失败，请联系客服。");
          }
        });
        _0xa8db44 = new _0x14e49a.ProxyService(_0x55eaab, _0x53b279);
        _0x547c7d.subscriptions.push(_0x1be87d.commands.registerCommand("cursor-free.enableProxy", async () => {
          await _0x1be87d.window.withProgress({
            location: _0x1be87d.ProgressLocation.Notification,
            title: "正在启用代理...",
            cancellable: false
          }, async _0x55eb25 => {
            _0x55eb25.report({
              message: "清除旧代理配置..."
            });
            await _0xa8db44.disableProxy();
            _0x55eb25.report({
              message: "获取代理配置..."
            });
            const _0x43a336 = await _0xa8db44.enableProxy();
            _0x43a336.success ? _0x1be87d.window.showInformationMessage("代理已启用: 成功\n提示：可能需要重启 Cursor 使代理完全生效") : _0x1be87d.window.showErrorMessage("代理启用失败: " + _0x43a336.error);
          });
        }), _0x1be87d.commands.registerCommand("cursor-free.disableProxy", async () => {
          await _0x1be87d.window.withProgress({
            location: _0x1be87d.ProgressLocation.Notification,
            title: "正在禁用代理...",
            cancellable: false
          }, async _0xc8de72 => {
            const _0x16cc01 = await _0xa8db44.disableProxy();
            _0x16cc01.success ? _0x1be87d.window.showInformationMessage("代理已禁用") : _0x1be87d.window.showErrorMessage("代理禁用失败: " + _0x16cc01.error);
          });
        }), _0x1be87d.commands.registerCommand("cursor-free.restoreCursor", async () => {
          const _0x3dcdb3 = _0x1d0841.CursorPathService.hasAllBackups();
          if (!_0x3dcdb3.hasAll) {
            const _0x52a1a3 = [];
            _0x3dcdb3.workbench || _0x52a1a3.push("workbench.desktop.main.js");
            _0x3dcdb3.alwaysLocal || _0x52a1a3.push("cursor-always-local/dist/main.js");
            _0x3dcdb3.extensionHost || _0x52a1a3.push("extensionHostProcess.js");
            return void _0x1be87d.window.showErrorMessage("无法恢复：以下文件的备份不存在: " + _0x52a1a3.join(", ") + "。可能尚未打过补丁，或请重新安装 Cursor 后再使用本插件。");
          }
          "确定恢复" === (await _0x1be87d.window.showWarningMessage("确定要恢复Cursor吗？这将撤销所有补丁，恢复到原始状态。", {
            modal: true
          }, "确定恢复")) && (await _0x1be87d.window.withProgress({
            location: _0x1be87d.ProgressLocation.Notification,
            title: "正在恢复Cursor...",
            cancellable: false
          }, async () => {
            const _0x11ed56 = _0x1d0841.CursorPathService.restoreAllFromBackup();
            _0x11ed56.success ? _0x1be87d.window.showInformationMessage("Cursor已恢复！请手动重启Cursor使更改生效。") : _0x1be87d.window.showErrorMessage("恢复失败: " + _0x11ed56.error);
          }));
        }));
      };
      class _0x4d31a2 {
        constructor(_0x15138f) {
          {
            this.context = _0x15138f;
          }
        }
        notifyAnnouncementUpdate() {
          this._view && this._view.webview.postMessage({
            command: "ANNOUNCEMENT_UPDATED"
          });
        }
        resolveWebviewView(_0x1f1257, _0x31818a, _0x1c198e) {
          this._view = _0x1f1257;
          _0x1f1257.webview.options = {
            enableScripts: true,
            localResourceRoots: [this.context.extensionUri]
          };
          _0x1f1257.webview.html = this.getWebviewContent(_0x1f1257.webview);
          _0x1f1257.webview.onDidReceiveMessage(async _0x599bfb => {
            const {
              command: _0x4218f0,
              requestId: _0x452805,
              payload: _0x15cba7
            } = _0x599bfb;
            try {
              switch (_0x4218f0) {
                case "GET_STATE":
                  await _0x537f7c(_0x1f1257.webview, _0x452805);
                  break;
                case "ACTIVATE":
                  await async function (_0x4c4404, _0x654bd4, _0x1f8583) {
                    const {
                      activationCode: _0xe800fb
                    } = _0x1f8583;
                    if (!_0xe800fb || "" === _0xe800fb.trim()) {
                      const _0x4faa18 = "激活码不能为空";
                      throw _0x1be87d.window.showErrorMessage(_0x4faa18), Error(_0x4faa18);
                    }
                    const _0x3f283e = await _0x757bad().catch(_0x42e71e => (_0x1be87d.window.showInformationMessage(_0x42e71e instanceof Error ? _0x42e71e.message : "未知错误"), {
                      needsRestart: false,
                      error: _0x42e71e.message
                    }));
                    if (_0x3f283e.error) {
                      throw Error(_0x3f283e.error);
                    }
                    const _0x801d00 = _0x3f283e.needsRestart;
                    const _0x486d72 = await _0x53b279.getDeviceId();
                    try {
                      {
                        const _0x3ba4e1 = await _0x55eaab.activateKey(_0xe800fb.trim(), _0x486d72);
                        if (0 !== _0x3ba4e1.code) {
                          throw Error(_0x3ba4e1.msg || "激活失败");
                        }
                        const _0x5381fd = _0x3ba4e1.data;
                        if (await _0x53b279.setActivationCode(_0xe800fb.trim()), _0x5381fd.mail && (await _0x53b279.setMail(_0x5381fd.mail)), _0x5381fd.oem_info && (await _0x53b279.setOEMInfo(_0x5381fd.oem_info)), _0x5381fd.key_info && (await _0x53b279.setKeyInfo(_0x5381fd.key_info)), _0x801d00) {
                          await _0x537f7c(_0x4c4404, _0x654bd4);
                          _0x1be87d.window.showInformationMessage("激活成功！补丁已应用，Cursor 正在重启。重启完成后请点击【获取账号】按钮。");
                          return void setTimeout(() => {
                            _0x1be87d.commands.executeCommand("workbench.action.reloadWindow");
                          }, 1000);
                        }
                        _0x1be87d.window.showInformationMessage("激活成功！");
                        await _0x537f7c(_0x4c4404, _0x654bd4);
                      }
                    } catch (_0x402e50) {
                      const _0x5a3dc5 = _0x402e50 instanceof Error ? _0x402e50.message : "激活失败";
                      if (await _0x537f7c(_0x4c4404, _0x654bd4), _0x801d00) {
                        throw setTimeout(() => {
                          _0x1be87d.commands.executeCommand("workbench.action.reloadWindow");
                        }, 1000), Error(_0x5a3dc5 + "。但补丁已应用，Cursor 需要重启才能生效。");
                      }
                      throw _0x402e50;
                    }
                  }(_0x1f1257.webview, _0x452805, _0x15cba7);
                  break;
                case "REFRESH_TOKEN":
                  await async function (_0x126ae6, _0x2c638a) {
                    const _0x245b5e = await _0x53b279.getDeviceId();
                    const _0x5b049b = await _0x53b279.getActivationCode();
                    if (!_0x5b049b) {
                      throw Error("刷新令牌需要激活码");
                    }
                    const _0x48c862 = await _0x757bad();
                    if (_0x48c862.needsRestart) {
                      _0x1be87d.window.showInformationMessage("补丁已应用，Cursor 正在重启。重启完成后请再次点击【获取账号】按钮。");
                      return void setTimeout(() => {
                        _0x1be87d.commands.executeCommand("workbench.action.reloadWindow");
                      }, 1000);
                    }
                    if (_0x48c862.error) {
                      throw Error(_0x48c862.error);
                    }
                    const _0x5e536b = (await _0x53b279.getAccountHistory())[0];
                    const _0x13466d = _0x5e536b?.["access_token"];
                    if (_0x13466d && (await _0x55eaab.checkTokenValidity(_0x13466d))) {
                      {
                        const {
                          mail: _0x57d6e3,
                          refresh_token: _0x2c220f
                        } = _0x5e536b;
                        _0x57d6e3 && _0x2c220f ? await _0x51edfe(_0x13466d, _0x2c220f, _0x57d6e3) : _0x1be87d.window.showInformationMessage("当前账号仍然有效。");
                        return void (await _0x537f7c(_0x126ae6, _0x2c638a));
                      }
                    }
                    const _0x3e1556 = await _0x55eaab.refreshKey(_0x5b049b, _0x245b5e);
                    if (0 !== _0x3e1556.code) {
                      throw Error(_0x3e1556.msg || "令牌刷新失败");
                    }
                    const _0x8b10d3 = _0x3e1556.data;
                    if (_0x8b10d3.mail && (await _0x53b279.setMail(_0x8b10d3.mail)), _0x8b10d3.oem_info && (await _0x53b279.setOEMInfo(_0x8b10d3.oem_info)), _0x8b10d3.key_info && (await _0x53b279.setKeyInfo(_0x8b10d3.key_info)), _0x8b10d3.decryptedMetadata) {
                      const {
                        mail: _0x268044,
                        access_token: _0x760c14,
                        refresh_token: _0x2c4ab4
                      } = _0x8b10d3.decryptedMetadata;
                      _0x760c14 && _0x268044 && _0x8b10d3.key_info ? (await _0x53b279.addAccountToHistory({
                        mail: _0x268044,
                        access_token: _0x760c14,
                        keyInfo: _0x8b10d3.key_info,
                        timestamp: Date.now(),
                        refresh_token: _0x2c4ab4
                      }), await _0x51edfe(_0x760c14, _0x2c4ab4, _0x268044)) : _0x1be87d.window.showInformationMessage("Token refreshed successfully!");
                    } else {
                      _0x1be87d.window.showInformationMessage("Token refreshed successfully!");
                    }
                    await _0x537f7c(_0x126ae6, _0x2c638a);
                  }(_0x1f1257.webview, _0x452805);
                  break;
                case "CLEAR_DATA":
                  await async function (_0x19db6f, _0x3c1681) {
                    await _0x53b279.clearAllData();
                    await _0x537f7c(_0x19db6f, _0x3c1681);
                    _0x1be87d.window.showInformationMessage("所有数据已清除！");
                  }(_0x1f1257.webview, _0x452805);
                  break;
                case "RELEASE_DEVICE":
                  await async function (_0x1b69a6, _0x2790a0) {
                    const _0x1c7f39 = await _0x53b279.getDeviceId();
                    const _0x2074ca = await _0x53b279.getActivationCode();
                    if (!_0x2074ca) {
                      throw Error("解绑设备需要激活码");
                    }
                    const _0x1e9078 = "确定解绑";
                    if ((await _0x1be87d.window.showWarningMessage("确定要解绑此设备吗？解绑后需要重新激活。", {
                      modal: true
                    }, _0x1e9078)) !== _0x1e9078) {
                      return void _0x1b69a6.postMessage({
                        command: "RELEASE_DEVICE",
                        requestId: _0x2790a0,
                        payload: {
                          cancelled: true
                        }
                      });
                    }
                    const _0x30b9dd = await _0x55eaab.releaseDevice(_0x2074ca, _0x1c7f39);
                    if (0 !== _0x30b9dd.code) {
                      throw Error(_0x30b9dd.msg || "设备解绑失败");
                    }
                    await _0x53b279.clearAllData();
                    await _0x537f7c(_0x1b69a6, _0x2790a0);
                    _0x1be87d.window.showInformationMessage("设备解绑成功！");
                  }(_0x1f1257.webview, _0x452805);
                  break;
                case "SWITCH_ACCOUNT":
                  await async function (_0x4284b3, _0x192352, _0x8043c6) {
                    const {
                      mail: _0x1cbe44
                    } = _0x8043c6;
                    if (!_0x1cbe44) {
                      throw Error("切换账号需要邮箱地址");
                    }
                    const _0x2b7540 = (await _0x53b279.getAccountHistory()).find(_0x44639e => _0x44639e.mail === _0x1cbe44);
                    if (!_0x2b7540) {
                      throw Error("历史记录中未找到该账号");
                    }
                    await _0x53b279.setMail(_0x2b7540.mail);
                    await _0x51edfe(_0x2b7540.access_token, _0x2b7540.refresh_token, _0x2b7540.mail);
                    await _0x537f7c(_0x4284b3, _0x192352);
                  }(_0x1f1257.webview, _0x452805, _0x15cba7);
                  break;
                case "REMOVE_ACCOUNT_HISTORY":
                  await async function (_0x4138a7, _0x42cb14, _0x4b5c94) {
                    const {
                      mail: _0x107a8d
                    } = _0x4b5c94;
                    if (!_0x107a8d) {
                      throw Error("从历史记录中移除需要邮箱地址");
                    }
                    const _0x2d9f7c = (await _0x53b279.getAccountHistory()).find(_0xf9c628 => _0xf9c628.mail === _0x107a8d);
                    if (_0x2d9f7c) {
                      {
                        const _0x3954a8 = await _0x55eaab.deleteCursorAccount(_0x2d9f7c.access_token);
                        _0x3954a8.success || _0x1be87d.window.showWarningMessage("删除账号失败: " + _0x3954a8.error + "，但已从历史记录中移除。");
                      }
                    }
                    await _0x53b279.removeAccountFromHistory(_0x107a8d);
                    await _0x537f7c(_0x4138a7, _0x42cb14);
                    _0x1be87d.window.showInformationMessage("账号已从历史记录中移除！");
                  }(_0x1f1257.webview, _0x452805, _0x15cba7);
                  break;
                case "REFRESH_ACCOUNT_ROLES":
                  await async function (_0x51d41f, _0x49b7d4, _0x1f441f) {
                    const {
                      accounts: _0x55528a
                    } = _0x1f441f;
                    if (!_0x55528a || 0 === _0x55528a.length) {
                      throw Error("刷新角色需要账号列表");
                    }
                    const _0x428b0d = {};
                    for (const _0x41158f of _0x55528a) try {
                      {
                        const _0x195037 = await _0x55eaab.getUserRole(_0x41158f.access_token);
                        _0x428b0d[_0x41158f.mail] = _0x195037;
                      }
                    } catch (_0x6c344e) {
                      _0x428b0d[_0x41158f.mail] = null;
                    }
                    _0x51d41f.postMessage({
                      command: "REFRESH_ACCOUNT_ROLES",
                      requestId: _0x49b7d4,
                      payload: _0x428b0d
                    });
                  }(_0x1f1257.webview, _0x452805, _0x15cba7);
                  break;
                case "LOOKUP_QUOTA":
                  await async function (_0x322f5f, _0x3624c9) {
                    const _0x6d24e8 = await _0x53b279.getDeviceId();
                    const _0x342e22 = await _0x53b279.getActivationCode();
                    if (!_0x342e22) {
                      throw Error("查询配额需要激活码");
                    }
                    const _0x4322f0 = await _0x55eaab.lookupQuota(_0x342e22, _0x6d24e8);
                    if (0 !== _0x4322f0.code) {
                      throw Error(_0x4322f0.msg || "查询配额失败");
                    }
                    const _0x4d36c7 = _0x4322f0.data;
                    const _0x13b787 = await _0x53b279.getKeyInfo();
                    _0x13b787 && (_0x13b787.quota_key_used_quota = _0x4d36c7.key_info.quota_key_used_quota, _0x13b787.quota_key_max_quota = _0x4d36c7.key_info.quota_key_max_quota, await _0x53b279.setKeyInfo(_0x13b787));
                    await _0x537f7c(_0x322f5f, _0x3624c9);
                  }(_0x1f1257.webview, _0x452805);
                  break;
                default:
                  _0x1f1257.webview.postMessage({
                    command: _0x4218f0,
                    requestId: _0x452805,
                    error: "未知命令: " + _0x4218f0
                  });
              }
            } catch (_0x1bf9e9) {
              const _0x16bc06 = _0x1bf9e9 instanceof Error ? _0x1bf9e9.message : "未知错误";
              _0x1be87d.window.showErrorMessage(_0x16bc06);
              _0x1f1257.webview.postMessage({
                command: _0x4218f0,
                requestId: _0x452805,
                error: _0x16bc06
              });
            }
          }, undefined, this.context.subscriptions);
        }
        getWebviewContent(_0x8d421b) {
          let _0x5587ee = [];
          const _0x2dff6a = this.context.extensionMode === _0x73273f.ExtensionMode.Production;
          if (_0x2dff6a) {
            {
              const _0x3d4eed = (0, _0x149bb1.readFileSync)((0, _0x360524.join)(this.context.extensionPath, "dist", "webview", "manifest.json"), "utf-8");
              const _0x21895c = JSON.parse(_0x3d4eed);
              for (const [_0x3e8d7e, _0x38d579] of Object.entries(_0x21895c)) _0x3e8d7e.endsWith(".js") && _0x5587ee.push(_0x8d421b.asWebviewUri(_0x73273f.Uri.file((0, _0x360524.join)(this.context.extensionPath, "dist", "webview", _0x38d579))).toString());
            }
          } else {
            _0x5587ee.push("http://localhost:9000/main.bundle.js");
          }
          return "<!DOCTYPE html>\n\t<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <style>\n\t\t\tbody {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\toverscroll-behavior-x: none;\n\t\t\t\tbackground-color: var(--vscode-editor-background);\n\t\t\t\tcolor: var(--vscode-editor-foreground);\n\t\t\t\tfont-family: var(--vscode-font-family);\n\t\t\t\tfont-weight: var(--vscode-font-weight);\n\t\t\t\tfont-size: var(--vscode-font-size);\n\t\t\t\t/* 在这里添加你想要的其他样式 */\n\t\t\t}\n\t\t</style>\n\t\t" + (_0x2dff6a ? "<link href=\"null\" rel=\"stylesheet\">" : "") + "\n\t</head>\n\t<body>\n\t\t<div id=\"root\"></div>\n\n\t\t" + _0x5587ee.map(_0x393fba => "<script src=\"" + _0x393fba + "\"></script>").join("\n") + "\n\t</body>\n\t</html>";
        }
      }
      async function _0x537f7c(_0x118b88, _0x362032) {
        const _0x1e52d9 = await _0x53b279.getDeviceId();
        const _0x47ba34 = _0x3313e4(8330).version || "0.0.1";
        const _0x1e079d = (0, _0x3a7e7e.getCursorVersion)() || _0x1be87d.version;
        const _0x2645a9 = _0x1be87d.env.appName;
        const _0x30137e = await _0x53b279.getAuthStatus();
        const _0x5ce560 = await _0x53b279.getActivationCode();
        const _0x584cb7 = await _0x53b279.getMail();
        const _0x28e17e = await _0x53b279.getOEMInfo();
        const _0x35d5ec = await _0x53b279.getKeyInfo();
        const _0x2f5534 = await _0x53b279.getAnnouncement();
        const _0x259a54 = await _0x53b279.getVersionCheck();
        let _0x41e057 = await _0x53b279.getRecentAccountHistory(4);
        _0x584cb7 && (_0x41e057 = _0x41e057.filter(_0xeda14e => _0xeda14e.mail !== _0x584cb7));
        const _0x50f6f4 = {
          deviceId: _0x1e52d9,
          extensionVersion: _0x47ba34,
          vscodeVersion: _0x1e079d,
          hostName: _0x2645a9,
          authStatus: _0x30137e,
          activationCode: _0x5ce560,
          mail: _0x584cb7,
          oemInfo: _0x28e17e,
          keyInfo: _0x35d5ec,
          announcement: _0x2f5534,
          accountHistory: _0x41e057,
          versionCheck: _0x259a54
        };
        _0x118b88.postMessage({
          command: "GET_STATE",
          requestId: _0x362032,
          payload: _0x50f6f4
        });
      }
      async function _0x51edfe(_0x3efb76, _0xe7d1c0, _0x4b13dd) {
        {
          const _0x291739 = await _0x3ea101.injectTokens(_0x3efb76, _0xe7d1c0, _0x4b13dd);
          return _0x291739.success ? (_0x1be87d.window.showInformationMessage("登录成功! Cursor 账号已自动登录。"), {
            success: true
          }) : (_0x1be87d.window.showErrorMessage("登录失败: " + _0x291739.error), {
            success: false,
            error: _0x291739.error
          });
        }
      }
      async function _0x757bad() {
        try {
          const _0x2f1202 = _0x1be87d.workspace.getConfiguration();
          if (await Promise.all([_0x2f1202.update("cursor.general.disableHttp2", false, _0x1be87d.ConfigurationTarget.Global), _0x2f1202.update("update.mode", "none", _0x1be87d.ConfigurationTarget.Global)]), await _0x3b2cc9.CursorPatchService.isPatchApplied()) {
            return {
              needsRestart: false
            };
          }
          const _0x264a0a = _0x3b2cc9.CursorPatchService.checkWritePermission();
          if (!_0x264a0a.hasPermission) {
            return {
              needsRestart: false,
              error: _0x264a0a.error || "文件操作权限不足，无法应用补丁。请检查文件权限。"
            };
          }
          const _0x1f6745 = _0x451506.VersionCheckService.getCursorVersion();
          if (!_0x1f6745) {
            return {
              needsRestart: false,
              error: "无法检测 Cursor 版本，无法应用补丁。请确保您使用的是官方 Cursor 编辑器。"
            };
          }
          const _0x4f7560 = _0x451506.VersionCheckService.getSimplifiedVersion(_0x1f6745);
          let _0x2bb93f;
          try {
            {
              _0x2bb93f = await _0x525d38.CursorRulesPatchService.loadRulesForCurrentVersion(_0x4f7560);
            }
          } catch (_0x5a1a9a) {
            return {
              needsRestart: false,
              error: "加载补丁规则失败: " + (_0x5a1a9a instanceof Error ? _0x5a1a9a.message : "Unknown error") + "。这是关键依赖，补丁无法应用。请检查网络连接后重试。"
            };
          }
          const _0x17558f = await _0x3b2cc9.CursorPatchService.applyPatchWithRules(_0x2bb93f);
          return _0x17558f.success ? {
            needsRestart: true
          } : {
            needsRestart: false,
            error: _0x17558f.error || "补丁应用失败"
          };
        } catch (_0x1391cb) {
          return {
            needsRestart: false,
            error: "补丁检查/应用失败: " + (_0x1391cb instanceof Error ? _0x1391cb.message : "Unknown error")
          };
        }
      }
      _0x19cdb0.deactivate = function () {
        _0x22b02f && _0x22b02f.stopPolling();
        _0xbdd519 && _0xbdd519.stopPolling();
        _0xae4379 && _0xae4379.stopPolling();
      };
    },
    1447(_0x2eb964, _0x135940) {
      "use strict";

      Object.defineProperty(_0x135940, "__esModule", {
        value: true
      });
      _0x135940.AccountCleanupService = undefined;
      _0x135940.AccountCleanupService = class {
        constructor(_0x2bc2ff, _0x70d131) {
          this.storageService = _0x2bc2ff;
          this.apiService = _0x70d131;
          this.POLLING_INTERVAL = 3600000;
          this.ACCOUNT_TTL = 86400000;
          this.MAX_HISTORY_COUNT = 3;
        }
        startPolling() {
          this.cleanup().catch(_0x4a8d51 => {});
          this.pollingTimer = setInterval(() => {
            this.cleanup().catch(_0x48d3b0 => {});
          }, this.POLLING_INTERVAL);
        }
        stopPolling() {
          this.pollingTimer && (clearInterval(this.pollingTimer), this.pollingTimer = undefined);
        }
        async cleanup() {
          {
            try {
              const _0x3bac70 = await this.storageService.getAccountHistory();
              const _0x1f3969 = await this.storageService.getMail();
              const _0x12dede = _0x1f3969 ? _0x3bac70.filter(_0x339661 => _0x339661.mail !== _0x1f3969) : _0x3bac70;
              if (0 === _0x12dede.length) {
                return;
              }
              const _0x3d51ea = Date.now() - this.ACCOUNT_TTL;
              const _0x375058 = [..._0x12dede].sort((_0x5f37a0, _0x3dc154) => _0x3dc154.timestamp - _0x5f37a0.timestamp);
              const _0xa29e9a = [..._0x375058.filter(_0x14ae13 => _0x14ae13.timestamp <= _0x3d51ea), ..._0x375058.slice(this.MAX_HISTORY_COUNT)];
              const _0x1b7559 = Array.from(new Map(_0xa29e9a.map(_0x22a673 => [_0x22a673.mail, _0x22a673])).values());
              const _0x34711a = [];
              for (const _0x9432d2 of _0x1b7559) "Unknown" === (await this.apiService.getUserRole(_0x9432d2.access_token).catch(() => "Unknown")) && _0x34711a.push(_0x9432d2);
              if (0 === _0x34711a.length) {
                return;
              }
              for (const _0x5f8811 of _0x34711a) await this.deleteAccountWithRetry(_0x5f8811);
            } catch (_0x550a9b) {
              {
                throw _0x550a9b;
              }
            }
          }
        }
        async deleteAccountWithRetry(_0x4360e4) {
          const {
            mail: _0x42e277,
            access_token: _0x30a9c4
          } = _0x4360e4;
          try {
            (await this.apiService.deleteCursorAccount(_0x30a9c4)).success;
          } catch (_0x35e5d5) {
            _0x35e5d5 instanceof Error && _0x35e5d5.message;
          } finally {
            await this.storageService.removeAccountFromHistory(_0x42e277);
          }
        }
      };
    },
    761(_0x2e8cff, _0xa0c402, _0x268423) {
      "use strict";

      var _0x1309e5 = this && this.__createBinding || (Object.create ? function (_0xece666, _0x3b664f, _0x272053, _0x2e81ef) {
        undefined === _0x2e81ef && (_0x2e81ef = _0x272053);
        var _0x17328f = Object.getOwnPropertyDescriptor(_0x3b664f, _0x272053);
        _0x17328f && !("get" in _0x17328f ? !_0x3b664f.__esModule : _0x17328f.writable || _0x17328f.configurable) || (_0x17328f = {
          enumerable: true,
          get() {
            return _0x3b664f[_0x272053];
          }
        });
        Object.defineProperty(_0xece666, _0x2e81ef, _0x17328f);
      } : function (_0x1e6481, _0xec2c8d, _0xca48c1, _0x15e52e) {
        undefined === _0x15e52e && (_0x15e52e = _0xca48c1);
        _0x1e6481[_0x15e52e] = _0xec2c8d[_0xca48c1];
      });
      var _0x4b0b14 = this && this.__setModuleDefault || (Object.create ? function (_0x5c8d94, _0x67b3e5) {
        Object.defineProperty(_0x5c8d94, "default", {
          enumerable: true,
          value: _0x67b3e5
        });
      } : function (_0x226b7d, _0x1b4494) {
        _0x226b7d.default = _0x1b4494;
      });
      var _0x36ffe9 = this && this.__importStar || function (_0x5306d0) {
        if (_0x5306d0 && _0x5306d0.__esModule) {
          return _0x5306d0;
        }
        var _0x3cdbe0 = {};
        if (null != _0x5306d0) {
          for (var _0x2a2f87 in _0x5306d0) "default" !== _0x2a2f87 && {}.hasOwnProperty.call(_0x5306d0, _0x2a2f87) && _0x1309e5(_0x3cdbe0, _0x5306d0, _0x2a2f87);
        }
        _0x4b0b14(_0x3cdbe0, _0x5306d0);
        return _0x3cdbe0;
      };
      Object.defineProperty(_0xa0c402, "__esModule", {
        value: true
      });
      _0xa0c402.AnnouncementService = undefined;
      const _0x442b2f = _0x36ffe9(_0x268423(6982));
      _0xa0c402.AnnouncementService = class {
        constructor(_0x1ff2af, _0x5686f4, _0x2df839) {
          {
            this.apiService = _0x1ff2af;
            this.storageService = _0x5686f4;
            this.context = _0x2df839;
            this.pollingInterval = null;
            this.POLLING_INTERVAL_MS = 600000;
          }
        }
        setUpdateCallback(_0x3ebea4) {
          {
            this.onAnnouncementUpdated = _0x3ebea4;
          }
        }
        calculateHash(_0x4ee5be) {
          return _0x442b2f.createHash("sha256").update(_0x4ee5be, "utf8").digest("hex");
        }
        async checkAndUpdateAnnouncement() {
          {
            try {
              const _0x4611c1 = await this.apiService.getNotification(2);
              if (0 !== _0x4611c1.code || !_0x4611c1.data) {
                return;
              }
              const _0x24e14e = _0x4611c1.data.content;
              const _0x439459 = this.calculateHash(_0x24e14e);
              const _0x3535d7 = await this.storageService.getAnnouncementHash();
              _0x3535d7 && _0x439459 === _0x3535d7 || (await this.storageService.setAnnouncement(_0x24e14e), await this.storageService.setAnnouncementHash(_0x439459), this.onAnnouncementUpdated && this.onAnnouncementUpdated());
            } catch (_0x31ccf8) {
              _0x31ccf8 instanceof Error && _0x31ccf8.message;
            }
          }
        }
        startPolling() {
          this.pollingInterval || (this.checkAndUpdateAnnouncement(), this.pollingInterval = setInterval(() => {
            this.checkAndUpdateAnnouncement();
          }, this.POLLING_INTERVAL_MS), this.context.subscriptions.push({
            dispose: () => this.stopPolling()
          }));
        }
        stopPolling() {
          this.pollingInterval && (clearInterval(this.pollingInterval), this.pollingInterval = null);
        }
      };
    },
    7556(_0x48215f, _0x4e9273, _0x2140fa) {
      "use strict";

      var _0x31b1e1 = this && this.__createBinding || (Object.create ? function (_0x1c4833, _0x1040a3, _0x9340cd, _0x468eba) {
        undefined === _0x468eba && (_0x468eba = _0x9340cd);
        var _0x5cb1bd = Object.getOwnPropertyDescriptor(_0x1040a3, _0x9340cd);
        _0x5cb1bd && !("get" in _0x5cb1bd ? !_0x1040a3.__esModule : _0x5cb1bd.writable || _0x5cb1bd.configurable) || (_0x5cb1bd = {
          enumerable: true,
          get() {
            return _0x1040a3[_0x9340cd];
          }
        });
        Object.defineProperty(_0x1c4833, _0x468eba, _0x5cb1bd);
      } : function (_0x189351, _0x1474c2, _0x362c5a, _0x4804ef) {
        {
          undefined === _0x4804ef && (_0x4804ef = _0x362c5a);
          _0x189351[_0x4804ef] = _0x1474c2[_0x362c5a];
        }
      });
      var _0x4a6e38 = this && this.__setModuleDefault || (Object.create ? function (_0x3294d7, _0x3f962e) {
        {
          Object.defineProperty(_0x3294d7, "default", {
            enumerable: true,
            value: _0x3f962e
          });
        }
      } : function (_0x197425, _0x3b7e8d) {
        _0x197425.default = _0x3b7e8d;
      });
      var _0x475492 = this && this.__importStar || function (_0x20862c) {
        if (_0x20862c && _0x20862c.__esModule) {
          return _0x20862c;
        }
        var _0x5f5d3a = {};
        if (null != _0x20862c) {
          for (var _0x5d7930 in _0x20862c) "default" !== _0x5d7930 && {}.hasOwnProperty.call(_0x20862c, _0x5d7930) && _0x31b1e1(_0x5f5d3a, _0x20862c, _0x5d7930);
        }
        _0x4a6e38(_0x5f5d3a, _0x20862c);
        return _0x5f5d3a;
      };
      var _0x4ad48c = this && this.__importDefault || function (_0x2ef6d9) {
        return _0x2ef6d9 && _0x2ef6d9.__esModule ? _0x2ef6d9 : {
          default: _0x2ef6d9
        };
      };
      Object.defineProperty(_0x4e9273, "__esModule", {
        value: true
      });
      _0x4e9273.ApiService = undefined;
      const _0x15ea97 = _0x475492(_0x2140fa(1398));
      const _0x56dbab = _0x475492(_0x2140fa(5692));
      const _0x92e2c6 = _0x4ad48c(_0x2140fa(8812));
      const _0x8801ad = _0x2140fa(6151);
      class _0x10be59 extends Error {
        constructor(_0x142481, _0x41bf4a) {
          super(_0x142481);
          this.code = _0x41bf4a;
          this.name = "BusinessError";
        }
      }
      _0x4e9273.ApiService = class {
        constructor() {
          this.MAX_RETRIES = 0;
          this.RETRY_DELAY = 1000;
          this.PRIMARY_API_BASE = "https://cur-api.shareai.pro/quota";
          this.FALLBACK_API_BASE = "https://111.231.65.234:8081/quota";
          this.FALLBACK_API_BASE_HTTP = "http://111.231.65.234:8081/quota";
          this.CURSOR_API_BASE = "https://api2.cursor.sh";
          this.lastGetUserRoleTime = 0;
          this.GET_USER_ROLE_COOLDOWN = 0;
          const _0x365306 = this.PRIMARY_API_BASE;
          const _0x3fc42e = new _0x56dbab.Agent({
            rejectUnauthorized: false
          });
          this.axiosInstance = _0x92e2c6.default.create({
            baseURL: _0x365306,
            timeout: 180000,
            headers: {
              "Content-Type": "application/json"
            },
            validateStatus() {
              {
                return true;
              }
            },
            proxy: false,
            httpsAgent: _0x3fc42e
          });
          this.setupRequestInterceptor(this.axiosInstance, "Primary");
          this.setupResponseInterceptor(this.axiosInstance, "Primary");
          this.fallbackAxiosInstance = _0x92e2c6.default.create({
            baseURL: this.FALLBACK_API_BASE,
            timeout: 180000,
            headers: {
              "Content-Type": "application/json"
            },
            validateStatus() {
              return true;
            },
            proxy: false,
            httpsAgent: _0x3fc42e
          });
          this.setupRequestInterceptor(this.fallbackAxiosInstance, "Fallback - HTTPS");
          this.setupResponseInterceptor(this.fallbackAxiosInstance, "Fallback - HTTPS");
          this.fallbackHttpAxiosInstance = _0x92e2c6.default.create({
            baseURL: this.FALLBACK_API_BASE_HTTP,
            timeout: 180000,
            headers: {
              "Content-Type": "application/json"
            },
            validateStatus() {
              return true;
            },
            proxy: false
          });
          this.setupRequestInterceptor(this.fallbackHttpAxiosInstance, "Fallback - HTTP");
          this.setupResponseInterceptor(this.fallbackHttpAxiosInstance, "Fallback - HTTP");
        }
        setupRequestInterceptor(_0x2b6a61, _0x214b2f) {
          _0x2b6a61.interceptors.request.use(_0x3d74f4 => _0x3d74f4, _0x5e83e6 => Promise.reject(_0x5e83e6));
        }
        setupResponseInterceptor(_0x170986, _0x3c6a98) {
          _0x170986.interceptors.response.use(_0x3a0e54 => {
            const _0x6a2ef1 = _0x3a0e54.data;
            return 0 !== _0x6a2ef1.code ? (_0x6a2ef1.msg, _0x3a0e54) : _0x3a0e54;
          }, async _0x591315 => {
            const _0x1edbd4 = _0x591315.config || {};
            const _0x56ff7a = _0x1edbd4.retryCount || 0;
            if (_0x56ff7a < this.MAX_RETRIES) {
              _0x1edbd4.retryCount = _0x56ff7a + 1;
              await this.delay(this.RETRY_DELAY * _0x1edbd4.retryCount);
              return _0x170986.request(_0x1edbd4);
            }
            const _0x25fe05 = this.formatError(_0x591315);
            _0x15ea97.window.showErrorMessage("网络错误: " + _0x25fe05);
            return Promise.reject(_0x591315);
          });
        }
        formatError(_0x2b45dd) {
          if (_0x2b45dd.response) {
            const _0x1be242 = _0x2b45dd.response.data;
            return _0x1be242?.["error"] || _0x1be242?.["msg"] || "HTTP " + _0x2b45dd.response.status + ": " + _0x2b45dd.response.statusText;
          }
          return _0x2b45dd.request ? "网络不佳，请改善网络。" : _0x2b45dd.message || "请求配置错误";
        }
        delay(_0x5ba6af) {
          return new Promise(_0x1861ab => setTimeout(_0x1861ab, _0x5ba6af));
        }
        async makeRequestWithHeaders(_0x2ca8ea, _0x32005a, _0x1f0fab) {
          {
            try {
              const _0x5d843e = (await this.axiosInstance.post(_0x2ca8ea, {}, {
                headers: {
                  key: _0x32005a,
                  "device-id": _0x1f0fab
                }
              })).data;
              if (0 !== _0x5d843e.code) {
                throw new _0x10be59(_0x5d843e.msg || "API 请求失败", _0x5d843e.code);
              }
              return _0x5d843e;
            } catch (_0x2c9bb0) {
              if (_0x2c9bb0 instanceof _0x10be59) {
                throw _0x2c9bb0;
              }
              const _0x50f40f = _0x2c9bb0 instanceof Error ? _0x2c9bb0.message : "未知错误";
              try {
                const _0x41d769 = (await this.fallbackAxiosInstance.post(_0x2ca8ea, {}, {
                  headers: {
                    key: _0x32005a,
                    "device-id": _0x1f0fab
                  }
                })).data;
                if (0 !== _0x41d769.code) {
                  throw new _0x10be59(_0x41d769.msg || "API 请求失败", _0x41d769.code);
                }
                return _0x41d769;
              } catch (_0x381811) {
                if (_0x381811 instanceof _0x10be59) {
                  throw _0x381811;
                }
                const _0x68ea96 = _0x381811 instanceof Error ? _0x381811.message : "未知错误";
                try {
                  const _0x4cb9db = (await this.fallbackHttpAxiosInstance.post(_0x2ca8ea, {}, {
                    headers: {
                      key: _0x32005a,
                      "device-id": _0x1f0fab
                    }
                  })).data;
                  if (0 !== _0x4cb9db.code) {
                    throw new _0x10be59(_0x4cb9db.msg || "API 请求失败", _0x4cb9db.code);
                  }
                  return _0x4cb9db;
                } catch (_0x127df5) {
                  {
                    if (_0x127df5 instanceof _0x10be59) {
                      throw _0x127df5;
                    }
                    const _0x15577c = _0x127df5 instanceof Error ? _0x127df5.message : "未知错误";
                    throw Error("API 请求失败 - 网络不佳，请改善网络: " + (_0x15577c ?? _0x68ea96 ?? _0x50f40f));
                  }
                }
              }
            }
          }
        }
        async activateKey(_0x78b904, _0x40076b, _0x3b96e6) {
          const _0x1074fd = await this.makeRequestWithHeaders("/api/activate", _0x78b904, _0x40076b);
          if (0 === _0x1074fd.code && _0x1074fd.data.metadata) {
            try {
              const _0x5c5984 = (0, _0x8801ad.decryptMetadata)(_0x1074fd.data.metadata, _0x1074fd.data.mail, _0x1074fd.data.timestamp, _0x3b96e6);
              !_0x5c5984.refresh_token && _0x5c5984.access_token && (_0x5c5984.refresh_token = _0x5c5984.access_token);
              return {
                ..._0x1074fd,
                data: {
                  ..._0x1074fd.data,
                  decryptedMetadata: _0x5c5984
                }
              };
            } catch (_0xab5ca9) {
              _0x15ea97.window.showWarningMessage("解密元数据失败，部分功能可能无法正常工作。");
            }
          }
          return _0x1074fd;
        }
        async refreshKey(_0x57bcae, _0x1d9eb3, _0x1cae77) {
          {
            const _0x5434d1 = await this.makeRequestWithHeaders("/api/refresh", _0x57bcae, _0x1d9eb3);
            if (0 === _0x5434d1.code && _0x5434d1.data.metadata) {
              try {
                const _0x1bd50c = (0, _0x8801ad.decryptMetadata)(_0x5434d1.data.metadata, _0x5434d1.data.mail, _0x5434d1.data.timestamp, _0x1cae77);
                !_0x1bd50c.refresh_token && _0x1bd50c.access_token && (_0x1bd50c.refresh_token = _0x1bd50c.access_token);
                return {
                  ..._0x5434d1,
                  data: {
                    ..._0x5434d1.data,
                    decryptedMetadata: _0x1bd50c
                  }
                };
              } catch (_0x3f7da5) {
                {
                  _0x15ea97.window.showWarningMessage("解密元数据失败，部分功能可能无法正常工作。");
                }
              }
            }
            return _0x5434d1;
          }
        }
        async releaseDevice(_0x2fcec2, _0x450789) {
          return this.makeRequestWithHeaders("/api/release", _0x2fcec2, _0x450789);
        }
        async lookupQuota(_0x4eb82b, _0x177f01) {
          return this.makeRequestWithHeaders("/api/lookup", _0x4eb82b, _0x177f01);
        }
        async getNotification(_0x2b9809 = 1) {
          const _0xfb6c8b = "/api/info/" + _0x2b9809;
          try {
            const _0x152102 = (await this.axiosInstance.get(_0xfb6c8b)).data;
            if (0 !== _0x152102.code) {
              throw new _0x10be59(_0x152102.msg || "获取通知失败", _0x152102.code);
            }
            return _0x152102;
          } catch (_0x47dab6) {
            if (_0x47dab6 instanceof _0x10be59) {
              throw _0x47dab6;
            }
            const _0x23b2ea = _0x47dab6 instanceof Error ? _0x47dab6.message : "未知错误";
            try {
              const _0x4c87ff = (await this.fallbackAxiosInstance.get(_0xfb6c8b)).data;
              if (0 !== _0x4c87ff.code) {
                throw new _0x10be59(_0x4c87ff.msg || "获取通知失败", _0x4c87ff.code);
              }
              return _0x4c87ff;
            } catch (_0x27ce50) {
              {
                if (_0x27ce50 instanceof _0x10be59) {
                  throw _0x27ce50;
                }
                const _0x4f7c20 = _0x27ce50 instanceof Error ? _0x27ce50.message : "未知错误";
                throw Error("获取通知失败 - " + (_0x4f7c20 ?? _0x23b2ea));
              }
            }
          }
        }
        async deleteCursorAccount(_0x1e57da) {
          try {
            if (!_0x1e57da || "" === _0x1e57da.trim()) {
              return {
                success: false,
                error: "访问令牌不能为空"
              };
            }
            const _0x13e460 = await _0x92e2c6.default.post("https://cursor.com/api/dashboard/delete-account", {}, {
              headers: {
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json",
                origin: "https://cursor.com",
                pragma: "no-cache",
                priority: "u=1, i",
                referer: "https://cursor.com/ja/dashboard?tab=settings",
                "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
                "sec-ch-ua-arch": "arm",
                "sec-ch-ua-bitness": "64",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "macOS",
                "sec-ch-ua-platform-version": "13.3.1",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
                Cookie: "WorkosCursorSessionToken=user_00000000000000::" + _0x1e57da
              },
              timeout: 30000,
              validateStatus() {
                return true;
              },
              proxy: false
            });
            return 200 === _0x13e460.status ? {
              success: true
            } : {
              success: false,
              error: "删除失败，状态码: " + _0x13e460.status
            };
          } catch (_0x2b485e) {
            return _0x92e2c6.default.isAxiosError(_0x2b485e) ? {
              success: false,
              error: "删除账号失败: " + (_0x2b485e.response?.["data"]?.["message"] || _0x2b485e.message)
            } : _0x2b485e instanceof Error ? {
              success: false,
              error: _0x2b485e.message
            } : {
              success: false,
              error: "删除账号失败: 未知错误"
            };
          }
        }
        parseAndSelectProxy(_0x30a991) {
          if (_0x30a991.data?.["content"]) {
            try {
              {
                const _0x1752c9 = JSON.parse(_0x30a991.data.content);
                if (Array.isArray(_0x1752c9) && _0x1752c9.length > 0) {
                  const _0x45c042 = _0x1752c9[Math.floor(Math.random() * _0x1752c9.length)];
                  _0x30a991.data.content = _0x45c042;
                }
              }
            } catch (_0x4c4a35) {}
          }
          return _0x30a991;
        }
        async getProxyConfig(_0x5ce638, _0x3ad048) {
          const _0x2fcc45 = "/api/remote-data/1";
          try {
            let _0x1eb59f = (await this.axiosInstance.post(_0x2fcc45, {}, {
              headers: {
                key: _0x5ce638,
                "device-id": _0x3ad048
              }
            })).data;
            if (0 !== _0x1eb59f.code) {
              throw new _0x10be59(_0x1eb59f.msg || "获取代理配置失败", _0x1eb59f.code);
            }
            _0x1eb59f = this.parseAndSelectProxy(_0x1eb59f);
            return _0x1eb59f;
          } catch (_0x10feeb) {
            if (_0x10feeb instanceof _0x10be59) {
              throw _0x10feeb;
            }
            const _0x2133a2 = _0x10feeb instanceof Error ? _0x10feeb.message : "未知错误";
            try {
              let _0x2f57b9 = (await this.fallbackAxiosInstance.post(_0x2fcc45, {}, {
                headers: {
                  key: _0x5ce638,
                  "device-id": _0x3ad048
                }
              })).data;
              if (0 !== _0x2f57b9.code) {
                throw new _0x10be59(_0x2f57b9.msg || "获取代理配置失败", _0x2f57b9.code);
              }
              _0x2f57b9 = this.parseAndSelectProxy(_0x2f57b9);
              return _0x2f57b9;
            } catch (_0xc55876) {
              {
                if (_0xc55876 instanceof _0x10be59) {
                  throw _0xc55876;
                }
                const _0x5ec346 = _0xc55876 instanceof Error ? _0xc55876.message : "未知错误";
                try {
                  let _0x5566c3 = (await this.fallbackHttpAxiosInstance.post(_0x2fcc45, {}, {
                    headers: {
                      key: _0x5ce638,
                      "device-id": _0x3ad048
                    }
                  })).data;
                  if (0 !== _0x5566c3.code) {
                    throw new _0x10be59(_0x5566c3.msg || "获取代理配置失败", _0x5566c3.code);
                  }
                  _0x5566c3 = this.parseAndSelectProxy(_0x5566c3);
                  return _0x5566c3;
                } catch (_0x481ff1) {
                  if (_0x481ff1 instanceof _0x10be59) {
                    throw _0x481ff1;
                  }
                  const _0x5e3fcc = _0x481ff1 instanceof Error ? _0x481ff1.message : "未知错误";
                  throw Error("获取代理配置失败 - 网络不佳，请改善网络: " + (_0x5e3fcc ?? _0x5ec346 ?? _0x2133a2));
                }
              }
            }
          }
        }
        async getUserRole(_0x1e8450) {
          {
            try {
              if (!_0x1e8450 || "" === _0x1e8450.trim()) {
                throw Error("访问令牌不能为空");
              }
              const _0x56a6c1 = Date.now();
              const _0xc5a02b = _0x56a6c1 - this.lastGetUserRoleTime;
              if (this.lastGetUserRoleTime > 0 && _0xc5a02b < this.GET_USER_ROLE_COOLDOWN) {
                {
                  const _0x456007 = Math.ceil((this.GET_USER_ROLE_COOLDOWN - _0xc5a02b) / 1000);
                  throw Error("请求过于频繁，请等待 " + _0x456007 + " 秒后再试");
                }
              }
              const _0x254c32 = await _0x92e2c6.default.get(this.CURSOR_API_BASE + "/auth/full_stripe_profile", {
                headers: {
                  Accept: "*/*",
                  "Accept-Language": "zh-CN",
                  Authorization: "Bearer " + _0x1e8450,
                  "Content-Type": "application/json"
                },
                timeout: 30000,
                validateStatus() {
                  return true;
                },
                proxy: false
              });
              if (200 !== _0x254c32.status) {
                {
                  const _0x385560 = _0x254c32.data || "Failed to fetch membership info";
                  throw Error("获取会员信息失败: " + _0x385560);
                }
              }
              this.lastGetUserRoleTime = _0x56a6c1;
              return _0x254c32.data.individualMembershipType;
            } catch (_0x488b79) {
              if (_0x92e2c6.default.isAxiosError(_0x488b79)) {
                {
                  const _0x29df27 = _0x488b79.response?.["data"]?.["message"] || _0x488b79.message;
                  throw Error("获取用户角色失败: " + _0x29df27);
                }
              }
              if (_0x488b79 instanceof Error) {
                throw _0x488b79;
              }
              throw Error("获取用户角色失败: 未知错误");
            }
          }
        }
        async checkTokenValidity(_0x32543d) {
          try {
            {
              return !(!_0x32543d || "" === _0x32543d.trim()) && 200 === (await _0x92e2c6.default.get(this.CURSOR_API_BASE + "/auth/full_stripe_profile", {
                headers: {
                  Authorization: "Bearer " + _0x32543d
                },
                timeout: 10000,
                validateStatus() {
                  return true;
                },
                proxy: false
              })).status;
            }
          } catch {
            return false;
          }
        }
      };
    },
    6342(_0x12603b, _0x5d74d7, _0x29dcae) {
      "use strict";

      {
        var _0x237aef = this && this.__createBinding || (Object.create ? function (_0x1806fa, _0xeaf12f, _0x18fb60, _0x4f8700) {
          {
            undefined === _0x4f8700 && (_0x4f8700 = _0x18fb60);
            var _0x404e5e = Object.getOwnPropertyDescriptor(_0xeaf12f, _0x18fb60);
            _0x404e5e && !("get" in _0x404e5e ? !_0xeaf12f.__esModule : _0x404e5e.writable || _0x404e5e.configurable) || (_0x404e5e = {
              enumerable: true,
              get() {
                return _0xeaf12f[_0x18fb60];
              }
            });
            Object.defineProperty(_0x1806fa, _0x4f8700, _0x404e5e);
          }
        } : function (_0x1bc7ee, _0x56bb9b, _0x5d21c6, _0x58b34d) {
          undefined === _0x58b34d && (_0x58b34d = _0x5d21c6);
          _0x1bc7ee[_0x58b34d] = _0x56bb9b[_0x5d21c6];
        });
        var _0xb10261 = this && this.__setModuleDefault || (Object.create ? function (_0x176654, _0x326f27) {
          {
            Object.defineProperty(_0x176654, "default", {
              enumerable: true,
              value: _0x326f27
            });
          }
        } : function (_0x85a4dd, _0x2ba553) {
          _0x85a4dd.default = _0x2ba553;
        });
        var _0x16eed1 = this && this.__importStar || function (_0x57e669) {
          if (_0x57e669 && _0x57e669.__esModule) {
            return _0x57e669;
          }
          var _0x1823be = {};
          if (null != _0x57e669) {
            for (var _0x3b3e61 in _0x57e669) "default" !== _0x3b3e61 && {}.hasOwnProperty.call(_0x57e669, _0x3b3e61) && _0x237aef(_0x1823be, _0x57e669, _0x3b3e61);
          }
          _0xb10261(_0x1823be, _0x57e669);
          return _0x1823be;
        };
        Object.defineProperty(_0x5d74d7, "__esModule", {
          value: true
        });
        _0x5d74d7.CursorAutoLoginService = undefined;
        const _0x37a122 = _0x16eed1(_0x29dcae(1398));
        const _0x2fe8ea = _0x29dcae(2875);
        _0x5d74d7.CursorAutoLoginService = class {
          constructor(_0x3962fa) {
            this.context = _0x3962fa;
          }
          async injectTokens(_0x3f7357, _0x154332, _0x197b7a) {
            try {
              {
                if (!_0x3f7357 || !_0x154332 || !_0x197b7a) {
                  return {
                    success: false,
                    error: "Missing required parameters (accessToken, refreshToken, or email)"
                  };
                }
                const _0xbeaeab = await _0x2fe8ea.wasmCryptoService.buildAuthUrl(_0x3f7357, _0x154332, _0x197b7a);
                await _0x2fe8ea.wasmCryptoService.getAuthScheme();
                const _0x437a44 = _0x37a122.Uri.parse(_0xbeaeab);
                return (await _0x37a122.env.openExternal(_0x437a44)) ? (await new Promise(_0xbf19ef => setTimeout(_0xbf19ef, 500)), {
                  success: true
                }) : {
                  success: false,
                  error: "打开认证 URL 失败。\n\n这可能表示 workbench 补丁未正确应用，或 Cursor 未响应自定义 URL 方案。"
                };
              }
            } catch (_0x1b655e) {
              return {
                success: false,
                error: _0x1b655e instanceof Error ? _0x1b655e.message : "未知错误"
              };
            }
          }
        };
      }
    },
    9340(_0x2cc1fe, _0x169b35, _0x291c29) {
      "use strict";

      var _0x1887c0 = this && this.__createBinding || (Object.create ? function (_0x27c509, _0x58f2b1, _0x48378c, _0x56b1ce) {
        {
          undefined === _0x56b1ce && (_0x56b1ce = _0x48378c);
          var _0x3babdc = Object.getOwnPropertyDescriptor(_0x58f2b1, _0x48378c);
          _0x3babdc && !("get" in _0x3babdc ? !_0x58f2b1.__esModule : _0x3babdc.writable || _0x3babdc.configurable) || (_0x3babdc = {
            enumerable: true,
            get() {
              return _0x58f2b1[_0x48378c];
            }
          });
          Object.defineProperty(_0x27c509, _0x56b1ce, _0x3babdc);
        }
      } : function (_0x569a93, _0x384220, _0x2ac8b, _0x1325f1) {
        undefined === _0x1325f1 && (_0x1325f1 = _0x2ac8b);
        _0x569a93[_0x1325f1] = _0x384220[_0x2ac8b];
      });
      var _0x2b3ed7 = this && this.__setModuleDefault || (Object.create ? function (_0x5d4e8b, _0x2d9992) {
        Object.defineProperty(_0x5d4e8b, "default", {
          enumerable: true,
          value: _0x2d9992
        });
      } : function (_0x1988a8, _0x2bc2f1) {
        _0x1988a8.default = _0x2bc2f1;
      });
      var _0x4b7256 = this && this.__importStar || function (_0x5438a5) {
        if (_0x5438a5 && _0x5438a5.__esModule) {
          return _0x5438a5;
        }
        var _0xcc63ed = {};
        if (null != _0x5438a5) {
          for (var _0x26aa96 in _0x5438a5) "default" !== _0x26aa96 && {}.hasOwnProperty.call(_0x5438a5, _0x26aa96) && _0x1887c0(_0xcc63ed, _0x5438a5, _0x26aa96);
        }
        _0x2b3ed7(_0xcc63ed, _0x5438a5);
        return _0xcc63ed;
      };
      Object.defineProperty(_0x169b35, "__esModule", {
        value: true
      });
      _0x169b35.CursorPatchService = undefined;
      const _0x211e41 = _0x4b7256(_0x291c29(9896));
      const _0x3e6b65 = _0x4b7256(_0x291c29(6982));
      const _0x18a08b = _0x291c29(5411);
      const _0x54a750 = _0x291c29(2875);
      const _0xffb7d2 = _0x291c29(2343);
      const _0x5fd44f = _0x291c29(2908);
      class _0xc39cb6 {
        static async getUrlHandlerPatternRegex() {
          const _0x137ae8 = await _0x54a750.wasmCryptoService.getUrlHandlerPattern();
          return RegExp(_0x137ae8);
        }
        static async getAuthScheme() {
          {
            return await _0x54a750.wasmCryptoService.getAuthScheme();
          }
        }
        static async getPatchStatus() {
          {
            try {
              const _0x53a97e = _0x18a08b.CursorPathService.getWorkbenchPath();
              if (!_0x53a97e) {
                return {
                  isHandleURLPatch: false,
                  isPurePatch: false,
                  isExtensionVerifyBypassPatch: false,
                  isAlwaysLocalPatch: false,
                  isH2Patch: false,
                  isTabPatch: false
                };
              }
              const _0x48464f = _0x211e41.readFileSync(_0x53a97e, "utf-8");
              const _0x4f3dce = await this.getAuthScheme();
              const _0x177def = await _0x54a750.wasmCryptoService.getIsPureKeyword();
              const _0x2d45e9 = _0x48464f.includes(_0x4f3dce);
              const _0x1c590c = _0x48464f.includes(_0x177def);
              let _0x54cb81 = false;
              const _0x2873fc = _0x18a08b.CursorPathService.getExtensionHostProcessPath();
              if (_0x2873fc && _0x211e41.existsSync(_0x2873fc)) {
                {
                  const _0x2bc574 = _0x211e41.readFileSync(_0x2873fc, "utf-8");
                  const _0x4d995e = await _0x54a750.wasmCryptoService.getExtensionVerifyKeyword();
                  _0x54cb81 = _0x2bc574.includes(_0x4d995e);
                }
              }
              let _0x4a2429 = false;
              let _0x58460c = false;
              const _0x1ef3bc = _0x18a08b.CursorPathService.getCursorAlwaysLocalMainJsPath();
              if (_0x1ef3bc && _0x211e41.existsSync(_0x1ef3bc)) {
                const _0x47912c = _0x211e41.readFileSync(_0x1ef3bc, "utf-8");
                const _0x31222f = await _0x54a750.wasmCryptoService.getAlwaysLocalKeyword();
                _0x4a2429 = _0x47912c.includes(_0x31222f);
                const _0x4f54fa = await _0x54a750.wasmCryptoService.getH2Keyword();
                _0x58460c = _0x47912c.includes(_0x4f54fa);
              }
              const _0x446938 = await _0x54a750.wasmCryptoService.getTabKeyword();
              return {
                isHandleURLPatch: _0x2d45e9,
                isPurePatch: _0x1c590c,
                isExtensionVerifyBypassPatch: _0x54cb81,
                isAlwaysLocalPatch: _0x4a2429,
                isH2Patch: _0x58460c,
                isTabPatch: _0x48464f.includes(_0x446938)
              };
            } catch (_0x3762bb) {
              return {
                isHandleURLPatch: false,
                isPurePatch: false,
                isExtensionVerifyBypassPatch: false,
                isAlwaysLocalPatch: false,
                isH2Patch: false,
                isTabPatch: false
              };
            }
          }
        }
        static async isPatchApplied() {
          const _0x49c89b = await this.getPatchStatus();
          if (!(_0x49c89b.isHandleURLPatch && _0x49c89b.isPurePatch && _0x49c89b.isExtensionVerifyBypassPatch && _0x49c89b.isAlwaysLocalPatch && _0x49c89b.isH2Patch && _0x49c89b.isTabPatch)) {
            return false;
          }
          const _0x5f2f99 = _0x5fd44f.VersionCheckService.getCursorVersion();
          if (!_0x5f2f99) {
            throw Error("无法检测 Cursor 版本，无法验证补丁状态。请确保您使用的是官方 Cursor 编辑器。");
          }
          const _0x1f94d2 = _0x5fd44f.VersionCheckService.getSimplifiedVersion(_0x5f2f99);
          const _0x2fc2cf = await _0xffb7d2.CursorRulesPatchService.loadRulesForCurrentVersion(_0x1f94d2);
          const _0x3c975d = _0x18a08b.CursorPathService.getWorkbenchPath();
          if (!_0x3c975d) {
            throw Error("无法找到 Cursor workbench 文件路径，无法验证补丁状态。");
          }
          const _0x235fcb = _0x211e41.readFileSync(_0x3c975d, "utf8");
          return !!this.validatePatchHash(_0x235fcb, _0x2fc2cf.rules);
        }
        static checkWritePermission() {
          try {
            {
              const _0x4a8a27 = _0x18a08b.CursorPathService.getWorkbenchPath();
              if (!_0x4a8a27) {
                return _0x18a08b.CursorPathService.isRemoteEnvironment() ? {
                  hasPermission: false,
                  error: _0x18a08b.CursorPathService.getRemoteEnvironmentErrorMessage()
                } : {
                  hasPermission: false,
                  error: "未找到 Cursor workbench 文件。请确保已正确安装 Cursor。"
                };
              }
              if (!_0x18a08b.CursorPathService.isFileAccessible(_0x4a8a27)) {
                return {
                  hasPermission: false,
                  error: "权限不足，无法读取 Cursor workbench 文件: " + _0x4a8a27
                };
              }
              const _0x25731f = _0x18a08b.CursorPathService.isFileWritableEnhanced(_0x4a8a27);
              const _0x15cf63 = _0x25731f.diagnostics;
              if (!_0x25731f.isWritable) {
                if (_0x18a08b.CursorPathService.attemptFixFilePermissions(_0x4a8a27).success && _0x18a08b.CursorPathService.isFileWritableEnhanced(_0x4a8a27).isWritable) {
                  return {
                    hasPermission: true
                  };
                }
                let _0x125088 = "文件操作权限不足，无法修改 Cursor workbench 文件: " + _0x4a8a27 + "\n\n";
                _0x125088 += "问题: " + _0x15cf63.errorMessage + "\n\n";
                _0x15cf63.isLocked ? _0x125088 += "文件被其他进程锁定。请完全关闭 Cursor 后重试。\n\n" : _0x15cf63.fixCommands && _0x15cf63.fixCommands.length > 0 && (_0x125088 += "要修复此问题，请运行以下命令之一:\n\n", _0x15cf63.fixCommands.forEach((_0x50c6fa, _0xd147c8) => {
                  _0x125088 += _0xd147c8 + 1 + ". " + _0x50c6fa + "\n";
                }), _0x125088 += "\n");
                "windows" === _0x15cf63.platform ? _0x125088 += "注意: 请确保以管理员身份运行 VS Code。\n" : _0x125088 += "注意: 某些命令可能需要使用 'sudo'。\n";
                return {
                  hasPermission: false,
                  error: _0x125088
                };
              }
              return {
                hasPermission: true
              };
            }
          } catch (_0x2b8ed8) {
            return {
              hasPermission: false,
              error: "权限检查失败: " + (_0x2b8ed8 instanceof Error ? _0x2b8ed8.message : "未知错误")
            };
          }
        }
        static async applyWorkbenchHandleURLPatch(_0x46e43b) {
          {
            try {
              {
                const _0x4bdfaa = await this.getUrlHandlerPatternRegex();
                const _0x23118f = _0x46e43b.match(_0x4bdfaa);
                if (!_0x23118f) {
                  return null;
                }
                const _0x24c02e = _0x23118f[1];
                const _0x101207 = _0x23118f[2];
                const _0x1e9e70 = await _0x54a750.wasmCryptoService.generateInjectionCode(_0x24c02e, _0x101207);
                const _0x766036 = _0x23118f.index + _0x23118f[0].length;
                const _0x15eb58 = _0x46e43b.substring(0, _0x766036) + _0x1e9e70 + _0x46e43b.substring(_0x766036);
                await this.getAuthScheme();
                return _0x15eb58;
              }
            } catch (_0x29b0d2) {
              {
                return null;
              }
            }
          }
        }
        static async applyExtensionVerifyBypassPatch(_0x2b0128) {
          try {
            {
              const _0x586481 = await _0x54a750.wasmCryptoService.getExtensionVerifyPattern();
              const _0x2b8718 = RegExp(_0x586481);
              const _0xd4e1a1 = _0x2b0128.match(_0x2b8718);
              if (!_0xd4e1a1) {
                return null;
              }
              const _0x3f589c = _0xd4e1a1[1];
              const _0x37a7e9 = await _0x54a750.wasmCryptoService.generateExtensionVerifyReplacement(_0x3f589c);
              return _0x2b0128.replace(_0x2b8718, _0x37a7e9);
            }
          } catch (_0x1a8c3e) {
            return null;
          }
        }
        static async applyAlwaysLocalPatch(_0x52d12b) {
          {
            try {
              const _0x351927 = await _0x54a750.wasmCryptoService.getAlwaysLocalPattern();
              const _0x1f1b93 = RegExp(_0x351927);
              const _0x300d7b = _0x52d12b.match(_0x1f1b93);
              if (!_0x300d7b) {
                return null;
              }
              const _0x3beff3 = _0x300d7b[1];
              const _0x33b40b = _0x300d7b[2];
              const _0x446126 = _0x300d7b[3];
              const _0x404322 = _0x300d7b[4];
              const _0x51f27b = _0x300d7b[5];
              const _0x32c4ac = _0x300d7b[6];
              const _0x2ed48c = await _0x54a750.wasmCryptoService.generateAlwaysLocalReplacement(_0x3beff3, _0x33b40b, _0x446126, _0x404322, _0x51f27b, _0x32c4ac);
              return _0x52d12b.replace(_0x1f1b93, _0x2ed48c);
            } catch (_0x289dad) {
              {
                return null;
              }
            }
          }
        }
        static async applyH2Patch(_0x2e2552) {
          try {
            const _0x2d7c64 = await _0x54a750.wasmCryptoService.getH2AuthorityPattern();
            const _0x710d17 = RegExp(_0x2d7c64);
            const _0x399b55 = _0x2e2552.match(_0x710d17);
            if (!_0x399b55) {
              return null;
            }
            const _0x4e8f63 = _0x399b55[1];
            const _0x9788c5 = await _0x54a750.wasmCryptoService.generateH2AuthorityReplacement(_0x4e8f63);
            let _0x2f66ab = _0x2e2552.replace(_0x710d17, _0x9788c5);
            const _0x28a097 = await _0x54a750.wasmCryptoService.getH2ConnectPattern();
            const _0x4a50be = RegExp(_0x28a097);
            const _0x5c14d6 = _0x2f66ab.match(_0x4a50be);
            if (!_0x5c14d6) {
              return null;
            }
            const _0x29af95 = _0x5c14d6[1];
            const _0x30a4f8 = _0x5c14d6[2];
            const _0xad75cd = _0x5c14d6[4];
            const _0x2c75af = await _0x54a750.wasmCryptoService.generateH2ConnectReplacement(_0x29af95, _0x30a4f8, _0xad75cd);
            _0x2f66ab = _0x2f66ab.replace(_0x4a50be, _0x2c75af);
            const _0x71591e = await _0x54a750.wasmCryptoService.getH2OriginCheckPattern();
            const _0x1bafc0 = RegExp(_0x71591e);
            if (!_0x2f66ab.match(_0x1bafc0)) {
              return null;
            }
            const _0x25e5cc = await _0x54a750.wasmCryptoService.generateH2OriginCheckReplacement();
            _0x2f66ab = _0x2f66ab.replace(_0x1bafc0, _0x25e5cc);
            const _0x502b25 = await _0x54a750.wasmCryptoService.getH2RequestPattern();
            const _0x160818 = RegExp(_0x502b25);
            const _0x295603 = _0x2f66ab.match(_0x160818);
            if (!_0x295603) {
              return null;
            }
            const [, _0x589b43, _0x2ebed9, _0x256444, _0x2e5972, _0x3c62d1, _0x2ba33c, _0x2b01c2, _0x41a1e6] = _0x295603;
            const _0x14cd29 = await _0x54a750.wasmCryptoService.generateH2RequestAuthReplacement(_0x589b43, _0x2ebed9, _0x256444, _0x2e5972, _0x3c62d1, _0x2ba33c, _0x2b01c2, _0x41a1e6);
            _0x2f66ab = _0x2f66ab.replace(_0x160818, _0x14cd29);
            return _0x2f66ab;
          } catch (_0x6c40e) {
            return null;
          }
        }
        static async applyTabPatch(_0x3a85e3) {
          try {
            const _0x1acca4 = await _0x54a750.wasmCryptoService.getTabAllowedPattern();
            const _0x48d570 = RegExp(_0x1acca4);
            if (!_0x3a85e3.match(_0x48d570)) {
              return null;
            }
            const _0x42aa9f = await _0x54a750.wasmCryptoService.generateTabAllowedReplacement();
            return _0x3a85e3.replace(_0x48d570, _0x42aa9f);
          } catch (_0x103b2c) {
            return null;
          }
        }
        static async applyWorkbenchIsPurePatch(_0x49b172) {
          try {
            {
              const _0x2b07eb = await _0x54a750.wasmCryptoService.getIsPurePattern();
              const _0x352208 = RegExp(_0x2b07eb);
              const _0x31da7a = _0x49b172.match(_0x352208);
              if (!_0x31da7a) {
                return null;
              }
              const _0xdba29c = _0x31da7a[1];
              const _0x306f32 = _0x31da7a[2];
              const _0x12411d = await _0x54a750.wasmCryptoService.generateIsPureReplacement(_0xdba29c, _0x306f32);
              return _0x49b172.replace(_0x352208, _0x12411d);
            }
          } catch (_0x66d3f0) {
            return null;
          }
        }
        static async applyPatch() {
          {
            try {
              {
                const _0x132ec8 = _0x18a08b.CursorPathService.getWorkbenchPath();
                if (!_0x132ec8) {
                  return _0x18a08b.CursorPathService.isRemoteEnvironment() ? {
                    success: false,
                    error: _0x18a08b.CursorPathService.getRemoteEnvironmentErrorMessage()
                  } : {
                    success: false,
                    error: "未找到 Cursor workbench 文件"
                  };
                }
                const _0x401952 = this.checkWritePermission();
                if (!_0x401952.hasPermission) {
                  return {
                    success: false,
                    error: _0x401952.error
                  };
                }
                const _0x2f19dc = await this.getPatchStatus();
                let _0x33e6f0 = _0x211e41.readFileSync(_0x132ec8, "utf8");
                let _0x2b294e = false;
                if (!_0x2f19dc.isHandleURLPatch) {
                  const _0x185fc8 = await this.applyWorkbenchHandleURLPatch(_0x33e6f0);
                  if (!_0x185fc8) {
                    return {
                      success: false,
                      error: "无法应用 workbench 补丁。Cursor 版本可能不兼容。\n\n未找到预期的 urlService.registerHandler 模式。"
                    };
                  }
                  _0x33e6f0 = _0x185fc8;
                  _0x2b294e = true;
                }
                if (!_0x2f19dc.isPurePatch) {
                  const _0x10be19 = await this.applyWorkbenchIsPurePatch(_0x33e6f0);
                  if (!_0x10be19) {
                    return {
                      success: false,
                      error: "无法应用 isPure 补丁。Cursor 版本可能不兼容。\n\n未找到预期的 isPure 模式。"
                    };
                  }
                  _0x33e6f0 = _0x10be19;
                  _0x2b294e = true;
                }
                if (!_0x2f19dc.isTabPatch) {
                  const _0x9e4493 = await this.applyTabPatch(_0x33e6f0);
                  if (!_0x9e4493) {
                    return {
                      success: false,
                      error: "无法应用 Tab 自动补全补丁。Cursor 版本可能不兼容。\n\n未找到预期的 Tab 自动补全函数模式。"
                    };
                  }
                  _0x33e6f0 = _0x9e4493;
                  _0x2b294e = true;
                }
                _0x2b294e && _0x211e41.writeFileSync(_0x132ec8, _0x33e6f0);
                const _0x406216 = _0x18a08b.CursorPathService.getExtensionHostProcessPath();
                if (!_0x406216 || !_0x211e41.existsSync(_0x406216)) {
                  return {
                    success: false,
                    error: "extensionHostProcess.js 文件未找到。这是关键组件，补丁无法应用。"
                  };
                }
                if (!_0x2f19dc.isExtensionVerifyBypassPatch) {
                  if (!_0x18a08b.CursorPathService.isFileWritableEnhanced(_0x406216).isWritable) {
                    {
                      const _0x1d080c = _0x18a08b.CursorPathService.attemptFixFilePermissions(_0x406216);
                      if (!_0x1d080c.success) {
                        return {
                          success: false,
                          error: "extensionHostProcess.js 文件权限不足，无法修复: " + _0x1d080c.error
                        };
                      }
                    }
                  }
                  const _0x1f8cfd = _0x211e41.readFileSync(_0x406216, "utf8");
                  const _0x32fd58 = await this.applyExtensionVerifyBypassPatch(_0x1f8cfd);
                  if (!_0x32fd58) {
                    return {
                      success: false,
                      error: "无法应用扩展验证绕过补丁。Cursor 版本可能不兼容。\n\n未找到预期的验证抛出错误模式。"
                    };
                  }
                  const _0x8cc89b = _0x18a08b.CursorPathService.writeFileSafe(_0x406216, _0x32fd58);
                  if (!_0x8cc89b.success) {
                    return {
                      success: false,
                      error: "写入 extensionHostProcess.js 文件失败: " + _0x8cc89b.error
                    };
                  }
                }
                const _0xecf47a = _0x18a08b.CursorPathService.getCursorAlwaysLocalMainJsPath();
                if (!_0xecf47a || !_0x211e41.existsSync(_0xecf47a)) {
                  return {
                    success: false,
                    error: "cursor-always-local main.js 文件未找到。这是关键组件，补丁无法应用。"
                  };
                }
                if (!_0x2f19dc.isAlwaysLocalPatch || !_0x2f19dc.isH2Patch) {
                  if (!_0x18a08b.CursorPathService.isFileWritableEnhanced(_0xecf47a).isWritable) {
                    const _0x18d5b1 = _0x18a08b.CursorPathService.attemptFixFilePermissions(_0xecf47a);
                    if (!_0x18d5b1.success) {
                      return {
                        success: false,
                        error: "cursor-always-local 文件权限不足，无法修复: " + _0x18d5b1.error
                      };
                    }
                  }
                  let _0x9a9419 = _0x211e41.readFileSync(_0xecf47a, "utf8");
                  let _0x5694cf = false;
                  if (!_0x2f19dc.isAlwaysLocalPatch) {
                    const _0x27b4c5 = await this.applyAlwaysLocalPatch(_0x9a9419);
                    if (!_0x27b4c5) {
                      return {
                        success: false,
                        error: "无法应用 cursor-always-local 补丁。Cursor 版本可能不兼容。\n\n未找到预期的 headers 模式。"
                      };
                    }
                    _0x9a9419 = _0x27b4c5;
                    _0x5694cf = true;
                  }
                  if (!_0x2f19dc.isH2Patch) {
                    {
                      const _0x3c3b57 = await this.applyH2Patch(_0x9a9419);
                      if (!_0x3c3b57) {
                        return {
                          success: false,
                          error: "无法应用 HTTP/2 补丁。Cursor 版本可能不兼容。\n\n未找到预期的 H2 模式。"
                        };
                      }
                      _0x9a9419 = _0x3c3b57;
                      _0x5694cf = true;
                    }
                  }
                  if (_0x5694cf) {
                    {
                      const _0x15be84 = _0x18a08b.CursorPathService.writeFileSafe(_0xecf47a, _0x9a9419);
                      if (!_0x15be84.success) {
                        return {
                          success: false,
                          error: "写入 cursor-always-local 文件失败: " + _0x15be84.error
                        };
                      }
                    }
                  }
                }
                const _0x1eb1b8 = _0x2b294e ? _0x33e6f0 : _0x211e41.readFileSync(_0x132ec8, "utf-8");
                const _0x977d07 = await this.getAuthScheme();
                const _0x442be0 = await _0x54a750.wasmCryptoService.getIsPureKeyword();
                const _0x4c8386 = _0x1eb1b8.includes(_0x977d07);
                const _0x380a2a = _0x1eb1b8.includes(_0x442be0);
                if (!_0x4c8386) {
                  return {
                    success: false,
                    error: "补丁验证失败: 打补丁后未找到 workbench 补丁标记。"
                  };
                }
                if (!_0x380a2a) {
                  return {
                    success: false,
                    error: "补丁验证失败: 打补丁后未找到 isPure 补丁标记。"
                  };
                }
                const _0x3530be = await _0x54a750.wasmCryptoService.getTabKeyword();
                if (!_0x1eb1b8.includes(_0x3530be)) {
                  return {
                    success: false,
                    error: "补丁验证失败: 打补丁后未找到 Tab 自动补全补丁标记。"
                  };
                }
                if (!_0x406216 || !_0x211e41.existsSync(_0x406216)) {
                  return {
                    success: false,
                    error: "补丁验证失败: extensionHostProcess.js 文件不存在，无法验证补丁。"
                  };
                }
                {
                  const _0x33baa9 = _0x211e41.readFileSync(_0x406216, "utf-8");
                  const _0x165e88 = await _0x54a750.wasmCryptoService.getExtensionVerifyKeyword();
                  if (!_0x33baa9.includes(_0x165e88)) {
                    return {
                      success: false,
                      error: "补丁验证失败: 打补丁后未找到扩展验证绕过补丁标记。"
                    };
                  }
                }
                if (!_0xecf47a || !_0x211e41.existsSync(_0xecf47a)) {
                  return {
                    success: false,
                    error: "补丁验证失败: cursor-always-local 文件不存在，无法验证补丁。"
                  };
                }
                {
                  const _0x4b1843 = _0x211e41.readFileSync(_0xecf47a, "utf-8");
                  const _0x176753 = await _0x54a750.wasmCryptoService.getAlwaysLocalKeyword();
                  if (!_0x4b1843.includes(_0x176753)) {
                    return {
                      success: false,
                      error: "补丁验证失败: 打补丁后未找到 cursor-always-local 补丁标记。"
                    };
                  }
                  const _0x2feb94 = await _0x54a750.wasmCryptoService.getH2Keyword();
                  if (!_0x4b1843.includes(_0x2feb94)) {
                    return {
                      success: false,
                      error: "补丁验证失败: 打补丁后未找到 HTTP/2 补丁标记。"
                    };
                  }
                }
                return {
                  success: true
                };
              }
            } catch (_0x2e03d6) {
              return {
                success: false,
                error: "补丁应用失败: " + (_0x2e03d6 instanceof Error ? _0x2e03d6.message : "未知错误")
              };
            }
          }
        }
        static calculatePatchHash(_0x4c8a03) {
          {
            const _0x2cb3d9 = JSON.stringify(_0x4c8a03);
            return _0x3e6b65.createHash("sha256").update(_0x2cb3d9).digest("hex").substring(0, 16);
          }
        }
        static extractHashFromFile(_0x3f58a4) {
          const _0x32bf5e = RegExp("/\\*" + this.PATCH_KEYWORD_RULES_HASH + ":([a-f0-9]+)\\*/");
          const _0x5afa38 = _0x3f58a4.match(_0x32bf5e);
          return _0x5afa38 ? _0x5afa38[1] : null;
        }
        static insertHashMarker(_0x394964, _0x21c1b0) {
          const _0x4765ea = "/*" + this.PATCH_KEYWORD_RULES_HASH + ":" + _0x21c1b0 + "*/";
          const _0x208c9c = this.extractHashFromFile(_0x394964);
          if (_0x208c9c) {
            {
              const _0x3e23ea = "/*" + this.PATCH_KEYWORD_RULES_HASH + ":" + _0x208c9c + "*/";
              return _0x394964.replace(_0x3e23ea, _0x4765ea);
            }
          }
          return _0x4765ea + "\n" + _0x394964;
        }
        static validatePatchHash(_0x3e8c02, _0x50aa36) {
          const _0x2863d5 = this.extractHashFromFile(_0x3e8c02);
          return !!_0x2863d5 && _0x2863d5 === this.calculatePatchHash(_0x50aa36);
        }
        static applyJsonRulesPatch(_0x37f362, _0x1d4d38) {
          {
            let _0x1ae68b = _0x37f362;
            for (let _0x4f6946 = 0; _0x4f6946 < _0x1d4d38.length; _0x4f6946++) {
              const _0x461b02 = _0x1d4d38[_0x4f6946];
              const _0x1b4a40 = _0x461b02.pattern;
              const _0x223249 = _0x461b02.value;
              if (!_0x1ae68b.includes(_0x1b4a40)) {
                throw Error("文件中未找到匹配模式，请重新安装 Cursor。");
              }
              try {
                {
                  _0x1ae68b = _0x1ae68b.replaceAll(_0x1b4a40, _0x223249);
                }
              } catch (_0x3d192d) {
                throw Error("应用规则失败，请重新安装 Cursor。");
              }
            }
            return _0x1ae68b;
          }
        }
        static async applyPatchWithRules(_0x373e0c) {
          {
            try {
              {
                const _0x2d7752 = _0x18a08b.CursorPathService.getWorkbenchPath();
                if (!_0x2d7752) {
                  return _0x18a08b.CursorPathService.isRemoteEnvironment() ? {
                    success: false,
                    error: _0x18a08b.CursorPathService.getRemoteEnvironmentErrorMessage()
                  } : {
                    success: false,
                    error: "未找到 Cursor workbench 文件"
                  };
                }
                if (!_0x18a08b.CursorPathService.hasAllBackups().hasAll) {
                  {
                    const _0x59e5ee = _0x18a08b.CursorPathService.createAllBackups();
                    if (!_0x59e5ee.success) {
                      return {
                        success: false,
                        error: _0x59e5ee.error || "权限不足，无法创建备份文件"
                      };
                    }
                  }
                }
                let _0x3a4b19 = false;
                if (_0x373e0c && _0x373e0c.rules.length > 0) {
                  const _0x31490a = _0x211e41.readFileSync(_0x2d7752, "utf8");
                  if (this.validatePatchHash(_0x31490a, _0x373e0c.rules) || (_0x3a4b19 = true), _0x3a4b19 && !_0x18a08b.CursorPathService.restoreFromBackup()) {
                    return {
                      success: false,
                      error: "权限不足，无法从备份恢复文件"
                    };
                  }
                }
                const _0x221d08 = await this.applyPatch();
                if (!_0x221d08.success) {
                  return _0x221d08;
                }
                if (_0x3a4b19 && _0x373e0c) {
                  let _0x4f9a44 = _0x211e41.readFileSync(_0x2d7752, "utf8");
                  try {
                    _0x4f9a44 = this.applyJsonRulesPatch(_0x4f9a44, _0x373e0c.rules);
                  } catch (_0x57e217) {
                    throw _0x18a08b.CursorPathService.restoreFromBackup(), Error("补丁应用失败: " + (_0x57e217 instanceof Error ? _0x57e217.message : _0x57e217 + ""));
                  }
                  const _0x21848a = this.calculatePatchHash(_0x373e0c.rules);
                  _0x4f9a44 = this.insertHashMarker(_0x4f9a44, _0x21848a);
                  _0x211e41.writeFileSync(_0x2d7752, _0x4f9a44);
                }
                return {
                  success: true
                };
              }
            } catch (_0x1e8bc9) {
              {
                return {
                  success: false,
                  error: _0x1e8bc9 instanceof Error ? _0x1e8bc9.message : "未知错误"
                };
              }
            }
          }
        }
      }
      _0x169b35.CursorPatchService = _0xc39cb6;
      _0xc39cb6.PATCH_KEYWORD_RULES_HASH = "cursorRules2.0Hash";
    },
    5411(_0x626f04, _0x467f6f, _0x2ccecd) {
      "use strict";

      var _0x4aeca5 = this && this.__createBinding || (Object.create ? function (_0x424bea, _0x1601bb, _0x475f32, _0xdd5bc5) {
        undefined === _0xdd5bc5 && (_0xdd5bc5 = _0x475f32);
        var _0xb204ed = Object.getOwnPropertyDescriptor(_0x1601bb, _0x475f32);
        _0xb204ed && !("get" in _0xb204ed ? !_0x1601bb.__esModule : _0xb204ed.writable || _0xb204ed.configurable) || (_0xb204ed = {
          enumerable: true,
          get() {
            return _0x1601bb[_0x475f32];
          }
        });
        Object.defineProperty(_0x424bea, _0xdd5bc5, _0xb204ed);
      } : function (_0x3f8417, _0x25b600, _0x1b5e02, _0x24b76b) {
        undefined === _0x24b76b && (_0x24b76b = _0x1b5e02);
        _0x3f8417[_0x24b76b] = _0x25b600[_0x1b5e02];
      });
      var _0x525cec = this && this.__setModuleDefault || (Object.create ? function (_0x463349, _0x3dbf1c) {
        Object.defineProperty(_0x463349, "default", {
          enumerable: true,
          value: _0x3dbf1c
        });
      } : function (_0x346ef4, _0x5294f9) {
        _0x346ef4.default = _0x5294f9;
      });
      var _0x4e1334 = this && this.__importStar || function (_0x5f36c8) {
        if (_0x5f36c8 && _0x5f36c8.__esModule) {
          return _0x5f36c8;
        }
        var _0x14e69c = {};
        if (null != _0x5f36c8) {
          for (var _0x48d8da in _0x5f36c8) "default" !== _0x48d8da && {}.hasOwnProperty.call(_0x5f36c8, _0x48d8da) && _0x4aeca5(_0x14e69c, _0x5f36c8, _0x48d8da);
        }
        _0x525cec(_0x14e69c, _0x5f36c8);
        return _0x14e69c;
      };
      Object.defineProperty(_0x467f6f, "__esModule", {
        value: true
      });
      _0x467f6f.CursorPathService = undefined;
      const _0x463f3b = _0x4e1334(_0x2ccecd(6928));
      const _0x259c91 = _0x4e1334(_0x2ccecd(9896));
      const _0x424602 = _0x4e1334(_0x2ccecd(1398));
      const _0x10e3d5 = _0x4e1334(_0x2ccecd(857));
      _0x467f6f.CursorPathService = class {
        static isFileAccessible(_0xbc0ecc) {
          {
            try {
              {
                _0x259c91.accessSync(_0xbc0ecc, _0x259c91.constants.R_OK);
                return true;
              }
            } catch (_0x2f02c1) {
              return false;
            }
          }
        }
        static isFileWritable(_0x529c61) {
          {
            try {
              _0x259c91.accessSync(_0x529c61, _0x259c91.constants.W_OK);
              return true;
            } catch (_0x1785c1) {
              return false;
            }
          }
        }
        static isWindows() {
          {
            return "win32" === _0x10e3d5.platform();
          }
        }
        static isUnix() {
          const _0x3fed96 = _0x10e3d5.platform();
          return "darwin" === _0x3fed96 || "linux" === _0x3fed96;
        }
        static isRemoteEnvironment() {
          return undefined !== _0x424602.env.remoteName && null !== _0x424602.env.remoteName;
        }
        static getRemoteEnvironmentErrorMessage() {
          {
            return "检测到您在远程环境中使用。请先在本地安装并使用插件，然后再连接远端。";
          }
        }
        static checkFileReadOnlyAttribute(_0xae26f8) {
          try {
            if (!_0x259c91.existsSync(_0xae26f8)) {
              return false;
            }
            const _0x23c5bb = _0x259c91.statSync(_0xae26f8);
            this.isWindows();
            return !(128 & _0x23c5bb.mode);
          } catch (_0xf5ea62) {
            return false;
          }
        }
        static checkFileLocked(_0x1735f2) {
          {
            try {
              if (!_0x259c91.existsSync(_0x1735f2)) {
                return {
                  isLocked: false
                };
              }
              const _0x37c367 = _0x259c91.openSync(_0x1735f2, "r+");
              _0x259c91.closeSync(_0x37c367);
              return {
                isLocked: false
              };
            } catch (_0x5e8c35) {
              const _0x5bb8e7 = _0x5e8c35?.["code"];
              const _0x3c39e3 = _0x5e8c35?.["message"] || "Unknown error";
              return "EBUSY" === _0x5bb8e7 || "EACCES" === _0x5bb8e7 ? "EBUSY" === _0x5bb8e7 ? {
                isLocked: true,
                errorType: "locked",
                errorMessage: "File is locked by another process"
              } : {
                isLocked: true,
                errorType: "permission",
                errorMessage: _0x3c39e3
              } : {
                isLocked: false,
                errorType: "other",
                errorMessage: _0x3c39e3
              };
            }
          }
        }
        static removeReadOnlyAttribute(_0x5b14b9) {
          try {
            {
              if (!_0x259c91.existsSync(_0x5b14b9)) {
                return {
                  success: false,
                  error: "File does not exist"
                };
              }
              const _0x41124 = _0x259c91.statSync(_0x5b14b9);
              this.isWindows();
              _0x259c91.chmodSync(_0x5b14b9, 128 | _0x41124.mode);
              return 128 & _0x259c91.statSync(_0x5b14b9).mode ? {
                success: true
              } : {
                success: false,
                error: "Failed to remove read-only attribute"
              };
            }
          } catch (_0x1b52fb) {
            return {
              success: false,
              error: _0x1b52fb instanceof Error ? _0x1b52fb.message : "Unknown error"
            };
          }
        }
        static getFilePermissionDiagnostics(_0x4e1511) {
          let _0x1f0e83;
          switch (_0x10e3d5.platform()) {
            case "win32":
              _0x1f0e83 = "windows";
              break;
            case "darwin":
              _0x1f0e83 = "darwin";
              break;
            default:
              _0x1f0e83 = "linux";
          }
          if (!_0x259c91.existsSync(_0x4e1511)) {
            return {
              isWritable: false,
              isReadOnly: false,
              isLocked: false,
              errorType: "other",
              errorMessage: "File does not exist",
              platform: _0x1f0e83
            };
          }
          const _0x10dd4c = this.isFileWritable(_0x4e1511);
          const _0x2bf2b0 = this.checkFileReadOnlyAttribute(_0x4e1511);
          const _0x42298f = this.checkFileLocked(_0x4e1511);
          const _0x2527eb = _0x42298f.isLocked;
          let _0x24f3d8 = "other";
          let _0x3e7d73 = "";
          let _0x2efa57 = [];
          _0x2527eb ? (_0x24f3d8 = "locked", _0x3e7d73 = _0x42298f.errorMessage || "文件被其他进程锁定。请关闭 Cursor 后重试。") : _0x2bf2b0 ? (_0x24f3d8 = "readonly", _0x3e7d73 = "文件被标记为只读", _0x2efa57 = "windows" === _0x1f0e83 ? ["attrib -r \"" + _0x4e1511 + "\"", "takeown /f \"" + _0x4e1511 + "\" && icacls \"" + _0x4e1511 + "\" /grant \"%USERNAME%\":F && attrib -r \"" + _0x4e1511 + "\""] : ["chmod +w \"" + _0x4e1511 + "\"", "sudo chmod +w \"" + _0x4e1511 + "\""]) : _0x10dd4c ? _0x3e7d73 = "File is writable" : (_0x24f3d8 = "acl", _0x3e7d73 = "文件操作权限不足，无法写入文件", _0x2efa57 = "windows" === _0x1f0e83 ? ["takeown /f \"" + _0x4e1511 + "\"", "icacls \"" + _0x4e1511 + "\" /grant \"%USERNAME%\":F", "takeown /f \"" + _0x4e1511 + "\" && icacls \"" + _0x4e1511 + "\" /grant \"%USERNAME%\":F && attrib -r \"" + _0x4e1511 + "\""] : ["sudo chmod +w \"" + _0x4e1511 + "\"", "sudo chown $USER \"" + _0x4e1511 + "\" && sudo chmod +w \"" + _0x4e1511 + "\""]);
          return {
            isWritable: _0x10dd4c,
            isReadOnly: _0x2bf2b0,
            isLocked: _0x2527eb,
            errorType: _0x24f3d8,
            errorMessage: _0x3e7d73,
            platform: _0x1f0e83,
            fixCommands: _0x2efa57.length > 0 ? _0x2efa57 : undefined,
            detailedInfo: "Platform: " + _0x1f0e83 + ", Read-only: " + _0x2bf2b0 + ", Locked: " + _0x2527eb + ", Writable: " + _0x10dd4c
          };
        }
        static isFileWritableEnhanced(_0x2ab6c4) {
          const _0x1dafb6 = this.getFilePermissionDiagnostics(_0x2ab6c4);
          return {
            isWritable: _0x1dafb6.isWritable && !_0x1dafb6.isLocked,
            diagnostics: _0x1dafb6
          };
        }
        static getWorkbenchPath() {
          try {
            {
              const _0x35b55b = _0x424602.env.appRoot;
              if (!_0x35b55b) {
                return null;
              }
              const _0x3167ab = _0x463f3b.join(_0x35b55b, "out", "vs", "workbench", "workbench.desktop.main.js");
              return _0x259c91.existsSync(_0x3167ab) ? _0x3167ab : null;
            }
          } catch (_0x21b0bc) {
            return null;
          }
        }
        static getStorageJsonPath() {
          try {
            {
              const _0x3a5f57 = _0x2ccecd(857);
              const _0x39c4e8 = _0x3a5f57.platform();
              const _0x56d3b5 = _0x3a5f57.homedir();
              let _0xfa13d6;
              switch (_0x39c4e8) {
                case "darwin":
                  _0xfa13d6 = _0x463f3b.join(_0x56d3b5, "Library", "Application Support", "Cursor", "User", "globalStorage", "storage.json");
                  break;
                case "win32":
                  const _0x3b0e54 = process.env.APPDATA;
                  if (!_0x3b0e54) {
                    return null;
                  }
                  _0xfa13d6 = _0x463f3b.join(_0x3b0e54, "Cursor", "User", "globalStorage", "storage.json");
                  break;
                case "linux":
                  _0xfa13d6 = _0x463f3b.join(_0x56d3b5, ".config", "Cursor", "User", "globalStorage", "storage.json");
                  break;
                default:
                  return null;
              }
              return _0xfa13d6;
            }
          } catch (_0x3b69db) {
            return null;
          }
        }
        static getSettingsJsonPath() {
          {
            try {
              const _0x1c5046 = _0x2ccecd(857);
              const _0x224b03 = _0x1c5046.platform();
              const _0x160127 = _0x1c5046.homedir();
              let _0x30c4e0;
              switch (_0x224b03) {
                case "darwin":
                  _0x30c4e0 = _0x463f3b.join(_0x160127, "Library", "Application Support", "Cursor", "User", "settings.json");
                  break;
                case "win32":
                  const _0x5f29c2 = process.env.APPDATA;
                  if (!_0x5f29c2) {
                    return null;
                  }
                  _0x30c4e0 = _0x463f3b.join(_0x5f29c2, "Cursor", "User", "settings.json");
                  break;
                case "linux":
                  _0x30c4e0 = _0x463f3b.join(_0x160127, ".config", "Cursor", "User", "settings.json");
                  break;
                default:
                  return null;
              }
              return _0x30c4e0;
            } catch (_0xb98c03) {
              return null;
            }
          }
        }
        static getCliProcessMainPath() {
          try {
            {
              const _0x29fc91 = _0x424602.env.appRoot;
              if (!_0x29fc91) {
                return null;
              }
              const _0x30e412 = _0x463f3b.join(_0x29fc91, "out", "vs", "code", "node", "cliProcessMain.js");
              return _0x259c91.existsSync(_0x30e412) ? _0x30e412 : null;
            }
          } catch (_0x357167) {
            return null;
          }
        }
        static getMainJsPath() {
          try {
            const _0x2b6586 = _0x424602.env.appRoot;
            if (!_0x2b6586) {
              return null;
            }
            const _0x4314ee = _0x463f3b.join(_0x2b6586, "out", "main.js");
            return _0x259c91.existsSync(_0x4314ee) ? _0x4314ee : null;
          } catch (_0x5bab85) {
            {
              return null;
            }
          }
        }
        static getWorkbenchBackupPath() {
          {
            const _0x330b59 = this.getWorkbenchPath();
            return _0x330b59 ? _0x330b59 + ".backup" : null;
          }
        }
        static hasBackup() {
          {
            const _0x480f5b = this.getWorkbenchBackupPath();
            return !!_0x480f5b && _0x259c91.existsSync(_0x480f5b);
          }
        }
        static createBackup() {
          {
            try {
              {
                const _0x28c6f6 = this.getWorkbenchPath();
                const _0x16c6b9 = this.getWorkbenchBackupPath();
                return !(!_0x28c6f6 || !_0x16c6b9 || (_0x259c91.existsSync(_0x16c6b9) || _0x259c91.copyFileSync(_0x28c6f6, _0x16c6b9), 0));
              }
            } catch (_0x53477f) {
              return false;
            }
          }
        }
        static restoreFromBackup() {
          try {
            const _0x2c6528 = this.getWorkbenchPath();
            const _0x1d262e = this.getWorkbenchBackupPath();
            return !(!_0x2c6528 || !_0x1d262e || !_0x259c91.existsSync(_0x1d262e) || (_0x259c91.copyFileSync(_0x1d262e, _0x2c6528), 0));
          } catch (_0x3ae9d2) {
            return false;
          }
        }
        static getBackupInfo() {
          {
            try {
              const _0x496083 = this.getWorkbenchBackupPath();
              if (!_0x496083 || !_0x259c91.existsSync(_0x496083)) {
                return null;
              }
              const _0xf38990 = _0x259c91.statSync(_0x496083);
              return {
                path: _0x496083,
                size: _0xf38990.size,
                createdAt: _0xf38990.birthtime
              };
            } catch (_0x1610ec) {
              return null;
            }
          }
        }
        static deleteBackup() {
          try {
            const _0x9e58b9 = this.getWorkbenchBackupPath();
            return !(!_0x9e58b9 || _0x259c91.existsSync(_0x9e58b9) && (_0x259c91.unlinkSync(_0x9e58b9), 0));
          } catch (_0x4aefa7) {
            return false;
          }
        }
        static getAlwaysLocalBackupPath() {
          const _0x135470 = this.getCursorAlwaysLocalMainJsPath();
          return _0x135470 ? _0x135470 + ".backup" : null;
        }
        static getExtensionHostBackupPath() {
          const _0x1c620c = this.getExtensionHostProcessPath();
          return _0x1c620c ? _0x1c620c + ".backup" : null;
        }
        static hasAllBackups() {
          {
            const _0x2181eb = this.getWorkbenchBackupPath();
            const _0x5244f0 = this.getAlwaysLocalBackupPath();
            const _0x524d9a = this.getExtensionHostBackupPath();
            const _0x571d5a = !!_0x2181eb && _0x259c91.existsSync(_0x2181eb);
            const _0x4c2ea1 = !!_0x5244f0 && _0x259c91.existsSync(_0x5244f0);
            const _0x1e7049 = !!_0x524d9a && _0x259c91.existsSync(_0x524d9a);
            return {
              hasAll: _0x571d5a && _0x4c2ea1 && _0x1e7049,
              workbench: _0x571d5a,
              alwaysLocal: _0x4c2ea1,
              extensionHost: _0x1e7049
            };
          }
        }
        static createAllBackups() {
          const _0x1402f = {
            workbench: false,
            alwaysLocal: false,
            extensionHost: false
          };
          try {
            {
              const _0xf4ae54 = this.getWorkbenchPath();
              const _0x240e88 = this.getWorkbenchBackupPath();
              if (!_0xf4ae54 || !_0x240e88) {
                return {
                  success: false,
                  error: "无法找到 workbench.desktop.main.js 文件路径",
                  details: _0x1402f
                };
              }
              _0x259c91.existsSync(_0x240e88) || _0x259c91.copyFileSync(_0xf4ae54, _0x240e88);
              _0x1402f.workbench = true;
              const _0x31cb0f = this.getCursorAlwaysLocalMainJsPath();
              const _0x5787af = this.getAlwaysLocalBackupPath();
              if (!_0x31cb0f || !_0x5787af) {
                return {
                  success: false,
                  error: "无法找到 cursor-always-local/dist/main.js 文件路径",
                  details: _0x1402f
                };
              }
              _0x259c91.existsSync(_0x5787af) || _0x259c91.copyFileSync(_0x31cb0f, _0x5787af);
              _0x1402f.alwaysLocal = true;
              const _0x25ba0a = this.getExtensionHostProcessPath();
              const _0x1acb96 = this.getExtensionHostBackupPath();
              return _0x25ba0a && _0x1acb96 ? (_0x259c91.existsSync(_0x1acb96) || _0x259c91.copyFileSync(_0x25ba0a, _0x1acb96), _0x1402f.extensionHost = true, {
                success: true,
                details: _0x1402f
              }) : {
                success: false,
                error: "无法找到 extensionHostProcess.js 文件路径",
                details: _0x1402f
              };
            }
          } catch (_0x184217) {
            {
              return {
                success: false,
                error: "权限不足，创建备份失败: " + (_0x184217 instanceof Error ? _0x184217.message : "未知错误"),
                details: _0x1402f
              };
            }
          }
        }
        static restoreAllFromBackup() {
          {
            const _0x4cf48b = {
              workbench: false,
              alwaysLocal: false,
              extensionHost: false
            };
            const _0x5e466f = this.hasAllBackups();
            if (!_0x5e466f.hasAll) {
              {
                const _0x5562ff = [];
                _0x5e466f.workbench || _0x5562ff.push("workbench.desktop.main.js");
                _0x5e466f.alwaysLocal || _0x5562ff.push("cursor-always-local/dist/main.js");
                _0x5e466f.extensionHost || _0x5562ff.push("extensionHostProcess.js");
                return {
                  success: false,
                  error: "以下文件的备份不存在: " + _0x5562ff.join(", ") + "。请重新安装 Cursor 后再使用本插件。",
                  details: _0x4cf48b
                };
              }
            }
            try {
              const _0x1f4a18 = this.getWorkbenchPath();
              const _0x4a08e5 = this.getWorkbenchBackupPath();
              _0x1f4a18 && _0x4a08e5 && (_0x259c91.copyFileSync(_0x4a08e5, _0x1f4a18), _0x4cf48b.workbench = true);
              const _0x2c8b96 = this.getCursorAlwaysLocalMainJsPath();
              const _0x2b2e10 = this.getAlwaysLocalBackupPath();
              _0x2c8b96 && _0x2b2e10 && (_0x259c91.copyFileSync(_0x2b2e10, _0x2c8b96), _0x4cf48b.alwaysLocal = true);
              const _0x51e3b4 = this.getExtensionHostProcessPath();
              const _0x148cec = this.getExtensionHostBackupPath();
              _0x51e3b4 && _0x148cec && (_0x259c91.copyFileSync(_0x148cec, _0x51e3b4), _0x4cf48b.extensionHost = true);
              return {
                success: true,
                details: _0x4cf48b
              };
            } catch (_0x5e11d7) {
              {
                return {
                  success: false,
                  error: "恢复文件失败: " + (_0x5e11d7 instanceof Error ? _0x5e11d7.message : "未知错误"),
                  details: _0x4cf48b
                };
              }
            }
          }
        }
        static deleteAllBackups() {
          const _0xcff928 = {
            workbench: false,
            alwaysLocal: false,
            extensionHost: false
          };
          try {
            {
              const _0x4551c2 = this.getWorkbenchBackupPath();
              _0x4551c2 && _0x259c91.existsSync(_0x4551c2) && _0x259c91.unlinkSync(_0x4551c2);
              _0xcff928.workbench = true;
              const _0x34c4a4 = this.getAlwaysLocalBackupPath();
              _0x34c4a4 && _0x259c91.existsSync(_0x34c4a4) && _0x259c91.unlinkSync(_0x34c4a4);
              _0xcff928.alwaysLocal = true;
              const _0x31317b = this.getExtensionHostBackupPath();
              _0x31317b && _0x259c91.existsSync(_0x31317b) && _0x259c91.unlinkSync(_0x31317b);
              _0xcff928.extensionHost = true;
              return {
                success: true,
                details: _0xcff928
              };
            }
          } catch (_0x40e109) {
            return {
              success: false,
              details: _0xcff928
            };
          }
        }
        static getExtensionHostProcessPath() {
          try {
            const _0x47ddb4 = _0x424602.env.appRoot;
            if (!_0x47ddb4) {
              return null;
            }
            const _0x47508e = _0x463f3b.join(_0x47ddb4, "out", "vs", "workbench", "api", "node", "extensionHostProcess.js");
            return _0x259c91.existsSync(_0x47508e) ? _0x47508e : null;
          } catch (_0x75b2c0) {
            {
              return null;
            }
          }
        }
        static getCursorAlwaysLocalMainJsPath() {
          try {
            const _0x1b10b4 = _0x424602.env.appRoot;
            if (!_0x1b10b4) {
              return null;
            }
            const _0x38e6b9 = _0x463f3b.join(_0x1b10b4, "extensions", "cursor-always-local", "dist", "main.js");
            return _0x259c91.existsSync(_0x38e6b9) ? _0x38e6b9 : null;
          } catch (_0x243e59) {
            return null;
          }
        }
        static attemptFixFilePermissions(_0x1509aa) {
          {
            try {
              const _0x58b95f = this.getFilePermissionDiagnostics(_0x1509aa);
              if (_0x58b95f.isLocked) {
                return {
                  success: false,
                  error: "文件被其他进程锁定"
                };
              }
              if (_0x58b95f.isReadOnly) {
                const _0x1a4412 = this.removeReadOnlyAttribute(_0x1509aa);
                return _0x1a4412.success ? {
                  success: true,
                  fixedReadOnly: true
                } : {
                  success: false,
                  error: _0x1a4412.error || "移除只读属性失败"
                };
              }
              return "acl" === _0x58b95f.errorType ? {
                success: false,
                error: "ACL 权限需要手动干预"
              } : {
                success: false,
                error: "未知权限问题"
              };
            } catch (_0x173621) {
              return {
                success: false,
                error: _0x173621 instanceof Error ? _0x173621.message : "修复过程中发生未知错误"
              };
            }
          }
        }
        static writeFileSafe(_0x80b41b, _0x3f527c) {
          try {
            {
              if (!_0x259c91.existsSync(_0x80b41b)) {
                return {
                  success: false,
                  error: "文件不存在: " + _0x80b41b
                };
              }
              if (!this.isFileWritableEnhanced(_0x80b41b).isWritable) {
                const _0x45f4a5 = this.attemptFixFilePermissions(_0x80b41b);
                if (!_0x45f4a5.success) {
                  return {
                    success: false,
                    error: "文件操作权限不足: " + _0x45f4a5.error
                  };
                }
                const _0x229179 = this.isFileWritableEnhanced(_0x80b41b);
                if (!_0x229179.isWritable) {
                  return {
                    success: false,
                    error: "权限修复后文件仍不可写: " + _0x229179.diagnostics.errorMessage
                  };
                }
              }
              _0x259c91.writeFileSync(_0x80b41b, _0x3f527c, "utf8");
              return {
                success: true
              };
            }
          } catch (_0x19decf) {
            return {
              success: false,
              error: "写入文件失败: " + (_0x19decf instanceof Error ? _0x19decf.message : "未知错误")
            };
          }
        }
      };
    },
    2343(_0x1098ec, _0x205d9a, _0x18463f) {
      "use strict";

      var _0x2ef729 = this && this.__importDefault || function (_0x4cf996) {
        return _0x4cf996 && _0x4cf996.__esModule ? _0x4cf996 : {
          default: _0x4cf996
        };
      };
      Object.defineProperty(_0x205d9a, "__esModule", {
        value: true
      });
      _0x205d9a.CursorRulesPatchService = undefined;
      const _0xe53643 = _0x2ef729(_0x18463f(8812));
      const _0x20d148 = _0x18463f(2875);
      class _0x29694a extends Error {
        constructor(_0x2be906, _0x712d51) {
          super(_0x2be906);
          this.code = _0x712d51;
          this.name = "BusinessError";
        }
      }
      class _0x54f983 {
        static buildRequestBody(_0x483ad1) {
          return {
            version: "client-file/cursorRules.v2." + _0x483ad1 + ".txt"
          };
        }
        static delay(_0x333fb6) {
          {
            return new Promise(_0x315fd2 => setTimeout(_0x315fd2, _0x333fb6));
          }
        }
        static async fetchWithRetry(_0xe639ff, _0x420fb4, _0x318a3d) {
          const _0x1ba33b = "" + _0xe639ff + this.REMOTE_FILE_ENDPOINT;
          const _0x21c445 = this.buildRequestBody(_0x420fb4);
          for (let _0x1102ab = 0; _0x1102ab <= this.MAX_RETRIES; _0x1102ab++) {
            try {
              const _0xf0b3fa = await _0xe53643.default.post(_0x1ba33b, _0x21c445, {
                timeout: this.REQUEST_TIMEOUT,
                validateStatus() {
                  return true;
                },
                proxy: false
              });
              if (200 !== _0xf0b3fa.status) {
                throw Error("HTTP " + _0xf0b3fa.status + ": " + _0xf0b3fa.statusText);
              }
              if (0 !== _0xf0b3fa.data.code) {
                throw new _0x29694a("API 错误: " + (_0xf0b3fa.data.msg || "未知错误") + " (code: " + _0xf0b3fa.data.code + ")", _0xf0b3fa.data.code);
              }
              if (!_0xf0b3fa.data.data || "string" != typeof _0xf0b3fa.data.data.content) {
                throw Error("响应格式无效: data.content 不存在或不是字符串");
              }
              if (!_0xf0b3fa.data.data.content) {
                throw Error("响应格式无效: data.content 为空");
              }
              return _0xf0b3fa.data.data.content;
            } catch (_0x443522) {
              if (_0x443522 instanceof _0x29694a) {
                throw _0x443522;
              }
              const _0x5b769b = _0x1102ab === this.MAX_RETRIES;
              if (_0x443522 instanceof Error && _0x443522.message, _0x5b769b) {
                throw _0x443522;
              }
              const _0x1039bb = this.RETRY_DELAY * (_0x1102ab + 1);
              await this.delay(_0x1039bb);
            }
          }
          throw Error("所有重试尝试均失败");
        }
        static async fetchEncryptedRules(_0x331a9f) {
          {
            try {
              return await this.fetchWithRetry(this.PRIMARY_API_BASE, _0x331a9f, "Primary API");
            } catch (_0x2fc776) {
              if (_0x2fc776 instanceof _0x29694a) {
                throw _0x2fc776;
              }
              const _0x2a0a62 = _0x2fc776 instanceof Error ? _0x2fc776.message : "未知错误";
              try {
                return await this.fetchWithRetry(this.FALLBACK_API_BASE, _0x331a9f, "Fallback API - HTTPS");
              } catch (_0x1aa32f) {
                if (_0x1aa32f instanceof _0x29694a) {
                  throw _0x1aa32f;
                }
                const _0x51454b = _0x1aa32f instanceof Error ? _0x1aa32f.message : "未知错误";
                try {
                  return await this.fetchWithRetry(this.FALLBACK_API_BASE_HTTP, _0x331a9f, "Fallback API - HTTP");
                } catch (_0x2e9462) {
                  {
                    if (_0x2e9462 instanceof _0x29694a) {
                      throw _0x2e9462;
                    }
                    const _0x32435b = _0x2e9462 instanceof Error ? _0x2e9462.message : "未知错误";
                    throw Error("获取补丁规则失败 - 网络不佳，请改善网络: " + (_0x32435b ?? _0x51454b ?? _0x2a0a62));
                  }
                }
              }
            }
          }
        }
        static async decryptRules(_0xfe61e7, _0x72e216, _0x216630) {
          {
            try {
              await _0x20d148.wasmCryptoService.initialize();
              const _0x245eb4 = await _0x20d148.wasmCryptoService.decryptPatchRules(_0xfe61e7, _0x72e216, _0x216630);
              const _0x478326 = JSON.parse(_0x245eb4);
              this.validateRulesSet(_0x478326);
              return _0x478326;
            } catch (_0x1661f3) {
              throw Error("解密补丁规则失败: " + (_0x1661f3 instanceof Error ? _0x1661f3.message : "未知错误"));
            }
          }
        }
        static validateRulesSet(_0x31c3e4) {
          {
            if (!_0x31c3e4 || "object" != typeof _0x31c3e4) {
              throw Error("规则集无效: 不是对象类型");
            }
            if (!Array.isArray(_0x31c3e4.rules)) {
              throw Error("规则集无效: rules 不是数组类型");
            }
            for (let _0x4fce7f = 0; _0x4fce7f < _0x31c3e4.rules.length; _0x4fce7f++) {
              {
                const _0x56b406 = _0x31c3e4.rules[_0x4fce7f];
                if (!_0x56b406.pattern || "string" != typeof _0x56b406.pattern) {
                  throw Error("规则无效 (索引 " + _0x4fce7f + "): 缺少或无效的模式");
                }
                if ("replace" !== _0x56b406.type) {
                  throw Error("规则无效 (索引 " + _0x4fce7f + "): 不支持的类型 " + _0x56b406.type);
                }
                if ("string" != typeof _0x56b406.value) {
                  throw Error("规则无效 (索引 " + _0x4fce7f + "): 无效的值");
                }
              }
            }
          }
        }
        static async loadRulesForCurrentVersion(_0x1d0d3e, _0xc73d9e, _0x2d30df = false) {
          {
            if (_0x2d30df && this.cachedRules.has(_0x1d0d3e)) {
              return this.cachedRules.get(_0x1d0d3e);
            }
            const _0x16d602 = await this.fetchEncryptedRules(_0x1d0d3e);
            const _0x4b3d65 = await this.decryptRules(_0x16d602, _0x1d0d3e, _0xc73d9e);
            this.cachedRules.set(_0x1d0d3e, _0x4b3d65);
            return _0x4b3d65;
          }
        }
        static clearCache() {
          this.cachedRules.clear();
        }
        static getCacheInfo() {
          return Array.from(this.cachedRules.entries()).map(([_0x1ec25b, _0x463ae5]) => ({
            version: _0x1ec25b,
            rulesCount: _0x463ae5.rules.length
          }));
        }
      }
      _0x205d9a.CursorRulesPatchService = _0x54f983;
      _0x54f983.PRIMARY_API_BASE = "https://cur-api.shareai.pro/quota/api";
      _0x54f983.FALLBACK_API_BASE = "https://111.231.65.234:8081/quota/api";
      _0x54f983.FALLBACK_API_BASE_HTTP = "http://111.231.65.234:8081/quota/api";
      _0x54f983.REMOTE_FILE_ENDPOINT = "/general-tool/remote-file";
      _0x54f983.REQUEST_TIMEOUT = 15000;
      _0x54f983.MAX_RETRIES = 3;
      _0x54f983.RETRY_DELAY = 1000;
      _0x54f983.cachedRules = new Map();
    },
    7985(_0x1873ee, _0x392b29, _0x449dc3) {
      "use strict";

      {
        var _0x34bfc8 = this && this.__createBinding || (Object.create ? function (_0x2db624, _0xb209a4, _0x45c123, _0x4dfb35) {
          undefined === _0x4dfb35 && (_0x4dfb35 = _0x45c123);
          var _0x4592d3 = Object.getOwnPropertyDescriptor(_0xb209a4, _0x45c123);
          _0x4592d3 && !("get" in _0x4592d3 ? !_0xb209a4.__esModule : _0x4592d3.writable || _0x4592d3.configurable) || (_0x4592d3 = {
            enumerable: true,
            get() {
              return _0xb209a4[_0x45c123];
            }
          });
          Object.defineProperty(_0x2db624, _0x4dfb35, _0x4592d3);
        } : function (_0x2da635, _0x368640, _0x27d164, _0x349bc9) {
          undefined === _0x349bc9 && (_0x349bc9 = _0x27d164);
          _0x2da635[_0x349bc9] = _0x368640[_0x27d164];
        });
        var _0x3a9c8b = this && this.__setModuleDefault || (Object.create ? function (_0x1498a8, _0x52ab83) {
          Object.defineProperty(_0x1498a8, "default", {
            enumerable: true,
            value: _0x52ab83
          });
        } : function (_0x2263a1, _0x502a12) {
          _0x2263a1.default = _0x502a12;
        });
        var _0x39ae81 = this && this.__importStar || function (_0x3f837f) {
          if (_0x3f837f && _0x3f837f.__esModule) {
            return _0x3f837f;
          }
          var _0x31e000 = {};
          if (null != _0x3f837f) {
            for (var _0x53f19a in _0x3f837f) "default" !== _0x53f19a && {}.hasOwnProperty.call(_0x3f837f, _0x53f19a) && _0x34bfc8(_0x31e000, _0x3f837f, _0x53f19a);
          }
          _0x3a9c8b(_0x31e000, _0x3f837f);
          return _0x31e000;
        };
        Object.defineProperty(_0x392b29, "__esModule", {
          value: true
        });
        _0x392b29.NotificationService = undefined;
        const _0x13a408 = _0x39ae81(_0x449dc3(1398));
        const _0x12ba47 = _0x39ae81(_0x449dc3(6982));
        _0x392b29.NotificationService = class {
          constructor(_0x29c9f3, _0x2fc917, _0x327e0f) {
            this.apiService = _0x29c9f3;
            this.storageService = _0x2fc917;
            this.context = _0x327e0f;
            this.pollingInterval = null;
            this.POLLING_INTERVAL_MS = 600000;
          }
          calculateHash(_0x246552) {
            return _0x12ba47.createHash("sha256").update(_0x246552, "utf8").digest("hex");
          }
          async checkAndShowNotification() {
            try {
              const _0x5e73c2 = await this.apiService.getNotification(1);
              if (0 !== _0x5e73c2.code || !_0x5e73c2.data || !_0x5e73c2.data.content) {
                return;
              }
              const _0x4e365c = _0x5e73c2.data.content;
              const _0x1f185f = this.calculateHash(_0x4e365c);
              const _0x2b762d = await this.storageService.getNotificationHash();
              _0x2b762d && _0x1f185f === _0x2b762d || (_0x13a408.window.showInformationMessage(_0x4e365c), await this.storageService.setNotificationHash(_0x1f185f));
            } catch (_0x40722c) {
              {
                _0x40722c instanceof Error && _0x40722c.message;
              }
            }
          }
          startPolling() {
            this.pollingInterval || (this.checkAndShowNotification(), this.pollingInterval = setInterval(() => {
              this.checkAndShowNotification();
            }, this.POLLING_INTERVAL_MS), this.context.subscriptions.push({
              dispose: () => this.stopPolling()
            }));
          }
          stopPolling() {
            this.pollingInterval && (clearInterval(this.pollingInterval), this.pollingInterval = null);
          }
        };
      }
    },
    6700(_0x5d1c69, _0x3e5051, _0x11bebb) {
      "use strict";

      var _0x2fca2a = this && this.__createBinding || (Object.create ? function (_0x3a0e6d, _0xf365fa, _0x1e0db0, _0x1931f0) {
        {
          undefined === _0x1931f0 && (_0x1931f0 = _0x1e0db0);
          var _0x3ff21c = Object.getOwnPropertyDescriptor(_0xf365fa, _0x1e0db0);
          _0x3ff21c && !("get" in _0x3ff21c ? !_0xf365fa.__esModule : _0x3ff21c.writable || _0x3ff21c.configurable) || (_0x3ff21c = {
            enumerable: true,
            get() {
              return _0xf365fa[_0x1e0db0];
            }
          });
          Object.defineProperty(_0x3a0e6d, _0x1931f0, _0x3ff21c);
        }
      } : function (_0x342da4, _0x5a1c8f, _0x50f7dc, _0x24abc1) {
        undefined === _0x24abc1 && (_0x24abc1 = _0x50f7dc);
        _0x342da4[_0x24abc1] = _0x5a1c8f[_0x50f7dc];
      });
      var _0x16ea06 = this && this.__setModuleDefault || (Object.create ? function (_0x5da138, _0x56b644) {
        Object.defineProperty(_0x5da138, "default", {
          enumerable: true,
          value: _0x56b644
        });
      } : function (_0x46d51b, _0x33a817) {
        {
          _0x46d51b.default = _0x33a817;
        }
      });
      var _0x2f3fe4 = this && this.__importStar || function (_0x553ad1) {
        {
          if (_0x553ad1 && _0x553ad1.__esModule) {
            return _0x553ad1;
          }
          var _0x3ac5c8 = {};
          if (null != _0x553ad1) {
            for (var _0x38e5d2 in _0x553ad1) "default" !== _0x38e5d2 && {}.hasOwnProperty.call(_0x553ad1, _0x38e5d2) && _0x2fca2a(_0x3ac5c8, _0x553ad1, _0x38e5d2);
          }
          _0x16ea06(_0x3ac5c8, _0x553ad1);
          return _0x3ac5c8;
        }
      };
      Object.defineProperty(_0x3e5051, "__esModule", {
        value: true
      });
      _0x3e5051.ProxyService = undefined;
      const _0x382315 = _0x2f3fe4(_0x11bebb(1398));
      _0x3e5051.ProxyService = class {
        constructor(_0x383861, _0x47b7d4) {
          this.isOperating = false;
          this.apiService = _0x383861;
          this.storageService = _0x47b7d4;
        }
        async enableProxy() {
          if (this.isOperating) {
            return {
              success: false,
              error: "操作进行中，请稍后再试"
            };
          }
          this.isOperating = true;
          try {
            const _0x5e5cf2 = await this.storageService.getActivationCode();
            const _0x503ce6 = await this.storageService.getDeviceId();
            if (!_0x5e5cf2) {
              return {
                success: false,
                error: "未找到激活码，请先激活"
              };
            }
            const _0x142971 = await this.apiService.getProxyConfig(_0x5e5cf2, _0x503ce6);
            if (0 !== _0x142971.code || !_0x142971.data?.["content"]) {
              return {
                success: false,
                error: _0x142971.msg || "获取代理配置失败"
              };
            }
            const _0x4d98fc = _0x142971.data.content.trim();
            return this.validateProxyUrl(_0x4d98fc) ? (await this.updateSettingsWithProxy(_0x4d98fc), {
              success: true,
              proxyUrl: _0x4d98fc
            }) : {
              success: false,
              error: "代理地址格式无效: " + _0x4d98fc
            };
          } catch (_0x2b0d8a) {
            return {
              success: false,
              error: "启用代理失败: " + (_0x2b0d8a instanceof Error ? _0x2b0d8a.message : "未知错误")
            };
          } finally {
            {
              this.isOperating = false;
            }
          }
        }
        async disableProxy() {
          if (this.isOperating) {
            return {
              success: false,
              error: "操作进行中，请稍后再试"
            };
          }
          this.isOperating = true;
          try {
            {
              await this.updateSettingsWithProxy("");
              return {
                success: true
              };
            }
          } catch (_0x52e2b2) {
            return {
              success: false,
              error: "禁用代理失败: " + (_0x52e2b2 instanceof Error ? _0x52e2b2.message : "未知错误")
            };
          } finally {
            this.isOperating = false;
          }
        }
        async updateSettingsWithProxy(_0x1d87bf) {
          try {
            const _0xd15586 = _0x382315.workspace.getConfiguration();
            _0x1d87bf ? await Promise.all([_0xd15586.update("http.proxy", _0x1d87bf, _0x382315.ConfigurationTarget.Global), _0xd15586.update("http.proxyStrictSSL", false, _0x382315.ConfigurationTarget.Global), _0xd15586.update("http.proxySupport", "override", _0x382315.ConfigurationTarget.Global), _0xd15586.update("cursor.general.disableHttp2", false, _0x382315.ConfigurationTarget.Global)]) : await Promise.all([_0xd15586.update("http.proxy", "", _0x382315.ConfigurationTarget.Global), _0xd15586.update("http.proxyStrictSSL", true, _0x382315.ConfigurationTarget.Global), _0xd15586.update("http.proxySupport", "off", _0x382315.ConfigurationTarget.Global), _0xd15586.update("cursor.general.disableHttp2", false, _0x382315.ConfigurationTarget.Global)]);
          } catch (_0x1acbb1) {
            {
              throw Error("更新配置失败: " + (_0x1acbb1 instanceof Error ? _0x1acbb1.message : "未知错误"));
            }
          }
        }
        validateProxyUrl(_0x1e4815) {
          return /^https?:\/\/[\w.-]+:\d+$/.test(_0x1e4815);
        }
      };
    },
    819(_0x500f1a, _0x5ce262, _0x549427) {
      "use strict";

      var _0x10cda1 = this && this.__createBinding || (Object.create ? function (_0x5e045b, _0x4f1897, _0x3925f7, _0x2cea46) {
        undefined === _0x2cea46 && (_0x2cea46 = _0x3925f7);
        var _0x544bcb = Object.getOwnPropertyDescriptor(_0x4f1897, _0x3925f7);
        _0x544bcb && !("get" in _0x544bcb ? !_0x4f1897.__esModule : _0x544bcb.writable || _0x544bcb.configurable) || (_0x544bcb = {
          enumerable: true,
          get() {
            return _0x4f1897[_0x3925f7];
          }
        });
        Object.defineProperty(_0x5e045b, _0x2cea46, _0x544bcb);
      } : function (_0x367032, _0xa0b0bc, _0x240c8c, _0x3bdffb) {
        undefined === _0x3bdffb && (_0x3bdffb = _0x240c8c);
        _0x367032[_0x3bdffb] = _0xa0b0bc[_0x240c8c];
      });
      var _0x44997d = this && this.__setModuleDefault || (Object.create ? function (_0x553711, _0x4eb4d7) {
        Object.defineProperty(_0x553711, "default", {
          enumerable: true,
          value: _0x4eb4d7
        });
      } : function (_0x2c6307, _0x52526) {
        {
          _0x2c6307.default = _0x52526;
        }
      });
      var _0x44e5a6 = this && this.__importStar || function (_0x1634e6) {
        if (_0x1634e6 && _0x1634e6.__esModule) {
          return _0x1634e6;
        }
        var _0x2a1852 = {};
        if (null != _0x1634e6) {
          for (var _0x2c137d in _0x1634e6) "default" !== _0x2c137d && {}.hasOwnProperty.call(_0x1634e6, _0x2c137d) && _0x10cda1(_0x2a1852, _0x1634e6, _0x2c137d);
        }
        _0x44997d(_0x2a1852, _0x1634e6);
        return _0x2a1852;
      };
      Object.defineProperty(_0x5ce262, "__esModule", {
        value: true
      });
      _0x5ce262.StorageService = undefined;
      const _0x176124 = _0x549427(2940);
      const _0x282b85 = _0x549427(9896);
      const _0x4af622 = _0x44e5a6(_0x549427(857));
      const _0x12e4eb = _0x44e5a6(_0x549427(6928));
      const _0x49119a = _0x549427(2875);
      const _0x5a0d8f = _0x12e4eb.join(_0x4af622.homedir(), ".cursor_free_data");
      const _0x49d0bc = "deviceId";
      const _0x4694ec = "activationCode";
      const _0x3fbe93 = "mail";
      const _0x553cbc = "oemInfo";
      const _0x4adddb = "keyInfo";
      const _0x2945e2 = "announcement";
      const _0x45fb02 = "notificationHash";
      const _0x547934 = "announcementHash";
      const _0x36b194 = "versionCheck";
      const _0x40a0e1 = "token";
      _0x5ce262.StorageService = class {
        constructor(_0x1cce6b) {
          this.context = _0x1cce6b;
          this.wasmInitialized = false;
        }
        hashDeviceId(_0x11cf40) {
          {
            let _0x17238c = 0;
            for (let _0x3fed02 = 0; _0x3fed02 < _0x11cf40.length; _0x3fed02++) {
              _0x17238c = (_0x17238c << 5) - _0x17238c + _0x11cf40.charCodeAt(_0x3fed02);
              _0x17238c &= _0x17238c;
            }
            return Math.abs(_0x17238c).toString(16).padStart(8, "0").substring(0, 8).toUpperCase();
          }
        }
        async ensureWasmInitialized() {
          if (this.wasmInitialized) {
            return true;
          }
          try {
            await _0x49119a.wasmCryptoService.initialize();
            this.wasmInitialized = true;
            return true;
          } catch (_0x2a5050) {
            return false;
          }
        }
        async generateEncryptedCredentials(_0x2fa40d, _0x32c1d8) {
          {
            if (await this.ensureWasmInitialized()) {
              try {
                {
                  const _0x50967b = JSON.stringify({
                    d: _0x2fa40d,
                    a: _0x32c1d8
                  });
                  return await _0x49119a.wasmCryptoService.encryptLocalData(_0x50967b);
                }
              } catch (_0x4bd71e) {
                {
                  return;
                }
              }
            }
          }
        }
        async readPersistentDataFromFile() {
          try {
            const _0x4c1533 = await _0x282b85.promises.readFile(_0x5a0d8f, "utf-8");
            return JSON.parse(_0x4c1533);
          } catch (_0x11b52b) {
            return null;
          }
        }
        async writePersistentDataToFile(_0xa36bc1) {
          {
            try {
              await _0x282b85.promises.writeFile(_0x5a0d8f, JSON.stringify(_0xa36bc1, null, 2), "utf-8");
              return true;
            } catch (_0xd539af) {
              throw Error("权限不足，" + (_0xd539af.message || "文件写入失败"));
            }
          }
        }
        async updatePersistentData(_0x4125a1) {
          const _0x55977d = await this.readPersistentDataFromFile();
          let _0x4995e1 = _0x55977d?.["deviceId"] || _0x4125a1.deviceId;
          _0x4995e1 || (_0x4995e1 = await this.getDeviceId());
          const _0x520697 = {
            deviceId: _0x4995e1,
            activationCode: _0x4125a1.activationCode ?? _0x55977d?.["activationCode"],
            encryptedCredentials: _0x4125a1.encryptedCredentials ?? _0x55977d?.["encryptedCredentials"],
            accountHistory: _0x4125a1.accountHistory ?? _0x55977d?.["accountHistory"]
          };
          return await this.writePersistentDataToFile(_0x520697);
        }
        async getDeviceId() {
          const _0x16dfb0 = await this.readPersistentDataFromFile();
          if (_0x16dfb0 && _0x16dfb0.deviceId) {
            return _0x16dfb0.deviceId;
          }
          let _0x43b4e6 = this.context.globalState.get(_0x49d0bc);
          if (_0x43b4e6) {
            await this.updatePersistentData({
              deviceId: _0x43b4e6
            });
            return _0x43b4e6;
          }
          const _0x3e0d3b = (0, _0x176124.v4)();
          _0x43b4e6 = this.hashDeviceId(_0x3e0d3b);
          (await this.updatePersistentData({
            deviceId: _0x43b4e6
          })) || (await this.context.globalState.update(_0x49d0bc, _0x43b4e6));
          return _0x43b4e6;
        }
        async getToken() {
          return await this.context.secrets.get(_0x40a0e1);
        }
        async setToken(_0x360d66) {
          {
            await this.context.secrets.store(_0x40a0e1, _0x360d66);
          }
        }
        async clearToken() {
          await this.context.secrets.delete(_0x40a0e1);
        }
        async getActivationCode() {
          {
            const _0x22bd52 = await this.readPersistentDataFromFile();
            if (_0x22bd52 && _0x22bd52.activationCode) {
              return _0x22bd52.activationCode;
            }
            const _0x416749 = this.context.globalState.get(_0x4694ec);
            _0x416749 && (await this.updatePersistentData({
              activationCode: _0x416749
            }));
            return _0x416749;
          }
        }
        async setActivationCode(_0x25296d) {
          const _0x5c442b = await this.getDeviceId();
          const _0x2ac189 = await this.generateEncryptedCredentials(_0x5c442b, _0x25296d);
          (await this.updatePersistentData({
            activationCode: _0x25296d,
            encryptedCredentials: _0x2ac189
          })) || (await this.context.globalState.update(_0x4694ec, _0x25296d));
        }
        async clearActivationCode() {
          const _0x1b682d = await this.readPersistentDataFromFile();
          if (_0x1b682d) {
            {
              const _0x3cc5f1 = {
                deviceId: _0x1b682d.deviceId,
                accountHistory: _0x1b682d.accountHistory
              };
              await this.writePersistentDataToFile(_0x3cc5f1);
            }
          }
          await this.context.globalState.update(_0x4694ec, undefined);
        }
        async getMail() {
          return this.context.globalState.get(_0x3fbe93);
        }
        async setMail(_0x3edd86) {
          await this.context.globalState.update(_0x3fbe93, _0x3edd86);
        }
        async getOEMInfo() {
          {
            return this.context.globalState.get(_0x553cbc);
          }
        }
        async setOEMInfo(_0x310f29) {
          await this.context.globalState.update(_0x553cbc, _0x310f29);
        }
        async getKeyInfo() {
          return this.context.globalState.get(_0x4adddb);
        }
        async setKeyInfo(_0x4a210b) {
          await this.context.globalState.update(_0x4adddb, _0x4a210b);
        }
        async getAnnouncement() {
          return this.context.globalState.get(_0x2945e2);
        }
        async setAnnouncement(_0x15fb64) {
          {
            await this.context.globalState.update(_0x2945e2, _0x15fb64);
          }
        }
        async clearAllData() {
          await this.clearToken();
          await this.clearActivationCode();
          await this.context.globalState.update(_0x3fbe93, undefined);
          await this.context.globalState.update(_0x553cbc, undefined);
          await this.context.globalState.update(_0x4adddb, undefined);
          await this.context.globalState.update(_0x2945e2, undefined);
          await this.context.globalState.update(_0x547934, undefined);
        }
        async getAuthStatus() {
          {
            const _0xd4c34f = await this.getToken();
            const _0x4a635a = await this.getKeyInfo();
            if (!_0xd4c34f) {
              return "inactive";
            }
            if (_0x4a635a?.["expired_at"]) {
              const _0x3b8235 = new Date(_0x4a635a.expired_at);
              if (new Date() > _0x3b8235) {
                return "expired";
              }
            }
            return "active";
          }
        }
        async getAccountHistory() {
          const _0xd4be9e = await this.readPersistentDataFromFile();
          let _0x27ba4f = [];
          _0xd4be9e && _0xd4be9e.accountHistory ? _0x27ba4f = _0xd4be9e.accountHistory : (_0x27ba4f = this.context.globalState.get("accountHistory") || [], _0x27ba4f.length > 0 && (await this.updatePersistentData({
            accountHistory: _0x27ba4f
          })));
          _0x27ba4f.sort((_0x22c4c2, _0x31b6bf) => _0x31b6bf.timestamp - _0x22c4c2.timestamp);
          return _0x27ba4f;
        }
        async getRecentAccountHistory(_0x5019c8 = 3) {
          {
            return (await this.getAccountHistory()).slice(0, _0x5019c8);
          }
        }
        async addAccountToHistory(_0x16009d) {
          let _0x1810f0 = await this.getAccountHistory();
          _0x1810f0 = _0x1810f0.filter(_0x203393 => _0x203393.mail !== _0x16009d.mail);
          _0x1810f0.unshift(_0x16009d);
          await this.updatePersistentData({
            accountHistory: _0x1810f0
          });
        }
        async removeAccountFromHistory(_0x44558c) {
          let _0x553fdf = await this.getAccountHistory();
          _0x553fdf = _0x553fdf.filter(_0x2a4a6a => _0x2a4a6a.mail !== _0x44558c);
          await this.updatePersistentData({
            accountHistory: _0x553fdf
          });
        }
        async getNotificationHash() {
          return this.context.globalState.get(_0x45fb02);
        }
        async setNotificationHash(_0x441945) {
          await this.context.globalState.update(_0x45fb02, _0x441945);
        }
        async getAnnouncementHash() {
          return this.context.globalState.get(_0x547934);
        }
        async setAnnouncementHash(_0x93a313) {
          await this.context.globalState.update(_0x547934, _0x93a313);
        }
        async getVersionCheck() {
          return this.context.globalState.get(_0x36b194);
        }
        async setVersionCheck(_0x1868da) {
          await this.context.globalState.update(_0x36b194, _0x1868da);
        }
      };
    },
    2908(_0x196792, _0x1ec01a, _0x4d8cdf) {
      "use strict";

      var _0x5bc334 = this && this.__importDefault || function (_0x401268) {
        {
          return _0x401268 && _0x401268.__esModule ? _0x401268 : {
            default: _0x401268
          };
        }
      };
      Object.defineProperty(_0x1ec01a, "__esModule", {
        value: true
      });
      _0x1ec01a.VersionCheckService = undefined;
      const _0x170197 = _0x5bc334(_0x4d8cdf(8812));
      const _0x2faa79 = _0x4d8cdf(7811);
      class _0x3821a8 {
        static compareVersions(_0x1694bc, _0x5c47fb) {
          try {
            const _0x14f4a4 = _0x1694bc.split(".").map(Number);
            const _0x349af4 = _0x5c47fb.split(".").map(Number);
            for (; 3 > _0x14f4a4.length;) {
              _0x14f4a4.push(0);
            }
            for (; 3 > _0x349af4.length;) {
              _0x349af4.push(0);
            }
            for (let _0x21dd27 = 0; 3 > _0x21dd27; _0x21dd27++) {
              if (_0x14f4a4[_0x21dd27] > _0x349af4[_0x21dd27]) {
                return true;
              }
              if (_0x14f4a4[_0x21dd27] < _0x349af4[_0x21dd27]) {
                return false;
              }
            }
            return true;
          } catch (_0x207ce4) {
            return true;
          }
        }
        static isVersionInRange(_0x43dda8, _0x390e4f, _0x310e73) {
          try {
            const _0x5af207 = this.compareVersions(_0x43dda8, _0x390e4f);
            const _0x44391e = this.compareVersions(_0x310e73, _0x43dda8);
            return _0x5af207 && _0x44391e;
          } catch (_0x5df6ec) {
            {
              return true;
            }
          }
        }
        static async checkVersionCompatibility(_0x24911a) {
          {
            const _0x32796b = this.getCursorVersion() || "unknown";
            try {
              const _0x436aee = await _0x170197.default.get(this.VERSION_CHECK_URL, {
                timeout: this.REQUEST_TIMEOUT,
                validateStatus() {
                  return true;
                },
                proxy: false
              });
              if (200 !== _0x436aee.status) {
                return {
                  isCompatible: true,
                  currentVersion: _0x24911a,
                  minVersion: "unknown",
                  isCursorVersionCompatible: true,
                  cursorVersion: _0x32796b,
                  minCursorVersion: "unknown",
                  maxCursorVersion: "unknown",
                  checkError: "HTTP " + _0x436aee.status + ": Failed to fetch version requirements"
                };
              }
              const _0x345a17 = _0x436aee.data.minVersion;
              if (!_0x345a17) {
                return {
                  isCompatible: true,
                  currentVersion: _0x24911a,
                  minVersion: "unknown",
                  isCursorVersionCompatible: true,
                  cursorVersion: _0x32796b,
                  minCursorVersion: "unknown",
                  maxCursorVersion: "unknown",
                  checkError: "Invalid response: minVersion not found"
                };
              }
              const _0x5220eb = this.compareVersions(_0x24911a, _0x345a17);
              const _0x712625 = _0x436aee.data.minCursorVersion || "";
              const _0x31bc3f = _0x436aee.data.maxCursorVersion || "";
              let _0x4aa63e = true;
              _0x712625 && _0x31bc3f && "unknown" !== _0x32796b && (_0x4aa63e = this.isVersionInRange(_0x32796b, _0x712625, _0x31bc3f));
              return {
                isCompatible: _0x5220eb,
                currentVersion: _0x24911a,
                minVersion: _0x345a17,
                isCursorVersionCompatible: _0x4aa63e,
                cursorVersion: _0x32796b,
                minCursorVersion: _0x712625 || "unknown",
                maxCursorVersion: _0x31bc3f || "unknown"
              };
            } catch (_0x217fad) {
              return {
                isCompatible: true,
                currentVersion: _0x24911a,
                minVersion: "unknown",
                isCursorVersionCompatible: true,
                cursorVersion: _0x32796b,
                minCursorVersion: "unknown",
                maxCursorVersion: "unknown",
                checkError: "Version check failed: " + (_0x217fad instanceof Error ? _0x217fad.message : "Unknown error")
              };
            }
          }
        }
        static getCursorVersion() {
          return (0, _0x2faa79.getCursorVersion)();
        }
        static getSimplifiedVersion(_0x141246) {
          {
            return (0, _0x2faa79.getSimplifiedVersion)(_0x141246);
          }
        }
      }
      _0x1ec01a.VersionCheckService = _0x3821a8;
      _0x3821a8.VERSION_CHECK_URL = "https://cur-api.shareai.pro/updates/cursor-ext-version.json";
      _0x3821a8.REQUEST_TIMEOUT = 10000;
    },
    2875(_0x4cd1b1, _0x5f2e58, _0x495404) {
      "use strict";

      var _0x20a787 = this && this.__createBinding || (Object.create ? function (_0xb01008, _0x22bb71, _0x48fc74, _0x27be97) {
        {
          undefined === _0x27be97 && (_0x27be97 = _0x48fc74);
          var _0x2d2f11 = Object.getOwnPropertyDescriptor(_0x22bb71, _0x48fc74);
          _0x2d2f11 && !("get" in _0x2d2f11 ? !_0x22bb71.__esModule : _0x2d2f11.writable || _0x2d2f11.configurable) || (_0x2d2f11 = {
            enumerable: true,
            get() {
              return _0x22bb71[_0x48fc74];
            }
          });
          Object.defineProperty(_0xb01008, _0x27be97, _0x2d2f11);
        }
      } : function (_0x174360, _0x33171b, _0x465abf, _0x56de19) {
        undefined === _0x56de19 && (_0x56de19 = _0x465abf);
        _0x174360[_0x56de19] = _0x33171b[_0x465abf];
      });
      var _0x5284b0 = this && this.__setModuleDefault || (Object.create ? function (_0x3d4bca, _0x46d008) {
        Object.defineProperty(_0x3d4bca, "default", {
          enumerable: true,
          value: _0x46d008
        });
      } : function (_0x339291, _0x53d7fd) {
        {
          _0x339291.default = _0x53d7fd;
        }
      });
      var _0x15647b = this && this.__importStar || function (_0x5e4fcd) {
        {
          if (_0x5e4fcd && _0x5e4fcd.__esModule) {
            return _0x5e4fcd;
          }
          var _0x1f5f56 = {};
          if (null != _0x5e4fcd) {
            for (var _0x3dfb94 in _0x5e4fcd) "default" !== _0x3dfb94 && {}.hasOwnProperty.call(_0x5e4fcd, _0x3dfb94) && _0x20a787(_0x1f5f56, _0x5e4fcd, _0x3dfb94);
          }
          _0x5284b0(_0x1f5f56, _0x5e4fcd);
          return _0x1f5f56;
        }
      };
      Object.defineProperty(_0x5f2e58, "__esModule", {
        value: true
      });
      _0x5f2e58.wasmCryptoService = _0x5f2e58.WasmCryptoService = undefined;
      const _0x34147f = _0x15647b(_0x495404(8057));
      class _0x136303 {
        constructor() {
          this.wasmModule = null;
          this.isInitialized = false;
        }
        static getInstance() {
          this.instance || (this.instance = new _0x136303());
          return this.instance;
        }
        async initialize() {
          if (!this.isInitialized || !this.wasmModule) {
            try {
              this.wasmModule = _0x34147f;
              this.isInitialized = true;
            } catch (_0x5ee4df) {
              throw Error("WASM 模块初始化失败: " + (_0x5ee4df instanceof Error ? _0x5ee4df.message : "未知错误"));
            }
          }
        }
        ensureInitialized() {
          if (!this.isInitialized || !this.wasmModule) {
            throw Error("WASM 模块未初始化，请先调用 initialize()。");
          }
        }
        async decryptMetadata(_0x588b0e, _0xdac01d, _0x307c9f, _0x5e6886) {
          this.ensureInitialized();
          try {
            return this.wasmModule.decrypt_metadata(_0x588b0e, _0xdac01d, _0x307c9f, _0x5e6886);
          } catch (_0x3ea786) {
            throw Error("元数据解密失败: " + (_0x3ea786 instanceof Error ? _0x3ea786.message : "未知错误"));
          }
        }
        async decryptPatchRules(_0x3d89b0, _0x315a62, _0x5246e0) {
          this.ensureInitialized();
          try {
            return this.wasmModule.decrypt_patch_rules(_0x3d89b0, _0x315a62, _0x5246e0);
          } catch (_0x47f07e) {
            throw Error("补丁规则解密失败: " + (_0x47f07e instanceof Error ? _0x47f07e.message : "未知错误"));
          }
        }
        async encryptLocalData(_0x483f65, _0x5ae9bc) {
          this.ensureInitialized();
          try {
            return this.wasmModule.encrypt_local_data(_0x483f65, _0x5ae9bc);
          } catch (_0x22ffeb) {
            {
              throw Error("本地数据加密失败: " + (_0x22ffeb instanceof Error ? _0x22ffeb.message : "未知错误"));
            }
          }
        }
        async decryptLocalData(_0x1b7674, _0xebb31e) {
          {
            this.ensureInitialized();
            try {
              {
                return this.wasmModule.decrypt_local_data(_0x1b7674, _0xebb31e);
              }
            } catch (_0x2a31be) {
              {
                throw Error("本地数据解密失败: " + (_0x2a31be instanceof Error ? _0x2a31be.message : "未知错误"));
              }
            }
          }
        }
        async getUrlHandlerPattern() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_url_handler_pattern();
          } catch (_0x37e0ba) {
            throw Error("获取 URL 处理器模式失败: " + (_0x37e0ba instanceof Error ? _0x37e0ba.message : "未知错误"));
          }
        }
        async getAuthScheme() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_auth_scheme();
          } catch (_0x362838) {
            throw Error("获取认证方案失败: " + (_0x362838 instanceof Error ? _0x362838.message : "未知错误"));
          }
        }
        async generateInjectionCode(_0x22e3a1, _0xe0d0f) {
          this.ensureInitialized();
          try {
            return this.wasmModule.generate_injection_code(_0x22e3a1, _0xe0d0f);
          } catch (_0x55bc5e) {
            throw Error("生成注入代码失败: " + (_0x55bc5e instanceof Error ? _0x55bc5e.message : "未知错误"));
          }
        }
        async buildAuthUrl(_0x56bd11, _0x47c721, _0x2d6b9a) {
          this.ensureInitialized();
          try {
            return this.wasmModule.build_auth_url(_0x56bd11, _0x47c721, _0x2d6b9a);
          } catch (_0x494582) {
            {
              throw Error("构建认证 URL 失败: " + (_0x494582 instanceof Error ? _0x494582.message : "未知错误"));
            }
          }
        }
        async getIsPurePattern() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_ispure_pattern();
          } catch (_0x5983c8) {
            throw Error("获取 isPure 模式失败: " + (_0x5983c8 instanceof Error ? _0x5983c8.message : "未知错误"));
          }
        }
        async getIsPureKeyword() {
          this.ensureInitialized();
          try {
            {
              return this.wasmModule.get_ispure_keyword();
            }
          } catch (_0x468e07) {
            {
              throw Error("获取 isPure 关键字失败: " + (_0x468e07 instanceof Error ? _0x468e07.message : "未知错误"));
            }
          }
        }
        async generateIsPureReplacement(_0x5590d5, _0xc2ad6e) {
          this.ensureInitialized();
          try {
            {
              return this.wasmModule.generate_ispure_replacement(_0x5590d5, _0xc2ad6e);
            }
          } catch (_0x351ba1) {
            throw Error("生成 isPure 替换代码失败: " + (_0x351ba1 instanceof Error ? _0x351ba1.message : "未知错误"));
          }
        }
        async getExtensionVerifyPattern() {
          {
            this.ensureInitialized();
            try {
              return this.wasmModule.get_extension_verify_pattern();
            } catch (_0x1d1215) {
              throw Error("获取扩展验证模式失败: " + (_0x1d1215 instanceof Error ? _0x1d1215.message : "未知错误"));
            }
          }
        }
        async getExtensionVerifyKeyword() {
          {
            this.ensureInitialized();
            try {
              return this.wasmModule.get_extension_verify_keyword();
            } catch (_0x451a39) {
              throw Error("获取扩展验证关键字失败: " + (_0x451a39 instanceof Error ? _0x451a39.message : "未知错误"));
            }
          }
        }
        async generateExtensionVerifyReplacement(_0x301df6) {
          this.ensureInitialized();
          try {
            return this.wasmModule.generate_extension_verify_replacement(_0x301df6);
          } catch (_0xcd43a7) {
            throw Error("生成扩展验证替换代码失败: " + (_0xcd43a7 instanceof Error ? _0xcd43a7.message : "未知错误"));
          }
        }
        async getAlwaysLocalPattern() {
          this.ensureInitialized();
          try {
            {
              return this.wasmModule.get_always_local_pattern();
            }
          } catch (_0x5b4ef3) {
            {
              throw Error("获取 always-local 模式失败: " + (_0x5b4ef3 instanceof Error ? _0x5b4ef3.message : "未知错误"));
            }
          }
        }
        async getAlwaysLocalKeyword() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_always_local_keyword();
          } catch (_0x15d1dc) {
            throw Error("获取 always-local 关键字失败: " + (_0x15d1dc instanceof Error ? _0x15d1dc.message : "未知错误"));
          }
        }
        async generateAlwaysLocalReplacement(_0x4d59da, _0x44d6b0, _0x5b8d1b, _0x4ea435, _0x17488a, _0x434994) {
          this.ensureInitialized();
          try {
            {
              return this.wasmModule.generate_always_local_replacement(_0x4d59da, _0x44d6b0, _0x5b8d1b, _0x4ea435, _0x17488a, _0x434994);
            }
          } catch (_0x12a5b6) {
            throw Error("生成 always-local 替换代码失败: " + (_0x12a5b6 instanceof Error ? _0x12a5b6.message : "未知错误"));
          }
        }
        async getH2Keyword() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_h2_keyword();
          } catch (_0x5c7028) {
            throw Error("获取 HTTP/2 补丁关键字失败: " + (_0x5c7028 instanceof Error ? _0x5c7028.message : "未知错误"));
          }
        }
        async getH2AuthorityPattern() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_h2_authority_pattern();
          } catch (_0x5186b8) {
            throw Error("获取 H2 authority 模式失败: " + (_0x5186b8 instanceof Error ? _0x5186b8.message : "未知错误"));
          }
        }
        async generateH2AuthorityReplacement(_0x138c2f) {
          this.ensureInitialized();
          try {
            return this.wasmModule.generate_h2_authority_replacement(_0x138c2f);
          } catch (_0x2be920) {
            {
              throw Error("生成 H2 authority 替换代码失败: " + (_0x2be920 instanceof Error ? _0x2be920.message : "未知错误"));
            }
          }
        }
        async getH2ConnectPattern() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_h2_connect_pattern();
          } catch (_0x57c783) {
            throw Error("获取 H2 connect 模式失败: " + (_0x57c783 instanceof Error ? _0x57c783.message : "未知错误"));
          }
        }
        async generateH2ConnectReplacement(_0xecd269, _0x3c793f, _0x5053c8) {
          this.ensureInitialized();
          try {
            return this.wasmModule.generate_h2_connect_replacement(_0xecd269, _0x3c793f, _0x5053c8);
          } catch (_0x10a7b6) {
            throw Error("生成 H2 connect 替换代码失败: " + (_0x10a7b6 instanceof Error ? _0x10a7b6.message : "未知错误"));
          }
        }
        async getH2OriginCheckPattern() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_h2_origin_check_pattern();
          } catch (_0x5100ef) {
            {
              throw Error("获取 H2 origin 检查模式失败: " + (_0x5100ef instanceof Error ? _0x5100ef.message : "未知错误"));
            }
          }
        }
        async generateH2OriginCheckReplacement() {
          this.ensureInitialized();
          try {
            return this.wasmModule.generate_h2_origin_check_replacement();
          } catch (_0xf9aa14) {
            throw Error("生成 H2 origin 检查替换代码失败: " + (_0xf9aa14 instanceof Error ? _0xf9aa14.message : "未知错误"));
          }
        }
        async getH2RequestPattern() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_h2_request_pattern();
          } catch (_0x1e3f49) {
            {
              throw Error("获取 H2 请求模式失败: " + (_0x1e3f49 instanceof Error ? _0x1e3f49.message : "未知错误"));
            }
          }
        }
        async generateH2RequestAuthReplacement(_0x44fdd3, _0x2a0d98, _0x2de04f, _0x3f34a2, _0x47a854, _0xebcc93, _0xf293e3, _0x20a65b) {
          this.ensureInitialized();
          try {
            {
              return this.wasmModule.generate_h2_request_auth_replacement(_0x44fdd3, _0x2a0d98, _0x2de04f, _0x3f34a2, _0x47a854, _0xebcc93, _0xf293e3, _0x20a65b);
            }
          } catch (_0x4ca5dd) {
            {
              throw Error("生成 H2 请求认证替换代码失败: " + (_0x4ca5dd instanceof Error ? _0x4ca5dd.message : "未知错误"));
            }
          }
        }
        async getTabAllowedPattern() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_tab_allowed_pattern();
          } catch (_0x4ae511) {
            throw Error("获取 Tab 自动补全允许模式失败: " + (_0x4ae511 instanceof Error ? _0x4ae511.message : "未知错误"));
          }
        }
        async getTabKeyword() {
          this.ensureInitialized();
          try {
            return this.wasmModule.get_tab_keyword();
          } catch (_0x5a4d08) {
            {
              throw Error("获取 Tab 自动补全关键字失败: " + (_0x5a4d08 instanceof Error ? _0x5a4d08.message : "未知错误"));
            }
          }
        }
        async generateTabAllowedReplacement() {
          this.ensureInitialized();
          try {
            return this.wasmModule.generate_tab_allowed_replacement();
          } catch (_0x8dc9f7) {
            throw Error("生成 Tab 自动补全允许替换代码失败: " + (_0x8dc9f7 instanceof Error ? _0x8dc9f7.message : "未知错误"));
          }
        }
        reset() {
          {
            this.wasmModule = null;
            this.isInitialized = false;
          }
        }
      }
      _0x5f2e58.WasmCryptoService = _0x136303;
      _0x136303.instance = null;
      _0x5f2e58.wasmCryptoService = _0x136303.getInstance();
    },
    6151(_0x3c7c4e, _0x17fdfb, _0x32fcc9) {
      "use strict";

      var _0x571faf = this && this.__createBinding || (Object.create ? function (_0x55b7a3, _0x4e1602, _0x42954b, _0x10d25f) {
        undefined === _0x10d25f && (_0x10d25f = _0x42954b);
        var _0xd9b065 = Object.getOwnPropertyDescriptor(_0x4e1602, _0x42954b);
        _0xd9b065 && !("get" in _0xd9b065 ? !_0x4e1602.__esModule : _0xd9b065.writable || _0xd9b065.configurable) || (_0xd9b065 = {
          enumerable: true,
          get() {
            return _0x4e1602[_0x42954b];
          }
        });
        Object.defineProperty(_0x55b7a3, _0x10d25f, _0xd9b065);
      } : function (_0x1d79e5, _0xcbdc69, _0x197513, _0x115b5e) {
        undefined === _0x115b5e && (_0x115b5e = _0x197513);
        _0x1d79e5[_0x115b5e] = _0xcbdc69[_0x197513];
      });
      var _0x124cde = this && this.__setModuleDefault || (Object.create ? function (_0x404133, _0x3dbfb2) {
        Object.defineProperty(_0x404133, "default", {
          enumerable: true,
          value: _0x3dbfb2
        });
      } : function (_0xb88d69, _0x68c60c) {
        _0xb88d69.default = _0x68c60c;
      });
      var _0x1c4a21 = this && this.__importStar || function (_0x4550ed) {
        if (_0x4550ed && _0x4550ed.__esModule) {
          return _0x4550ed;
        }
        var _0x33105d = {};
        if (null != _0x4550ed) {
          for (var _0x4f6b9c in _0x4550ed) "default" !== _0x4f6b9c && {}.hasOwnProperty.call(_0x4550ed, _0x4f6b9c) && _0x571faf(_0x33105d, _0x4550ed, _0x4f6b9c);
        }
        _0x124cde(_0x33105d, _0x4550ed);
        return _0x33105d;
      };
      Object.defineProperty(_0x17fdfb, "__esModule", {
        value: true
      });
      _0x17fdfb.decryptMetadata = undefined;
      const _0x462b8c = _0x1c4a21(_0x32fcc9(8057));
      _0x17fdfb.decryptMetadata = function (_0x317738, _0x2ad4dd, _0x24fe3d, _0x556b2a) {
        try {
          const _0x11cc2c = _0x462b8c.decrypt_metadata(_0x317738, _0x2ad4dd, _0x24fe3d, _0x556b2a);
          return JSON.parse(_0x11cc2c);
        } catch (_0x4219ab) {
          {
            throw Error("元数据解密失败: " + (_0x4219ab instanceof Error ? _0x4219ab.message : "未知错误"));
          }
        }
      };
    },
    7811(_0x2341ed, _0x498260, _0x473717) {
      "use strict";

      var _0x1b8557 = this && this.__createBinding || (Object.create ? function (_0x67728d, _0x423aa6, _0x53c631, _0x4a3028) {
        undefined === _0x4a3028 && (_0x4a3028 = _0x53c631);
        var _0x5b2b68 = Object.getOwnPropertyDescriptor(_0x423aa6, _0x53c631);
        _0x5b2b68 && !("get" in _0x5b2b68 ? !_0x423aa6.__esModule : _0x5b2b68.writable || _0x5b2b68.configurable) || (_0x5b2b68 = {
          enumerable: true,
          get() {
            {
              return _0x423aa6[_0x53c631];
            }
          }
        });
        Object.defineProperty(_0x67728d, _0x4a3028, _0x5b2b68);
      } : function (_0x57e435, _0x53ceb6, _0x1581c4, _0x284abd) {
        undefined === _0x284abd && (_0x284abd = _0x1581c4);
        _0x57e435[_0x284abd] = _0x53ceb6[_0x1581c4];
      });
      var _0x1831aa = this && this.__setModuleDefault || (Object.create ? function (_0x1f930d, _0x463c56) {
        Object.defineProperty(_0x1f930d, "default", {
          enumerable: true,
          value: _0x463c56
        });
      } : function (_0x5eb511, _0x352a32) {
        {
          _0x5eb511.default = _0x352a32;
        }
      });
      var _0x244e6a = this && this.__importStar || function (_0x42d9e0) {
        if (_0x42d9e0 && _0x42d9e0.__esModule) {
          return _0x42d9e0;
        }
        var _0x239194 = {};
        if (null != _0x42d9e0) {
          for (var _0x7c4094 in _0x42d9e0) "default" !== _0x7c4094 && {}.hasOwnProperty.call(_0x42d9e0, _0x7c4094) && _0x1b8557(_0x239194, _0x42d9e0, _0x7c4094);
        }
        _0x1831aa(_0x239194, _0x42d9e0);
        return _0x239194;
      };
      Object.defineProperty(_0x498260, "__esModule", {
        value: true
      });
      _0x498260.getSimplifiedVersion = _0x498260.getCursorVersion = undefined;
      const _0x47a413 = _0x244e6a(_0x473717(1398));
      const _0x4815d6 = _0x473717(9896);
      const _0x3d3f37 = _0x473717(6928);
      _0x498260.getCursorVersion = function () {
        {
          try {
            {
              const _0x189629 = _0x47a413.env.appRoot;
              if (_0x189629) {
                const _0x46c80f = (0, _0x3d3f37.join)(_0x189629, "package.json");
                if ((0, _0x4815d6.existsSync)(_0x46c80f)) {
                  const _0x11faef = JSON.parse((0, _0x4815d6.readFileSync)(_0x46c80f, "utf8"));
                  if (_0x11faef.version) {
                    return _0x11faef.version;
                  }
                }
              }
              return null;
            }
          } catch (_0x84db40) {
            {
              return null;
            }
          }
        }
      };
      _0x498260.getSimplifiedVersion = function (_0x35390a) {
        try {
          const _0x48ec24 = _0x35390a.split(".");
          return 2 > _0x48ec24.length ? _0x35390a : _0x48ec24[0] + "." + _0x48ec24[1];
        } catch (_0xe38e7f) {
          {
            return _0x35390a;
          }
        }
      };
    },
    2940(_0xace89c, _0x4f9b02, _0x1364cb) {
      "use strict";

      _0x1364cb.r(_0x4f9b02);
      _0x1364cb.d(_0x4f9b02, {
        NIL() {
          {
            return _0x38e5dc;
          }
        },
        parse() {
          return _0x685e93;
        },
        stringify() {
          return _0x39a3ae;
        },
        v1() {
          return _0xf80139;
        },
        v3() {
          return _0x253036;
        },
        v4() {
          return _0x2e52f6;
        },
        v5() {
          return _0x3e082b;
        },
        validate() {
          return _0xc31197;
        },
        version() {
          return _0x49eab4;
        }
      });
      var _0x53c224 = _0x1364cb(6982);
      var _0x441720 = _0x1364cb.n(_0x53c224);
      const _0x4a947c = new Uint8Array(256);
      let _0x369abe = _0x4a947c.length;
      function _0x31144d() {
        _0x369abe > _0x4a947c.length - 16 && (_0x441720().randomFillSync(_0x4a947c), _0x369abe = 0);
        return _0x4a947c.slice(_0x369abe, _0x369abe += 16);
      }
      const _0x146988 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const _0xc31197 = function (_0x417f00) {
        return "string" == typeof _0x417f00 && _0x146988.test(_0x417f00);
      };
      const _0x598a81 = [];
      for (let _0x113741 = 0; 256 > _0x113741; ++_0x113741) {
        _0x598a81.push((_0x113741 + 256).toString(16).slice(1));
      }
      function _0x5bdadc(_0x15b532, _0x40b34f = 0) {
        return (_0x598a81[_0x15b532[_0x40b34f + 0]] + _0x598a81[_0x15b532[_0x40b34f + 1]] + _0x598a81[_0x15b532[_0x40b34f + 2]] + _0x598a81[_0x15b532[_0x40b34f + 3]] + "-" + _0x598a81[_0x15b532[_0x40b34f + 4]] + _0x598a81[_0x15b532[_0x40b34f + 5]] + "-" + _0x598a81[_0x15b532[_0x40b34f + 6]] + _0x598a81[_0x15b532[_0x40b34f + 7]] + "-" + _0x598a81[_0x15b532[_0x40b34f + 8]] + _0x598a81[_0x15b532[_0x40b34f + 9]] + "-" + _0x598a81[_0x15b532[_0x40b34f + 10]] + _0x598a81[_0x15b532[_0x40b34f + 11]] + _0x598a81[_0x15b532[_0x40b34f + 12]] + _0x598a81[_0x15b532[_0x40b34f + 13]] + _0x598a81[_0x15b532[_0x40b34f + 14]] + _0x598a81[_0x15b532[_0x40b34f + 15]]).toLowerCase();
      }
      const _0x39a3ae = function (_0x4968b9, _0xf01fde = 0) {
        const _0x55dd36 = _0x5bdadc(_0x4968b9, _0xf01fde);
        if (!_0xc31197(_0x55dd36)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return _0x55dd36;
      };
      let _0x54d865;
      let _0x1a99cc;
      let _0x189de8 = 0;
      let _0x348878 = 0;
      const _0xf80139 = function (_0x8a528d, _0x9795cd, _0x23c08a) {
        let _0x31579b = _0x9795cd && _0x23c08a || 0;
        const _0x361d1c = _0x9795cd || Array(16);
        let _0xb174b6 = (_0x8a528d = _0x8a528d || {}).node || _0x54d865;
        let _0x11dbe5 = undefined !== _0x8a528d.clockseq ? _0x8a528d.clockseq : _0x1a99cc;
        if (null == _0xb174b6 || null == _0x11dbe5) {
          const _0x31e49b = _0x8a528d.random || (_0x8a528d.rng || _0x31144d)();
          null == _0xb174b6 && (_0xb174b6 = _0x54d865 = [1 | _0x31e49b[0], _0x31e49b[1], _0x31e49b[2], _0x31e49b[3], _0x31e49b[4], _0x31e49b[5]]);
          null == _0x11dbe5 && (_0x11dbe5 = _0x1a99cc = 16383 & (_0x31e49b[6] << 8 | _0x31e49b[7]));
        }
        let _0x511e67 = undefined !== _0x8a528d.msecs ? _0x8a528d.msecs : Date.now();
        let _0x438dc0 = undefined !== _0x8a528d.nsecs ? _0x8a528d.nsecs : _0x348878 + 1;
        const _0x4be8b4 = _0x511e67 - _0x189de8 + (_0x438dc0 - _0x348878) / 10000;
        if (0 > _0x4be8b4 && undefined === _0x8a528d.clockseq && (_0x11dbe5 = _0x11dbe5 + 1 & 16383), (0 > _0x4be8b4 || _0x511e67 > _0x189de8) && undefined === _0x8a528d.nsecs && (_0x438dc0 = 0), _0x438dc0 >= 10000) {
          throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _0x189de8 = _0x511e67;
        _0x348878 = _0x438dc0;
        _0x1a99cc = _0x11dbe5;
        _0x511e67 += 12219292800000;
        const _0x3557d8 = (10000 * (268435455 & _0x511e67) + _0x438dc0) % 4294967296;
        _0x361d1c[_0x31579b++] = _0x3557d8 >>> 24 & 255;
        _0x361d1c[_0x31579b++] = _0x3557d8 >>> 16 & 255;
        _0x361d1c[_0x31579b++] = _0x3557d8 >>> 8 & 255;
        _0x361d1c[_0x31579b++] = 255 & _0x3557d8;
        const _0x17c9c0 = _0x511e67 / 4294967296 * 10000 & 268435455;
        _0x361d1c[_0x31579b++] = _0x17c9c0 >>> 8 & 255;
        _0x361d1c[_0x31579b++] = 255 & _0x17c9c0;
        _0x361d1c[_0x31579b++] = _0x17c9c0 >>> 24 & 15 | 16;
        _0x361d1c[_0x31579b++] = _0x17c9c0 >>> 16 & 255;
        _0x361d1c[_0x31579b++] = _0x11dbe5 >>> 8 | 128;
        _0x361d1c[_0x31579b++] = 255 & _0x11dbe5;
        for (let _0xaa1e02 = 0; 6 > _0xaa1e02; ++_0xaa1e02) {
          _0x361d1c[_0x31579b + _0xaa1e02] = _0xb174b6[_0xaa1e02];
        }
        return _0x9795cd || _0x5bdadc(_0x361d1c);
      };
      const _0x685e93 = function (_0x475b48) {
        if (!_0xc31197(_0x475b48)) {
          throw TypeError("Invalid UUID");
        }
        let _0x4098e2;
        const _0x1382de = new Uint8Array(16);
        _0x1382de[0] = (_0x4098e2 = parseInt(_0x475b48.slice(0, 8), 16)) >>> 24;
        _0x1382de[1] = _0x4098e2 >>> 16 & 255;
        _0x1382de[2] = _0x4098e2 >>> 8 & 255;
        _0x1382de[3] = 255 & _0x4098e2;
        _0x1382de[4] = (_0x4098e2 = parseInt(_0x475b48.slice(9, 13), 16)) >>> 8;
        _0x1382de[5] = 255 & _0x4098e2;
        _0x1382de[6] = (_0x4098e2 = parseInt(_0x475b48.slice(14, 18), 16)) >>> 8;
        _0x1382de[7] = 255 & _0x4098e2;
        _0x1382de[8] = (_0x4098e2 = parseInt(_0x475b48.slice(19, 23), 16)) >>> 8;
        _0x1382de[9] = 255 & _0x4098e2;
        _0x1382de[10] = (_0x4098e2 = parseInt(_0x475b48.slice(24, 36), 16)) / 1099511627776 & 255;
        _0x1382de[11] = _0x4098e2 / 4294967296 & 255;
        _0x1382de[12] = _0x4098e2 >>> 24 & 255;
        _0x1382de[13] = _0x4098e2 >>> 16 & 255;
        _0x1382de[14] = _0x4098e2 >>> 8 & 255;
        _0x1382de[15] = 255 & _0x4098e2;
        return _0x1382de;
      };
      function _0x4a46f4(_0x4a9bc5, _0x3e8b2f, _0x2b58e4) {
        {
          function _0xb00f5e(_0x4df4b4, _0x4e266c, _0x3fd192, _0x291fdc) {
            var _0x2df5ea;
            if ("string" == typeof _0x4df4b4 && (_0x4df4b4 = function (_0x1a335f) {
              _0x1a335f = unescape(encodeURIComponent(_0x1a335f));
              const _0x22a41e = [];
              for (let _0x5039be = 0; _0x5039be < _0x1a335f.length; ++_0x5039be) {
                _0x22a41e.push(_0x1a335f.charCodeAt(_0x5039be));
              }
              return _0x22a41e;
            }(_0x4df4b4)), "string" == typeof _0x4e266c && (_0x4e266c = _0x685e93(_0x4e266c)), 16 !== (null === (_0x2df5ea = _0x4e266c) || undefined === _0x2df5ea ? undefined : _0x2df5ea.length)) {
              throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            }
            let _0xd4862d = new Uint8Array(16 + _0x4df4b4.length);
            if (_0xd4862d.set(_0x4e266c), _0xd4862d.set(_0x4df4b4, _0x4e266c.length), _0xd4862d = _0x2b58e4(_0xd4862d), _0xd4862d[6] = 15 & _0xd4862d[6] | _0x3e8b2f, _0xd4862d[8] = 63 & _0xd4862d[8] | 128, _0x3fd192) {
              _0x291fdc = _0x291fdc || 0;
              for (let _0x5dbc15 = 0; 16 > _0x5dbc15; ++_0x5dbc15) {
                _0x3fd192[_0x291fdc + _0x5dbc15] = _0xd4862d[_0x5dbc15];
              }
              return _0x3fd192;
            }
            return _0x5bdadc(_0xd4862d);
          }
          try {
            _0xb00f5e.name = _0x4a9bc5;
          } catch (_0x14bf4b) {}
          _0xb00f5e.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
          _0xb00f5e.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
          return _0xb00f5e;
        }
      }
      const _0x253036 = _0x4a46f4("v3", 48, function (_0x186fe9) {
        {
          Array.isArray(_0x186fe9) ? _0x186fe9 = Buffer.from(_0x186fe9) : "string" == typeof _0x186fe9 && (_0x186fe9 = Buffer.from(_0x186fe9, "utf8"));
          return _0x441720().createHash("md5").update(_0x186fe9).digest();
        }
      });
      const _0x2e52f6 = function (_0x4781c0, _0x168301, _0x35d65a) {
        if (_0x441720().randomUUID && !_0x168301 && !_0x4781c0) {
          return _0x441720().randomUUID;
        }
        const _0x250d8f = (_0x4781c0 = _0x4781c0 || {}).random || (_0x4781c0.rng || _0x31144d)();
        if (_0x250d8f[6] = 15 & _0x250d8f[6] | 64, _0x250d8f[8] = 63 & _0x250d8f[8] | 128, _0x168301) {
          {
            _0x35d65a = _0x35d65a || 0;
            for (let _0x33b73c = 0; 16 > _0x33b73c; ++_0x33b73c) {
              _0x168301[_0x35d65a + _0x33b73c] = _0x250d8f[_0x33b73c];
            }
            return _0x168301;
          }
        }
        return _0x5bdadc(_0x250d8f);
      };
      const _0x3e082b = _0x4a46f4("v5", 80, function (_0x107d29) {
        {
          Array.isArray(_0x107d29) ? _0x107d29 = Buffer.from(_0x107d29) : "string" == typeof _0x107d29 && (_0x107d29 = Buffer.from(_0x107d29, "utf8"));
          return _0x441720().createHash("sha1").update(_0x107d29).digest();
        }
      });
      const _0x38e5dc = "00000000-0000-0000-0000-000000000000";
      const _0x49eab4 = function (_0x318284) {
        if (!_0xc31197(_0x318284)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(_0x318284.slice(14, 15), 16);
      };
    },
    8057(_0x1bbea3, _0x10fb14, _0x4fa81d) {
      _0x1bbea3 = _0x4fa81d.nmd(_0x1bbea3);
      let _0x12c9e1 = {
        __wbindgen_placeholder__: _0x1bbea3.exports
      };
      let _0x89a872 = null;
      function _0x365b11() {
        null !== _0x89a872 && 0 !== _0x89a872.byteLength || (_0x89a872 = new Uint8Array(_0x3fe60b.memory.buffer));
        return _0x89a872;
      }
      let _0x3d1b37 = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      function _0x3d128a(_0x37b99c, _0x1feb11) {
        {
          return function (_0x2f371c, _0x16db21) {
            return _0x3d1b37.decode(_0x365b11().subarray(_0x2f371c, _0x2f371c + _0x16db21));
          }(_0x37b99c >>>= 0, _0x1feb11);
        }
      }
      function _0x3f66d0(_0x3f2cef) {
        const _0x42f789 = _0x3fe60b.__externref_table_alloc();
        _0x3fe60b.__wbindgen_externrefs.set(_0x42f789, _0x3f2cef);
        return _0x42f789;
      }
      function _0x2599ae(_0x4ea6af, _0x513234) {
        try {
          return _0x4ea6af.apply(this, _0x513234);
        } catch (_0x4d3dc5) {
          const _0x31b314 = _0x3f66d0(_0x4d3dc5);
          _0x3fe60b.__wbindgen_exn_store(_0x31b314);
        }
      }
      function _0x2c8d25(_0x233b29, _0x1f2a9b) {
        {
          _0x233b29 >>>= 0;
          return _0x365b11().subarray(_0x233b29 / 1, _0x233b29 / 1 + _0x1f2a9b);
        }
      }
      function _0x3527de(_0x19d251) {
        return null == _0x19d251;
      }
      _0x3d1b37.decode();
      _0x10fb14.get_tab_allowed_pattern = function () {
        let _0x199bed;
        let _0x58eadd;
        try {
          const _0x3cda8e = _0x3fe60b.get_tab_allowed_pattern();
          _0x199bed = _0x3cda8e[0];
          _0x58eadd = _0x3cda8e[1];
          return _0x3d128a(_0x3cda8e[0], _0x3cda8e[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x199bed, _0x58eadd, 1);
        }
      };
      let _0xf74aad = 0;
      const _0x17453d = new TextEncoder();
      function _0x51cd85(_0x5cf232, _0x22a541, _0x20ed7d) {
        if (undefined === _0x20ed7d) {
          const _0x4f87a7 = _0x17453d.encode(_0x5cf232);
          const _0x3675ce = _0x22a541(_0x4f87a7.length, 1) >>> 0;
          _0x365b11().subarray(_0x3675ce, _0x3675ce + _0x4f87a7.length).set(_0x4f87a7);
          _0xf74aad = _0x4f87a7.length;
          return _0x3675ce;
        }
        let _0x25e04b = _0x5cf232.length;
        let _0x15f66f = _0x22a541(_0x25e04b, 1) >>> 0;
        const _0x50bce5 = _0x365b11();
        let _0x573862 = 0;
        for (; _0x25e04b > _0x573862; _0x573862++) {
          {
            const _0x2ae47c = _0x5cf232.charCodeAt(_0x573862);
            if (_0x2ae47c > 127) {
              break;
            }
            _0x50bce5[_0x15f66f + _0x573862] = _0x2ae47c;
          }
        }
        if (_0x573862 !== _0x25e04b) {
          {
            0 !== _0x573862 && (_0x5cf232 = _0x5cf232.slice(_0x573862));
            _0x15f66f = _0x20ed7d(_0x15f66f, _0x25e04b, _0x25e04b = _0x573862 + 3 * _0x5cf232.length, 1) >>> 0;
            const _0x3ce26d = _0x365b11().subarray(_0x15f66f + _0x573862, _0x15f66f + _0x25e04b);
            _0x573862 += _0x17453d.encodeInto(_0x5cf232, _0x3ce26d).written;
            _0x15f66f = _0x20ed7d(_0x15f66f, _0x25e04b, _0x573862, 1) >>> 0;
          }
        }
        _0xf74aad = _0x573862;
        return _0x15f66f;
      }
      function _0x477805(_0x5333ce) {
        const _0x1943d1 = _0x3fe60b.__wbindgen_externrefs.get(_0x5333ce);
        _0x3fe60b.__externref_table_dealloc(_0x5333ce);
        return _0x1943d1;
      }
      "encodeInto" in _0x17453d || (_0x17453d.encodeInto = function (_0x170065, _0x4d526c) {
        {
          const _0x4f1063 = _0x17453d.encode(_0x170065);
          _0x4d526c.set(_0x4f1063);
          return {
            read: _0x170065.length,
            written: _0x4f1063.length
          };
        }
      });
      _0x10fb14.generate_h2_authority_replacement = function (_0x106e13) {
        {
          let _0x2f3600;
          let _0x48442f;
          try {
            const _0x46a54b = _0x51cd85(_0x106e13, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x13c69a = _0xf74aad;
            const _0x2befe4 = _0x3fe60b.generate_h2_authority_replacement(_0x46a54b, _0x13c69a);
            _0x2f3600 = _0x2befe4[0];
            _0x48442f = _0x2befe4[1];
            return _0x3d128a(_0x2befe4[0], _0x2befe4[1]);
          } finally {
            _0x3fe60b.__wbindgen_free(_0x2f3600, _0x48442f, 1);
          }
        }
      };
      _0x10fb14.get_h2_origin_check_pattern = function () {
        let _0x4fefab;
        let _0x5539e7;
        try {
          const _0x40a695 = _0x3fe60b.get_h2_origin_check_pattern();
          _0x4fefab = _0x40a695[0];
          _0x5539e7 = _0x40a695[1];
          return _0x3d128a(_0x40a695[0], _0x40a695[1]);
        } finally {
          {
            _0x3fe60b.__wbindgen_free(_0x4fefab, _0x5539e7, 1);
          }
        }
      };
      _0x10fb14.get_ispure_keyword = function () {
        let _0x3ce780;
        let _0x432939;
        try {
          {
            const _0x21c6f4 = _0x3fe60b.get_ispure_keyword();
            _0x3ce780 = _0x21c6f4[0];
            _0x432939 = _0x21c6f4[1];
            return _0x3d128a(_0x21c6f4[0], _0x21c6f4[1]);
          }
        } finally {
          _0x3fe60b.__wbindgen_free(_0x3ce780, _0x432939, 1);
        }
      };
      _0x10fb14.get_auth_scheme = function () {
        let _0x215b24;
        let _0xa35011;
        try {
          const _0x3e4eff = _0x3fe60b.get_auth_scheme();
          _0x215b24 = _0x3e4eff[0];
          _0xa35011 = _0x3e4eff[1];
          return _0x3d128a(_0x3e4eff[0], _0x3e4eff[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x215b24, _0xa35011, 1);
        }
      };
      _0x10fb14.get_always_local_keyword = function () {
        let _0x2e6134;
        let _0x2e977a;
        try {
          const _0x556947 = _0x3fe60b.get_always_local_keyword();
          _0x2e6134 = _0x556947[0];
          _0x2e977a = _0x556947[1];
          return _0x3d128a(_0x556947[0], _0x556947[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x2e6134, _0x2e977a, 1);
        }
      };
      _0x10fb14.build_auth_url = function (_0x172f4c, _0x7d02d6, _0x3878e1) {
        let _0x1c5f10;
        let _0x20c372;
        try {
          const _0x1c45d8 = _0x51cd85(_0x172f4c, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x385e22 = _0xf74aad;
          const _0x3d6da5 = _0x51cd85(_0x7d02d6, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x1c644c = _0xf74aad;
          const _0x22f76c = _0x51cd85(_0x3878e1, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x526ed1 = _0xf74aad;
          const _0x27f825 = _0x3fe60b.build_auth_url(_0x1c45d8, _0x385e22, _0x3d6da5, _0x1c644c, _0x22f76c, _0x526ed1);
          _0x1c5f10 = _0x27f825[0];
          _0x20c372 = _0x27f825[1];
          return _0x3d128a(_0x27f825[0], _0x27f825[1]);
        } finally {
          {
            _0x3fe60b.__wbindgen_free(_0x1c5f10, _0x20c372, 1);
          }
        }
      };
      _0x10fb14.get_extension_verify_keyword = function () {
        {
          let _0xbfdad3;
          let _0x3aedfb;
          try {
            {
              const _0x34c8ec = _0x3fe60b.get_extension_verify_keyword();
              _0xbfdad3 = _0x34c8ec[0];
              _0x3aedfb = _0x34c8ec[1];
              return _0x3d128a(_0x34c8ec[0], _0x34c8ec[1]);
            }
          } finally {
            _0x3fe60b.__wbindgen_free(_0xbfdad3, _0x3aedfb, 1);
          }
        }
      };
      _0x10fb14.decrypt_metadata = function (_0x5e8534, _0x3cd6ea, _0x358053, _0x4ebded) {
        let _0x552652;
        let _0x44d7b6;
        try {
          const _0x81b356 = _0x51cd85(_0x5e8534, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x37b1b6 = _0xf74aad;
          const _0x51f50f = _0x51cd85(_0x3cd6ea, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x3a0aa6 = _0xf74aad;
          const _0x3dee76 = _0x51cd85(_0x358053, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x501105 = _0xf74aad;
          var _0x4448c8 = _0x3527de(_0x4ebded) ? 0 : _0x51cd85(_0x4ebded, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          var _0x338b96 = _0xf74aad;
          const _0x469d8f = _0x3fe60b.decrypt_metadata(_0x81b356, _0x37b1b6, _0x51f50f, _0x3a0aa6, _0x3dee76, _0x501105, _0x4448c8, _0x338b96);
          var _0x275a39 = _0x469d8f[0];
          var _0x23686d = _0x469d8f[1];
          if (_0x469d8f[3]) {
            throw _0x275a39 = 0, _0x23686d = 0, _0x477805(_0x469d8f[2]);
          }
          _0x552652 = _0x275a39;
          _0x44d7b6 = _0x23686d;
          return _0x3d128a(_0x275a39, _0x23686d);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x552652, _0x44d7b6, 1);
        }
      };
      _0x10fb14.get_url_handler_pattern = function () {
        {
          let _0x3ad025;
          let _0x3ba125;
          try {
            {
              const _0x3af4a8 = _0x3fe60b.get_url_handler_pattern();
              _0x3ad025 = _0x3af4a8[0];
              _0x3ba125 = _0x3af4a8[1];
              return _0x3d128a(_0x3af4a8[0], _0x3af4a8[1]);
            }
          } finally {
            _0x3fe60b.__wbindgen_free(_0x3ad025, _0x3ba125, 1);
          }
        }
      };
      _0x10fb14.get_h2_authority_pattern = function () {
        let _0x1fe6f8;
        let _0x163354;
        try {
          const _0x3f4cca = _0x3fe60b.get_h2_authority_pattern();
          _0x1fe6f8 = _0x3f4cca[0];
          _0x163354 = _0x3f4cca[1];
          return _0x3d128a(_0x3f4cca[0], _0x3f4cca[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x1fe6f8, _0x163354, 1);
        }
      };
      _0x10fb14.get_h2_request_pattern = function () {
        let _0xc4ade5;
        let _0x2354a9;
        try {
          const _0x3b454d = _0x3fe60b.get_h2_request_pattern();
          _0xc4ade5 = _0x3b454d[0];
          _0x2354a9 = _0x3b454d[1];
          return _0x3d128a(_0x3b454d[0], _0x3b454d[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0xc4ade5, _0x2354a9, 1);
        }
      };
      _0x10fb14.get_h2_keyword = function () {
        let _0x3165e5;
        let _0x3559d9;
        try {
          const _0x5a9152 = _0x3fe60b.get_h2_keyword();
          _0x3165e5 = _0x5a9152[0];
          _0x3559d9 = _0x5a9152[1];
          return _0x3d128a(_0x5a9152[0], _0x5a9152[1]);
        } finally {
          {
            _0x3fe60b.__wbindgen_free(_0x3165e5, _0x3559d9, 1);
          }
        }
      };
      _0x10fb14.generate_ispure_replacement = function (_0x3f3044, _0x237bab) {
        {
          let _0x49cb51;
          let _0x336fad;
          try {
            {
              const _0x3c7830 = _0x51cd85(_0x3f3044, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
              const _0x4f38a6 = _0xf74aad;
              const _0x86a06e = _0x51cd85(_0x237bab, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
              const _0x3d7105 = _0xf74aad;
              const _0x18cc21 = _0x3fe60b.generate_ispure_replacement(_0x3c7830, _0x4f38a6, _0x86a06e, _0x3d7105);
              _0x49cb51 = _0x18cc21[0];
              _0x336fad = _0x18cc21[1];
              return _0x3d128a(_0x18cc21[0], _0x18cc21[1]);
            }
          } finally {
            _0x3fe60b.__wbindgen_free(_0x49cb51, _0x336fad, 1);
          }
        }
      };
      _0x10fb14.generate_injection_code = function (_0x490756, _0xe24a01) {
        let _0x179ed9;
        let _0x4672c2;
        try {
          const _0x53c10d = _0x51cd85(_0x490756, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x192fb1 = _0xf74aad;
          const _0x4da014 = _0x51cd85(_0xe24a01, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x5f1098 = _0xf74aad;
          const _0x515876 = _0x3fe60b.generate_injection_code(_0x53c10d, _0x192fb1, _0x4da014, _0x5f1098);
          _0x179ed9 = _0x515876[0];
          _0x4672c2 = _0x515876[1];
          return _0x3d128a(_0x515876[0], _0x515876[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x179ed9, _0x4672c2, 1);
        }
      };
      _0x10fb14.get_always_local_pattern = function () {
        let _0x399550;
        let _0x58f4e6;
        try {
          const _0x5ec58a = _0x3fe60b.get_always_local_pattern();
          _0x399550 = _0x5ec58a[0];
          _0x58f4e6 = _0x5ec58a[1];
          return _0x3d128a(_0x5ec58a[0], _0x5ec58a[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x399550, _0x58f4e6, 1);
        }
      };
      _0x10fb14.decrypt_patch_rules = function (_0x3973c8, _0x422d6b, _0x9a9b7e) {
        let _0x15feae;
        let _0x5b0d11;
        try {
          {
            const _0x45788f = _0x51cd85(_0x3973c8, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0xbd0ff4 = _0xf74aad;
            const _0x27f681 = _0x51cd85(_0x422d6b, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x41ed87 = _0xf74aad;
            var _0x19edfe = _0x3527de(_0x9a9b7e) ? 0 : _0x51cd85(_0x9a9b7e, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            var _0x180966 = _0xf74aad;
            const _0x79035f = _0x3fe60b.decrypt_patch_rules(_0x45788f, _0xbd0ff4, _0x27f681, _0x41ed87, _0x19edfe, _0x180966);
            var _0x15e614 = _0x79035f[0];
            var _0x38c90a = _0x79035f[1];
            if (_0x79035f[3]) {
              throw _0x15e614 = 0, _0x38c90a = 0, _0x477805(_0x79035f[2]);
            }
            _0x15feae = _0x15e614;
            _0x5b0d11 = _0x38c90a;
            return _0x3d128a(_0x15e614, _0x38c90a);
          }
        } finally {
          _0x3fe60b.__wbindgen_free(_0x15feae, _0x5b0d11, 1);
        }
      };
      _0x10fb14.generate_always_local_replacement = function (_0x2805f9, _0x1b5840, _0x828eee, _0x3a3954, _0x15d1c1, _0xe0abb) {
        let _0x59effb;
        let _0x5a17be;
        try {
          const _0x4bba7a = _0x51cd85(_0x2805f9, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x494d58 = _0xf74aad;
          const _0x41d45d = _0x51cd85(_0x1b5840, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x10d02c = _0xf74aad;
          const _0xb370c0 = _0x51cd85(_0x828eee, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x425004 = _0xf74aad;
          const _0x13a651 = _0x51cd85(_0x3a3954, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x1de45a = _0xf74aad;
          const _0x503696 = _0x51cd85(_0x15d1c1, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x56a942 = _0xf74aad;
          const _0x18d314 = _0x51cd85(_0xe0abb, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
          const _0x5ae699 = _0xf74aad;
          const _0x312470 = _0x3fe60b.generate_always_local_replacement(_0x4bba7a, _0x494d58, _0x41d45d, _0x10d02c, _0xb370c0, _0x425004, _0x13a651, _0x1de45a, _0x503696, _0x56a942, _0x18d314, _0x5ae699);
          _0x59effb = _0x312470[0];
          _0x5a17be = _0x312470[1];
          return _0x3d128a(_0x312470[0], _0x312470[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x59effb, _0x5a17be, 1);
        }
      };
      _0x10fb14.get_h2_connect_pattern = function () {
        {
          let _0x60e0e9;
          let _0x3d5c16;
          try {
            const _0x5bfcb7 = _0x3fe60b.get_h2_connect_pattern();
            _0x60e0e9 = _0x5bfcb7[0];
            _0x3d5c16 = _0x5bfcb7[1];
            return _0x3d128a(_0x5bfcb7[0], _0x5bfcb7[1]);
          } finally {
            _0x3fe60b.__wbindgen_free(_0x60e0e9, _0x3d5c16, 1);
          }
        }
      };
      _0x10fb14.generate_h2_origin_check_replacement = function () {
        {
          let _0x44e17c;
          let _0x31de02;
          try {
            const _0x3ed081 = _0x3fe60b.generate_h2_origin_check_replacement();
            _0x44e17c = _0x3ed081[0];
            _0x31de02 = _0x3ed081[1];
            return _0x3d128a(_0x3ed081[0], _0x3ed081[1]);
          } finally {
            _0x3fe60b.__wbindgen_free(_0x44e17c, _0x31de02, 1);
          }
        }
      };
      _0x10fb14.decrypt_local_data = function (_0x82882e, _0x58ba8d) {
        let _0x2af18d;
        let _0x20a9f9;
        try {
          {
            const _0x36e257 = _0x51cd85(_0x82882e, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x425e5b = _0xf74aad;
            var _0x5ab8e9 = _0x3527de(_0x58ba8d) ? 0 : _0x51cd85(_0x58ba8d, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            var _0x1cb57b = _0xf74aad;
            const _0x3db078 = _0x3fe60b.decrypt_local_data(_0x36e257, _0x425e5b, _0x5ab8e9, _0x1cb57b);
            var _0x516afd = _0x3db078[0];
            var _0x6c293d = _0x3db078[1];
            if (_0x3db078[3]) {
              throw _0x516afd = 0, _0x6c293d = 0, _0x477805(_0x3db078[2]);
            }
            _0x2af18d = _0x516afd;
            _0x20a9f9 = _0x6c293d;
            return _0x3d128a(_0x516afd, _0x6c293d);
          }
        } finally {
          _0x3fe60b.__wbindgen_free(_0x2af18d, _0x20a9f9, 1);
        }
      };
      _0x10fb14.get_ispure_pattern = function () {
        {
          let _0x13857f;
          let _0x4b6bae;
          try {
            const _0x2dff4b = _0x3fe60b.get_ispure_pattern();
            _0x13857f = _0x2dff4b[0];
            _0x4b6bae = _0x2dff4b[1];
            return _0x3d128a(_0x2dff4b[0], _0x2dff4b[1]);
          } finally {
            _0x3fe60b.__wbindgen_free(_0x13857f, _0x4b6bae, 1);
          }
        }
      };
      _0x10fb14.generate_extension_verify_replacement = function (_0x5a3236) {
        {
          let _0x240a75;
          let _0xcc33fc;
          try {
            const _0x41dbe7 = _0x51cd85(_0x5a3236, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x42a4db = _0xf74aad;
            const _0xdb5525 = _0x3fe60b.generate_extension_verify_replacement(_0x41dbe7, _0x42a4db);
            _0x240a75 = _0xdb5525[0];
            _0xcc33fc = _0xdb5525[1];
            return _0x3d128a(_0xdb5525[0], _0xdb5525[1]);
          } finally {
            _0x3fe60b.__wbindgen_free(_0x240a75, _0xcc33fc, 1);
          }
        }
      };
      _0x10fb14.encrypt_local_data = function (_0x24be66, _0x48020e) {
        let _0x44cec4;
        let _0x5aa22a;
        try {
          {
            const _0x516bd9 = _0x51cd85(_0x24be66, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x3679b2 = _0xf74aad;
            var _0x5689a7 = _0x3527de(_0x48020e) ? 0 : _0x51cd85(_0x48020e, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            var _0x33d176 = _0xf74aad;
            const _0x539370 = _0x3fe60b.encrypt_local_data(_0x516bd9, _0x3679b2, _0x5689a7, _0x33d176);
            var _0x2a2494 = _0x539370[0];
            var _0x339200 = _0x539370[1];
            if (_0x539370[3]) {
              throw _0x2a2494 = 0, _0x339200 = 0, _0x477805(_0x539370[2]);
            }
            _0x44cec4 = _0x2a2494;
            _0x5aa22a = _0x339200;
            return _0x3d128a(_0x2a2494, _0x339200);
          }
        } finally {
          _0x3fe60b.__wbindgen_free(_0x44cec4, _0x5aa22a, 1);
        }
      };
      _0x10fb14.get_extension_verify_pattern = function () {
        let _0x304d60;
        let _0x5ba73d;
        try {
          {
            const _0x576e89 = _0x3fe60b.get_extension_verify_pattern();
            _0x304d60 = _0x576e89[0];
            _0x5ba73d = _0x576e89[1];
            return _0x3d128a(_0x576e89[0], _0x576e89[1]);
          }
        } finally {
          _0x3fe60b.__wbindgen_free(_0x304d60, _0x5ba73d, 1);
        }
      };
      _0x10fb14.generate_tab_allowed_replacement = function () {
        let _0x5eff54;
        let _0x2ac083;
        try {
          const _0x51495f = _0x3fe60b.generate_tab_allowed_replacement();
          _0x5eff54 = _0x51495f[0];
          _0x2ac083 = _0x51495f[1];
          return _0x3d128a(_0x51495f[0], _0x51495f[1]);
        } finally {
          _0x3fe60b.__wbindgen_free(_0x5eff54, _0x2ac083, 1);
        }
      };
      _0x10fb14.generate_h2_request_auth_replacement = function (_0x3d4714, _0x5bac1f, _0x4b09d8, _0x4feea2, _0x3426ed, _0x3e3d5b, _0x3e6ff0, _0x5a3b80) {
        let _0xa773d;
        let _0x14da41;
        try {
          {
            const _0xc18f80 = _0x51cd85(_0x3d4714, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x470c54 = _0xf74aad;
            const _0x5a0d89 = _0x51cd85(_0x5bac1f, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x4cf147 = _0xf74aad;
            const _0x509d34 = _0x51cd85(_0x4b09d8, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x5aafd1 = _0xf74aad;
            const _0x21dbe0 = _0x51cd85(_0x4feea2, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x29528c = _0xf74aad;
            const _0x270e4e = _0x51cd85(_0x3426ed, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x556ba6 = _0xf74aad;
            const _0x2cf1f8 = _0x51cd85(_0x3e3d5b, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x26f894 = _0xf74aad;
            const _0x192eca = _0x51cd85(_0x3e6ff0, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x3d0aba = _0xf74aad;
            const _0x42555c = _0x51cd85(_0x5a3b80, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x12e606 = _0xf74aad;
            const _0x3be309 = _0x3fe60b.generate_h2_request_auth_replacement(_0xc18f80, _0x470c54, _0x5a0d89, _0x4cf147, _0x509d34, _0x5aafd1, _0x21dbe0, _0x29528c, _0x270e4e, _0x556ba6, _0x2cf1f8, _0x26f894, _0x192eca, _0x3d0aba, _0x42555c, _0x12e606);
            _0xa773d = _0x3be309[0];
            _0x14da41 = _0x3be309[1];
            return _0x3d128a(_0x3be309[0], _0x3be309[1]);
          }
        } finally {
          _0x3fe60b.__wbindgen_free(_0xa773d, _0x14da41, 1);
        }
      };
      _0x10fb14.get_tab_keyword = function () {
        {
          let _0x3273ff;
          let _0x485143;
          try {
            {
              const _0x5c65c1 = _0x3fe60b.get_tab_keyword();
              _0x3273ff = _0x5c65c1[0];
              _0x485143 = _0x5c65c1[1];
              return _0x3d128a(_0x5c65c1[0], _0x5c65c1[1]);
            }
          } finally {
            _0x3fe60b.__wbindgen_free(_0x3273ff, _0x485143, 1);
          }
        }
      };
      _0x10fb14.generate_h2_connect_replacement = function (_0x2215f9, _0x284312, _0x26f798) {
        {
          let _0x1a2ca9;
          let _0x36eca1;
          try {
            const _0x551a1d = _0x51cd85(_0x2215f9, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x56c359 = _0xf74aad;
            const _0x229f50 = _0x51cd85(_0x284312, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x2b2cb3 = _0xf74aad;
            const _0x4cb12d = _0x51cd85(_0x26f798, _0x3fe60b.__wbindgen_malloc, _0x3fe60b.__wbindgen_realloc);
            const _0x3c401a = _0xf74aad;
            const _0x196e55 = _0x3fe60b.generate_h2_connect_replacement(_0x551a1d, _0x56c359, _0x229f50, _0x2b2cb3, _0x4cb12d, _0x3c401a);
            _0x1a2ca9 = _0x196e55[0];
            _0x36eca1 = _0x196e55[1];
            return _0x3d128a(_0x196e55[0], _0x196e55[1]);
          } finally {
            _0x3fe60b.__wbindgen_free(_0x1a2ca9, _0x36eca1, 1);
          }
        }
      };
      _0x10fb14.__wbg___wbindgen_is_function_ee8a6c5833c90377 = function (_0x472cb9) {
        return "function" == typeof _0x472cb9;
      };
      _0x10fb14.__wbg___wbindgen_is_object_c818261d21f283a4 = function (_0x50f845) {
        {
          return "object" == typeof _0x50f845 && null !== _0x50f845;
        }
      };
      _0x10fb14.__wbg___wbindgen_is_string_fbb76cb2940daafd = function (_0x207df8) {
        return "string" == typeof _0x207df8;
      };
      _0x10fb14.__wbg___wbindgen_is_undefined_2d472862bd29a478 = function (_0x6e04a9) {
        {
          return undefined === _0x6e04a9;
        }
      };
      _0x10fb14.__wbg___wbindgen_throw_b855445ff6a94295 = function (_0x12c646, _0x24382e) {
        {
          throw Error(_0x3d128a(_0x12c646, _0x24382e));
        }
      };
      _0x10fb14.__wbg_call_525440f72fbfc0ea = function () {
        return _0x2599ae(function (_0x404278, _0x1d6f6c, _0x6fa01f) {
          return _0x404278.call(_0x1d6f6c, _0x6fa01f);
        }, arguments);
      };
      _0x10fb14.__wbg_call_e762c39fa8ea36bf = function () {
        return _0x2599ae(function (_0x18f09b, _0x4ce04c) {
          {
            return _0x18f09b.call(_0x4ce04c);
          }
        }, arguments);
      };
      _0x10fb14.__wbg_crypto_574e78ad8b13b65f = function (_0x3bb302) {
        return _0x3bb302.crypto;
      };
      _0x10fb14.__wbg_getRandomValues_b8f5dbd5f3995a9e = function () {
        return _0x2599ae(function (_0x4f193b, _0x4d326b) {
          _0x4f193b.getRandomValues(_0x4d326b);
        }, arguments);
      };
      _0x10fb14.__wbg_length_69bca3cb64fc8748 = function (_0x3c6f03) {
        return _0x3c6f03.length;
      };
      _0x10fb14.__wbg_msCrypto_a61aeb35a24c1329 = function (_0x552019) {
        {
          return _0x552019.msCrypto;
        }
      };
      _0x10fb14.__wbg_new_no_args_ee98eee5275000a4 = function (_0x487bb8, _0x41edb6) {
        return Function(_0x3d128a(_0x487bb8, _0x41edb6));
      };
      _0x10fb14.__wbg_new_with_length_01aa0dc35aa13543 = function (_0x12f87c) {
        {
          return new Uint8Array(_0x12f87c >>> 0);
        }
      };
      _0x10fb14.__wbg_node_905d3e251edff8a2 = function (_0xaa29f8) {
        return _0xaa29f8.node;
      };
      _0x10fb14.__wbg_process_dc0fbacc7c1c06f7 = function (_0x5d7dc1) {
        return _0x5d7dc1.process;
      };
      _0x10fb14.__wbg_prototypesetcall_2a6620b6922694b2 = function (_0x26d1b6, _0x512302, _0x2879c3) {
        {
          Uint8Array.prototype.set.call(_0x2c8d25(_0x26d1b6, _0x512302), _0x2879c3);
        }
      };
      _0x10fb14.__wbg_randomFillSync_ac0988aba3254290 = function () {
        return _0x2599ae(function (_0x449245, _0x404bbc) {
          {
            _0x449245.randomFillSync(_0x404bbc);
          }
        }, arguments);
      };
      _0x10fb14.__wbg_require_60cc747a6bc5215a = function () {
        return _0x2599ae(function () {
          {
            return _0x1bbea3.require;
          }
        }, arguments);
      };
      _0x10fb14.__wbg_static_accessor_GLOBAL_89e1d9ac6a1b250e = function () {
        {
          const _0x3b9359 = "undefined" == typeof global ? null : global;
          return _0x3527de(_0x3b9359) ? 0 : _0x3f66d0(_0x3b9359);
        }
      };
      _0x10fb14.__wbg_static_accessor_GLOBAL_THIS_8b530f326a9e48ac = function () {
        const _0x3c0e07 = "undefined" == typeof globalThis ? null : globalThis;
        return _0x3527de(_0x3c0e07) ? 0 : _0x3f66d0(_0x3c0e07);
      };
      _0x10fb14.__wbg_static_accessor_SELF_6fdf4b64710cc91b = function () {
        const _0x2be21c = "undefined" == typeof self ? null : self;
        return _0x3527de(_0x2be21c) ? 0 : _0x3f66d0(_0x2be21c);
      };
      _0x10fb14.__wbg_static_accessor_WINDOW_b45bfc5a37f6cfa2 = function () {
        const _0x1a1b7d = "undefined" == typeof window ? null : window;
        return _0x3527de(_0x1a1b7d) ? 0 : _0x3f66d0(_0x1a1b7d);
      };
      _0x10fb14.__wbg_subarray_480600f3d6a9f26c = function (_0x4ec660, _0x2788fb, _0x599a24) {
        {
          return _0x4ec660.subarray(_0x2788fb >>> 0, _0x599a24 >>> 0);
        }
      };
      _0x10fb14.__wbg_versions_c01dfd4722a88165 = function (_0x1d5445) {
        return _0x1d5445.versions;
      };
      _0x10fb14.__wbindgen_cast_2241b6af4c4b2941 = function (_0x49b43a, _0x40aec9) {
        return _0x3d128a(_0x49b43a, _0x40aec9);
      };
      _0x10fb14.__wbindgen_cast_cb9088102bce6b30 = function (_0x318ef8, _0x2d138e) {
        {
          return _0x2c8d25(_0x318ef8, _0x2d138e);
        }
      };
      _0x10fb14.__wbindgen_init_externref_table = function () {
        const _0x5aa28b = _0x3fe60b.__wbindgen_externrefs;
        const _0x1c0081 = _0x5aa28b.grow(4);
        _0x5aa28b.set(0, undefined);
        _0x5aa28b.set(_0x1c0081 + 0, undefined);
        _0x5aa28b.set(_0x1c0081 + 1, null);
        _0x5aa28b.set(_0x1c0081 + 2, true);
        _0x5aa28b.set(_0x1c0081 + 3, false);
      };
      const _0xadc3a1 = __dirname + "/wasm_crypto_bg.wasm";
      const _0x294cb2 = _0x4fa81d(9896).readFileSync(_0xadc3a1);
      const _0x9d3f03 = new WebAssembly.Module(_0x294cb2);
      _0x10fb14.__wasm = new WebAssembly.Instance(_0x9d3f03, _0x12c9e1).exports;
      const _0x3fe60b = _0x10fb14.__wasm;
      _0x3fe60b.__wbindgen_start();
    },
    1398(_0x4bbc0f) {
      "use strict";

      {
        _0x4bbc0f.exports = require("vscode");
      }
    },
    2613(_0x3f5135) {
      "use strict";

      _0x3f5135.exports = require("assert");
    },
    6982(_0xff64de) {
      "use strict";

      _0xff64de.exports = require("crypto");
    },
    4434(_0x877b9e) {
      "use strict";

      {
        _0x877b9e.exports = require("events");
      }
    },
    9896(_0x13c5d1) {
      "use strict";

      _0x13c5d1.exports = require("fs");
    },
    8611(_0x1a7f48) {
      "use strict";

      {
        _0x1a7f48.exports = require("http");
      }
    },
    5675(_0x149fe) {
      "use strict";

      {
        _0x149fe.exports = require("http2");
      }
    },
    5692(_0x2e4532) {
      "use strict";

      {
        _0x2e4532.exports = require("https");
      }
    },
    857(_0x271d4a) {
      "use strict";

      _0x271d4a.exports = require("os");
    },
    6928(_0x2ade17) {
      "use strict";

      _0x2ade17.exports = require("path");
    },
    2203(_0x5efad0) {
      "use strict";

      _0x5efad0.exports = require("stream");
    },
    2018(_0x3664be) {
      "use strict";

      _0x3664be.exports = require("tty");
    },
    7016(_0x418a9c) {
      "use strict";

      _0x418a9c.exports = require("url");
    },
    9023(_0x1bda4f) {
      "use strict";

      {
        _0x1bda4f.exports = require("util");
      }
    },
    3106(_0x592ca8) {
      "use strict";

      _0x592ca8.exports = require("zlib");
    },
    8812(_0x1fe187, _0x495a4f, _0x6bd544) {
      "use strict";

      const _0x371f94 = _0x6bd544(8848);
      const _0xf6ec98 = _0x6bd544(6982);
      const _0x2c3e7f = _0x6bd544(7016);
      const _0x552f41 = _0x6bd544(8805);
      const _0x33a737 = _0x6bd544(8611);
      const _0x4bc62b = _0x6bd544(5692);
      const _0x5a0879 = _0x6bd544(5675);
      const _0x368b4b = _0x6bd544(9023);
      const _0x7466fe = _0x6bd544(9870);
      const _0x22b7df = _0x6bd544(3106);
      const _0x39c580 = _0x6bd544(2203);
      const _0x40ef7d = _0x6bd544(4434);
      function _0x41a0cf(_0x13f28b) {
        return _0x13f28b && "object" == typeof _0x13f28b && "default" in _0x13f28b ? _0x13f28b : {
          default: _0x13f28b
        };
      }
      const _0x131d06 = _0x41a0cf(_0x371f94);
      const _0x247121 = _0x41a0cf(_0xf6ec98);
      const _0x3049a0 = _0x41a0cf(_0x2c3e7f);
      const _0x3ce24c = _0x41a0cf(_0x552f41);
      const _0x2bc07d = _0x41a0cf(_0x33a737);
      const _0x2cfece = _0x41a0cf(_0x4bc62b);
      const _0x59e4d6 = _0x41a0cf(_0x5a0879);
      const _0x4d3613 = _0x41a0cf(_0x368b4b);
      const _0x1f18c7 = _0x41a0cf(_0x7466fe);
      const _0x5ae20f = _0x41a0cf(_0x22b7df);
      const _0x2d3284 = _0x41a0cf(_0x39c580);
      function _0x162704(_0x4c0126, _0x43e4cc) {
        {
          return function () {
            return _0x4c0126.apply(_0x43e4cc, arguments);
          };
        }
      }
      const {
        toString: _0x41288f
      } = Object.prototype;
      const {
        getPrototypeOf: _0xba34a
      } = Object;
      const {
        iterator: _0xf09021,
        toStringTag: _0x47f9ec
      } = Symbol;
      _0x448db6 = Object.create(null);
      const _0x53a881 = _0x54f695 => {
        const _0x3016ed = _0x41288f.call(_0x54f695);
        return _0x448db6[_0x3016ed] || (_0x448db6[_0x3016ed] = _0x3016ed.slice(8, -1).toLowerCase());
      };
      var _0x448db6;
      const _0x80d6b2 = _0x1d5629 => (_0x1d5629 = _0x1d5629.toLowerCase(), _0x832f39 => _0x53a881(_0x832f39) === _0x1d5629);
      const _0x5486a0 = _0x41046a => _0x2b40cd => typeof _0x2b40cd === _0x41046a;
      const {
        isArray: _0xead798
      } = Array;
      const _0x3cd7dd = _0x5486a0("undefined");
      function _0x4e618f(_0x4cefdd) {
        return null !== _0x4cefdd && !_0x3cd7dd(_0x4cefdd) && null !== _0x4cefdd.constructor && !_0x3cd7dd(_0x4cefdd.constructor) && _0x232055(_0x4cefdd.constructor.isBuffer) && _0x4cefdd.constructor.isBuffer(_0x4cefdd);
      }
      const _0x3c26f9 = _0x80d6b2("ArrayBuffer");
      const _0xf0c0d3 = _0x5486a0("string");
      const _0x232055 = _0x5486a0("function");
      const _0x4d500b = _0x5486a0("number");
      const _0x2c401b = _0x139994 => null !== _0x139994 && "object" == typeof _0x139994;
      const _0x4c5b24 = _0x52e09d => {
        if ("object" !== _0x53a881(_0x52e09d)) {
          return false;
        }
        const _0x23a7e6 = _0xba34a(_0x52e09d);
        return !(null !== _0x23a7e6 && _0x23a7e6 !== Object.prototype && null !== Object.getPrototypeOf(_0x23a7e6) || _0x47f9ec in _0x52e09d || _0xf09021 in _0x52e09d);
      };
      const _0x663674 = _0x80d6b2("Date");
      const _0xfad900 = _0x80d6b2("File");
      const _0x1ae4e8 = _0x80d6b2("Blob");
      const _0x19aa59 = _0x80d6b2("FileList");
      const _0x9d72ed = _0x80d6b2("URLSearchParams");
      const [_0x5abfa7, _0x27cefc, _0x97a439, _0x33fe69] = ["ReadableStream", "Request", "Response", "Headers"].map(_0x80d6b2);
      function _0x596646(_0x169a5f, _0x25a25c, {
        allOwnKeys: _0x20275f = false
      } = {}) {
        {
          if (null == _0x169a5f) {
            return;
          }
          let _0x376c5e;
          let _0x90750c;
          if ("object" != typeof _0x169a5f && (_0x169a5f = [_0x169a5f]), _0xead798(_0x169a5f)) {
            for (_0x376c5e = 0, _0x90750c = _0x169a5f.length; _0x90750c > _0x376c5e; _0x376c5e++) {
              _0x25a25c.call(null, _0x169a5f[_0x376c5e], _0x376c5e, _0x169a5f);
            }
          } else {
            if (_0x4e618f(_0x169a5f)) {
              return;
            }
            const _0x332379 = _0x20275f ? Object.getOwnPropertyNames(_0x169a5f) : Object.keys(_0x169a5f);
            const _0x54a7dd = _0x332379.length;
            let _0x3055c3;
            for (_0x376c5e = 0; _0x54a7dd > _0x376c5e; _0x376c5e++) {
              _0x3055c3 = _0x332379[_0x376c5e];
              _0x25a25c.call(null, _0x169a5f[_0x3055c3], _0x3055c3, _0x169a5f);
            }
          }
        }
      }
      function _0x4c6e7c(_0x101093, _0x41331e) {
        {
          if (_0x4e618f(_0x101093)) {
            return null;
          }
          _0x41331e = _0x41331e.toLowerCase();
          const _0x32950b = Object.keys(_0x101093);
          let _0x3f5abb;
          let _0x33c5e3 = _0x32950b.length;
          for (; _0x33c5e3-- > 0;) {
            if (_0x3f5abb = _0x32950b[_0x33c5e3], _0x41331e === _0x3f5abb.toLowerCase()) {
              return _0x3f5abb;
            }
          }
          return null;
        }
      }
      const _0x42971c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global;
      const _0x4d6987 = _0xc102c3 => !_0x3cd7dd(_0xc102c3) && _0xc102c3 !== _0x42971c;
      _0x4beb73 = "undefined" != typeof Uint8Array && _0xba34a(Uint8Array);
      const _0x119d60 = _0x3a939c => _0x4beb73 && _0x3a939c instanceof _0x4beb73;
      var _0x4beb73;
      const _0x2b885a = _0x80d6b2("HTMLFormElement");
      const _0x148378 = (({
        hasOwnProperty: _0x349fe8
      }) => (_0x2f89cf, _0x178c49) => _0x349fe8.call(_0x2f89cf, _0x178c49))(Object.prototype);
      const _0x91b5f5 = _0x80d6b2("RegExp");
      const _0x103fa0 = (_0x497642, _0x462323) => {
        {
          const _0x3d5dc0 = Object.getOwnPropertyDescriptors(_0x497642);
          const _0x47a283 = {};
          _0x596646(_0x3d5dc0, (_0x5bf720, _0x2356d5) => {
            let _0x3a7548;
            false !== (_0x3a7548 = _0x462323(_0x5bf720, _0x2356d5, _0x497642)) && (_0x47a283[_0x2356d5] = _0x3a7548 || _0x5bf720);
          });
          Object.defineProperties(_0x497642, _0x47a283);
        }
      };
      const _0x3f22dd = _0x80d6b2("AsyncFunction");
      _0x1405ca = "function" == typeof setImmediate;
      _0x1ef890 = _0x232055(_0x42971c.postMessage);
      const _0xf4aae9 = _0x1405ca ? setImmediate : _0x1ef890 ? (_0x1cebe5 = "axios@" + Math.random(), _0x1af0ae = [], _0x42971c.addEventListener("message", ({
        source: _0x202047,
        data: _0x43f766
      }) => {
        _0x202047 === _0x42971c && _0x43f766 === _0x1cebe5 && _0x1af0ae.length && _0x1af0ae.shift()();
      }, false), _0x5e81fe => {
        _0x1af0ae.push(_0x5e81fe);
        _0x42971c.postMessage(_0x1cebe5, "*");
      }) : _0x49c60d => setTimeout(_0x49c60d);
      var _0x1405ca;
      var _0x1ef890;
      var _0x1cebe5;
      var _0x1af0ae;
      const _0x218f9a = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(_0x42971c) : "undefined" != typeof process && process.nextTick || _0xf4aae9;
      const _0x260eed = {
        isArray: _0xead798,
        isArrayBuffer: _0x3c26f9,
        isBuffer: _0x4e618f,
        isFormData(_0x1c5e10) {
          let _0x40629b;
          return _0x1c5e10 && ("function" == typeof FormData && _0x1c5e10 instanceof FormData || _0x232055(_0x1c5e10.append) && ("formdata" === (_0x40629b = _0x53a881(_0x1c5e10)) || "object" === _0x40629b && _0x232055(_0x1c5e10.toString) && "[object FormData]" === _0x1c5e10.toString()));
        },
        isArrayBufferView(_0x1736dc) {
          {
            let _0x41e018;
            _0x41e018 = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(_0x1736dc) : _0x1736dc && _0x1736dc.buffer && _0x3c26f9(_0x1736dc.buffer);
            return _0x41e018;
          }
        },
        isString: _0xf0c0d3,
        isNumber: _0x4d500b,
        isBoolean(_0x247558) {
          return true === _0x247558 || false === _0x247558;
        },
        isObject: _0x2c401b,
        isPlainObject: _0x4c5b24,
        isEmptyObject(_0x5642cd) {
          {
            if (!_0x2c401b(_0x5642cd) || _0x4e618f(_0x5642cd)) {
              return false;
            }
            try {
              return 0 === Object.keys(_0x5642cd).length && Object.getPrototypeOf(_0x5642cd) === Object.prototype;
            } catch (_0xb9ab40) {
              return false;
            }
          }
        },
        isReadableStream: _0x5abfa7,
        isRequest: _0x27cefc,
        isResponse: _0x97a439,
        isHeaders: _0x33fe69,
        isUndefined: _0x3cd7dd,
        isDate: _0x663674,
        isFile: _0xfad900,
        isBlob: _0x1ae4e8,
        isRegExp: _0x91b5f5,
        isFunction: _0x232055,
        isStream(_0x517408) {
          return _0x2c401b(_0x517408) && _0x232055(_0x517408.pipe);
        },
        isURLSearchParams: _0x9d72ed,
        isTypedArray: _0x119d60,
        isFileList: _0x19aa59,
        forEach: _0x596646,
        merge: function _0x406d4f() {
          const {
            caseless: _0x1f7a06,
            skipUndefined: _0x5edd94
          } = _0x4d6987(this) && this || {};
          const _0x53eb04 = {};
          const _0x51121c = (_0x159c94, _0x4f5a0e) => {
            const _0x1c5934 = _0x1f7a06 && _0x4c6e7c(_0x53eb04, _0x4f5a0e) || _0x4f5a0e;
            _0x4c5b24(_0x53eb04[_0x1c5934]) && _0x4c5b24(_0x159c94) ? _0x53eb04[_0x1c5934] = _0x406d4f(_0x53eb04[_0x1c5934], _0x159c94) : _0x4c5b24(_0x159c94) ? _0x53eb04[_0x1c5934] = _0x406d4f({}, _0x159c94) : _0xead798(_0x159c94) ? _0x53eb04[_0x1c5934] = _0x159c94.slice() : _0x5edd94 && _0x3cd7dd(_0x159c94) || (_0x53eb04[_0x1c5934] = _0x159c94);
          };
          for (let _0x234756 = 0, _0x3e6b78 = arguments.length; _0x3e6b78 > _0x234756; _0x234756++) {
            arguments[_0x234756] && _0x596646(arguments[_0x234756], _0x51121c);
          }
          return _0x53eb04;
        },
        extend(_0x438162, _0xd537ee, _0x3fcdf3, {
          allOwnKeys: _0x68350d
        } = {}) {
          {
            _0x596646(_0xd537ee, (_0x3b040d, _0x4f7f55) => {
              _0x3fcdf3 && _0x232055(_0x3b040d) ? _0x438162[_0x4f7f55] = _0x162704(_0x3b040d, _0x3fcdf3) : _0x438162[_0x4f7f55] = _0x3b040d;
            }, {
              allOwnKeys: _0x68350d
            });
            return _0x438162;
          }
        },
        trim(_0x3410ae) {
          {
            return _0x3410ae.trim ? _0x3410ae.trim() : _0x3410ae.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          }
        },
        stripBOM(_0x2e3709) {
          65279 === _0x2e3709.charCodeAt(0) && (_0x2e3709 = _0x2e3709.slice(1));
          return _0x2e3709;
        },
        inherits(_0x3ad803, _0x4754ee, _0x394ea0, _0x3d3449) {
          _0x3ad803.prototype = Object.create(_0x4754ee.prototype, _0x3d3449);
          _0x3ad803.prototype.constructor = _0x3ad803;
          Object.defineProperty(_0x3ad803, "super", {
            value: _0x4754ee.prototype
          });
          _0x394ea0 && Object.assign(_0x3ad803.prototype, _0x394ea0);
        },
        toFlatObject(_0x2f3539, _0x45ef7b, _0x5ebbf0, _0x4b2a33) {
          {
            let _0x211709;
            let _0x24f8cb;
            let _0x205722;
            const _0x56682b = {};
            if (_0x45ef7b = _0x45ef7b || {}, null == _0x2f3539) {
              return _0x45ef7b;
            }
            do {
              {
                for (_0x211709 = Object.getOwnPropertyNames(_0x2f3539), _0x24f8cb = _0x211709.length; _0x24f8cb-- > 0;) {
                  _0x205722 = _0x211709[_0x24f8cb];
                  _0x4b2a33 && !_0x4b2a33(_0x205722, _0x2f3539, _0x45ef7b) || _0x56682b[_0x205722] || (_0x45ef7b[_0x205722] = _0x2f3539[_0x205722], _0x56682b[_0x205722] = true);
                }
                _0x2f3539 = false !== _0x5ebbf0 && _0xba34a(_0x2f3539);
              }
            } while (_0x2f3539 && (!_0x5ebbf0 || _0x5ebbf0(_0x2f3539, _0x45ef7b)) && _0x2f3539 !== Object.prototype);
            return _0x45ef7b;
          }
        },
        kindOf: _0x53a881,
        kindOfTest: _0x80d6b2,
        endsWith(_0x43185d, _0x35cade, _0x4c3fe1) {
          _0x43185d += "";
          (undefined === _0x4c3fe1 || _0x4c3fe1 > _0x43185d.length) && (_0x4c3fe1 = _0x43185d.length);
          _0x4c3fe1 -= _0x35cade.length;
          const _0x14ac8e = _0x43185d.indexOf(_0x35cade, _0x4c3fe1);
          return -1 !== _0x14ac8e && _0x14ac8e === _0x4c3fe1;
        },
        toArray(_0x4fbba9) {
          if (!_0x4fbba9) {
            return null;
          }
          if (_0xead798(_0x4fbba9)) {
            return _0x4fbba9;
          }
          let _0x6322db = _0x4fbba9.length;
          if (!_0x4d500b(_0x6322db)) {
            return null;
          }
          const _0x329c4c = Array(_0x6322db);
          for (; _0x6322db-- > 0;) {
            _0x329c4c[_0x6322db] = _0x4fbba9[_0x6322db];
          }
          return _0x329c4c;
        },
        forEachEntry(_0x2bc19f, _0x277e9e) {
          const _0x3b8ddc = (_0x2bc19f && _0x2bc19f[_0xf09021]).call(_0x2bc19f);
          let _0x5af171;
          for (; (_0x5af171 = _0x3b8ddc.next()) && !_0x5af171.done;) {
            {
              const _0x4de113 = _0x5af171.value;
              _0x277e9e.call(_0x2bc19f, _0x4de113[0], _0x4de113[1]);
            }
          }
        },
        matchAll(_0x17f465, _0x293180) {
          let _0x5093fd;
          const _0x3ca8cd = [];
          for (; null !== (_0x5093fd = _0x17f465.exec(_0x293180));) {
            _0x3ca8cd.push(_0x5093fd);
          }
          return _0x3ca8cd;
        },
        isHTMLForm: _0x2b885a,
        hasOwnProperty: _0x148378,
        hasOwnProp: _0x148378,
        reduceDescriptors: _0x103fa0,
        freezeMethods(_0xe8f2e3) {
          _0x103fa0(_0xe8f2e3, (_0x2738bf, _0x5d5b7c) => {
            {
              if (_0x232055(_0xe8f2e3) && -1 !== ["arguments", "caller", "callee"].indexOf(_0x5d5b7c)) {
                return false;
              }
              const _0x17657f = _0xe8f2e3[_0x5d5b7c];
              _0x232055(_0x17657f) && (_0x2738bf.enumerable = false, "writable" in _0x2738bf ? _0x2738bf.writable = false : _0x2738bf.set || (_0x2738bf.set = () => {
                throw Error("Can not rewrite read-only method '" + _0x5d5b7c + "'");
              }));
            }
          });
        },
        toObjectSet(_0x3e9577, _0x579ef2) {
          const _0x133bbc = {};
          const _0x3be750 = _0x5d9e94 => {
            _0x5d9e94.forEach(_0x6e76b => {
              _0x133bbc[_0x6e76b] = true;
            });
          };
          _0xead798(_0x3e9577) ? _0x3be750(_0x3e9577) : _0x3be750((_0x3e9577 + "").split(_0x579ef2));
          return _0x133bbc;
        },
        toCamelCase(_0x5b92b1) {
          {
            return _0x5b92b1.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (_0x2e711f, _0x3b5fef, _0x42ee7d) {
              return _0x3b5fef.toUpperCase() + _0x42ee7d;
            });
          }
        },
        noop() {},
        toFiniteNumber(_0x21fc62, _0xeed3fd) {
          return null != _0x21fc62 && Number.isFinite(_0x21fc62 = +_0x21fc62) ? _0x21fc62 : _0xeed3fd;
        },
        findKey: _0x4c6e7c,
        global: _0x42971c,
        isContextDefined: _0x4d6987,
        isSpecCompliantForm(_0x58e0cb) {
          return !!(_0x58e0cb && _0x232055(_0x58e0cb.append) && "FormData" === _0x58e0cb[_0x47f9ec] && _0x58e0cb[_0xf09021]);
        },
        toJSONObject(_0xb43bd7) {
          const _0x1f689a = [,,,,,,,,,,];
          const _0x429896 = (_0x2193eb, _0x243781) => {
            if (_0x2c401b(_0x2193eb)) {
              if (_0x1f689a.indexOf(_0x2193eb) >= 0) {
                return;
              }
              if (_0x4e618f(_0x2193eb)) {
                return _0x2193eb;
              }
              if (!("toJSON" in _0x2193eb)) {
                _0x1f689a[_0x243781] = _0x2193eb;
                const _0x3ef228 = _0xead798(_0x2193eb) ? [] : {};
                _0x596646(_0x2193eb, (_0x3c5a3e, _0x1e3f74) => {
                  const _0x237073 = _0x429896(_0x3c5a3e, _0x243781 + 1);
                  !_0x3cd7dd(_0x237073) && (_0x3ef228[_0x1e3f74] = _0x237073);
                });
                _0x1f689a[_0x243781] = undefined;
                return _0x3ef228;
              }
            }
            return _0x2193eb;
          };
          return _0x429896(_0xb43bd7, 0);
        },
        isAsyncFn: _0x3f22dd,
        isThenable(_0x2eb93b) {
          {
            return _0x2eb93b && (_0x2c401b(_0x2eb93b) || _0x232055(_0x2eb93b)) && _0x232055(_0x2eb93b.then) && _0x232055(_0x2eb93b.catch);
          }
        },
        setImmediate: _0xf4aae9,
        asap: _0x218f9a,
        isIterable(_0x445a46) {
          return null != _0x445a46 && _0x232055(_0x445a46[_0xf09021]);
        }
      };
      function _0x31b2f6(_0x5b21ea, _0x5d64db, _0x31882c, _0xe621e9, _0xc08735) {
        {
          Error.call(this);
          Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack;
          this.message = _0x5b21ea;
          this.name = "AxiosError";
          _0x5d64db && (this.code = _0x5d64db);
          _0x31882c && (this.config = _0x31882c);
          _0xe621e9 && (this.request = _0xe621e9);
          _0xc08735 && (this.response = _0xc08735, this.status = _0xc08735.status ? _0xc08735.status : null);
        }
      }
      _0x260eed.inherits(_0x31b2f6, Error, {
        toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: _0x260eed.toJSONObject(this.config),
            code: this.code,
            status: this.status
          };
        }
      });
      const _0xfb6c01 = _0x31b2f6.prototype;
      const _0xe9db34 = {};
      function _0xd089fc(_0x2e3cc3) {
        return _0x260eed.isPlainObject(_0x2e3cc3) || _0x260eed.isArray(_0x2e3cc3);
      }
      function _0x3fc5ce(_0x56b601) {
        return _0x260eed.endsWith(_0x56b601, "[]") ? _0x56b601.slice(0, -2) : _0x56b601;
      }
      function _0xa0069a(_0x13aa1b, _0x233ad6, _0x305045) {
        {
          return _0x13aa1b ? _0x13aa1b.concat(_0x233ad6).map(function (_0x2b45df, _0x1cf63) {
            _0x2b45df = _0x3fc5ce(_0x2b45df);
            return !_0x305045 && _0x1cf63 ? "[" + _0x2b45df + "]" : _0x2b45df;
          }).join(_0x305045 ? "." : "") : _0x233ad6;
        }
      }
      ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(_0x1ec07b => {
        _0xe9db34[_0x1ec07b] = {
          value: _0x1ec07b
        };
      });
      Object.defineProperties(_0x31b2f6, _0xe9db34);
      Object.defineProperty(_0xfb6c01, "isAxiosError", {
        value: true
      });
      _0x31b2f6.from = (_0xa09b71, _0x9232, _0x28121d, _0x50b904, _0x94cb4b, _0x46771c) => {
        {
          const _0x5d9fee = Object.create(_0xfb6c01);
          _0x260eed.toFlatObject(_0xa09b71, _0x5d9fee, function (_0x40bc88) {
            return _0x40bc88 !== Error.prototype;
          }, _0x43bcef => "isAxiosError" !== _0x43bcef);
          const _0x512dcd = _0xa09b71 && _0xa09b71.message ? _0xa09b71.message : "Error";
          const _0x42d3f4 = null == _0x9232 && _0xa09b71 ? _0xa09b71.code : _0x9232;
          _0x31b2f6.call(_0x5d9fee, _0x512dcd, _0x42d3f4, _0x28121d, _0x50b904, _0x94cb4b);
          _0xa09b71 && null == _0x5d9fee.cause && Object.defineProperty(_0x5d9fee, "cause", {
            value: _0xa09b71,
            configurable: true
          });
          _0x5d9fee.name = _0xa09b71 && _0xa09b71.name || "Error";
          _0x46771c && Object.assign(_0x5d9fee, _0x46771c);
          return _0x5d9fee;
        }
      };
      const _0x59571f = _0x260eed.toFlatObject(_0x260eed, {}, null, function (_0xb86988) {
        return /^is[A-Z]/.test(_0xb86988);
      });
      function _0x18cfdf(_0x36317, _0x398f00, _0x599670) {
        if (!_0x260eed.isObject(_0x36317)) {
          throw new TypeError("target must be an object");
        }
        _0x398f00 = _0x398f00 || new (_0x131d06.default || FormData)();
        const _0x1fc4bc = (_0x599670 = _0x260eed.toFlatObject(_0x599670, {
          metaTokens: true,
          dots: false,
          indexes: false
        }, false, function (_0x3a653a, _0x4bd2ee) {
          return !_0x260eed.isUndefined(_0x4bd2ee[_0x3a653a]);
        })).metaTokens;
        const _0x4e5e17 = _0x599670.visitor || _0x5e6a34;
        const _0x195736 = _0x599670.dots;
        const _0x34b2d9 = _0x599670.indexes;
        const _0xd0eec4 = (_0x599670.Blob || "undefined" != typeof Blob && Blob) && _0x260eed.isSpecCompliantForm(_0x398f00);
        if (!_0x260eed.isFunction(_0x4e5e17)) {
          throw new TypeError("visitor must be a function");
        }
        function _0x1117d1(_0x5ed4f2) {
          {
            if (null === _0x5ed4f2) {
              return "";
            }
            if (_0x260eed.isDate(_0x5ed4f2)) {
              return _0x5ed4f2.toISOString();
            }
            if (_0x260eed.isBoolean(_0x5ed4f2)) {
              return _0x5ed4f2.toString();
            }
            if (!_0xd0eec4 && _0x260eed.isBlob(_0x5ed4f2)) {
              throw new _0x31b2f6("Blob is not supported. Use a Buffer instead.");
            }
            return _0x260eed.isArrayBuffer(_0x5ed4f2) || _0x260eed.isTypedArray(_0x5ed4f2) ? _0xd0eec4 && "function" == typeof Blob ? new Blob([_0x5ed4f2]) : Buffer.from(_0x5ed4f2) : _0x5ed4f2;
          }
        }
        function _0x5e6a34(_0x477441, _0x2de1c5, _0x9fb57e) {
          let _0x5dbcc9 = _0x477441;
          if (_0x477441 && !_0x9fb57e && "object" == typeof _0x477441) {
            if (_0x260eed.endsWith(_0x2de1c5, "{}")) {
              _0x2de1c5 = _0x1fc4bc ? _0x2de1c5 : _0x2de1c5.slice(0, -2);
              _0x477441 = JSON.stringify(_0x477441);
            } else {
              if (_0x260eed.isArray(_0x477441) && function (_0x343c2b) {
                return _0x260eed.isArray(_0x343c2b) && !_0x343c2b.some(_0xd089fc);
              }(_0x477441) || (_0x260eed.isFileList(_0x477441) || _0x260eed.endsWith(_0x2de1c5, "[]")) && (_0x5dbcc9 = _0x260eed.toArray(_0x477441))) {
                _0x2de1c5 = _0x3fc5ce(_0x2de1c5);
                _0x5dbcc9.forEach(function (_0x9eaf52, _0x2988b5) {
                  !_0x260eed.isUndefined(_0x9eaf52) && null !== _0x9eaf52 && _0x398f00.append(true === _0x34b2d9 ? _0xa0069a([_0x2de1c5], _0x2988b5, _0x195736) : null === _0x34b2d9 ? _0x2de1c5 : _0x2de1c5 + "[]", _0x1117d1(_0x9eaf52));
                });
                return false;
              }
            }
          }
          return !!_0xd089fc(_0x477441) || (_0x398f00.append(_0xa0069a(_0x9fb57e, _0x2de1c5, _0x195736), _0x1117d1(_0x477441)), false);
        }
        const _0x1f0b24 = [];
        const _0xb4a9a7 = Object.assign(_0x59571f, {
          defaultVisitor: _0x5e6a34,
          convertValue: _0x1117d1,
          isVisitable: _0xd089fc
        });
        if (!_0x260eed.isObject(_0x36317)) {
          throw new TypeError("data must be an object");
        }
        (function _0x53b8fd(_0x4eefdb, _0x333de7) {
          if (!_0x260eed.isUndefined(_0x4eefdb)) {
            if (-1 !== _0x1f0b24.indexOf(_0x4eefdb)) {
              throw Error("Circular reference detected in " + _0x333de7.join("."));
            }
            _0x1f0b24.push(_0x4eefdb);
            _0x260eed.forEach(_0x4eefdb, function (_0x49308e, _0x280b04) {
              {
                true === (!(_0x260eed.isUndefined(_0x49308e) || null === _0x49308e) && _0x4e5e17.call(_0x398f00, _0x49308e, _0x260eed.isString(_0x280b04) ? _0x280b04.trim() : _0x280b04, _0x333de7, _0xb4a9a7)) && _0x53b8fd(_0x49308e, _0x333de7 ? _0x333de7.concat(_0x280b04) : [_0x280b04]);
              }
            });
            _0x1f0b24.pop();
          }
        })(_0x36317);
        return _0x398f00;
      }
      function _0x4da8bb(_0x1fca05) {
        const _0x20e39a = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0"
        };
        return encodeURIComponent(_0x1fca05).replace(/[!'()~]|%20|%00/g, function (_0x1d358b) {
          return _0x20e39a[_0x1d358b];
        });
      }
      function _0x39d416(_0x41e3a3, _0x4d5073) {
        this._pairs = [];
        _0x41e3a3 && _0x18cfdf(_0x41e3a3, this, _0x4d5073);
      }
      const _0xf0915 = _0x39d416.prototype;
      function _0x52171f(_0x127e51) {
        return encodeURIComponent(_0x127e51).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
      }
      function _0x14eee4(_0x1b92fc, _0x237326, _0x4fd3a7) {
        if (!_0x237326) {
          return _0x1b92fc;
        }
        const _0x155170 = _0x4fd3a7 && _0x4fd3a7.encode || _0x52171f;
        _0x260eed.isFunction(_0x4fd3a7) && (_0x4fd3a7 = {
          serialize: _0x4fd3a7
        });
        const _0x5dd17c = _0x4fd3a7 && _0x4fd3a7.serialize;
        let _0x25a0b3;
        if (_0x25a0b3 = _0x5dd17c ? _0x5dd17c(_0x237326, _0x4fd3a7) : _0x260eed.isURLSearchParams(_0x237326) ? _0x237326.toString() : new _0x39d416(_0x237326, _0x4fd3a7).toString(_0x155170), _0x25a0b3) {
          const _0x3df311 = _0x1b92fc.indexOf("#");
          -1 !== _0x3df311 && (_0x1b92fc = _0x1b92fc.slice(0, _0x3df311));
          _0x1b92fc += (-1 === _0x1b92fc.indexOf("?") ? "?" : "&") + _0x25a0b3;
        }
        return _0x1b92fc;
      }
      _0xf0915.append = function (_0x889885, _0x59e1a7) {
        this._pairs.push([_0x889885, _0x59e1a7]);
      };
      _0xf0915.toString = function (_0x391baa) {
        {
          const _0x5d2a12 = _0x391baa ? function (_0x3f378c) {
            return _0x391baa.call(this, _0x3f378c, _0x4da8bb);
          } : _0x4da8bb;
          return this._pairs.map(function (_0x2f4ab2) {
            return _0x5d2a12(_0x2f4ab2[0]) + "=" + _0x5d2a12(_0x2f4ab2[1]);
          }, "").join("&");
        }
      };
      const _0x309244 = class {
        constructor() {
          this.handlers = [];
        }
        use(_0xf5450f, _0x19db67, _0x3ff2ba) {
          this.handlers.push({
            fulfilled: _0xf5450f,
            rejected: _0x19db67,
            synchronous: !!_0x3ff2ba && _0x3ff2ba.synchronous,
            runWhen: _0x3ff2ba ? _0x3ff2ba.runWhen : null
          });
          return this.handlers.length - 1;
        }
        eject(_0xda6f88) {
          this.handlers[_0xda6f88] && (this.handlers[_0xda6f88] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(_0x44ad2a) {
          _0x260eed.forEach(this.handlers, function (_0x168f2c) {
            null !== _0x168f2c && _0x44ad2a(_0x168f2c);
          });
        }
      };
      const _0x14e25d = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
      const _0x2505d6 = _0x3049a0.default.URLSearchParams;
      const _0x11b905 = "abcdefghijklmnopqrstuvwxyz";
      const _0x475cfb = "0123456789";
      const _0x48668f = {
        DIGIT: _0x475cfb,
        ALPHA: _0x11b905,
        ALPHA_DIGIT: _0x11b905 + _0x11b905.toUpperCase() + _0x475cfb
      };
      const _0x814e08 = {
        isNode: true,
        classes: {
          URLSearchParams: _0x2505d6,
          FormData: _0x131d06.default,
          Blob: "undefined" != typeof Blob && Blob || null
        },
        ALPHABET: _0x48668f,
        generateString(_0xdcd3f3 = 16, _0x5dfc8f = _0x48668f.ALPHA_DIGIT) {
          {
            let _0x179884 = "";
            const {
              length: _0x4f8515
            } = _0x5dfc8f;
            const _0x30a3bb = new Uint32Array(_0xdcd3f3);
            _0x247121.default.randomFillSync(_0x30a3bb);
            for (let _0x43efa1 = 0; _0xdcd3f3 > _0x43efa1; _0x43efa1++) {
              _0x179884 += _0x5dfc8f[_0x30a3bb[_0x43efa1] % _0x4f8515];
            }
            return _0x179884;
          }
        },
        protocols: ["http", "https", "file", "data"]
      };
      const _0xfe102e = "undefined" != typeof window && "undefined" != typeof document;
      const _0x34a065 = "object" == typeof navigator && navigator || undefined;
      const _0x4ffa5b = _0xfe102e && (!_0x34a065 || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(_0x34a065.product));
      const _0x1c8b70 = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
      const _0x22e9ea = _0xfe102e && window.location.href || "http://localhost";
      const _0x40ae52 = {
        ...Object.freeze({
          __proto__: null,
          hasBrowserEnv: _0xfe102e,
          hasStandardBrowserWebWorkerEnv: _0x1c8b70,
          hasStandardBrowserEnv: _0x4ffa5b,
          navigator: _0x34a065,
          origin: _0x22e9ea
        }),
        ..._0x814e08
      };
      function _0x4bbadb(_0x2b920e) {
        function _0x34d519(_0xdea8a8, _0x550ff6, _0xce07cd, _0x4a5786) {
          let _0x2f9a99 = _0xdea8a8[_0x4a5786++];
          if ("__proto__" === _0x2f9a99) {
            return true;
          }
          const _0x35241d = Number.isFinite(+_0x2f9a99);
          const _0x179379 = _0x4a5786 >= _0xdea8a8.length;
          _0x2f9a99 = !_0x2f9a99 && _0x260eed.isArray(_0xce07cd) ? _0xce07cd.length : _0x2f9a99;
          return _0x179379 ? (_0x260eed.hasOwnProp(_0xce07cd, _0x2f9a99) ? _0xce07cd[_0x2f9a99] = [_0xce07cd[_0x2f9a99], _0x550ff6] : _0xce07cd[_0x2f9a99] = _0x550ff6, !_0x35241d) : (_0xce07cd[_0x2f9a99] && _0x260eed.isObject(_0xce07cd[_0x2f9a99]) || (_0xce07cd[_0x2f9a99] = []), _0x34d519(_0xdea8a8, _0x550ff6, _0xce07cd[_0x2f9a99], _0x4a5786) && _0x260eed.isArray(_0xce07cd[_0x2f9a99]) && (_0xce07cd[_0x2f9a99] = function (_0x4f3a7f) {
            const _0x446dd1 = {};
            const _0x1b3328 = Object.keys(_0x4f3a7f);
            let _0x439c42;
            const _0x467ce6 = _0x1b3328.length;
            let _0x3cfe43;
            for (_0x439c42 = 0; _0x467ce6 > _0x439c42; _0x439c42++) {
              _0x3cfe43 = _0x1b3328[_0x439c42];
              _0x446dd1[_0x3cfe43] = _0x4f3a7f[_0x3cfe43];
            }
            return _0x446dd1;
          }(_0xce07cd[_0x2f9a99])), !_0x35241d);
        }
        if (_0x260eed.isFormData(_0x2b920e) && _0x260eed.isFunction(_0x2b920e.entries)) {
          const _0x177069 = {};
          _0x260eed.forEachEntry(_0x2b920e, (_0x55f4c0, _0x241b0f) => {
            _0x34d519(function (_0x548ede) {
              return _0x260eed.matchAll(/\w+|\[(\w*)]/g, _0x548ede).map(_0x4a4264 => "[]" === _0x4a4264[0] ? "" : _0x4a4264[1] || _0x4a4264[0]);
            }(_0x55f4c0), _0x241b0f, _0x177069, 0);
          });
          return _0x177069;
        }
        return null;
      }
      const _0x4ba958 = {
        transitional: _0x14e25d,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function (_0x127c72, _0x1c0aa7) {
          const _0x16d725 = _0x1c0aa7.getContentType() || "";
          const _0x2cc364 = _0x16d725.indexOf("application/json") > -1;
          const _0x5c5dfa = _0x260eed.isObject(_0x127c72);
          if (_0x5c5dfa && _0x260eed.isHTMLForm(_0x127c72) && (_0x127c72 = new FormData(_0x127c72)), _0x260eed.isFormData(_0x127c72)) {
            return _0x2cc364 ? JSON.stringify(_0x4bbadb(_0x127c72)) : _0x127c72;
          }
          if (_0x260eed.isArrayBuffer(_0x127c72) || _0x260eed.isBuffer(_0x127c72) || _0x260eed.isStream(_0x127c72) || _0x260eed.isFile(_0x127c72) || _0x260eed.isBlob(_0x127c72) || _0x260eed.isReadableStream(_0x127c72)) {
            return _0x127c72;
          }
          if (_0x260eed.isArrayBufferView(_0x127c72)) {
            return _0x127c72.buffer;
          }
          if (_0x260eed.isURLSearchParams(_0x127c72)) {
            _0x1c0aa7.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return _0x127c72.toString();
          }
          let _0x2159ed;
          if (_0x5c5dfa) {
            if (_0x16d725.indexOf("application/x-www-form-urlencoded") > -1) {
              return function (_0x3fb841, _0x467edb) {
                return _0x18cfdf(_0x3fb841, new _0x40ae52.classes.URLSearchParams(), {
                  visitor(_0x3a2dc0, _0x20d152, _0x3eab3b, _0x31eff9) {
                    return _0x40ae52.isNode && _0x260eed.isBuffer(_0x3a2dc0) ? (this.append(_0x20d152, _0x3a2dc0.toString("base64")), false) : _0x31eff9.defaultVisitor.apply(this, arguments);
                  },
                  ..._0x467edb
                });
              }(_0x127c72, this.formSerializer).toString();
            }
            if ((_0x2159ed = _0x260eed.isFileList(_0x127c72)) || _0x16d725.indexOf("multipart/form-data") > -1) {
              const _0x3ea6a6 = this.env && this.env.FormData;
              return _0x18cfdf(_0x2159ed ? {
                "files[]": _0x127c72
              } : _0x127c72, _0x3ea6a6 && new _0x3ea6a6(), this.formSerializer);
            }
          }
          return _0x5c5dfa || _0x2cc364 ? (_0x1c0aa7.setContentType("application/json", false), function (_0x2cca15) {
            {
              if (_0x260eed.isString(_0x2cca15)) {
                try {
                  {
                    (0, JSON.parse)(_0x2cca15);
                    return _0x260eed.trim(_0x2cca15);
                  }
                } catch (_0x435378) {
                  if ("SyntaxError" !== _0x435378.name) {
                    throw _0x435378;
                  }
                }
              }
              return (0, JSON.stringify)(_0x2cca15);
            }
          }(_0x127c72)) : _0x127c72;
        }],
        transformResponse: [function (_0x2f56d0) {
          const _0x2d2484 = this.transitional || _0x4ba958.transitional;
          const _0x517fe3 = _0x2d2484 && _0x2d2484.forcedJSONParsing;
          const _0x55fbc7 = "json" === this.responseType;
          if (_0x260eed.isResponse(_0x2f56d0) || _0x260eed.isReadableStream(_0x2f56d0)) {
            return _0x2f56d0;
          }
          if (_0x2f56d0 && _0x260eed.isString(_0x2f56d0) && (_0x517fe3 && !this.responseType || _0x55fbc7)) {
            const _0x2bdb9e = !(_0x2d2484 && _0x2d2484.silentJSONParsing) && _0x55fbc7;
            try {
              return JSON.parse(_0x2f56d0, this.parseReviver);
            } catch (_0x3e8f5b) {
              {
                if (_0x2bdb9e) {
                  if ("SyntaxError" === _0x3e8f5b.name) {
                    throw _0x31b2f6.from(_0x3e8f5b, _0x31b2f6.ERR_BAD_RESPONSE, this, null, this.response);
                  }
                  throw _0x3e8f5b;
                }
              }
            }
          }
          return _0x2f56d0;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: _0x40ae52.classes.FormData,
          Blob: _0x40ae52.classes.Blob
        },
        validateStatus(_0xc3e39b) {
          return _0xc3e39b >= 200 && 300 > _0xc3e39b;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": undefined
          }
        }
      };
      _0x260eed.forEach(["delete", "get", "head", "post", "put", "patch"], _0x1b1e72 => {
        _0x4ba958.headers[_0x1b1e72] = {};
      });
      const _0x5bdeb0 = _0x4ba958;
      const _0x55ba07 = _0x260eed.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
      const _0x286576 = Symbol("internals");
      function _0x2a9fa9(_0x3eacc7) {
        return _0x3eacc7 && (_0x3eacc7 + "").trim().toLowerCase();
      }
      function _0x28ab5e(_0x10ce2b) {
        return false === _0x10ce2b || null == _0x10ce2b ? _0x10ce2b : _0x260eed.isArray(_0x10ce2b) ? _0x10ce2b.map(_0x28ab5e) : _0x10ce2b + "";
      }
      function _0x3d8756(_0x5c4f48, _0xdd33e6, _0xf4df01, _0x36fcdc, _0x694f07) {
        {
          return _0x260eed.isFunction(_0x36fcdc) ? _0x36fcdc.call(this, _0xdd33e6, _0xf4df01) : (_0x694f07 && (_0xdd33e6 = _0xf4df01), _0x260eed.isString(_0xdd33e6) ? _0x260eed.isString(_0x36fcdc) ? -1 !== _0xdd33e6.indexOf(_0x36fcdc) : _0x260eed.isRegExp(_0x36fcdc) ? _0x36fcdc.test(_0xdd33e6) : undefined : undefined);
        }
      }
      class _0xcb6e7e {
        constructor(_0x1fe0cb) {
          _0x1fe0cb && this.set(_0x1fe0cb);
        }
        set(_0xba4c3, _0xf0ddfd, _0x4f653d) {
          const _0x5c4787 = this;
          function _0xb5b03e(_0x4a4505, _0x45e0c9, _0x52c970) {
            {
              const _0x5e34b0 = _0x2a9fa9(_0x45e0c9);
              if (!_0x5e34b0) {
                throw Error("header name must be a non-empty string");
              }
              const _0x3adb2b = _0x260eed.findKey(_0x5c4787, _0x5e34b0);
              (!_0x3adb2b || undefined === _0x5c4787[_0x3adb2b] || true === _0x52c970 || undefined === _0x52c970 && false !== _0x5c4787[_0x3adb2b]) && (_0x5c4787[_0x3adb2b || _0x45e0c9] = _0x28ab5e(_0x4a4505));
            }
          }
          const _0x29d739 = (_0x502ed6, _0x23445e) => _0x260eed.forEach(_0x502ed6, (_0x50966f, _0x24ef3b) => _0xb5b03e(_0x50966f, _0x24ef3b, _0x23445e));
          if (_0x260eed.isPlainObject(_0xba4c3) || _0xba4c3 instanceof this.constructor) {
            _0x29d739(_0xba4c3, _0xf0ddfd);
          } else {
            if (_0x260eed.isString(_0xba4c3) && (_0xba4c3 = _0xba4c3.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(_0xba4c3.trim())) {
              _0x29d739((_0x4b1a97 => {
                const _0x1a30a5 = {};
                let _0x44ef3a;
                let _0x2509e7;
                let _0x37e7ba;
                _0x4b1a97 && _0x4b1a97.split("\n").forEach(function (_0x4f2b35) {
                  {
                    _0x37e7ba = _0x4f2b35.indexOf(":");
                    _0x44ef3a = _0x4f2b35.substring(0, _0x37e7ba).trim().toLowerCase();
                    _0x2509e7 = _0x4f2b35.substring(_0x37e7ba + 1).trim();
                    !_0x44ef3a || _0x1a30a5[_0x44ef3a] && _0x55ba07[_0x44ef3a] || ("set-cookie" === _0x44ef3a ? _0x1a30a5[_0x44ef3a] ? _0x1a30a5[_0x44ef3a].push(_0x2509e7) : _0x1a30a5[_0x44ef3a] = [_0x2509e7] : _0x1a30a5[_0x44ef3a] = _0x1a30a5[_0x44ef3a] ? _0x1a30a5[_0x44ef3a] + ", " + _0x2509e7 : _0x2509e7);
                  }
                });
                return _0x1a30a5;
              })(_0xba4c3), _0xf0ddfd);
            } else {
              if (_0x260eed.isObject(_0xba4c3) && _0x260eed.isIterable(_0xba4c3)) {
                let _0x3dc6b5;
                let _0x3d883c;
                let _0x366580 = {};
                for (const _0x5e0037 of _0xba4c3) {
                  if (!_0x260eed.isArray(_0x5e0037)) {
                    throw TypeError("Object iterator must return a key-value pair");
                  }
                  _0x366580[_0x3d883c = _0x5e0037[0]] = (_0x3dc6b5 = _0x366580[_0x3d883c]) ? _0x260eed.isArray(_0x3dc6b5) ? [..._0x3dc6b5, _0x5e0037[1]] : [_0x3dc6b5, _0x5e0037[1]] : _0x5e0037[1];
                }
                _0x29d739(_0x366580, _0xf0ddfd);
              } else {
                null != _0xba4c3 && _0xb5b03e(_0xf0ddfd, _0xba4c3, _0x4f653d);
              }
            }
          }
          return this;
        }
        get(_0x232468, _0x334de4) {
          {
            _0x232468 = _0x2a9fa9(_0x232468);
            if (_0x232468) {
              const _0x3c3b59 = _0x260eed.findKey(this, _0x232468);
              if (_0x3c3b59) {
                {
                  const _0x36fe73 = this[_0x3c3b59];
                  if (!_0x334de4) {
                    return _0x36fe73;
                  }
                  if (true === _0x334de4) {
                    return function (_0x742d55) {
                      const _0x2ab0d3 = Object.create(null);
                      const _0x54a1b0 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                      let _0x5bdb47;
                      for (; _0x5bdb47 = _0x54a1b0.exec(_0x742d55);) {
                        _0x2ab0d3[_0x5bdb47[1]] = _0x5bdb47[2];
                      }
                      return _0x2ab0d3;
                    }(_0x36fe73);
                  }
                  if (_0x260eed.isFunction(_0x334de4)) {
                    return _0x334de4.call(this, _0x36fe73, _0x3c3b59);
                  }
                  if (_0x260eed.isRegExp(_0x334de4)) {
                    return _0x334de4.exec(_0x36fe73);
                  }
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            }
          }
        }
        has(_0x4aabdd, _0x35248e) {
          _0x4aabdd = _0x2a9fa9(_0x4aabdd);
          if (_0x4aabdd) {
            const _0x3fce89 = _0x260eed.findKey(this, _0x4aabdd);
            return !(!_0x3fce89 || undefined === this[_0x3fce89] || _0x35248e && !_0x3d8756(0, this[_0x3fce89], _0x3fce89, _0x35248e));
          }
          return false;
        }
        delete(_0x5a49b8, _0x4e6eae) {
          const _0x3fb2d3 = this;
          let _0x577517 = false;
          function _0x322f69(_0x521276) {
            {
              _0x521276 = _0x2a9fa9(_0x521276);
              if (_0x521276) {
                {
                  const _0x2ac12b = _0x260eed.findKey(_0x3fb2d3, _0x521276);
                  !_0x2ac12b || _0x4e6eae && !_0x3d8756(0, _0x3fb2d3[_0x2ac12b], _0x2ac12b, _0x4e6eae) || (delete _0x3fb2d3[_0x2ac12b], _0x577517 = true);
                }
              }
            }
          }
          _0x260eed.isArray(_0x5a49b8) ? _0x5a49b8.forEach(_0x322f69) : _0x322f69(_0x5a49b8);
          return _0x577517;
        }
        clear(_0x50187b) {
          const _0x30537f = Object.keys(this);
          let _0x2e82b3 = _0x30537f.length;
          let _0x5ccd58 = false;
          for (; _0x2e82b3--;) {
            {
              const _0x28404f = _0x30537f[_0x2e82b3];
              _0x50187b && !_0x3d8756(0, this[_0x28404f], _0x28404f, _0x50187b, true) || (delete this[_0x28404f], _0x5ccd58 = true);
            }
          }
          return _0x5ccd58;
        }
        normalize(_0x470d74) {
          const _0x3f25ba = this;
          const _0x38bc31 = {};
          _0x260eed.forEach(this, (_0x55be0b, _0x367a2e) => {
            {
              const _0x1398ff = _0x260eed.findKey(_0x38bc31, _0x367a2e);
              if (_0x1398ff) {
                _0x3f25ba[_0x1398ff] = _0x28ab5e(_0x55be0b);
                return void delete _0x3f25ba[_0x367a2e];
              }
              const _0x52c300 = _0x470d74 ? function (_0x30edab) {
                return _0x30edab.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (_0x2433bf, _0x1207e2, _0x14defb) => _0x1207e2.toUpperCase() + _0x14defb);
              }(_0x367a2e) : (_0x367a2e + "").trim();
              _0x52c300 !== _0x367a2e && delete _0x3f25ba[_0x367a2e];
              _0x3f25ba[_0x52c300] = _0x28ab5e(_0x55be0b);
              _0x38bc31[_0x52c300] = true;
            }
          });
          return this;
        }
        concat(..._0x331682) {
          {
            return this.constructor.concat(this, ..._0x331682);
          }
        }
        toJSON(_0x4eedf0) {
          const _0x3d16d7 = Object.create(null);
          _0x260eed.forEach(this, (_0x20dc9b, _0x12e378) => {
            null != _0x20dc9b && false !== _0x20dc9b && (_0x3d16d7[_0x12e378] = _0x4eedf0 && _0x260eed.isArray(_0x20dc9b) ? _0x20dc9b.join(", ") : _0x20dc9b);
          });
          return _0x3d16d7;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([_0x482146, _0x588b3a]) => _0x482146 + ": " + _0x588b3a).join("\n");
        }
        getSetCookie() {
          return this.get("set-cookie") || [];
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(_0x2e0548) {
          {
            return _0x2e0548 instanceof this ? _0x2e0548 : new this(_0x2e0548);
          }
        }
        static concat(_0x42eff4, ..._0x1d553a) {
          {
            const _0x4a5f30 = new this(_0x42eff4);
            _0x1d553a.forEach(_0x4ce1be => _0x4a5f30.set(_0x4ce1be));
            return _0x4a5f30;
          }
        }
        static accessor(_0x3c9977) {
          const _0x2f22d6 = (this[_0x286576] = this[_0x286576] = {
            accessors: {}
          }).accessors;
          const _0x27c2b9 = this.prototype;
          function _0x30269c(_0x5f468a) {
            const _0x580a05 = _0x2a9fa9(_0x5f468a);
            _0x2f22d6[_0x580a05] || (function (_0x4be3b2, _0x3513d6) {
              const _0x5e8058 = _0x260eed.toCamelCase(" " + _0x3513d6);
              ["get", "set", "has"].forEach(_0x5d608a => {
                Object.defineProperty(_0x4be3b2, _0x5d608a + _0x5e8058, {
                  value(_0x38efa2, _0x16957e, _0x2edf10) {
                    return this[_0x5d608a].call(this, _0x3513d6, _0x38efa2, _0x16957e, _0x2edf10);
                  },
                  configurable: true
                });
              });
            }(_0x27c2b9, _0x5f468a), _0x2f22d6[_0x580a05] = true);
          }
          _0x260eed.isArray(_0x3c9977) ? _0x3c9977.forEach(_0x30269c) : _0x30269c(_0x3c9977);
          return this;
        }
      }
      _0xcb6e7e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      _0x260eed.reduceDescriptors(_0xcb6e7e.prototype, ({
        value: _0x5937e7
      }, _0x1d0bfe) => {
        {
          let _0x12a09a = _0x1d0bfe[0].toUpperCase() + _0x1d0bfe.slice(1);
          return {
            get() {
              return _0x5937e7;
            },
            set(_0x323c4e) {
              this[_0x12a09a] = _0x323c4e;
            }
          };
        }
      });
      _0x260eed.freezeMethods(_0xcb6e7e);
      const _0x2ada45 = _0xcb6e7e;
      function _0x2fd333(_0x81a9ee, _0xd657b) {
        const _0x1cb21a = this || _0x5bdeb0;
        const _0x4d1529 = _0xd657b || _0x1cb21a;
        const _0x2a6b64 = _0x2ada45.from(_0x4d1529.headers);
        let _0x16e5b3 = _0x4d1529.data;
        _0x260eed.forEach(_0x81a9ee, function (_0x25af41) {
          _0x16e5b3 = _0x25af41.call(_0x1cb21a, _0x16e5b3, _0x2a6b64.normalize(), _0xd657b ? _0xd657b.status : undefined);
        });
        _0x2a6b64.normalize();
        return _0x16e5b3;
      }
      function _0x21258e(_0x38a33c) {
        return !(!_0x38a33c || !_0x38a33c.__CANCEL__);
      }
      function _0x4c0984(_0x2ead99, _0x325468, _0x1baefa) {
        _0x31b2f6.call(this, null == _0x2ead99 ? "canceled" : _0x2ead99, _0x31b2f6.ERR_CANCELED, _0x325468, _0x1baefa);
        this.name = "CanceledError";
      }
      function _0x34d296(_0x397f76, _0x5994de, _0x5df6c2) {
        {
          const _0x1b2f1f = _0x5df6c2.config.validateStatus;
          _0x5df6c2.status && _0x1b2f1f && !_0x1b2f1f(_0x5df6c2.status) ? _0x5994de(new _0x31b2f6("Request failed with status code " + _0x5df6c2.status, [_0x31b2f6.ERR_BAD_REQUEST, _0x31b2f6.ERR_BAD_RESPONSE][Math.floor(_0x5df6c2.status / 100) - 4], _0x5df6c2.config, _0x5df6c2.request, _0x5df6c2)) : _0x397f76(_0x5df6c2);
        }
      }
      function _0x177358(_0x6d0ea7, _0x2ce341, _0xae5a36) {
        let _0x4e0db1 = !function (_0x5d6e2a) {
          {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(_0x5d6e2a);
          }
        }(_0x2ce341);
        return _0x6d0ea7 && (_0x4e0db1 || 0 == _0xae5a36) ? function (_0x2f7c82, _0x9be3a9) {
          {
            return _0x9be3a9 ? _0x2f7c82.replace(/\/?\/$/, "") + "/" + _0x9be3a9.replace(/^\/+/, "") : _0x2f7c82;
          }
        }(_0x6d0ea7, _0x2ce341) : _0x2ce341;
      }
      _0x260eed.inherits(_0x4c0984, _0x31b2f6, {
        __CANCEL__: true
      });
      const _0x4c69c6 = "1.13.2";
      function _0x45a463(_0x4eb166) {
        const _0x249b59 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(_0x4eb166);
        return _0x249b59 && _0x249b59[1] || "";
      }
      const _0x353aa0 = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
      const _0x58fdb2 = Symbol("internals");
      class _0x5ecb81 extends _0x2d3284.default.Transform {
        constructor(_0x25ed64) {
          super({
            readableHighWaterMark: (_0x25ed64 = _0x260eed.toFlatObject(_0x25ed64, {
              maxRate: 0,
              chunkSize: 65536,
              minChunkSize: 100,
              timeWindow: 500,
              ticksRate: 2,
              samplesCount: 15
            }, null, (_0x4eabb9, _0x1b5536) => !_0x260eed.isUndefined(_0x1b5536[_0x4eabb9]))).chunkSize
          });
          this[_0x58fdb2] = {
            timeWindow: _0x25ed64.timeWindow,
            chunkSize: _0x25ed64.chunkSize,
            maxRate: _0x25ed64.maxRate,
            minChunkSize: _0x25ed64.minChunkSize,
            bytesSeen: 0,
            isCaptured: false,
            notifiedBytesLoaded: 0,
            ts: Date.now(),
            bytes: 0,
            onReadCallback: null
          };
          const _0x33e2ea = this[_0x58fdb2];
          this.on("newListener", _0x350c1e => {
            "progress" === _0x350c1e && (_0x33e2ea.isCaptured || (_0x33e2ea.isCaptured = true));
          });
        }
        _read(_0x5d9dc) {
          const _0x322d80 = this[_0x58fdb2];
          _0x322d80.onReadCallback && _0x322d80.onReadCallback();
          return super._read(_0x5d9dc);
        }
        _transform(_0x53a84e, _0x24de19, _0x2c0795) {
          {
            const _0x28dd40 = this[_0x58fdb2];
            const _0x2619a6 = _0x28dd40.maxRate;
            const _0x5abcfe = this.readableHighWaterMark;
            const _0x2987ad = _0x28dd40.timeWindow;
            const _0xc29fc5 = _0x2619a6 / (1000 / _0x2987ad);
            const _0x5d0700 = false !== _0x28dd40.minChunkSize ? Math.max(_0x28dd40.minChunkSize, 0.01 * _0xc29fc5) : 0;
            const _0x386f3d = (_0x358fec, _0x28b5d3) => {
              {
                const _0x47afdf = Buffer.byteLength(_0x358fec);
                _0x28dd40.bytesSeen += _0x47afdf;
                _0x28dd40.bytes += _0x47afdf;
                _0x28dd40.isCaptured && this.emit("progress", _0x28dd40.bytesSeen);
                this.push(_0x358fec) ? process.nextTick(_0x28b5d3) : _0x28dd40.onReadCallback = () => {
                  _0x28dd40.onReadCallback = null;
                  process.nextTick(_0x28b5d3);
                };
              }
            };
            const _0x2a3c9a = (_0x32715a, _0x3a2c3d) => {
              const _0x454410 = Buffer.byteLength(_0x32715a);
              let _0x1d6b2e;
              let _0xaf7988 = null;
              let _0x5f4e5f = _0x5abcfe;
              let _0x5421b7 = 0;
              if (_0x2619a6) {
                const _0x23019e = Date.now();
                _0x28dd40.ts && (_0x5421b7 = _0x23019e - _0x28dd40.ts) < _0x2987ad || (_0x28dd40.ts = _0x23019e, _0x1d6b2e = _0xc29fc5 - _0x28dd40.bytes, _0x28dd40.bytes = 0 > _0x1d6b2e ? -_0x1d6b2e : 0, _0x5421b7 = 0);
                _0x1d6b2e = _0xc29fc5 - _0x28dd40.bytes;
              }
              if (_0x2619a6) {
                if (0 >= _0x1d6b2e) {
                  return setTimeout(() => {
                    _0x3a2c3d(null, _0x32715a);
                  }, _0x2987ad - _0x5421b7);
                }
                _0x5f4e5f > _0x1d6b2e && (_0x5f4e5f = _0x1d6b2e);
              }
              _0x5f4e5f && _0x454410 > _0x5f4e5f && _0x454410 - _0x5f4e5f > _0x5d0700 && (_0xaf7988 = _0x32715a.subarray(_0x5f4e5f), _0x32715a = _0x32715a.subarray(0, _0x5f4e5f));
              _0x386f3d(_0x32715a, _0xaf7988 ? () => {
                process.nextTick(_0x3a2c3d, null, _0xaf7988);
              } : _0x3a2c3d);
            };
            _0x2a3c9a(_0x53a84e, function _0x2cf60d(_0x5122b9, _0x5604ab) {
              if (_0x5122b9) {
                return _0x2c0795(_0x5122b9);
              }
              _0x5604ab ? _0x2a3c9a(_0x5604ab, _0x2cf60d) : _0x2c0795(null);
            });
          }
        }
      }
      const _0x49e112 = _0x5ecb81;
      const {
        asyncIterator: _0xc7c460
      } = Symbol;
      const _0x43adf6 = async function* (_0x3db036) {
        _0x3db036.stream ? yield* _0x3db036.stream() : _0x3db036.arrayBuffer ? yield await _0x3db036.arrayBuffer() : _0x3db036[_0xc7c460] ? yield* _0x3db036[_0xc7c460]() : yield _0x3db036;
      };
      const _0x205e65 = _0x40ae52.ALPHABET.ALPHA_DIGIT + "-_";
      const _0x3d3204 = "function" == typeof TextEncoder ? new TextEncoder() : new _0x4d3613.default.TextEncoder();
      const _0x8a8e19 = "\r\n";
      const _0x1d7742 = _0x3d3204.encode(_0x8a8e19);
      class _0x44eab3 {
        constructor(_0x1789a3, _0x1a2d1f) {
          {
            const {
              escapeName: _0x5c1f75
            } = this.constructor;
            const _0x5a9674 = _0x260eed.isString(_0x1a2d1f);
            let _0x1b047d = "Content-Disposition: form-data; name=\"" + _0x5c1f75(_0x1789a3) + "\"" + (!_0x5a9674 && _0x1a2d1f.name ? "; filename=\"" + _0x5c1f75(_0x1a2d1f.name) + "\"" : "") + _0x8a8e19;
            _0x5a9674 ? _0x1a2d1f = _0x3d3204.encode((_0x1a2d1f + "").replace(/\r?\n|\r\n?/g, _0x8a8e19)) : _0x1b047d += "Content-Type: " + (_0x1a2d1f.type || "application/octet-stream") + _0x8a8e19;
            this.headers = _0x3d3204.encode(_0x1b047d + _0x8a8e19);
            this.contentLength = _0x5a9674 ? _0x1a2d1f.byteLength : _0x1a2d1f.size;
            this.size = this.headers.byteLength + this.contentLength + 2;
            this.name = _0x1789a3;
            this.value = _0x1a2d1f;
          }
        }
        async *encode() {
          yield this.headers;
          const {
            value: _0x3f2bc6
          } = this;
          _0x260eed.isTypedArray(_0x3f2bc6) ? yield _0x3f2bc6 : yield* _0x43adf6(_0x3f2bc6);
          yield _0x1d7742;
        }
        static escapeName(_0x34cf24) {
          {
            return (_0x34cf24 + "").replace(/[\r\n"]/g, _0x12947b => ({
              "\r": "%0D",
              "\n": "%0A",
              "\"": "%22"
            })[_0x12947b]);
          }
        }
      }
      class _0x12ea46 extends _0x2d3284.default.Transform {
        __transform(_0x1b7ac9, _0x58ad64, _0x2deb7c) {
          this.push(_0x1b7ac9);
          _0x2deb7c();
        }
        _transform(_0x5a29c4, _0x14e65e, _0x1512d7) {
          {
            if (0 !== _0x5a29c4.length && (this._transform = this.__transform, 120 !== _0x5a29c4[0])) {
              const _0x57e7df = Buffer.alloc(2);
              _0x57e7df[0] = 120;
              _0x57e7df[1] = 156;
              this.push(_0x57e7df, _0x14e65e);
            }
            this.__transform(_0x5a29c4, _0x14e65e, _0x1512d7);
          }
        }
      }
      const _0x3fa311 = _0x12ea46;
      const _0x340654 = (_0x3d19fe, _0x27d6b6) => _0x260eed.isAsyncFn(_0x3d19fe) ? function (..._0x2c64a0) {
        const _0x40c0f2 = _0x2c64a0.pop();
        _0x3d19fe.apply(this, _0x2c64a0).then(_0x32147f => {
          try {
            _0x27d6b6 ? _0x40c0f2(null, ..._0x27d6b6(_0x32147f)) : _0x40c0f2(null, _0x32147f);
          } catch (_0x4eb6d3) {
            _0x40c0f2(_0x4eb6d3);
          }
        }, _0x40c0f2);
      } : _0x3d19fe;
      const _0x45067e = (_0x4deec9, _0x2c890d, _0x1cc351 = 3) => {
        {
          let _0xc8ff9d = 0;
          const _0x311a9e = function (_0x380ad7, _0x3cdc7f) {
            const _0x414794 = Array(_0x380ad7 = _0x380ad7 || 10);
            const _0x1c1f19 = Array(_0x380ad7);
            let _0x5ba431;
            let _0x6af521 = 0;
            let _0x3e6771 = 0;
            _0x3cdc7f = undefined !== _0x3cdc7f ? _0x3cdc7f : 1000;
            return function (_0x28eca1) {
              const _0x5aa181 = Date.now();
              const _0x5c9ca7 = _0x1c1f19[_0x3e6771];
              _0x5ba431 || (_0x5ba431 = _0x5aa181);
              _0x414794[_0x6af521] = _0x28eca1;
              _0x1c1f19[_0x6af521] = _0x5aa181;
              let _0x4ffb22 = _0x3e6771;
              let _0xd6d20d = 0;
              for (; _0x4ffb22 !== _0x6af521;) {
                _0xd6d20d += _0x414794[_0x4ffb22++];
                _0x4ffb22 %= _0x380ad7;
              }
              if (_0x6af521 = (_0x6af521 + 1) % _0x380ad7, _0x6af521 === _0x3e6771 && (_0x3e6771 = (_0x3e6771 + 1) % _0x380ad7), _0x3cdc7f > _0x5aa181 - _0x5ba431) {
                return;
              }
              const _0x5ec77f = _0x5c9ca7 && _0x5aa181 - _0x5c9ca7;
              return _0x5ec77f ? Math.round(1000 * _0xd6d20d / _0x5ec77f) : undefined;
            };
          }(50, 250);
          return function (_0x49ce1f, _0x42e694) {
            let _0x3751a9;
            let _0xc04c9d;
            let _0x3f914c = 0;
            let _0x15ee54 = 1000 / _0x42e694;
            const _0x1dc3d7 = (_0xb0f7af, _0x47693a = Date.now()) => {
              _0x3f914c = _0x47693a;
              _0x3751a9 = null;
              _0xc04c9d && (clearTimeout(_0xc04c9d), _0xc04c9d = null);
              (_0x186563 => {
                const _0x280bf6 = _0x186563.loaded;
                const _0x349bff = _0x186563.lengthComputable ? _0x186563.total : undefined;
                const _0xd2ea81 = _0x280bf6 - _0xc8ff9d;
                const _0x2c40a1 = _0x311a9e(_0xd2ea81);
                _0xc8ff9d = _0x280bf6;
                _0x4deec9({
                  loaded: _0x280bf6,
                  total: _0x349bff,
                  progress: _0x349bff ? _0x280bf6 / _0x349bff : undefined,
                  bytes: _0xd2ea81,
                  rate: _0x2c40a1 || undefined,
                  estimated: _0x2c40a1 && _0x349bff && _0x349bff >= _0x280bf6 ? (_0x349bff - _0x280bf6) / _0x2c40a1 : undefined,
                  event: _0x186563,
                  lengthComputable: null != _0x349bff,
                  [_0x2c890d ? "download" : "upload"]: true
                });
              })(..._0xb0f7af);
            };
            return [(..._0x16dfec) => {
              {
                const _0x11f67c = Date.now();
                const _0x148b3a = _0x11f67c - _0x3f914c;
                _0x15ee54 > _0x148b3a ? (_0x3751a9 = _0x16dfec, _0xc04c9d || (_0xc04c9d = setTimeout(() => {
                  {
                    _0xc04c9d = null;
                    _0x1dc3d7(_0x3751a9);
                  }
                }, _0x15ee54 - _0x148b3a))) : _0x1dc3d7(_0x16dfec, _0x11f67c);
              }
            }, () => _0x3751a9 && _0x1dc3d7(_0x3751a9)];
          }(0, _0x1cc351);
        }
      };
      const _0xe1d457 = (_0x4efccb, _0x250699) => {
        const _0x3d90ae = null != _0x4efccb;
        return [_0x2a3a81 => _0x250699[0]({
          lengthComputable: _0x3d90ae,
          total: _0x4efccb,
          loaded: _0x2a3a81
        }), _0x250699[1]];
      };
      const _0xb674e9 = _0x314157 => (..._0x1fcdec) => _0x260eed.asap(() => _0x314157(..._0x1fcdec));
      const _0x28d916 = {
        flush: _0x5ae20f.default.constants.Z_SYNC_FLUSH,
        finishFlush: _0x5ae20f.default.constants.Z_SYNC_FLUSH
      };
      const _0x59ab25 = {
        flush: _0x5ae20f.default.constants.BROTLI_OPERATION_FLUSH,
        finishFlush: _0x5ae20f.default.constants.BROTLI_OPERATION_FLUSH
      };
      const _0x47a0e3 = _0x260eed.isFunction(_0x5ae20f.default.createBrotliDecompress);
      const {
        http: _0x41033c,
        https: _0x394a0a
      } = _0x1f18c7.default;
      const _0x49e560 = /https:?/;
      const _0x4e833c = _0x40ae52.protocols.map(_0x4c5ac5 => _0x4c5ac5 + ":");
      const _0x4a9f21 = (_0x2e1a47, [_0x3ca053, _0x13467e]) => (_0x2e1a47.on("end", _0x13467e).on("error", _0x13467e), _0x3ca053);
      const _0x39dec7 = new class {
        constructor() {
          this.sessions = Object.create(null);
        }
        getSession(_0x417c08, _0x201a6e) {
          _0x201a6e = Object.assign({
            sessionTimeout: 1000
          }, _0x201a6e);
          let _0x17a06d = this.sessions[_0x417c08];
          if (_0x17a06d) {
            {
              let _0x5c89ae = _0x17a06d.length;
              for (let _0x4e047e = 0; _0x5c89ae > _0x4e047e; _0x4e047e++) {
                {
                  const [_0x2f4979, _0x2c45bc] = _0x17a06d[_0x4e047e];
                  if (!_0x2f4979.destroyed && !_0x2f4979.closed && _0x4d3613.default.isDeepStrictEqual(_0x2c45bc, _0x201a6e)) {
                    return _0x2f4979;
                  }
                }
              }
            }
          }
          const _0x37c6b2 = _0x59e4d6.default.connect(_0x417c08, _0x201a6e);
          let _0x43472e;
          const _0x48c3ce = () => {
            {
              if (_0x43472e) {
                return;
              }
              _0x43472e = true;
              let _0x27bb7e = _0x17a06d;
              let _0x569dbd = _0x27bb7e.length;
              let _0x27dbe3 = _0x569dbd;
              for (; _0x27dbe3--;) {
                if (_0x27bb7e[_0x27dbe3][0] === _0x37c6b2) {
                  return void (1 === _0x569dbd ? delete this.sessions[_0x417c08] : _0x27bb7e.splice(_0x27dbe3, 1));
                }
              }
            }
          };
          const _0x56dc6c = _0x37c6b2.request;
          const {
            sessionTimeout: _0x48173e
          } = _0x201a6e;
          if (null != _0x48173e) {
            let _0x3eef84;
            let _0x40b1c4 = 0;
            _0x37c6b2.request = function () {
              {
                const _0x520f7b = _0x56dc6c.apply(this, arguments);
                _0x40b1c4++;
                _0x3eef84 && (clearTimeout(_0x3eef84), _0x3eef84 = null);
                _0x520f7b.once("close", () => {
                  --_0x40b1c4 || (_0x3eef84 = setTimeout(() => {
                    {
                      _0x3eef84 = null;
                      _0x48c3ce();
                    }
                  }, _0x48173e));
                });
                return _0x520f7b;
              }
            };
          }
          _0x37c6b2.once("close", _0x48c3ce);
          let _0x599671 = [_0x37c6b2, _0x201a6e];
          _0x17a06d ? _0x17a06d.push(_0x599671) : _0x17a06d = this.sessions[_0x417c08] = [_0x599671];
          return _0x37c6b2;
        }
      }();
      function _0x3cecb6(_0xbba02f, _0xae70c9) {
        {
          _0xbba02f.beforeRedirects.proxy && _0xbba02f.beforeRedirects.proxy(_0xbba02f);
          _0xbba02f.beforeRedirects.config && _0xbba02f.beforeRedirects.config(_0xbba02f, _0xae70c9);
        }
      }
      function _0x1d20b6(_0x2a5165, _0x26cd15, _0x182e66) {
        let _0x378b9a = _0x26cd15;
        if (!_0x378b9a && false !== _0x378b9a) {
          const _0x240120 = _0x3ce24c.default.getProxyForUrl(_0x182e66);
          _0x240120 && (_0x378b9a = new URL(_0x240120));
        }
        if (_0x378b9a) {
          if (_0x378b9a.username && (_0x378b9a.auth = (_0x378b9a.username || "") + ":" + (_0x378b9a.password || "")), _0x378b9a.auth) {
            (_0x378b9a.auth.username || _0x378b9a.auth.password) && (_0x378b9a.auth = (_0x378b9a.auth.username || "") + ":" + (_0x378b9a.auth.password || ""));
            const _0x19d087 = Buffer.from(_0x378b9a.auth, "utf8").toString("base64");
            _0x2a5165.headers["Proxy-Authorization"] = "Basic " + _0x19d087;
          }
          _0x2a5165.headers.host = _0x2a5165.hostname + (_0x2a5165.port ? ":" + _0x2a5165.port : "");
          const _0x49f443 = _0x378b9a.hostname || _0x378b9a.host;
          _0x2a5165.hostname = _0x49f443;
          _0x2a5165.host = _0x49f443;
          _0x2a5165.port = _0x378b9a.port;
          _0x2a5165.path = _0x182e66;
          _0x378b9a.protocol && (_0x2a5165.protocol = _0x378b9a.protocol.includes(":") ? _0x378b9a.protocol : _0x378b9a.protocol + ":");
        }
        _0x2a5165.beforeRedirects.proxy = function (_0x25ec8b) {
          _0x1d20b6(_0x25ec8b, _0x26cd15, _0x25ec8b.href);
        };
      }
      const _0xf53fdb = "undefined" != typeof process && "process" === _0x260eed.kindOf(process);
      const _0x5cb17e = (_0x2d6808, _0x20ba89) => (({
        address: _0x2cf62b,
        family: _0x33a5f7
      }) => {
        if (!_0x260eed.isString(_0x2cf62b)) {
          throw TypeError("address must be a string");
        }
        return {
          address: _0x2cf62b,
          family: _0x33a5f7 || (0 > _0x2cf62b.indexOf(".") ? 6 : 4)
        };
      })(_0x260eed.isObject(_0x2d6808) ? _0x2d6808 : {
        address: _0x2d6808,
        family: _0x20ba89
      });
      const _0x51720e = {
        request(_0x11e342, _0x3fceca) {
          const _0x5ef19e = _0x11e342.protocol + "//" + _0x11e342.hostname + ":" + (_0x11e342.port || 80);
          const {
            http2Options: _0x2564ab,
            headers: _0x2ab26c
          } = _0x11e342;
          const _0x588999 = _0x39dec7.getSession(_0x5ef19e, _0x2564ab);
          const {
            HTTP2_HEADER_SCHEME: _0x2aaad2,
            HTTP2_HEADER_METHOD: _0x344a24,
            HTTP2_HEADER_PATH: _0x498a0e,
            HTTP2_HEADER_STATUS: _0x2f4653
          } = _0x59e4d6.default.constants;
          const _0x2ce035 = {
            [_0x2aaad2]: _0x11e342.protocol.replace(":", ""),
            [_0x344a24]: _0x11e342.method,
            [_0x498a0e]: _0x11e342.path
          };
          _0x260eed.forEach(_0x2ab26c, (_0x12dacd, _0x474548) => {
            ":" !== _0x474548.charAt(0) && (_0x2ce035[_0x474548] = _0x12dacd);
          });
          const _0x3ac507 = _0x588999.request(_0x2ce035);
          _0x3ac507.once("response", _0x3bc648 => {
            const _0x3ad3b9 = _0x3ac507;
            const _0x29968b = (_0x3bc648 = Object.assign({}, _0x3bc648))[_0x2f4653];
            delete _0x3bc648[_0x2f4653];
            _0x3ad3b9.headers = _0x3bc648;
            _0x3ad3b9.statusCode = +_0x29968b;
            _0x3fceca(_0x3ad3b9);
          });
          return _0x3ac507;
        }
      };
      const _0x593aa2 = _0xf53fdb && function (_0x4c75b3) {
        _0x3f560d = async function (_0x49cf14, _0x82a9c7, _0xb3b7e1) {
          let {
            data: _0x344c7c,
            lookup: _0x38263b,
            family: _0x35a4ff,
            httpVersion: _0x3b38e0 = 1,
            http2Options: _0x2e0d0f
          } = _0x4c75b3;
          const {
            responseType: _0x38cf75,
            responseEncoding: _0x2d1605
          } = _0x4c75b3;
          const _0x1371ce = _0x4c75b3.method.toUpperCase();
          let _0x5bc0a1;
          let _0x20417c;
          let _0x42a8e7 = false;
          if (_0x3b38e0 = +_0x3b38e0, Number.isNaN(_0x3b38e0)) {
            throw TypeError("Invalid protocol version: '" + _0x4c75b3.httpVersion + "' is not a number");
          }
          if (1 !== _0x3b38e0 && 2 !== _0x3b38e0) {
            throw TypeError("Unsupported protocol version '" + _0x3b38e0 + "'");
          }
          const _0x33e1b8 = 2 === _0x3b38e0;
          if (_0x38263b) {
            const _0x31a0b0 = _0x340654(_0x38263b, _0x32b949 => _0x260eed.isArray(_0x32b949) ? _0x32b949 : [_0x32b949]);
            _0x38263b = (_0x3352a3, _0x471f5f, _0x490e98) => {
              _0x31a0b0(_0x3352a3, _0x471f5f, (_0x3a67ac, _0xade9e6, _0x334e8f) => {
                {
                  if (_0x3a67ac) {
                    return _0x490e98(_0x3a67ac);
                  }
                  const _0x3f41af = _0x260eed.isArray(_0xade9e6) ? _0xade9e6.map(_0x361688 => _0x5cb17e(_0x361688)) : [_0x5cb17e(_0xade9e6, _0x334e8f)];
                  _0x471f5f.all ? _0x490e98(_0x3a67ac, _0x3f41af) : _0x490e98(_0x3a67ac, _0x3f41af[0].address, _0x3f41af[0].family);
                }
              });
            };
          }
          const _0xd86e11 = new _0x40ef7d.EventEmitter();
          function _0x4d5a8a(_0x34549d) {
            {
              try {
                _0xd86e11.emit("abort", !_0x34549d || _0x34549d.type ? new _0x4c0984(null, _0x4c75b3, _0x20417c) : _0x34549d);
              } catch (_0x20cb99) {}
            }
          }
          _0xd86e11.once("abort", _0x82a9c7);
          const _0x1c3ec6 = () => {
            {
              _0x4c75b3.cancelToken && _0x4c75b3.cancelToken.unsubscribe(_0x4d5a8a);
              _0x4c75b3.signal && _0x4c75b3.signal.removeEventListener("abort", _0x4d5a8a);
              _0xd86e11.removeAllListeners();
            }
          };
          (_0x4c75b3.cancelToken || _0x4c75b3.signal) && (_0x4c75b3.cancelToken && _0x4c75b3.cancelToken.subscribe(_0x4d5a8a), _0x4c75b3.signal && (_0x4c75b3.signal.aborted ? _0x4d5a8a() : _0x4c75b3.signal.addEventListener("abort", _0x4d5a8a)));
          _0xb3b7e1((_0x400c62, _0x335d1d) => {
            if (_0x5bc0a1 = true, _0x335d1d) {
              _0x42a8e7 = true;
              return void _0x1c3ec6();
            }
            const {
              data: _0x57ad22
            } = _0x400c62;
            if (_0x57ad22 instanceof _0x2d3284.default.Readable || _0x57ad22 instanceof _0x2d3284.default.Duplex) {
              const _0x5b9f2f = _0x2d3284.default.finished(_0x57ad22, () => {
                _0x5b9f2f();
                _0x1c3ec6();
              });
            } else {
              _0x1c3ec6();
            }
          });
          const _0x19c523 = _0x177358(_0x4c75b3.baseURL, _0x4c75b3.url, _0x4c75b3.allowAbsoluteUrls);
          const _0x12857 = new URL(_0x19c523, _0x40ae52.hasBrowserEnv ? _0x40ae52.origin : undefined);
          const _0x5b95fa = _0x12857.protocol || _0x4e833c[0];
          if ("data:" === _0x5b95fa) {
            {
              if (_0x4c75b3.maxContentLength > -1) {
                const _0x2cd07f = function (_0x135035) {
                  if (!_0x135035 || "string" != typeof _0x135035) {
                    return 0;
                  }
                  if (!_0x135035.startsWith("data:")) {
                    return 0;
                  }
                  const _0x2e790a = _0x135035.indexOf(",");
                  if (0 > _0x2e790a) {
                    return 0;
                  }
                  const _0x50a426 = _0x135035.slice(5, _0x2e790a);
                  const _0x38576f = _0x135035.slice(_0x2e790a + 1);
                  if (/;base64/i.test(_0x50a426)) {
                    let _0x153bad = _0x38576f.length;
                    const _0x1f8282 = _0x38576f.length;
                    for (let _0x318e92 = 0; _0x1f8282 > _0x318e92; _0x318e92++) {
                      if (37 === _0x38576f.charCodeAt(_0x318e92) && _0x1f8282 > _0x318e92 + 2) {
                        const _0x2c28eb = _0x38576f.charCodeAt(_0x318e92 + 1);
                        const _0x114671 = _0x38576f.charCodeAt(_0x318e92 + 2);
                        !((48 > _0x2c28eb || _0x2c28eb > 57) && (65 > _0x2c28eb || _0x2c28eb > 70) && (97 > _0x2c28eb || _0x2c28eb > 102) || (48 > _0x114671 || _0x114671 > 57) && (65 > _0x114671 || _0x114671 > 70) && (97 > _0x114671 || _0x114671 > 102)) && (_0x153bad -= 2, _0x318e92 += 2);
                      }
                    }
                    let _0x457f7b = 0;
                    let _0x156318 = _0x1f8282 - 1;
                    const _0x253439 = _0x28d69e => _0x28d69e >= 2 && 37 === _0x38576f.charCodeAt(_0x28d69e - 2) && 51 === _0x38576f.charCodeAt(_0x28d69e - 1) && (68 === _0x38576f.charCodeAt(_0x28d69e) || 100 === _0x38576f.charCodeAt(_0x28d69e));
                    0 > _0x156318 || (61 === _0x38576f.charCodeAt(_0x156318) ? (_0x457f7b++, _0x156318--) : _0x253439(_0x156318) && (_0x457f7b++, _0x156318 -= 3));
                    1 !== _0x457f7b || 0 > _0x156318 || (61 === _0x38576f.charCodeAt(_0x156318) || _0x253439(_0x156318)) && _0x457f7b++;
                    const _0x322058 = 3 * Math.floor(_0x153bad / 4) - (_0x457f7b || 0);
                    return _0x322058 > 0 ? _0x322058 : 0;
                  }
                  return Buffer.byteLength(_0x38576f, "utf8");
                }((_0x4c75b3.url || _0x19c523 || "") + "");
                if (_0x2cd07f > _0x4c75b3.maxContentLength) {
                  return _0x82a9c7(new _0x31b2f6("maxContentLength size of " + _0x4c75b3.maxContentLength + " exceeded", _0x31b2f6.ERR_BAD_RESPONSE, _0x4c75b3));
                }
              }
              let _0x976fe0;
              if ("GET" !== _0x1371ce) {
                return _0x34d296(_0x49cf14, _0x82a9c7, {
                  status: 405,
                  statusText: "method not allowed",
                  headers: {},
                  config: _0x4c75b3
                });
              }
              try {
                _0x976fe0 = function (_0x4b6565, _0x45c6f8, _0x204078) {
                  const _0x3a8c2c = _0x204078 && _0x204078.Blob || _0x40ae52.classes.Blob;
                  const _0x347140 = _0x45a463(_0x4b6565);
                  if (undefined === _0x45c6f8 && _0x3a8c2c && (_0x45c6f8 = true), "data" === _0x347140) {
                    {
                      _0x4b6565 = _0x347140.length ? _0x4b6565.slice(_0x347140.length + 1) : _0x4b6565;
                      const _0x336333 = _0x353aa0.exec(_0x4b6565);
                      if (!_0x336333) {
                        throw new _0x31b2f6("Invalid URL", _0x31b2f6.ERR_INVALID_URL);
                      }
                      const _0x1942aa = _0x336333[1];
                      const _0x33c8e3 = _0x336333[2];
                      const _0x3812be = _0x336333[3];
                      const _0x401fb9 = Buffer.from(decodeURIComponent(_0x3812be), _0x33c8e3 ? "base64" : "utf8");
                      if (_0x45c6f8) {
                        {
                          if (!_0x3a8c2c) {
                            throw new _0x31b2f6("Blob is not supported", _0x31b2f6.ERR_NOT_SUPPORT);
                          }
                          return new _0x3a8c2c([_0x401fb9], {
                            type: _0x1942aa
                          });
                        }
                      }
                      return _0x401fb9;
                    }
                  }
                  throw new _0x31b2f6("Unsupported protocol " + _0x347140, _0x31b2f6.ERR_NOT_SUPPORT);
                }(_0x4c75b3.url, "blob" === _0x38cf75, {
                  Blob: _0x4c75b3.env && _0x4c75b3.env.Blob
                });
              } catch (_0x455599) {
                {
                  throw _0x31b2f6.from(_0x455599, _0x31b2f6.ERR_BAD_REQUEST, _0x4c75b3);
                }
              }
              "text" === _0x38cf75 ? (_0x976fe0 = _0x976fe0.toString(_0x2d1605), _0x2d1605 && "utf8" !== _0x2d1605 || (_0x976fe0 = _0x260eed.stripBOM(_0x976fe0))) : "stream" === _0x38cf75 && (_0x976fe0 = _0x2d3284.default.Readable.from(_0x976fe0));
              return _0x34d296(_0x49cf14, _0x82a9c7, {
                data: _0x976fe0,
                status: 200,
                statusText: "OK",
                headers: new _0x2ada45(),
                config: _0x4c75b3
              });
            }
          }
          if (-1 === _0x4e833c.indexOf(_0x5b95fa)) {
            return _0x82a9c7(new _0x31b2f6("Unsupported protocol " + _0x5b95fa, _0x31b2f6.ERR_BAD_REQUEST, _0x4c75b3));
          }
          const _0x571640 = _0x2ada45.from(_0x4c75b3.headers).normalize();
          _0x571640.set("User-Agent", "axios/" + _0x4c69c6, false);
          const {
            onUploadProgress: _0x3943c8,
            onDownloadProgress: _0x40e375
          } = _0x4c75b3;
          const _0x4b5937 = _0x4c75b3.maxRate;
          let _0x3143dd;
          let _0x3a7db6;
          if (_0x260eed.isSpecCompliantForm(_0x344c7c)) {
            const _0x336ee9 = _0x571640.getContentType(/boundary=([-_\w\d]{10,70})/i);
            _0x344c7c = ((_0x4dc882, _0x1311d5, _0x43e90a) => {
              const {
                tag: _0x31712a = "form-data-boundary",
                size: _0x42d6db = 25,
                boundary: _0x3236ef = _0x31712a + "-" + _0x40ae52.generateString(_0x42d6db, _0x205e65)
              } = _0x43e90a || {};
              if (!_0x260eed.isFormData(_0x4dc882)) {
                throw TypeError("FormData instance required");
              }
              if (1 > _0x3236ef.length || _0x3236ef.length > 70) {
                throw Error("boundary must be 10-70 characters long");
              }
              const _0x78528c = _0x3d3204.encode("--" + _0x3236ef + _0x8a8e19);
              const _0x3ccb74 = _0x3d3204.encode("--" + _0x3236ef + "--" + _0x8a8e19);
              let _0x505d1f = _0x3ccb74.byteLength;
              const _0x27c40a = Array.from(_0x4dc882.entries()).map(([_0x28d103, _0x22047c]) => {
                const _0xe2023d = new _0x44eab3(_0x28d103, _0x22047c);
                _0x505d1f += _0xe2023d.size;
                return _0xe2023d;
              });
              _0x505d1f += _0x78528c.byteLength * _0x27c40a.length;
              _0x505d1f = _0x260eed.toFiniteNumber(_0x505d1f);
              const _0x1780a = {
                "Content-Type": "multipart/form-data; boundary=" + _0x3236ef
              };
              Number.isFinite(_0x505d1f) && (_0x1780a["Content-Length"] = _0x505d1f);
              _0x1311d5 && _0x1311d5(_0x1780a);
              return _0x39c580.Readable.from(async function* () {
                for (const _0x32ce0d of _0x27c40a) yield _0x78528c, yield* _0x32ce0d.encode();
                yield _0x3ccb74;
              }());
            })(_0x344c7c, _0x9e3aa8 => {
              _0x571640.set(_0x9e3aa8);
            }, {
              tag: "axios-" + _0x4c69c6 + "-boundary",
              boundary: _0x336ee9 && _0x336ee9[1] || undefined
            });
          } else {
            if (_0x260eed.isFormData(_0x344c7c) && _0x260eed.isFunction(_0x344c7c.getHeaders)) {
              if (_0x571640.set(_0x344c7c.getHeaders()), !_0x571640.hasContentLength()) {
                try {
                  const _0x204949 = await _0x4d3613.default.promisify(_0x344c7c.getLength).call(_0x344c7c);
                  Number.isFinite(_0x204949) && _0x204949 >= 0 && _0x571640.setContentLength(_0x204949);
                } catch (_0xc8284a) {}
              }
            } else {
              if (_0x260eed.isBlob(_0x344c7c) || _0x260eed.isFile(_0x344c7c)) {
                _0x344c7c.size && _0x571640.setContentType(_0x344c7c.type || "application/octet-stream");
                _0x571640.setContentLength(_0x344c7c.size || 0);
                _0x344c7c = _0x2d3284.default.Readable.from(_0x43adf6(_0x344c7c));
              } else {
                if (_0x344c7c && !_0x260eed.isStream(_0x344c7c)) {
                  if (!Buffer.isBuffer(_0x344c7c)) {
                    if (_0x260eed.isArrayBuffer(_0x344c7c)) {
                      _0x344c7c = Buffer.from(new Uint8Array(_0x344c7c));
                    } else {
                      if (!_0x260eed.isString(_0x344c7c)) {
                        return _0x82a9c7(new _0x31b2f6("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", _0x31b2f6.ERR_BAD_REQUEST, _0x4c75b3));
                      }
                      _0x344c7c = Buffer.from(_0x344c7c, "utf-8");
                    }
                  }
                  if (_0x571640.setContentLength(_0x344c7c.length, false), _0x4c75b3.maxBodyLength > -1 && _0x344c7c.length > _0x4c75b3.maxBodyLength) {
                    return _0x82a9c7(new _0x31b2f6("Request body larger than maxBodyLength limit", _0x31b2f6.ERR_BAD_REQUEST, _0x4c75b3));
                  }
                }
              }
            }
          }
          const _0x1f8922 = _0x260eed.toFiniteNumber(_0x571640.getContentLength());
          let _0x46e76d;
          let _0x5c977c;
          _0x260eed.isArray(_0x4b5937) ? (_0x3143dd = _0x4b5937[0], _0x3a7db6 = _0x4b5937[1]) : _0x3143dd = _0x3a7db6 = _0x4b5937;
          _0x344c7c && (_0x3943c8 || _0x3143dd) && (_0x260eed.isStream(_0x344c7c) || (_0x344c7c = _0x2d3284.default.Readable.from(_0x344c7c, {
            objectMode: false
          })), _0x344c7c = _0x2d3284.default.pipeline([_0x344c7c, new _0x49e112({
            maxRate: _0x260eed.toFiniteNumber(_0x3143dd)
          })], _0x260eed.noop), _0x3943c8 && _0x344c7c.on("progress", _0x4a9f21(_0x344c7c, _0xe1d457(_0x1f8922, _0x45067e(_0xb674e9(_0x3943c8), false, 3)))));
          _0x4c75b3.auth && (_0x46e76d = (_0x4c75b3.auth.username || "") + ":" + (_0x4c75b3.auth.password || ""));
          !_0x46e76d && _0x12857.username && (_0x46e76d = _0x12857.username + ":" + _0x12857.password);
          _0x46e76d && _0x571640.delete("authorization");
          try {
            _0x5c977c = _0x14eee4(_0x12857.pathname + _0x12857.search, _0x4c75b3.params, _0x4c75b3.paramsSerializer).replace(/^\?/, "");
          } catch (_0x4a47f2) {
            const _0x3633f8 = Error(_0x4a47f2.message);
            _0x3633f8.config = _0x4c75b3;
            _0x3633f8.url = _0x4c75b3.url;
            _0x3633f8.exists = true;
            return _0x82a9c7(_0x3633f8);
          }
          _0x571640.set("Accept-Encoding", "gzip, compress, deflate" + (_0x47a0e3 ? ", br" : ""), false);
          const _0x2ae324 = {
            path: _0x5c977c,
            method: _0x1371ce,
            headers: _0x571640.toJSON(),
            agents: {
              http: _0x4c75b3.httpAgent,
              https: _0x4c75b3.httpsAgent
            },
            auth: _0x46e76d,
            protocol: _0x5b95fa,
            family: _0x35a4ff,
            beforeRedirect: _0x3cecb6,
            beforeRedirects: {},
            http2Options: _0x2e0d0f
          };
          let _0x1eb524;
          !_0x260eed.isUndefined(_0x38263b) && (_0x2ae324.lookup = _0x38263b);
          _0x4c75b3.socketPath ? _0x2ae324.socketPath = _0x4c75b3.socketPath : (_0x2ae324.hostname = _0x12857.hostname.startsWith("[") ? _0x12857.hostname.slice(1, -1) : _0x12857.hostname, _0x2ae324.port = _0x12857.port, _0x1d20b6(_0x2ae324, _0x4c75b3.proxy, _0x5b95fa + "//" + _0x12857.hostname + (_0x12857.port ? ":" + _0x12857.port : "") + _0x2ae324.path));
          const _0xcdde0d = _0x49e560.test(_0x2ae324.protocol);
          if (_0x2ae324.agent = _0xcdde0d ? _0x4c75b3.httpsAgent : _0x4c75b3.httpAgent, _0x33e1b8 ? _0x1eb524 = _0x51720e : _0x4c75b3.transport ? _0x1eb524 = _0x4c75b3.transport : 0 === _0x4c75b3.maxRedirects ? _0x1eb524 = _0xcdde0d ? _0x2cfece.default : _0x2bc07d.default : (_0x4c75b3.maxRedirects && (_0x2ae324.maxRedirects = _0x4c75b3.maxRedirects), _0x4c75b3.beforeRedirect && (_0x2ae324.beforeRedirects.config = _0x4c75b3.beforeRedirect), _0x1eb524 = _0xcdde0d ? _0x394a0a : _0x41033c), _0x4c75b3.maxBodyLength > -1 ? _0x2ae324.maxBodyLength = _0x4c75b3.maxBodyLength : _0x2ae324.maxBodyLength = Infinity, _0x4c75b3.insecureHTTPParser && (_0x2ae324.insecureHTTPParser = _0x4c75b3.insecureHTTPParser), _0x20417c = _0x1eb524.request(_0x2ae324, function (_0x30fa3e) {
            if (_0x20417c.destroyed) {
              return;
            }
            const _0x381f73 = [_0x30fa3e];
            const _0x53c49a = _0x260eed.toFiniteNumber(_0x30fa3e.headers["content-length"]);
            if (_0x40e375 || _0x3a7db6) {
              {
                const _0xf89b2b = new _0x49e112({
                  maxRate: _0x260eed.toFiniteNumber(_0x3a7db6)
                });
                _0x40e375 && _0xf89b2b.on("progress", _0x4a9f21(_0xf89b2b, _0xe1d457(_0x53c49a, _0x45067e(_0xb674e9(_0x40e375), true, 3))));
                _0x381f73.push(_0xf89b2b);
              }
            }
            let _0x4d33bc = _0x30fa3e;
            const _0x3da6a2 = _0x30fa3e.req || _0x20417c;
            if (false !== _0x4c75b3.decompress && _0x30fa3e.headers["content-encoding"]) {
              switch ("HEAD" !== _0x1371ce && 204 !== _0x30fa3e.statusCode || delete _0x30fa3e.headers["content-encoding"], (_0x30fa3e.headers["content-encoding"] || "").toLowerCase()) {
                case "gzip":
                case "x-gzip":
                case "compress":
                case "x-compress":
                  _0x381f73.push(_0x5ae20f.default.createUnzip(_0x28d916));
                  delete _0x30fa3e.headers["content-encoding"];
                  break;
                case "deflate":
                  _0x381f73.push(new _0x3fa311());
                  _0x381f73.push(_0x5ae20f.default.createUnzip(_0x28d916));
                  delete _0x30fa3e.headers["content-encoding"];
                  break;
                case "br":
                  _0x47a0e3 && (_0x381f73.push(_0x5ae20f.default.createBrotliDecompress(_0x59ab25)), delete _0x30fa3e.headers["content-encoding"]);
              }
            }
            _0x4d33bc = _0x381f73.length > 1 ? _0x2d3284.default.pipeline(_0x381f73, _0x260eed.noop) : _0x381f73[0];
            const _0xfba078 = {
              status: _0x30fa3e.statusCode,
              statusText: _0x30fa3e.statusMessage,
              headers: new _0x2ada45(_0x30fa3e.headers),
              config: _0x4c75b3,
              request: _0x3da6a2
            };
            if ("stream" === _0x38cf75) {
              _0xfba078.data = _0x4d33bc;
              _0x34d296(_0x49cf14, _0x82a9c7, _0xfba078);
            } else {
              const _0x5a54a7 = [];
              let _0x4637d6 = 0;
              _0x4d33bc.on("data", function (_0x4702d6) {
                _0x5a54a7.push(_0x4702d6);
                _0x4637d6 += _0x4702d6.length;
                _0x4c75b3.maxContentLength > -1 && _0x4637d6 > _0x4c75b3.maxContentLength && (_0x42a8e7 = true, _0x4d33bc.destroy(), _0x4d5a8a(new _0x31b2f6("maxContentLength size of " + _0x4c75b3.maxContentLength + " exceeded", _0x31b2f6.ERR_BAD_RESPONSE, _0x4c75b3, _0x3da6a2)));
              });
              _0x4d33bc.on("aborted", function () {
                if (_0x42a8e7) {
                  return;
                }
                const _0x17b429 = new _0x31b2f6("stream has been aborted", _0x31b2f6.ERR_BAD_RESPONSE, _0x4c75b3, _0x3da6a2);
                _0x4d33bc.destroy(_0x17b429);
                _0x82a9c7(_0x17b429);
              });
              _0x4d33bc.on("error", function (_0x11c87e) {
                _0x20417c.destroyed || _0x82a9c7(_0x31b2f6.from(_0x11c87e, null, _0x4c75b3, _0x3da6a2));
              });
              _0x4d33bc.on("end", function () {
                {
                  try {
                    let _0x581335 = 1 === _0x5a54a7.length ? _0x5a54a7[0] : Buffer.concat(_0x5a54a7);
                    "arraybuffer" !== _0x38cf75 && (_0x581335 = _0x581335.toString(_0x2d1605), _0x2d1605 && "utf8" !== _0x2d1605 || (_0x581335 = _0x260eed.stripBOM(_0x581335)));
                    _0xfba078.data = _0x581335;
                  } catch (_0x9497bd) {
                    return _0x82a9c7(_0x31b2f6.from(_0x9497bd, null, _0x4c75b3, _0xfba078.request, _0xfba078));
                  }
                  _0x34d296(_0x49cf14, _0x82a9c7, _0xfba078);
                }
              });
            }
            _0xd86e11.once("abort", _0x37bc3f => {
              _0x4d33bc.destroyed || (_0x4d33bc.emit("error", _0x37bc3f), _0x4d33bc.destroy());
            });
          }), _0xd86e11.once("abort", _0xcc281f => {
            _0x20417c.close ? _0x20417c.close() : _0x20417c.destroy(_0xcc281f);
          }), _0x20417c.on("error", function (_0x8ba125) {
            _0x82a9c7(_0x31b2f6.from(_0x8ba125, null, _0x4c75b3, _0x20417c));
          }), _0x20417c.on("socket", function (_0x263ab3) {
            _0x263ab3.setKeepAlive(true, 60000);
          }), _0x4c75b3.timeout) {
            const _0x5a6944 = parseInt(_0x4c75b3.timeout, 10);
            if (Number.isNaN(_0x5a6944)) {
              return void _0x4d5a8a(new _0x31b2f6("error trying to parse `config.timeout` to int", _0x31b2f6.ERR_BAD_OPTION_VALUE, _0x4c75b3, _0x20417c));
            }
            _0x20417c.setTimeout(_0x5a6944, function () {
              if (_0x5bc0a1) {
                return;
              }
              let _0x22c18b = _0x4c75b3.timeout ? "timeout of " + _0x4c75b3.timeout + "ms exceeded" : "timeout exceeded";
              const _0x547d7b = _0x4c75b3.transitional || _0x14e25d;
              _0x4c75b3.timeoutErrorMessage && (_0x22c18b = _0x4c75b3.timeoutErrorMessage);
              _0x4d5a8a(new _0x31b2f6(_0x22c18b, _0x547d7b.clarifyTimeoutError ? _0x31b2f6.ETIMEDOUT : _0x31b2f6.ECONNABORTED, _0x4c75b3, _0x20417c));
            });
          } else {
            _0x20417c.setTimeout(0);
          }
          if (_0x260eed.isStream(_0x344c7c)) {
            let _0x18726f = false;
            let _0x3cc2ab = false;
            _0x344c7c.on("end", () => {
              _0x18726f = true;
            });
            _0x344c7c.once("error", _0x34d7c6 => {
              _0x3cc2ab = true;
              _0x20417c.destroy(_0x34d7c6);
            });
            _0x344c7c.on("close", () => {
              _0x18726f || _0x3cc2ab || _0x4d5a8a(new _0x4c0984("Request stream has been aborted", _0x4c75b3, _0x20417c));
            });
            _0x344c7c.pipe(_0x20417c);
          } else {
            _0x344c7c && _0x20417c.write(_0x344c7c);
            _0x20417c.end();
          }
        };
        return new Promise((_0x518cad, _0x3f3fc3) => {
          let _0x151a4e;
          let _0x2b1b1e;
          const _0x4e4719 = (_0x2f1f76, _0x2a16f2) => {
            _0x2b1b1e || (_0x2b1b1e = true, _0x151a4e && _0x151a4e(_0x2f1f76, _0x2a16f2));
          };
          const _0xc2de9f = _0x25793c => {
            {
              _0x4e4719(_0x25793c, true);
              _0x3f3fc3(_0x25793c);
            }
          };
          _0x3f560d(_0x5d98db => {
            _0x4e4719(_0x5d98db);
            _0x518cad(_0x5d98db);
          }, _0xc2de9f, _0x240a55 => _0x151a4e = _0x240a55).catch(_0xc2de9f);
        });
        var _0x3f560d;
      };
      const _0x3a2c15 = _0x40ae52.hasStandardBrowserEnv ? ((_0x2b99dc, _0x4ee611) => _0x53f6a0 => (_0x53f6a0 = new URL(_0x53f6a0, _0x40ae52.origin), _0x2b99dc.protocol === _0x53f6a0.protocol && _0x2b99dc.host === _0x53f6a0.host && (_0x4ee611 || _0x2b99dc.port === _0x53f6a0.port)))(new URL(_0x40ae52.origin), _0x40ae52.navigator && /(msie|trident)/i.test(_0x40ae52.navigator.userAgent)) : () => true;
      const _0x1bb320 = _0x40ae52.hasStandardBrowserEnv ? {
        write(_0x2857ce, _0x18adcf, _0x119526, _0x5e93e1, _0x5212c0, _0x59e872, _0x49b87b) {
          if ("undefined" == typeof document) {
            return;
          }
          const _0x360a1d = [_0x2857ce + "=" + encodeURIComponent(_0x18adcf)];
          _0x260eed.isNumber(_0x119526) && _0x360a1d.push("expires=" + new Date(_0x119526).toUTCString());
          _0x260eed.isString(_0x5e93e1) && _0x360a1d.push("path=" + _0x5e93e1);
          _0x260eed.isString(_0x5212c0) && _0x360a1d.push("domain=" + _0x5212c0);
          true === _0x59e872 && _0x360a1d.push("secure");
          _0x260eed.isString(_0x49b87b) && _0x360a1d.push("SameSite=" + _0x49b87b);
          document.cookie = _0x360a1d.join("; ");
        },
        read(_0x451871) {
          if ("undefined" == typeof document) {
            return null;
          }
          const _0x2d43db = document.cookie.match(RegExp("(?:^|; )" + _0x451871 + "=([^;]*)"));
          return _0x2d43db ? decodeURIComponent(_0x2d43db[1]) : null;
        },
        remove(_0x5d88fb) {
          {
            this.write(_0x5d88fb, "", Date.now() - 86400000, "/");
          }
        }
      } : {
        write() {},
        read: () => null,
        remove() {}
      };
      const _0x3fa04e = _0xbda752 => _0xbda752 instanceof _0x2ada45 ? {
        ..._0xbda752
      } : _0xbda752;
      function _0x3145eb(_0x473564, _0x401074) {
        _0x401074 = _0x401074 || {};
        const _0x116988 = {};
        function _0x3b2fae(_0x3bdd44, _0x5d993f, _0x10abc7, _0x238edb) {
          return _0x260eed.isPlainObject(_0x3bdd44) && _0x260eed.isPlainObject(_0x5d993f) ? _0x260eed.merge.call({
            caseless: _0x238edb
          }, _0x3bdd44, _0x5d993f) : _0x260eed.isPlainObject(_0x5d993f) ? _0x260eed.merge({}, _0x5d993f) : _0x260eed.isArray(_0x5d993f) ? _0x5d993f.slice() : _0x5d993f;
        }
        function _0x2e7223(_0x28eedb, _0x3afb1b, _0x39f874, _0x37dc04) {
          return _0x260eed.isUndefined(_0x3afb1b) ? _0x260eed.isUndefined(_0x28eedb) ? undefined : _0x3b2fae(undefined, _0x28eedb, 0, _0x37dc04) : _0x3b2fae(_0x28eedb, _0x3afb1b, 0, _0x37dc04);
        }
        function _0x3cc6c3(_0xde648f, _0xbeaffa) {
          if (!_0x260eed.isUndefined(_0xbeaffa)) {
            return _0x3b2fae(undefined, _0xbeaffa);
          }
        }
        function _0x330c1a(_0x30059f, _0x317028) {
          return _0x260eed.isUndefined(_0x317028) ? _0x260eed.isUndefined(_0x30059f) ? undefined : _0x3b2fae(undefined, _0x30059f) : _0x3b2fae(undefined, _0x317028);
        }
        function _0x5cf628(_0x134cf7, _0x1bccf0, _0x3c5b9a) {
          return _0x3c5b9a in _0x401074 ? _0x3b2fae(_0x134cf7, _0x1bccf0) : _0x3c5b9a in _0x473564 ? _0x3b2fae(undefined, _0x134cf7) : undefined;
        }
        const _0x8fcc7a = {
          url: _0x3cc6c3,
          method: _0x3cc6c3,
          data: _0x3cc6c3,
          baseURL: _0x330c1a,
          transformRequest: _0x330c1a,
          transformResponse: _0x330c1a,
          paramsSerializer: _0x330c1a,
          timeout: _0x330c1a,
          timeoutMessage: _0x330c1a,
          withCredentials: _0x330c1a,
          withXSRFToken: _0x330c1a,
          adapter: _0x330c1a,
          responseType: _0x330c1a,
          xsrfCookieName: _0x330c1a,
          xsrfHeaderName: _0x330c1a,
          onUploadProgress: _0x330c1a,
          onDownloadProgress: _0x330c1a,
          decompress: _0x330c1a,
          maxContentLength: _0x330c1a,
          maxBodyLength: _0x330c1a,
          beforeRedirect: _0x330c1a,
          transport: _0x330c1a,
          httpAgent: _0x330c1a,
          httpsAgent: _0x330c1a,
          cancelToken: _0x330c1a,
          socketPath: _0x330c1a,
          responseEncoding: _0x330c1a,
          validateStatus: _0x5cf628,
          headers(_0x179dc2, _0x2d391c, _0x17fec4) {
            {
              return _0x2e7223(_0x3fa04e(_0x179dc2), _0x3fa04e(_0x2d391c), 0, true);
            }
          }
        };
        _0x260eed.forEach(Object.keys({
          ..._0x473564,
          ..._0x401074
        }), function (_0x4f063b) {
          {
            const _0x1de067 = _0x8fcc7a[_0x4f063b] || _0x2e7223;
            const _0x2d142b = _0x1de067(_0x473564[_0x4f063b], _0x401074[_0x4f063b], _0x4f063b);
            _0x260eed.isUndefined(_0x2d142b) && _0x1de067 !== _0x5cf628 || (_0x116988[_0x4f063b] = _0x2d142b);
          }
        });
        return _0x116988;
      }
      const _0x620c2e = _0x413f2d => {
        {
          const _0x2c0f51 = _0x3145eb({}, _0x413f2d);
          let {
            data: _0x8ac871,
            withXSRFToken: _0x550154,
            xsrfHeaderName: _0x1ab9a7,
            xsrfCookieName: _0x6a7969,
            headers: _0x3f3377,
            auth: _0x1e59cc
          } = _0x2c0f51;
          if (_0x2c0f51.headers = _0x3f3377 = _0x2ada45.from(_0x3f3377), _0x2c0f51.url = _0x14eee4(_0x177358(_0x2c0f51.baseURL, _0x2c0f51.url, _0x2c0f51.allowAbsoluteUrls), _0x413f2d.params, _0x413f2d.paramsSerializer), _0x1e59cc && _0x3f3377.set("Authorization", "Basic " + btoa((_0x1e59cc.username || "") + ":" + (_0x1e59cc.password ? unescape(encodeURIComponent(_0x1e59cc.password)) : ""))), _0x260eed.isFormData(_0x8ac871)) {
            if (_0x40ae52.hasStandardBrowserEnv || _0x40ae52.hasStandardBrowserWebWorkerEnv) {
              _0x3f3377.setContentType(undefined);
            } else {
              if (_0x260eed.isFunction(_0x8ac871.getHeaders)) {
                const _0xbca1df = _0x8ac871.getHeaders();
                const _0x8e4b16 = ["content-type", "content-length"];
                Object.entries(_0xbca1df).forEach(([_0x2ca839, _0x4f174a]) => {
                  {
                    _0x8e4b16.includes(_0x2ca839.toLowerCase()) && _0x3f3377.set(_0x2ca839, _0x4f174a);
                  }
                });
              }
            }
          }
          if (_0x40ae52.hasStandardBrowserEnv && (_0x550154 && _0x260eed.isFunction(_0x550154) && (_0x550154 = _0x550154(_0x2c0f51)), _0x550154 || false !== _0x550154 && _0x3a2c15(_0x2c0f51.url))) {
            {
              const _0x5a4fb1 = _0x1ab9a7 && _0x6a7969 && _0x1bb320.read(_0x6a7969);
              _0x5a4fb1 && _0x3f3377.set(_0x1ab9a7, _0x5a4fb1);
            }
          }
          return _0x2c0f51;
        }
      };
      const _0x15c7ab = "undefined" != typeof XMLHttpRequest && function (_0x336d30) {
        return new Promise(function (_0x2157a7, _0x33bde9) {
          const _0x4342b3 = _0x620c2e(_0x336d30);
          let _0x110161 = _0x4342b3.data;
          const _0x3e3922 = _0x2ada45.from(_0x4342b3.headers).normalize();
          let _0x9186eb;
          let _0x4c00f9;
          let _0x28a791;
          let _0x167965;
          let _0x57bcb2;
          let {
            responseType: _0x2144bc,
            onUploadProgress: _0x1587d,
            onDownloadProgress: _0x375574
          } = _0x4342b3;
          function _0x15715b() {
            _0x167965 && _0x167965();
            _0x57bcb2 && _0x57bcb2();
            _0x4342b3.cancelToken && _0x4342b3.cancelToken.unsubscribe(_0x9186eb);
            _0x4342b3.signal && _0x4342b3.signal.removeEventListener("abort", _0x9186eb);
          }
          let _0x3295f0 = new XMLHttpRequest();
          function _0x51f5dd() {
            if (!_0x3295f0) {
              return;
            }
            const _0x27bca1 = _0x2ada45.from("getAllResponseHeaders" in _0x3295f0 && _0x3295f0.getAllResponseHeaders());
            _0x34d296(function (_0x31a5c4) {
              _0x2157a7(_0x31a5c4);
              _0x15715b();
            }, function (_0x143364) {
              _0x33bde9(_0x143364);
              _0x15715b();
            }, {
              data: _0x2144bc && "text" !== _0x2144bc && "json" !== _0x2144bc ? _0x3295f0.response : _0x3295f0.responseText,
              status: _0x3295f0.status,
              statusText: _0x3295f0.statusText,
              headers: _0x27bca1,
              config: _0x336d30,
              request: _0x3295f0
            });
            _0x3295f0 = null;
          }
          _0x3295f0.open(_0x4342b3.method.toUpperCase(), _0x4342b3.url, true);
          _0x3295f0.timeout = _0x4342b3.timeout;
          "onloadend" in _0x3295f0 ? _0x3295f0.onloadend = _0x51f5dd : _0x3295f0.onreadystatechange = function () {
            {
              _0x3295f0 && 4 === _0x3295f0.readyState && (0 !== _0x3295f0.status || _0x3295f0.responseURL && 0 === _0x3295f0.responseURL.indexOf("file:")) && setTimeout(_0x51f5dd);
            }
          };
          _0x3295f0.onabort = function () {
            {
              _0x3295f0 && (_0x33bde9(new _0x31b2f6("Request aborted", _0x31b2f6.ECONNABORTED, _0x336d30, _0x3295f0)), _0x3295f0 = null);
            }
          };
          _0x3295f0.onerror = function (_0x5be3d2) {
            const _0xb4a770 = new _0x31b2f6(_0x5be3d2 && _0x5be3d2.message ? _0x5be3d2.message : "Network Error", _0x31b2f6.ERR_NETWORK, _0x336d30, _0x3295f0);
            _0xb4a770.event = _0x5be3d2 || null;
            _0x33bde9(_0xb4a770);
            _0x3295f0 = null;
          };
          _0x3295f0.ontimeout = function () {
            let _0x3adc49 = _0x4342b3.timeout ? "timeout of " + _0x4342b3.timeout + "ms exceeded" : "timeout exceeded";
            const _0x53e76a = _0x4342b3.transitional || _0x14e25d;
            _0x4342b3.timeoutErrorMessage && (_0x3adc49 = _0x4342b3.timeoutErrorMessage);
            _0x33bde9(new _0x31b2f6(_0x3adc49, _0x53e76a.clarifyTimeoutError ? _0x31b2f6.ETIMEDOUT : _0x31b2f6.ECONNABORTED, _0x336d30, _0x3295f0));
            _0x3295f0 = null;
          };
          undefined === _0x110161 && _0x3e3922.setContentType(null);
          "setRequestHeader" in _0x3295f0 && _0x260eed.forEach(_0x3e3922.toJSON(), function (_0x31a140, _0x194b2e) {
            _0x3295f0.setRequestHeader(_0x194b2e, _0x31a140);
          });
          _0x260eed.isUndefined(_0x4342b3.withCredentials) || (_0x3295f0.withCredentials = !!_0x4342b3.withCredentials);
          _0x2144bc && "json" !== _0x2144bc && (_0x3295f0.responseType = _0x4342b3.responseType);
          _0x375574 && ([_0x28a791, _0x57bcb2] = _0x45067e(_0x375574, true), _0x3295f0.addEventListener("progress", _0x28a791));
          _0x1587d && _0x3295f0.upload && ([_0x4c00f9, _0x167965] = _0x45067e(_0x1587d), _0x3295f0.upload.addEventListener("progress", _0x4c00f9), _0x3295f0.upload.addEventListener("loadend", _0x167965));
          (_0x4342b3.cancelToken || _0x4342b3.signal) && (_0x9186eb = _0xcc2574 => {
            _0x3295f0 && (_0x33bde9(!_0xcc2574 || _0xcc2574.type ? new _0x4c0984(null, _0x336d30, _0x3295f0) : _0xcc2574), _0x3295f0.abort(), _0x3295f0 = null);
          }, _0x4342b3.cancelToken && _0x4342b3.cancelToken.subscribe(_0x9186eb), _0x4342b3.signal && (_0x4342b3.signal.aborted ? _0x9186eb() : _0x4342b3.signal.addEventListener("abort", _0x9186eb)));
          const _0x130948 = _0x45a463(_0x4342b3.url);
          _0x130948 && -1 === _0x40ae52.protocols.indexOf(_0x130948) ? _0x33bde9(new _0x31b2f6("Unsupported protocol " + _0x130948 + ":", _0x31b2f6.ERR_BAD_REQUEST, _0x336d30)) : _0x3295f0.send(_0x110161 || null);
        });
      };
      const _0x54939b = (_0x466812, _0x110e71) => {
        _0x466812 = _0x466812 ? _0x466812.filter(Boolean) : [];
        const {
          length: _0xc4db53
        } = _0x466812;
        if (_0x110e71 || _0xc4db53) {
          {
            let _0x341167;
            let _0x4911a2 = new AbortController();
            const _0x3ee5ce = function (_0x5c9a8e) {
              {
                if (!_0x341167) {
                  _0x341167 = true;
                  _0x2e938f();
                  const _0x4788f3 = _0x5c9a8e instanceof Error ? _0x5c9a8e : this.reason;
                  _0x4911a2.abort(_0x4788f3 instanceof _0x31b2f6 ? _0x4788f3 : new _0x4c0984(_0x4788f3 instanceof Error ? _0x4788f3.message : _0x4788f3));
                }
              }
            };
            let _0x5e6ce8 = _0x110e71 && setTimeout(() => {
              _0x5e6ce8 = null;
              _0x3ee5ce(new _0x31b2f6("timeout " + _0x110e71 + " of ms exceeded", _0x31b2f6.ETIMEDOUT));
            }, _0x110e71);
            const _0x2e938f = () => {
              _0x466812 && (_0x5e6ce8 && clearTimeout(_0x5e6ce8), _0x5e6ce8 = null, _0x466812.forEach(_0x1d4822 => {
                _0x1d4822.unsubscribe ? _0x1d4822.unsubscribe(_0x3ee5ce) : _0x1d4822.removeEventListener("abort", _0x3ee5ce);
              }), _0x466812 = null);
            };
            _0x466812.forEach(_0x5dd839 => _0x5dd839.addEventListener("abort", _0x3ee5ce));
            const {
              signal: _0x3445d0
            } = _0x4911a2;
            _0x3445d0.unsubscribe = () => _0x260eed.asap(_0x2e938f);
            return _0x3445d0;
          }
        }
      };
      const _0x27e9e2 = function* (_0x3a4fba, _0x506bd4) {
        let _0x4d3c65 = _0x3a4fba.byteLength;
        if (!_0x506bd4 || _0x506bd4 > _0x4d3c65) {
          return void (yield _0x3a4fba);
        }
        let _0x4652de;
        let _0x1b2efa = 0;
        for (; _0x4d3c65 > _0x1b2efa;) {
          _0x4652de = _0x1b2efa + _0x506bd4;
          yield _0x3a4fba.slice(_0x1b2efa, _0x4652de);
          _0x1b2efa = _0x4652de;
        }
      };
      const _0x525431 = (_0x2204ef, _0x55299a, _0xe9cb4a, _0x25330c) => {
        {
          const _0x2c1e63 = async function* (_0x79ac0d, _0x241bb1) {
            for await (const _0x4cdefe of async function* (_0x2b1555) {
              if (_0x2b1555[Symbol.asyncIterator]) {
                return void (yield* _0x2b1555);
              }
              const _0x585962 = _0x2b1555.getReader();
              try {
                {
                  for (;;) {
                    const {
                      done: _0x153699,
                      value: _0x59f8bf
                    } = await _0x585962.read();
                    if (_0x153699) {
                      break;
                    }
                    yield _0x59f8bf;
                  }
                }
              } finally {
                await _0x585962.cancel();
              }
            }(_0x79ac0d)) yield* _0x27e9e2(_0x4cdefe, _0x241bb1);
          }(_0x2204ef, _0x55299a);
          let _0x8329ea;
          let _0x26f203 = 0;
          let _0x1cbc5c = _0x5e3b98 => {
            _0x8329ea || (_0x8329ea = true, _0x25330c && _0x25330c(_0x5e3b98));
          };
          return new ReadableStream({
            async pull(_0x5fcbcd) {
              try {
                const {
                  done: _0x5979ff,
                  value: _0x302af3
                } = await _0x2c1e63.next();
                if (_0x5979ff) {
                  _0x1cbc5c();
                  return void _0x5fcbcd.close();
                }
                let _0x464aa5 = _0x302af3.byteLength;
                if (_0xe9cb4a) {
                  {
                    _0x26f203 += _0x464aa5;
                    let _0x257c6f = _0x26f203;
                    _0xe9cb4a(_0x257c6f);
                  }
                }
                _0x5fcbcd.enqueue(new Uint8Array(_0x302af3));
              } catch (_0x24456c) {
                throw _0x1cbc5c(_0x24456c), _0x24456c;
              }
            },
            cancel: _0x220b34 => (_0x1cbc5c(_0x220b34), _0x2c1e63.return())
          }, {
            highWaterMark: 2
          });
        }
      };
      const {
        isFunction: _0x29e63d
      } = _0x260eed;
      const _0x39206d = (({
        Request: _0x5685eb,
        Response: _0x238e96
      }) => ({
        Request: _0x5685eb,
        Response: _0x238e96
      }))(_0x260eed.global);
      const {
        ReadableStream: _0x3b87f1,
        TextEncoder: _0x4ad3a0
      } = _0x260eed.global;
      const _0x8b1aa3 = (_0x39122f, ..._0x3eef29) => {
        try {
          return !!_0x39122f(..._0x3eef29);
        } catch (_0x42a671) {
          return false;
        }
      };
      const _0x233eea = _0x26e9b1 => {
        {
          _0x26e9b1 = _0x260eed.merge.call({
            skipUndefined: true
          }, _0x39206d, _0x26e9b1);
          const {
            fetch: _0x46e56a,
            Request: _0x2fa6ff,
            Response: _0x27ab9a
          } = _0x26e9b1;
          const _0x51e96b = _0x46e56a ? _0x29e63d(_0x46e56a) : "function" == typeof fetch;
          const _0x1303de = _0x29e63d(_0x2fa6ff);
          const _0x226549 = _0x29e63d(_0x27ab9a);
          if (!_0x51e96b) {
            return false;
          }
          const _0x235d53 = _0x51e96b && _0x29e63d(_0x3b87f1);
          const _0x47436c = _0x51e96b && ("function" == typeof _0x4ad3a0 ? (_0x469dfb = new _0x4ad3a0(), _0x30fd6c => _0x469dfb.encode(_0x30fd6c)) : async _0x55bd4f => new Uint8Array(await new _0x2fa6ff(_0x55bd4f).arrayBuffer()));
          var _0x469dfb;
          const _0x49f583 = _0x1303de && _0x235d53 && _0x8b1aa3(() => {
            let _0x14d937 = false;
            const _0x44bba6 = new _0x2fa6ff(_0x40ae52.origin, {
              body: new _0x3b87f1(),
              method: "POST",
              get duplex() {
                _0x14d937 = true;
                return "half";
              }
            }).headers.has("Content-Type");
            return _0x14d937 && !_0x44bba6;
          });
          const _0x5c577e = _0x226549 && _0x235d53 && _0x8b1aa3(() => _0x260eed.isReadableStream(new _0x27ab9a("").body));
          const _0x52167c = {
            stream: _0x5c577e && (_0x57ea34 => _0x57ea34.body)
          };
          _0x51e96b && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(_0x2077e9 => {
            !_0x52167c[_0x2077e9] && (_0x52167c[_0x2077e9] = (_0x569ca4, _0x2e8f92) => {
              {
                let _0x2b5162 = _0x569ca4 && _0x569ca4[_0x2077e9];
                if (_0x2b5162) {
                  return _0x2b5162.call(_0x569ca4);
                }
                throw new _0x31b2f6("Response type '" + _0x2077e9 + "' is not supported", _0x31b2f6.ERR_NOT_SUPPORT, _0x2e8f92);
              }
            });
          });
          return async _0x200a28 => {
            let {
              url: _0x4a1d62,
              method: _0x26d929,
              data: _0x4e1a0b,
              signal: _0x272a7f,
              cancelToken: _0x12ab23,
              timeout: _0x183184,
              onDownloadProgress: _0x3d1808,
              onUploadProgress: _0x18891d,
              responseType: _0x108f98,
              headers: _0x35e84d,
              withCredentials: _0x5affee = "same-origin",
              fetchOptions: _0x252d50
            } = _0x620c2e(_0x200a28);
            let _0x258bb6 = _0x46e56a || fetch;
            _0x108f98 = _0x108f98 ? (_0x108f98 + "").toLowerCase() : "text";
            let _0x1f68b8 = _0x54939b([_0x272a7f, _0x12ab23 && _0x12ab23.toAbortSignal()], _0x183184);
            let _0x28dd94 = null;
            const _0x9bf8d = _0x1f68b8 && _0x1f68b8.unsubscribe && (() => {
              _0x1f68b8.unsubscribe();
            });
            let _0x423b43;
            try {
              {
                if (_0x18891d && _0x49f583 && "get" !== _0x26d929 && "head" !== _0x26d929 && 0 !== (_0x423b43 = await (async (_0x575443, _0x116b28) => {
                  const _0x1c9f31 = _0x260eed.toFiniteNumber(_0x575443.getContentLength());
                  return null == _0x1c9f31 ? (async _0x5d084c => {
                    if (null == _0x5d084c) {
                      return 0;
                    }
                    if (_0x260eed.isBlob(_0x5d084c)) {
                      return _0x5d084c.size;
                    }
                    if (_0x260eed.isSpecCompliantForm(_0x5d084c)) {
                      const _0x14508b = new _0x2fa6ff(_0x40ae52.origin, {
                        method: "POST",
                        body: _0x5d084c
                      });
                      return (await _0x14508b.arrayBuffer()).byteLength;
                    }
                    return _0x260eed.isArrayBufferView(_0x5d084c) || _0x260eed.isArrayBuffer(_0x5d084c) ? _0x5d084c.byteLength : (_0x260eed.isURLSearchParams(_0x5d084c) && (_0x5d084c += ""), _0x260eed.isString(_0x5d084c) ? (await _0x47436c(_0x5d084c)).byteLength : undefined);
                  })(_0x116b28) : _0x1c9f31;
                })(_0x35e84d, _0x4e1a0b))) {
                  let _0x3f4979;
                  let _0x2365a0 = new _0x2fa6ff(_0x4a1d62, {
                    method: "POST",
                    body: _0x4e1a0b,
                    duplex: "half"
                  });
                  if (_0x260eed.isFormData(_0x4e1a0b) && (_0x3f4979 = _0x2365a0.headers.get("content-type")) && _0x35e84d.setContentType(_0x3f4979), _0x2365a0.body) {
                    const [_0x79b24, _0x57890b] = _0xe1d457(_0x423b43, _0x45067e(_0xb674e9(_0x18891d)));
                    _0x4e1a0b = _0x525431(_0x2365a0.body, 65536, _0x79b24, _0x57890b);
                  }
                }
                _0x260eed.isString(_0x5affee) || (_0x5affee = _0x5affee ? "include" : "omit");
                const _0xe299a0 = _0x1303de && "credentials" in _0x2fa6ff.prototype;
                const _0x1d26fd = {
                  ..._0x252d50,
                  signal: _0x1f68b8,
                  method: _0x26d929.toUpperCase(),
                  headers: _0x35e84d.normalize().toJSON(),
                  body: _0x4e1a0b,
                  duplex: "half",
                  credentials: _0xe299a0 ? _0x5affee : undefined
                };
                _0x28dd94 = _0x1303de && new _0x2fa6ff(_0x4a1d62, _0x1d26fd);
                let _0x435b60 = await (_0x1303de ? _0x258bb6(_0x28dd94, _0x252d50) : _0x258bb6(_0x4a1d62, _0x1d26fd));
                const _0x43fd67 = _0x5c577e && ("stream" === _0x108f98 || "response" === _0x108f98);
                if (_0x5c577e && (_0x3d1808 || _0x43fd67 && _0x9bf8d)) {
                  const _0xbaf033 = {};
                  ["status", "statusText", "headers"].forEach(_0x6b164f => {
                    _0xbaf033[_0x6b164f] = _0x435b60[_0x6b164f];
                  });
                  const _0x349979 = _0x260eed.toFiniteNumber(_0x435b60.headers.get("content-length"));
                  const [_0xdbd906, _0x21d88a] = _0x3d1808 && _0xe1d457(_0x349979, _0x45067e(_0xb674e9(_0x3d1808), true)) || [];
                  _0x435b60 = new _0x27ab9a(_0x525431(_0x435b60.body, 65536, _0xdbd906, () => {
                    _0x21d88a && _0x21d88a();
                    _0x9bf8d && _0x9bf8d();
                  }), _0xbaf033);
                }
                _0x108f98 = _0x108f98 || "text";
                let _0x15c23d = await _0x52167c[_0x260eed.findKey(_0x52167c, _0x108f98) || "text"](_0x435b60, _0x200a28);
                !_0x43fd67 && _0x9bf8d && _0x9bf8d();
                return await new Promise((_0x13f84e, _0xf75c9f) => {
                  _0x34d296(_0x13f84e, _0xf75c9f, {
                    data: _0x15c23d,
                    headers: _0x2ada45.from(_0x435b60.headers),
                    status: _0x435b60.status,
                    statusText: _0x435b60.statusText,
                    config: _0x200a28,
                    request: _0x28dd94
                  });
                });
              }
            } catch (_0xd2e99f) {
              {
                if (_0x9bf8d && _0x9bf8d(), _0xd2e99f && "TypeError" === _0xd2e99f.name && /Load failed|fetch/i.test(_0xd2e99f.message)) {
                  throw Object.assign(new _0x31b2f6("Network Error", _0x31b2f6.ERR_NETWORK, _0x200a28, _0x28dd94), {
                    cause: _0xd2e99f.cause || _0xd2e99f
                  });
                }
                throw _0x31b2f6.from(_0xd2e99f, _0xd2e99f && _0xd2e99f.code, _0x200a28, _0x28dd94);
              }
            }
          };
        }
      };
      const _0x229f48 = new Map();
      const _0x3332bf = _0x3eb35e => {
        let _0x35cec1 = _0x3eb35e && _0x3eb35e.env || {};
        const {
          fetch: _0x5b0f1a,
          Request: _0x3c2d62,
          Response: _0x3de936
        } = _0x35cec1;
        const _0x44ca60 = [_0x3c2d62, _0x3de936, _0x5b0f1a];
        let _0x5178e7;
        let _0x775780;
        let _0x2c0e68 = _0x44ca60.length;
        let _0x316fd6 = _0x229f48;
        for (; _0x2c0e68--;) {
          _0x5178e7 = _0x44ca60[_0x2c0e68];
          _0x775780 = _0x316fd6.get(_0x5178e7);
          undefined === _0x775780 && _0x316fd6.set(_0x5178e7, _0x775780 = _0x2c0e68 ? new Map() : _0x233eea(_0x35cec1));
          _0x316fd6 = _0x775780;
        }
        return _0x775780;
      };
      _0x3332bf();
      const _0x48f0b7 = {
        http: _0x593aa2,
        xhr: _0x15c7ab,
        fetch: {
          get: _0x3332bf
        }
      };
      _0x260eed.forEach(_0x48f0b7, (_0x4ccccf, _0x17ffa0) => {
        if (_0x4ccccf) {
          try {
            {
              Object.defineProperty(_0x4ccccf, "name", {
                value: _0x17ffa0
              });
            }
          } catch (_0x5a95f3) {}
          Object.defineProperty(_0x4ccccf, "adapterName", {
            value: _0x17ffa0
          });
        }
      });
      const _0x15ffaa = _0x339b6f => "- " + _0x339b6f;
      const _0x5ad84b = _0x38bd95 => _0x260eed.isFunction(_0x38bd95) || null === _0x38bd95 || false === _0x38bd95;
      const _0x4a7641 = {
        getAdapter(_0x377146, _0x4f3b53) {
          {
            _0x377146 = _0x260eed.isArray(_0x377146) ? _0x377146 : [_0x377146];
            const {
              length: _0x99bc25
            } = _0x377146;
            let _0x5f44c8;
            let _0x594e01;
            const _0x59c82a = {};
            for (let _0x3a5ea7 = 0; _0x99bc25 > _0x3a5ea7; _0x3a5ea7++) {
              let _0x61b7fa;
              if (_0x5f44c8 = _0x377146[_0x3a5ea7], _0x594e01 = _0x5f44c8, !_0x5ad84b(_0x5f44c8) && (_0x594e01 = _0x48f0b7[(_0x61b7fa = _0x5f44c8 + "").toLowerCase()], undefined === _0x594e01)) {
                throw new _0x31b2f6("Unknown adapter '" + _0x61b7fa + "'");
              }
              if (_0x594e01 && (_0x260eed.isFunction(_0x594e01) || (_0x594e01 = _0x594e01.get(_0x4f3b53)))) {
                break;
              }
              _0x59c82a[_0x61b7fa || "#" + _0x3a5ea7] = _0x594e01;
            }
            if (!_0x594e01) {
              const _0x20a87a = Object.entries(_0x59c82a).map(([_0x2feea0, _0x360d78]) => "adapter " + _0x2feea0 + " " + (false === _0x360d78 ? "is not supported by the environment" : "is not available in the build"));
              throw new _0x31b2f6("There is no suitable adapter to dispatch the request " + (_0x99bc25 ? _0x20a87a.length > 1 ? "since :\n" + _0x20a87a.map(_0x15ffaa).join("\n") : " " + _0x15ffaa(_0x20a87a[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
            }
            return _0x594e01;
          }
        },
        adapters: _0x48f0b7
      };
      function _0x1c11a5(_0x3e4388) {
        {
          if (_0x3e4388.cancelToken && _0x3e4388.cancelToken.throwIfRequested(), _0x3e4388.signal && _0x3e4388.signal.aborted) {
            throw new _0x4c0984(null, _0x3e4388);
          }
        }
      }
      function _0x541998(_0xcbe8b0) {
        {
          _0x1c11a5(_0xcbe8b0);
          _0xcbe8b0.headers = _0x2ada45.from(_0xcbe8b0.headers);
          _0xcbe8b0.data = _0x2fd333.call(_0xcbe8b0, _0xcbe8b0.transformRequest);
          -1 !== ["post", "put", "patch"].indexOf(_0xcbe8b0.method) && _0xcbe8b0.headers.setContentType("application/x-www-form-urlencoded", false);
          return _0x4a7641.getAdapter(_0xcbe8b0.adapter || _0x5bdeb0.adapter, _0xcbe8b0)(_0xcbe8b0).then(function (_0xc45024) {
            _0x1c11a5(_0xcbe8b0);
            _0xc45024.data = _0x2fd333.call(_0xcbe8b0, _0xcbe8b0.transformResponse, _0xc45024);
            _0xc45024.headers = _0x2ada45.from(_0xc45024.headers);
            return _0xc45024;
          }, function (_0x4756bc) {
            _0x21258e(_0x4756bc) || (_0x1c11a5(_0xcbe8b0), _0x4756bc && _0x4756bc.response && (_0x4756bc.response.data = _0x2fd333.call(_0xcbe8b0, _0xcbe8b0.transformResponse, _0x4756bc.response), _0x4756bc.response.headers = _0x2ada45.from(_0x4756bc.response.headers)));
            return Promise.reject(_0x4756bc);
          });
        }
      }
      const _0x473d1e = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((_0x5e077c, _0x3445a4) => {
        {
          _0x473d1e[_0x5e077c] = function (_0x39537f) {
            return typeof _0x39537f === _0x5e077c || "a" + (1 > _0x3445a4 ? "n " : " ") + _0x5e077c;
          };
        }
      });
      const _0x395f06 = {};
      _0x473d1e.transitional = function (_0x1816fa, _0x3a539c, _0x55a674) {
        return (_0x2d3b5a, _0x1c0ab6, _0x4b0202) => {
          {
            if (false === _0x1816fa) {
              throw new _0x31b2f6(function (_0x9d7598, _0x3aa8a3) {
                return "[Axios v" + _0x4c69c6 + "] Transitional option '" + _0x9d7598 + "'" + _0x3aa8a3 + (_0x55a674 ? ". " + _0x55a674 : "");
              }(_0x1c0ab6, " has been removed" + (_0x3a539c ? " in " + _0x3a539c : "")), _0x31b2f6.ERR_DEPRECATED);
            }
            _0x3a539c && !_0x395f06[_0x1c0ab6] && (_0x395f06[_0x1c0ab6] = true);
            return !_0x1816fa || _0x1816fa(_0x2d3b5a, _0x1c0ab6, _0x4b0202);
          }
        };
      };
      _0x473d1e.spelling = function (_0x120b56) {
        return (_0x1b6d7a, _0xfd3b2) => true;
      };
      const _0x4a74e1 = {
        assertOptions(_0x35ca44, _0x14b297, _0x34d8d3) {
          if ("object" != typeof _0x35ca44) {
            throw new _0x31b2f6("options must be an object", _0x31b2f6.ERR_BAD_OPTION_VALUE);
          }
          const _0x481d91 = Object.keys(_0x35ca44);
          let _0x1f4e76 = _0x481d91.length;
          for (; _0x1f4e76-- > 0;) {
            {
              const _0x37ab3c = _0x481d91[_0x1f4e76];
              const _0x35e727 = _0x14b297[_0x37ab3c];
              if (_0x35e727) {
                const _0x198aca = _0x35ca44[_0x37ab3c];
                const _0x39806f = undefined === _0x198aca || _0x35e727(_0x198aca, _0x37ab3c, _0x35ca44);
                if (true !== _0x39806f) {
                  throw new _0x31b2f6("option " + _0x37ab3c + " must be " + _0x39806f, _0x31b2f6.ERR_BAD_OPTION_VALUE);
                }
                continue;
              }
              if (true !== _0x34d8d3) {
                throw new _0x31b2f6("Unknown option " + _0x37ab3c, _0x31b2f6.ERR_BAD_OPTION);
              }
            }
          }
        },
        validators: _0x473d1e
      };
      const _0x242821 = _0x4a74e1.validators;
      class _0x3ed63a {
        constructor(_0x36b9f3) {
          this.defaults = _0x36b9f3 || {};
          this.interceptors = {
            request: new _0x309244(),
            response: new _0x309244()
          };
        }
        async request(_0x460946, _0x3f53b5) {
          try {
            return await this._request(_0x460946, _0x3f53b5);
          } catch (_0x460002) {
            if (_0x460002 instanceof Error) {
              let _0x332396 = {};
              Error.captureStackTrace ? Error.captureStackTrace(_0x332396) : _0x332396 = Error();
              const _0x1e2440 = _0x332396.stack ? _0x332396.stack.replace(/^.+\n/, "") : "";
              try {
                _0x460002.stack ? _0x1e2440 && !(_0x460002.stack + "").endsWith(_0x1e2440.replace(/^.+\n.+\n/, "")) && (_0x460002.stack += "\n" + _0x1e2440) : _0x460002.stack = _0x1e2440;
              } catch (_0x464626) {}
            }
            throw _0x460002;
          }
        }
        _request(_0x6046c, _0x331031) {
          {
            "string" == typeof _0x6046c ? (_0x331031 = _0x331031 || {}).url = _0x6046c : _0x331031 = _0x6046c || {};
            _0x331031 = _0x3145eb(this.defaults, _0x331031);
            const {
              transitional: _0x5611dc,
              paramsSerializer: _0x24776b,
              headers: _0x10a1a2
            } = _0x331031;
            undefined !== _0x5611dc && _0x4a74e1.assertOptions(_0x5611dc, {
              silentJSONParsing: _0x242821.transitional(_0x242821.boolean),
              forcedJSONParsing: _0x242821.transitional(_0x242821.boolean),
              clarifyTimeoutError: _0x242821.transitional(_0x242821.boolean)
            }, false);
            null != _0x24776b && (_0x260eed.isFunction(_0x24776b) ? _0x331031.paramsSerializer = {
              serialize: _0x24776b
            } : _0x4a74e1.assertOptions(_0x24776b, {
              encode: _0x242821.function,
              serialize: _0x242821.function
            }, true));
            undefined !== _0x331031.allowAbsoluteUrls || (undefined !== this.defaults.allowAbsoluteUrls ? _0x331031.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : _0x331031.allowAbsoluteUrls = true);
            _0x4a74e1.assertOptions(_0x331031, {
              baseUrl: _0x242821.spelling("baseURL"),
              withXsrfToken: _0x242821.spelling("withXSRFToken")
            }, true);
            _0x331031.method = (_0x331031.method || this.defaults.method || "get").toLowerCase();
            let _0x104b63 = _0x10a1a2 && _0x260eed.merge(_0x10a1a2.common, _0x10a1a2[_0x331031.method]);
            _0x10a1a2 && _0x260eed.forEach(["delete", "get", "head", "post", "put", "patch", "common"], _0x109f2a => {
              delete _0x10a1a2[_0x109f2a];
            });
            _0x331031.headers = _0x2ada45.concat(_0x104b63, _0x10a1a2);
            const _0x422f5a = [];
            let _0x5a18e0 = true;
            this.interceptors.request.forEach(function (_0x4ebca4) {
              "function" == typeof _0x4ebca4.runWhen && false === _0x4ebca4.runWhen(_0x331031) || (_0x5a18e0 = _0x5a18e0 && _0x4ebca4.synchronous, _0x422f5a.unshift(_0x4ebca4.fulfilled, _0x4ebca4.rejected));
            });
            const _0x43ffe9 = [];
            let _0x2b7882;
            this.interceptors.response.forEach(function (_0x2b9cd6) {
              _0x43ffe9.push(_0x2b9cd6.fulfilled, _0x2b9cd6.rejected);
            });
            let _0x9ce60a;
            let _0x40495b = 0;
            if (!_0x5a18e0) {
              const _0x2cd0d8 = [_0x541998.bind(this), undefined];
              for (_0x2cd0d8.unshift(..._0x422f5a), _0x2cd0d8.push(..._0x43ffe9), _0x9ce60a = _0x2cd0d8.length, _0x2b7882 = Promise.resolve(_0x331031); _0x9ce60a > _0x40495b;) {
                _0x2b7882 = _0x2b7882.then(_0x2cd0d8[_0x40495b++], _0x2cd0d8[_0x40495b++]);
              }
              return _0x2b7882;
            }
            _0x9ce60a = _0x422f5a.length;
            let _0x4b07be = _0x331031;
            for (; _0x9ce60a > _0x40495b;) {
              {
                const _0x1c3744 = _0x422f5a[_0x40495b++];
                const _0x2d9d2c = _0x422f5a[_0x40495b++];
                try {
                  _0x4b07be = _0x1c3744(_0x4b07be);
                } catch (_0x41c684) {
                  _0x2d9d2c.call(this, _0x41c684);
                  break;
                }
              }
            }
            try {
              {
                _0x2b7882 = _0x541998(_0x4b07be);
              }
            } catch (_0x4e852d) {
              return Promise.reject(_0x4e852d);
            }
            for (_0x40495b = 0, _0x9ce60a = _0x43ffe9.length; _0x9ce60a > _0x40495b;) {
              _0x2b7882 = _0x2b7882.then(_0x43ffe9[_0x40495b++], _0x43ffe9[_0x40495b++]);
            }
            return _0x2b7882;
          }
        }
        getUri(_0x33cf06) {
          return _0x14eee4(_0x177358((_0x33cf06 = _0x3145eb(this.defaults, _0x33cf06)).baseURL, _0x33cf06.url, _0x33cf06.allowAbsoluteUrls), _0x33cf06.params, _0x33cf06.paramsSerializer);
        }
      }
      _0x260eed.forEach(["delete", "get", "head", "options"], function (_0x566cb0) {
        _0x3ed63a.prototype[_0x566cb0] = function (_0x5c4ec5, _0x2bb634) {
          return this.request(_0x3145eb(_0x2bb634 || {}, {
            method: _0x566cb0,
            url: _0x5c4ec5,
            data: (_0x2bb634 || {}).data
          }));
        };
      });
      _0x260eed.forEach(["post", "put", "patch"], function (_0x59bde8) {
        {
          function _0x27c7be(_0x25b4aa) {
            return function (_0x41396a, _0x3c03bb, _0x9d54bf) {
              return this.request(_0x3145eb(_0x9d54bf || {}, {
                method: _0x59bde8,
                headers: _0x25b4aa ? {
                  "Content-Type": "multipart/form-data"
                } : {},
                url: _0x41396a,
                data: _0x3c03bb
              }));
            };
          }
          _0x3ed63a.prototype[_0x59bde8] = _0x27c7be();
          _0x3ed63a.prototype[_0x59bde8 + "Form"] = _0x27c7be(true);
        }
      });
      const _0x1703d2 = _0x3ed63a;
      class _0x1ec915 {
        constructor(_0x2551b9) {
          {
            if ("function" != typeof _0x2551b9) {
              throw new TypeError("executor must be a function.");
            }
            let _0xb8d069;
            this.promise = new Promise(function (_0x5d3554) {
              _0xb8d069 = _0x5d3554;
            });
            const _0x302bec = this;
            this.promise.then(_0x542ebe => {
              if (!_0x302bec._listeners) {
                return;
              }
              let _0x35ad83 = _0x302bec._listeners.length;
              for (; _0x35ad83-- > 0;) {
                _0x302bec._listeners[_0x35ad83](_0x542ebe);
              }
              _0x302bec._listeners = null;
            });
            this.promise.then = _0x22f1f5 => {
              {
                let _0x252bc0;
                const _0x2a939f = new Promise(_0x339eb7 => {
                  _0x302bec.subscribe(_0x339eb7);
                  _0x252bc0 = _0x339eb7;
                }).then(_0x22f1f5);
                _0x2a939f.cancel = function () {
                  _0x302bec.unsubscribe(_0x252bc0);
                };
                return _0x2a939f;
              }
            };
            _0x2551b9(function (_0x3c08f0, _0x1e5551, _0x134514) {
              _0x302bec.reason || (_0x302bec.reason = new _0x4c0984(_0x3c08f0, _0x1e5551, _0x134514), _0xb8d069(_0x302bec.reason));
            });
          }
        }
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        subscribe(_0x310cf4) {
          {
            this.reason ? _0x310cf4(this.reason) : this._listeners ? this._listeners.push(_0x310cf4) : this._listeners = [_0x310cf4];
          }
        }
        unsubscribe(_0x2cded0) {
          if (!this._listeners) {
            return;
          }
          const _0x4f7389 = this._listeners.indexOf(_0x2cded0);
          -1 !== _0x4f7389 && this._listeners.splice(_0x4f7389, 1);
        }
        toAbortSignal() {
          const _0xc4f801 = new AbortController();
          const _0x281746 = _0x59baa1 => {
            _0xc4f801.abort(_0x59baa1);
          };
          this.subscribe(_0x281746);
          _0xc4f801.signal.unsubscribe = () => this.unsubscribe(_0x281746);
          return _0xc4f801.signal;
        }
        static source() {
          let _0x2adcdb;
          return {
            token: new _0x1ec915(function (_0x16fac7) {
              {
                _0x2adcdb = _0x16fac7;
              }
            }),
            cancel: _0x2adcdb
          };
        }
      }
      const _0x44bdea = _0x1ec915;
      const _0x55b44d = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
      };
      Object.entries(_0x55b44d).forEach(([_0x10b0e6, _0x559f18]) => {
        _0x55b44d[_0x559f18] = _0x10b0e6;
      });
      const _0xa4df3 = _0x55b44d;
      const _0x1d1d6a = function _0x745614(_0x11aca9) {
        {
          const _0x5b6d2f = new _0x1703d2(_0x11aca9);
          const _0x50df74 = _0x162704(_0x1703d2.prototype.request, _0x5b6d2f);
          _0x260eed.extend(_0x50df74, _0x1703d2.prototype, _0x5b6d2f, {
            allOwnKeys: true
          });
          _0x260eed.extend(_0x50df74, _0x5b6d2f, null, {
            allOwnKeys: true
          });
          _0x50df74.create = function (_0x540ed1) {
            return _0x745614(_0x3145eb(_0x11aca9, _0x540ed1));
          };
          return _0x50df74;
        }
      }(_0x5bdeb0);
      _0x1d1d6a.Axios = _0x1703d2;
      _0x1d1d6a.CanceledError = _0x4c0984;
      _0x1d1d6a.CancelToken = _0x44bdea;
      _0x1d1d6a.isCancel = _0x21258e;
      _0x1d1d6a.VERSION = _0x4c69c6;
      _0x1d1d6a.toFormData = _0x18cfdf;
      _0x1d1d6a.AxiosError = _0x31b2f6;
      _0x1d1d6a.Cancel = _0x1d1d6a.CanceledError;
      _0x1d1d6a.all = function (_0x1ee2f1) {
        return Promise.all(_0x1ee2f1);
      };
      _0x1d1d6a.spread = function (_0x120671) {
        {
          return function (_0x369930) {
            return _0x120671.apply(null, _0x369930);
          };
        }
      };
      _0x1d1d6a.isAxiosError = function (_0x4e26aa) {
        return _0x260eed.isObject(_0x4e26aa) && true === _0x4e26aa.isAxiosError;
      };
      _0x1d1d6a.mergeConfig = _0x3145eb;
      _0x1d1d6a.AxiosHeaders = _0x2ada45;
      _0x1d1d6a.formToJSON = _0x293009 => _0x4bbadb(_0x260eed.isHTMLForm(_0x293009) ? new FormData(_0x293009) : _0x293009);
      _0x1d1d6a.getAdapter = _0x4a7641.getAdapter;
      _0x1d1d6a.HttpStatusCode = _0xa4df3;
      _0x1d1d6a.default = _0x1d1d6a;
      _0x1fe187.exports = _0x1d1d6a;
    },
    7080(_0x97ec24) {
      "use strict";

      _0x97ec24.exports = JSON.parse("{\"application/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"application/3gpdash-qoe-report+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/3gpp-ims+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/3gpphal+json\":{\"source\":\"iana\",\"compressible\":true},\"application/3gpphalforms+json\":{\"source\":\"iana\",\"compressible\":true},\"application/a2l\":{\"source\":\"iana\"},\"application/ace+cbor\":{\"source\":\"iana\"},\"application/activemessage\":{\"source\":\"iana\"},\"application/activity+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-costmap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-costmapfilter+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-directory+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointcost+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointcostparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointprop+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointpropparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-error+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-networkmap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-networkmapfilter+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-updatestreamcontrol+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-updatestreamparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/aml\":{\"source\":\"iana\"},\"application/andrew-inset\":{\"source\":\"iana\",\"extensions\":[\"ez\"]},\"application/applefile\":{\"source\":\"iana\"},\"application/applixware\":{\"source\":\"apache\",\"extensions\":[\"aw\"]},\"application/at+jwt\":{\"source\":\"iana\"},\"application/atf\":{\"source\":\"iana\"},\"application/atfx\":{\"source\":\"iana\"},\"application/atom+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atom\"]},\"application/atomcat+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomcat\"]},\"application/atomdeleted+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomdeleted\"]},\"application/atomicmail\":{\"source\":\"iana\"},\"application/atomsvc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomsvc\"]},\"application/atsc-dwd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dwd\"]},\"application/atsc-dynamic-event-message\":{\"source\":\"iana\"},\"application/atsc-held+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"held\"]},\"application/atsc-rdt+json\":{\"source\":\"iana\",\"compressible\":true},\"application/atsc-rsat+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rsat\"]},\"application/atxml\":{\"source\":\"iana\"},\"application/auth-policy+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/bacnet-xdd+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/batch-smtp\":{\"source\":\"iana\"},\"application/bdoc\":{\"compressible\":false,\"extensions\":[\"bdoc\"]},\"application/beep+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/calendar+json\":{\"source\":\"iana\",\"compressible\":true},\"application/calendar+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xcs\"]},\"application/call-completion\":{\"source\":\"iana\"},\"application/cals-1840\":{\"source\":\"iana\"},\"application/captive+json\":{\"source\":\"iana\",\"compressible\":true},\"application/cbor\":{\"source\":\"iana\"},\"application/cbor-seq\":{\"source\":\"iana\"},\"application/cccex\":{\"source\":\"iana\"},\"application/ccmp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ccxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ccxml\"]},\"application/cdfx+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"cdfx\"]},\"application/cdmi-capability\":{\"source\":\"iana\",\"extensions\":[\"cdmia\"]},\"application/cdmi-container\":{\"source\":\"iana\",\"extensions\":[\"cdmic\"]},\"application/cdmi-domain\":{\"source\":\"iana\",\"extensions\":[\"cdmid\"]},\"application/cdmi-object\":{\"source\":\"iana\",\"extensions\":[\"cdmio\"]},\"application/cdmi-queue\":{\"source\":\"iana\",\"extensions\":[\"cdmiq\"]},\"application/cdni\":{\"source\":\"iana\"},\"application/cea\":{\"source\":\"iana\"},\"application/cea-2018+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cellml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cfw\":{\"source\":\"iana\"},\"application/city+json\":{\"source\":\"iana\",\"compressible\":true},\"application/clr\":{\"source\":\"iana\"},\"application/clue+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/clue_info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cms\":{\"source\":\"iana\"},\"application/cnrp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/coap-group+json\":{\"source\":\"iana\",\"compressible\":true},\"application/coap-payload\":{\"source\":\"iana\"},\"application/commonground\":{\"source\":\"iana\"},\"application/conference-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cose\":{\"source\":\"iana\"},\"application/cose-key\":{\"source\":\"iana\"},\"application/cose-key-set\":{\"source\":\"iana\"},\"application/cpl+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"cpl\"]},\"application/csrattrs\":{\"source\":\"iana\"},\"application/csta+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cstadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/csvm+json\":{\"source\":\"iana\",\"compressible\":true},\"application/cu-seeme\":{\"source\":\"apache\",\"extensions\":[\"cu\"]},\"application/cwt\":{\"source\":\"iana\"},\"application/cybercash\":{\"source\":\"iana\"},\"application/dart\":{\"compressible\":true},\"application/dash+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpd\"]},\"application/dash-patch+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpp\"]},\"application/dashdelta\":{\"source\":\"iana\"},\"application/davmount+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"davmount\"]},\"application/dca-rft\":{\"source\":\"iana\"},\"application/dcd\":{\"source\":\"iana\"},\"application/dec-dx\":{\"source\":\"iana\"},\"application/dialog-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dicom\":{\"source\":\"iana\"},\"application/dicom+json\":{\"source\":\"iana\",\"compressible\":true},\"application/dicom+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dii\":{\"source\":\"iana\"},\"application/dit\":{\"source\":\"iana\"},\"application/dns\":{\"source\":\"iana\"},\"application/dns+json\":{\"source\":\"iana\",\"compressible\":true},\"application/dns-message\":{\"source\":\"iana\"},\"application/docbook+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"dbk\"]},\"application/dots+cbor\":{\"source\":\"iana\"},\"application/dskpp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dssc+der\":{\"source\":\"iana\",\"extensions\":[\"dssc\"]},\"application/dssc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdssc\"]},\"application/dvcs\":{\"source\":\"iana\"},\"application/ecmascript\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"es\",\"ecma\"]},\"application/edi-consent\":{\"source\":\"iana\"},\"application/edi-x12\":{\"source\":\"iana\",\"compressible\":false},\"application/edifact\":{\"source\":\"iana\",\"compressible\":false},\"application/efi\":{\"source\":\"iana\"},\"application/elm+json\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/elm+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.cap+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/emergencycalldata.comment+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.deviceinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.ecall.msd\":{\"source\":\"iana\"},\"application/emergencycalldata.providerinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.serviceinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.subscriberinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.veds+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emma+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"emma\"]},\"application/emotionml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"emotionml\"]},\"application/encaprtp\":{\"source\":\"iana\"},\"application/epp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/epub+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"epub\"]},\"application/eshop\":{\"source\":\"iana\"},\"application/exi\":{\"source\":\"iana\",\"extensions\":[\"exi\"]},\"application/expect-ct-report+json\":{\"source\":\"iana\",\"compressible\":true},\"application/express\":{\"source\":\"iana\",\"extensions\":[\"exp\"]},\"application/fastinfoset\":{\"source\":\"iana\"},\"application/fastsoap\":{\"source\":\"iana\"},\"application/fdt+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"fdt\"]},\"application/fhir+json\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/fhir+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/fido.trusted-apps+json\":{\"compressible\":true},\"application/fits\":{\"source\":\"iana\"},\"application/flexfec\":{\"source\":\"iana\"},\"application/font-sfnt\":{\"source\":\"iana\"},\"application/font-tdpfr\":{\"source\":\"iana\",\"extensions\":[\"pfr\"]},\"application/font-woff\":{\"source\":\"iana\",\"compressible\":false},\"application/framework-attributes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/geo+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"geojson\"]},\"application/geo+json-seq\":{\"source\":\"iana\"},\"application/geopackage+sqlite3\":{\"source\":\"iana\"},\"application/geoxacml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/gltf-buffer\":{\"source\":\"iana\"},\"application/gml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"gml\"]},\"application/gpx+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"gpx\"]},\"application/gxf\":{\"source\":\"apache\",\"extensions\":[\"gxf\"]},\"application/gzip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"gz\"]},\"application/h224\":{\"source\":\"iana\"},\"application/held+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/hjson\":{\"extensions\":[\"hjson\"]},\"application/http\":{\"source\":\"iana\"},\"application/hyperstudio\":{\"source\":\"iana\",\"extensions\":[\"stk\"]},\"application/ibe-key-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ibe-pkg-reply+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ibe-pp-data\":{\"source\":\"iana\"},\"application/iges\":{\"source\":\"iana\"},\"application/im-iscomposing+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/index\":{\"source\":\"iana\"},\"application/index.cmd\":{\"source\":\"iana\"},\"application/index.obj\":{\"source\":\"iana\"},\"application/index.response\":{\"source\":\"iana\"},\"application/index.vnd\":{\"source\":\"iana\"},\"application/inkml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ink\",\"inkml\"]},\"application/iotp\":{\"source\":\"iana\"},\"application/ipfix\":{\"source\":\"iana\",\"extensions\":[\"ipfix\"]},\"application/ipp\":{\"source\":\"iana\"},\"application/isup\":{\"source\":\"iana\"},\"application/its+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"its\"]},\"application/java-archive\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"jar\",\"war\",\"ear\"]},\"application/java-serialized-object\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"ser\"]},\"application/java-vm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"class\"]},\"application/javascript\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"js\",\"mjs\"]},\"application/jf2feed+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jose\":{\"source\":\"iana\"},\"application/jose+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jrd+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jscalendar+json\":{\"source\":\"iana\",\"compressible\":true},\"application/json\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"json\",\"map\"]},\"application/json-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/json-seq\":{\"source\":\"iana\"},\"application/json5\":{\"extensions\":[\"json5\"]},\"application/jsonml+json\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"jsonml\"]},\"application/jwk+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jwk-set+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jwt\":{\"source\":\"iana\"},\"application/kpml-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/kpml-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ld+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"jsonld\"]},\"application/lgr+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lgr\"]},\"application/link-format\":{\"source\":\"iana\"},\"application/load-control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/lost+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lostxml\"]},\"application/lostsync+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/lpf+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/lxf\":{\"source\":\"iana\"},\"application/mac-binhex40\":{\"source\":\"iana\",\"extensions\":[\"hqx\"]},\"application/mac-compactpro\":{\"source\":\"apache\",\"extensions\":[\"cpt\"]},\"application/macwriteii\":{\"source\":\"iana\"},\"application/mads+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mads\"]},\"application/manifest+json\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"webmanifest\"]},\"application/marc\":{\"source\":\"iana\",\"extensions\":[\"mrc\"]},\"application/marcxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mrcx\"]},\"application/mathematica\":{\"source\":\"iana\",\"extensions\":[\"ma\",\"nb\",\"mb\"]},\"application/mathml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mathml\"]},\"application/mathml-content+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mathml-presentation+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-associated-procedure-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-deregister+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-envelope+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-msk+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-msk-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-protection-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-reception-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-register+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-register-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-schedule+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-user-service-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbox\":{\"source\":\"iana\",\"extensions\":[\"mbox\"]},\"application/media-policy-dataset+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpf\"]},\"application/media_control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mediaservercontrol+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mscml\"]},\"application/merge-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/metalink+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"metalink\"]},\"application/metalink4+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"meta4\"]},\"application/mets+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mets\"]},\"application/mf4\":{\"source\":\"iana\"},\"application/mikey\":{\"source\":\"iana\"},\"application/mipc\":{\"source\":\"iana\"},\"application/missing-blocks+cbor-seq\":{\"source\":\"iana\"},\"application/mmt-aei+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"maei\"]},\"application/mmt-usd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"musd\"]},\"application/mods+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mods\"]},\"application/moss-keys\":{\"source\":\"iana\"},\"application/moss-signature\":{\"source\":\"iana\"},\"application/mosskey-data\":{\"source\":\"iana\"},\"application/mosskey-request\":{\"source\":\"iana\"},\"application/mp21\":{\"source\":\"iana\",\"extensions\":[\"m21\",\"mp21\"]},\"application/mp4\":{\"source\":\"iana\",\"extensions\":[\"mp4s\",\"m4p\"]},\"application/mpeg4-generic\":{\"source\":\"iana\"},\"application/mpeg4-iod\":{\"source\":\"iana\"},\"application/mpeg4-iod-xmt\":{\"source\":\"iana\"},\"application/mrb-consumer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mrb-publish+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/msc-ivr+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/msc-mixer+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/msword\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"doc\",\"dot\"]},\"application/mud+json\":{\"source\":\"iana\",\"compressible\":true},\"application/multipart-core\":{\"source\":\"iana\"},\"application/mxf\":{\"source\":\"iana\",\"extensions\":[\"mxf\"]},\"application/n-quads\":{\"source\":\"iana\",\"extensions\":[\"nq\"]},\"application/n-triples\":{\"source\":\"iana\",\"extensions\":[\"nt\"]},\"application/nasdata\":{\"source\":\"iana\"},\"application/news-checkgroups\":{\"source\":\"iana\",\"charset\":\"US-ASCII\"},\"application/news-groupinfo\":{\"source\":\"iana\",\"charset\":\"US-ASCII\"},\"application/news-transmission\":{\"source\":\"iana\"},\"application/nlsml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/node\":{\"source\":\"iana\",\"extensions\":[\"cjs\"]},\"application/nss\":{\"source\":\"iana\"},\"application/oauth-authz-req+jwt\":{\"source\":\"iana\"},\"application/oblivious-dns-message\":{\"source\":\"iana\"},\"application/ocsp-request\":{\"source\":\"iana\"},\"application/ocsp-response\":{\"source\":\"iana\"},\"application/octet-stream\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"bin\",\"dms\",\"lrf\",\"mar\",\"so\",\"dist\",\"distz\",\"pkg\",\"bpk\",\"dump\",\"elc\",\"deploy\",\"exe\",\"dll\",\"deb\",\"dmg\",\"iso\",\"img\",\"msi\",\"msp\",\"msm\",\"buffer\"]},\"application/oda\":{\"source\":\"iana\",\"extensions\":[\"oda\"]},\"application/odm+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/odx\":{\"source\":\"iana\"},\"application/oebps-package+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"opf\"]},\"application/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ogx\"]},\"application/omdoc+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"omdoc\"]},\"application/onenote\":{\"source\":\"apache\",\"extensions\":[\"onetoc\",\"onetoc2\",\"onetmp\",\"onepkg\"]},\"application/opc-nodeset+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/oscore\":{\"source\":\"iana\"},\"application/oxps\":{\"source\":\"iana\",\"extensions\":[\"oxps\"]},\"application/p21\":{\"source\":\"iana\"},\"application/p21+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/p2p-overlay+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"relo\"]},\"application/parityfec\":{\"source\":\"iana\"},\"application/passport\":{\"source\":\"iana\"},\"application/patch-ops-error+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xer\"]},\"application/pdf\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pdf\"]},\"application/pdx\":{\"source\":\"iana\"},\"application/pem-certificate-chain\":{\"source\":\"iana\"},\"application/pgp-encrypted\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pgp\"]},\"application/pgp-keys\":{\"source\":\"iana\",\"extensions\":[\"asc\"]},\"application/pgp-signature\":{\"source\":\"iana\",\"extensions\":[\"asc\",\"sig\"]},\"application/pics-rules\":{\"source\":\"apache\",\"extensions\":[\"prf\"]},\"application/pidf+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/pidf-diff+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/pkcs10\":{\"source\":\"iana\",\"extensions\":[\"p10\"]},\"application/pkcs12\":{\"source\":\"iana\"},\"application/pkcs7-mime\":{\"source\":\"iana\",\"extensions\":[\"p7m\",\"p7c\"]},\"application/pkcs7-signature\":{\"source\":\"iana\",\"extensions\":[\"p7s\"]},\"application/pkcs8\":{\"source\":\"iana\",\"extensions\":[\"p8\"]},\"application/pkcs8-encrypted\":{\"source\":\"iana\"},\"application/pkix-attr-cert\":{\"source\":\"iana\",\"extensions\":[\"ac\"]},\"application/pkix-cert\":{\"source\":\"iana\",\"extensions\":[\"cer\"]},\"application/pkix-crl\":{\"source\":\"iana\",\"extensions\":[\"crl\"]},\"application/pkix-pkipath\":{\"source\":\"iana\",\"extensions\":[\"pkipath\"]},\"application/pkixcmp\":{\"source\":\"iana\",\"extensions\":[\"pki\"]},\"application/pls+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"pls\"]},\"application/poc-settings+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/postscript\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ai\",\"eps\",\"ps\"]},\"application/ppsp-tracker+json\":{\"source\":\"iana\",\"compressible\":true},\"application/problem+json\":{\"source\":\"iana\",\"compressible\":true},\"application/problem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/provenance+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"provx\"]},\"application/prs.alvestrand.titrax-sheet\":{\"source\":\"iana\"},\"application/prs.cww\":{\"source\":\"iana\",\"extensions\":[\"cww\"]},\"application/prs.cyn\":{\"source\":\"iana\",\"charset\":\"7-BIT\"},\"application/prs.hpub+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/prs.nprend\":{\"source\":\"iana\"},\"application/prs.plucker\":{\"source\":\"iana\"},\"application/prs.rdf-xml-crypt\":{\"source\":\"iana\"},\"application/prs.xsf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/pskc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"pskcxml\"]},\"application/pvd+json\":{\"source\":\"iana\",\"compressible\":true},\"application/qsig\":{\"source\":\"iana\"},\"application/raml+yaml\":{\"compressible\":true,\"extensions\":[\"raml\"]},\"application/raptorfec\":{\"source\":\"iana\"},\"application/rdap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/rdf+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rdf\",\"owl\"]},\"application/reginfo+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rif\"]},\"application/relax-ng-compact-syntax\":{\"source\":\"iana\",\"extensions\":[\"rnc\"]},\"application/remote-printing\":{\"source\":\"iana\"},\"application/reputon+json\":{\"source\":\"iana\",\"compressible\":true},\"application/resource-lists+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rl\"]},\"application/resource-lists-diff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rld\"]},\"application/rfc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/riscos\":{\"source\":\"iana\"},\"application/rlmi+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/rls-services+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rs\"]},\"application/route-apd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rapd\"]},\"application/route-s-tsid+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sls\"]},\"application/route-usd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rusd\"]},\"application/rpki-ghostbusters\":{\"source\":\"iana\",\"extensions\":[\"gbr\"]},\"application/rpki-manifest\":{\"source\":\"iana\",\"extensions\":[\"mft\"]},\"application/rpki-publication\":{\"source\":\"iana\"},\"application/rpki-roa\":{\"source\":\"iana\",\"extensions\":[\"roa\"]},\"application/rpki-updown\":{\"source\":\"iana\"},\"application/rsd+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"rsd\"]},\"application/rss+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"rss\"]},\"application/rtf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtf\"]},\"application/rtploopback\":{\"source\":\"iana\"},\"application/rtx\":{\"source\":\"iana\"},\"application/samlassertion+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/samlmetadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sarif+json\":{\"source\":\"iana\",\"compressible\":true},\"application/sarif-external-properties+json\":{\"source\":\"iana\",\"compressible\":true},\"application/sbe\":{\"source\":\"iana\"},\"application/sbml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sbml\"]},\"application/scaip+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/scim+json\":{\"source\":\"iana\",\"compressible\":true},\"application/scvp-cv-request\":{\"source\":\"iana\",\"extensions\":[\"scq\"]},\"application/scvp-cv-response\":{\"source\":\"iana\",\"extensions\":[\"scs\"]},\"application/scvp-vp-request\":{\"source\":\"iana\",\"extensions\":[\"spq\"]},\"application/scvp-vp-response\":{\"source\":\"iana\",\"extensions\":[\"spp\"]},\"application/sdp\":{\"source\":\"iana\",\"extensions\":[\"sdp\"]},\"application/secevent+jwt\":{\"source\":\"iana\"},\"application/senml+cbor\":{\"source\":\"iana\"},\"application/senml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/senml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"senmlx\"]},\"application/senml-etch+cbor\":{\"source\":\"iana\"},\"application/senml-etch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/senml-exi\":{\"source\":\"iana\"},\"application/sensml+cbor\":{\"source\":\"iana\"},\"application/sensml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/sensml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sensmlx\"]},\"application/sensml-exi\":{\"source\":\"iana\"},\"application/sep+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sep-exi\":{\"source\":\"iana\"},\"application/session-info\":{\"source\":\"iana\"},\"application/set-payment\":{\"source\":\"iana\"},\"application/set-payment-initiation\":{\"source\":\"iana\",\"extensions\":[\"setpay\"]},\"application/set-registration\":{\"source\":\"iana\"},\"application/set-registration-initiation\":{\"source\":\"iana\",\"extensions\":[\"setreg\"]},\"application/sgml\":{\"source\":\"iana\"},\"application/sgml-open-catalog\":{\"source\":\"iana\"},\"application/shf+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"shf\"]},\"application/sieve\":{\"source\":\"iana\",\"extensions\":[\"siv\",\"sieve\"]},\"application/simple-filter+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/simple-message-summary\":{\"source\":\"iana\"},\"application/simplesymbolcontainer\":{\"source\":\"iana\"},\"application/sipc\":{\"source\":\"iana\"},\"application/slate\":{\"source\":\"iana\"},\"application/smil\":{\"source\":\"iana\"},\"application/smil+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"smi\",\"smil\"]},\"application/smpte336m\":{\"source\":\"iana\"},\"application/soap+fastinfoset\":{\"source\":\"iana\"},\"application/soap+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sparql-query\":{\"source\":\"iana\",\"extensions\":[\"rq\"]},\"application/sparql-results+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"srx\"]},\"application/spdx+json\":{\"source\":\"iana\",\"compressible\":true},\"application/spirits-event+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sql\":{\"source\":\"iana\"},\"application/srgs\":{\"source\":\"iana\",\"extensions\":[\"gram\"]},\"application/srgs+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"grxml\"]},\"application/sru+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sru\"]},\"application/ssdl+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ssdl\"]},\"application/ssml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ssml\"]},\"application/stix+json\":{\"source\":\"iana\",\"compressible\":true},\"application/swid+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"swidtag\"]},\"application/tamp-apex-update\":{\"source\":\"iana\"},\"application/tamp-apex-update-confirm\":{\"source\":\"iana\"},\"application/tamp-community-update\":{\"source\":\"iana\"},\"application/tamp-community-update-confirm\":{\"source\":\"iana\"},\"application/tamp-error\":{\"source\":\"iana\"},\"application/tamp-sequence-adjust\":{\"source\":\"iana\"},\"application/tamp-sequence-adjust-confirm\":{\"source\":\"iana\"},\"application/tamp-status-query\":{\"source\":\"iana\"},\"application/tamp-status-response\":{\"source\":\"iana\"},\"application/tamp-update\":{\"source\":\"iana\"},\"application/tamp-update-confirm\":{\"source\":\"iana\"},\"application/tar\":{\"compressible\":true},\"application/taxii+json\":{\"source\":\"iana\",\"compressible\":true},\"application/td+json\":{\"source\":\"iana\",\"compressible\":true},\"application/tei+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tei\",\"teicorpus\"]},\"application/tetra_isi\":{\"source\":\"iana\"},\"application/thraud+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tfi\"]},\"application/timestamp-query\":{\"source\":\"iana\"},\"application/timestamp-reply\":{\"source\":\"iana\"},\"application/timestamped-data\":{\"source\":\"iana\",\"extensions\":[\"tsd\"]},\"application/tlsrpt+gzip\":{\"source\":\"iana\"},\"application/tlsrpt+json\":{\"source\":\"iana\",\"compressible\":true},\"application/tnauthlist\":{\"source\":\"iana\"},\"application/token-introspection+jwt\":{\"source\":\"iana\"},\"application/toml\":{\"compressible\":true,\"extensions\":[\"toml\"]},\"application/trickle-ice-sdpfrag\":{\"source\":\"iana\"},\"application/trig\":{\"source\":\"iana\",\"extensions\":[\"trig\"]},\"application/ttml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ttml\"]},\"application/tve-trigger\":{\"source\":\"iana\"},\"application/tzif\":{\"source\":\"iana\"},\"application/tzif-leap\":{\"source\":\"iana\"},\"application/ubjson\":{\"compressible\":false,\"extensions\":[\"ubj\"]},\"application/ulpfec\":{\"source\":\"iana\"},\"application/urc-grpsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/urc-ressheet+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rsheet\"]},\"application/urc-targetdesc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"td\"]},\"application/urc-uisocketdesc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vcard+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vcard+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vemmi\":{\"source\":\"iana\"},\"application/vividence.scriptfile\":{\"source\":\"apache\"},\"application/vnd.1000minds.decision-model+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"1km\"]},\"application/vnd.3gpp-prose+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp-prose-pc3ch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp-v2x-local-service-information\":{\"source\":\"iana\"},\"application/vnd.3gpp.5gnas\":{\"source\":\"iana\"},\"application/vnd.3gpp.access-transfer-events+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.bsf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.gmop+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.gtpc\":{\"source\":\"iana\"},\"application/vnd.3gpp.interworking-data\":{\"source\":\"iana\"},\"application/vnd.3gpp.lpp\":{\"source\":\"iana\"},\"application/vnd.3gpp.mc-signalling-ear\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-payload\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-signalling\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-floor-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-location-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-mbms-usage-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-signed+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-ue-init-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-affiliation-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-location-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-mbms-usage-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-transmission-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mid-call+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.ngap\":{\"source\":\"iana\"},\"application/vnd.3gpp.pfcp\":{\"source\":\"iana\"},\"application/vnd.3gpp.pic-bw-large\":{\"source\":\"iana\",\"extensions\":[\"plb\"]},\"application/vnd.3gpp.pic-bw-small\":{\"source\":\"iana\",\"extensions\":[\"psb\"]},\"application/vnd.3gpp.pic-bw-var\":{\"source\":\"iana\",\"extensions\":[\"pvb\"]},\"application/vnd.3gpp.s1ap\":{\"source\":\"iana\"},\"application/vnd.3gpp.sms\":{\"source\":\"iana\"},\"application/vnd.3gpp.sms+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.srvcc-ext+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.srvcc-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.state-and-event-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.ussd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp2.bcmcsinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp2.sms\":{\"source\":\"iana\"},\"application/vnd.3gpp2.tcap\":{\"source\":\"iana\",\"extensions\":[\"tcap\"]},\"application/vnd.3lightssoftware.imagescal\":{\"source\":\"iana\"},\"application/vnd.3m.post-it-notes\":{\"source\":\"iana\",\"extensions\":[\"pwn\"]},\"application/vnd.accpac.simply.aso\":{\"source\":\"iana\",\"extensions\":[\"aso\"]},\"application/vnd.accpac.simply.imp\":{\"source\":\"iana\",\"extensions\":[\"imp\"]},\"application/vnd.acucobol\":{\"source\":\"iana\",\"extensions\":[\"acu\"]},\"application/vnd.acucorp\":{\"source\":\"iana\",\"extensions\":[\"atc\",\"acutc\"]},\"application/vnd.adobe.air-application-installer-package+zip\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"air\"]},\"application/vnd.adobe.flash.movie\":{\"source\":\"iana\"},\"application/vnd.adobe.formscentral.fcdt\":{\"source\":\"iana\",\"extensions\":[\"fcdt\"]},\"application/vnd.adobe.fxp\":{\"source\":\"iana\",\"extensions\":[\"fxp\",\"fxpl\"]},\"application/vnd.adobe.partial-upload\":{\"source\":\"iana\"},\"application/vnd.adobe.xdp+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdp\"]},\"application/vnd.adobe.xfdf\":{\"source\":\"iana\",\"extensions\":[\"xfdf\"]},\"application/vnd.aether.imp\":{\"source\":\"iana\"},\"application/vnd.afpc.afplinedata\":{\"source\":\"iana\"},\"application/vnd.afpc.afplinedata-pagedef\":{\"source\":\"iana\"},\"application/vnd.afpc.cmoca-cmresource\":{\"source\":\"iana\"},\"application/vnd.afpc.foca-charset\":{\"source\":\"iana\"},\"application/vnd.afpc.foca-codedfont\":{\"source\":\"iana\"},\"application/vnd.afpc.foca-codepage\":{\"source\":\"iana\"},\"application/vnd.afpc.modca\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-cmtable\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-formdef\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-mediummap\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-objectcontainer\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-overlay\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-pagesegment\":{\"source\":\"iana\"},\"application/vnd.age\":{\"source\":\"iana\",\"extensions\":[\"age\"]},\"application/vnd.ah-barcode\":{\"source\":\"iana\"},\"application/vnd.ahead.space\":{\"source\":\"iana\",\"extensions\":[\"ahead\"]},\"application/vnd.airzip.filesecure.azf\":{\"source\":\"iana\",\"extensions\":[\"azf\"]},\"application/vnd.airzip.filesecure.azs\":{\"source\":\"iana\",\"extensions\":[\"azs\"]},\"application/vnd.amadeus+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.amazon.ebook\":{\"source\":\"apache\",\"extensions\":[\"azw\"]},\"application/vnd.amazon.mobi8-ebook\":{\"source\":\"iana\"},\"application/vnd.americandynamics.acc\":{\"source\":\"iana\",\"extensions\":[\"acc\"]},\"application/vnd.amiga.ami\":{\"source\":\"iana\",\"extensions\":[\"ami\"]},\"application/vnd.amundsen.maze+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.android.ota\":{\"source\":\"iana\"},\"application/vnd.android.package-archive\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"apk\"]},\"application/vnd.anki\":{\"source\":\"iana\"},\"application/vnd.anser-web-certificate-issue-initiation\":{\"source\":\"iana\",\"extensions\":[\"cii\"]},\"application/vnd.anser-web-funds-transfer-initiation\":{\"source\":\"apache\",\"extensions\":[\"fti\"]},\"application/vnd.antix.game-component\":{\"source\":\"iana\",\"extensions\":[\"atx\"]},\"application/vnd.apache.arrow.file\":{\"source\":\"iana\"},\"application/vnd.apache.arrow.stream\":{\"source\":\"iana\"},\"application/vnd.apache.thrift.binary\":{\"source\":\"iana\"},\"application/vnd.apache.thrift.compact\":{\"source\":\"iana\"},\"application/vnd.apache.thrift.json\":{\"source\":\"iana\"},\"application/vnd.api+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.aplextor.warrp+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.apothekende.reservation+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.apple.installer+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpkg\"]},\"application/vnd.apple.keynote\":{\"source\":\"iana\",\"extensions\":[\"key\"]},\"application/vnd.apple.mpegurl\":{\"source\":\"iana\",\"extensions\":[\"m3u8\"]},\"application/vnd.apple.numbers\":{\"source\":\"iana\",\"extensions\":[\"numbers\"]},\"application/vnd.apple.pages\":{\"source\":\"iana\",\"extensions\":[\"pages\"]},\"application/vnd.apple.pkpass\":{\"compressible\":false,\"extensions\":[\"pkpass\"]},\"application/vnd.arastra.swi\":{\"source\":\"iana\"},\"application/vnd.aristanetworks.swi\":{\"source\":\"iana\",\"extensions\":[\"swi\"]},\"application/vnd.artisan+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.artsquare\":{\"source\":\"iana\"},\"application/vnd.astraea-software.iota\":{\"source\":\"iana\",\"extensions\":[\"iota\"]},\"application/vnd.audiograph\":{\"source\":\"iana\",\"extensions\":[\"aep\"]},\"application/vnd.autopackage\":{\"source\":\"iana\"},\"application/vnd.avalon+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.avistar+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.balsamiq.bmml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"bmml\"]},\"application/vnd.balsamiq.bmpr\":{\"source\":\"iana\"},\"application/vnd.banana-accounting\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.error\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.msg\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.msg+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.bekitzur-stech+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.bint.med-content\":{\"source\":\"iana\"},\"application/vnd.biopax.rdf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.blink-idb-value-wrapper\":{\"source\":\"iana\"},\"application/vnd.blueice.multipass\":{\"source\":\"iana\",\"extensions\":[\"mpm\"]},\"application/vnd.bluetooth.ep.oob\":{\"source\":\"iana\"},\"application/vnd.bluetooth.le.oob\":{\"source\":\"iana\"},\"application/vnd.bmi\":{\"source\":\"iana\",\"extensions\":[\"bmi\"]},\"application/vnd.bpf\":{\"source\":\"iana\"},\"application/vnd.bpf3\":{\"source\":\"iana\"},\"application/vnd.businessobjects\":{\"source\":\"iana\",\"extensions\":[\"rep\"]},\"application/vnd.byu.uapi+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cab-jscript\":{\"source\":\"iana\"},\"application/vnd.canon-cpdl\":{\"source\":\"iana\"},\"application/vnd.canon-lips\":{\"source\":\"iana\"},\"application/vnd.capasystems-pg+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cendio.thinlinc.clientconf\":{\"source\":\"iana\"},\"application/vnd.century-systems.tcp_stream\":{\"source\":\"iana\"},\"application/vnd.chemdraw+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"cdxml\"]},\"application/vnd.chess-pgn\":{\"source\":\"iana\"},\"application/vnd.chipnuts.karaoke-mmd\":{\"source\":\"iana\",\"extensions\":[\"mmd\"]},\"application/vnd.ciedi\":{\"source\":\"iana\"},\"application/vnd.cinderella\":{\"source\":\"iana\",\"extensions\":[\"cdy\"]},\"application/vnd.cirpack.isdn-ext\":{\"source\":\"iana\"},\"application/vnd.citationstyles.style+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"csl\"]},\"application/vnd.claymore\":{\"source\":\"iana\",\"extensions\":[\"cla\"]},\"application/vnd.cloanto.rp9\":{\"source\":\"iana\",\"extensions\":[\"rp9\"]},\"application/vnd.clonk.c4group\":{\"source\":\"iana\",\"extensions\":[\"c4g\",\"c4d\",\"c4f\",\"c4p\",\"c4u\"]},\"application/vnd.cluetrust.cartomobile-config\":{\"source\":\"iana\",\"extensions\":[\"c11amc\"]},\"application/vnd.cluetrust.cartomobile-config-pkg\":{\"source\":\"iana\",\"extensions\":[\"c11amz\"]},\"application/vnd.coffeescript\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.document\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.document-template\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.presentation\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.presentation-template\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.spreadsheet\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.spreadsheet-template\":{\"source\":\"iana\"},\"application/vnd.collection+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.collection.doc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.collection.next+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.comicbook+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.comicbook-rar\":{\"source\":\"iana\"},\"application/vnd.commerce-battelle\":{\"source\":\"iana\"},\"application/vnd.commonspace\":{\"source\":\"iana\",\"extensions\":[\"csp\"]},\"application/vnd.contact.cmsg\":{\"source\":\"iana\",\"extensions\":[\"cdbcmsg\"]},\"application/vnd.coreos.ignition+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cosmocaller\":{\"source\":\"iana\",\"extensions\":[\"cmc\"]},\"application/vnd.crick.clicker\":{\"source\":\"iana\",\"extensions\":[\"clkx\"]},\"application/vnd.crick.clicker.keyboard\":{\"source\":\"iana\",\"extensions\":[\"clkk\"]},\"application/vnd.crick.clicker.palette\":{\"source\":\"iana\",\"extensions\":[\"clkp\"]},\"application/vnd.crick.clicker.template\":{\"source\":\"iana\",\"extensions\":[\"clkt\"]},\"application/vnd.crick.clicker.wordbank\":{\"source\":\"iana\",\"extensions\":[\"clkw\"]},\"application/vnd.criticaltools.wbs+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wbs\"]},\"application/vnd.cryptii.pipe+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.crypto-shade-file\":{\"source\":\"iana\"},\"application/vnd.cryptomator.encrypted\":{\"source\":\"iana\"},\"application/vnd.cryptomator.vault\":{\"source\":\"iana\"},\"application/vnd.ctc-posml\":{\"source\":\"iana\",\"extensions\":[\"pml\"]},\"application/vnd.ctct.ws+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cups-pdf\":{\"source\":\"iana\"},\"application/vnd.cups-postscript\":{\"source\":\"iana\"},\"application/vnd.cups-ppd\":{\"source\":\"iana\",\"extensions\":[\"ppd\"]},\"application/vnd.cups-raster\":{\"source\":\"iana\"},\"application/vnd.cups-raw\":{\"source\":\"iana\"},\"application/vnd.curl\":{\"source\":\"iana\"},\"application/vnd.curl.car\":{\"source\":\"apache\",\"extensions\":[\"car\"]},\"application/vnd.curl.pcurl\":{\"source\":\"apache\",\"extensions\":[\"pcurl\"]},\"application/vnd.cyan.dean.root+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cybank\":{\"source\":\"iana\"},\"application/vnd.cyclonedx+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cyclonedx+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.d2l.coursepackage1p0+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.d3m-dataset\":{\"source\":\"iana\"},\"application/vnd.d3m-problem\":{\"source\":\"iana\"},\"application/vnd.dart\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dart\"]},\"application/vnd.data-vision.rdz\":{\"source\":\"iana\",\"extensions\":[\"rdz\"]},\"application/vnd.datapackage+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dataresource+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dbf\":{\"source\":\"iana\",\"extensions\":[\"dbf\"]},\"application/vnd.debian.binary-package\":{\"source\":\"iana\"},\"application/vnd.dece.data\":{\"source\":\"iana\",\"extensions\":[\"uvf\",\"uvvf\",\"uvd\",\"uvvd\"]},\"application/vnd.dece.ttml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uvt\",\"uvvt\"]},\"application/vnd.dece.unspecified\":{\"source\":\"iana\",\"extensions\":[\"uvx\",\"uvvx\"]},\"application/vnd.dece.zip\":{\"source\":\"iana\",\"extensions\":[\"uvz\",\"uvvz\"]},\"application/vnd.denovo.fcselayout-link\":{\"source\":\"iana\",\"extensions\":[\"fe_launch\"]},\"application/vnd.desmume.movie\":{\"source\":\"iana\"},\"application/vnd.dir-bi.plate-dl-nosuffix\":{\"source\":\"iana\"},\"application/vnd.dm.delegation+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dna\":{\"source\":\"iana\",\"extensions\":[\"dna\"]},\"application/vnd.document+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dolby.mlp\":{\"source\":\"apache\",\"extensions\":[\"mlp\"]},\"application/vnd.dolby.mobile.1\":{\"source\":\"iana\"},\"application/vnd.dolby.mobile.2\":{\"source\":\"iana\"},\"application/vnd.doremir.scorecloud-binary-document\":{\"source\":\"iana\"},\"application/vnd.dpgraph\":{\"source\":\"iana\",\"extensions\":[\"dpg\"]},\"application/vnd.dreamfactory\":{\"source\":\"iana\",\"extensions\":[\"dfac\"]},\"application/vnd.drive+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ds-keypoint\":{\"source\":\"apache\",\"extensions\":[\"kpxx\"]},\"application/vnd.dtg.local\":{\"source\":\"iana\"},\"application/vnd.dtg.local.flash\":{\"source\":\"iana\"},\"application/vnd.dtg.local.html\":{\"source\":\"iana\"},\"application/vnd.dvb.ait\":{\"source\":\"iana\",\"extensions\":[\"ait\"]},\"application/vnd.dvb.dvbisl+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.dvbj\":{\"source\":\"iana\"},\"application/vnd.dvb.esgcontainer\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcdftnotifaccess\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgaccess\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgaccess2\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgpdd\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcroaming\":{\"source\":\"iana\"},\"application/vnd.dvb.iptv.alfec-base\":{\"source\":\"iana\"},\"application/vnd.dvb.iptv.alfec-enhancement\":{\"source\":\"iana\"},\"application/vnd.dvb.notif-aggregate-root+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-container+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-generic+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-msglist+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-registration-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-registration-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-init+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.pfr\":{\"source\":\"iana\"},\"application/vnd.dvb.service\":{\"source\":\"iana\",\"extensions\":[\"svc\"]},\"application/vnd.dxr\":{\"source\":\"iana\"},\"application/vnd.dynageo\":{\"source\":\"iana\",\"extensions\":[\"geo\"]},\"application/vnd.dzr\":{\"source\":\"iana\"},\"application/vnd.easykaraoke.cdgdownload\":{\"source\":\"iana\"},\"application/vnd.ecdis-update\":{\"source\":\"iana\"},\"application/vnd.ecip.rlp\":{\"source\":\"iana\"},\"application/vnd.eclipse.ditto+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ecowin.chart\":{\"source\":\"iana\",\"extensions\":[\"mag\"]},\"application/vnd.ecowin.filerequest\":{\"source\":\"iana\"},\"application/vnd.ecowin.fileupdate\":{\"source\":\"iana\"},\"application/vnd.ecowin.series\":{\"source\":\"iana\"},\"application/vnd.ecowin.seriesrequest\":{\"source\":\"iana\"},\"application/vnd.ecowin.seriesupdate\":{\"source\":\"iana\"},\"application/vnd.efi.img\":{\"source\":\"iana\"},\"application/vnd.efi.iso\":{\"source\":\"iana\"},\"application/vnd.emclient.accessrequest+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.enliven\":{\"source\":\"iana\",\"extensions\":[\"nml\"]},\"application/vnd.enphase.envoy\":{\"source\":\"iana\"},\"application/vnd.eprints.data+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.epson.esf\":{\"source\":\"iana\",\"extensions\":[\"esf\"]},\"application/vnd.epson.msf\":{\"source\":\"iana\",\"extensions\":[\"msf\"]},\"application/vnd.epson.quickanime\":{\"source\":\"iana\",\"extensions\":[\"qam\"]},\"application/vnd.epson.salt\":{\"source\":\"iana\",\"extensions\":[\"slt\"]},\"application/vnd.epson.ssf\":{\"source\":\"iana\",\"extensions\":[\"ssf\"]},\"application/vnd.ericsson.quickcall\":{\"source\":\"iana\"},\"application/vnd.espass-espass+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.eszigno3+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"es3\",\"et3\"]},\"application/vnd.etsi.aoc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.asic-e+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.etsi.asic-s+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.etsi.cug+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvcommand+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvdiscovery+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-bc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-cod+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-npvr+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvservice+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsync+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvueprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.mcid+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.mheg5\":{\"source\":\"iana\"},\"application/vnd.etsi.overload-control-policy-dataset+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.pstn+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.sci+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.simservs+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.timestamp-token\":{\"source\":\"iana\"},\"application/vnd.etsi.tsl+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.tsl.der\":{\"source\":\"iana\"},\"application/vnd.eu.kasparian.car+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.eudora.data\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.profile\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.settings\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.theme\":{\"source\":\"iana\"},\"application/vnd.exstream-empower+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.exstream-package\":{\"source\":\"iana\"},\"application/vnd.ezpix-album\":{\"source\":\"iana\",\"extensions\":[\"ez2\"]},\"application/vnd.ezpix-package\":{\"source\":\"iana\",\"extensions\":[\"ez3\"]},\"application/vnd.f-secure.mobile\":{\"source\":\"iana\"},\"application/vnd.familysearch.gedcom+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.fastcopy-disk-image\":{\"source\":\"iana\"},\"application/vnd.fdf\":{\"source\":\"iana\",\"extensions\":[\"fdf\"]},\"application/vnd.fdsn.mseed\":{\"source\":\"iana\",\"extensions\":[\"mseed\"]},\"application/vnd.fdsn.seed\":{\"source\":\"iana\",\"extensions\":[\"seed\",\"dataless\"]},\"application/vnd.ffsns\":{\"source\":\"iana\"},\"application/vnd.ficlab.flb+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.filmit.zfc\":{\"source\":\"iana\"},\"application/vnd.fints\":{\"source\":\"iana\"},\"application/vnd.firemonkeys.cloudcell\":{\"source\":\"iana\"},\"application/vnd.flographit\":{\"source\":\"iana\",\"extensions\":[\"gph\"]},\"application/vnd.fluxtime.clip\":{\"source\":\"iana\",\"extensions\":[\"ftc\"]},\"application/vnd.font-fontforge-sfd\":{\"source\":\"iana\"},\"application/vnd.framemaker\":{\"source\":\"iana\",\"extensions\":[\"fm\",\"frame\",\"maker\",\"book\"]},\"application/vnd.frogans.fnc\":{\"source\":\"iana\",\"extensions\":[\"fnc\"]},\"application/vnd.frogans.ltf\":{\"source\":\"iana\",\"extensions\":[\"ltf\"]},\"application/vnd.fsc.weblaunch\":{\"source\":\"iana\",\"extensions\":[\"fsc\"]},\"application/vnd.fujifilm.fb.docuworks\":{\"source\":\"iana\"},\"application/vnd.fujifilm.fb.docuworks.binder\":{\"source\":\"iana\"},\"application/vnd.fujifilm.fb.docuworks.container\":{\"source\":\"iana\"},\"application/vnd.fujifilm.fb.jfi+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.fujitsu.oasys\":{\"source\":\"iana\",\"extensions\":[\"oas\"]},\"application/vnd.fujitsu.oasys2\":{\"source\":\"iana\",\"extensions\":[\"oa2\"]},\"application/vnd.fujitsu.oasys3\":{\"source\":\"iana\",\"extensions\":[\"oa3\"]},\"application/vnd.fujitsu.oasysgp\":{\"source\":\"iana\",\"extensions\":[\"fg5\"]},\"application/vnd.fujitsu.oasysprs\":{\"source\":\"iana\",\"extensions\":[\"bh2\"]},\"application/vnd.fujixerox.art-ex\":{\"source\":\"iana\"},\"application/vnd.fujixerox.art4\":{\"source\":\"iana\"},\"application/vnd.fujixerox.ddd\":{\"source\":\"iana\",\"extensions\":[\"ddd\"]},\"application/vnd.fujixerox.docuworks\":{\"source\":\"iana\",\"extensions\":[\"xdw\"]},\"application/vnd.fujixerox.docuworks.binder\":{\"source\":\"iana\",\"extensions\":[\"xbd\"]},\"application/vnd.fujixerox.docuworks.container\":{\"source\":\"iana\"},\"application/vnd.fujixerox.hbpl\":{\"source\":\"iana\"},\"application/vnd.fut-misnet\":{\"source\":\"iana\"},\"application/vnd.futoin+cbor\":{\"source\":\"iana\"},\"application/vnd.futoin+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.fuzzysheet\":{\"source\":\"iana\",\"extensions\":[\"fzs\"]},\"application/vnd.genomatix.tuxedo\":{\"source\":\"iana\",\"extensions\":[\"txd\"]},\"application/vnd.gentics.grd+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geo+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geocube+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geogebra.file\":{\"source\":\"iana\",\"extensions\":[\"ggb\"]},\"application/vnd.geogebra.slides\":{\"source\":\"iana\"},\"application/vnd.geogebra.tool\":{\"source\":\"iana\",\"extensions\":[\"ggt\"]},\"application/vnd.geometry-explorer\":{\"source\":\"iana\",\"extensions\":[\"gex\",\"gre\"]},\"application/vnd.geonext\":{\"source\":\"iana\",\"extensions\":[\"gxt\"]},\"application/vnd.geoplan\":{\"source\":\"iana\",\"extensions\":[\"g2w\"]},\"application/vnd.geospace\":{\"source\":\"iana\",\"extensions\":[\"g3w\"]},\"application/vnd.gerber\":{\"source\":\"iana\"},\"application/vnd.globalplatform.card-content-mgt\":{\"source\":\"iana\"},\"application/vnd.globalplatform.card-content-mgt-response\":{\"source\":\"iana\"},\"application/vnd.gmx\":{\"source\":\"iana\",\"extensions\":[\"gmx\"]},\"application/vnd.google-apps.document\":{\"compressible\":false,\"extensions\":[\"gdoc\"]},\"application/vnd.google-apps.presentation\":{\"compressible\":false,\"extensions\":[\"gslides\"]},\"application/vnd.google-apps.spreadsheet\":{\"compressible\":false,\"extensions\":[\"gsheet\"]},\"application/vnd.google-earth.kml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"kml\"]},\"application/vnd.google-earth.kmz\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"kmz\"]},\"application/vnd.gov.sk.e-form+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.gov.sk.e-form+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.gov.sk.xmldatacontainer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.grafeq\":{\"source\":\"iana\",\"extensions\":[\"gqf\",\"gqs\"]},\"application/vnd.gridmp\":{\"source\":\"iana\"},\"application/vnd.groove-account\":{\"source\":\"iana\",\"extensions\":[\"gac\"]},\"application/vnd.groove-help\":{\"source\":\"iana\",\"extensions\":[\"ghf\"]},\"application/vnd.groove-identity-message\":{\"source\":\"iana\",\"extensions\":[\"gim\"]},\"application/vnd.groove-injector\":{\"source\":\"iana\",\"extensions\":[\"grv\"]},\"application/vnd.groove-tool-message\":{\"source\":\"iana\",\"extensions\":[\"gtm\"]},\"application/vnd.groove-tool-template\":{\"source\":\"iana\",\"extensions\":[\"tpl\"]},\"application/vnd.groove-vcard\":{\"source\":\"iana\",\"extensions\":[\"vcg\"]},\"application/vnd.hal+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hal+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"hal\"]},\"application/vnd.handheld-entertainment+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"zmm\"]},\"application/vnd.hbci\":{\"source\":\"iana\",\"extensions\":[\"hbci\"]},\"application/vnd.hc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hcl-bireports\":{\"source\":\"iana\"},\"application/vnd.hdt\":{\"source\":\"iana\"},\"application/vnd.heroku+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hhe.lesson-player\":{\"source\":\"iana\",\"extensions\":[\"les\"]},\"application/vnd.hl7cda+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.hl7v2+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.hp-hpgl\":{\"source\":\"iana\",\"extensions\":[\"hpgl\"]},\"application/vnd.hp-hpid\":{\"source\":\"iana\",\"extensions\":[\"hpid\"]},\"application/vnd.hp-hps\":{\"source\":\"iana\",\"extensions\":[\"hps\"]},\"application/vnd.hp-jlyt\":{\"source\":\"iana\",\"extensions\":[\"jlt\"]},\"application/vnd.hp-pcl\":{\"source\":\"iana\",\"extensions\":[\"pcl\"]},\"application/vnd.hp-pclxl\":{\"source\":\"iana\",\"extensions\":[\"pclxl\"]},\"application/vnd.httphone\":{\"source\":\"iana\"},\"application/vnd.hydrostatix.sof-data\":{\"source\":\"iana\",\"extensions\":[\"sfd-hdstx\"]},\"application/vnd.hyper+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hyper-item+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hyperdrive+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hzn-3d-crossword\":{\"source\":\"iana\"},\"application/vnd.ibm.afplinedata\":{\"source\":\"iana\"},\"application/vnd.ibm.electronic-media\":{\"source\":\"iana\"},\"application/vnd.ibm.minipay\":{\"source\":\"iana\",\"extensions\":[\"mpy\"]},\"application/vnd.ibm.modcap\":{\"source\":\"iana\",\"extensions\":[\"afp\",\"listafp\",\"list3820\"]},\"application/vnd.ibm.rights-management\":{\"source\":\"iana\",\"extensions\":[\"irm\"]},\"application/vnd.ibm.secure-container\":{\"source\":\"iana\",\"extensions\":[\"sc\"]},\"application/vnd.iccprofile\":{\"source\":\"iana\",\"extensions\":[\"icc\",\"icm\"]},\"application/vnd.ieee.1905\":{\"source\":\"iana\"},\"application/vnd.igloader\":{\"source\":\"iana\",\"extensions\":[\"igl\"]},\"application/vnd.imagemeter.folder+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.imagemeter.image+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.immervision-ivp\":{\"source\":\"iana\",\"extensions\":[\"ivp\"]},\"application/vnd.immervision-ivu\":{\"source\":\"iana\",\"extensions\":[\"ivu\"]},\"application/vnd.ims.imsccv1p1\":{\"source\":\"iana\"},\"application/vnd.ims.imsccv1p2\":{\"source\":\"iana\"},\"application/vnd.ims.imsccv1p3\":{\"source\":\"iana\"},\"application/vnd.ims.lis.v2.result+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolconsumerprofile+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolproxy+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolproxy.id+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolsettings+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolsettings.simple+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.informedcontrol.rms+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.informix-visionary\":{\"source\":\"iana\"},\"application/vnd.infotech.project\":{\"source\":\"iana\"},\"application/vnd.infotech.project+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.innopath.wamp.notification\":{\"source\":\"iana\"},\"application/vnd.insors.igm\":{\"source\":\"iana\",\"extensions\":[\"igm\"]},\"application/vnd.intercon.formnet\":{\"source\":\"iana\",\"extensions\":[\"xpw\",\"xpx\"]},\"application/vnd.intergeo\":{\"source\":\"iana\",\"extensions\":[\"i2g\"]},\"application/vnd.intertrust.digibox\":{\"source\":\"iana\"},\"application/vnd.intertrust.nncp\":{\"source\":\"iana\"},\"application/vnd.intu.qbo\":{\"source\":\"iana\",\"extensions\":[\"qbo\"]},\"application/vnd.intu.qfx\":{\"source\":\"iana\",\"extensions\":[\"qfx\"]},\"application/vnd.iptc.g2.catalogitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.conceptitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.knowledgeitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.newsitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.newsmessage+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.packageitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.planningitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ipunplugged.rcprofile\":{\"source\":\"iana\",\"extensions\":[\"rcprofile\"]},\"application/vnd.irepository.package+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"irp\"]},\"application/vnd.is-xpr\":{\"source\":\"iana\",\"extensions\":[\"xpr\"]},\"application/vnd.isac.fcs\":{\"source\":\"iana\",\"extensions\":[\"fcs\"]},\"application/vnd.iso11783-10+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.jam\":{\"source\":\"iana\",\"extensions\":[\"jam\"]},\"application/vnd.japannet-directory-service\":{\"source\":\"iana\"},\"application/vnd.japannet-jpnstore-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-payment-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-registration\":{\"source\":\"iana\"},\"application/vnd.japannet-registration-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-setstore-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-verification\":{\"source\":\"iana\"},\"application/vnd.japannet-verification-wakeup\":{\"source\":\"iana\"},\"application/vnd.jcp.javame.midlet-rms\":{\"source\":\"iana\",\"extensions\":[\"rms\"]},\"application/vnd.jisp\":{\"source\":\"iana\",\"extensions\":[\"jisp\"]},\"application/vnd.joost.joda-archive\":{\"source\":\"iana\",\"extensions\":[\"joda\"]},\"application/vnd.jsk.isdn-ngn\":{\"source\":\"iana\"},\"application/vnd.kahootz\":{\"source\":\"iana\",\"extensions\":[\"ktz\",\"ktr\"]},\"application/vnd.kde.karbon\":{\"source\":\"iana\",\"extensions\":[\"karbon\"]},\"application/vnd.kde.kchart\":{\"source\":\"iana\",\"extensions\":[\"chrt\"]},\"application/vnd.kde.kformula\":{\"source\":\"iana\",\"extensions\":[\"kfo\"]},\"application/vnd.kde.kivio\":{\"source\":\"iana\",\"extensions\":[\"flw\"]},\"application/vnd.kde.kontour\":{\"source\":\"iana\",\"extensions\":[\"kon\"]},\"application/vnd.kde.kpresenter\":{\"source\":\"iana\",\"extensions\":[\"kpr\",\"kpt\"]},\"application/vnd.kde.kspread\":{\"source\":\"iana\",\"extensions\":[\"ksp\"]},\"application/vnd.kde.kword\":{\"source\":\"iana\",\"extensions\":[\"kwd\",\"kwt\"]},\"application/vnd.kenameaapp\":{\"source\":\"iana\",\"extensions\":[\"htke\"]},\"application/vnd.kidspiration\":{\"source\":\"iana\",\"extensions\":[\"kia\"]},\"application/vnd.kinar\":{\"source\":\"iana\",\"extensions\":[\"kne\",\"knp\"]},\"application/vnd.koan\":{\"source\":\"iana\",\"extensions\":[\"skp\",\"skd\",\"skt\",\"skm\"]},\"application/vnd.kodak-descriptor\":{\"source\":\"iana\",\"extensions\":[\"sse\"]},\"application/vnd.las\":{\"source\":\"iana\"},\"application/vnd.las.las+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.las.las+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lasxml\"]},\"application/vnd.laszip\":{\"source\":\"iana\"},\"application/vnd.leap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.liberty-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.llamagraphics.life-balance.desktop\":{\"source\":\"iana\",\"extensions\":[\"lbd\"]},\"application/vnd.llamagraphics.life-balance.exchange+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lbe\"]},\"application/vnd.logipipe.circuit+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.loom\":{\"source\":\"iana\"},\"application/vnd.lotus-1-2-3\":{\"source\":\"iana\",\"extensions\":[\"123\"]},\"application/vnd.lotus-approach\":{\"source\":\"iana\",\"extensions\":[\"apr\"]},\"application/vnd.lotus-freelance\":{\"source\":\"iana\",\"extensions\":[\"pre\"]},\"application/vnd.lotus-notes\":{\"source\":\"iana\",\"extensions\":[\"nsf\"]},\"application/vnd.lotus-organizer\":{\"source\":\"iana\",\"extensions\":[\"org\"]},\"application/vnd.lotus-screencam\":{\"source\":\"iana\",\"extensions\":[\"scm\"]},\"application/vnd.lotus-wordpro\":{\"source\":\"iana\",\"extensions\":[\"lwp\"]},\"application/vnd.macports.portpkg\":{\"source\":\"iana\",\"extensions\":[\"portpkg\"]},\"application/vnd.mapbox-vector-tile\":{\"source\":\"iana\",\"extensions\":[\"mvt\"]},\"application/vnd.marlin.drm.actiontoken+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.conftoken+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.license+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.mdcf\":{\"source\":\"iana\"},\"application/vnd.mason+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.maxar.archive.3tz+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.maxmind.maxmind-db\":{\"source\":\"iana\"},\"application/vnd.mcd\":{\"source\":\"iana\",\"extensions\":[\"mcd\"]},\"application/vnd.medcalcdata\":{\"source\":\"iana\",\"extensions\":[\"mc1\"]},\"application/vnd.mediastation.cdkey\":{\"source\":\"iana\",\"extensions\":[\"cdkey\"]},\"application/vnd.meridian-slingshot\":{\"source\":\"iana\"},\"application/vnd.mfer\":{\"source\":\"iana\",\"extensions\":[\"mwf\"]},\"application/vnd.mfmp\":{\"source\":\"iana\",\"extensions\":[\"mfm\"]},\"application/vnd.micro+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.micrografx.flo\":{\"source\":\"iana\",\"extensions\":[\"flo\"]},\"application/vnd.micrografx.igx\":{\"source\":\"iana\",\"extensions\":[\"igx\"]},\"application/vnd.microsoft.portable-executable\":{\"source\":\"iana\"},\"application/vnd.microsoft.windows.thumbnail-cache\":{\"source\":\"iana\"},\"application/vnd.miele+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.mif\":{\"source\":\"iana\",\"extensions\":[\"mif\"]},\"application/vnd.minisoft-hp3000-save\":{\"source\":\"iana\"},\"application/vnd.mitsubishi.misty-guard.trustweb\":{\"source\":\"iana\"},\"application/vnd.mobius.daf\":{\"source\":\"iana\",\"extensions\":[\"daf\"]},\"application/vnd.mobius.dis\":{\"source\":\"iana\",\"extensions\":[\"dis\"]},\"application/vnd.mobius.mbk\":{\"source\":\"iana\",\"extensions\":[\"mbk\"]},\"application/vnd.mobius.mqy\":{\"source\":\"iana\",\"extensions\":[\"mqy\"]},\"application/vnd.mobius.msl\":{\"source\":\"iana\",\"extensions\":[\"msl\"]},\"application/vnd.mobius.plc\":{\"source\":\"iana\",\"extensions\":[\"plc\"]},\"application/vnd.mobius.txf\":{\"source\":\"iana\",\"extensions\":[\"txf\"]},\"application/vnd.mophun.application\":{\"source\":\"iana\",\"extensions\":[\"mpn\"]},\"application/vnd.mophun.certificate\":{\"source\":\"iana\",\"extensions\":[\"mpc\"]},\"application/vnd.motorola.flexsuite\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.adsi\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.fis\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.gotap\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.kmr\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.ttc\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.wem\":{\"source\":\"iana\"},\"application/vnd.motorola.iprm\":{\"source\":\"iana\"},\"application/vnd.mozilla.xul+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xul\"]},\"application/vnd.ms-3mfdocument\":{\"source\":\"iana\"},\"application/vnd.ms-artgalry\":{\"source\":\"iana\",\"extensions\":[\"cil\"]},\"application/vnd.ms-asf\":{\"source\":\"iana\"},\"application/vnd.ms-cab-compressed\":{\"source\":\"iana\",\"extensions\":[\"cab\"]},\"application/vnd.ms-color.iccprofile\":{\"source\":\"apache\"},\"application/vnd.ms-excel\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xls\",\"xlm\",\"xla\",\"xlc\",\"xlt\",\"xlw\"]},\"application/vnd.ms-excel.addin.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlam\"]},\"application/vnd.ms-excel.sheet.binary.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlsb\"]},\"application/vnd.ms-excel.sheet.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlsm\"]},\"application/vnd.ms-excel.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xltm\"]},\"application/vnd.ms-fontobject\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"eot\"]},\"application/vnd.ms-htmlhelp\":{\"source\":\"iana\",\"extensions\":[\"chm\"]},\"application/vnd.ms-ims\":{\"source\":\"iana\",\"extensions\":[\"ims\"]},\"application/vnd.ms-lrm\":{\"source\":\"iana\",\"extensions\":[\"lrm\"]},\"application/vnd.ms-office.activex+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-officetheme\":{\"source\":\"iana\",\"extensions\":[\"thmx\"]},\"application/vnd.ms-opentype\":{\"source\":\"apache\",\"compressible\":true},\"application/vnd.ms-outlook\":{\"compressible\":false,\"extensions\":[\"msg\"]},\"application/vnd.ms-package.obfuscated-opentype\":{\"source\":\"apache\"},\"application/vnd.ms-pki.seccat\":{\"source\":\"apache\",\"extensions\":[\"cat\"]},\"application/vnd.ms-pki.stl\":{\"source\":\"apache\",\"extensions\":[\"stl\"]},\"application/vnd.ms-playready.initiator+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-powerpoint\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ppt\",\"pps\",\"pot\"]},\"application/vnd.ms-powerpoint.addin.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"ppam\"]},\"application/vnd.ms-powerpoint.presentation.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"pptm\"]},\"application/vnd.ms-powerpoint.slide.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"sldm\"]},\"application/vnd.ms-powerpoint.slideshow.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"ppsm\"]},\"application/vnd.ms-powerpoint.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"potm\"]},\"application/vnd.ms-printdevicecapabilities+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-printing.printticket+xml\":{\"source\":\"apache\",\"compressible\":true},\"application/vnd.ms-printschematicket+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-project\":{\"source\":\"iana\",\"extensions\":[\"mpp\",\"mpt\"]},\"application/vnd.ms-tnef\":{\"source\":\"iana\"},\"application/vnd.ms-windows.devicepairing\":{\"source\":\"iana\"},\"application/vnd.ms-windows.nwprinting.oob\":{\"source\":\"iana\"},\"application/vnd.ms-windows.printerpairing\":{\"source\":\"iana\"},\"application/vnd.ms-windows.wsd.oob\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.lic-chlg-req\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.lic-resp\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.meter-chlg-req\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.meter-resp\":{\"source\":\"iana\"},\"application/vnd.ms-word.document.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"docm\"]},\"application/vnd.ms-word.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"dotm\"]},\"application/vnd.ms-works\":{\"source\":\"iana\",\"extensions\":[\"wps\",\"wks\",\"wcm\",\"wdb\"]},\"application/vnd.ms-wpl\":{\"source\":\"iana\",\"extensions\":[\"wpl\"]},\"application/vnd.ms-xpsdocument\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xps\"]},\"application/vnd.msa-disk-image\":{\"source\":\"iana\"},\"application/vnd.mseq\":{\"source\":\"iana\",\"extensions\":[\"mseq\"]},\"application/vnd.msign\":{\"source\":\"iana\"},\"application/vnd.multiad.creator\":{\"source\":\"iana\"},\"application/vnd.multiad.creator.cif\":{\"source\":\"iana\"},\"application/vnd.music-niff\":{\"source\":\"iana\"},\"application/vnd.musician\":{\"source\":\"iana\",\"extensions\":[\"mus\"]},\"application/vnd.muvee.style\":{\"source\":\"iana\",\"extensions\":[\"msty\"]},\"application/vnd.mynfc\":{\"source\":\"iana\",\"extensions\":[\"taglet\"]},\"application/vnd.nacamar.ybrid+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ncd.control\":{\"source\":\"iana\"},\"application/vnd.ncd.reference\":{\"source\":\"iana\"},\"application/vnd.nearst.inv+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nebumind.line\":{\"source\":\"iana\"},\"application/vnd.nervana\":{\"source\":\"iana\"},\"application/vnd.netfpx\":{\"source\":\"iana\"},\"application/vnd.neurolanguage.nlu\":{\"source\":\"iana\",\"extensions\":[\"nlu\"]},\"application/vnd.nimn\":{\"source\":\"iana\"},\"application/vnd.nintendo.nitro.rom\":{\"source\":\"iana\"},\"application/vnd.nintendo.snes.rom\":{\"source\":\"iana\"},\"application/vnd.nitf\":{\"source\":\"iana\",\"extensions\":[\"ntf\",\"nitf\"]},\"application/vnd.noblenet-directory\":{\"source\":\"iana\",\"extensions\":[\"nnd\"]},\"application/vnd.noblenet-sealer\":{\"source\":\"iana\",\"extensions\":[\"nns\"]},\"application/vnd.noblenet-web\":{\"source\":\"iana\",\"extensions\":[\"nnw\"]},\"application/vnd.nokia.catalogs\":{\"source\":\"iana\"},\"application/vnd.nokia.conml+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.conml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.iptv.config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.isds-radio-presets\":{\"source\":\"iana\"},\"application/vnd.nokia.landmark+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.landmark+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.landmarkcollection+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.n-gage.ac+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ac\"]},\"application/vnd.nokia.n-gage.data\":{\"source\":\"iana\",\"extensions\":[\"ngdat\"]},\"application/vnd.nokia.n-gage.symbian.install\":{\"source\":\"iana\",\"extensions\":[\"n-gage\"]},\"application/vnd.nokia.ncd\":{\"source\":\"iana\"},\"application/vnd.nokia.pcd+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.pcd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.radio-preset\":{\"source\":\"iana\",\"extensions\":[\"rpst\"]},\"application/vnd.nokia.radio-presets\":{\"source\":\"iana\",\"extensions\":[\"rpss\"]},\"application/vnd.novadigm.edm\":{\"source\":\"iana\",\"extensions\":[\"edm\"]},\"application/vnd.novadigm.edx\":{\"source\":\"iana\",\"extensions\":[\"edx\"]},\"application/vnd.novadigm.ext\":{\"source\":\"iana\",\"extensions\":[\"ext\"]},\"application/vnd.ntt-local.content-share\":{\"source\":\"iana\"},\"application/vnd.ntt-local.file-transfer\":{\"source\":\"iana\"},\"application/vnd.ntt-local.ogw_remote-access\":{\"source\":\"iana\"},\"application/vnd.ntt-local.sip-ta_remote\":{\"source\":\"iana\"},\"application/vnd.ntt-local.sip-ta_tcp_stream\":{\"source\":\"iana\"},\"application/vnd.oasis.opendocument.chart\":{\"source\":\"iana\",\"extensions\":[\"odc\"]},\"application/vnd.oasis.opendocument.chart-template\":{\"source\":\"iana\",\"extensions\":[\"otc\"]},\"application/vnd.oasis.opendocument.database\":{\"source\":\"iana\",\"extensions\":[\"odb\"]},\"application/vnd.oasis.opendocument.formula\":{\"source\":\"iana\",\"extensions\":[\"odf\"]},\"application/vnd.oasis.opendocument.formula-template\":{\"source\":\"iana\",\"extensions\":[\"odft\"]},\"application/vnd.oasis.opendocument.graphics\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odg\"]},\"application/vnd.oasis.opendocument.graphics-template\":{\"source\":\"iana\",\"extensions\":[\"otg\"]},\"application/vnd.oasis.opendocument.image\":{\"source\":\"iana\",\"extensions\":[\"odi\"]},\"application/vnd.oasis.opendocument.image-template\":{\"source\":\"iana\",\"extensions\":[\"oti\"]},\"application/vnd.oasis.opendocument.presentation\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odp\"]},\"application/vnd.oasis.opendocument.presentation-template\":{\"source\":\"iana\",\"extensions\":[\"otp\"]},\"application/vnd.oasis.opendocument.spreadsheet\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ods\"]},\"application/vnd.oasis.opendocument.spreadsheet-template\":{\"source\":\"iana\",\"extensions\":[\"ots\"]},\"application/vnd.oasis.opendocument.text\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odt\"]},\"application/vnd.oasis.opendocument.text-master\":{\"source\":\"iana\",\"extensions\":[\"odm\"]},\"application/vnd.oasis.opendocument.text-template\":{\"source\":\"iana\",\"extensions\":[\"ott\"]},\"application/vnd.oasis.opendocument.text-web\":{\"source\":\"iana\",\"extensions\":[\"oth\"]},\"application/vnd.obn\":{\"source\":\"iana\"},\"application/vnd.ocf+cbor\":{\"source\":\"iana\"},\"application/vnd.oci.image.manifest.v1+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oftn.l10n+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.contentaccessdownload+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.contentaccessstreaming+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.cspg-hexbinary\":{\"source\":\"iana\"},\"application/vnd.oipf.dae.svg+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.dae.xhtml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.mippvcontrolmessage+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.pae.gem\":{\"source\":\"iana\"},\"application/vnd.oipf.spdiscovery+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.spdlist+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.ueprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.userprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.olpc-sugar\":{\"source\":\"iana\",\"extensions\":[\"xo\"]},\"application/vnd.oma-scws-config\":{\"source\":\"iana\"},\"application/vnd.oma-scws-http-request\":{\"source\":\"iana\"},\"application/vnd.oma-scws-http-response\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.associated-procedure-parameter+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.drm-trigger+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.imd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.ltkm\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.notification+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.provisioningtrigger\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.sgboot\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.sgdd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.sgdu\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.simple-symbol-container\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.smartcard-trigger+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.sprov+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.stkm\":{\"source\":\"iana\"},\"application/vnd.oma.cab-address-book+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-feature-handler+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-pcc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-subs-invite+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-user-prefs+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.dcd\":{\"source\":\"iana\"},\"application/vnd.oma.dcdc\":{\"source\":\"iana\"},\"application/vnd.oma.dd2+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dd2\"]},\"application/vnd.oma.drm.risd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.group-usage-list+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.lwm2m+cbor\":{\"source\":\"iana\"},\"application/vnd.oma.lwm2m+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.lwm2m+tlv\":{\"source\":\"iana\"},\"application/vnd.oma.pal+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.detailed-progress-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.final-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.groups+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.invocation-descriptor+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.optimized-progress-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.push\":{\"source\":\"iana\"},\"application/vnd.oma.scidm.messages+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.xcap-directory+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.omads-email+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.omads-file+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.omads-folder+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.omaloc-supl-init\":{\"source\":\"iana\"},\"application/vnd.onepager\":{\"source\":\"iana\"},\"application/vnd.onepagertamp\":{\"source\":\"iana\"},\"application/vnd.onepagertamx\":{\"source\":\"iana\"},\"application/vnd.onepagertat\":{\"source\":\"iana\"},\"application/vnd.onepagertatp\":{\"source\":\"iana\"},\"application/vnd.onepagertatx\":{\"source\":\"iana\"},\"application/vnd.openblox.game+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"obgx\"]},\"application/vnd.openblox.game-binary\":{\"source\":\"iana\"},\"application/vnd.openeye.oeb\":{\"source\":\"iana\"},\"application/vnd.openofficeorg.extension\":{\"source\":\"apache\",\"extensions\":[\"oxt\"]},\"application/vnd.openstreetmap.data+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"osm\"]},\"application/vnd.opentimestamps.ots\":{\"source\":\"iana\"},\"application/vnd.openxmlformats-officedocument.custom-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.customxmlproperties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawing+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.chart+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.extended-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.presentation\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pptx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slide\":{\"source\":\"iana\",\"extensions\":[\"sldx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.slide+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slideshow\":{\"source\":\"iana\",\"extensions\":[\"ppsx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.tags+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.template\":{\"source\":\"iana\",\"extensions\":[\"potx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xlsx\"]},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.template\":{\"source\":\"iana\",\"extensions\":[\"xltx\"]},\"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.theme+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.themeoverride+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.vmldrawing\":{\"source\":\"iana\"},\"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"docx\"]},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.template\":{\"source\":\"iana\",\"extensions\":[\"dotx\"]},\"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.core-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.relationships+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oracle.resource+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.orange.indata\":{\"source\":\"iana\"},\"application/vnd.osa.netdeploy\":{\"source\":\"iana\"},\"application/vnd.osgeo.mapguide.package\":{\"source\":\"iana\",\"extensions\":[\"mgp\"]},\"application/vnd.osgi.bundle\":{\"source\":\"iana\"},\"application/vnd.osgi.dp\":{\"source\":\"iana\",\"extensions\":[\"dp\"]},\"application/vnd.osgi.subsystem\":{\"source\":\"iana\",\"extensions\":[\"esa\"]},\"application/vnd.otps.ct-kip+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oxli.countgraph\":{\"source\":\"iana\"},\"application/vnd.pagerduty+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.palm\":{\"source\":\"iana\",\"extensions\":[\"pdb\",\"pqa\",\"oprc\"]},\"application/vnd.panoply\":{\"source\":\"iana\"},\"application/vnd.paos.xml\":{\"source\":\"iana\"},\"application/vnd.patentdive\":{\"source\":\"iana\"},\"application/vnd.patientecommsdoc\":{\"source\":\"iana\"},\"application/vnd.pawaafile\":{\"source\":\"iana\",\"extensions\":[\"paw\"]},\"application/vnd.pcos\":{\"source\":\"iana\"},\"application/vnd.pg.format\":{\"source\":\"iana\",\"extensions\":[\"str\"]},\"application/vnd.pg.osasli\":{\"source\":\"iana\",\"extensions\":[\"ei6\"]},\"application/vnd.piaccess.application-licence\":{\"source\":\"iana\"},\"application/vnd.picsel\":{\"source\":\"iana\",\"extensions\":[\"efif\"]},\"application/vnd.pmi.widget\":{\"source\":\"iana\",\"extensions\":[\"wg\"]},\"application/vnd.poc.group-advertisement+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.pocketlearn\":{\"source\":\"iana\",\"extensions\":[\"plf\"]},\"application/vnd.powerbuilder6\":{\"source\":\"iana\",\"extensions\":[\"pbd\"]},\"application/vnd.powerbuilder6-s\":{\"source\":\"iana\"},\"application/vnd.powerbuilder7\":{\"source\":\"iana\"},\"application/vnd.powerbuilder7-s\":{\"source\":\"iana\"},\"application/vnd.powerbuilder75\":{\"source\":\"iana\"},\"application/vnd.powerbuilder75-s\":{\"source\":\"iana\"},\"application/vnd.preminet\":{\"source\":\"iana\"},\"application/vnd.previewsystems.box\":{\"source\":\"iana\",\"extensions\":[\"box\"]},\"application/vnd.proteus.magazine\":{\"source\":\"iana\",\"extensions\":[\"mgz\"]},\"application/vnd.psfs\":{\"source\":\"iana\"},\"application/vnd.publishare-delta-tree\":{\"source\":\"iana\",\"extensions\":[\"qps\"]},\"application/vnd.pvi.ptid1\":{\"source\":\"iana\",\"extensions\":[\"ptid\"]},\"application/vnd.pwg-multiplexed\":{\"source\":\"iana\"},\"application/vnd.pwg-xhtml-print+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.qualcomm.brew-app-res\":{\"source\":\"iana\"},\"application/vnd.quarantainenet\":{\"source\":\"iana\"},\"application/vnd.quark.quarkxpress\":{\"source\":\"iana\",\"extensions\":[\"qxd\",\"qxt\",\"qwd\",\"qwt\",\"qxl\",\"qxb\"]},\"application/vnd.quobject-quoxdocument\":{\"source\":\"iana\"},\"application/vnd.radisys.moml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-conf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-conn+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-dialog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-stream+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-conf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-base+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-fax-detect+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-fax-sendrecv+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-group+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-speech+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-transform+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.rainstor.data\":{\"source\":\"iana\"},\"application/vnd.rapid\":{\"source\":\"iana\"},\"application/vnd.rar\":{\"source\":\"iana\",\"extensions\":[\"rar\"]},\"application/vnd.realvnc.bed\":{\"source\":\"iana\",\"extensions\":[\"bed\"]},\"application/vnd.recordare.musicxml\":{\"source\":\"iana\",\"extensions\":[\"mxl\"]},\"application/vnd.recordare.musicxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"musicxml\"]},\"application/vnd.renlearn.rlprint\":{\"source\":\"iana\"},\"application/vnd.resilient.logic\":{\"source\":\"iana\"},\"application/vnd.restful+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.rig.cryptonote\":{\"source\":\"iana\",\"extensions\":[\"cryptonote\"]},\"application/vnd.rim.cod\":{\"source\":\"apache\",\"extensions\":[\"cod\"]},\"application/vnd.rn-realmedia\":{\"source\":\"apache\",\"extensions\":[\"rm\"]},\"application/vnd.rn-realmedia-vbr\":{\"source\":\"apache\",\"extensions\":[\"rmvb\"]},\"application/vnd.route66.link66+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"link66\"]},\"application/vnd.rs-274x\":{\"source\":\"iana\"},\"application/vnd.ruckus.download\":{\"source\":\"iana\"},\"application/vnd.s3sms\":{\"source\":\"iana\"},\"application/vnd.sailingtracker.track\":{\"source\":\"iana\",\"extensions\":[\"st\"]},\"application/vnd.sar\":{\"source\":\"iana\"},\"application/vnd.sbm.cid\":{\"source\":\"iana\"},\"application/vnd.sbm.mid2\":{\"source\":\"iana\"},\"application/vnd.scribus\":{\"source\":\"iana\"},\"application/vnd.sealed.3df\":{\"source\":\"iana\"},\"application/vnd.sealed.csf\":{\"source\":\"iana\"},\"application/vnd.sealed.doc\":{\"source\":\"iana\"},\"application/vnd.sealed.eml\":{\"source\":\"iana\"},\"application/vnd.sealed.mht\":{\"source\":\"iana\"},\"application/vnd.sealed.net\":{\"source\":\"iana\"},\"application/vnd.sealed.ppt\":{\"source\":\"iana\"},\"application/vnd.sealed.tiff\":{\"source\":\"iana\"},\"application/vnd.sealed.xls\":{\"source\":\"iana\"},\"application/vnd.sealedmedia.softseal.html\":{\"source\":\"iana\"},\"application/vnd.sealedmedia.softseal.pdf\":{\"source\":\"iana\"},\"application/vnd.seemail\":{\"source\":\"iana\",\"extensions\":[\"see\"]},\"application/vnd.seis+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.sema\":{\"source\":\"iana\",\"extensions\":[\"sema\"]},\"application/vnd.semd\":{\"source\":\"iana\",\"extensions\":[\"semd\"]},\"application/vnd.semf\":{\"source\":\"iana\",\"extensions\":[\"semf\"]},\"application/vnd.shade-save-file\":{\"source\":\"iana\"},\"application/vnd.shana.informed.formdata\":{\"source\":\"iana\",\"extensions\":[\"ifm\"]},\"application/vnd.shana.informed.formtemplate\":{\"source\":\"iana\",\"extensions\":[\"itp\"]},\"application/vnd.shana.informed.interchange\":{\"source\":\"iana\",\"extensions\":[\"iif\"]},\"application/vnd.shana.informed.package\":{\"source\":\"iana\",\"extensions\":[\"ipk\"]},\"application/vnd.shootproof+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.shopkick+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.shp\":{\"source\":\"iana\"},\"application/vnd.shx\":{\"source\":\"iana\"},\"application/vnd.sigrok.session\":{\"source\":\"iana\"},\"application/vnd.simtech-mindmapper\":{\"source\":\"iana\",\"extensions\":[\"twd\",\"twds\"]},\"application/vnd.siren+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.smaf\":{\"source\":\"iana\",\"extensions\":[\"mmf\"]},\"application/vnd.smart.notebook\":{\"source\":\"iana\"},\"application/vnd.smart.teacher\":{\"source\":\"iana\",\"extensions\":[\"teacher\"]},\"application/vnd.snesdev-page-table\":{\"source\":\"iana\"},\"application/vnd.software602.filler.form+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"fo\"]},\"application/vnd.software602.filler.form-xml-zip\":{\"source\":\"iana\"},\"application/vnd.solent.sdkm+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sdkm\",\"sdkd\"]},\"application/vnd.spotfire.dxp\":{\"source\":\"iana\",\"extensions\":[\"dxp\"]},\"application/vnd.spotfire.sfs\":{\"source\":\"iana\",\"extensions\":[\"sfs\"]},\"application/vnd.sqlite3\":{\"source\":\"iana\"},\"application/vnd.sss-cod\":{\"source\":\"iana\"},\"application/vnd.sss-dtf\":{\"source\":\"iana\"},\"application/vnd.sss-ntf\":{\"source\":\"iana\"},\"application/vnd.stardivision.calc\":{\"source\":\"apache\",\"extensions\":[\"sdc\"]},\"application/vnd.stardivision.draw\":{\"source\":\"apache\",\"extensions\":[\"sda\"]},\"application/vnd.stardivision.impress\":{\"source\":\"apache\",\"extensions\":[\"sdd\"]},\"application/vnd.stardivision.math\":{\"source\":\"apache\",\"extensions\":[\"smf\"]},\"application/vnd.stardivision.writer\":{\"source\":\"apache\",\"extensions\":[\"sdw\",\"vor\"]},\"application/vnd.stardivision.writer-global\":{\"source\":\"apache\",\"extensions\":[\"sgl\"]},\"application/vnd.stepmania.package\":{\"source\":\"iana\",\"extensions\":[\"smzip\"]},\"application/vnd.stepmania.stepchart\":{\"source\":\"iana\",\"extensions\":[\"sm\"]},\"application/vnd.street-stream\":{\"source\":\"iana\"},\"application/vnd.sun.wadl+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wadl\"]},\"application/vnd.sun.xml.calc\":{\"source\":\"apache\",\"extensions\":[\"sxc\"]},\"application/vnd.sun.xml.calc.template\":{\"source\":\"apache\",\"extensions\":[\"stc\"]},\"application/vnd.sun.xml.draw\":{\"source\":\"apache\",\"extensions\":[\"sxd\"]},\"application/vnd.sun.xml.draw.template\":{\"source\":\"apache\",\"extensions\":[\"std\"]},\"application/vnd.sun.xml.impress\":{\"source\":\"apache\",\"extensions\":[\"sxi\"]},\"application/vnd.sun.xml.impress.template\":{\"source\":\"apache\",\"extensions\":[\"sti\"]},\"application/vnd.sun.xml.math\":{\"source\":\"apache\",\"extensions\":[\"sxm\"]},\"application/vnd.sun.xml.writer\":{\"source\":\"apache\",\"extensions\":[\"sxw\"]},\"application/vnd.sun.xml.writer.global\":{\"source\":\"apache\",\"extensions\":[\"sxg\"]},\"application/vnd.sun.xml.writer.template\":{\"source\":\"apache\",\"extensions\":[\"stw\"]},\"application/vnd.sus-calendar\":{\"source\":\"iana\",\"extensions\":[\"sus\",\"susp\"]},\"application/vnd.svd\":{\"source\":\"iana\",\"extensions\":[\"svd\"]},\"application/vnd.swiftview-ics\":{\"source\":\"iana\"},\"application/vnd.sycle+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.syft+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.symbian.install\":{\"source\":\"apache\",\"extensions\":[\"sis\",\"sisx\"]},\"application/vnd.syncml+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"xsm\"]},\"application/vnd.syncml.dm+wbxml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"bdm\"]},\"application/vnd.syncml.dm+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"xdm\"]},\"application/vnd.syncml.dm.notification\":{\"source\":\"iana\"},\"application/vnd.syncml.dmddf+wbxml\":{\"source\":\"iana\"},\"application/vnd.syncml.dmddf+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"ddf\"]},\"application/vnd.syncml.dmtnds+wbxml\":{\"source\":\"iana\"},\"application/vnd.syncml.dmtnds+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.syncml.ds.notification\":{\"source\":\"iana\"},\"application/vnd.tableschema+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tao.intent-module-archive\":{\"source\":\"iana\",\"extensions\":[\"tao\"]},\"application/vnd.tcpdump.pcap\":{\"source\":\"iana\",\"extensions\":[\"pcap\",\"cap\",\"dmp\"]},\"application/vnd.think-cell.ppttc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tmd.mediaflex.api+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tml\":{\"source\":\"iana\"},\"application/vnd.tmobile-livetv\":{\"source\":\"iana\",\"extensions\":[\"tmo\"]},\"application/vnd.tri.onesource\":{\"source\":\"iana\"},\"application/vnd.trid.tpt\":{\"source\":\"iana\",\"extensions\":[\"tpt\"]},\"application/vnd.triscape.mxs\":{\"source\":\"iana\",\"extensions\":[\"mxs\"]},\"application/vnd.trueapp\":{\"source\":\"iana\",\"extensions\":[\"tra\"]},\"application/vnd.truedoc\":{\"source\":\"iana\"},\"application/vnd.ubisoft.webplayer\":{\"source\":\"iana\"},\"application/vnd.ufdl\":{\"source\":\"iana\",\"extensions\":[\"ufd\",\"ufdl\"]},\"application/vnd.uiq.theme\":{\"source\":\"iana\",\"extensions\":[\"utz\"]},\"application/vnd.umajin\":{\"source\":\"iana\",\"extensions\":[\"umj\"]},\"application/vnd.unity\":{\"source\":\"iana\",\"extensions\":[\"unityweb\"]},\"application/vnd.uoml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uoml\"]},\"application/vnd.uplanet.alert\":{\"source\":\"iana\"},\"application/vnd.uplanet.alert-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.bearer-choice\":{\"source\":\"iana\"},\"application/vnd.uplanet.bearer-choice-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.cacheop\":{\"source\":\"iana\"},\"application/vnd.uplanet.cacheop-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.channel\":{\"source\":\"iana\"},\"application/vnd.uplanet.channel-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.list\":{\"source\":\"iana\"},\"application/vnd.uplanet.list-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.listcmd\":{\"source\":\"iana\"},\"application/vnd.uplanet.listcmd-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.signal\":{\"source\":\"iana\"},\"application/vnd.uri-map\":{\"source\":\"iana\"},\"application/vnd.valve.source.material\":{\"source\":\"iana\"},\"application/vnd.vcx\":{\"source\":\"iana\",\"extensions\":[\"vcx\"]},\"application/vnd.vd-study\":{\"source\":\"iana\"},\"application/vnd.vectorworks\":{\"source\":\"iana\"},\"application/vnd.vel+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.verimatrix.vcas\":{\"source\":\"iana\"},\"application/vnd.veritone.aion+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.veryant.thin\":{\"source\":\"iana\"},\"application/vnd.ves.encrypted\":{\"source\":\"iana\"},\"application/vnd.vidsoft.vidconference\":{\"source\":\"iana\"},\"application/vnd.visio\":{\"source\":\"iana\",\"extensions\":[\"vsd\",\"vst\",\"vss\",\"vsw\"]},\"application/vnd.visionary\":{\"source\":\"iana\",\"extensions\":[\"vis\"]},\"application/vnd.vividence.scriptfile\":{\"source\":\"iana\"},\"application/vnd.vsf\":{\"source\":\"iana\",\"extensions\":[\"vsf\"]},\"application/vnd.wap.sic\":{\"source\":\"iana\"},\"application/vnd.wap.slc\":{\"source\":\"iana\"},\"application/vnd.wap.wbxml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"wbxml\"]},\"application/vnd.wap.wmlc\":{\"source\":\"iana\",\"extensions\":[\"wmlc\"]},\"application/vnd.wap.wmlscriptc\":{\"source\":\"iana\",\"extensions\":[\"wmlsc\"]},\"application/vnd.webturbo\":{\"source\":\"iana\",\"extensions\":[\"wtb\"]},\"application/vnd.wfa.dpp\":{\"source\":\"iana\"},\"application/vnd.wfa.p2p\":{\"source\":\"iana\"},\"application/vnd.wfa.wsc\":{\"source\":\"iana\"},\"application/vnd.windows.devicepairing\":{\"source\":\"iana\"},\"application/vnd.wmc\":{\"source\":\"iana\"},\"application/vnd.wmf.bootstrap\":{\"source\":\"iana\"},\"application/vnd.wolfram.mathematica\":{\"source\":\"iana\"},\"application/vnd.wolfram.mathematica.package\":{\"source\":\"iana\"},\"application/vnd.wolfram.player\":{\"source\":\"iana\",\"extensions\":[\"nbp\"]},\"application/vnd.wordperfect\":{\"source\":\"iana\",\"extensions\":[\"wpd\"]},\"application/vnd.wqd\":{\"source\":\"iana\",\"extensions\":[\"wqd\"]},\"application/vnd.wrq-hp3000-labelled\":{\"source\":\"iana\"},\"application/vnd.wt.stf\":{\"source\":\"iana\",\"extensions\":[\"stf\"]},\"application/vnd.wv.csp+wbxml\":{\"source\":\"iana\"},\"application/vnd.wv.csp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.wv.ssp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xacml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xara\":{\"source\":\"iana\",\"extensions\":[\"xar\"]},\"application/vnd.xfdl\":{\"source\":\"iana\",\"extensions\":[\"xfdl\"]},\"application/vnd.xfdl.webform\":{\"source\":\"iana\"},\"application/vnd.xmi+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xmpie.cpkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.dpkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.plan\":{\"source\":\"iana\"},\"application/vnd.xmpie.ppkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.xlim\":{\"source\":\"iana\"},\"application/vnd.yamaha.hv-dic\":{\"source\":\"iana\",\"extensions\":[\"hvd\"]},\"application/vnd.yamaha.hv-script\":{\"source\":\"iana\",\"extensions\":[\"hvs\"]},\"application/vnd.yamaha.hv-voice\":{\"source\":\"iana\",\"extensions\":[\"hvp\"]},\"application/vnd.yamaha.openscoreformat\":{\"source\":\"iana\",\"extensions\":[\"osf\"]},\"application/vnd.yamaha.openscoreformat.osfpvg+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"osfpvg\"]},\"application/vnd.yamaha.remote-setup\":{\"source\":\"iana\"},\"application/vnd.yamaha.smaf-audio\":{\"source\":\"iana\",\"extensions\":[\"saf\"]},\"application/vnd.yamaha.smaf-phrase\":{\"source\":\"iana\",\"extensions\":[\"spf\"]},\"application/vnd.yamaha.through-ngn\":{\"source\":\"iana\"},\"application/vnd.yamaha.tunnel-udpencap\":{\"source\":\"iana\"},\"application/vnd.yaoweme\":{\"source\":\"iana\"},\"application/vnd.yellowriver-custom-menu\":{\"source\":\"iana\",\"extensions\":[\"cmp\"]},\"application/vnd.youtube.yt\":{\"source\":\"iana\"},\"application/vnd.zul\":{\"source\":\"iana\",\"extensions\":[\"zir\",\"zirz\"]},\"application/vnd.zzazz.deck+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"zaz\"]},\"application/voicexml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"vxml\"]},\"application/voucher-cms+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vq-rtcpxr\":{\"source\":\"iana\"},\"application/wasm\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wasm\"]},\"application/watcherinfo+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wif\"]},\"application/webpush-options+json\":{\"source\":\"iana\",\"compressible\":true},\"application/whoispp-query\":{\"source\":\"iana\"},\"application/whoispp-response\":{\"source\":\"iana\"},\"application/widget\":{\"source\":\"iana\",\"extensions\":[\"wgt\"]},\"application/winhlp\":{\"source\":\"apache\",\"extensions\":[\"hlp\"]},\"application/wita\":{\"source\":\"iana\"},\"application/wordperfect5.1\":{\"source\":\"iana\"},\"application/wsdl+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wsdl\"]},\"application/wspolicy+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wspolicy\"]},\"application/x-7z-compressed\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"7z\"]},\"application/x-abiword\":{\"source\":\"apache\",\"extensions\":[\"abw\"]},\"application/x-ace-compressed\":{\"source\":\"apache\",\"extensions\":[\"ace\"]},\"application/x-amf\":{\"source\":\"apache\"},\"application/x-apple-diskimage\":{\"source\":\"apache\",\"extensions\":[\"dmg\"]},\"application/x-arj\":{\"compressible\":false,\"extensions\":[\"arj\"]},\"application/x-authorware-bin\":{\"source\":\"apache\",\"extensions\":[\"aab\",\"x32\",\"u32\",\"vox\"]},\"application/x-authorware-map\":{\"source\":\"apache\",\"extensions\":[\"aam\"]},\"application/x-authorware-seg\":{\"source\":\"apache\",\"extensions\":[\"aas\"]},\"application/x-bcpio\":{\"source\":\"apache\",\"extensions\":[\"bcpio\"]},\"application/x-bdoc\":{\"compressible\":false,\"extensions\":[\"bdoc\"]},\"application/x-bittorrent\":{\"source\":\"apache\",\"extensions\":[\"torrent\"]},\"application/x-blorb\":{\"source\":\"apache\",\"extensions\":[\"blb\",\"blorb\"]},\"application/x-bzip\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"bz\"]},\"application/x-bzip2\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"bz2\",\"boz\"]},\"application/x-cbr\":{\"source\":\"apache\",\"extensions\":[\"cbr\",\"cba\",\"cbt\",\"cbz\",\"cb7\"]},\"application/x-cdlink\":{\"source\":\"apache\",\"extensions\":[\"vcd\"]},\"application/x-cfs-compressed\":{\"source\":\"apache\",\"extensions\":[\"cfs\"]},\"application/x-chat\":{\"source\":\"apache\",\"extensions\":[\"chat\"]},\"application/x-chess-pgn\":{\"source\":\"apache\",\"extensions\":[\"pgn\"]},\"application/x-chrome-extension\":{\"extensions\":[\"crx\"]},\"application/x-cocoa\":{\"source\":\"nginx\",\"extensions\":[\"cco\"]},\"application/x-compress\":{\"source\":\"apache\"},\"application/x-conference\":{\"source\":\"apache\",\"extensions\":[\"nsc\"]},\"application/x-cpio\":{\"source\":\"apache\",\"extensions\":[\"cpio\"]},\"application/x-csh\":{\"source\":\"apache\",\"extensions\":[\"csh\"]},\"application/x-deb\":{\"compressible\":false},\"application/x-debian-package\":{\"source\":\"apache\",\"extensions\":[\"deb\",\"udeb\"]},\"application/x-dgc-compressed\":{\"source\":\"apache\",\"extensions\":[\"dgc\"]},\"application/x-director\":{\"source\":\"apache\",\"extensions\":[\"dir\",\"dcr\",\"dxr\",\"cst\",\"cct\",\"cxt\",\"w3d\",\"fgd\",\"swa\"]},\"application/x-doom\":{\"source\":\"apache\",\"extensions\":[\"wad\"]},\"application/x-dtbncx+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ncx\"]},\"application/x-dtbook+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"dtb\"]},\"application/x-dtbresource+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"res\"]},\"application/x-dvi\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"dvi\"]},\"application/x-envoy\":{\"source\":\"apache\",\"extensions\":[\"evy\"]},\"application/x-eva\":{\"source\":\"apache\",\"extensions\":[\"eva\"]},\"application/x-font-bdf\":{\"source\":\"apache\",\"extensions\":[\"bdf\"]},\"application/x-font-dos\":{\"source\":\"apache\"},\"application/x-font-framemaker\":{\"source\":\"apache\"},\"application/x-font-ghostscript\":{\"source\":\"apache\",\"extensions\":[\"gsf\"]},\"application/x-font-libgrx\":{\"source\":\"apache\"},\"application/x-font-linux-psf\":{\"source\":\"apache\",\"extensions\":[\"psf\"]},\"application/x-font-pcf\":{\"source\":\"apache\",\"extensions\":[\"pcf\"]},\"application/x-font-snf\":{\"source\":\"apache\",\"extensions\":[\"snf\"]},\"application/x-font-speedo\":{\"source\":\"apache\"},\"application/x-font-sunos-news\":{\"source\":\"apache\"},\"application/x-font-type1\":{\"source\":\"apache\",\"extensions\":[\"pfa\",\"pfb\",\"pfm\",\"afm\"]},\"application/x-font-vfont\":{\"source\":\"apache\"},\"application/x-freearc\":{\"source\":\"apache\",\"extensions\":[\"arc\"]},\"application/x-futuresplash\":{\"source\":\"apache\",\"extensions\":[\"spl\"]},\"application/x-gca-compressed\":{\"source\":\"apache\",\"extensions\":[\"gca\"]},\"application/x-glulx\":{\"source\":\"apache\",\"extensions\":[\"ulx\"]},\"application/x-gnumeric\":{\"source\":\"apache\",\"extensions\":[\"gnumeric\"]},\"application/x-gramps-xml\":{\"source\":\"apache\",\"extensions\":[\"gramps\"]},\"application/x-gtar\":{\"source\":\"apache\",\"extensions\":[\"gtar\"]},\"application/x-gzip\":{\"source\":\"apache\"},\"application/x-hdf\":{\"source\":\"apache\",\"extensions\":[\"hdf\"]},\"application/x-httpd-php\":{\"compressible\":true,\"extensions\":[\"php\"]},\"application/x-install-instructions\":{\"source\":\"apache\",\"extensions\":[\"install\"]},\"application/x-iso9660-image\":{\"source\":\"apache\",\"extensions\":[\"iso\"]},\"application/x-iwork-keynote-sffkey\":{\"extensions\":[\"key\"]},\"application/x-iwork-numbers-sffnumbers\":{\"extensions\":[\"numbers\"]},\"application/x-iwork-pages-sffpages\":{\"extensions\":[\"pages\"]},\"application/x-java-archive-diff\":{\"source\":\"nginx\",\"extensions\":[\"jardiff\"]},\"application/x-java-jnlp-file\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"jnlp\"]},\"application/x-javascript\":{\"compressible\":true},\"application/x-keepass2\":{\"extensions\":[\"kdbx\"]},\"application/x-latex\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"latex\"]},\"application/x-lua-bytecode\":{\"extensions\":[\"luac\"]},\"application/x-lzh-compressed\":{\"source\":\"apache\",\"extensions\":[\"lzh\",\"lha\"]},\"application/x-makeself\":{\"source\":\"nginx\",\"extensions\":[\"run\"]},\"application/x-mie\":{\"source\":\"apache\",\"extensions\":[\"mie\"]},\"application/x-mobipocket-ebook\":{\"source\":\"apache\",\"extensions\":[\"prc\",\"mobi\"]},\"application/x-mpegurl\":{\"compressible\":false},\"application/x-ms-application\":{\"source\":\"apache\",\"extensions\":[\"application\"]},\"application/x-ms-shortcut\":{\"source\":\"apache\",\"extensions\":[\"lnk\"]},\"application/x-ms-wmd\":{\"source\":\"apache\",\"extensions\":[\"wmd\"]},\"application/x-ms-wmz\":{\"source\":\"apache\",\"extensions\":[\"wmz\"]},\"application/x-ms-xbap\":{\"source\":\"apache\",\"extensions\":[\"xbap\"]},\"application/x-msaccess\":{\"source\":\"apache\",\"extensions\":[\"mdb\"]},\"application/x-msbinder\":{\"source\":\"apache\",\"extensions\":[\"obd\"]},\"application/x-mscardfile\":{\"source\":\"apache\",\"extensions\":[\"crd\"]},\"application/x-msclip\":{\"source\":\"apache\",\"extensions\":[\"clp\"]},\"application/x-msdos-program\":{\"extensions\":[\"exe\"]},\"application/x-msdownload\":{\"source\":\"apache\",\"extensions\":[\"exe\",\"dll\",\"com\",\"bat\",\"msi\"]},\"application/x-msmediaview\":{\"source\":\"apache\",\"extensions\":[\"mvb\",\"m13\",\"m14\"]},\"application/x-msmetafile\":{\"source\":\"apache\",\"extensions\":[\"wmf\",\"wmz\",\"emf\",\"emz\"]},\"application/x-msmoney\":{\"source\":\"apache\",\"extensions\":[\"mny\"]},\"application/x-mspublisher\":{\"source\":\"apache\",\"extensions\":[\"pub\"]},\"application/x-msschedule\":{\"source\":\"apache\",\"extensions\":[\"scd\"]},\"application/x-msterminal\":{\"source\":\"apache\",\"extensions\":[\"trm\"]},\"application/x-mswrite\":{\"source\":\"apache\",\"extensions\":[\"wri\"]},\"application/x-netcdf\":{\"source\":\"apache\",\"extensions\":[\"nc\",\"cdf\"]},\"application/x-ns-proxy-autoconfig\":{\"compressible\":true,\"extensions\":[\"pac\"]},\"application/x-nzb\":{\"source\":\"apache\",\"extensions\":[\"nzb\"]},\"application/x-perl\":{\"source\":\"nginx\",\"extensions\":[\"pl\",\"pm\"]},\"application/x-pilot\":{\"source\":\"nginx\",\"extensions\":[\"prc\",\"pdb\"]},\"application/x-pkcs12\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"p12\",\"pfx\"]},\"application/x-pkcs7-certificates\":{\"source\":\"apache\",\"extensions\":[\"p7b\",\"spc\"]},\"application/x-pkcs7-certreqresp\":{\"source\":\"apache\",\"extensions\":[\"p7r\"]},\"application/x-pki-message\":{\"source\":\"iana\"},\"application/x-rar-compressed\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"rar\"]},\"application/x-redhat-package-manager\":{\"source\":\"nginx\",\"extensions\":[\"rpm\"]},\"application/x-research-info-systems\":{\"source\":\"apache\",\"extensions\":[\"ris\"]},\"application/x-sea\":{\"source\":\"nginx\",\"extensions\":[\"sea\"]},\"application/x-sh\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"sh\"]},\"application/x-shar\":{\"source\":\"apache\",\"extensions\":[\"shar\"]},\"application/x-shockwave-flash\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"swf\"]},\"application/x-silverlight-app\":{\"source\":\"apache\",\"extensions\":[\"xap\"]},\"application/x-sql\":{\"source\":\"apache\",\"extensions\":[\"sql\"]},\"application/x-stuffit\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"sit\"]},\"application/x-stuffitx\":{\"source\":\"apache\",\"extensions\":[\"sitx\"]},\"application/x-subrip\":{\"source\":\"apache\",\"extensions\":[\"srt\"]},\"application/x-sv4cpio\":{\"source\":\"apache\",\"extensions\":[\"sv4cpio\"]},\"application/x-sv4crc\":{\"source\":\"apache\",\"extensions\":[\"sv4crc\"]},\"application/x-t3vm-image\":{\"source\":\"apache\",\"extensions\":[\"t3\"]},\"application/x-tads\":{\"source\":\"apache\",\"extensions\":[\"gam\"]},\"application/x-tar\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"tar\"]},\"application/x-tcl\":{\"source\":\"apache\",\"extensions\":[\"tcl\",\"tk\"]},\"application/x-tex\":{\"source\":\"apache\",\"extensions\":[\"tex\"]},\"application/x-tex-tfm\":{\"source\":\"apache\",\"extensions\":[\"tfm\"]},\"application/x-texinfo\":{\"source\":\"apache\",\"extensions\":[\"texinfo\",\"texi\"]},\"application/x-tgif\":{\"source\":\"apache\",\"extensions\":[\"obj\"]},\"application/x-ustar\":{\"source\":\"apache\",\"extensions\":[\"ustar\"]},\"application/x-virtualbox-hdd\":{\"compressible\":true,\"extensions\":[\"hdd\"]},\"application/x-virtualbox-ova\":{\"compressible\":true,\"extensions\":[\"ova\"]},\"application/x-virtualbox-ovf\":{\"compressible\":true,\"extensions\":[\"ovf\"]},\"application/x-virtualbox-vbox\":{\"compressible\":true,\"extensions\":[\"vbox\"]},\"application/x-virtualbox-vbox-extpack\":{\"compressible\":false,\"extensions\":[\"vbox-extpack\"]},\"application/x-virtualbox-vdi\":{\"compressible\":true,\"extensions\":[\"vdi\"]},\"application/x-virtualbox-vhd\":{\"compressible\":true,\"extensions\":[\"vhd\"]},\"application/x-virtualbox-vmdk\":{\"compressible\":true,\"extensions\":[\"vmdk\"]},\"application/x-wais-source\":{\"source\":\"apache\",\"extensions\":[\"src\"]},\"application/x-web-app-manifest+json\":{\"compressible\":true,\"extensions\":[\"webapp\"]},\"application/x-www-form-urlencoded\":{\"source\":\"iana\",\"compressible\":true},\"application/x-x509-ca-cert\":{\"source\":\"iana\",\"extensions\":[\"der\",\"crt\",\"pem\"]},\"application/x-x509-ca-ra-cert\":{\"source\":\"iana\"},\"application/x-x509-next-ca-cert\":{\"source\":\"iana\"},\"application/x-xfig\":{\"source\":\"apache\",\"extensions\":[\"fig\"]},\"application/x-xliff+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xlf\"]},\"application/x-xpinstall\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"xpi\"]},\"application/x-xz\":{\"source\":\"apache\",\"extensions\":[\"xz\"]},\"application/x-zmachine\":{\"source\":\"apache\",\"extensions\":[\"z1\",\"z2\",\"z3\",\"z4\",\"z5\",\"z6\",\"z7\",\"z8\"]},\"application/x400-bp\":{\"source\":\"iana\"},\"application/xacml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xaml+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xaml\"]},\"application/xcap-att+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xav\"]},\"application/xcap-caps+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xca\"]},\"application/xcap-diff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdf\"]},\"application/xcap-el+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xel\"]},\"application/xcap-error+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcap-ns+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xns\"]},\"application/xcon-conference-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcon-conference-info-diff+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xenc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xenc\"]},\"application/xhtml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xhtml\",\"xht\"]},\"application/xhtml-voice+xml\":{\"source\":\"apache\",\"compressible\":true},\"application/xliff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xlf\"]},\"application/xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xml\",\"xsl\",\"xsd\",\"rng\"]},\"application/xml-dtd\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dtd\"]},\"application/xml-external-parsed-entity\":{\"source\":\"iana\"},\"application/xml-patch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xmpp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xop+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xop\"]},\"application/xproc+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xpl\"]},\"application/xslt+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xsl\",\"xslt\"]},\"application/xspf+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xspf\"]},\"application/xv+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mxml\",\"xhvml\",\"xvml\",\"xvm\"]},\"application/yang\":{\"source\":\"iana\",\"extensions\":[\"yang\"]},\"application/yang-data+json\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-data+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-patch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/yin+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"yin\"]},\"application/zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"zip\"]},\"application/zlib\":{\"source\":\"iana\"},\"application/zstd\":{\"source\":\"iana\"},\"audio/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"audio/32kadpcm\":{\"source\":\"iana\"},\"audio/3gpp\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"3gpp\"]},\"audio/3gpp2\":{\"source\":\"iana\"},\"audio/aac\":{\"source\":\"iana\"},\"audio/ac3\":{\"source\":\"iana\"},\"audio/adpcm\":{\"source\":\"apache\",\"extensions\":[\"adp\"]},\"audio/amr\":{\"source\":\"iana\",\"extensions\":[\"amr\"]},\"audio/amr-wb\":{\"source\":\"iana\"},\"audio/amr-wb+\":{\"source\":\"iana\"},\"audio/aptx\":{\"source\":\"iana\"},\"audio/asc\":{\"source\":\"iana\"},\"audio/atrac-advanced-lossless\":{\"source\":\"iana\"},\"audio/atrac-x\":{\"source\":\"iana\"},\"audio/atrac3\":{\"source\":\"iana\"},\"audio/basic\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"au\",\"snd\"]},\"audio/bv16\":{\"source\":\"iana\"},\"audio/bv32\":{\"source\":\"iana\"},\"audio/clearmode\":{\"source\":\"iana\"},\"audio/cn\":{\"source\":\"iana\"},\"audio/dat12\":{\"source\":\"iana\"},\"audio/dls\":{\"source\":\"iana\"},\"audio/dsr-es201108\":{\"source\":\"iana\"},\"audio/dsr-es202050\":{\"source\":\"iana\"},\"audio/dsr-es202211\":{\"source\":\"iana\"},\"audio/dsr-es202212\":{\"source\":\"iana\"},\"audio/dv\":{\"source\":\"iana\"},\"audio/dvi4\":{\"source\":\"iana\"},\"audio/eac3\":{\"source\":\"iana\"},\"audio/encaprtp\":{\"source\":\"iana\"},\"audio/evrc\":{\"source\":\"iana\"},\"audio/evrc-qcp\":{\"source\":\"iana\"},\"audio/evrc0\":{\"source\":\"iana\"},\"audio/evrc1\":{\"source\":\"iana\"},\"audio/evrcb\":{\"source\":\"iana\"},\"audio/evrcb0\":{\"source\":\"iana\"},\"audio/evrcb1\":{\"source\":\"iana\"},\"audio/evrcnw\":{\"source\":\"iana\"},\"audio/evrcnw0\":{\"source\":\"iana\"},\"audio/evrcnw1\":{\"source\":\"iana\"},\"audio/evrcwb\":{\"source\":\"iana\"},\"audio/evrcwb0\":{\"source\":\"iana\"},\"audio/evrcwb1\":{\"source\":\"iana\"},\"audio/evs\":{\"source\":\"iana\"},\"audio/flexfec\":{\"source\":\"iana\"},\"audio/fwdred\":{\"source\":\"iana\"},\"audio/g711-0\":{\"source\":\"iana\"},\"audio/g719\":{\"source\":\"iana\"},\"audio/g722\":{\"source\":\"iana\"},\"audio/g7221\":{\"source\":\"iana\"},\"audio/g723\":{\"source\":\"iana\"},\"audio/g726-16\":{\"source\":\"iana\"},\"audio/g726-24\":{\"source\":\"iana\"},\"audio/g726-32\":{\"source\":\"iana\"},\"audio/g726-40\":{\"source\":\"iana\"},\"audio/g728\":{\"source\":\"iana\"},\"audio/g729\":{\"source\":\"iana\"},\"audio/g7291\":{\"source\":\"iana\"},\"audio/g729d\":{\"source\":\"iana\"},\"audio/g729e\":{\"source\":\"iana\"},\"audio/gsm\":{\"source\":\"iana\"},\"audio/gsm-efr\":{\"source\":\"iana\"},\"audio/gsm-hr-08\":{\"source\":\"iana\"},\"audio/ilbc\":{\"source\":\"iana\"},\"audio/ip-mr_v2.5\":{\"source\":\"iana\"},\"audio/isac\":{\"source\":\"apache\"},\"audio/l16\":{\"source\":\"iana\"},\"audio/l20\":{\"source\":\"iana\"},\"audio/l24\":{\"source\":\"iana\",\"compressible\":false},\"audio/l8\":{\"source\":\"iana\"},\"audio/lpc\":{\"source\":\"iana\"},\"audio/melp\":{\"source\":\"iana\"},\"audio/melp1200\":{\"source\":\"iana\"},\"audio/melp2400\":{\"source\":\"iana\"},\"audio/melp600\":{\"source\":\"iana\"},\"audio/mhas\":{\"source\":\"iana\"},\"audio/midi\":{\"source\":\"apache\",\"extensions\":[\"mid\",\"midi\",\"kar\",\"rmi\"]},\"audio/mobile-xmf\":{\"source\":\"iana\",\"extensions\":[\"mxmf\"]},\"audio/mp3\":{\"compressible\":false,\"extensions\":[\"mp3\"]},\"audio/mp4\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"m4a\",\"mp4a\"]},\"audio/mp4a-latm\":{\"source\":\"iana\"},\"audio/mpa\":{\"source\":\"iana\"},\"audio/mpa-robust\":{\"source\":\"iana\"},\"audio/mpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mpga\",\"mp2\",\"mp2a\",\"mp3\",\"m2a\",\"m3a\"]},\"audio/mpeg4-generic\":{\"source\":\"iana\"},\"audio/musepack\":{\"source\":\"apache\"},\"audio/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"oga\",\"ogg\",\"spx\",\"opus\"]},\"audio/opus\":{\"source\":\"iana\"},\"audio/parityfec\":{\"source\":\"iana\"},\"audio/pcma\":{\"source\":\"iana\"},\"audio/pcma-wb\":{\"source\":\"iana\"},\"audio/pcmu\":{\"source\":\"iana\"},\"audio/pcmu-wb\":{\"source\":\"iana\"},\"audio/prs.sid\":{\"source\":\"iana\"},\"audio/qcelp\":{\"source\":\"iana\"},\"audio/raptorfec\":{\"source\":\"iana\"},\"audio/red\":{\"source\":\"iana\"},\"audio/rtp-enc-aescm128\":{\"source\":\"iana\"},\"audio/rtp-midi\":{\"source\":\"iana\"},\"audio/rtploopback\":{\"source\":\"iana\"},\"audio/rtx\":{\"source\":\"iana\"},\"audio/s3m\":{\"source\":\"apache\",\"extensions\":[\"s3m\"]},\"audio/scip\":{\"source\":\"iana\"},\"audio/silk\":{\"source\":\"apache\",\"extensions\":[\"sil\"]},\"audio/smv\":{\"source\":\"iana\"},\"audio/smv-qcp\":{\"source\":\"iana\"},\"audio/smv0\":{\"source\":\"iana\"},\"audio/sofa\":{\"source\":\"iana\"},\"audio/sp-midi\":{\"source\":\"iana\"},\"audio/speex\":{\"source\":\"iana\"},\"audio/t140c\":{\"source\":\"iana\"},\"audio/t38\":{\"source\":\"iana\"},\"audio/telephone-event\":{\"source\":\"iana\"},\"audio/tetra_acelp\":{\"source\":\"iana\"},\"audio/tetra_acelp_bb\":{\"source\":\"iana\"},\"audio/tone\":{\"source\":\"iana\"},\"audio/tsvcis\":{\"source\":\"iana\"},\"audio/uemclip\":{\"source\":\"iana\"},\"audio/ulpfec\":{\"source\":\"iana\"},\"audio/usac\":{\"source\":\"iana\"},\"audio/vdvi\":{\"source\":\"iana\"},\"audio/vmr-wb\":{\"source\":\"iana\"},\"audio/vnd.3gpp.iufp\":{\"source\":\"iana\"},\"audio/vnd.4sb\":{\"source\":\"iana\"},\"audio/vnd.audiokoz\":{\"source\":\"iana\"},\"audio/vnd.celp\":{\"source\":\"iana\"},\"audio/vnd.cisco.nse\":{\"source\":\"iana\"},\"audio/vnd.cmles.radio-events\":{\"source\":\"iana\"},\"audio/vnd.cns.anp1\":{\"source\":\"iana\"},\"audio/vnd.cns.inf1\":{\"source\":\"iana\"},\"audio/vnd.dece.audio\":{\"source\":\"iana\",\"extensions\":[\"uva\",\"uvva\"]},\"audio/vnd.digital-winds\":{\"source\":\"iana\",\"extensions\":[\"eol\"]},\"audio/vnd.dlna.adts\":{\"source\":\"iana\"},\"audio/vnd.dolby.heaac.1\":{\"source\":\"iana\"},\"audio/vnd.dolby.heaac.2\":{\"source\":\"iana\"},\"audio/vnd.dolby.mlp\":{\"source\":\"iana\"},\"audio/vnd.dolby.mps\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2x\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2z\":{\"source\":\"iana\"},\"audio/vnd.dolby.pulse.1\":{\"source\":\"iana\"},\"audio/vnd.dra\":{\"source\":\"iana\",\"extensions\":[\"dra\"]},\"audio/vnd.dts\":{\"source\":\"iana\",\"extensions\":[\"dts\"]},\"audio/vnd.dts.hd\":{\"source\":\"iana\",\"extensions\":[\"dtshd\"]},\"audio/vnd.dts.uhd\":{\"source\":\"iana\"},\"audio/vnd.dvb.file\":{\"source\":\"iana\"},\"audio/vnd.everad.plj\":{\"source\":\"iana\"},\"audio/vnd.hns.audio\":{\"source\":\"iana\"},\"audio/vnd.lucent.voice\":{\"source\":\"iana\",\"extensions\":[\"lvp\"]},\"audio/vnd.ms-playready.media.pya\":{\"source\":\"iana\",\"extensions\":[\"pya\"]},\"audio/vnd.nokia.mobile-xmf\":{\"source\":\"iana\"},\"audio/vnd.nortel.vbk\":{\"source\":\"iana\"},\"audio/vnd.nuera.ecelp4800\":{\"source\":\"iana\",\"extensions\":[\"ecelp4800\"]},\"audio/vnd.nuera.ecelp7470\":{\"source\":\"iana\",\"extensions\":[\"ecelp7470\"]},\"audio/vnd.nuera.ecelp9600\":{\"source\":\"iana\",\"extensions\":[\"ecelp9600\"]},\"audio/vnd.octel.sbc\":{\"source\":\"iana\"},\"audio/vnd.presonus.multitrack\":{\"source\":\"iana\"},\"audio/vnd.qcelp\":{\"source\":\"iana\"},\"audio/vnd.rhetorex.32kadpcm\":{\"source\":\"iana\"},\"audio/vnd.rip\":{\"source\":\"iana\",\"extensions\":[\"rip\"]},\"audio/vnd.rn-realaudio\":{\"compressible\":false},\"audio/vnd.sealedmedia.softseal.mpeg\":{\"source\":\"iana\"},\"audio/vnd.vmx.cvsd\":{\"source\":\"iana\"},\"audio/vnd.wave\":{\"compressible\":false},\"audio/vorbis\":{\"source\":\"iana\",\"compressible\":false},\"audio/vorbis-config\":{\"source\":\"iana\"},\"audio/wav\":{\"compressible\":false,\"extensions\":[\"wav\"]},\"audio/wave\":{\"compressible\":false,\"extensions\":[\"wav\"]},\"audio/webm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"weba\"]},\"audio/x-aac\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"aac\"]},\"audio/x-aiff\":{\"source\":\"apache\",\"extensions\":[\"aif\",\"aiff\",\"aifc\"]},\"audio/x-caf\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"caf\"]},\"audio/x-flac\":{\"source\":\"apache\",\"extensions\":[\"flac\"]},\"audio/x-m4a\":{\"source\":\"nginx\",\"extensions\":[\"m4a\"]},\"audio/x-matroska\":{\"source\":\"apache\",\"extensions\":[\"mka\"]},\"audio/x-mpegurl\":{\"source\":\"apache\",\"extensions\":[\"m3u\"]},\"audio/x-ms-wax\":{\"source\":\"apache\",\"extensions\":[\"wax\"]},\"audio/x-ms-wma\":{\"source\":\"apache\",\"extensions\":[\"wma\"]},\"audio/x-pn-realaudio\":{\"source\":\"apache\",\"extensions\":[\"ram\",\"ra\"]},\"audio/x-pn-realaudio-plugin\":{\"source\":\"apache\",\"extensions\":[\"rmp\"]},\"audio/x-realaudio\":{\"source\":\"nginx\",\"extensions\":[\"ra\"]},\"audio/x-tta\":{\"source\":\"apache\"},\"audio/x-wav\":{\"source\":\"apache\",\"extensions\":[\"wav\"]},\"audio/xm\":{\"source\":\"apache\",\"extensions\":[\"xm\"]},\"chemical/x-cdx\":{\"source\":\"apache\",\"extensions\":[\"cdx\"]},\"chemical/x-cif\":{\"source\":\"apache\",\"extensions\":[\"cif\"]},\"chemical/x-cmdf\":{\"source\":\"apache\",\"extensions\":[\"cmdf\"]},\"chemical/x-cml\":{\"source\":\"apache\",\"extensions\":[\"cml\"]},\"chemical/x-csml\":{\"source\":\"apache\",\"extensions\":[\"csml\"]},\"chemical/x-pdb\":{\"source\":\"apache\"},\"chemical/x-xyz\":{\"source\":\"apache\",\"extensions\":[\"xyz\"]},\"font/collection\":{\"source\":\"iana\",\"extensions\":[\"ttc\"]},\"font/otf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"otf\"]},\"font/sfnt\":{\"source\":\"iana\"},\"font/ttf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ttf\"]},\"font/woff\":{\"source\":\"iana\",\"extensions\":[\"woff\"]},\"font/woff2\":{\"source\":\"iana\",\"extensions\":[\"woff2\"]},\"image/aces\":{\"source\":\"iana\",\"extensions\":[\"exr\"]},\"image/apng\":{\"compressible\":false,\"extensions\":[\"apng\"]},\"image/avci\":{\"source\":\"iana\",\"extensions\":[\"avci\"]},\"image/avcs\":{\"source\":\"iana\",\"extensions\":[\"avcs\"]},\"image/avif\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"avif\"]},\"image/bmp\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"bmp\"]},\"image/cgm\":{\"source\":\"iana\",\"extensions\":[\"cgm\"]},\"image/dicom-rle\":{\"source\":\"iana\",\"extensions\":[\"drle\"]},\"image/emf\":{\"source\":\"iana\",\"extensions\":[\"emf\"]},\"image/fits\":{\"source\":\"iana\",\"extensions\":[\"fits\"]},\"image/g3fax\":{\"source\":\"iana\",\"extensions\":[\"g3\"]},\"image/gif\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"gif\"]},\"image/heic\":{\"source\":\"iana\",\"extensions\":[\"heic\"]},\"image/heic-sequence\":{\"source\":\"iana\",\"extensions\":[\"heics\"]},\"image/heif\":{\"source\":\"iana\",\"extensions\":[\"heif\"]},\"image/heif-sequence\":{\"source\":\"iana\",\"extensions\":[\"heifs\"]},\"image/hej2k\":{\"source\":\"iana\",\"extensions\":[\"hej2\"]},\"image/hsj2\":{\"source\":\"iana\",\"extensions\":[\"hsj2\"]},\"image/ief\":{\"source\":\"iana\",\"extensions\":[\"ief\"]},\"image/jls\":{\"source\":\"iana\",\"extensions\":[\"jls\"]},\"image/jp2\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jp2\",\"jpg2\"]},\"image/jpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpeg\",\"jpg\",\"jpe\"]},\"image/jph\":{\"source\":\"iana\",\"extensions\":[\"jph\"]},\"image/jphc\":{\"source\":\"iana\",\"extensions\":[\"jhc\"]},\"image/jpm\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpm\"]},\"image/jpx\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpx\",\"jpf\"]},\"image/jxr\":{\"source\":\"iana\",\"extensions\":[\"jxr\"]},\"image/jxra\":{\"source\":\"iana\",\"extensions\":[\"jxra\"]},\"image/jxrs\":{\"source\":\"iana\",\"extensions\":[\"jxrs\"]},\"image/jxs\":{\"source\":\"iana\",\"extensions\":[\"jxs\"]},\"image/jxsc\":{\"source\":\"iana\",\"extensions\":[\"jxsc\"]},\"image/jxsi\":{\"source\":\"iana\",\"extensions\":[\"jxsi\"]},\"image/jxss\":{\"source\":\"iana\",\"extensions\":[\"jxss\"]},\"image/ktx\":{\"source\":\"iana\",\"extensions\":[\"ktx\"]},\"image/ktx2\":{\"source\":\"iana\",\"extensions\":[\"ktx2\"]},\"image/naplps\":{\"source\":\"iana\"},\"image/pjpeg\":{\"compressible\":false},\"image/png\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"png\"]},\"image/prs.btif\":{\"source\":\"iana\",\"extensions\":[\"btif\"]},\"image/prs.pti\":{\"source\":\"iana\",\"extensions\":[\"pti\"]},\"image/pwg-raster\":{\"source\":\"iana\"},\"image/sgi\":{\"source\":\"apache\",\"extensions\":[\"sgi\"]},\"image/svg+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"svg\",\"svgz\"]},\"image/t38\":{\"source\":\"iana\",\"extensions\":[\"t38\"]},\"image/tiff\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"tif\",\"tiff\"]},\"image/tiff-fx\":{\"source\":\"iana\",\"extensions\":[\"tfx\"]},\"image/vnd.adobe.photoshop\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"psd\"]},\"image/vnd.airzip.accelerator.azv\":{\"source\":\"iana\",\"extensions\":[\"azv\"]},\"image/vnd.cns.inf2\":{\"source\":\"iana\"},\"image/vnd.dece.graphic\":{\"source\":\"iana\",\"extensions\":[\"uvi\",\"uvvi\",\"uvg\",\"uvvg\"]},\"image/vnd.djvu\":{\"source\":\"iana\",\"extensions\":[\"djvu\",\"djv\"]},\"image/vnd.dvb.subtitle\":{\"source\":\"iana\",\"extensions\":[\"sub\"]},\"image/vnd.dwg\":{\"source\":\"iana\",\"extensions\":[\"dwg\"]},\"image/vnd.dxf\":{\"source\":\"iana\",\"extensions\":[\"dxf\"]},\"image/vnd.fastbidsheet\":{\"source\":\"iana\",\"extensions\":[\"fbs\"]},\"image/vnd.fpx\":{\"source\":\"iana\",\"extensions\":[\"fpx\"]},\"image/vnd.fst\":{\"source\":\"iana\",\"extensions\":[\"fst\"]},\"image/vnd.fujixerox.edmics-mmr\":{\"source\":\"iana\",\"extensions\":[\"mmr\"]},\"image/vnd.fujixerox.edmics-rlc\":{\"source\":\"iana\",\"extensions\":[\"rlc\"]},\"image/vnd.globalgraphics.pgb\":{\"source\":\"iana\"},\"image/vnd.microsoft.icon\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ico\"]},\"image/vnd.mix\":{\"source\":\"iana\"},\"image/vnd.mozilla.apng\":{\"source\":\"iana\"},\"image/vnd.ms-dds\":{\"compressible\":true,\"extensions\":[\"dds\"]},\"image/vnd.ms-modi\":{\"source\":\"iana\",\"extensions\":[\"mdi\"]},\"image/vnd.ms-photo\":{\"source\":\"apache\",\"extensions\":[\"wdp\"]},\"image/vnd.net-fpx\":{\"source\":\"iana\",\"extensions\":[\"npx\"]},\"image/vnd.pco.b16\":{\"source\":\"iana\",\"extensions\":[\"b16\"]},\"image/vnd.radiance\":{\"source\":\"iana\"},\"image/vnd.sealed.png\":{\"source\":\"iana\"},\"image/vnd.sealedmedia.softseal.gif\":{\"source\":\"iana\"},\"image/vnd.sealedmedia.softseal.jpg\":{\"source\":\"iana\"},\"image/vnd.svf\":{\"source\":\"iana\"},\"image/vnd.tencent.tap\":{\"source\":\"iana\",\"extensions\":[\"tap\"]},\"image/vnd.valve.source.texture\":{\"source\":\"iana\",\"extensions\":[\"vtf\"]},\"image/vnd.wap.wbmp\":{\"source\":\"iana\",\"extensions\":[\"wbmp\"]},\"image/vnd.xiff\":{\"source\":\"iana\",\"extensions\":[\"xif\"]},\"image/vnd.zbrush.pcx\":{\"source\":\"iana\",\"extensions\":[\"pcx\"]},\"image/webp\":{\"source\":\"apache\",\"extensions\":[\"webp\"]},\"image/wmf\":{\"source\":\"iana\",\"extensions\":[\"wmf\"]},\"image/x-3ds\":{\"source\":\"apache\",\"extensions\":[\"3ds\"]},\"image/x-cmu-raster\":{\"source\":\"apache\",\"extensions\":[\"ras\"]},\"image/x-cmx\":{\"source\":\"apache\",\"extensions\":[\"cmx\"]},\"image/x-freehand\":{\"source\":\"apache\",\"extensions\":[\"fh\",\"fhc\",\"fh4\",\"fh5\",\"fh7\"]},\"image/x-icon\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ico\"]},\"image/x-jng\":{\"source\":\"nginx\",\"extensions\":[\"jng\"]},\"image/x-mrsid-image\":{\"source\":\"apache\",\"extensions\":[\"sid\"]},\"image/x-ms-bmp\":{\"source\":\"nginx\",\"compressible\":true,\"extensions\":[\"bmp\"]},\"image/x-pcx\":{\"source\":\"apache\",\"extensions\":[\"pcx\"]},\"image/x-pict\":{\"source\":\"apache\",\"extensions\":[\"pic\",\"pct\"]},\"image/x-portable-anymap\":{\"source\":\"apache\",\"extensions\":[\"pnm\"]},\"image/x-portable-bitmap\":{\"source\":\"apache\",\"extensions\":[\"pbm\"]},\"image/x-portable-graymap\":{\"source\":\"apache\",\"extensions\":[\"pgm\"]},\"image/x-portable-pixmap\":{\"source\":\"apache\",\"extensions\":[\"ppm\"]},\"image/x-rgb\":{\"source\":\"apache\",\"extensions\":[\"rgb\"]},\"image/x-tga\":{\"source\":\"apache\",\"extensions\":[\"tga\"]},\"image/x-xbitmap\":{\"source\":\"apache\",\"extensions\":[\"xbm\"]},\"image/x-xcf\":{\"compressible\":false},\"image/x-xpixmap\":{\"source\":\"apache\",\"extensions\":[\"xpm\"]},\"image/x-xwindowdump\":{\"source\":\"apache\",\"extensions\":[\"xwd\"]},\"message/cpim\":{\"source\":\"iana\"},\"message/delivery-status\":{\"source\":\"iana\"},\"message/disposition-notification\":{\"source\":\"iana\",\"extensions\":[\"disposition-notification\"]},\"message/external-body\":{\"source\":\"iana\"},\"message/feedback-report\":{\"source\":\"iana\"},\"message/global\":{\"source\":\"iana\",\"extensions\":[\"u8msg\"]},\"message/global-delivery-status\":{\"source\":\"iana\",\"extensions\":[\"u8dsn\"]},\"message/global-disposition-notification\":{\"source\":\"iana\",\"extensions\":[\"u8mdn\"]},\"message/global-headers\":{\"source\":\"iana\",\"extensions\":[\"u8hdr\"]},\"message/http\":{\"source\":\"iana\",\"compressible\":false},\"message/imdn+xml\":{\"source\":\"iana\",\"compressible\":true},\"message/news\":{\"source\":\"iana\"},\"message/partial\":{\"source\":\"iana\",\"compressible\":false},\"message/rfc822\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"eml\",\"mime\"]},\"message/s-http\":{\"source\":\"iana\"},\"message/sip\":{\"source\":\"iana\"},\"message/sipfrag\":{\"source\":\"iana\"},\"message/tracking-status\":{\"source\":\"iana\"},\"message/vnd.si.simp\":{\"source\":\"iana\"},\"message/vnd.wfa.wsc\":{\"source\":\"iana\",\"extensions\":[\"wsc\"]},\"model/3mf\":{\"source\":\"iana\",\"extensions\":[\"3mf\"]},\"model/e57\":{\"source\":\"iana\"},\"model/gltf+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"gltf\"]},\"model/gltf-binary\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"glb\"]},\"model/iges\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"igs\",\"iges\"]},\"model/mesh\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"msh\",\"mesh\",\"silo\"]},\"model/mtl\":{\"source\":\"iana\",\"extensions\":[\"mtl\"]},\"model/obj\":{\"source\":\"iana\",\"extensions\":[\"obj\"]},\"model/step\":{\"source\":\"iana\"},\"model/step+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"stpx\"]},\"model/step+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"stpz\"]},\"model/step-xml+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"stpxz\"]},\"model/stl\":{\"source\":\"iana\",\"extensions\":[\"stl\"]},\"model/vnd.collada+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dae\"]},\"model/vnd.dwf\":{\"source\":\"iana\",\"extensions\":[\"dwf\"]},\"model/vnd.flatland.3dml\":{\"source\":\"iana\"},\"model/vnd.gdl\":{\"source\":\"iana\",\"extensions\":[\"gdl\"]},\"model/vnd.gs-gdl\":{\"source\":\"apache\"},\"model/vnd.gs.gdl\":{\"source\":\"iana\"},\"model/vnd.gtw\":{\"source\":\"iana\",\"extensions\":[\"gtw\"]},\"model/vnd.moml+xml\":{\"source\":\"iana\",\"compressible\":true},\"model/vnd.mts\":{\"source\":\"iana\",\"extensions\":[\"mts\"]},\"model/vnd.opengex\":{\"source\":\"iana\",\"extensions\":[\"ogex\"]},\"model/vnd.parasolid.transmit.binary\":{\"source\":\"iana\",\"extensions\":[\"x_b\"]},\"model/vnd.parasolid.transmit.text\":{\"source\":\"iana\",\"extensions\":[\"x_t\"]},\"model/vnd.pytha.pyox\":{\"source\":\"iana\"},\"model/vnd.rosette.annotated-data-model\":{\"source\":\"iana\"},\"model/vnd.sap.vds\":{\"source\":\"iana\",\"extensions\":[\"vds\"]},\"model/vnd.usdz+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"usdz\"]},\"model/vnd.valve.source.compiled-map\":{\"source\":\"iana\",\"extensions\":[\"bsp\"]},\"model/vnd.vtu\":{\"source\":\"iana\",\"extensions\":[\"vtu\"]},\"model/vrml\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"wrl\",\"vrml\"]},\"model/x3d+binary\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"x3db\",\"x3dbz\"]},\"model/x3d+fastinfoset\":{\"source\":\"iana\",\"extensions\":[\"x3db\"]},\"model/x3d+vrml\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"x3dv\",\"x3dvz\"]},\"model/x3d+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"x3d\",\"x3dz\"]},\"model/x3d-vrml\":{\"source\":\"iana\",\"extensions\":[\"x3dv\"]},\"multipart/alternative\":{\"source\":\"iana\",\"compressible\":false},\"multipart/appledouble\":{\"source\":\"iana\"},\"multipart/byteranges\":{\"source\":\"iana\"},\"multipart/digest\":{\"source\":\"iana\"},\"multipart/encrypted\":{\"source\":\"iana\",\"compressible\":false},\"multipart/form-data\":{\"source\":\"iana\",\"compressible\":false},\"multipart/header-set\":{\"source\":\"iana\"},\"multipart/mixed\":{\"source\":\"iana\"},\"multipart/multilingual\":{\"source\":\"iana\"},\"multipart/parallel\":{\"source\":\"iana\"},\"multipart/related\":{\"source\":\"iana\",\"compressible\":false},\"multipart/report\":{\"source\":\"iana\"},\"multipart/signed\":{\"source\":\"iana\",\"compressible\":false},\"multipart/vnd.bint.med-plus\":{\"source\":\"iana\"},\"multipart/voice-message\":{\"source\":\"iana\"},\"multipart/x-mixed-replace\":{\"source\":\"iana\"},\"text/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"text/cache-manifest\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"appcache\",\"manifest\"]},\"text/calendar\":{\"source\":\"iana\",\"extensions\":[\"ics\",\"ifb\"]},\"text/calender\":{\"compressible\":true},\"text/cmd\":{\"compressible\":true},\"text/coffeescript\":{\"extensions\":[\"coffee\",\"litcoffee\"]},\"text/cql\":{\"source\":\"iana\"},\"text/cql-expression\":{\"source\":\"iana\"},\"text/cql-identifier\":{\"source\":\"iana\"},\"text/css\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"css\"]},\"text/csv\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"csv\"]},\"text/csv-schema\":{\"source\":\"iana\"},\"text/directory\":{\"source\":\"iana\"},\"text/dns\":{\"source\":\"iana\"},\"text/ecmascript\":{\"source\":\"iana\"},\"text/encaprtp\":{\"source\":\"iana\"},\"text/enriched\":{\"source\":\"iana\"},\"text/fhirpath\":{\"source\":\"iana\"},\"text/flexfec\":{\"source\":\"iana\"},\"text/fwdred\":{\"source\":\"iana\"},\"text/gff3\":{\"source\":\"iana\"},\"text/grammar-ref-list\":{\"source\":\"iana\"},\"text/html\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"html\",\"htm\",\"shtml\"]},\"text/jade\":{\"extensions\":[\"jade\"]},\"text/javascript\":{\"source\":\"iana\",\"compressible\":true},\"text/jcr-cnd\":{\"source\":\"iana\"},\"text/jsx\":{\"compressible\":true,\"extensions\":[\"jsx\"]},\"text/less\":{\"compressible\":true,\"extensions\":[\"less\"]},\"text/markdown\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"markdown\",\"md\"]},\"text/mathml\":{\"source\":\"nginx\",\"extensions\":[\"mml\"]},\"text/mdx\":{\"compressible\":true,\"extensions\":[\"mdx\"]},\"text/mizar\":{\"source\":\"iana\"},\"text/n3\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"n3\"]},\"text/parameters\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/parityfec\":{\"source\":\"iana\"},\"text/plain\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"txt\",\"text\",\"conf\",\"def\",\"list\",\"log\",\"in\",\"ini\"]},\"text/provenance-notation\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/prs.fallenstein.rst\":{\"source\":\"iana\"},\"text/prs.lines.tag\":{\"source\":\"iana\",\"extensions\":[\"dsc\"]},\"text/prs.prop.logic\":{\"source\":\"iana\"},\"text/raptorfec\":{\"source\":\"iana\"},\"text/red\":{\"source\":\"iana\"},\"text/rfc822-headers\":{\"source\":\"iana\"},\"text/richtext\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtx\"]},\"text/rtf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtf\"]},\"text/rtp-enc-aescm128\":{\"source\":\"iana\"},\"text/rtploopback\":{\"source\":\"iana\"},\"text/rtx\":{\"source\":\"iana\"},\"text/sgml\":{\"source\":\"iana\",\"extensions\":[\"sgml\",\"sgm\"]},\"text/shaclc\":{\"source\":\"iana\"},\"text/shex\":{\"source\":\"iana\",\"extensions\":[\"shex\"]},\"text/slim\":{\"extensions\":[\"slim\",\"slm\"]},\"text/spdx\":{\"source\":\"iana\",\"extensions\":[\"spdx\"]},\"text/strings\":{\"source\":\"iana\"},\"text/stylus\":{\"extensions\":[\"stylus\",\"styl\"]},\"text/t140\":{\"source\":\"iana\"},\"text/tab-separated-values\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tsv\"]},\"text/troff\":{\"source\":\"iana\",\"extensions\":[\"t\",\"tr\",\"roff\",\"man\",\"me\",\"ms\"]},\"text/turtle\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"ttl\"]},\"text/ulpfec\":{\"source\":\"iana\"},\"text/uri-list\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uri\",\"uris\",\"urls\"]},\"text/vcard\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"vcard\"]},\"text/vnd.a\":{\"source\":\"iana\"},\"text/vnd.abc\":{\"source\":\"iana\"},\"text/vnd.ascii-art\":{\"source\":\"iana\"},\"text/vnd.curl\":{\"source\":\"iana\",\"extensions\":[\"curl\"]},\"text/vnd.curl.dcurl\":{\"source\":\"apache\",\"extensions\":[\"dcurl\"]},\"text/vnd.curl.mcurl\":{\"source\":\"apache\",\"extensions\":[\"mcurl\"]},\"text/vnd.curl.scurl\":{\"source\":\"apache\",\"extensions\":[\"scurl\"]},\"text/vnd.debian.copyright\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/vnd.dmclientscript\":{\"source\":\"iana\"},\"text/vnd.dvb.subtitle\":{\"source\":\"iana\",\"extensions\":[\"sub\"]},\"text/vnd.esmertec.theme-descriptor\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/vnd.familysearch.gedcom\":{\"source\":\"iana\",\"extensions\":[\"ged\"]},\"text/vnd.ficlab.flt\":{\"source\":\"iana\"},\"text/vnd.fly\":{\"source\":\"iana\",\"extensions\":[\"fly\"]},\"text/vnd.fmi.flexstor\":{\"source\":\"iana\",\"extensions\":[\"flx\"]},\"text/vnd.gml\":{\"source\":\"iana\"},\"text/vnd.graphviz\":{\"source\":\"iana\",\"extensions\":[\"gv\"]},\"text/vnd.hans\":{\"source\":\"iana\"},\"text/vnd.hgl\":{\"source\":\"iana\"},\"text/vnd.in3d.3dml\":{\"source\":\"iana\",\"extensions\":[\"3dml\"]},\"text/vnd.in3d.spot\":{\"source\":\"iana\",\"extensions\":[\"spot\"]},\"text/vnd.iptc.newsml\":{\"source\":\"iana\"},\"text/vnd.iptc.nitf\":{\"source\":\"iana\"},\"text/vnd.latex-z\":{\"source\":\"iana\"},\"text/vnd.motorola.reflex\":{\"source\":\"iana\"},\"text/vnd.ms-mediapackage\":{\"source\":\"iana\"},\"text/vnd.net2phone.commcenter.command\":{\"source\":\"iana\"},\"text/vnd.radisys.msml-basic-layout\":{\"source\":\"iana\"},\"text/vnd.senx.warpscript\":{\"source\":\"iana\"},\"text/vnd.si.uricatalogue\":{\"source\":\"iana\"},\"text/vnd.sosi\":{\"source\":\"iana\"},\"text/vnd.sun.j2me.app-descriptor\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"jad\"]},\"text/vnd.trolltech.linguist\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/vnd.wap.si\":{\"source\":\"iana\"},\"text/vnd.wap.sl\":{\"source\":\"iana\"},\"text/vnd.wap.wml\":{\"source\":\"iana\",\"extensions\":[\"wml\"]},\"text/vnd.wap.wmlscript\":{\"source\":\"iana\",\"extensions\":[\"wmls\"]},\"text/vtt\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"vtt\"]},\"text/x-asm\":{\"source\":\"apache\",\"extensions\":[\"s\",\"asm\"]},\"text/x-c\":{\"source\":\"apache\",\"extensions\":[\"c\",\"cc\",\"cxx\",\"cpp\",\"h\",\"hh\",\"dic\"]},\"text/x-component\":{\"source\":\"nginx\",\"extensions\":[\"htc\"]},\"text/x-fortran\":{\"source\":\"apache\",\"extensions\":[\"f\",\"for\",\"f77\",\"f90\"]},\"text/x-gwt-rpc\":{\"compressible\":true},\"text/x-handlebars-template\":{\"extensions\":[\"hbs\"]},\"text/x-java-source\":{\"source\":\"apache\",\"extensions\":[\"java\"]},\"text/x-jquery-tmpl\":{\"compressible\":true},\"text/x-lua\":{\"extensions\":[\"lua\"]},\"text/x-markdown\":{\"compressible\":true,\"extensions\":[\"mkd\"]},\"text/x-nfo\":{\"source\":\"apache\",\"extensions\":[\"nfo\"]},\"text/x-opml\":{\"source\":\"apache\",\"extensions\":[\"opml\"]},\"text/x-org\":{\"compressible\":true,\"extensions\":[\"org\"]},\"text/x-pascal\":{\"source\":\"apache\",\"extensions\":[\"p\",\"pas\"]},\"text/x-processing\":{\"compressible\":true,\"extensions\":[\"pde\"]},\"text/x-sass\":{\"extensions\":[\"sass\"]},\"text/x-scss\":{\"extensions\":[\"scss\"]},\"text/x-setext\":{\"source\":\"apache\",\"extensions\":[\"etx\"]},\"text/x-sfv\":{\"source\":\"apache\",\"extensions\":[\"sfv\"]},\"text/x-suse-ymp\":{\"compressible\":true,\"extensions\":[\"ymp\"]},\"text/x-uuencode\":{\"source\":\"apache\",\"extensions\":[\"uu\"]},\"text/x-vcalendar\":{\"source\":\"apache\",\"extensions\":[\"vcs\"]},\"text/x-vcard\":{\"source\":\"apache\",\"extensions\":[\"vcf\"]},\"text/xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xml\"]},\"text/xml-external-parsed-entity\":{\"source\":\"iana\"},\"text/yaml\":{\"compressible\":true,\"extensions\":[\"yaml\",\"yml\"]},\"video/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"video/3gpp\":{\"source\":\"iana\",\"extensions\":[\"3gp\",\"3gpp\"]},\"video/3gpp-tt\":{\"source\":\"iana\"},\"video/3gpp2\":{\"source\":\"iana\",\"extensions\":[\"3g2\"]},\"video/av1\":{\"source\":\"iana\"},\"video/bmpeg\":{\"source\":\"iana\"},\"video/bt656\":{\"source\":\"iana\"},\"video/celb\":{\"source\":\"iana\"},\"video/dv\":{\"source\":\"iana\"},\"video/encaprtp\":{\"source\":\"iana\"},\"video/ffv1\":{\"source\":\"iana\"},\"video/flexfec\":{\"source\":\"iana\"},\"video/h261\":{\"source\":\"iana\",\"extensions\":[\"h261\"]},\"video/h263\":{\"source\":\"iana\",\"extensions\":[\"h263\"]},\"video/h263-1998\":{\"source\":\"iana\"},\"video/h263-2000\":{\"source\":\"iana\"},\"video/h264\":{\"source\":\"iana\",\"extensions\":[\"h264\"]},\"video/h264-rcdo\":{\"source\":\"iana\"},\"video/h264-svc\":{\"source\":\"iana\"},\"video/h265\":{\"source\":\"iana\"},\"video/iso.segment\":{\"source\":\"iana\",\"extensions\":[\"m4s\"]},\"video/jpeg\":{\"source\":\"iana\",\"extensions\":[\"jpgv\"]},\"video/jpeg2000\":{\"source\":\"iana\"},\"video/jpm\":{\"source\":\"apache\",\"extensions\":[\"jpm\",\"jpgm\"]},\"video/jxsv\":{\"source\":\"iana\"},\"video/mj2\":{\"source\":\"iana\",\"extensions\":[\"mj2\",\"mjp2\"]},\"video/mp1s\":{\"source\":\"iana\"},\"video/mp2p\":{\"source\":\"iana\"},\"video/mp2t\":{\"source\":\"iana\",\"extensions\":[\"ts\"]},\"video/mp4\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mp4\",\"mp4v\",\"mpg4\"]},\"video/mp4v-es\":{\"source\":\"iana\"},\"video/mpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mpeg\",\"mpg\",\"mpe\",\"m1v\",\"m2v\"]},\"video/mpeg4-generic\":{\"source\":\"iana\"},\"video/mpv\":{\"source\":\"iana\"},\"video/nv\":{\"source\":\"iana\"},\"video/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ogv\"]},\"video/parityfec\":{\"source\":\"iana\"},\"video/pointer\":{\"source\":\"iana\"},\"video/quicktime\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"qt\",\"mov\"]},\"video/raptorfec\":{\"source\":\"iana\"},\"video/raw\":{\"source\":\"iana\"},\"video/rtp-enc-aescm128\":{\"source\":\"iana\"},\"video/rtploopback\":{\"source\":\"iana\"},\"video/rtx\":{\"source\":\"iana\"},\"video/scip\":{\"source\":\"iana\"},\"video/smpte291\":{\"source\":\"iana\"},\"video/smpte292m\":{\"source\":\"iana\"},\"video/ulpfec\":{\"source\":\"iana\"},\"video/vc1\":{\"source\":\"iana\"},\"video/vc2\":{\"source\":\"iana\"},\"video/vnd.cctv\":{\"source\":\"iana\"},\"video/vnd.dece.hd\":{\"source\":\"iana\",\"extensions\":[\"uvh\",\"uvvh\"]},\"video/vnd.dece.mobile\":{\"source\":\"iana\",\"extensions\":[\"uvm\",\"uvvm\"]},\"video/vnd.dece.mp4\":{\"source\":\"iana\"},\"video/vnd.dece.pd\":{\"source\":\"iana\",\"extensions\":[\"uvp\",\"uvvp\"]},\"video/vnd.dece.sd\":{\"source\":\"iana\",\"extensions\":[\"uvs\",\"uvvs\"]},\"video/vnd.dece.video\":{\"source\":\"iana\",\"extensions\":[\"uvv\",\"uvvv\"]},\"video/vnd.directv.mpeg\":{\"source\":\"iana\"},\"video/vnd.directv.mpeg-tts\":{\"source\":\"iana\"},\"video/vnd.dlna.mpeg-tts\":{\"source\":\"iana\"},\"video/vnd.dvb.file\":{\"source\":\"iana\",\"extensions\":[\"dvb\"]},\"video/vnd.fvt\":{\"source\":\"iana\",\"extensions\":[\"fvt\"]},\"video/vnd.hns.video\":{\"source\":\"iana\"},\"video/vnd.iptvforum.1dparityfec-1010\":{\"source\":\"iana\"},\"video/vnd.iptvforum.1dparityfec-2005\":{\"source\":\"iana\"},\"video/vnd.iptvforum.2dparityfec-1010\":{\"source\":\"iana\"},\"video/vnd.iptvforum.2dparityfec-2005\":{\"source\":\"iana\"},\"video/vnd.iptvforum.ttsavc\":{\"source\":\"iana\"},\"video/vnd.iptvforum.ttsmpeg2\":{\"source\":\"iana\"},\"video/vnd.motorola.video\":{\"source\":\"iana\"},\"video/vnd.motorola.videop\":{\"source\":\"iana\"},\"video/vnd.mpegurl\":{\"source\":\"iana\",\"extensions\":[\"mxu\",\"m4u\"]},\"video/vnd.ms-playready.media.pyv\":{\"source\":\"iana\",\"extensions\":[\"pyv\"]},\"video/vnd.nokia.interleaved-multimedia\":{\"source\":\"iana\"},\"video/vnd.nokia.mp4vr\":{\"source\":\"iana\"},\"video/vnd.nokia.videovoip\":{\"source\":\"iana\"},\"video/vnd.objectvideo\":{\"source\":\"iana\"},\"video/vnd.radgamettools.bink\":{\"source\":\"iana\"},\"video/vnd.radgamettools.smacker\":{\"source\":\"iana\"},\"video/vnd.sealed.mpeg1\":{\"source\":\"iana\"},\"video/vnd.sealed.mpeg4\":{\"source\":\"iana\"},\"video/vnd.sealed.swf\":{\"source\":\"iana\"},\"video/vnd.sealedmedia.softseal.mov\":{\"source\":\"iana\"},\"video/vnd.uvvu.mp4\":{\"source\":\"iana\",\"extensions\":[\"uvu\",\"uvvu\"]},\"video/vnd.vivo\":{\"source\":\"iana\",\"extensions\":[\"viv\"]},\"video/vnd.youtube.yt\":{\"source\":\"iana\"},\"video/vp8\":{\"source\":\"iana\"},\"video/vp9\":{\"source\":\"iana\"},\"video/webm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"webm\"]},\"video/x-f4v\":{\"source\":\"apache\",\"extensions\":[\"f4v\"]},\"video/x-fli\":{\"source\":\"apache\",\"extensions\":[\"fli\"]},\"video/x-flv\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"flv\"]},\"video/x-m4v\":{\"source\":\"apache\",\"extensions\":[\"m4v\"]},\"video/x-matroska\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"mkv\",\"mk3d\",\"mks\"]},\"video/x-mng\":{\"source\":\"apache\",\"extensions\":[\"mng\"]},\"video/x-ms-asf\":{\"source\":\"apache\",\"extensions\":[\"asf\",\"asx\"]},\"video/x-ms-vob\":{\"source\":\"apache\",\"extensions\":[\"vob\"]},\"video/x-ms-wm\":{\"source\":\"apache\",\"extensions\":[\"wm\"]},\"video/x-ms-wmv\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"wmv\"]},\"video/x-ms-wmx\":{\"source\":\"apache\",\"extensions\":[\"wmx\"]},\"video/x-ms-wvx\":{\"source\":\"apache\",\"extensions\":[\"wvx\"]},\"video/x-msvideo\":{\"source\":\"apache\",\"extensions\":[\"avi\"]},\"video/x-sgi-movie\":{\"source\":\"apache\",\"extensions\":[\"movie\"]},\"video/x-smv\":{\"source\":\"apache\",\"extensions\":[\"smv\"]},\"x-conference/x-cooltalk\":{\"source\":\"apache\",\"extensions\":[\"ice\"]},\"x-shader/x-fragment\":{\"compressible\":true},\"x-shader/x-vertex\":{\"compressible\":true}}");
    },
    8330(_0x597c6e) {
      "use strict";

      _0x597c6e.exports = JSON.parse("{\"name\":\"cursor-free\",\"displayName\":\"cursor-free\",\"description\":\"Manage token authentication and authorization for Cursor\",\"version\":\"2.3.6\",\"publisher\":\"jg\",\"repository\":{\"url\":\"https://github.com/your-org/cursor-free\",\"type\":\"git\"},\"engines\":{\"vscode\":\"^1.71.0\"},\"categories\":[\"Other\"],\"activationEvents\":[],\"main\":\"./dist/extension.js\",\"contributes\":{\"viewsContainers\":{\"activitybar\":[{\"id\":\"cursor-free\",\"title\":\"cursor-free\",\"icon\":\"resources/icon.svg\"}]},\"views\":{\"cursor-free\":[{\"type\":\"webview\",\"id\":\"cursor-free.view\",\"name\":\"Token Manager\"}]},\"commands\":[{\"command\":\"cursor-free.enableProxy\",\"title\":\"启用/更新代理\",\"category\":\"Cursor Free\"},{\"command\":\"cursor-free.disableProxy\",\"title\":\"禁用代理\",\"category\":\"Cursor Free\"},{\"command\":\"cursor-free.restoreCursor\",\"title\":\"恢复Cursor\",\"category\":\"Cursor Free\"}],\"configuration\":{\"title\":\"cursor-free\",\"properties\":{\"cursorFree.apiBaseUrl\":{\"type\":\"string\",\"default\":\"http://localhost:3000/api\",\"description\":\"Base URL for the token management API\"}}}},\"scripts\":{\"vscode:prepublish\":\"npm run build\",\"compile\":\"webpack\",\"watch\":\"npm-run-all --parallel watch:*\",\"watch:ext\":\"webpack --mode development --watch --config ./webpack/extension.config.js\",\"watch:wv\":\"webpack serve --mode development --config ./webpack/webview.config.js\",\"build\":\"npm run clean && npm-run-all --parallel build:* && npm run clean:maps\",\"build:ext\":\"webpack --mode production --config ./webpack/extension.config.js\",\"build:wv\":\"webpack --mode production --config ./webpack/webview.config.js\",\"package\":\"vsce package --no-dependencies\",\"release\":\"npm run build && npm version patch && npm run package\",\"release:minor\":\"npm run build && npm version minor && npm run package\",\"release:major\":\"npm run build && npm version major && npm run package\",\"compile-tests\":\"tsc -p . --outDir out\",\"watch-tests\":\"tsc -p . -w --outDir out\",\"pretest\":\"npm run compile-tests && npm run compile && npm run lint\",\"lint\":\"eslint src --ext ts\",\"clean\":\"rimraf dist out *.tsbuildinfo\",\"clean:maps\":\"rimraf dist/**/*.map\",\"verify:security\":\"npm run verify:no-sourcemaps && npm run verify:no-env\",\"verify:no-sourcemaps\":\"! find dist -name '*.map' | grep -q . && echo '✓ No source maps found in dist' || (echo '✗ Source maps found in dist!' && exit 1)\",\"verify:no-env\":\"! find dist -name '.env' -o -name '.env.*' | grep -q . && echo '✓ No .env files in dist' || (echo '✗ .env files found in dist!' && exit 1)\",\"test\":\"node ./out/test/runTest.js\",\"generate-patch\":\"npx ts-node scripts/generateCursorPatch.ts\",\"test-decrypt\":\"npx ts-node scripts/testDecrypt.ts\",\"test-encryption\":\"npx ts-node scripts/testEncryption.ts\",\"test-wasm\":\"npx ts-node scripts/testWasmDecrypt.ts\",\"create-test-rules\":\"npx ts-node scripts/createTestPatchRules.ts\",\"encrypt-rules\":\"npx ts-node scripts/encryptPatchRules.ts\",\"build:wasm\":\"cd wasm-crypto && bash build.sh\",\"prebuild\":\"npm run build:wasm\"},\"dependencies\":{\"axios\":\"^1.13.2\",\"jsonc-parser\":\"^3.2.0\",\"uuid\":\"^9.0.0\"},\"devDependencies\":{\"@estruyf/vscode\":\"^1.1.0\",\"@types/glob\":\"^7.2.0\",\"@types/mocha\":\"^9.1.1\",\"@types/node\":\"16.x\",\"@types/react\":\"^19.0.1\",\"@types/react-dom\":\"^19.0.2\",\"@types/uuid\":\"^9.0.0\",\"@types/vscode\":\"^1.71.0\",\"@types/webpack\":\"^5.28.1\",\"@types/webpack-dev-server\":\"^4.7.2\",\"@typescript-eslint/eslint-plugin\":\"^5.31.0\",\"@typescript-eslint/parser\":\"^5.31.0\",\"@vscode/test-electron\":\"^2.1.5\",\"@vscode/vsce\":\"^3.7.0\",\"copy-webpack-plugin\":\"^13.0.1\",\"css-loader\":\"^6.7.1\",\"dotenv\":\"^17.2.3\",\"dotenv-webpack\":\"^8.1.1\",\"eslint\":\"^8.20.0\",\"glob\":\"^8.0.3\",\"javascript-obfuscator\":\"^4.1.1\",\"mocha\":\"^10.0.0\",\"npm-run-all\":\"^4.1.5\",\"postcss-loader\":\"^7.0.1\",\"react\":\"^19.0.0\",\"react-dom\":\"^19.0.0\",\"rimraf\":\"^3.0.2\",\"style-loader\":\"^3.3.1\",\"terser-webpack-plugin\":\"^5.3.14\",\"ts-loader\":\"^9.4.1\",\"ts-node\":\"^10.9.2\",\"typescript\":\"^4.7.4\",\"webpack\":\"^5.97.1\",\"webpack-cli\":\"^5.1.4\",\"webpack-dev-server\":\"^5.2.0\",\"webpack-manifest-plugin\":\"^5.0.0\",\"webpack-obfuscator\":\"^3.5.1\"},\"pnpm\":{\"overrides\":{\"undici\":\"5.28.4\"}}}");
    }
  };
  var _0x5812a2 = {};
  function _0x407f8b(_0x7d4607) {
    {
      var _0xf2a3be = _0x5812a2[_0x7d4607];
      if (undefined !== _0xf2a3be) {
        return _0xf2a3be.exports;
      }
      _0x5812a2[_0x7d4607] = {
        id: _0x7d4607,
        loaded: false,
        exports: {}
      };
      var _0x2748f0 = _0x5812a2[_0x7d4607];
      _0x599c22[_0x7d4607].call(_0x2748f0.exports, _0x2748f0, _0x2748f0.exports, _0x407f8b);
      _0x2748f0.loaded = true;
      return _0x2748f0.exports;
    }
  }
  _0x407f8b.n = _0x1c0685 => {
    {
      var _0x385975 = _0x1c0685 && _0x1c0685.__esModule ? () => _0x1c0685.default : () => _0x1c0685;
      _0x407f8b.d(_0x385975, {
        a: _0x385975
      });
      return _0x385975;
    }
  };
  _0x407f8b.d = (_0x3c3625, _0x1982da) => {
    for (var _0x4a9c3d in _0x1982da) _0x407f8b.o(_0x1982da, _0x4a9c3d) && !_0x407f8b.o(_0x3c3625, _0x4a9c3d) && Object.defineProperty(_0x3c3625, _0x4a9c3d, {
      enumerable: true,
      get: _0x1982da[_0x4a9c3d]
    });
  };
  _0x407f8b.o = (_0x3afe44, _0x32a591) => ({}).hasOwnProperty.call(_0x3afe44, _0x32a591);
  _0x407f8b.r = _0x259a6c => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_0x259a6c, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(_0x259a6c, "__esModule", {
      value: true
    });
  };
  _0x407f8b.nmd = _0x57037a => (_0x57037a.paths = [], _0x57037a.children || (_0x57037a.children = []), _0x57037a);
  var _0x186415 = _0x407f8b(6439);
  module.exports = _0x186415;
})();