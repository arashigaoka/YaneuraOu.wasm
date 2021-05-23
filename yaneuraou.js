
var YaneuraOu = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(YaneuraOu) {
  YaneuraOu = YaneuraOu || {};


function e() {
  l.buffer != m && n(l.buffer);
  return aa;
}
function q() {
  l.buffer != m && n(l.buffer);
  return ba;
}
function r() {
  l.buffer != m && n(l.buffer);
  return ca;
}
function x() {
  l.buffer != m && n(l.buffer);
  return da;
}
function ea() {
  l.buffer != m && n(l.buffer);
  return fa;
}
"use strict";
var z;
z || (z = typeof YaneuraOu !== 'undefined' ? YaneuraOu : {});
var ha, ia;
z.ready = new Promise(function(a, b) {
  ha = a;
  ia = b;
});
(function() {
  function a() {
    var g = d.shift();
    if (!b && void 0 !== g) {
      if ("quit" === g) {
        return z.terminate();
      }
      var k = z.ccall("usi_command", "number", ["string"], [g]);
      k && d.unshift(g);
      f = k ? 2 * f : 1;
      setTimeout(a, f);
    }
  }
  var b = !1, c = [];
  z.print = function(g) {
    0 === c.length ? console.log(g) : setTimeout(function() {
      for (var k = 0; k < c.length; k++) {
        c[k](g);
      }
    });
  };
  z.addMessageListener = function(g) {
    c.push(g);
  };
  z.removeMessageListener = function(g) {
    g = c.indexOf(g);
    0 <= g && c.splice(g, 1);
  };
  z.terminate = function() {
    b = !0;
    A.va();
  };
  var d = [], f = 1;
  z.postMessage = function(g) {
    d.push(g);
  };
  z.postRun = function() {
    z.postMessage = function(g) {
      d.push(g);
      1 === d.length && a();
    };
    a();
  };
})();
var ja = {}, B;
for (B in z) {
  z.hasOwnProperty(B) && (ja[B] = z[B]);
}
var ka = [], la = "./this.program";
function ma(a, b) {
  throw b;
}
var na = !1, E = !1, G = !1;
na = "object" === typeof window;
E = "function" === typeof importScripts;
G = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
var H = z.ENVIRONMENT_IS_PTHREAD || !1, J = "";
function oa(a) {
  return z.locateFile ? z.locateFile(a, J) : J + a;
}
var pa, qa, K, L;
if (G) {
  J = E ? require("path").dirname(J) + "/" : __dirname + "/";
  pa = function(a, b) {
    K || (K = require("fs"));
    L || (L = require("path"));
    a = L.normalize(a);
    return K.readFileSync(a, b ? null : "utf8");
  };
  qa = function(a) {
    a = pa(a, !0);
    a.buffer || (a = new Uint8Array(a));
    assert(a.buffer);
    return a;
  };
  1 < process.argv.length && (la = process.argv[1].replace(/\\/g, "/"));
  ka = process.argv.slice(2);
  process.on("uncaughtException", function(a) {
    if (!(a instanceof ra)) {
      throw a;
    }
  });
  process.on("unhandledRejection", M);
  ma = function(a) {
    process.exit(a);
  };
  z.inspect = function() {
    return "[Emscripten Module object]";
  };
  var sa;
  try {
    sa = require("worker_threads");
  } catch (a) {
    throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'), a;
  }
  global.Worker = sa.Worker;
} else {
  if (na || E) {
    E ? J = self.location.href : "undefined" !== typeof document && document.currentScript && (J = document.currentScript.src), _scriptDir && (J = _scriptDir), 0 !== J.indexOf("blob:") ? J = J.substr(0, J.lastIndexOf("/") + 1) : J = "", G ? (pa = function(a, b) {
      K || (K = require("fs"));
      L || (L = require("path"));
      a = L.normalize(a);
      return K.readFileSync(a, b ? null : "utf8");
    }, qa = function(a) {
      a = pa(a, !0);
      a.buffer || (a = new Uint8Array(a));
      assert(a.buffer);
      return a;
    }) : (pa = function(a) {
      var b = new XMLHttpRequest;
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    }, E && (qa = function(a) {
      var b = new XMLHttpRequest;
      b.open("GET", a, !1);
      b.responseType = "arraybuffer";
      b.send(null);
      return new Uint8Array(b.response);
    }));
  }
}
G && "undefined" === typeof performance && (global.performance = require("perf_hooks").performance);
var ta = z.print || console.log.bind(console), N = z.printErr || console.warn.bind(console);
for (B in ja) {
  ja.hasOwnProperty(B) && (z[B] = ja[B]);
}
ja = null;
z.arguments && (ka = z.arguments);
z.thisProgram && (la = z.thisProgram);
z.quit && (ma = z.quit);
var ua, va;
z.wasmBinary && (va = z.wasmBinary);
var noExitRuntime = z.noExitRuntime || !0;
"object" !== typeof WebAssembly && M("no native wasm support detected");
var l, wa, xa = !1;
function assert(a, b) {
  a || M("Assertion failed: " + b);
}
function ya(a) {
  var b = z["_" + a];
  assert(b, "Cannot call unknown function " + a + ", make sure it is exported");
  return b;
}
function za(a, b, c) {
  c = b + c;
  for (var d = ""; !(b >= c);) {
    var f = a[b++];
    if (!f) {
      break;
    }
    if (f & 128) {
      var g = a[b++] & 63;
      if (192 == (f & 224)) {
        d += String.fromCharCode((f & 31) << 6 | g);
      } else {
        var k = a[b++] & 63;
        f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | k : (f & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
        65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
      }
    } else {
      d += String.fromCharCode(f);
    }
  }
  return d;
}
function O(a) {
  return a ? za(q(), a, void 0) : "";
}
function Aa(a, b, c, d) {
  if (!(0 < d)) {
    return 0;
  }
  var f = c;
  d = c + d - 1;
  for (var g = 0; g < a.length; ++g) {
    var k = a.charCodeAt(g);
    if (55296 <= k && 57343 >= k) {
      var t = a.charCodeAt(++g);
      k = 65536 + ((k & 1023) << 10) | t & 1023;
    }
    if (127 >= k) {
      if (c >= d) {
        break;
      }
      b[c++] = k;
    } else {
      if (2047 >= k) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | k >> 6;
      } else {
        if (65535 >= k) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | k >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          b[c++] = 240 | k >> 18;
          b[c++] = 128 | k >> 12 & 63;
        }
        b[c++] = 128 | k >> 6 & 63;
      }
      b[c++] = 128 | k & 63;
    }
  }
  b[c] = 0;
  return c - f;
}
function Ba(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
    127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
  }
  return b;
}
function Ca(a) {
  var b = Ba(a) + 1, c = P(b);
  Aa(a, e(), c, b);
  return c;
}
function Da(a, b) {
  e().set(a, b);
}
var m, aa, ba, Ea, ca, da, fa;
H && (m = z.buffer);
function n(a) {
  m = a;
  z.HEAP8 = aa = new Int8Array(a);
  z.HEAP16 = Ea = new Int16Array(a);
  z.HEAP32 = ca = new Int32Array(a);
  z.HEAPU8 = ba = new Uint8Array(a);
  z.HEAPU16 = new Uint16Array(a);
  z.HEAPU32 = da = new Uint32Array(a);
  z.HEAPF32 = new Float32Array(a);
  z.HEAPF64 = fa = new Float64Array(a);
}
var Fa = z.INITIAL_MEMORY || 71303168;
if (H) {
  l = z.wasmMemory, m = z.buffer;
} else {
  if (z.wasmMemory) {
    l = z.wasmMemory;
  } else {
    if (l = new WebAssembly.Memory({initial:Fa / 65536, maximum:32768, shared:!0}), !(l.buffer instanceof SharedArrayBuffer)) {
      throw N("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), G && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"), Error("bad memory");
    }
  }
}
l && (m = l.buffer);
Fa = m.byteLength;
n(m);
var Ga, Ha = [], Ia = [], Ja = [], Ka = [];
function La() {
  H || (z.noFSInit || Ma || (Ma = !0, Na(), z.stdin = z.stdin, z.stdout = z.stdout, z.stderr = z.stderr, z.stdin ? Oa("stdin", z.stdin) : Pa("/dev/tty", "/dev/stdin"), z.stdout ? Oa("stdout", null, z.stdout) : Pa("/dev/tty", "/dev/stdout"), z.stderr ? Oa("stderr", null, z.stderr) : Pa("/dev/tty1", "/dev/stderr"), Qa("/dev/stdin", 0), Qa("/dev/stdout", 1), Qa("/dev/stderr", 1)), Ra(Ia));
}
function Sa() {
  var a = z.preRun.shift();
  Ha.unshift(a);
}
var Q = 0, Ta = null, Ua = null;
z.preloadedImages = {};
z.preloadedAudios = {};
function M(a) {
  if (z.onAbort) {
    z.onAbort(a);
  }
  H && console.error("Pthread aborting at " + Error().stack);
  N(a);
  xa = !0;
  a = new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
  ia(a);
  throw a;
}
function Va() {
  return R.startsWith("data:application/octet-stream;base64,");
}
var R = "yaneuraou.wasm";
Va() || (R = oa(R));
function Wa() {
  var a = R;
  try {
    if (a == R && va) {
      return new Uint8Array(va);
    }
    if (qa) {
      return qa(a);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (b) {
    M(b);
  }
}
function Xa() {
  return va || !na && !E || "function" !== typeof fetch ? Promise.resolve().then(function() {
    return Wa();
  }) : fetch(R, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + R + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return Wa();
  });
}
var Ya, Za, ab = {25748:function() {
  throw "Canceled!";
}, 25766:function(a, b) {
  setTimeout(function() {
    $a(a, b);
  }, 0);
}};
function Ra(a) {
  for (; 0 < a.length;) {
    var b = a.shift();
    if ("function" == typeof b) {
      b(z);
    } else {
      var c = b.eb;
      "number" === typeof c ? void 0 === b.L ? Ga.get(c)() : Ga.get(c)(b.L) : c(void 0 === b.L ? null : b.L);
    }
  }
}
function bb(a, b) {
  if (0 >= a || a > e().length || a & 1 || 0 > b) {
    return -28;
  }
  if (0 == b) {
    return 0;
  }
  2147483647 <= b && (b = Infinity);
  var c = Atomics.load(r(), cb >> 2), d = 0;
  if (c == a && Atomics.compareExchange(r(), cb >> 2, c, 0) == c && (--b, d = 1, 0 >= b)) {
    return 1;
  }
  a = Atomics.notify(r(), a >> 2, b);
  if (0 <= a) {
    return a + d;
  }
  throw "Atomics.notify returned an unexpected value " + a;
}
z._emscripten_futex_wake = bb;
function db(a) {
  if (H) {
    throw "Internal Error! cleanupThread() can only ever be called from main application thread!";
  }
  if (!a) {
    throw "Internal Error! Null pthread_ptr in cleanupThread!";
  }
  var b = A.u[a];
  b && (r()[a + 12 >> 2] = 0, A.V(b.worker));
}
var A = {B:[], F:[], fa:[], Ca:function() {
  for (var a = 0; 1 > a; ++a) {
    A.ha();
  }
}, Da:function() {
  for (var a = S(228), b = 0; 57 > b; ++b) {
    x()[a / 4 + b] = 0;
  }
  r()[a + 12 >> 2] = a;
  b = a + 152;
  r()[b >> 2] = b;
  var c = S(512);
  for (b = 0; 128 > b; ++b) {
    x()[c / 4 + b] = 0;
  }
  Atomics.store(x(), a + 100 >> 2, c);
  Atomics.store(x(), a + 40 >> 2, a);
  eb(a, !E, 1);
  fb(a);
}, Ea:function() {
  A.receiveObjectTransfer = A.Ja;
  A.threadInit = A.Sa;
  A.threadCancel = A.Qa;
  A.threadExit = A.Ra;
  A.setExitStatus = A.Oa;
}, u:{}, ea:[], La:function() {
  for (; 0 < A.ea.length;) {
    A.ea.pop()();
  }
  H && T() && gb();
}, ua:function(a, b) {
  Atomics.store(x(), a + 56 >> 2, 1);
  Atomics.store(x(), a + 60 >> 2, 0);
  A.La();
  Atomics.store(x(), a + 4 >> 2, b);
  Atomics.store(x(), a + 0 >> 2, 1);
  bb(a + 0, 2147483647);
  eb(0, 0, 0);
}, Oa:function() {
}, Ra:function(a) {
  var b = T();
  b && (A.ua(b, a), H && postMessage({cmd:"exit"}));
}, Qa:function() {
  A.ua(T(), -1);
  postMessage({cmd:"cancelDone"});
}, va:function() {
  for (var a in A.u) {
    var b = A.u[a];
    b && b.worker && A.V(b.worker);
  }
  A.u = {};
  for (a = 0; a < A.B.length; ++a) {
    var c = A.B[a];
    c.terminate();
  }
  A.B = [];
  for (a = 0; a < A.F.length; ++a) {
    c = A.F[a], b = c.m, A.$(b), c.terminate();
  }
  A.F = [];
}, $:function(a) {
  if (a) {
    if (a.A) {
      var b = r()[a.A + 100 >> 2];
      r()[a.A + 100 >> 2] = 0;
      hb(b);
      hb(a.A);
    }
    a.A = 0;
    a.Z && a.H && hb(a.H);
    a.H = 0;
    a.worker && (a.worker.m = null);
  }
}, V:function(a) {
  A.Ma(function() {
    delete A.u[a.m.A];
    A.B.push(a);
    A.F.splice(A.F.indexOf(a), 1);
    A.$(a.m);
    a.m = void 0;
  });
}, Ma:function(a) {
  r()[ib >> 2] = 0;
  try {
    a();
  } finally {
    r()[ib >> 2] = 1;
  }
}, Ja:function() {
}, Sa:function() {
  for (var a in A.fa) {
    A.fa[a]();
  }
}, pa:function(a, b) {
  a.onmessage = function(c) {
    var d = c.data, f = d.cmd;
    a.m && (A.xa = a.m.A);
    if (d.targetThread && d.targetThread != T()) {
      var g = A.u[d.nb];
      g ? g.worker.postMessage(c.data, d.transferList) : console.error('Internal error! Worker sent a message "' + f + '" to target pthread ' + d.targetThread + ", but that thread no longer exists!");
    } else {
      if ("processQueuedMainThreadWork" === f) {
        jb();
      } else {
        if ("spawnThread" === f) {
          kb(c.data);
        } else {
          if ("cleanupThread" === f) {
            db(d.thread);
          } else {
            if ("killThread" === f) {
              c = d.thread;
              if (H) {
                throw "Internal Error! killThread() can only ever be called from main application thread!";
              }
              if (!c) {
                throw "Internal Error! Null pthread_ptr in killThread!";
              }
              r()[c + 12 >> 2] = 0;
              c = A.u[c];
              c.worker.terminate();
              A.$(c);
              A.F.splice(A.F.indexOf(c.worker), 1);
              c.worker.m = void 0;
            } else {
              if ("cancelThread" === f) {
                c = d.thread;
                if (H) {
                  throw "Internal Error! cancelThread() can only ever be called from main application thread!";
                }
                if (!c) {
                  throw "Internal Error! Null pthread_ptr in cancelThread!";
                }
                A.u[c].worker.postMessage({cmd:"cancel"});
              } else {
                if ("loaded" === f) {
                  a.loaded = !0, b && b(a), a.M && (a.M(), delete a.M);
                } else {
                  if ("print" === f) {
                    ta("Thread " + d.threadId + ": " + d.text);
                  } else {
                    if ("printErr" === f) {
                      N("Thread " + d.threadId + ": " + d.text);
                    } else {
                      if ("alert" === f) {
                        alert("Thread " + d.threadId + ": " + d.text);
                      } else {
                        if ("exit" === f) {
                          a.m && Atomics.load(x(), a.m.A + 64 >> 2) && A.V(a);
                        } else {
                          if ("exitProcess" === f) {
                            try {
                              lb(d.returnCode);
                            } catch (k) {
                              if (k instanceof ra) {
                                return;
                              }
                              throw k;
                            }
                          } else {
                            "cancelDone" === f ? A.V(a) : "objectTransfer" !== f && ("setimmediate" === c.data.target ? a.postMessage(c.data) : N("worker sent an unknown command " + f));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    A.xa = void 0;
  };
  a.onerror = function(c) {
    N("pthread sent an error! " + c.filename + ":" + c.lineno + ": " + c.message);
  };
  G && (a.on("message", function(c) {
    a.onmessage({data:c});
  }), a.on("error", function(c) {
    a.onerror(c);
  }), a.on("exit", function() {
  }));
  a.postMessage({cmd:"load", urlOrBlob:z.mainScriptUrlOrBlob || _scriptDir, wasmMemory:l, wasmModule:wa});
}, ha:function() {
  var a = oa("yaneuraou.worker.js");
  A.B.push(new Worker(a));
}, Aa:function() {
  0 == A.B.length && (A.ha(), A.pa(A.B[0]));
  return A.B.pop();
}, $a:function(a) {
  for (a = performance.now() + a; performance.now() < a;) {
  }
}};
z.establishStackSpace = function(a, b) {
  mb(a, b);
  nb(a);
};
z.invokeEntryPoint = function(a, b) {
  return Ga.get(a)(b);
};
var ob = 0;
function pb() {
  return noExitRuntime || 0 < ob;
}
z.keepRuntimeAlive = pb;
var qb;
qb = G ? function() {
  var a = process.hrtime();
  return 1e3 * a[0] + a[1] / 1e6;
} : H ? function() {
  return performance.now() - z.__performance_now_clock_drift;
} : function() {
  return performance.now();
};
function rb(a, b) {
  if (0 === a) {
    a = Date.now();
  } else {
    if (1 === a || 4 === a) {
      a = qb();
    } else {
      return r()[sb() >> 2] = 28, -1;
    }
  }
  r()[b >> 2] = a / 1e3 | 0;
  r()[b + 4 >> 2] = a % 1e3 * 1E6 | 0;
  return 0;
}
function tb(a, b) {
  if (H) {
    return U(1, 1, a, b);
  }
}
function ub(a, b) {
  A.ea.push(function() {
    Ga.get(a)(b);
  });
}
function vb(a, b) {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var f = a[d];
    "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}
function wb(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = vb(a.split("/").filter(function(d) {
    return !!d;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function xb(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function yb(a) {
  if ("/" === a) {
    return "/";
  }
  a = wb(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function zb() {
  if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
    var a = new Uint8Array(1);
    return function() {
      crypto.getRandomValues(a);
      return a[0];
    };
  }
  if (G) {
    try {
      var b = require("crypto");
      return function() {
        return b.randomBytes(1)[0];
      };
    } catch (c) {
    }
  }
  return function() {
    M("randomDevice");
  };
}
function Ab() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = vb(a.split("/").filter(function(d) {
    return !!d;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
var Bb = [];
function Cb(a, b) {
  Bb[a] = {input:[], output:[], I:b};
  Db(a, Eb);
}
var Eb = {open:function(a) {
  var b = Bb[a.node.rdev];
  if (!b) {
    throw new V(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close:function(a) {
  a.tty.I.flush(a.tty);
}, flush:function(a) {
  a.tty.I.flush(a.tty);
}, read:function(a, b, c, d) {
  if (!a.tty || !a.tty.I.oa) {
    throw new V(60);
  }
  for (var f = 0, g = 0; g < d; g++) {
    try {
      var k = a.tty.I.oa(a.tty);
    } catch (t) {
      throw new V(29);
    }
    if (void 0 === k && 0 === f) {
      throw new V(6);
    }
    if (null === k || void 0 === k) {
      break;
    }
    f++;
    b[c + g] = k;
  }
  f && (a.node.timestamp = Date.now());
  return f;
}, write:function(a, b, c, d) {
  if (!a.tty || !a.tty.I.ba) {
    throw new V(60);
  }
  try {
    for (var f = 0; f < d; f++) {
      a.tty.I.ba(a.tty, b[c + f]);
    }
  } catch (g) {
    throw new V(29);
  }
  d && (a.node.timestamp = Date.now());
  return f;
}}, Gb = {oa:function(a) {
  if (!a.input.length) {
    var b = null;
    if (G) {
      var c = Buffer.za ? Buffer.za(256) : new Buffer(256), d = 0;
      try {
        d = K.readSync(process.stdin.fd, c, 0, 256, null);
      } catch (f) {
        if (f.toString().includes("EOF")) {
          d = 0;
        } else {
          throw f;
        }
      }
      0 < d ? b = c.slice(0, d).toString("utf-8") : b = null;
    } else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    }
    if (!b) {
      return null;
    }
    a.input = Fb(b, !0);
  }
  return a.input.shift();
}, ba:function(a, b) {
  null === b || 10 === b ? (ta(za(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (ta(za(a.output, 0)), a.output = []);
}}, Hb = {ba:function(a, b) {
  null === b || 10 === b ? (N(za(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (N(za(a.output, 0)), a.output = []);
}}, W = {s:null, C:function() {
  return W.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new V(63);
  }
  W.s || (W.s = {dir:{node:{D:W.h.D, v:W.h.v, lookup:W.h.lookup, S:W.h.S, rename:W.h.rename, unlink:W.h.unlink, rmdir:W.h.rmdir, readdir:W.h.readdir, symlink:W.h.symlink}, stream:{G:W.i.G}}, file:{node:{D:W.h.D, v:W.h.v}, stream:{G:W.i.G, read:W.i.read, write:W.i.write, ga:W.i.ga, qa:W.i.qa, sa:W.i.sa}}, link:{node:{D:W.h.D, v:W.h.v, readlink:W.h.readlink}, stream:{}}, ia:{node:{D:W.h.D, v:W.h.v}, stream:Ib}});
  c = Jb(a, b, c, d);
  16384 === (c.mode & 61440) ? (c.h = W.s.dir.node, c.i = W.s.dir.stream, c.g = {}) : 32768 === (c.mode & 61440) ? (c.h = W.s.file.node, c.i = W.s.file.stream, c.j = 0, c.g = null) : 40960 === (c.mode & 61440) ? (c.h = W.s.link.node, c.i = W.s.link.stream) : 8192 === (c.mode & 61440) && (c.h = W.s.ia.node, c.i = W.s.ia.stream);
  c.timestamp = Date.now();
  a && (a.g[b] = c, a.timestamp = c.timestamp);
  return c;
}, fb:function(a) {
  return a.g ? a.g.subarray ? a.g.subarray(0, a.j) : new Uint8Array(a.g) : new Uint8Array(0);
}, ka:function(a, b) {
  var c = a.g ? a.g.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.g, a.g = new Uint8Array(b), 0 < a.j && a.g.set(c.subarray(0, a.j), 0));
}, Ka:function(a, b) {
  if (a.j != b) {
    if (0 == b) {
      a.g = null, a.j = 0;
    } else {
      var c = a.g;
      a.g = new Uint8Array(b);
      c && a.g.set(c.subarray(0, Math.min(b, a.j)));
      a.j = b;
    }
  }
}, h:{D:function(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.j : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.wa = 4096;
  b.blocks = Math.ceil(b.size / b.wa);
  return b;
}, v:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && W.Ka(a, b.size);
}, lookup:function() {
  throw Kb[44];
}, S:function(a, b, c, d) {
  return W.createNode(a, b, c, d);
}, rename:function(a, b, c) {
  if (16384 === (a.mode & 61440)) {
    try {
      var d = Lb(b, c);
    } catch (g) {
    }
    if (d) {
      for (var f in d.g) {
        throw new V(55);
      }
    }
  }
  delete a.parent.g[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.g[c] = a;
  b.timestamp = a.parent.timestamp;
  a.parent = b;
}, unlink:function(a, b) {
  delete a.g[b];
  a.timestamp = Date.now();
}, rmdir:function(a, b) {
  var c = Lb(a, b), d;
  for (d in c.g) {
    throw new V(55);
  }
  delete a.g[b];
  a.timestamp = Date.now();
}, readdir:function(a) {
  var b = [".", ".."], c;
  for (c in a.g) {
    a.g.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, symlink:function(a, b, c) {
  a = W.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new V(28);
  }
  return a.link;
}}, i:{read:function(a, b, c, d, f) {
  var g = a.node.g;
  if (f >= a.node.j) {
    return 0;
  }
  a = Math.min(a.node.j - f, d);
  if (8 < a && g.subarray) {
    b.set(g.subarray(f, f + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = g[f + d];
    }
  }
  return a;
}, write:function(a, b, c, d, f, g) {
  b.buffer === e().buffer && (g = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.g || a.g.subarray)) {
    if (g) {
      return a.g = b.subarray(c, c + d), a.j = d;
    }
    if (0 === a.j && 0 === f) {
      return a.g = b.slice(c, c + d), a.j = d;
    }
    if (f + d <= a.j) {
      return a.g.set(b.subarray(c, c + d), f), d;
    }
  }
  W.ka(a, f + d);
  if (a.g.subarray && b.subarray) {
    a.g.set(b.subarray(c, c + d), f);
  } else {
    for (g = 0; g < d; g++) {
      a.g[f + g] = b[c + g];
    }
  }
  a.j = Math.max(a.j, f + d);
  return d;
}, G:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.j);
  if (0 > b) {
    throw new V(28);
  }
  return b;
}, ga:function(a, b, c) {
  W.ka(a.node, b + c);
  a.node.j = Math.max(a.node.j, b + c);
}, qa:function(a, b, c, d, f, g) {
  if (0 !== b) {
    throw new V(28);
  }
  if (32768 !== (a.node.mode & 61440)) {
    throw new V(43);
  }
  a = a.node.g;
  if (g & 2 || a.buffer !== m) {
    if (0 < d || d + c < a.length) {
      a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
    }
    d = !0;
    g = 65536 * Math.ceil(c / 65536);
    for (b = S(g); c < g;) {
      e()[b + c++] = 0;
    }
    c = b;
    if (!c) {
      throw new V(48);
    }
    e().set(a, c);
  } else {
    d = !1, c = a.byteOffset;
  }
  return {lb:c, Za:d};
}, sa:function(a, b, c, d, f) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new V(43);
  }
  if (f & 2) {
    return 0;
  }
  W.i.write(a, b, 0, d, c, !1);
  return 0;
}}}, Mb = null, Nb = {}, Ob = [], Pb = 1, Qb = null, Rb = !0, Sb = {}, V = null, Kb = {};
function X(a, b) {
  a = Ab("/", a);
  b = b || {};
  if (!a) {
    return {path:"", node:null};
  }
  var c = {ma:!0, da:0}, d;
  for (d in c) {
    void 0 === b[d] && (b[d] = c[d]);
  }
  if (8 < b.da) {
    throw new V(32);
  }
  a = vb(a.split("/").filter(function(k) {
    return !!k;
  }), !1);
  var f = Mb;
  c = "/";
  for (d = 0; d < a.length; d++) {
    var g = d === a.length - 1;
    if (g && b.parent) {
      break;
    }
    f = Lb(f, a[d]);
    c = wb(c + "/" + a[d]);
    f.T && (!g || g && b.ma) && (f = f.T.root);
    if (!g || b.la) {
      for (g = 0; 40960 === (f.mode & 61440);) {
        if (f = Tb(c), c = Ab(xb(c), f), f = X(c, {da:b.da}).node, 40 < g++) {
          throw new V(32);
        }
      }
    }
  }
  return {path:c, node:f};
}
function Ub(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.C.ra, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function Vb(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % Qb.length;
}
function Lb(a, b) {
  var c;
  if (c = (c = Wb(a, "x")) ? c : a.h.lookup ? 0 : 2) {
    throw new V(c, a);
  }
  for (c = Qb[Vb(a.id, b)]; c; c = c.Ia) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.h.lookup(a, b);
}
function Jb(a, b, c, d) {
  a = new Xb(a, b, c, d);
  b = Vb(a.parent.id, a.name);
  a.Ia = Qb[b];
  return Qb[b] = a;
}
var Yb = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090};
function Zb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function Wb(a, b) {
  if (Rb) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function $b(a, b) {
  try {
    return Lb(a, b), 20;
  } catch (c) {
  }
  return Wb(a, "wx");
}
function ac(a) {
  var b = 4096;
  for (a = a || 0; a <= b; a++) {
    if (!Ob[a]) {
      return a;
    }
  }
  throw new V(33);
}
function bc(a, b) {
  cc || (cc = function() {
  }, cc.prototype = {});
  var c = new cc, d;
  for (d in a) {
    c[d] = a[d];
  }
  a = c;
  b = ac(b);
  a.fd = b;
  return Ob[b] = a;
}
var Ib = {open:function(a) {
  a.i = Nb[a.node.rdev].i;
  a.i.open && a.i.open(a);
}, G:function() {
  throw new V(70);
}};
function Db(a, b) {
  Nb[a] = {i:b};
}
function dc(a, b) {
  var c = "/" === b, d = !b;
  if (c && Mb) {
    throw new V(10);
  }
  if (!c && !d) {
    var f = X(b, {ma:!1});
    b = f.path;
    f = f.node;
    if (f.T) {
      throw new V(10);
    }
    if (16384 !== (f.mode & 61440)) {
      throw new V(54);
    }
  }
  b = {type:a, jb:{}, ra:b, Ha:[]};
  a = a.C(b);
  a.C = b;
  b.root = a;
  c ? Mb = a : f && (f.T = b, f.C && f.C.Ha.push(b));
}
function ec(a, b, c) {
  var d = X(a, {parent:!0}).node;
  a = yb(a);
  if (!a || "." === a || ".." === a) {
    throw new V(28);
  }
  var f = $b(d, a);
  if (f) {
    throw new V(f);
  }
  if (!d.h.S) {
    throw new V(63);
  }
  return d.h.S(d, a, b, c);
}
function Y(a) {
  return ec(a, 16895, 0);
}
function fc(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  ec(a, b | 8192, c);
}
function Pa(a, b) {
  if (!Ab(a)) {
    throw new V(44);
  }
  var c = X(b, {parent:!0}).node;
  if (!c) {
    throw new V(44);
  }
  b = yb(b);
  var d = $b(c, b);
  if (d) {
    throw new V(d);
  }
  if (!c.h.symlink) {
    throw new V(63);
  }
  c.h.symlink(c, b, a);
}
function Tb(a) {
  a = X(a).node;
  if (!a) {
    throw new V(44);
  }
  if (!a.h.readlink) {
    throw new V(28);
  }
  return Ab(Ub(a.parent), a.h.readlink(a));
}
function Qa(a, b, c, d) {
  if ("" === a) {
    throw new V(44);
  }
  if ("string" === typeof b) {
    var f = Yb[b];
    if ("undefined" === typeof f) {
      throw Error("Unknown file open mode: " + b);
    }
    b = f;
  }
  c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" === typeof a) {
    var g = a;
  } else {
    a = wb(a);
    try {
      g = X(a, {la:!(b & 131072)}).node;
    } catch (k) {
    }
  }
  f = !1;
  if (b & 64) {
    if (g) {
      if (b & 128) {
        throw new V(20);
      }
    } else {
      g = ec(a, c, 0), f = !0;
    }
  }
  if (!g) {
    throw new V(44);
  }
  8192 === (g.mode & 61440) && (b &= -513);
  if (b & 65536 && 16384 !== (g.mode & 61440)) {
    throw new V(54);
  }
  if (!f && (c = g ? 40960 === (g.mode & 61440) ? 32 : 16384 === (g.mode & 61440) && ("r" !== Zb(b) || b & 512) ? 31 : Wb(g, Zb(b)) : 44)) {
    throw new V(c);
  }
  if (b & 512) {
    c = g;
    c = "string" === typeof c ? X(c, {la:!0}).node : c;
    if (!c.h.v) {
      throw new V(63);
    }
    if (16384 === (c.mode & 61440)) {
      throw new V(31);
    }
    if (32768 !== (c.mode & 61440)) {
      throw new V(28);
    }
    if (f = Wb(c, "w")) {
      throw new V(f);
    }
    c.h.v(c, {size:0, timestamp:Date.now()});
  }
  b &= -131713;
  d = bc({node:g, path:Ub(g), flags:b, seekable:!0, position:0, i:g.i, Ya:[], error:!1}, d);
  d.i.open && d.i.open(d);
  !z.logReadFiles || b & 1 || (gc || (gc = {}), a in gc || (gc[a] = 1, N("FS.trackingDelegate error on read file: " + a)));
  try {
    Sb.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= 1), 0 !== (b & 2097155) && (g |= 2), Sb.onOpenFile(a, g));
  } catch (k) {
    N("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + k.message);
  }
  return d;
}
function hc(a, b, c) {
  if (null === a.fd) {
    throw new V(8);
  }
  if (!a.seekable || !a.i.G) {
    throw new V(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new V(28);
  }
  a.position = a.i.G(a, b, c);
  a.Ya = [];
}
function Na() {
  V || (V = function(a, b) {
    this.node = b;
    this.Na = function(c) {
      this.o = c;
    };
    this.Na(a);
    this.message = "FS error";
  }, V.prototype = Error(), V.prototype.constructor = V, [44].forEach(function(a) {
    Kb[a] = new V(a);
    Kb[a].stack = "<generic error, no stack>";
  }));
}
var Ma;
function ic(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function Oa(a, b, c) {
  a = wb("/dev/" + a);
  var d = ic(!!b, !!c);
  jc || (jc = 64);
  var f = jc++ << 8 | 0;
  Db(f, {open:function(g) {
    g.seekable = !1;
  }, close:function() {
    c && c.buffer && c.buffer.length && c(10);
  }, read:function(g, k, t, p) {
    for (var u = 0, y = 0; y < p; y++) {
      try {
        var C = b();
      } catch (D) {
        throw new V(29);
      }
      if (void 0 === C && 0 === u) {
        throw new V(6);
      }
      if (null === C || void 0 === C) {
        break;
      }
      u++;
      k[t + y] = C;
    }
    u && (g.node.timestamp = Date.now());
    return u;
  }, write:function(g, k, t, p) {
    for (var u = 0; u < p; u++) {
      try {
        c(k[t + u]);
      } catch (y) {
        throw new V(29);
      }
    }
    p && (g.node.timestamp = Date.now());
    return u;
  }});
  fc(a, d, f);
}
var jc, Z = {}, cc, gc, kc = void 0;
function lc() {
  kc += 4;
  return r()[kc - 4 >> 2];
}
function mc(a) {
  a = Ob[a];
  if (!a) {
    throw new V(8);
  }
  return a;
}
function nc(a, b, c) {
  if (H) {
    return U(2, 1, a, b, c);
  }
  kc = c;
  try {
    var d = mc(a);
    switch(b) {
      case 0:
        var f = lc();
        return 0 > f ? -28 : Qa(d.path, d.flags, 0, f).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return f = lc(), d.flags |= f, 0;
      case 12:
        return f = lc(), l.buffer != m && n(l.buffer), Ea[f + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        return r()[sb() >> 2] = 28, -1;
      default:
        return -28;
    }
  } catch (g) {
    return "undefined" !== typeof Z && g instanceof V || M(g), -g.o;
  }
}
function oc(a, b) {
  if (H) {
    return U(3, 1, a, b);
  }
  try {
    if (0 === b) {
      return -28;
    }
    if (b < Ba("/") + 1) {
      return -68;
    }
    Aa("/", q(), a, b);
    return a;
  } catch (c) {
    return "undefined" !== typeof Z && c instanceof V || M(c), -c.o;
  }
}
function pc(a, b, c) {
  if (H) {
    return U(4, 1, a, b, c);
  }
  kc = c;
  try {
    var d = mc(a);
    switch(b) {
      case 21509:
      case 21505:
        return d.tty ? 0 : -59;
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508:
        return d.tty ? 0 : -59;
      case 21519:
        if (!d.tty) {
          return -59;
        }
        var f = lc();
        return r()[f >> 2] = 0;
      case 21520:
        return d.tty ? -28 : -59;
      case 21531:
        a = f = lc();
        if (!d.i.Fa) {
          throw new V(59);
        }
        return d.i.Fa(d, b, a);
      case 21523:
        return d.tty ? 0 : -59;
      case 21524:
        return d.tty ? 0 : -59;
      default:
        M("bad ioctl syscall " + b);
    }
  } catch (g) {
    return "undefined" !== typeof Z && g instanceof V || M(g), -g.o;
  }
}
function qc(a, b, c) {
  if (H) {
    return U(5, 1, a, b, c);
  }
  kc = c;
  try {
    var d = O(a), f = c ? lc() : 0;
    return Qa(d, b, f).fd;
  } catch (g) {
    return "undefined" !== typeof Z && g instanceof V || M(g), -g.o;
  }
}
var rc = [];
function sc() {
  G || E || (ua || (ua = {}), ua["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] || (ua["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] = 1, N("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")));
}
function tc(a, b, c) {
  if (0 >= a || a > e().length || a & 1) {
    return -28;
  }
  if (na) {
    if (Atomics.load(r(), a >> 2) != b) {
      return -6;
    }
    var d = performance.now();
    c = d + c;
    for (Atomics.exchange(r(), cb >> 2, a);;) {
      d = performance.now();
      if (d > c) {
        return Atomics.exchange(r(), cb >> 2, 0), -73;
      }
      d = Atomics.exchange(r(), cb >> 2, 0);
      if (0 == d) {
        break;
      }
      jb();
      if (Atomics.load(r(), a >> 2) != b) {
        return -6;
      }
      Atomics.exchange(r(), cb >> 2, a);
    }
    return 0;
  }
  a = Atomics.wait(r(), a >> 2, b, c);
  if ("timed-out" === a) {
    return -73;
  }
  if ("not-equal" === a) {
    return -6;
  }
  if ("ok" === a) {
    return 0;
  }
  throw "Atomics.wait returned an unexpected value " + a;
}
function U(a, b) {
  for (var c = arguments.length - 2, d = uc(), f = P(8 * c), g = f >> 3, k = 0; k < c; k++) {
    var t = arguments[2 + k];
    ea()[g + k] = t;
  }
  c = vc(a, c, f, b);
  nb(d);
  return c;
}
var wc = [], xc = [0, "undefined" !== typeof document ? document : 0, "undefined" !== typeof window ? window : 0];
function yc(a) {
  a = 2 < a ? O(a) : a;
  return xc[a] || ("undefined" !== typeof document ? document.querySelector(a) : void 0);
}
function zc(a, b, c) {
  var d = yc(a);
  if (!d) {
    return -4;
  }
  d.R && (r()[d.R >> 2] = b, r()[d.R + 4 >> 2] = c);
  if (d.ta || !d.bb) {
    d.ta && (d = d.ta), a = !1, d.P && d.P.O && (a = d.P.O.getParameter(2978), a = 0 === a[0] && 0 === a[1] && a[2] === d.width && a[3] === d.height), d.width = b, d.height = c, a && d.P.O.viewport(0, 0, b, c);
  } else {
    if (d.R) {
      d = r()[d.R + 8 >> 2];
      a = a ? O(a) : "";
      var f = uc(), g = P(12), k = 0;
      if (a) {
        k = Ba(a) + 1;
        var t = S(k);
        Aa(a, q(), t, k);
        k = t;
      }
      r()[g >> 2] = k;
      r()[g + 4 >> 2] = b;
      r()[g + 8 >> 2] = c;
      Ac(0, d, 657457152, 0, k, g);
      nb(f);
      return 1;
    }
    return -4;
  }
  return 0;
}
function Bc(a, b, c) {
  return H ? U(6, 1, a, b, c) : zc(a, b, c);
}
function Cc(a) {
  var b = a.getExtension("ANGLE_instanced_arrays");
  b && (a.vertexAttribDivisor = function(c, d) {
    b.vertexAttribDivisorANGLE(c, d);
  }, a.drawArraysInstanced = function(c, d, f, g) {
    b.drawArraysInstancedANGLE(c, d, f, g);
  }, a.drawElementsInstanced = function(c, d, f, g, k) {
    b.drawElementsInstancedANGLE(c, d, f, g, k);
  });
}
function Dc(a) {
  var b = a.getExtension("OES_vertex_array_object");
  b && (a.createVertexArray = function() {
    return b.createVertexArrayOES();
  }, a.deleteVertexArray = function(c) {
    b.deleteVertexArrayOES(c);
  }, a.bindVertexArray = function(c) {
    b.bindVertexArrayOES(c);
  }, a.isVertexArray = function(c) {
    return b.isVertexArrayOES(c);
  });
}
function Ec(a) {
  var b = a.getExtension("WEBGL_draw_buffers");
  b && (a.drawBuffers = function(c, d) {
    b.drawBuffersWEBGL(c, d);
  });
}
function Fc(a, b) {
  a.na || (a.na = a.getContext, a.getContext = function(d, f) {
    f = a.na(d, f);
    return "webgl" == d == f instanceof WebGLRenderingContext ? f : null;
  });
  var c = a.getContext("webgl", b);
  return c ? Gc(c, b) : 0;
}
function Gc(a, b) {
  var c = S(8);
  r()[c + 4 >> 2] = T();
  var d = {gb:c, attributes:b, version:b.Ga, O:a};
  a.canvas && (a.canvas.P = d);
  ("undefined" === typeof b.ja || b.ja) && Hc(d);
  return c;
}
function Hc(a) {
  a || (a = Ic);
  if (!a.Ba) {
    a.Ba = !0;
    var b = a.O;
    Cc(b);
    Dc(b);
    Ec(b);
    b.cb = b.getExtension("EXT_disjoint_timer_query");
    b.ib = b.getExtension("WEBGL_multi_draw");
    (b.getSupportedExtensions() || []).forEach(function(c) {
      c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
    });
  }
}
var Ic, Jc = ["default", "low-power", "high-performance"], Kc = {};
function Lc() {
  if (!Mc) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:la || "./this.program"}, b;
    for (b in Kc) {
      a[b] = Kc[b];
    }
    var c = [];
    for (b in a) {
      c.push(b + "=" + a[b]);
    }
    Mc = c;
  }
  return Mc;
}
var Mc;
function Nc(a, b) {
  if (H) {
    return U(7, 1, a, b);
  }
  try {
    var c = 0;
    Lc().forEach(function(d, f) {
      var g = b + c;
      f = r()[a + 4 * f >> 2] = g;
      for (g = 0; g < d.length; ++g) {
        e()[f++ >> 0] = d.charCodeAt(g);
      }
      e()[f >> 0] = 0;
      c += d.length + 1;
    });
    return 0;
  } catch (d) {
    return "undefined" !== typeof Z && d instanceof V || M(d), d.o;
  }
}
function Oc(a, b) {
  if (H) {
    return U(8, 1, a, b);
  }
  try {
    var c = Lc();
    r()[a >> 2] = c.length;
    var d = 0;
    c.forEach(function(f) {
      d += f.length + 1;
    });
    r()[b >> 2] = d;
    return 0;
  } catch (f) {
    return "undefined" !== typeof Z && f instanceof V || M(f), f.o;
  }
}
function Pc(a) {
  if (H) {
    return U(9, 1, a);
  }
  try {
    var b = mc(a);
    if (null === b.fd) {
      throw new V(8);
    }
    b.aa && (b.aa = null);
    try {
      b.i.close && b.i.close(b);
    } catch (c) {
      throw c;
    } finally {
      Ob[b.fd] = null;
    }
    b.fd = null;
    return 0;
  } catch (c) {
    return "undefined" !== typeof Z && c instanceof V || M(c), c.o;
  }
}
function Qc(a, b, c, d) {
  if (H) {
    return U(10, 1, a, b, c, d);
  }
  try {
    a: {
      for (var f = mc(a), g = a = 0; g < c; g++) {
        var k = r()[b + 8 * g >> 2], t = r()[b + (8 * g + 4) >> 2], p = f, u = e(), y = k, C = t, D = void 0;
        if (0 > C || 0 > D) {
          throw new V(28);
        }
        if (null === p.fd) {
          throw new V(8);
        }
        if (1 === (p.flags & 2097155)) {
          throw new V(8);
        }
        if (16384 === (p.node.mode & 61440)) {
          throw new V(31);
        }
        if (!p.i.read) {
          throw new V(28);
        }
        var h = "undefined" !== typeof D;
        if (!h) {
          D = p.position;
        } else {
          if (!p.seekable) {
            throw new V(70);
          }
        }
        var v = p.i.read(p, u, y, C, D);
        h || (p.position += v);
        var w = v;
        if (0 > w) {
          var F = -1;
          break a;
        }
        a += w;
        if (w < t) {
          break;
        }
      }
      F = a;
    }
    r()[d >> 2] = F;
    return 0;
  } catch (I) {
    return "undefined" !== typeof Z && I instanceof V || M(I), I.o;
  }
}
function Rc(a, b, c, d, f) {
  if (H) {
    return U(11, 1, a, b, c, d, f);
  }
  try {
    var g = mc(a);
    a = 4294967296 * c + (b >>> 0);
    if (-9007199254740992 >= a || 9007199254740992 <= a) {
      return -61;
    }
    hc(g, a, d);
    Za = [g.position >>> 0, (Ya = g.position, 1 <= +Math.abs(Ya) ? 0 < Ya ? (Math.min(+Math.floor(Ya / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((Ya - +(~~Ya >>> 0)) / 4294967296) >>> 0 : 0)];
    r()[f >> 2] = Za[0];
    r()[f + 4 >> 2] = Za[1];
    g.aa && 0 === a && 0 === d && (g.aa = null);
    return 0;
  } catch (k) {
    return "undefined" !== typeof Z && k instanceof V || M(k), k.o;
  }
}
function Sc(a, b, c, d) {
  if (H) {
    return U(12, 1, a, b, c, d);
  }
  try {
    a: {
      for (var f = mc(a), g = a = 0; g < c; g++) {
        var k = r()[b + 8 * g >> 2], t = r()[b + (8 * g + 4) >> 2], p = f, u = e(), y = k, C = t, D = void 0;
        if (0 > C || 0 > D) {
          throw new V(28);
        }
        if (null === p.fd) {
          throw new V(8);
        }
        if (0 === (p.flags & 2097155)) {
          throw new V(8);
        }
        if (16384 === (p.node.mode & 61440)) {
          throw new V(31);
        }
        if (!p.i.write) {
          throw new V(28);
        }
        p.seekable && p.flags & 1024 && hc(p, 0, 2);
        var h = "undefined" !== typeof D;
        if (!h) {
          D = p.position;
        } else {
          if (!p.seekable) {
            throw new V(70);
          }
        }
        var v = p.i.write(p, u, y, C, D, void 0);
        h || (p.position += v);
        try {
          if (p.path && Sb.onWriteToFile) {
            Sb.onWriteToFile(p.path);
          }
        } catch (I) {
          N("FS.trackingDelegate['onWriteToFile']('" + p.path + "') threw an exception: " + I.message);
        }
        var w = v;
        if (0 > w) {
          var F = -1;
          break a;
        }
        a += w;
      }
      F = a;
    }
    r()[d >> 2] = F;
    return 0;
  } catch (I) {
    return "undefined" !== typeof Z && I instanceof V || M(I), I.o;
  }
}
function kb(a) {
  if (H) {
    throw "Internal Error! spawnThread() can only ever be called from main application thread!";
  }
  var b = A.Aa();
  if (!b) {
    return 6;
  }
  if (void 0 !== b.m) {
    throw "Internal error!";
  }
  if (!a.U) {
    throw "Internal error, no pthread ptr!";
  }
  A.F.push(b);
  for (var c = S(512), d = 0; 128 > d; ++d) {
    r()[c + 4 * d >> 2] = 0;
  }
  var f = a.H + a.J;
  d = A.u[a.U] = {worker:b, H:a.H, J:a.J, Z:a.Z, A:a.U};
  var g = d.A >> 2;
  Atomics.store(x(), g + 16, a.detached);
  Atomics.store(x(), g + 25, c);
  Atomics.store(x(), g + 10, d.A);
  Atomics.store(x(), g + 20, a.J);
  Atomics.store(x(), g + 19, f);
  Atomics.store(x(), g + 26, a.J);
  Atomics.store(x(), g + 28, f);
  Atomics.store(x(), g + 29, a.detached);
  c = Tc() + 40;
  Atomics.store(x(), g + 43, c);
  b.m = d;
  var k = {cmd:"run", start_routine:a.Pa, arg:a.L, threadInfoStruct:a.U, stackBase:a.H, stackSize:a.J};
  b.M = function() {
    k.time = performance.now();
    b.postMessage(k, a.Xa);
  };
  b.loaded && (b.M(), delete b.M);
  return 0;
}
function Uc(a, b) {
  if (!a) {
    return N("pthread_join attempted on a null thread pointer!"), 71;
  }
  if (H && T() == a) {
    return N("PThread " + a + " is attempting to join to itself!"), 16;
  }
  if (!H && Vc() == a) {
    return N("Main thread " + a + " is attempting to join to itself!"), 16;
  }
  if (r()[a + 12 >> 2] !== a) {
    return N("pthread_join attempted on thread " + a + ", which does not point to a valid thread, or does not exist anymore!"), 71;
  }
  if (Atomics.load(x(), a + 64 >> 2)) {
    return N("Attempted to join thread " + a + ", which was already detached!"), 28;
  }
  for (sc();;) {
    var c = Atomics.load(x(), a + 0 >> 2);
    if (1 == c) {
      return c = Atomics.load(x(), a + 4 >> 2), b && (r()[b >> 2] = c), Atomics.store(x(), a + 64 >> 2, 1), H ? postMessage({cmd:"cleanupThread", thread:a}) : db(a), 0;
    }
    if (H) {
      var d = T();
      if (d && !Atomics.load(x(), d + 56 >> 2) && 2 == Atomics.load(x(), d + 0 >> 2)) {
        throw "Canceled!";
      }
    }
    H || jb();
    tc(a + 0, c, H ? 100 : 1);
  }
}
function Wc(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function Xc(a, b) {
  for (var c = 0, d = 0; d <= b; c += a[d++]) {
  }
  return c;
}
var Yc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Zc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function $c(a, b) {
  for (a = new Date(a.getTime()); 0 < b;) {
    var c = a.getMonth(), d = (Wc(a.getFullYear()) ? Yc : Zc)[c];
    if (b > d - a.getDate()) {
      b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    } else {
      a.setDate(a.getDate() + b);
      break;
    }
  }
  return a;
}
function ad(a, b, c, d) {
  function f(h, v, w) {
    for (h = "number" === typeof h ? h.toString() : h || ""; h.length < v;) {
      h = w[0] + h;
    }
    return h;
  }
  function g(h, v) {
    return f(h, v, "0");
  }
  function k(h, v) {
    function w(I) {
      return 0 > I ? -1 : 0 < I ? 1 : 0;
    }
    var F;
    0 === (F = w(h.getFullYear() - v.getFullYear())) && 0 === (F = w(h.getMonth() - v.getMonth())) && (F = w(h.getDate() - v.getDate()));
    return F;
  }
  function t(h) {
    switch(h.getDay()) {
      case 0:
        return new Date(h.getFullYear() - 1, 11, 29);
      case 1:
        return h;
      case 2:
        return new Date(h.getFullYear(), 0, 3);
      case 3:
        return new Date(h.getFullYear(), 0, 2);
      case 4:
        return new Date(h.getFullYear(), 0, 1);
      case 5:
        return new Date(h.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(h.getFullYear() - 1, 11, 30);
    }
  }
  function p(h) {
    h = $c(new Date(h.l + 1900, 0, 1), h.Y);
    var v = new Date(h.getFullYear() + 1, 0, 4), w = t(new Date(h.getFullYear(), 0, 4));
    v = t(v);
    return 0 >= k(w, h) ? 0 >= k(v, h) ? h.getFullYear() + 1 : h.getFullYear() : h.getFullYear() - 1;
  }
  var u = r()[d + 40 >> 2];
  d = {Va:r()[d >> 2], Ua:r()[d + 4 >> 2], W:r()[d + 8 >> 2], N:r()[d + 12 >> 2], K:r()[d + 16 >> 2], l:r()[d + 20 >> 2], X:r()[d + 24 >> 2], Y:r()[d + 28 >> 2], ob:r()[d + 32 >> 2], Ta:r()[d + 36 >> 2], Wa:u ? O(u) : ""};
  c = O(c);
  u = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
  for (var y in u) {
    c = c.replace(new RegExp(y, "g"), u[y]);
  }
  var C = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), D = "January February March April May June July August September October November December".split(" ");
  u = {"%a":function(h) {
    return C[h.X].substring(0, 3);
  }, "%A":function(h) {
    return C[h.X];
  }, "%b":function(h) {
    return D[h.K].substring(0, 3);
  }, "%B":function(h) {
    return D[h.K];
  }, "%C":function(h) {
    return g((h.l + 1900) / 100 | 0, 2);
  }, "%d":function(h) {
    return g(h.N, 2);
  }, "%e":function(h) {
    return f(h.N, 2, " ");
  }, "%g":function(h) {
    return p(h).toString().substring(2);
  }, "%G":function(h) {
    return p(h);
  }, "%H":function(h) {
    return g(h.W, 2);
  }, "%I":function(h) {
    h = h.W;
    0 == h ? h = 12 : 12 < h && (h -= 12);
    return g(h, 2);
  }, "%j":function(h) {
    return g(h.N + Xc(Wc(h.l + 1900) ? Yc : Zc, h.K - 1), 3);
  }, "%m":function(h) {
    return g(h.K + 1, 2);
  }, "%M":function(h) {
    return g(h.Ua, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(h) {
    return 0 <= h.W && 12 > h.W ? "AM" : "PM";
  }, "%S":function(h) {
    return g(h.Va, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(h) {
    return h.X || 7;
  }, "%U":function(h) {
    var v = new Date(h.l + 1900, 0, 1), w = 0 === v.getDay() ? v : $c(v, 7 - v.getDay());
    h = new Date(h.l + 1900, h.K, h.N);
    return 0 > k(w, h) ? g(Math.ceil((31 - w.getDate() + (Xc(Wc(h.getFullYear()) ? Yc : Zc, h.getMonth() - 1) - 31) + h.getDate()) / 7), 2) : 0 === k(w, v) ? "01" : "00";
  }, "%V":function(h) {
    var v = new Date(h.l + 1901, 0, 4), w = t(new Date(h.l + 1900, 0, 4));
    v = t(v);
    var F = $c(new Date(h.l + 1900, 0, 1), h.Y);
    return 0 > k(F, w) ? "53" : 0 >= k(v, F) ? "01" : g(Math.ceil((w.getFullYear() < h.l + 1900 ? h.Y + 32 - w.getDate() : h.Y + 1 - w.getDate()) / 7), 2);
  }, "%w":function(h) {
    return h.X;
  }, "%W":function(h) {
    var v = new Date(h.l, 0, 1), w = 1 === v.getDay() ? v : $c(v, 0 === v.getDay() ? 1 : 7 - v.getDay() + 1);
    h = new Date(h.l + 1900, h.K, h.N);
    return 0 > k(w, h) ? g(Math.ceil((31 - w.getDate() + (Xc(Wc(h.getFullYear()) ? Yc : Zc, h.getMonth() - 1) - 31) + h.getDate()) / 7), 2) : 0 === k(w, v) ? "01" : "00";
  }, "%y":function(h) {
    return (h.l + 1900).toString().substring(2);
  }, "%Y":function(h) {
    return h.l + 1900;
  }, "%z":function(h) {
    h = h.Ta;
    var v = 0 <= h;
    h = Math.abs(h) / 60;
    return (v ? "+" : "-") + String("0000" + (h / 60 * 100 + h % 60)).slice(-4);
  }, "%Z":function(h) {
    return h.Wa;
  }, "%%":function() {
    return "%";
  }};
  for (y in u) {
    c.includes(y) && (c = c.replace(new RegExp(y, "g"), u[y](d)));
  }
  y = Fb(c, !1);
  if (y.length > b) {
    return 0;
  }
  Da(y, a);
  return y.length - 1;
}
H || A.Ca();
function Xb(a, b, c, d) {
  a || (a = this);
  this.parent = a;
  this.C = a.C;
  this.T = null;
  this.id = Pb++;
  this.name = b;
  this.mode = c;
  this.h = {};
  this.i = {};
  this.rdev = d;
}
Object.defineProperties(Xb.prototype, {read:{get:function() {
  return 365 === (this.mode & 365);
}, set:function(a) {
  a ? this.mode |= 365 : this.mode &= -366;
}}, write:{get:function() {
  return 146 === (this.mode & 146);
}, set:function(a) {
  a ? this.mode |= 146 : this.mode &= -147;
}}});
Na();
Qb = Array(4096);
dc(W, "/");
Y("/tmp");
Y("/home");
Y("/home/web_user");
(function() {
  Y("/dev");
  Db(259, {read:function() {
    return 0;
  }, write:function(b, c, d, f) {
    return f;
  }});
  fc("/dev/null", 259);
  Cb(1280, Gb);
  Cb(1536, Hb);
  fc("/dev/tty", 1280);
  fc("/dev/tty1", 1536);
  var a = zb();
  Oa("random", a);
  Oa("urandom", a);
  Y("/dev/shm");
  Y("/dev/shm/tmp");
})();
(function() {
  Y("/proc");
  var a = Y("/proc/self");
  Y("/proc/self/fd");
  dc({C:function() {
    var b = Jb(a, "fd", 16895, 73);
    b.h = {lookup:function(c, d) {
      var f = Ob[+d];
      if (!f) {
        throw new V(8);
      }
      c = {parent:null, C:{ra:"fake"}, h:{readlink:function() {
        return f.path;
      }}};
      return c.parent = c;
    }};
    return b;
  }}, "/proc/self/fd");
})();
var bd = [null, tb, nc, oc, pc, qc, Bc, Nc, Oc, Pc, Qc, Rc, Sc];
function Fb(a, b) {
  var c = Array(Ba(a) + 1);
  a = Aa(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
var ed = {__assert_fail:function(a, b, c, d) {
  M("Assertion failed: " + O(a) + ", at: " + [b ? O(b) : "unknown filename", c, d ? O(d) : "unknown function"]);
}, __clock_gettime:function(a, b) {
  return rb(a, b);
}, __cxa_atexit:function(a, b) {
  return tb(a, b);
}, __cxa_thread_atexit:function(a, b) {
  return ub(a, b);
}, __sys_fcntl64:nc, __sys_getcwd:oc, __sys_ioctl:pc, __sys_open:qc, _emscripten_notify_thread_queue:function(a, b) {
  if (a == b) {
    postMessage({cmd:"processQueuedMainThreadWork"});
  } else {
    if (H) {
      postMessage({targetThread:a, cmd:"processThreadQueue"});
    } else {
      a = (a = A.u[a]) && a.worker;
      if (!a) {
        return;
      }
      a.postMessage({cmd:"processThreadQueue"});
    }
  }
  return 1;
}, abort:function() {
  M();
}, clock_gettime:rb, emscripten_asm_const_int:function(a, b, c) {
  rc.length = 0;
  var d;
  for (c >>= 2; d = q()[b++];) {
    (d = 105 > d) && c & 1 && c++, rc.push(d ? ea()[c++ >> 1] : r()[c]), ++c;
  }
  return ab[a].apply(null, rc);
}, emscripten_check_blocking_allowed:sc, emscripten_conditional_set_current_thread_status:function() {
}, emscripten_futex_wait:tc, emscripten_futex_wake:bb, emscripten_get_now:qb, emscripten_memcpy_big:function(a, b, c) {
  q().copyWithin(a, b, b + c);
}, emscripten_receive_on_main_thread_js:function(a, b, c) {
  wc.length = b;
  c >>= 3;
  for (var d = 0; d < b; d++) {
    wc[d] = ea()[c + d];
  }
  return (0 > a ? ab[-a - 1] : bd[a]).apply(null, wc);
}, emscripten_resize_heap:function(a) {
  var b = q().length;
  a >>>= 0;
  if (a <= b || 2147483648 < a) {
    return !1;
  }
  for (var c = 1; 4 >= c; c *= 2) {
    var d = b * (1 + .2 / c);
    d = Math.min(d, a + 100663296);
    d = Math.max(a, d);
    0 < d % 65536 && (d += 65536 - d % 65536);
    a: {
      try {
        l.grow(Math.min(2147483648, d) - m.byteLength + 65535 >>> 16);
        n(l.buffer);
        var f = 1;
        break a;
      } catch (g) {
      }
      f = void 0;
    }
    if (f) {
      return !0;
    }
  }
  return !1;
}, emscripten_set_canvas_element_size:function(a, b, c) {
  return yc(a) ? zc(a, b, c) : Bc(a, b, c);
}, emscripten_set_current_thread_status:function() {
}, emscripten_webgl_create_context:function(a, b) {
  b >>= 2;
  var c = r()[b + 6];
  b = {alpha:!!r()[b], depth:!!r()[b + 1], stencil:!!r()[b + 2], antialias:!!r()[b + 3], premultipliedAlpha:!!r()[b + 4], preserveDrawingBuffer:!!r()[b + 5], powerPreference:Jc[c], failIfMajorPerformanceCaveat:!!r()[b + 7], Ga:r()[b + 8], hb:r()[b + 9], ja:r()[b + 10], ya:r()[b + 11], kb:r()[b + 12], mb:r()[b + 13]};
  a = yc(a);
  return !a || b.ya ? 0 : Fc(a, b);
}, environ_get:Nc, environ_sizes_get:Oc, exit:function(a) {
  lb(a);
}, fd_close:Pc, fd_read:Qc, fd_seek:Rc, fd_write:Sc, initPthreadsJS:function() {
  A.Da();
}, memory:l || z.wasmMemory, pthread_create:function(a, b, c, d) {
  if ("undefined" === typeof SharedArrayBuffer) {
    return N("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
  }
  if (!a) {
    return N("pthread_create called with a null thread pointer!"), 28;
  }
  var f = [];
  if (H && 0 === f.length) {
    return cd(687865856, a, b, c, d);
  }
  var g = 0, k = 0;
  if (b && -1 != b) {
    var t = r()[b >> 2];
    t += 81920;
    g = r()[b + 8 >> 2];
    k = 0 !== r()[b + 12 >> 2];
  } else {
    t = 2097152;
  }
  (b = 0 == g) ? g = dd(16, t) : (g -= t, assert(0 < g));
  for (var p = S(228), u = 0; 57 > u; ++u) {
    x()[(p >> 2) + u] = 0;
  }
  r()[a >> 2] = p;
  r()[p + 12 >> 2] = p;
  a = p + 152;
  r()[a >> 2] = a;
  c = {H:g, J:t, Z:b, detached:k, Pa:c, U:p, L:d, Xa:f};
  return H ? (c.ab = "spawnThread", postMessage(c, f), 0) : kb(c);
}, pthread_join:function(a, b) {
  return Uc(a, b);
}, setTempRet0:function() {
}, strftime_l:function(a, b, c, d) {
  return ad(a, b, c, d);
}, time:function(a) {
  var b = Date.now() / 1e3 | 0;
  a && (r()[a >> 2] = b);
  return b;
}};
(function() {
  function a(f, g) {
    z.asm = f.exports;
    Ga = z.asm.__indirect_function_table;
    Ia.unshift(z.asm.__wasm_call_ctors);
    A.fa.push(z.asm.emscripten_tls_init);
    wa = g;
    if (!H) {
      var k = A.B.length;
      A.B.forEach(function(t) {
        A.pa(t, function() {
          if (!--k && (Q--, z.monitorRunDependencies && z.monitorRunDependencies(Q), 0 == Q && (null !== Ta && (clearInterval(Ta), Ta = null), Ua))) {
            var p = Ua;
            Ua = null;
            p();
          }
        });
      });
    }
  }
  function b(f) {
    a(f.instance, f.module);
  }
  function c(f) {
    return Xa().then(function(g) {
      return WebAssembly.instantiate(g, d);
    }).then(f, function(g) {
      N("failed to asynchronously prepare wasm: " + g);
      M(g);
    });
  }
  var d = {env:ed, wasi_snapshot_preview1:ed};
  H || (assert(!H, "addRunDependency cannot be used in a pthread worker"), Q++, z.monitorRunDependencies && z.monitorRunDependencies(Q));
  if (z.instantiateWasm) {
    try {
      return z.instantiateWasm(d, a);
    } catch (f) {
      return N("Module.instantiateWasm callback failed with error: " + f), !1;
    }
  }
  (function() {
    return va || "function" !== typeof WebAssembly.instantiateStreaming || Va() || "function" !== typeof fetch ? c(b) : fetch(R, {credentials:"same-origin"}).then(function(f) {
      return WebAssembly.instantiateStreaming(f, d).then(b, function(g) {
        N("wasm streaming compile failed: " + g);
        N("falling back to ArrayBuffer instantiation");
        return c(b);
      });
    });
  })().catch(ia);
  return {};
})();
z.___wasm_call_ctors = function() {
  return (z.___wasm_call_ctors = z.asm.__wasm_call_ctors).apply(null, arguments);
};
z._main = function() {
  return (z._main = z.asm.main).apply(null, arguments);
};
var S = z._malloc = function() {
  return (S = z._malloc = z.asm.malloc).apply(null, arguments);
}, hb = z._free = function() {
  return (hb = z._free = z.asm.free).apply(null, arguments);
};
z._usi_command = function() {
  return (z._usi_command = z.asm.usi_command).apply(null, arguments);
};
z._emscripten_tls_init = function() {
  return (z._emscripten_tls_init = z.asm.emscripten_tls_init).apply(null, arguments);
};
z._emscripten_current_thread_process_queued_calls = function() {
  return (z._emscripten_current_thread_process_queued_calls = z.asm.emscripten_current_thread_process_queued_calls).apply(null, arguments);
};
var fb = z._emscripten_register_main_browser_thread_id = function() {
  return (fb = z._emscripten_register_main_browser_thread_id = z.asm.emscripten_register_main_browser_thread_id).apply(null, arguments);
}, Vc = z._emscripten_main_browser_thread_id = function() {
  return (Vc = z._emscripten_main_browser_thread_id = z.asm.emscripten_main_browser_thread_id).apply(null, arguments);
}, $a = z.__emscripten_do_dispatch_to_thread = function() {
  return ($a = z.__emscripten_do_dispatch_to_thread = z.asm._emscripten_do_dispatch_to_thread).apply(null, arguments);
};
z._emscripten_sync_run_in_main_thread_2 = function() {
  return (z._emscripten_sync_run_in_main_thread_2 = z.asm.emscripten_sync_run_in_main_thread_2).apply(null, arguments);
};
var cd = z._emscripten_sync_run_in_main_thread_4 = function() {
  return (cd = z._emscripten_sync_run_in_main_thread_4 = z.asm.emscripten_sync_run_in_main_thread_4).apply(null, arguments);
}, jb = z._emscripten_main_thread_process_queued_calls = function() {
  return (jb = z._emscripten_main_thread_process_queued_calls = z.asm.emscripten_main_thread_process_queued_calls).apply(null, arguments);
}, vc = z._emscripten_run_in_main_runtime_thread_js = function() {
  return (vc = z._emscripten_run_in_main_runtime_thread_js = z.asm.emscripten_run_in_main_runtime_thread_js).apply(null, arguments);
}, Ac = z.__emscripten_call_on_thread = function() {
  return (Ac = z.__emscripten_call_on_thread = z.asm._emscripten_call_on_thread).apply(null, arguments);
}, eb = z.__emscripten_thread_init = function() {
  return (eb = z.__emscripten_thread_init = z.asm._emscripten_thread_init).apply(null, arguments);
}, sb = z.___errno_location = function() {
  return (sb = z.___errno_location = z.asm.__errno_location).apply(null, arguments);
}, Tc = z._emscripten_get_global_libc = function() {
  return (Tc = z._emscripten_get_global_libc = z.asm.emscripten_get_global_libc).apply(null, arguments);
}, T = z._pthread_self = function() {
  return (T = z._pthread_self = z.asm.pthread_self).apply(null, arguments);
}, gb = z.___pthread_tsd_run_dtors = function() {
  return (gb = z.___pthread_tsd_run_dtors = z.asm.__pthread_tsd_run_dtors).apply(null, arguments);
};
z.__get_tzname = function() {
  return (z.__get_tzname = z.asm._get_tzname).apply(null, arguments);
};
z.__get_daylight = function() {
  return (z.__get_daylight = z.asm._get_daylight).apply(null, arguments);
};
z.__get_timezone = function() {
  return (z.__get_timezone = z.asm._get_timezone).apply(null, arguments);
};
z.___emscripten_pthread_data_constructor = function() {
  return (z.___emscripten_pthread_data_constructor = z.asm.__emscripten_pthread_data_constructor).apply(null, arguments);
};
var uc = z.stackSave = function() {
  return (uc = z.stackSave = z.asm.stackSave).apply(null, arguments);
}, nb = z.stackRestore = function() {
  return (nb = z.stackRestore = z.asm.stackRestore).apply(null, arguments);
}, P = z.stackAlloc = function() {
  return (P = z.stackAlloc = z.asm.stackAlloc).apply(null, arguments);
}, mb = z._emscripten_stack_set_limits = function() {
  return (mb = z._emscripten_stack_set_limits = z.asm.emscripten_stack_set_limits).apply(null, arguments);
}, dd = z._memalign = function() {
  return (dd = z._memalign = z.asm.memalign).apply(null, arguments);
};
z.dynCall_viijii = function() {
  return (z.dynCall_viijii = z.asm.dynCall_viijii).apply(null, arguments);
};
z.dynCall_iijjji = function() {
  return (z.dynCall_iijjji = z.asm.dynCall_iijjji).apply(null, arguments);
};
z.dynCall_jiji = function() {
  return (z.dynCall_jiji = z.asm.dynCall_jiji).apply(null, arguments);
};
z.dynCall_iiiiij = function() {
  return (z.dynCall_iiiiij = z.asm.dynCall_iiiiij).apply(null, arguments);
};
z.dynCall_iiiiijj = function() {
  return (z.dynCall_iiiiijj = z.asm.dynCall_iiiiijj).apply(null, arguments);
};
z.dynCall_iiiiiijj = function() {
  return (z.dynCall_iiiiiijj = z.asm.dynCall_iiiiiijj).apply(null, arguments);
};
var ib = z.__emscripten_allow_main_runtime_queued_calls = 25296, cb = z.__emscripten_main_thread_futex = 8755924;
z.ccall = function(a, b, c, d) {
  var f = {string:function(u) {
    var y = 0;
    if (null !== u && void 0 !== u && 0 !== u) {
      var C = (u.length << 2) + 1, D = y = P(C);
      Aa(u, q(), D, C);
    }
    return y;
  }, array:function(u) {
    var y = P(u.length);
    Da(u, y);
    return y;
  }}, g = ya(a), k = [];
  a = 0;
  if (d) {
    for (var t = 0; t < d.length; t++) {
      var p = f[c[t]];
      p ? (0 === a && (a = uc()), k[t] = p(d[t])) : k[t] = d[t];
    }
  }
  c = g.apply(null, k);
  c = function(u) {
    return "string" === b ? O(u) : "boolean" === b ? !!u : u;
  }(c);
  0 !== a && nb(a);
  return c;
};
z.PThread = A;
z.PThread = A;
z.wasmMemory = l;
z.ExitStatus = ra;
var fd;
function ra(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
Ua = function gd() {
  fd || hd();
  fd || (Ua = gd);
};
function hd(a) {
  function b() {
    if (!fd && (fd = !0, z.calledRun = !0, !xa)) {
      La();
      H || (Rb = !1, Ra(Ja));
      ha(z);
      if (z.onRuntimeInitialized) {
        z.onRuntimeInitialized();
      }
      if (jd) {
        var c = a, d = z._main;
        c = c || [];
        var f = c.length + 1, g = P(4 * (f + 1));
        r()[g >> 2] = Ca(la);
        for (var k = 1; k < f; k++) {
          r()[(g >> 2) + k] = Ca(c[k - 1]);
        }
        r()[(g >> 2) + f] = 0;
        try {
          var t = d(f, g);
          lb(t, !0);
        } catch (p) {
          p instanceof ra || "unwind" == p || ((c = p) && "object" === typeof p && p.stack && (c = [p, p.stack]), N("exception thrown: " + c), ma(1, p));
        } finally {
        }
      }
      if (!H) {
        if (z.postRun) {
          for ("function" == typeof z.postRun && (z.postRun = [z.postRun]); z.postRun.length;) {
            c = z.postRun.shift(), Ka.unshift(c);
          }
        }
        Ra(Ka);
      }
    }
  }
  a = a || ka;
  if (!(0 < Q)) {
    if (H) {
      ha(z), La(), postMessage({cmd:"loaded"});
    } else {
      if (!H) {
        if (z.preRun) {
          for ("function" == typeof z.preRun && (z.preRun = [z.preRun]); z.preRun.length;) {
            Sa();
          }
        }
        Ra(Ha);
      }
      0 < Q || (z.setStatus ? (z.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          z.setStatus("");
        }, 1);
        b();
      }, 1)) : b());
    }
  }
}
z.run = hd;
function lb(a, b) {
  if (!b || !pb() || 0 !== a) {
    if (!b && H) {
      throw postMessage({cmd:"exitProcess", returnCode:a}), new ra(a);
    }
    if (!pb()) {
      A.va();
      if (z.onExit) {
        z.onExit(a);
      }
      xa = !0;
    }
    ma(a, new ra(a));
  }
}
if (z.preInit) {
  for ("function" == typeof z.preInit && (z.preInit = [z.preInit]); 0 < z.preInit.length;) {
    z.preInit.pop()();
  }
}
var jd = !0;
z.noInitialRun && (jd = !1);
H && (noExitRuntime = !1, A.Ea());
hd();



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
