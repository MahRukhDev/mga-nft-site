(window.webpackJsonp = window.webpackJsonp || []).push([
  [15, 20],
  {
    1187: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.req = e.regex = e.ref = e.len = void 0),
        Object.defineProperty(e, "withParams", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        });
      var n,
        o = (n = r(1204)) && n.__esModule ? n : { default: n };
      function l(t) {
        return (
          (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          l(t)
        );
      }
      var c = function (t) {
        if (Array.isArray(t)) return !!t.length;
        if (null == t) return !1;
        if (!1 === t) return !0;
        if (t instanceof Date) return !isNaN(t.getTime());
        if ("object" === l(t)) {
          for (var e in t) return !0;
          return !1;
        }
        return !!String(t).length;
      };
      e.req = c;
      e.len = function (t) {
        return Array.isArray(t)
          ? t.length
          : "object" === l(t)
          ? Object.keys(t).length
          : String(t).length;
      };
      e.ref = function (t, e, r) {
        return "function" == typeof t ? t.call(e, r) : r[t];
      };
      e.regex = function (t, e) {
        return (0, o.default)({ type: t }, function (t) {
          return !c(t) || e.test(t);
        });
      };
    },
    1189: function (t, e, r) {
      t.exports = r.p + "img/twitter.88d497c.svg";
    },
    1190: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
    },
    1191: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40MTcgMTUuMTgxLS4zOTcgNS41ODRjLjU2OCAwIC44MTQtLjI0NCAxLjEwOS0uNTM3bDIuNjYzLTIuNTQ1IDUuNTE4IDQuMDQxYzEuMDEyLjU2NCAxLjcyNS4yNjcgMS45OTgtLjkzMWwzLjYyMi0xNi45NzIuMDAxLS4wMDFjLjMyMS0xLjQ5Ni0uNTQxLTIuMDgxLTEuNTI3LTEuNzE0bC0yMS4yOSA4LjE1MWMtMS40NTMuNTY0LTEuNDMxIDEuMzc0LS4yNDcgMS43NDFsNS40NDMgMS42OTMgMTIuNjQzLTcuOTExYy41OTUtLjM5NCAxLjEzNi0uMTc2LjY5MS4yMTh6IiBmaWxsPSIjMDM5YmU1Ii8+PC9zdmc+";
    },
    1192: function (t, e, r) {
      t.exports = r.p + "img/link.165bd9a.svg";
    },
    1194: function (t, e, r) {
      t.exports = r.p + "img/icon-hourglass.ec12268.png";
    },
    1198: function (t, e, r) {
      "use strict";
      var n = r(24),
        o = r(661).trim;
      n(
        { target: "String", proto: !0, forced: r(1199)("trim") },
        {
          trim: function () {
            return o(this);
          },
        }
      );
    },
    1199: function (t, e, r) {
      var n = r(174).PROPER,
        o = r(25),
        l = r(662);
      t.exports = function (t) {
        return o(function () {
          return !!l[t]() || "​᠎" !== "​᠎"[t]() || (n && l[t].name !== t);
        });
      };
    },
    1200: function (t, e, r) {
      "use strict";
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          n(t)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "alpha", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(e, "alphaNum", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(e, "and", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(e, "between", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(e, "decimal", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(e, "email", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        (e.helpers = void 0),
        Object.defineProperty(e, "integer", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(e, "ipAddress", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(e, "macAddress", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(e, "maxLength", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(e, "maxValue", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(e, "minLength", {
          enumerable: !0,
          get: function () {
            return C.default;
          },
        }),
        Object.defineProperty(e, "minValue", {
          enumerable: !0,
          get: function () {
            return I.default;
          },
        }),
        Object.defineProperty(e, "not", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(e, "numeric", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(e, "or", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(e, "required", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(e, "requiredIf", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(e, "requiredUnless", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(e, "sameAs", {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        Object.defineProperty(e, "url", {
          enumerable: !0,
          get: function () {
            return L.default;
          },
        });
      var o = M(r(1203)),
        l = M(r(1206)),
        c = M(r(1207)),
        d = M(r(1208)),
        v = M(r(1209)),
        m = M(r(1210)),
        _ = M(r(1211)),
        f = M(r(1212)),
        C = M(r(1213)),
        h = M(r(1214)),
        w = M(r(1215)),
        y = M(r(1216)),
        S = M(r(1217)),
        L = M(r(1218)),
        A = M(r(1219)),
        k = M(r(1220)),
        O = M(r(1221)),
        I = M(r(1222)),
        x = M(r(1223)),
        j = M(r(1224)),
        P = M(r(1225)),
        N = (function (t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" !== n(t) && "function" != typeof t))
            return { default: t };
          var r = D(e);
          if (r && r.has(t)) return r.get(t);
          var o = {},
            l = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var c in t)
            if ("default" !== c && Object.prototype.hasOwnProperty.call(t, c)) {
              var desc = l ? Object.getOwnPropertyDescriptor(t, c) : null;
              desc && (desc.get || desc.set)
                ? Object.defineProperty(o, c, desc)
                : (o[c] = t[c]);
            }
          (o.default = t), r && r.set(t, o);
          return o;
        })(r(1187));
      function D(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          r = new WeakMap();
        return (D = function (t) {
          return t ? r : e;
        })(t);
      }
      function M(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.helpers = N;
    },
    1203: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, r(1187).regex)("alpha", /^[a-zA-Z]*$/);
      e.default = n;
    },
    1204: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = "web" === t.env.BUILD ? r(1205).withParams : r(664).withParams;
        e.default = n;
      }.call(this, r(21)));
    },
    1205: function (t, e, r) {
      "use strict";
      (function (t) {
        function r(t) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            r(t)
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.withParams = void 0);
        var n = "undefined" != typeof window ? window : void 0 !== t ? t : {},
          o = n.vuelidate
            ? n.vuelidate.withParams
            : function (t, e) {
                return "object" === r(t) && void 0 !== e
                  ? e
                  : t(function () {});
              };
        e.withParams = o;
      }.call(this, r(19)));
    },
    1206: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, r(1187).regex)("alphaNum", /^[a-zA-Z0-9]*$/);
      e.default = n;
    },
    1207: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, r(1187).regex)("numeric", /^[0-9]*$/);
      e.default = n;
    },
    1208: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t, e) {
        return (0, n.withParams)(
          { type: "between", min: t, max: e },
          function (r) {
            return (
              !(0, n.req)(r) ||
              ((!/\s/.test(r) || r instanceof Date) && +t <= +r && +e >= +r)
            );
          }
        );
      };
    },
    1209: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, r(1187).regex)(
        "email",
        /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
      );
      e.default = n;
    },
    1210: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187),
        o = (0, n.withParams)({ type: "ipAddress" }, function (t) {
          if (!(0, n.req)(t)) return !0;
          if ("string" != typeof t) return !1;
          var e = t.split(".");
          return 4 === e.length && e.every(l);
        });
      e.default = o;
      var l = function (t) {
        if (t.length > 3 || 0 === t.length) return !1;
        if ("0" === t[0] && "0" !== t) return !1;
        if (!t.match(/^\d+$/)) return !1;
        var e = 0 | +t;
        return e >= 0 && e <= 255;
      };
    },
    1211: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ":";
        return (0, n.withParams)({ type: "macAddress" }, function (e) {
          if (!(0, n.req)(e)) return !0;
          if ("string" != typeof e) return !1;
          var r =
            "string" == typeof t && "" !== t
              ? e.split(t)
              : 12 === e.length || 16 === e.length
              ? e.match(/.{2}/g)
              : null;
          return null !== r && (6 === r.length || 8 === r.length) && r.every(o);
        });
      };
      var o = function (t) {
        return t.toLowerCase().match(/^[0-9a-f]{2}$/);
      };
    },
    1212: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)({ type: "maxLength", max: t }, function (e) {
          return !(0, n.req)(e) || (0, n.len)(e) <= t;
        });
      };
    },
    1213: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)({ type: "minLength", min: t }, function (e) {
          return !(0, n.req)(e) || (0, n.len)(e) >= t;
        });
      };
    },
    1214: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187),
        o = (0, n.withParams)({ type: "required" }, function (t) {
          return "string" == typeof t ? (0, n.req)(t.trim()) : (0, n.req)(t);
        });
      e.default = o;
    },
    1215: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)(
          { type: "requiredIf", prop: t },
          function (e, r) {
            return !(0, n.ref)(t, this, r) || (0, n.req)(e);
          }
        );
      };
    },
    1216: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)(
          { type: "requiredUnless", prop: t },
          function (e, r) {
            return !!(0, n.ref)(t, this, r) || (0, n.req)(e);
          }
        );
      };
    },
    1217: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)({ type: "sameAs", eq: t }, function (e, r) {
          return e === (0, n.ref)(t, this, r);
        });
      };
    },
    1218: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, r(1187).regex)(
        "url",
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
      );
      e.default = n;
    },
    1219: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return (0, n.withParams)({ type: "or" }, function () {
          for (
            var t = this, r = arguments.length, n = new Array(r), o = 0;
            o < r;
            o++
          )
            n[o] = arguments[o];
          return (
            e.length > 0 &&
            e.reduce(function (e, r) {
              return e || r.apply(t, n);
            }, !1)
          );
        });
      };
    },
    1220: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return (0, n.withParams)({ type: "and" }, function () {
          for (
            var t = this, r = arguments.length, n = new Array(r), o = 0;
            o < r;
            o++
          )
            n[o] = arguments[o];
          return (
            e.length > 0 &&
            e.reduce(function (e, r) {
              return e && r.apply(t, n);
            }, !0)
          );
        });
      };
    },
    1221: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)({ type: "not" }, function (e, r) {
          return !(0, n.req)(e) || !t.call(this, e, r);
        });
      };
    },
    1222: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)({ type: "minValue", min: t }, function (e) {
          return (
            !(0, n.req)(e) || ((!/\s/.test(e) || e instanceof Date) && +e >= +t)
          );
        });
      };
    },
    1223: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(1187);
      e.default = function (t) {
        return (0, n.withParams)({ type: "maxValue", max: t }, function (e) {
          return (
            !(0, n.req)(e) || ((!/\s/.test(e) || e instanceof Date) && +e <= +t)
          );
        });
      };
    },
    1224: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, r(1187).regex)("integer", /(^[0-9]*$)|(^-[0-9]+$)/);
      e.default = n;
    },
    1225: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, r(1187).regex)("decimal", /^[-]?\d*(\.\d+)?$/);
      e.default = n;
    },
    1250: function (t, e, r) {
      var content = r(1279);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(100).default)("aa69504e", content, !0, { sourceMap: !1 });
    },
    1278: function (t, e, r) {
      "use strict";
      r(1250);
    },
    1279: function (t, e, r) {
      var n = r(99)(!1);
      n.push([
        t.i,
        ".hero-slider-1 .single-slider-img-1 .slider-1-1[data-v-fa11d8de]{bottom:0!important}.bottomBanner[data-v-fa11d8de]{border-radius:10px}.slider-1-1[data-v-fa11d8de]{display:block!important;margin:0 auto!important}.hero-slider-content-2 p[data-v-fa11d8de]{width:100%!important}.hero-slider-content-2 span[data-v-fa11d8de]{font-size:30px}.single-hero-slider[data-v-fa11d8de]{display:block!important}.btnBuyGES[data-v-fa11d8de]{background:rgba(253,228,202,.7);border-radius:20px;border:0}",
        "",
      ]),
        (t.exports = n);
    },
    1296: function (t, e, r) {
      "use strict";
      r.r(e);
      r(86), r(62), r(76), r(116), r(117);
      var n = r(4),
        o = r(55),
        l = (r(23), r(1198), r(40), r(141), r(75), r(660), r(30)),
        c = r(5),
        d = r.n(c),
        v = r(218);
      function m(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function _(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? m(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : m(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var f,
        C,
        h = {
          mixins: [r(173).a],
          data: function () {
            return { logName: "index.vue | ", selectedShareItemURL: "" };
          },
          computed: _(
            _(
              _(
                _(
                  _(
                    _(
                      {},
                      Object(l.d)("memberProfile", [
                        "memberId",
                        "likedAssetList",
                      ])
                    ),
                    Object(l.d)("marketplace", [
                      "searchAssetSortBy",
                      "newAddedListing",
                      "newAddedSellOrderListing",
                      "newAddedAuctionListing",
                      "featuredSellOrderListing",
                      "featuredAuctionListing",
                      "popularSellOrderListing",
                      "popularAuctionListing",
                      "popularListing",
                      "upcomingAuctionListing",
                    ])
                  ),
                  Object(l.d)("staticData", ["dailysummary"])
                ),
                Object(l.d)("category", ["categoryListing"])
              ),
              Object(l.d)("web3Modal", [
                "account",
                "account_short",
                "account_wallet",
              ])
            ),
            {},
            {
              getNow: function () {
                return "2021-09-10 00:00:00";
              },
              getGoLiveDate: function () {
                var t = new Date(
                    Date.parse("2021-10-22 12:00:00", "yyyy-MM-dd hh:mm:ss")
                  ),
                  e = new Date().getTimezoneOffset(),
                  r = d()(t).add(-e, "m").toDate();
                return d()(r).format("yyyy-MM-DD HH:mm:ss");
              },
              getDisableBuyGESSetting: function () {
                switch ("false".toLowerCase().trim()) {
                  case "true":
                  case "yes":
                  case "1":
                    return !0;
                  default:
                    return !1;
                }
              },
            }
          ),
          mounted:
            ((C = Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            this.getDailySummary(),
                            (t.next = 3),
                            this.getPopularOrderListing({
                              storeId: null,
                              searchForSellOrder: null,
                              searchForAuction: null,
                              start: 0,
                              length: 8,
                            })
                          );
                        case 3:
                          this.getPopularOrderListing({
                            storeId: null,
                            searchForSellOrder: !0,
                            searchForAuction: !1,
                            start: 0,
                            length: 8,
                          }),
                            this.getPopularOrderListing({
                              storeId: null,
                              searchForSellOrder: !1,
                              searchForAuction: !0,
                              start: 0,
                              length: 8,
                            }),
                            this.getFeaturedOrderListing({
                              storeId: null,
                              searchForSellOrder: !1,
                              searchForAuction: !0,
                              start: 0,
                              length: 8,
                            }),
                            this.getFeaturedOrderListing({
                              storeId: null,
                              searchForSellOrder: !0,
                              searchForAuction: !1,
                              start: 0,
                              length: 8,
                            }),
                            this.getNewAddedOrderListing({
                              storeId: null,
                              searchForSellOrder: !0,
                              searchForAuction: !1,
                              start: 0,
                              length: 8,
                            }),
                            this.getNewAddedOrderListing({
                              storeId: null,
                              searchForSellOrder: !1,
                              searchForAuction: !0,
                              start: 0,
                              length: 8,
                            }),
                            this.getUpcomingAuctionListing({
                              storeId: null,
                              start: 0,
                              length: 8,
                            }),
                            this.Init();
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function () {
              return C.apply(this, arguments);
            }),
          methods: _(
            _(
              _(
                _(
                  _(
                    _({ moment: d.a }, Object(l.b)("web3Modal", ["connect"])),
                    Object(l.b)("marketplace", [
                      "getFeaturedOrderListing",
                      "getPopularOrderListing",
                      "getNewAddedOrderListing",
                      "getUpcomingAuctionListing",
                    ])
                  ),
                  Object(l.b)("staticData", ["getDailySummary"])
                ),
                Object(l.b)("category", ["getCategoryListing"])
              ),
              Object(l.b)("asset", ["like", "unlike"])
            ),
            {},
            {
              startCallBack: function (t) {
                this.$log.debug(this.logName, "x", t);
              },
              assetDetailsLink: function (t) {
                return "2" == t ? "Totem" : "Asset1155";
              },
              endCallBack: function (t) {
                this.$log.debug(this.logName, "x", t);
              },
              Init: function () {
                $(".hero-slider-1").slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  fade: !0,
                  loop: !0,
                  dots: !0,
                  arrows: !0,
                  prevArrow:
                    '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
                  nextArrow:
                    '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
                  appendArrows: ".hero-slider-1-arrow",
                  autoplay: !0,
                }),
                  $(".hero-slider-2").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: !0,
                    loop: !0,
                    dots: !0,
                    arrows: !0,
                    prevArrow:
                      '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
                    nextArrow:
                      '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
                    appendArrows: ".hero-slider-2-arrow",
                    autoplay: !0,
                  });
                var t = this;
                $(".carausel-6-columns").each(function (e, r) {
                  var n = $(this).attr("id"),
                    o = "#" + n,
                    l = "#" + n + "-arrows",
                    c = 6;
                  t.popularListing.length < 6 && (c = t.popularListing.length),
                    $(o).slick({
                      dots: !1,
                      infinite: !0,
                      speed: 1e3,
                      arrows: !0,
                      autoplay: !0,
                      slidesToShow: c,
                      slidesToScroll: 1,
                      loop: !0,
                      adaptiveHeight: !0,
                      responsive: [
                        {
                          breakpoint: 1400,
                          settings: { slidesToShow: 5, slidesToScroll: 1 },
                        },
                        {
                          breakpoint: 1200,
                          settings: { slidesToShow: 4, slidesToScroll: 1 },
                        },
                        {
                          breakpoint: 1025,
                          settings: { slidesToShow: 3, slidesToScroll: 1 },
                        },
                        {
                          breakpoint: 768,
                          settings: { slidesToShow: 2, slidesToScroll: 1 },
                        },
                        {
                          breakpoint: 480,
                          settings: { slidesToShow: 2, slidesToScroll: 1 },
                        },
                      ],
                      prevArrow:
                        '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
                      nextArrow:
                        '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
                      appendArrows: l,
                    });
                }),
                  $("[data-countdown]").each(function () {
                    $(this), $(this).data("countdown");
                  });
              },
              next: function () {
                this.$refs.slick.next();
              },
              prev: function () {
                this.$refs.slick.prev();
              },
              utcToLocalDateTime: function (t) {
                var e = d.a.utc(t).toDate(),
                  r = d()(e).local();
                return (
                  this.$log.debug(
                    this.logName,
                    "utcToLocalDateTime utc local",
                    e,
                    r
                  ),
                  r
                );
              },
              expiryDateLocal: function (t, e) {
                var r = this.utcToLocalDateTime(t),
                  n = d()(String(d()(r))).add(e, "seconds");
                return (
                  this.$log.debug(
                    this.logName,
                    "expiryDateLocal startDateUtc startDateLocal expiryLocal",
                    t,
                    r,
                    n
                  ),
                  n
                );
              },
              isAuctionExpired: function (t) {
                var e = !1;
                return (
                  d()().isAfter(d()(t)) && (e = !0),
                  this.$log.debug(this.logName, "isAuctionExpired expired", e),
                  e
                );
              },
              isAuctionStarted: function (t) {
                var e = !1;
                return (
                  d()().isAfter(d()(t)) && (e = !0),
                  this.$log.debug(this.logName, "isAuctionStarted started", e),
                  e
                );
              },
              bidAsset: function (t) {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              !e.isAuctionExpired(
                                e.expiryDateLocal(
                                  t.AuctionOrder.StartTimeUTC,
                                  t.AuctionOrder.DurationInSeconds
                                )
                              )
                            ) {
                              r.next = 3;
                              break;
                            }
                            return (
                              Object(v.b)(
                                "Auction had expired. Place bid is not allowed"
                              ),
                              r.abrupt("return")
                            );
                          case 3:
                            if (4 != t.AuctionOrder.AuctionStatusId) {
                              r.next = 6;
                              break;
                            }
                            return (
                              Object(v.b)(
                                "Auction has been cancelled by owner. Place bid is not allowed"
                              ),
                              r.abrupt("return")
                            );
                          case 6:
                            (n = e),
                              e.$refs.bidAsset.placeBid({
                                assetId: t.AssetId,
                                auctionId: t.OrderId,
                                nftName: t.Name,
                                nftURL: t.URI,
                                bidderAddress: e.account,
                                tokenAddress: t.ContractAddress,
                                tokenId: t.TokenId,
                                assetType: t.AssetType.toString(),
                                ownerAddress: t.Owner,
                                salt: t.AuctionOrder.Salt,
                                startBid: t.AuctionOrder.StartBid,
                                highestBid: t.AuctionOrder.CurrentBid,
                                minIncrementalBid:
                                  t.AuctionOrder.MinIncrementalBid,
                                currency: t.AuctionOrder.CurrencyCode,
                                duration: t.AuctionOrder.DurationInSeconds,
                                startedAt: t.AuctionOrder.StartTimeUnix,
                                auctionIdBlockChain:
                                  t.AuctionOrder.AuctionIdBlockChain,
                                callbackSuccess: function (t) {
                                  n.getDailySummary(),
                                    n.getPopularOrderListing({
                                      storeId: null,
                                      searchForSellOrder: null,
                                      searchForAuction: null,
                                      start: 0,
                                      length: 8,
                                    }),
                                    n.getPopularOrderListing({
                                      storeId: null,
                                      searchForSellOrder: !0,
                                      searchForAuction: !1,
                                      start: 0,
                                      length: 8,
                                    }),
                                    n.getPopularOrderListing({
                                      storeId: null,
                                      searchForSellOrder: !1,
                                      searchForAuction: !0,
                                      start: 0,
                                      length: 8,
                                    }),
                                    n.getFeaturedOrderListing({
                                      storeId: null,
                                      searchForSellOrder: !1,
                                      searchForAuction: !0,
                                      start: 0,
                                      length: 8,
                                    }),
                                    n.getFeaturedOrderListing({
                                      storeId: null,
                                      searchForSellOrder: !0,
                                      searchForAuction: !1,
                                      start: 0,
                                      length: 8,
                                    }),
                                    n.getNewAddedOrderListing({
                                      storeId: null,
                                      searchForSellOrder: !0,
                                      searchForAuction: !1,
                                      start: 0,
                                      length: 8,
                                    }),
                                    n.getNewAddedOrderListing({
                                      storeId: null,
                                      searchForSellOrder: !1,
                                      searchForAuction: !0,
                                      start: 0,
                                      length: 8,
                                    }),
                                    n.getUpcomingAuctionListing({
                                      storeId: null,
                                      start: 0,
                                      length: 8,
                                    });
                                },
                              });
                          case 8:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              buyAsset: function (t, e, r, n, o, l, c, d, v, m, _, f, C, h) {
                var w = this;
                this.$refs.buyAsset.buyNow(
                  t,
                  e,
                  r,
                  n,
                  o,
                  this.account,
                  l,
                  c,
                  d.toString(),
                  v,
                  m,
                  _,
                  f,
                  C.toLowerCase(),
                  h,
                  function () {
                    w.getDailySummary(),
                      w.getPopularOrderListing({
                        storeId: null,
                        searchForSellOrder: null,
                        searchForAuction: null,
                        start: 0,
                        length: 8,
                      }),
                      w.getPopularOrderListing({
                        storeId: null,
                        searchForSellOrder: !0,
                        searchForAuction: !1,
                        start: 0,
                        length: 8,
                      }),
                      w.getPopularOrderListing({
                        storeId: null,
                        searchForSellOrder: !1,
                        searchForAuction: !0,
                        start: 0,
                        length: 8,
                      }),
                      w.getFeaturedOrderListing({
                        storeId: null,
                        searchForSellOrder: !1,
                        searchForAuction: !0,
                        start: 0,
                        length: 8,
                      }),
                      w.getFeaturedOrderListing({
                        storeId: null,
                        searchForSellOrder: !0,
                        searchForAuction: !1,
                        start: 0,
                        length: 8,
                      }),
                      w.getNewAddedOrderListing({
                        storeId: null,
                        searchForSellOrder: !0,
                        searchForAuction: !1,
                        start: 0,
                        length: 8,
                      }),
                      w.getNewAddedOrderListing({
                        storeId: null,
                        searchForSellOrder: !1,
                        searchForAuction: !0,
                        start: 0,
                        length: 8,
                      }),
                      w.getUpcomingAuctionListing({
                        storeId: null,
                        start: 0,
                        length: 8,
                      });
                  }
                );
              },
              likeAsset:
                ((f = Object(n.a)(
                  regeneratorRuntime.mark(function t(e) {
                    var r,
                      n,
                      o,
                      l,
                      c = this;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (null != this.memberId) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), this.connect();
                            case 3:
                              t.next = 11;
                              break;
                            case 5:
                              (r = this.memberId),
                                (n = $(".heart_" + e)),
                                (o = $(".like_" + e)),
                                (l = parseInt($(o[0]).html())),
                                n.hasClass("fas")
                                  ? (this.unlike({ assetId: e, memberId: r }),
                                    n.removeClass("fas").addClass("far"),
                                    (l -= 1),
                                    this.likedAssetList.forEach(function (
                                      t,
                                      r
                                    ) {
                                      t === e && c.likedAssetList.splice(r, 1);
                                    }))
                                  : (this.like({ assetId: e, memberId: r }),
                                    n.removeClass("far").addClass("fas"),
                                    (l += 1),
                                    this.likedAssetList.push(e)),
                                o.html(l);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return f.apply(this, arguments);
                }),
              viewMore: function () {
                this.$router.push({ name: "Marketplace", query: {} });
              },
              openShareModal: function (t, e, r) {
                this.selectedShareItemURL =
                  "https://social.stoneagenft.com/asset/" +
                  t +
                  "/" +
                  e +
                  "/" +
                  r;
              },
            }
          ),
        },
        w = h,
        y = (r(1278), r(65)),
        component = Object(y.a)(
          w,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "main",
              { staticClass: "main" },
              [
                t._m(0),
                t._v(" "),
                t.featuredAuctionListing.length > 0 ||
                t.popularAuctionListing.length > 0 ||
                t.newAddedAuctionListing.length > 0
                  ? r(
                      "section",
                      {
                        staticClass:
                          "product-tabs section-padding position-relative wow fadeIn animated",
                      },
                      [
                        r("div", { staticClass: "container" }, [
                          t._m(1),
                          t._v(" "),
                          r("div", { staticClass: "tab-header" }, [
                            t._m(2),
                            t._v(" "),
                            r(
                              "a",
                              {
                                staticClass: "view-more d-none d-md-flex",
                                attrs: { href: "javascript:void(0)" },
                                on: { click: t.viewMore },
                              },
                              [
                                t._v("View More"),
                                r("i", {
                                  staticClass: "fi-rs-angle-double-small-right",
                                }),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          r(
                            "div",
                            {
                              staticClass: "tab-content wow fadeIn animated",
                              attrs: { id: "myTabContent" },
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass: "tab-pane fade",
                                  attrs: {
                                    id: "tab-threeAuction",
                                    role: "tabpanel",
                                    "aria-labelledby": "tab-threeAuction",
                                  },
                                },
                                [
                                  r(
                                    "div",
                                    { staticClass: "row product-grid-4" },
                                    t._l(
                                      t.featuredAuctionListing,
                                      function (e, n) {
                                        var o = e.CollectionGroupId,
                                          l = e.Id,
                                          c = e.SellOrder,
                                          d = e.AuctionOrder,
                                          v = e.AssetStatusId,
                                          m = e.FeatureName,
                                          _ = e.OwnerOwnQuantity,
                                          f = e.OwnerDisplayName,
                                          C = e.OnwerWalletAddressShort,
                                          h = e.IsCollectionEnabledBuy,
                                          w = e.Name,
                                          y = e.URI,
                                          S = e.PreviewImageURI,
                                          L = e.Liked,
                                          A = e.Store,
                                          k = e.AssetId,
                                          O = e.TokenId,
                                          I = e.ContractAddress,
                                          x = e.Owner,
                                          j = e.StoreId,
                                          P = e.AssetType;
                                        return r(
                                          "div",
                                          {
                                            key: l,
                                            staticClass:
                                              "col-lg-3 col-md-4 col-12 col-sm-6 mb-30",
                                          },
                                          [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-cart-wrap h-100 wrapAuction",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-img-action-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-img",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    I,
                                                                  tokenId: O,
                                                                  ownerAddress:
                                                                    x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              y
                                                                .slice(-4)
                                                                .toLowerCase() &&
                                                            ".mp4" !=
                                                              y
                                                                .slice(-4)
                                                                .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "inner",
                                                                      },
                                                                      [
                                                                        r(
                                                                          "img",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: S,
                                                                                alt: "",
                                                                                loading:
                                                                                  "lazy",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            y
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-video-wrapper",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "video",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                          loop: "loop",
                                                                          muted:
                                                                            "muted",
                                                                        },
                                                                        domProps:
                                                                          {
                                                                            muted:
                                                                              !0,
                                                                          },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: t.uriWithStartTime(
                                                                                  y
                                                                                ),
                                                                                type: "video/mp4",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp3" ==
                                                            y
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
                                                                        "background-image":
                                                                          "url('assets/img/default-img-audio.jpg')",
                                                                      },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "audio",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: y,
                                                                                type: "audio/mp3",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    m
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-badges product-badges-position product-badges-mrg",
                                                          },
                                                          [
                                                            r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "best",
                                                              },
                                                              [t._v(t._s(m))]
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-content-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-category",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: "Storelist",
                                                                params: {
                                                                  storeid: j,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v(" " + t._s(A))]
                                                        ),
                                                        t._v(" "),
                                                        !A && f && f.length > 0
                                                          ? r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        x,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(f)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        A || f
                                                          ? t._e()
                                                          : r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        x,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(C)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                        t._v(" "),
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "productOwerOwn float-right",
                                                          },
                                                          [
                                                            r("i", {
                                                              staticClass:
                                                                "fi-rr-user text-gray",
                                                            }),
                                                            t._v(" "),
                                                            r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-small text-gray",
                                                              },
                                                              [
                                                                t._v(
                                                                  " owner own " +
                                                                    t._s(_)
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    r("h2", [
                                                      r(
                                                        "a",
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(w))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    2 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    c.Price
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    c.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            t.PriceUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            c.PriceUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    3 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    null ==
                                                                      d.CurrentBid
                                                                      ? d.StartBid
                                                                      : d.CurrentBid
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    d.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            d.BidUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            d.BidUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    I,
                                                                  tokenId: O,
                                                                  ownerAddress:
                                                                    x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v("Details")]
                                                        ),
                                                        t._v(
                                                          " \n                                                    "
                                                        ),
                                                        2 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          x.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.buyAsset(
                                                                        k,
                                                                        c.SellOrderId,
                                                                        c.SellQuantity,
                                                                        w,
                                                                        y,
                                                                        I,
                                                                        O,
                                                                        P + "",
                                                                        x,
                                                                        c.Salt,
                                                                        c.Signature,
                                                                        c.Price,
                                                                        c.CurrencyCode,
                                                                        o
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [t._v("Buy")]
                                                            ),
                                                        t._v(" "),
                                                        3 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          x.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.bidAsset(
                                                                        t
                                                                          .featuredAuctionListing[
                                                                          n
                                                                        ]
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                                                        Bid\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "likeshare-wrapper",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      { staticClass: "row" },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-share",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "share action-btn hover-up",
                                                                    attrs: {
                                                                      "aria-label":
                                                                        "Share This",
                                                                      "data-bs-toggle":
                                                                        "modal",
                                                                      "data-bs-target":
                                                                        "#shareThiswModal",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.openShareModal(
                                                                            I,
                                                                            O,
                                                                            x
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._m(3, !0),
                                                                    t._v(
                                                                      " Share This"
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-like",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "like",
                                                                    attrs: {
                                                                      href: "javascript:void(0)",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.likeAsset(
                                                                            k
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "span",
                                                                      {
                                                                        class:
                                                                          "like_" +
                                                                          k,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            L
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(
                                                                      " Likes"
                                                                    ),
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "heart",
                                                                      },
                                                                      [
                                                                        r("i", {
                                                                          staticClass:
                                                                            "fa-heart",
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                k
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                k,
                                                                            ],
                                                                        }),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        );
                                      }
                                    ),
                                    0
                                  ),
                                ]
                              ),
                              t._v(" "),
                              r(
                                "div",
                                {
                                  staticClass: "tab-pane fade  show active",
                                  attrs: {
                                    id: "tab-oneAuction",
                                    role: "tabpanel",
                                    "aria-labelledby": "tab-oneAuction",
                                  },
                                },
                                [
                                  r(
                                    "div",
                                    { staticClass: "row product-grid-4" },
                                    t._l(
                                      t.popularAuctionListing,
                                      function (e, n) {
                                        var o = e.CollectionGroupId,
                                          l = e.Id,
                                          c = e.SellOrder,
                                          d = e.AuctionOrder,
                                          v = e.AssetStatusId,
                                          m = e.FeatureName,
                                          _ = e.OwnerOwnQuantity,
                                          f = e.OwnerDisplayName,
                                          C = e.OnwerWalletAddressShort,
                                          h = e.IsCollectionEnabledBuy,
                                          w = e.Name,
                                          y = e.URI,
                                          S = e.PreviewImageURI,
                                          L = e.Liked,
                                          A = e.Store,
                                          k = e.AssetId,
                                          O = e.TokenId,
                                          I = e.ContractAddress,
                                          x = e.Owner,
                                          j = e.StoreId,
                                          P = e.AssetType;
                                        return r(
                                          "div",
                                          {
                                            key: l,
                                            staticClass:
                                              "col-lg-3 col-md-4 col-12 col-sm-6 mb-30",
                                          },
                                          [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-cart-wrap h-100 wrapAuction",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-img-action-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-img",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    I,
                                                                  tokenId: O,
                                                                  ownerAddress:
                                                                    x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              y
                                                                .slice(-4)
                                                                .toLowerCase() &&
                                                            ".mp4" !=
                                                              y
                                                                .slice(-4)
                                                                .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "inner",
                                                                      },
                                                                      [
                                                                        r(
                                                                          "img",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: S,
                                                                                alt: "",
                                                                                loading:
                                                                                  "lazy",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            y
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-video-wrapper",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "video",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                          loop: "loop",
                                                                          muted:
                                                                            "muted",
                                                                        },
                                                                        domProps:
                                                                          {
                                                                            muted:
                                                                              !0,
                                                                          },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: t.uriWithStartTime(
                                                                                  y
                                                                                ),
                                                                                type: "video/mp4",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp3" ==
                                                            y
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
                                                                        "background-image":
                                                                          "url('assets/img/default-img-audio.jpg')",
                                                                      },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "audio",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: y,
                                                                                type: "audio/mp3",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    m
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-badges product-badges-position product-badges-mrg",
                                                          },
                                                          [
                                                            r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "best",
                                                              },
                                                              [t._v(t._s(m))]
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-content-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-category",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: "Storelist",
                                                                params: {
                                                                  storeid: j,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v(" " + t._s(A))]
                                                        ),
                                                        t._v(" "),
                                                        !A && f && f.length > 0
                                                          ? r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        x,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(f)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        A || f
                                                          ? t._e()
                                                          : r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        x,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(C)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                        t._v(" "),
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "productOwerOwn float-right",
                                                          },
                                                          [
                                                            r("i", {
                                                              staticClass:
                                                                "fi-rr-user text-gray",
                                                            }),
                                                            t._v(" "),
                                                            r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-small text-gray",
                                                              },
                                                              [
                                                                t._v(
                                                                  " owner own " +
                                                                    t._s(_)
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    r("h2", [
                                                      r(
                                                        "a",
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(w))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    2 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    c.Price
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    c.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            t.PriceUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            c.PriceUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    3 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    null ==
                                                                      d.CurrentBid
                                                                      ? d.StartBid
                                                                      : d.CurrentBid
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    d.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            d.BidUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            d.BidUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    I,
                                                                  tokenId: O,
                                                                  ownerAddress:
                                                                    x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v("Details")]
                                                        ),
                                                        t._v(
                                                          " \n                                                    "
                                                        ),
                                                        2 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          x.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.buyAsset(
                                                                        k,
                                                                        c.Id,
                                                                        c.SellQuantity,
                                                                        w,
                                                                        y,
                                                                        I,
                                                                        O,
                                                                        P + "",
                                                                        x,
                                                                        c.Salt,
                                                                        c.Signature,
                                                                        c.Price,
                                                                        c.CurrencyCode,
                                                                        o
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [t._v("Buy")]
                                                            ),
                                                        t._v(" "),
                                                        3 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          x.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.bidAsset(
                                                                        t
                                                                          .popularAuctionListing[
                                                                          n
                                                                        ]
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                                                        Bid\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "likeshare-wrapper",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      { staticClass: "row" },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-share",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "share action-btn hover-up",
                                                                    attrs: {
                                                                      "aria-label":
                                                                        "Share This",
                                                                      "data-bs-toggle":
                                                                        "modal",
                                                                      "data-bs-target":
                                                                        "#shareThiswModal",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.openShareModal(
                                                                            I,
                                                                            O,
                                                                            x
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._m(4, !0),
                                                                    t._v(
                                                                      " Share This"
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-like",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "like",
                                                                    attrs: {
                                                                      href: "javascript:void(0)",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.likeAsset(
                                                                            k
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "span",
                                                                      {
                                                                        class:
                                                                          "like_" +
                                                                          k,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            L
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(
                                                                      " Likes"
                                                                    ),
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "heart",
                                                                      },
                                                                      [
                                                                        r("i", {
                                                                          staticClass:
                                                                            "fa-heart",
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                k
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                k,
                                                                            ],
                                                                        }),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        );
                                      }
                                    ),
                                    0
                                  ),
                                ]
                              ),
                              t._v(" "),
                              r(
                                "div",
                                {
                                  staticClass: "tab-pane fade",
                                  attrs: {
                                    id: "tab-twoAuction",
                                    role: "tabpanel",
                                    "aria-labelledby": "tab-twoAuction",
                                  },
                                },
                                [
                                  r(
                                    "div",
                                    { staticClass: "row product-grid-4" },
                                    t._l(
                                      t.newAddedAuctionListing,
                                      function (e, n) {
                                        var o = e.CollectionGroupId,
                                          l = e.Id,
                                          c = e.SellOrder,
                                          d = e.AuctionOrder,
                                          v = e.AssetStatusId,
                                          m = e.FeatureName,
                                          _ = e.OwnerOwnQuantity,
                                          f = e.OwnerDisplayName,
                                          C = e.OnwerWalletAddressShort,
                                          h = e.IsCollectionEnabledBuy,
                                          w = e.OrderId,
                                          y = e.Name,
                                          S = e.URI,
                                          L = e.PreviewImageURI,
                                          A = e.Liked,
                                          k = e.Store,
                                          O = e.AssetId,
                                          I = e.TokenId,
                                          x = e.ContractAddress,
                                          j = e.Owner,
                                          P = e.StoreId,
                                          N = e.AssetType;
                                        return r(
                                          "div",
                                          {
                                            key: l,
                                            staticClass:
                                              "col-lg-3  col-md-4 col-12 col-sm-6 mb-30",
                                          },
                                          [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-cart-wrap h-100 wrapAuction",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-img-action-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-img",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    x,
                                                                  tokenId: I,
                                                                  ownerAddress:
                                                                    j,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              S.slice(
                                                                -4
                                                              ).toLowerCase() &&
                                                            ".mp4" !=
                                                              S.slice(
                                                                -4
                                                              ).toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "inner",
                                                                      },
                                                                      [
                                                                        r(
                                                                          "img",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: L,
                                                                                alt: "",
                                                                                loading:
                                                                                  "lazy",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            S.slice(
                                                              -4
                                                            ).toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-video-wrapper",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "video",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                          loop: "loop",
                                                                          muted:
                                                                            "muted",
                                                                        },
                                                                        domProps:
                                                                          {
                                                                            muted:
                                                                              !0,
                                                                          },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: t.uriWithStartTime(
                                                                                  S
                                                                                ),
                                                                                type: "video/mp4",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp3" ==
                                                            S.slice(
                                                              -4
                                                            ).toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
                                                                        "background-image":
                                                                          "url('assets/img/default-img-audio.jpg')",
                                                                      },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "audio",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: S,
                                                                                type: "audio/mp3",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                m
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-badges product-badges-position product-badges-mrg",
                                                      },
                                                      [
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass: "best",
                                                          },
                                                          [t._v(t._s(m))]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-content-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-category",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: "Storelist",
                                                                params: {
                                                                  storeid: P,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v(" " + t._s(k))]
                                                        ),
                                                        t._v(" "),
                                                        !k && f && f.length > 0
                                                          ? r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        j,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(f)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        k || f
                                                          ? t._e()
                                                          : r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        j,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(C)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                        t._v(" "),
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "productOwerOwn float-right",
                                                          },
                                                          [
                                                            r("i", {
                                                              staticClass:
                                                                "fi-rr-user text-gray",
                                                            }),
                                                            t._v(" "),
                                                            r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-small text-gray",
                                                              },
                                                              [
                                                                t._v(
                                                                  " owner own " +
                                                                    t._s(_)
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    r("h2", [
                                                      r(
                                                        "a",
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(y))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    2 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    c.Price
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    c.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            c.PriceUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            c.PriceUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    3 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    null ==
                                                                      d.CurrentBid
                                                                      ? d.StartBid
                                                                      : d.CurrentBid
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    d.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            d.BidUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            d.BidUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    x,
                                                                  tokenId: I,
                                                                  ownerAddress:
                                                                    j,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v("Details")]
                                                        ),
                                                        t._v(
                                                          " \n                                                    "
                                                        ),
                                                        2 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          j.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.buyAsset(
                                                                        O,
                                                                        w,
                                                                        c.SellQuantity,
                                                                        y,
                                                                        S,
                                                                        x,
                                                                        I,
                                                                        N + "",
                                                                        j,
                                                                        c.Salt,
                                                                        c.Signature,
                                                                        c.Price,
                                                                        c.CurrencyCode,
                                                                        o
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                                                        Buy\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                        t._v(" "),
                                                        3 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          j.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.bidAsset(
                                                                        t
                                                                          .newAddedAuctionListing[
                                                                          n
                                                                        ]
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                                                        Bid\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "likeshare-wrapper",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      { staticClass: "row" },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-share",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "share action-btn hover-up",
                                                                    attrs: {
                                                                      "aria-label":
                                                                        "Share This",
                                                                      "data-bs-toggle":
                                                                        "modal",
                                                                      "data-bs-target":
                                                                        "#shareThiswModal",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.openShareModal(
                                                                            x,
                                                                            I,
                                                                            j
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._m(5, !0),
                                                                    t._v(
                                                                      " Share This"
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-like",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "like",
                                                                    attrs: {
                                                                      href: "javascript:void(0)",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.likeAsset(
                                                                            O
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "span",
                                                                      {
                                                                        class:
                                                                          "like_" +
                                                                          O,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            A
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(
                                                                      " Likes"
                                                                    ),
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "heart",
                                                                      },
                                                                      [
                                                                        r("i", {
                                                                          staticClass:
                                                                            "fa-heart",
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                O
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                O,
                                                                            ],
                                                                        }),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        );
                                      }
                                    ),
                                    0
                                  ),
                                ]
                              ),
                              t._v(" "),
                              r(
                                "div",
                                {
                                  staticClass: "tab-pane fade",
                                  attrs: {
                                    id: "tab-fourAuction",
                                    role: "tabpanel",
                                    "aria-labelledby": "tab-fourAuction",
                                  },
                                },
                                [
                                  r(
                                    "div",
                                    { staticClass: "row product-grid-4" },
                                    t._l(
                                      t.upcomingAuctionListing,
                                      function (e, n) {
                                        var o = e.CollectionGroupId,
                                          l = e.Id,
                                          c = e.SellOrder,
                                          d = e.AuctionOrder,
                                          v = e.AssetStatusId,
                                          m = e.FeatureName,
                                          _ = e.OwnerOwnQuantity,
                                          f = e.OwnerDisplayName,
                                          C = e.OnwerWalletAddressShort,
                                          h = e.IsCollectionEnabledBuy,
                                          w = e.Name,
                                          y = e.URI,
                                          S = e.PreviewImageURI,
                                          L = e.Liked,
                                          A = e.Store,
                                          k = e.AssetId,
                                          O = e.TokenId,
                                          I = e.ContractAddress,
                                          x = e.Owner,
                                          j = e.StoreId,
                                          P = e.AssetType;
                                        return r(
                                          "div",
                                          {
                                            key: l,
                                            staticClass:
                                              "col-lg-3 col-md-4 col-12 col-sm-6 mb-30",
                                          },
                                          [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-cart-wrap h-100 wrapAuction",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-img-action-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-img",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    I,
                                                                  tokenId: O,
                                                                  ownerAddress:
                                                                    x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              y
                                                                .slice(-4)
                                                                .toLowerCase() &&
                                                            ".mp4" !=
                                                              y
                                                                .slice(-4)
                                                                .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "inner",
                                                                      },
                                                                      [
                                                                        r(
                                                                          "img",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: S,
                                                                                alt: "",
                                                                                loading:
                                                                                  "lazy",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            y
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-video-wrapper",
                                                                  },
                                                                  [
                                                                    r(
                                                                      "video",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                          loop: "loop",
                                                                          muted:
                                                                            "muted",
                                                                        },
                                                                        domProps:
                                                                          {
                                                                            muted:
                                                                              !0,
                                                                          },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: t.uriWithStartTime(
                                                                                  y
                                                                                ),
                                                                                type: "video/mp4",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp3" ==
                                                            y
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
                                                                        "background-image":
                                                                          "url('assets/img/default-img-audio.jpg')",
                                                                      },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "audio",
                                                                      {
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        r(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: y,
                                                                                type: "audio/mp3",
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    m
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-badges product-badges-position product-badges-mrg",
                                                          },
                                                          [
                                                            r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "best",
                                                              },
                                                              [t._v(t._s(m))]
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-content-wrap",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-category",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name: "Storelist",
                                                                params: {
                                                                  storeid: j,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v(" " + t._s(A))]
                                                        ),
                                                        t._v(" "),
                                                        !A && f && f.length > 0
                                                          ? r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        x,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(f)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        A || f
                                                          ? t._e()
                                                          : r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "assetOwner",
                                                              },
                                                              [
                                                                r(
                                                                  "NuxtLink",
                                                                  {
                                                                    attrs: {
                                                                      to:
                                                                        "/Artist/" +
                                                                        x,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(C)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                        t._v(" "),
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "productOwerOwn float-right",
                                                          },
                                                          [
                                                            r("i", {
                                                              staticClass:
                                                                "fi-rr-user text-gray",
                                                            }),
                                                            t._v(" "),
                                                            r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-small text-gray",
                                                              },
                                                              [
                                                                t._v(
                                                                  " owner own " +
                                                                    t._s(_)
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    r("h2", [
                                                      r(
                                                        "a",
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(w))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    2 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    c.Price
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    c.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            t.PriceUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            c.PriceUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    3 == v
                                                      ? r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "product-price",
                                                          },
                                                          [
                                                            r("span", [
                                                              t._v(
                                                                t._s(
                                                                  Number(
                                                                    null ==
                                                                      d.CurrentBid
                                                                      ? d.StartBid
                                                                      : d.CurrentBid
                                                                  ).toLocaleString()
                                                                ) +
                                                                  " " +
                                                                  t._s(
                                                                    d.CurrencyCode
                                                                  )
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            d.BidUSD
                                                              ? r(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "usd-price",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "$" +
                                                                        t._s(
                                                                          Number(
                                                                            d.BidUSD
                                                                          ).toLocaleString()
                                                                        ) +
                                                                        " USD"
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        r(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: {
                                                                name: t.assetDetailsLink(
                                                                  o
                                                                ),
                                                                params: {
                                                                  contractAddress:
                                                                    I,
                                                                  tokenId: O,
                                                                  ownerAddress:
                                                                    x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v("Details")]
                                                        ),
                                                        t._v(
                                                          " \n                                                    "
                                                        ),
                                                        2 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          x.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.buyAsset(
                                                                        k,
                                                                        c.SellOrderId,
                                                                        w,
                                                                        y,
                                                                        I,
                                                                        O,
                                                                        P + "",
                                                                        x,
                                                                        c.Salt,
                                                                        c.Signature,
                                                                        c.Price,
                                                                        c.CurrencyCode,
                                                                        o
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [t._v("Buy")]
                                                            ),
                                                        t._v(" "),
                                                        3 != v ||
                                                        (null != h && 1 != h) ||
                                                        (t.account &&
                                                          x.toLowerCase() ==
                                                            t.account.toLowerCase())
                                                          ? t._e()
                                                          : r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-sm",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.bidAsset(
                                                                        t
                                                                          .featuredAuctionListing[
                                                                          n
                                                                        ]
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                                                        Bid\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "likeshare-wrapper",
                                                  },
                                                  [
                                                    r(
                                                      "div",
                                                      { staticClass: "row" },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-share",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "share action-btn hover-up",
                                                                    attrs: {
                                                                      "aria-label":
                                                                        "Share This",
                                                                      "data-bs-toggle":
                                                                        "modal",
                                                                      "data-bs-target":
                                                                        "#shareThiswModal",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.openShareModal(
                                                                            I,
                                                                            O,
                                                                            x
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._m(6, !0),
                                                                    t._v(
                                                                      " Share This"
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "only-like",
                                                              },
                                                              [
                                                                r(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "like",
                                                                    attrs: {
                                                                      href: "javascript:void(0)",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.likeAsset(
                                                                            k
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "span",
                                                                      {
                                                                        class:
                                                                          "like_" +
                                                                          k,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            L
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(
                                                                      " Likes"
                                                                    ),
                                                                    r(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "heart",
                                                                      },
                                                                      [
                                                                        r("i", {
                                                                          staticClass:
                                                                            "fa-heart",
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                k
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                k,
                                                                            ],
                                                                        }),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        );
                                      }
                                    ),
                                    0
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    )
                  : t._e(),
                t._v(" "),
                r(
                  "section",
                  {
                    staticClass:
                      "product-tabs section-padding position-relative wow fadeIn animated",
                  },
                  [
                    r("div", { staticClass: "container" }, [
                      t._m(7),
                      t._v(" "),
                      r("div", { staticClass: "tab-header" }, [
                        t._m(8),
                        t._v(" "),
                        r(
                          "a",
                          {
                            staticClass: "view-more d-none d-md-flex",
                            attrs: { href: "javascript:void(0)" },
                            on: { click: t.viewMore },
                          },
                          [
                            t._v("View More"),
                            r("i", {
                              staticClass: "fi-rs-angle-double-small-right",
                            }),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      r(
                        "div",
                        {
                          staticClass: "tab-content wow fadeIn animated",
                          attrs: { id: "myTabContent" },
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass: "tab-pane fade",
                              attrs: {
                                id: "tab-three",
                                role: "tabpanel",
                                "aria-labelledby": "tab-three",
                              },
                            },
                            [
                              r(
                                "div",
                                { staticClass: "row product-grid-4" },
                                t._l(
                                  t.featuredSellOrderListing,
                                  function (e, n) {
                                    var o = e.CollectionGroupId,
                                      l = e.Id,
                                      c = e.SellOrder,
                                      d = e.AuctionOrder,
                                      v = e.AssetStatusId,
                                      m = e.FeatureName,
                                      _ = e.OwnerOwnQuantity,
                                      f = e.OwnerDisplayName,
                                      C = e.OnwerWalletAddressShort,
                                      h = e.IsCollectionEnabledBuy,
                                      w = e.Name,
                                      y = e.URI,
                                      S = e.PreviewImageURI,
                                      L = e.Liked,
                                      A = e.Store,
                                      k = e.AssetId,
                                      O = e.TokenId,
                                      I = e.ContractAddress,
                                      x = e.Owner,
                                      j = e.StoreId,
                                      P = e.AssetType;
                                    return r(
                                      "div",
                                      {
                                        key: l,
                                        staticClass:
                                          "col-lg-3 col-md-4 col-12 col-sm-6 mb-30",
                                      },
                                      [
                                        r(
                                          "div",
                                          {
                                            staticClass:
                                              "product-cart-wrap h-100",
                                          },
                                          [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-img-action-wrap",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass: "product-img",
                                                  },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: t.assetDetailsLink(
                                                              o
                                                            ),
                                                            params: {
                                                              contractAddress:
                                                                I,
                                                              tokenId: O,
                                                              ownerAddress: x,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        ".mp3" !=
                                                          y
                                                            .slice(-4)
                                                            .toLowerCase() &&
                                                        ".mp4" !=
                                                          y
                                                            .slice(-4)
                                                            .toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-img-content",
                                                              },
                                                              [
                                                                r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "inner",
                                                                  },
                                                                  [
                                                                    r("img", {
                                                                      attrs: {
                                                                        src: S,
                                                                        alt: "",
                                                                        loading:
                                                                          "lazy",
                                                                      },
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp4" ==
                                                        y
                                                          .slice(-4)
                                                          .toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-video-wrapper",
                                                              },
                                                              [
                                                                r(
                                                                  "video",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                      loop: "loop",
                                                                      muted:
                                                                        "muted",
                                                                    },
                                                                    domProps: {
                                                                      muted: !0,
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: t.uriWithStartTime(
                                                                            y
                                                                          ),
                                                                          type: "video/mp4",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp3" ==
                                                        y
                                                          .slice(-4)
                                                          .toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-audio-wrapper",
                                                                staticStyle: {
                                                                  "background-image":
                                                                    "url('assets/img/default-img-audio.jpg')",
                                                                },
                                                              },
                                                              [
                                                                r(
                                                                  "audio",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: y,
                                                                          type: "audio/mp3",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                m
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-badges product-badges-position product-badges-mrg",
                                                      },
                                                      [
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass: "best",
                                                          },
                                                          [t._v(t._s(m))]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                            t._v(" "),
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-content-wrap",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-category",
                                                  },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: "Storelist",
                                                            params: {
                                                              storeid: j,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [t._v(" " + t._s(A))]
                                                    ),
                                                    t._v(" "),
                                                    !A && f && f.length > 0
                                                      ? r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            r(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    x,
                                                                },
                                                              },
                                                              [t._v(t._s(f))]
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    A || f
                                                      ? t._e()
                                                      : r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            r(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    x,
                                                                },
                                                              },
                                                              [t._v(t._s(C))]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                    t._v(" "),
                                                    r(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "productOwerOwn float-right",
                                                      },
                                                      [
                                                        r("i", {
                                                          staticClass:
                                                            "fi-rr-user text-gray",
                                                        }),
                                                        t._v(" "),
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "font-small text-gray",
                                                          },
                                                          [
                                                            t._v(
                                                              " owner own " +
                                                                t._s(_)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                r("h2", [
                                                  r(
                                                    "a",
                                                    { attrs: { href: "#" } },
                                                    [t._v(t._s(w))]
                                                  ),
                                                ]),
                                                t._v(" "),
                                                2 == v
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-price",
                                                      },
                                                      [
                                                        r("span", [
                                                          t._v(
                                                            t._s(
                                                              Number(
                                                                c.Price
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(
                                                                c.CurrencyCode
                                                              )
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        c.PriceUSD
                                                          ? r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "usd-price",
                                                              },
                                                              [
                                                                t._v(
                                                                  "$" +
                                                                    t._s(
                                                                      Number(
                                                                        c.PriceUSD
                                                                      ).toLocaleString()
                                                                    ) +
                                                                    " USD"
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                3 == v
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-price",
                                                      },
                                                      [
                                                        r("span", [
                                                          t._v(
                                                            t._s(
                                                              Number(
                                                                null ==
                                                                  d.CurrentBid
                                                                  ? d.StartBid
                                                                  : d.CurrentBid
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(
                                                                d.CurrencyCode
                                                              )
                                                          ),
                                                        ]),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  { staticClass: "cta mt-10" },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline btn-sm",
                                                        attrs: {
                                                          to: {
                                                            name: t.assetDetailsLink(
                                                              o
                                                            ),
                                                            params: {
                                                              contractAddress:
                                                                I,
                                                              tokenId: O,
                                                              ownerAddress: x,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [t._v("Details")]
                                                    ),
                                                    t._v(
                                                      " \n                                                    "
                                                    ),
                                                    2 != v ||
                                                    (null != h && 1 != h) ||
                                                    (t.account &&
                                                      x.toLowerCase() ==
                                                        t.account.toLowerCase())
                                                      ? t._e()
                                                      : r(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm",
                                                            attrs: {
                                                              href: "javascript:void(0)",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.buyAsset(
                                                                  k,
                                                                  c.SellOrderId,
                                                                  c.SellQuantity,
                                                                  w,
                                                                  y,
                                                                  I,
                                                                  O,
                                                                  P + "",
                                                                  x,
                                                                  c.Salt,
                                                                  c.Signature,
                                                                  c.Price,
                                                                  c.CurrencyCode,
                                                                  o
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v("Buy")]
                                                        ),
                                                    t._v(" "),
                                                    3 != v ||
                                                    (null != h && 1 != h) ||
                                                    (t.account &&
                                                      x.toLowerCase() ==
                                                        t.account.toLowerCase())
                                                      ? t._e()
                                                      : r(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm",
                                                            attrs: {
                                                              href: "javascript:void(0)",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.bidAsset(
                                                                  t
                                                                    .featuredSellOrderListing[
                                                                    n
                                                                  ]
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                        Bid\n                                                    "
                                                            ),
                                                          ]
                                                        ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "likeshare-wrapper",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-share",
                                                          },
                                                          [
                                                            r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "share action-btn hover-up",
                                                                attrs: {
                                                                  "aria-label":
                                                                    "Share This",
                                                                  "data-bs-toggle":
                                                                    "modal",
                                                                  "data-bs-target":
                                                                    "#shareThiswModal",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.openShareModal(
                                                                        I,
                                                                        O,
                                                                        x
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._m(9, !0),
                                                                t._v(
                                                                  " Share This"
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-like",
                                                          },
                                                          [
                                                            r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "like",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.likeAsset(
                                                                        k
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                r(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "like_" +
                                                                      k,
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(L)
                                                                    ),
                                                                  ]
                                                                ),
                                                                t._v(" Likes"),
                                                                r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "heart",
                                                                  },
                                                                  [
                                                                    r("i", {
                                                                      staticClass:
                                                                        "fa-heart",
                                                                      class: [
                                                                        t.likedAssetList.indexOf(
                                                                          k
                                                                        ) >= 0
                                                                          ? "fas selected-heart"
                                                                          : "far  border-heart",
                                                                        "heart_" +
                                                                          k,
                                                                      ],
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    );
                                  }
                                ),
                                0
                              ),
                            ]
                          ),
                          t._v(" "),
                          r(
                            "div",
                            {
                              staticClass: "tab-pane fade  show active",
                              attrs: {
                                id: "tab-one",
                                role: "tabpanel",
                                "aria-labelledby": "tab-one",
                              },
                            },
                            [
                              r(
                                "div",
                                { staticClass: "row product-grid-4" },
                                t._l(
                                  t.popularSellOrderListing,
                                  function (e, n) {
                                    var o = e.CollectionGroupId,
                                      l = e.Id,
                                      c = e.SellOrder,
                                      d = e.AuctionOrder,
                                      v = e.AssetStatusId,
                                      m = e.FeatureName,
                                      _ = e.OwnerOwnQuantity,
                                      f = e.OwnerDisplayName,
                                      C = e.OnwerWalletAddressShort,
                                      h = e.IsCollectionEnabledBuy,
                                      w = e.Name,
                                      y = e.URI,
                                      S = e.PreviewImageURI,
                                      L = e.Liked,
                                      A = e.Store,
                                      k = e.AssetId,
                                      O = e.TokenId,
                                      I = e.ContractAddress,
                                      x = e.Owner,
                                      j = e.StoreId,
                                      P = e.AssetType;
                                    return r(
                                      "div",
                                      {
                                        key: l,
                                        staticClass:
                                          "col-lg-3 col-md-4 col-12 col-sm-6 mb-30",
                                      },
                                      [
                                        r(
                                          "div",
                                          {
                                            staticClass:
                                              "product-cart-wrap h-100",
                                          },
                                          [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-img-action-wrap",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass: "product-img",
                                                  },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: t.assetDetailsLink(
                                                              o
                                                            ),
                                                            params: {
                                                              contractAddress:
                                                                I,
                                                              tokenId: O,
                                                              ownerAddress: x,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        ".mp3" !=
                                                          y
                                                            .slice(-4)
                                                            .toLowerCase() &&
                                                        ".mp4" !=
                                                          y
                                                            .slice(-4)
                                                            .toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-img-content",
                                                              },
                                                              [
                                                                r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "inner",
                                                                  },
                                                                  [
                                                                    r("img", {
                                                                      attrs: {
                                                                        src: S,
                                                                        alt: "",
                                                                        loading:
                                                                          "lazy",
                                                                      },
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp4" ==
                                                        y
                                                          .slice(-4)
                                                          .toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-video-wrapper",
                                                              },
                                                              [
                                                                r(
                                                                  "video",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                      loop: "loop",
                                                                      muted:
                                                                        "muted",
                                                                    },
                                                                    domProps: {
                                                                      muted: !0,
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: t.uriWithStartTime(
                                                                            y
                                                                          ),
                                                                          type: "video/mp4",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp3" ==
                                                        y
                                                          .slice(-4)
                                                          .toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-audio-wrapper",
                                                                staticStyle: {
                                                                  "background-image":
                                                                    "url('assets/img/default-img-audio.jpg')",
                                                                },
                                                              },
                                                              [
                                                                r(
                                                                  "audio",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: y,
                                                                          type: "audio/mp3",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                m
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-badges product-badges-position product-badges-mrg",
                                                      },
                                                      [
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass: "best",
                                                          },
                                                          [t._v(t._s(m))]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                            t._v(" "),
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-content-wrap",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-category",
                                                  },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: "Storelist",
                                                            params: {
                                                              storeid: j,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [t._v(" " + t._s(A))]
                                                    ),
                                                    t._v(" "),
                                                    !A && f && f.length > 0
                                                      ? r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            r(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    x,
                                                                },
                                                              },
                                                              [t._v(t._s(f))]
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    A || f
                                                      ? t._e()
                                                      : r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            r(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    x,
                                                                },
                                                              },
                                                              [t._v(t._s(C))]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                    t._v(" "),
                                                    r(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "productOwerOwn float-right",
                                                      },
                                                      [
                                                        r("i", {
                                                          staticClass:
                                                            "fi-rr-user text-gray",
                                                        }),
                                                        t._v(" "),
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "font-small text-gray",
                                                          },
                                                          [
                                                            t._v(
                                                              " owner own " +
                                                                t._s(_)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                r("h2", [
                                                  r(
                                                    "a",
                                                    { attrs: { href: "#" } },
                                                    [t._v(t._s(w))]
                                                  ),
                                                ]),
                                                t._v(" "),
                                                2 == v
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-price",
                                                      },
                                                      [
                                                        r("span", [
                                                          t._v(
                                                            t._s(
                                                              Number(
                                                                c.Price
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(
                                                                c.CurrencyCode
                                                              )
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        c.PriceUSD
                                                          ? r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "usd-price",
                                                              },
                                                              [
                                                                t._v(
                                                                  "$" +
                                                                    t._s(
                                                                      Number(
                                                                        c.PriceUSD
                                                                      ).toLocaleString()
                                                                    ) +
                                                                    " USD"
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                3 == v
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-price",
                                                      },
                                                      [
                                                        r("span", [
                                                          t._v(
                                                            t._s(
                                                              Number(
                                                                null ==
                                                                  d.CurrentBid
                                                                  ? d.StartBid
                                                                  : d.CurrentBid
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(
                                                                d.CurrencyCode
                                                              )
                                                          ),
                                                        ]),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  { staticClass: "cta mt-10" },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline btn-sm",
                                                        attrs: {
                                                          to: {
                                                            name: t.assetDetailsLink(
                                                              o
                                                            ),
                                                            params: {
                                                              contractAddress:
                                                                I,
                                                              tokenId: O,
                                                              ownerAddress: x,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [t._v("Details")]
                                                    ),
                                                    t._v(
                                                      " \n                                                    "
                                                    ),
                                                    2 != v ||
                                                    (null != h && 1 != h) ||
                                                    (t.account &&
                                                      x.toLowerCase() ==
                                                        t.account.toLowerCase())
                                                      ? t._e()
                                                      : r(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm",
                                                            attrs: {
                                                              href: "javascript:void(0)",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.buyAsset(
                                                                  k,
                                                                  c.Id,
                                                                  c.SellQuantity,
                                                                  w,
                                                                  y,
                                                                  I,
                                                                  O,
                                                                  P + "",
                                                                  x,
                                                                  c.Salt,
                                                                  c.Signature,
                                                                  c.Price,
                                                                  c.CurrencyCode,
                                                                  o
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v("Buy")]
                                                        ),
                                                    t._v(" "),
                                                    3 != v ||
                                                    (null != h && 1 != h) ||
                                                    (t.account &&
                                                      x.toLowerCase() ==
                                                        t.account.toLowerCase())
                                                      ? t._e()
                                                      : r(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm",
                                                            attrs: {
                                                              href: "javascript:void(0)",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.bidAsset(
                                                                  t
                                                                    .popularSellOrderListing[
                                                                    n
                                                                  ]
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                        Bid\n                                                    "
                                                            ),
                                                          ]
                                                        ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "likeshare-wrapper",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-share",
                                                          },
                                                          [
                                                            r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "share action-btn hover-up",
                                                                attrs: {
                                                                  "aria-label":
                                                                    "Share This",
                                                                  "data-bs-toggle":
                                                                    "modal",
                                                                  "data-bs-target":
                                                                    "#shareThiswModal",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.openShareModal(
                                                                        I,
                                                                        O,
                                                                        x
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._m(10, !0),
                                                                t._v(
                                                                  " Share This"
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-like",
                                                          },
                                                          [
                                                            r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "like",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.likeAsset(
                                                                        k
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                r(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "like_" +
                                                                      k,
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(L)
                                                                    ),
                                                                  ]
                                                                ),
                                                                t._v(" Likes"),
                                                                r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "heart",
                                                                  },
                                                                  [
                                                                    r("i", {
                                                                      staticClass:
                                                                        "fa-heart",
                                                                      class: [
                                                                        t.likedAssetList.indexOf(
                                                                          k
                                                                        ) >= 0
                                                                          ? "fas selected-heart"
                                                                          : "far  border-heart",
                                                                        "heart_" +
                                                                          k,
                                                                      ],
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    );
                                  }
                                ),
                                0
                              ),
                            ]
                          ),
                          t._v(" "),
                          r(
                            "div",
                            {
                              staticClass: "tab-pane fade",
                              attrs: {
                                id: "tab-two",
                                role: "tabpanel",
                                "aria-labelledby": "tab-two",
                              },
                            },
                            [
                              r(
                                "div",
                                { staticClass: "row product-grid-4" },
                                t._l(
                                  t.newAddedSellOrderListing,
                                  function (e, n) {
                                    var o = e.CollectionGroupId,
                                      l = e.Id,
                                      c = e.SellOrder,
                                      d = e.AuctionOrder,
                                      v = e.AssetStatusId,
                                      m = e.FeatureName,
                                      _ = e.OwnerOwnQuantity,
                                      f = e.OwnerDisplayName,
                                      C = e.OnwerWalletAddressShort,
                                      h = e.IsCollectionEnabledBuy,
                                      w = e.OrderId,
                                      y = e.Name,
                                      S = e.URI,
                                      L = e.PreviewImageURI,
                                      A = e.Liked,
                                      k = e.Store,
                                      O = e.AssetId,
                                      I = e.TokenId,
                                      x = e.ContractAddress,
                                      j = e.Owner,
                                      P = e.StoreId,
                                      N = e.AssetType;
                                    return r(
                                      "div",
                                      {
                                        key: l,
                                        staticClass:
                                          "col-lg-3  col-md-4 col-12 col-sm-6 mb-30",
                                      },
                                      [
                                        r(
                                          "div",
                                          {
                                            staticClass:
                                              "product-cart-wrap h-100",
                                          },
                                          [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-img-action-wrap",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass: "product-img",
                                                  },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: t.assetDetailsLink(
                                                              o
                                                            ),
                                                            params: {
                                                              contractAddress:
                                                                x,
                                                              tokenId: I,
                                                              ownerAddress: j,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        ".mp3" !=
                                                          S.slice(
                                                            -4
                                                          ).toLowerCase() &&
                                                        ".mp4" !=
                                                          S.slice(
                                                            -4
                                                          ).toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-img-content",
                                                              },
                                                              [
                                                                r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "inner",
                                                                  },
                                                                  [
                                                                    r("img", {
                                                                      attrs: {
                                                                        src: L,
                                                                        alt: "",
                                                                        loading:
                                                                          "lazy",
                                                                      },
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp4" ==
                                                        S.slice(
                                                          -4
                                                        ).toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-video-wrapper",
                                                              },
                                                              [
                                                                r(
                                                                  "video",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                      loop: "loop",
                                                                      muted:
                                                                        "muted",
                                                                    },
                                                                    domProps: {
                                                                      muted: !0,
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: t.uriWithStartTime(
                                                                            S
                                                                          ),
                                                                          type: "video/mp4",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                            HTML5 video tag is not supported in your browser\n                                                        "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp3" ==
                                                        S.slice(
                                                          -4
                                                        ).toLowerCase()
                                                          ? r(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-audio-wrapper",
                                                                staticStyle: {
                                                                  "background-image":
                                                                    "url('assets/img/default-img-audio.jpg')",
                                                                },
                                                              },
                                                              [
                                                                r(
                                                                  "audio",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                    },
                                                                  },
                                                                  [
                                                                    r(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: S,
                                                                          type: "audio/mp3",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                            Your browser does not support the audio element.\n                                                        "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            m
                                              ? r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-badges product-badges-position product-badges-mrg",
                                                  },
                                                  [
                                                    r(
                                                      "span",
                                                      { staticClass: "best" },
                                                      [t._v(t._s(m))]
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-content-wrap",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-category",
                                                  },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: "Storelist",
                                                            params: {
                                                              storeid: P,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [t._v(" " + t._s(k))]
                                                    ),
                                                    t._v(" "),
                                                    !k && f && f.length > 0
                                                      ? r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            r(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    j,
                                                                },
                                                              },
                                                              [t._v(t._s(f))]
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    k || f
                                                      ? t._e()
                                                      : r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            r(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    j,
                                                                },
                                                              },
                                                              [t._v(t._s(C))]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                    t._v(" "),
                                                    r(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "productOwerOwn float-right",
                                                      },
                                                      [
                                                        r("i", {
                                                          staticClass:
                                                            "fi-rr-user text-gray",
                                                        }),
                                                        t._v(" "),
                                                        r(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "font-small text-gray",
                                                          },
                                                          [
                                                            t._v(
                                                              " owner own " +
                                                                t._s(_)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                r("h2", [
                                                  r(
                                                    "a",
                                                    { attrs: { href: "#" } },
                                                    [t._v(t._s(y))]
                                                  ),
                                                ]),
                                                t._v(" "),
                                                2 == v
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-price",
                                                      },
                                                      [
                                                        r("span", [
                                                          t._v(
                                                            t._s(
                                                              Number(
                                                                c.Price
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(
                                                                c.CurrencyCode
                                                              )
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        c.PriceUSD
                                                          ? r(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "usd-price",
                                                              },
                                                              [
                                                                t._v(
                                                                  "$" +
                                                                    t._s(
                                                                      Number(
                                                                        c.PriceUSD
                                                                      ).toLocaleString()
                                                                    ) +
                                                                    " USD"
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                3 == v
                                                  ? r(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-price",
                                                      },
                                                      [
                                                        r("span", [
                                                          t._v(
                                                            t._s(
                                                              Number(
                                                                null ==
                                                                  d.CurrentBid
                                                                  ? d.StartBid
                                                                  : d.CurrentBid
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(
                                                                d.CurrencyCode
                                                              )
                                                          ),
                                                        ]),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                r(
                                                  "div",
                                                  { staticClass: "cta mt-10" },
                                                  [
                                                    r(
                                                      "nuxt-link",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline btn-sm",
                                                        attrs: {
                                                          to: {
                                                            name: t.assetDetailsLink(
                                                              o
                                                            ),
                                                            params: {
                                                              contractAddress:
                                                                x,
                                                              tokenId: I,
                                                              ownerAddress: j,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [t._v("Details")]
                                                    ),
                                                    t._v(
                                                      " \n                                                "
                                                    ),
                                                    2 != v ||
                                                    (null != h && 1 != h) ||
                                                    (t.account &&
                                                      j.toLowerCase() ==
                                                        t.account.toLowerCase())
                                                      ? t._e()
                                                      : r(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm",
                                                            attrs: {
                                                              href: "javascript:void(0)",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.buyAsset(
                                                                  O,
                                                                  w,
                                                                  c.SellQuantity,
                                                                  y,
                                                                  S,
                                                                  x,
                                                                  I,
                                                                  N + "",
                                                                  j,
                                                                  c.Salt,
                                                                  c.Signature,
                                                                  c.Price,
                                                                  c.CurrencyCode,
                                                                  o
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                    Buy\n                                                "
                                                            ),
                                                          ]
                                                        ),
                                                    t._v(" "),
                                                    3 != v ||
                                                    (null != h && 1 != h) ||
                                                    (t.account &&
                                                      j.toLowerCase() ==
                                                        t.account.toLowerCase())
                                                      ? t._e()
                                                      : r(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm",
                                                            attrs: {
                                                              href: "javascript:void(0)",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.bidAsset(
                                                                  t
                                                                    .newAddedSellOrderListing[
                                                                    n
                                                                  ]
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                    Bid\n                                                "
                                                            ),
                                                          ]
                                                        ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "likeshare-wrapper",
                                              },
                                              [
                                                r(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-share",
                                                          },
                                                          [
                                                            r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "share action-btn hover-up",
                                                                attrs: {
                                                                  "aria-label":
                                                                    "Share This",
                                                                  "data-bs-toggle":
                                                                    "modal",
                                                                  "data-bs-target":
                                                                    "#shareThiswModal",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.openShareModal(
                                                                        x,
                                                                        I,
                                                                        j
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._m(11, !0),
                                                                t._v(
                                                                  " Share This"
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    r(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        r(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-like",
                                                          },
                                                          [
                                                            r(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "like",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.likeAsset(
                                                                        O
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                r(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "like_" +
                                                                      O,
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(A)
                                                                    ),
                                                                  ]
                                                                ),
                                                                t._v(" Likes"),
                                                                r(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "heart",
                                                                  },
                                                                  [
                                                                    r("i", {
                                                                      staticClass:
                                                                        "fa-heart",
                                                                      class: [
                                                                        t.likedAssetList.indexOf(
                                                                          O
                                                                        ) >= 0
                                                                          ? "fas selected-heart"
                                                                          : "far  border-heart",
                                                                        "heart_" +
                                                                          O,
                                                                      ],
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    );
                                  }
                                ),
                                0
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
                t._v(" "),
                t._m(12),
                t._v(" "),
                r(
                  "section",
                  {
                    staticClass:
                      "popular-categories section-padding mt-15 mb-55",
                  },
                  [
                    r("div", { staticClass: "container wow fadeIn animated" }, [
                      r("h3", { staticClass: "section-title mb-20" }, [
                        t._v("Popular NFT"),
                      ]),
                      t._v(" "),
                      r(
                        "div",
                        {
                          staticClass:
                            "carausel-6-columns-cover position-relative",
                        },
                        [
                          r("div", {
                            staticClass:
                              "slider-arrow slider-arrow-2 carausel-6-columns-arrow",
                            attrs: { id: "carausel-6-columns-arrows" },
                          }),
                          t._v(" "),
                          r(
                            "div",
                            {
                              staticClass: "carausel-6-columns",
                              attrs: { id: "carausel-6-columns" },
                            },
                            t._l(t.popularListing, function (e) {
                              var n = e.CollectionGroupId,
                                o = e.Id,
                                l = e.Name,
                                c = e.URI,
                                d = e.PreviewImageURI,
                                v = e.ContractAddress,
                                m = e.TokenId,
                                _ = e.Owner;
                              return r(
                                "div",
                                { key: o, staticClass: "card-1" },
                                [
                                  r(
                                    "div",
                                    { staticClass: "thumb-category-wrapper" },
                                    [
                                      r(
                                        "nuxt-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: t.assetDetailsLink(n),
                                              params: {
                                                contractAddress: v,
                                                tokenId: m,
                                                ownerAddress: _,
                                              },
                                            },
                                          },
                                        },
                                        [
                                          ".mp3" != c.slice(-4).toLowerCase() &&
                                          ".mp4" != c.slice(-4).toLowerCase()
                                            ? r(
                                                "div",
                                                {
                                                  staticClass: "thumb-category",
                                                },
                                                [
                                                  r("img", {
                                                    attrs: {
                                                      src: d,
                                                      alt: "",
                                                      loading: "lazy",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : t._e(),
                                          t._v(" "),
                                          ".mp4" == c.slice(-4).toLowerCase()
                                            ? r(
                                                "div",
                                                {
                                                  staticClass: "thumb-category",
                                                },
                                                [
                                                  r(
                                                    "video",
                                                    { attrs: { controls: "" } },
                                                    [
                                                      r("source", {
                                                        attrs: {
                                                          src: t.uriWithStartTime(
                                                            c
                                                          ),
                                                          type: "video/mp4",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          t._v(" "),
                                          ".mp3" == c.slice(-4).toLowerCase()
                                            ? r(
                                                "div",
                                                {
                                                  staticClass:
                                                    "thumb-category pl-10 pr-10",
                                                  staticStyle: {
                                                    "background-image":
                                                      "url('assets/img/default-img-audio.jpg')",
                                                  },
                                                },
                                                [
                                                  r(
                                                    "audio",
                                                    { attrs: { controls: "" } },
                                                    [
                                                      r("source", {
                                                        attrs: {
                                                          src: c,
                                                          type: "audio/mp3",
                                                        },
                                                      }),
                                                      t._v(
                                                        "\n                                        Your browser does not support the audio element.\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  r(
                                    "h5",
                                    [
                                      r(
                                        "nuxt-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: t.assetDetailsLink(n),
                                              params: {
                                                contractAddress: v,
                                                tokenId: m,
                                                ownerAddress: _,
                                              },
                                            },
                                          },
                                        },
                                        [t._v(t._s(l) + " ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
                t._v(" "),
                r("ShareAsset"),
                t._v(" "),
                r("router-view"),
                t._v(" "),
                r("ShareAsset"),
                t._v(" "),
                r("BuyNFT", { ref: "buyAsset" }),
                t._v(" "),
                r("BidNFT", { ref: "bidAsset" }),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "section",
                { staticClass: "home-slider position-relative" },
                [
                  r(
                    "div",
                    {
                      staticClass:
                        "hero-slider-1 dot-style-1 dot-style-1-position-1 countdown",
                      staticStyle: {
                        "background-image":
                          "url(assets/img/Home_Banner_1-Layer_1.png)",
                      },
                    },
                    [
                      r(
                        "div",
                        {
                          staticClass:
                            "single-hero-slider single-animation-wrap",
                          staticStyle: {
                            height: "500px",
                            "background-image":
                              "url(assets/img/Home_Banner_1-Layer_1.png)",
                            "background-position": "center",
                            display: "block !important",
                          },
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass:
                                "container d-none d-md-block d-lg-block",
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center slider-animated-1",
                                  staticStyle: {
                                    "align-items": "baseline !important",
                                  },
                                },
                                [
                                  r(
                                    "div",
                                    { staticClass: "col-lg-5 col-md-6" },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "single-slider-img single-slider-img-1",
                                        },
                                        [
                                          r("img", {
                                            staticClass: "animated slider-1-1",
                                            attrs: {
                                              src: "assets/img/Home_Banner_1-Layer_2_cropped.png",
                                              alt: "",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  r(
                                    "div",
                                    { staticClass: "col-lg-6 col-md-6" },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass: "hero-slider-content-2",
                                        },
                                        [
                                          r("img", {
                                            staticClass: "animated",
                                            staticStyle: {
                                              "margin-bottom": "140px",
                                            },
                                            attrs: {
                                              src: "assets/img/Home_Banner_1-Layer_combined.png",
                                              alt: "",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  r("div", {
                                    staticClass: "col-lg-1 col-md-1",
                                  }),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          r(
                            "div",
                            {
                              staticClass:
                                "container d-sm-block d-md-none d-lg-none;",
                              staticStyle: { height: "510px" },
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center slider-animated-1",
                                  staticStyle: { height: "510px" },
                                },
                                [
                                  r(
                                    "div",
                                    { staticClass: "col-lg-6 col-md-6" },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "hero-slider-content-2 text-center",
                                          staticStyle: {
                                            "margin-bottom": "250px",
                                          },
                                        },
                                        [
                                          r("img", {
                                            staticClass: "animated",
                                            staticStyle: {
                                              margin: "auto",
                                              height: "50px",
                                            },
                                            attrs: {
                                              src: "assets/img/Home Banner 1-Layer 3.png",
                                              alt: "",
                                            },
                                          }),
                                          t._v(" "),
                                          r("img", {
                                            staticClass: "animated",
                                            staticStyle: {
                                              margin: "auto",
                                              height: "60px",
                                            },
                                            attrs: {
                                              src: "assets/img/Home Banner 1-Layer 4.png",
                                              alt: "",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "col-lg-6 col-md-6 text-center",
                                    },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticStyle: {
                                            bottom: "0",
                                            position: "absolute",
                                            "margin-left": "50px",
                                          },
                                        },
                                        [
                                          r("img", {
                                            staticClass: "animated slider-1-1",
                                            staticStyle: {
                                              bottom: "0",
                                              "margin-right": "0",
                                            },
                                            attrs: {
                                              src: "assets/img/Home_Banner_1-Layer_2_cropped.png",
                                              alt: "",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      r(
                        "div",
                        {
                          staticClass:
                            "single-hero-slider single-animation-wrap",
                          staticStyle: {
                            height: "500px",
                            "background-image":
                              "url(assets/img/Home_Banner_3_1.jpg)",
                            "background-position": "center",
                            display: "block !important",
                          },
                        },
                        [
                          r(
                            "a",
                            {
                              attrs: { href: "#" },
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass:
                                    "container d-none d-md-block d-lg-block",
                                },
                                [
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "row align-items-center slider-animated-1",
                                      staticStyle: {
                                        "align-items": "baseline !important",
                                      },
                                    },
                                    [
                                      r(
                                        "div",
                                        { staticClass: "col-lg-12 col-md-12" },
                                        [
                                          r("img", {
                                            staticClass: "animated",
                                            staticStyle: {
                                              height: "500px",
                                              "object-fit": "cover",
                                              position: "absolute",
                                              left: "0",
                                              right: "0",
                                              bottom: "0",
                                              display: "block",
                                              overflow: "hidden",
                                            },
                                            attrs: {
                                              src: "assets/img/Home Banner 3 - 2.png",
                                              alt: "",
                                            },
                                          }),
                                          t._v(" "),
                                          r("img", {
                                            staticClass: "animated",
                                            staticStyle: {
                                              height: "500px",
                                              "object-fit": "cover",
                                              position: "absolute",
                                              left: "0",
                                              right: "0",
                                              bottom: "0",
                                              display: "block",
                                              overflow: "hidden",
                                            },
                                            attrs: {
                                              src: "assets/img/Home Banner 3 - 3.png",
                                              alt: "",
                                            },
                                          }),
                                          t._v(" "),
                                          r("img", {
                                            staticClass: "animated",
                                            staticStyle: {
                                              height: "500px",
                                              "object-fit": "cover",
                                              position: "absolute",
                                              left: "0",
                                              right: "0",
                                              bottom: "0",
                                              display: "block",
                                              overflow: "hidden",
                                            },
                                            attrs: {
                                              src: "assets/img/Home Banner 3 - 4.png",
                                              alt: "",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              r(
                                "div",
                                {
                                  staticClass:
                                    "container d-sm-block d-md-none d-lg-none;",
                                  staticStyle: { height: "510px" },
                                },
                                [
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "row align-items-center slider-animated-1",
                                      staticStyle: { height: "510px" },
                                    },
                                    [
                                      r(
                                        "div",
                                        { staticClass: "col-lg-6 col-md-6" },
                                        [
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "hero-slider-content-2",
                                            },
                                            [
                                              r("img", {
                                                staticClass: "animated",
                                                staticStyle: {
                                                  "margin-bottom": "0",
                                                },
                                                attrs: {
                                                  src: "assets/img/Home_Banner_3_4.png",
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 text-center",
                                        },
                                        [
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "single-slider-img single-slider-img-1",
                                            },
                                            [
                                              r("img", {
                                                staticClass:
                                                  "animated slider-1-1",
                                                staticStyle: {
                                                  bottom: "0",
                                                  "margin-right": "0",
                                                },
                                                attrs: {
                                                  src: "assets/img/Home_Banner_3_2.png",
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      r(
                        "div",
                        {
                          staticClass:
                            "single-hero-slider single-animation-wrap",
                          staticStyle: {
                            height: "500px",
                            "background-image":
                              "url(assets/img/Home_Banner_4_1.jpg)",
                            "background-position": "center",
                            display: "block !important",
                          },
                        },
                        [
                          r(
                            "a",
                            {
                              attrs: {
                                href: "https://docs.google.com/forms/d/e/1FAIpQLSdBk6gKvXXfJ2T-0_5kE1Xn-GqyWONcoR6sABdGdbMqXnMGzA/viewform",
                              },
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass:
                                    "container d-none d-md-block d-lg-block",
                                },
                                [
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "row align-items-center slider-animated-1",
                                      staticStyle: {
                                        "align-items": "baseline !important",
                                      },
                                    },
                                    [
                                      r(
                                        "div",
                                        { staticClass: "col-lg-12 col-md-12" },
                                        [
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "hero-slider-content-2",
                                            },
                                            [
                                              r("img", {
                                                staticClass: "animated",
                                                staticStyle: {
                                                  height: "500px",
                                                  "object-fit": "cover",
                                                  position: "absolute",
                                                  left: "0",
                                                  right: "0",
                                                  bottom: "0",
                                                  display: "block",
                                                  overflow: "hidden",
                                                },
                                                attrs: {
                                                  src: "assets/img/Home Banner 4 -2.png",
                                                  alt: "",
                                                },
                                              }),
                                              t._v(" "),
                                              r("img", {
                                                staticClass: "animated",
                                                staticStyle: {
                                                  height: "500px",
                                                  "object-fit": "cover",
                                                  position: "absolute",
                                                  left: "0",
                                                  right: "0",
                                                  bottom: "0",
                                                  display: "block",
                                                  overflow: "hidden",
                                                },
                                                attrs: {
                                                  src: "assets/img/Home Banner 4 -3.png",
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              r(
                                "div",
                                {
                                  staticClass:
                                    "container d-sm-block d-md-none d-lg-none;",
                                  staticStyle: { height: "510px" },
                                },
                                [
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "row align-items-center slider-animated-1",
                                      staticStyle: { height: "510px" },
                                    },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 text-center",
                                        },
                                        [
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "hero-slider-content-2 text-center",
                                            },
                                            [
                                              r("img", {
                                                staticClass: "animated",
                                                staticStyle: {
                                                  "margin-bottom": "0",
                                                },
                                                attrs: {
                                                  src: "assets/img/Home_Banner_4_2_2.png",
                                                  alt: "",
                                                },
                                              }),
                                              t._v(" "),
                                              r("img", {
                                                staticClass: "animated",
                                                staticStyle: {
                                                  margin: "auto",
                                                  height: "50px",
                                                },
                                                attrs: {
                                                  src: "assets/img/Home Banner 1-Layer 4.png",
                                                  alt: "",
                                                },
                                              }),
                                              t._v(" "),
                                              r("img", {
                                                staticClass: "animated",
                                                staticStyle: {
                                                  "margin-bottom": "0",
                                                },
                                                attrs: {
                                                  src: "assets/img/Home_Banner_4_2_3.png",
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 text-center",
                                        },
                                        [
                                          r("div", [
                                            r("img", {
                                              staticClass:
                                                "animated slider-1-1",
                                              staticStyle: { bottom: "0" },
                                              attrs: {
                                                src: "assets/img/Home_Banner_4_3.png",
                                                alt: "",
                                              },
                                            }),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "h2",
                {
                  staticClass: "section-title mb-20",
                  staticStyle: { "text-align": "center" },
                },
                [r("i", { staticClass: "fas fa-gavel" }), t._v(" Auction")]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "ul",
                {
                  staticClass: "nav nav-tabs",
                  attrs: { id: "myTab", role: "tablist" },
                },
                [
                  r(
                    "li",
                    {
                      staticClass: "nav-item mt-10",
                      attrs: { role: "presentation" },
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "nav-link active",
                          attrs: {
                            id: "nav-tab-one",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#tab-oneAuction",
                            type: "button",
                            role: "tab",
                            "aria-controls": "tab-one",
                            "aria-selected": "true",
                          },
                        },
                        [t._v("Popular")]
                      ),
                    ]
                  ),
                  t._v(" "),
                  r(
                    "li",
                    {
                      staticClass: "nav-item mt-10",
                      attrs: { role: "presentation" },
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            id: "nav-tab-two",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#tab-twoAuction",
                            type: "button",
                            role: "tab",
                            "aria-controls": "tab-two",
                            "aria-selected": "false",
                          },
                        },
                        [t._v("New added")]
                      ),
                    ]
                  ),
                  t._v(" "),
                  r(
                    "li",
                    {
                      staticClass: "nav-item mt-10",
                      attrs: { role: "presentation" },
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            id: "nav-tab-three",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#tab-threeAuction",
                            type: "button",
                            role: "tab",
                            "aria-controls": "tab-one",
                            "aria-selected": "true",
                          },
                        },
                        [t._v("Featured")]
                      ),
                    ]
                  ),
                  t._v(" "),
                  r(
                    "li",
                    {
                      staticClass: "nav-item mt-10",
                      attrs: { role: "presentation" },
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            id: "nav-tab-four",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#tab-fourAuction",
                            type: "button",
                            role: "tab",
                            "aria-controls": "tab-one",
                            "aria-selected": "true",
                          },
                        },
                        [t._v("Upcoming")]
                      ),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "h2",
                {
                  staticClass: "section-title mb-20",
                  staticStyle: { "text-align": "center" },
                },
                [r("i", { staticClass: "fas fa-tag" }), t._v(" Sales")]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "ul",
                {
                  staticClass: "nav nav-tabs",
                  attrs: { id: "myTab", role: "tablist" },
                },
                [
                  r(
                    "li",
                    {
                      staticClass: "nav-item",
                      attrs: { role: "presentation" },
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "nav-link active",
                          attrs: {
                            id: "nav-tab-one",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#tab-one",
                            type: "button",
                            role: "tab",
                            "aria-controls": "tab-one",
                            "aria-selected": "true",
                          },
                        },
                        [t._v("Popular")]
                      ),
                    ]
                  ),
                  t._v(" "),
                  r(
                    "li",
                    {
                      staticClass: "nav-item",
                      attrs: { role: "presentation" },
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            id: "nav-tab-two",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#tab-two",
                            type: "button",
                            role: "tab",
                            "aria-controls": "tab-two",
                            "aria-selected": "false",
                          },
                        },
                        [t._v("New added")]
                      ),
                    ]
                  ),
                  t._v(" "),
                  r(
                    "li",
                    {
                      staticClass: "nav-item",
                      attrs: { role: "presentation" },
                    },
                    [
                      r(
                        "button",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            id: "nav-tab-three",
                            "data-bs-toggle": "tab",
                            "data-bs-target": "#tab-three",
                            type: "button",
                            role: "tab",
                            "aria-controls": "tab-one",
                            "aria-selected": "true",
                          },
                        },
                        [t._v("Featured")]
                      ),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "section",
                { staticClass: "banner-2 section-padding pb-0" },
                [
                  r(
                    "div",
                    {
                      staticClass:
                        "hero-slider-2 dot-style-1 dot-style-1-position-1",
                    },
                    [
                      r(
                        "div",
                        {
                          staticClass:
                            "single-hero-slider single-animation-wrap",
                        },

                        [
                          r("div", { staticClass: "container" }, [
                            r(
                              "div",
                              {
                                staticClass:
                                  "banner-img banner-big wow fadeIn animated f-none",
                              },
                              [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://docs.google.com/forms/d/e/1FAIpQLSdBk6gKvXXfJ2T-0_5kE1Xn-GqyWONcoR6sABdGdbMqXnMGzA/viewform",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    r("img", {
                                      staticClass: "bottomBanner",
                                      staticStyle: { "min-height": "0px" },
                                      attrs: {
                                        src: "assets/img/1320_x_300_btm_banner_3.jpg",
                                        alt: "",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                r("div", {
                                  staticClass: "banner-text d-md-block d-none",
                                }),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  t._v(" "),
                  r("div", { staticClass: "slider-arrow hero-slider-2-arrow" }),
                ]
              );
            },
          ],
          !1,
          null,
          "fa11d8de",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        ShareAsset: r(1188).default,
        BuyNFT: r(1231).default,
        BidNFT: r(1233).default,
      });
    },
  },
]);
