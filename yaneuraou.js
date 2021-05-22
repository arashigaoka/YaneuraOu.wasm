
var YaneuraOu = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(YaneuraOu) {
  YaneuraOu = YaneuraOu || {};


var b;
b || (b = typeof YaneuraOu !== 'undefined' ? YaneuraOu : {});
var aa, m;
b.ready = new Promise(function(a, d) {
  aa = a;
  m = d;
});
(function() {
  function a() {
    var g = f.shift();
    if (!d && void 0 !== g) {
      if ("quit" === g) {
        return b.terminate();
      }
      var k = b.ccall("usi_command", "number", ["string"], [g]);
      k && f.unshift(g);
      h = k ? 2 * h : 1;
      setTimeout(a, h);
    }
  }
  var d = !1, e = [];
  b.print = function(g) {
    0 === e.length ? console.log(g) : setTimeout(function() {
      for (var k = 0; k < e.length; k++) {
        e[k](g);
      }
    });
  };
  b.addMessageListener = function(g) {
    e.push(g);
  };
  b.removeMessageListener = function(g) {
    g = e.indexOf(g);
    0 <= g && e.splice(g, 1);
  };
  b.terminate = function() {
    d = !0;
  };
  var f = [], h = 1;
  b.postMessage = function(g) {
    f.push(g);
  };
  b.postRun = function() {
    b.postMessage = function(g) {
      f.push(g);
      1 === f.length && a();
    };
    a();
  };
})();
var u = {}, v;
for (v in b) {
  b.hasOwnProperty(v) && (u[v] = b[v]);
}
var w = [], x = "./this.program";
function y(a, d) {
  throw d;
}
var z = !1, B = !1, C = !1;
z = "object" === typeof window;
B = "function" === typeof importScripts;
C = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
var D = "", E, F, G, H;
if (C) {
  D = B ? require("path").dirname(D) + "/" : __dirname + "/", E = function(a, d) {
    G || (G = require("fs"));
    H || (H = require("path"));
    a = H.normalize(a);
    return G.readFileSync(a, d ? null : "utf8");
  }, F = function(a) {
    a = E(a, !0);
    a.buffer || (a = new Uint8Array(a));
    a.buffer || J("Assertion failed: undefined");
    return a;
  }, 1 < process.argv.length && (x = process.argv[1].replace(/\\/g, "/")), w = process.argv.slice(2), process.on("uncaughtException", function(a) {
    if (!(a instanceof ba)) {
      throw a;
    }
  }), process.on("unhandledRejection", J), y = function(a) {
    process.exit(a);
  }, b.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (z || B) {
    B ? D = self.location.href : "undefined" !== typeof document && document.currentScript && (D = document.currentScript.src), _scriptDir && (D = _scriptDir), 0 !== D.indexOf("blob:") ? D = D.substr(0, D.lastIndexOf("/") + 1) : D = "", E = function(a) {
      var d = new XMLHttpRequest;
      d.open("GET", a, !1);
      d.send(null);
      return d.responseText;
    }, B && (F = function(a) {
      var d = new XMLHttpRequest;
      d.open("GET", a, !1);
      d.responseType = "arraybuffer";
      d.send(null);
      return new Uint8Array(d.response);
    });
  }
}
var ca = b.print || console.log.bind(console), K = b.printErr || console.warn.bind(console);
for (v in u) {
  u.hasOwnProperty(v) && (b[v] = u[v]);
}
u = null;
b.arguments && (w = b.arguments);
b.thisProgram && (x = b.thisProgram);
b.quit && (y = b.quit);
var L;
b.wasmBinary && (L = b.wasmBinary);
var noExitRuntime = b.noExitRuntime || !0;
"object" !== typeof WebAssembly && J("no native wasm support detected");
var da, ea = !1;
function fa(a) {
  var d = b["_" + a];
  d || J("Assertion failed: Cannot call unknown function " + (a + ", make sure it is exported"));
  return d;
}
var ha = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function ia(a, d, e) {
  var f = d + e;
  for (e = d; a[e] && !(e >= f);) {
    ++e;
  }
  if (16 < e - d && a.subarray && ha) {
    return ha.decode(a.subarray(d, e));
  }
  for (f = ""; d < e;) {
    var h = a[d++];
    if (h & 128) {
      var g = a[d++] & 63;
      if (192 == (h & 224)) {
        f += String.fromCharCode((h & 31) << 6 | g);
      } else {
        var k = a[d++] & 63;
        h = 224 == (h & 240) ? (h & 15) << 12 | g << 6 | k : (h & 7) << 18 | g << 12 | k << 6 | a[d++] & 63;
        65536 > h ? f += String.fromCharCode(h) : (h -= 65536, f += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023));
      }
    } else {
      f += String.fromCharCode(h);
    }
  }
  return f;
}
function ja(a) {
  return a ? ia(M, a, void 0) : "";
}
function ka(a, d, e, f) {
  if (0 < f) {
    f = e + f - 1;
    for (var h = 0; h < a.length; ++h) {
      var g = a.charCodeAt(h);
      if (55296 <= g && 57343 >= g) {
        var k = a.charCodeAt(++h);
        g = 65536 + ((g & 1023) << 10) | k & 1023;
      }
      if (127 >= g) {
        if (e >= f) {
          break;
        }
        d[e++] = g;
      } else {
        if (2047 >= g) {
          if (e + 1 >= f) {
            break;
          }
          d[e++] = 192 | g >> 6;
        } else {
          if (65535 >= g) {
            if (e + 2 >= f) {
              break;
            }
            d[e++] = 224 | g >> 12;
          } else {
            if (e + 3 >= f) {
              break;
            }
            d[e++] = 240 | g >> 18;
            d[e++] = 128 | g >> 12 & 63;
          }
          d[e++] = 128 | g >> 6 & 63;
        }
        d[e++] = 128 | g & 63;
      }
    }
    d[e] = 0;
  }
}
function la(a) {
  for (var d = 0, e = 0; e < a.length; ++e) {
    var f = a.charCodeAt(e);
    55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | a.charCodeAt(++e) & 1023);
    127 >= f ? ++d : d = 2047 >= f ? d + 2 : 65535 >= f ? d + 3 : d + 4;
  }
  return d;
}
"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
function ma(a) {
  var d = la(a) + 1, e = N(d);
  ka(a, O, e, d);
  return e;
}
var na, O, M, P;
function oa() {
  var a = da.buffer;
  na = a;
  b.HEAP8 = O = new Int8Array(a);
  b.HEAP16 = new Int16Array(a);
  b.HEAP32 = P = new Int32Array(a);
  b.HEAPU8 = M = new Uint8Array(a);
  b.HEAPU16 = new Uint16Array(a);
  b.HEAPU32 = new Uint32Array(a);
  b.HEAPF32 = new Float32Array(a);
  b.HEAPF64 = new Float64Array(a);
}
var pa, qa = [], ra = [], sa = [], ta = [];
function ua() {
  var a = b.preRun.shift();
  qa.unshift(a);
}
var Q = 0, va = null, R = null;
b.preloadedImages = {};
b.preloadedAudios = {};
function J(a) {
  if (b.onAbort) {
    b.onAbort(a);
  }
  K(a);
  ea = !0;
  a = new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
  m(a);
  throw a;
}
function wa() {
  return S.startsWith("data:application/octet-stream;base64,");
}
var S = "yaneuraou.wasm";
if (!wa()) {
  var xa = S;
  S = b.locateFile ? b.locateFile(xa, D) : D + xa;
}
function ya() {
  var a = S;
  try {
    if (a == S && L) {
      return new Uint8Array(L);
    }
    if (F) {
      return F(a);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (d) {
    J(d);
  }
}
function za() {
  return L || !z && !B || "function" !== typeof fetch ? Promise.resolve().then(function() {
    return ya();
  }) : fetch(S, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + S + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return ya();
  });
}
function T(a) {
  for (; 0 < a.length;) {
    var d = a.shift();
    if ("function" == typeof d) {
      d(b);
    } else {
      var e = d.C;
      "number" === typeof e ? void 0 === d.o ? pa.get(e)() : pa.get(e)(d.o) : e(void 0 === d.o ? null : d.o);
    }
  }
}
var Aa = [null, [], []], Da = {}, U;
U = C ? function() {
  var a = process.hrtime();
  return 1e3 * a[0] + a[1] / 1e6;
} : function() {
  return performance.now();
};
var Ea = {};
function Fa() {
  if (!Ga) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:x || "./this.program"}, d;
    for (d in Ea) {
      a[d] = Ea[d];
    }
    var e = [];
    for (d in a) {
      e.push(d + "=" + a[d]);
    }
    Ga = e;
  }
  return Ga;
}
var Ga;
function V(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function Ha(a, d) {
  for (var e = 0, f = 0; f <= d; e += a[f++]) {
  }
  return e;
}
var W = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], X = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Y(a, d) {
  for (a = new Date(a.getTime()); 0 < d;) {
    var e = a.getMonth(), f = (V(a.getFullYear()) ? W : X)[e];
    if (d > f - a.getDate()) {
      d -= f - a.getDate() + 1, a.setDate(1), 11 > e ? a.setMonth(e + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    } else {
      a.setDate(a.getDate() + d);
      break;
    }
  }
  return a;
}
function Ia(a, d, e, f) {
  function h(c, l, q) {
    for (c = "number" === typeof c ? c.toString() : c || ""; c.length < l;) {
      c = q[0] + c;
    }
    return c;
  }
  function g(c, l) {
    return h(c, l, "0");
  }
  function k(c, l) {
    function q(Ba) {
      return 0 > Ba ? -1 : 0 < Ba ? 1 : 0;
    }
    var A;
    0 === (A = q(c.getFullYear() - l.getFullYear())) && 0 === (A = q(c.getMonth() - l.getMonth())) && (A = q(c.getDate() - l.getDate()));
    return A;
  }
  function t(c) {
    switch(c.getDay()) {
      case 0:
        return new Date(c.getFullYear() - 1, 11, 29);
      case 1:
        return c;
      case 2:
        return new Date(c.getFullYear(), 0, 3);
      case 3:
        return new Date(c.getFullYear(), 0, 2);
      case 4:
        return new Date(c.getFullYear(), 0, 1);
      case 5:
        return new Date(c.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(c.getFullYear() - 1, 11, 30);
    }
  }
  function r(c) {
    c = Y(new Date(c.g + 1900, 0, 1), c.m);
    var l = new Date(c.getFullYear() + 1, 0, 4), q = t(new Date(c.getFullYear(), 0, 4));
    l = t(l);
    return 0 >= k(q, c) ? 0 >= k(l, c) ? c.getFullYear() + 1 : c.getFullYear() : c.getFullYear() - 1;
  }
  var n = P[f + 40 >> 2];
  f = {v:P[f >> 2], u:P[f + 4 >> 2], j:P[f + 8 >> 2], i:P[f + 12 >> 2], h:P[f + 16 >> 2], g:P[f + 20 >> 2], l:P[f + 24 >> 2], m:P[f + 28 >> 2], F:P[f + 32 >> 2], s:P[f + 36 >> 2], A:n ? ja(n) : ""};
  e = ja(e);
  n = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y", };
  for (var p in n) {
    e = e.replace(new RegExp(p, "g"), n[p]);
  }
  var I = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), Ca = "January February March April May June July August September October November December".split(" ");
  n = {"%a":function(c) {
    return I[c.l].substring(0, 3);
  }, "%A":function(c) {
    return I[c.l];
  }, "%b":function(c) {
    return Ca[c.h].substring(0, 3);
  }, "%B":function(c) {
    return Ca[c.h];
  }, "%C":function(c) {
    return g((c.g + 1900) / 100 | 0, 2);
  }, "%d":function(c) {
    return g(c.i, 2);
  }, "%e":function(c) {
    return h(c.i, 2, " ");
  }, "%g":function(c) {
    return r(c).toString().substring(2);
  }, "%G":function(c) {
    return r(c);
  }, "%H":function(c) {
    return g(c.j, 2);
  }, "%I":function(c) {
    c = c.j;
    0 == c ? c = 12 : 12 < c && (c -= 12);
    return g(c, 2);
  }, "%j":function(c) {
    return g(c.i + Ha(V(c.g + 1900) ? W : X, c.h - 1), 3);
  }, "%m":function(c) {
    return g(c.h + 1, 2);
  }, "%M":function(c) {
    return g(c.u, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(c) {
    return 0 <= c.j && 12 > c.j ? "AM" : "PM";
  }, "%S":function(c) {
    return g(c.v, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(c) {
    return c.l || 7;
  }, "%U":function(c) {
    var l = new Date(c.g + 1900, 0, 1), q = 0 === l.getDay() ? l : Y(l, 7 - l.getDay());
    c = new Date(c.g + 1900, c.h, c.i);
    return 0 > k(q, c) ? g(Math.ceil((31 - q.getDate() + (Ha(V(c.getFullYear()) ? W : X, c.getMonth() - 1) - 31) + c.getDate()) / 7), 2) : 0 === k(q, l) ? "01" : "00";
  }, "%V":function(c) {
    var l = new Date(c.g + 1901, 0, 4), q = t(new Date(c.g + 1900, 0, 4));
    l = t(l);
    var A = Y(new Date(c.g + 1900, 0, 1), c.m);
    return 0 > k(A, q) ? "53" : 0 >= k(l, A) ? "01" : g(Math.ceil((q.getFullYear() < c.g + 1900 ? c.m + 32 - q.getDate() : c.m + 1 - q.getDate()) / 7), 2);
  }, "%w":function(c) {
    return c.l;
  }, "%W":function(c) {
    var l = new Date(c.g, 0, 1), q = 1 === l.getDay() ? l : Y(l, 0 === l.getDay() ? 1 : 7 - l.getDay() + 1);
    c = new Date(c.g + 1900, c.h, c.i);
    return 0 > k(q, c) ? g(Math.ceil((31 - q.getDate() + (Ha(V(c.getFullYear()) ? W : X, c.getMonth() - 1) - 31) + c.getDate()) / 7), 2) : 0 === k(q, l) ? "01" : "00";
  }, "%y":function(c) {
    return (c.g + 1900).toString().substring(2);
  }, "%Y":function(c) {
    return c.g + 1900;
  }, "%z":function(c) {
    c = c.s;
    var l = 0 <= c;
    c = Math.abs(c) / 60;
    return (l ? "+" : "-") + String("0000" + (c / 60 * 100 + c % 60)).slice(-4);
  }, "%Z":function(c) {
    return c.A;
  }, "%%":function() {
    return "%";
  }};
  for (p in n) {
    e.includes(p) && (e = e.replace(new RegExp(p, "g"), n[p](f)));
  }
  p = Ja(e);
  if (p.length > d) {
    return 0;
  }
  O.set(p, a);
  return p.length - 1;
}
function Ja(a) {
  var d = Array(la(a) + 1);
  ka(a, d, 0, d.length);
  return d;
}
var Ma = {__cxa_atexit:function() {
}, __sys_fcntl64:function() {
  return 0;
}, __sys_getcwd:function() {
}, __sys_ioctl:function() {
  return 0;
}, __sys_open:function() {
}, abort:function() {
  J();
}, clock_gettime:function(a, d) {
  if (0 === a) {
    a = Date.now();
  } else {
    if (1 === a || 4 === a) {
      a = U();
    } else {
      return P[Ka() >> 2] = 28, -1;
    }
  }
  P[d >> 2] = a / 1000 | 0;
  P[d + 4 >> 2] = a % 1000 * 1E6 | 0;
  return 0;
}, emscripten_memcpy_big:function(a, d, e) {
  M.copyWithin(a, d, d + e);
}, emscripten_resize_heap:function(a) {
  var d = M.length;
  a >>>= 0;
  if (2147483648 < a) {
    return !1;
  }
  for (var e = 1; 4 >= e; e *= 2) {
    var f = d * (1 + 0.2 / e);
    f = Math.min(f, a + 100663296);
    f = Math.max(a, f);
    0 < f % 65536 && (f += 65536 - f % 65536);
    a: {
      try {
        da.grow(Math.min(2147483648, f) - na.byteLength + 65535 >>> 16);
        oa();
        var h = 1;
        break a;
      } catch (g) {
      }
      h = void 0;
    }
    if (h) {
      return !0;
    }
  }
  return !1;
}, emscripten_thread_sleep:function(a) {
  for (var d = U(); U() - d < a;) {
  }
}, environ_get:function(a, d) {
  var e = 0;
  Fa().forEach(function(f, h) {
    var g = d + e;
    h = P[a + 4 * h >> 2] = g;
    for (g = 0; g < f.length; ++g) {
      O[h++ >> 0] = f.charCodeAt(g);
    }
    O[h >> 0] = 0;
    e += f.length + 1;
  });
  return 0;
}, environ_sizes_get:function(a, d) {
  var e = Fa();
  P[a >> 2] = e.length;
  var f = 0;
  e.forEach(function(h) {
    f += h.length + 1;
  });
  P[d >> 2] = f;
  return 0;
}, exit:function(a) {
  La(a);
}, fd_close:function() {
  return 0;
}, fd_read:function(a, d, e, f) {
  a = Da.D(a);
  d = Da.B(a, d, e);
  P[f >> 2] = d;
  return 0;
}, fd_seek:function() {
}, fd_write:function(a, d, e, f) {
  for (var h = 0, g = 0; g < e; g++) {
    for (var k = P[d + 8 * g >> 2], t = P[d + (8 * g + 4) >> 2], r = 0; r < t; r++) {
      var n = M[k + r], p = Aa[a];
      0 === n || 10 === n ? ((1 === a ? ca : K)(ia(p, 0)), p.length = 0) : p.push(n);
    }
    h += t;
  }
  P[f >> 2] = h;
  return 0;
}, pthread_create:function() {
  return 6;
}, pthread_join:function() {
  return 28;
}, setTempRet0:function() {
}, strftime_l:function(a, d, e, f) {
  return Ia(a, d, e, f);
}, time:function(a) {
  var d = Date.now() / 1000 | 0;
  a && (P[a >> 2] = d);
  return d;
}};
(function() {
  function a(h) {
    b.asm = h.exports;
    da = b.asm.memory;
    oa();
    pa = b.asm.__indirect_function_table;
    ra.unshift(b.asm.__wasm_call_ctors);
    Q--;
    b.monitorRunDependencies && b.monitorRunDependencies(Q);
    0 == Q && (null !== va && (clearInterval(va), va = null), R && (h = R, R = null, h()));
  }
  function d(h) {
    a(h.instance);
  }
  function e(h) {
    return za().then(function(g) {
      return WebAssembly.instantiate(g, f);
    }).then(h, function(g) {
      K("failed to asynchronously prepare wasm: " + g);
      J(g);
    });
  }
  var f = {env:Ma, wasi_snapshot_preview1:Ma, };
  Q++;
  b.monitorRunDependencies && b.monitorRunDependencies(Q);
  if (b.instantiateWasm) {
    try {
      return b.instantiateWasm(f, a);
    } catch (h) {
      return K("Module.instantiateWasm callback failed with error: " + h), !1;
    }
  }
  (function() {
    return L || "function" !== typeof WebAssembly.instantiateStreaming || wa() || "function" !== typeof fetch ? e(d) : fetch(S, {credentials:"same-origin"}).then(function(h) {
      return WebAssembly.instantiateStreaming(h, f).then(d, function(g) {
        K("wasm streaming compile failed: " + g);
        K("falling back to ArrayBuffer instantiation");
        return e(d);
      });
    });
  })().catch(m);
  return {};
})();
b.___wasm_call_ctors = function() {
  return (b.___wasm_call_ctors = b.asm.__wasm_call_ctors).apply(null, arguments);
};
b._main = function() {
  return (b._main = b.asm.main).apply(null, arguments);
};
b._malloc = function() {
  return (b._malloc = b.asm.malloc).apply(null, arguments);
};
b._free = function() {
  return (b._free = b.asm.free).apply(null, arguments);
};
b._usi_command = function() {
  return (b._usi_command = b.asm.usi_command).apply(null, arguments);
};
b._emscripten_main_thread_process_queued_calls = function() {
  return (b._emscripten_main_thread_process_queued_calls = b.asm.emscripten_main_thread_process_queued_calls).apply(null, arguments);
};
var Ka = b.___errno_location = function() {
  return (Ka = b.___errno_location = b.asm.__errno_location).apply(null, arguments);
};
b.__get_tzname = function() {
  return (b.__get_tzname = b.asm._get_tzname).apply(null, arguments);
};
b.__get_daylight = function() {
  return (b.__get_daylight = b.asm._get_daylight).apply(null, arguments);
};
b.__get_timezone = function() {
  return (b.__get_timezone = b.asm._get_timezone).apply(null, arguments);
};
var Na = b.stackSave = function() {
  return (Na = b.stackSave = b.asm.stackSave).apply(null, arguments);
}, Oa = b.stackRestore = function() {
  return (Oa = b.stackRestore = b.asm.stackRestore).apply(null, arguments);
}, N = b.stackAlloc = function() {
  return (N = b.stackAlloc = b.asm.stackAlloc).apply(null, arguments);
};
b.dynCall_viijii = function() {
  return (b.dynCall_viijii = b.asm.dynCall_viijii).apply(null, arguments);
};
b.dynCall_iijjji = function() {
  return (b.dynCall_iijjji = b.asm.dynCall_iijjji).apply(null, arguments);
};
b.dynCall_jiji = function() {
  return (b.dynCall_jiji = b.asm.dynCall_jiji).apply(null, arguments);
};
b.dynCall_iiiiij = function() {
  return (b.dynCall_iiiiij = b.asm.dynCall_iiiiij).apply(null, arguments);
};
b.dynCall_iiiiijj = function() {
  return (b.dynCall_iiiiijj = b.asm.dynCall_iiiiijj).apply(null, arguments);
};
b.dynCall_iiiiiijj = function() {
  return (b.dynCall_iiiiiijj = b.asm.dynCall_iiiiiijj).apply(null, arguments);
};
b.ccall = function(a, d, e, f) {
  var h = {string:function(n) {
    var p = 0;
    if (null !== n && void 0 !== n && 0 !== n) {
      var I = (n.length << 2) + 1;
      p = N(I);
      ka(n, M, p, I);
    }
    return p;
  }, array:function(n) {
    var p = N(n.length);
    O.set(n, p);
    return p;
  }}, g = fa(a), k = [];
  a = 0;
  if (f) {
    for (var t = 0; t < f.length; t++) {
      var r = h[e[t]];
      r ? (0 === a && (a = Na()), k[t] = r(f[t])) : k[t] = f[t];
    }
  }
  e = g.apply(null, k);
  e = function(n) {
    return "string" === d ? ja(n) : "boolean" === d ? !!n : n;
  }(e);
  0 !== a && Oa(a);
  return e;
};
var Z;
function ba(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
R = function Pa() {
  Z || Qa();
  Z || (R = Pa);
};
function Qa(a) {
  function d() {
    if (!Z && (Z = !0, b.calledRun = !0, !ea)) {
      T(ra);
      T(sa);
      aa(b);
      if (b.onRuntimeInitialized) {
        b.onRuntimeInitialized();
      }
      if (Ra) {
        var e = a, f = b._main;
        e = e || [];
        var h = e.length + 1, g = N(4 * (h + 1));
        P[g >> 2] = ma(x);
        for (var k = 1; k < h; k++) {
          P[(g >> 2) + k] = ma(e[k - 1]);
        }
        P[(g >> 2) + h] = 0;
        try {
          var t = f(h, g);
          La(t, !0);
        } catch (r) {
          r instanceof ba || "unwind" == r || ((e = r) && "object" === typeof r && r.stack && (e = [r, r.stack]), K("exception thrown: " + e), y(1, r));
        } finally {
        }
      }
      if (b.postRun) {
        for ("function" == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length;) {
          e = b.postRun.shift(), ta.unshift(e);
        }
      }
      T(ta);
    }
  }
  a = a || w;
  if (!(0 < Q)) {
    if (b.preRun) {
      for ("function" == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length;) {
        ua();
      }
    }
    T(qa);
    0 < Q || (b.setStatus ? (b.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        b.setStatus("");
      }, 1);
      d();
    }, 1)) : d());
  }
}
b.run = Qa;
function La(a, d) {
  if (!d || !noExitRuntime || 0 !== a) {
    if (!noExitRuntime) {
      if (b.onExit) {
        b.onExit(a);
      }
      ea = !0;
    }
    y(a, new ba(a));
  }
}
if (b.preInit) {
  for ("function" == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length;) {
    b.preInit.pop()();
  }
}
var Ra = !0;
b.noInitialRun && (Ra = !1);
Qa();



  return YaneuraOu.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = YaneuraOu;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return YaneuraOu; });
else if (typeof exports === 'object')
  exports["YaneuraOu"] = YaneuraOu;
