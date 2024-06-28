// notification
(() => {
    "use strict";
    var e = {
            736: (e, t, n) => {
                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function r(e) {
                    return (
                        (r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  }),
                        r(e)
                    );
                }
                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t &&
                            (a = a.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, a);
                    }
                    return n;
                }
                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? o(Object(n), !0).forEach(function (t) {
                                  a(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : o(Object(n)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                              });
                    }
                    return e;
                }
                var c, s;
                (e = n.hmd(e)),
                    (c = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : void 0),
                    (s = function (e) {
                        var t;
                        if (void 0 === e && void 0 === e.document) return !1;
                        var n = function (e) {
                                for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = n.length, r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * a));
                                return "Fnon" + t;
                            },
                            o =
                                '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ani"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" class=""></path></svg>',
                            c =
                                '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="ani"><path fill="currentColor" d="M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z" class=""></path></svg>',
                            s =
                                '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ani"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" class=""></path></svg>',
                            l =
                                '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ani"><path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z" class=""></path></svg>',
                            u = "#029eff",
                            d = "#39DA8A",
                            f = "#fdd347",
                            m = "#f55260",
                            p = "#56b6f7",
                            g = "#222f3e",
                            y = "#fff",
                            v = k(u, 9),
                            b = "'Quicksand', sans-serif";
                        function h(e) {
                            return new DOMParser().parseFromString(e, "text/html").body.firstChild;
                        }
                        function k(t, n) {
                            for (
                                var a = (function (t) {
                                        var n = document.createElement("div");
                                        (n.style.color = t), (n.style.display = "none"), document.body.appendChild(n);
                                        var a = e.getComputedStyle(n).getPropertyValue("color");
                                        return document.body.removeChild(n), a;
                                    })(t),
                                    r = a
                                        .replace("rgb(", "")
                                        .replace(")", "")
                                        .split(",")
                                        .map(function (e) {
                                            return e.trim();
                                        }),
                                    o = r[0] % 256,
                                    i = r[1] % 256,
                                    c = r[2] % 256,
                                    s = [a],
                                    l = 0;
                                l < n;
                                l++
                            )
                                (o -= 33), (i -= 33), (c -= 33), s.push("rgb(" + o + "," + i + "," + c + ")");
                            return s;
                        }
                        function w(e, t) {
                            return t && "object" === r(t) ? i(i({}, e), t) : e;
                        }
                        var x = function (e, t) {
                                return console.error("%c " + e + " ", "padding:2px;border-radius:6px;color:#fff;background:red", "\n" + t + "\n Visit https://github.com/superawdi/Fnon to learn more..");
                            },
                            C = { text: "Button", color: g, background: y, shadow: "rgba(0, 0, 0, 0.1)", borderColor: "#d4d4d4", css: void 0 },
                            L =
                                (a((t = { fontFamily: b, width: "nl", closeButton: !0, animation: "slide-top", autoFocusTag: "input:not([disabled])", autoFocus: !1, autoFocusDelay: 0 }), "closeButton", !1),
                                a(t, "callback", void 0),
                                a(t, "cancelCallback", void 0),
                                a(t, "icon", void 0),
                                a(t, "iconColor", g),
                                a(t, "showIcon", !1),
                                a(t, "message", ""),
                                a(t, "title", ""),
                                a(t, "titleColor", g),
                                a(t, "titleBackground", y),
                                a(t, "btnOkText", "Ok"),
                                a(t, "btnOkColor", g),
                                a(t, "btnOkBackground", y),
                                a(t, "btnOkShadow", "rgba(0, 0, 0, 0.2)"),
                                a(t, "btnOkBorderColor", "#d4d4d4"),
                                a(t, "btnCancelText", "Cancel"),
                                a(t, "btnCancelColor", g),
                                a(t, "btnCancelBackground", y),
                                a(t, "btnCancelShadow", "rgba(0, 0, 0, 0.1)"),
                                a(t, "btnCancelBorderColor", "#d4d4d4"),
                                a(t, "color", "#2b2b2b"),
                                a(t, "background", "rgba(0, 0, 0, 0.4)"),
                                a(t, "zIndex", 4e3),
                                a(t, "beforeShow", void 0),
                                a(t, "afterShow", void 0),
                                a(t, "delButtons", !1),
                                a(t, "layout", "hbf"),
                                t),
                            T = {
                                Primary: { titleColor: y, titleBackground: u, btnOkColor: y, btnOkBackground: u, btnOkBorderColor: "transparent" },
                                Success: { titleColor: y, titleBackground: d, btnOkColor: y, btnOkBackground: d, btnOkBorderColor: "transparent", icon: o, iconColor: d },
                                Warning: { titleColor: g, titleBackground: f, btnOkColor: g, btnOkBackground: f, btnOkBorderColor: "transparent", icon: c, iconColor: f },
                                Danger: { titleColor: y, titleBackground: m, btnOkColor: y, btnOkBackground: m, btnOkBorderColor: "transparent", icon: s, iconColor: m },
                                Info: { titleColor: y, titleBackground: p, btnOkColor: y, btnOkBackground: p, btnOkBorderColor: "transparent", icon: l, iconColor: p },
                                Dark: { titleColor: y, titleBackground: g, btnOkColor: y, btnOkBackground: g, btnOkBorderColor: "transparent", btnOkShadow: "rgba(255, 255, 255, 0.1)" },
                                Light: {},
                            },
                            M = i({}, L),
                            _ = i({}, L),
                            S = i({}, L);
                        function B(e, t) {
                            t.onClosing && "function" == typeof t.onClosing && t.onClosing(e),
                                (e.style.pointerEvents = "none"),
                                (e.style.opacity = 0),
                                setTimeout(function () {
                                    e.remove(), !document.querySelectorAll("div.f__cm").length > 0 && document.body.classList.remove("f__of_hidden"), t.onClosed && "function" == typeof t.onClosed && t.onClosed(e);
                                }, 300);
                        }
                        function A(e, t) {
                            var n = "dialogue" == t ? "" : "".concat(e.showIcon && e.icon ? '<div class="askicon" style="--icon-c:'.concat(e.iconColor, '">').concat(e.icon, "</div>") : ""),
                                a = "dialogue" === t && e.buttons && Array.isArray(e.buttons) && e.buttons.length > 0,
                                r = "";
                            e.delButtons ||
                                (r = a
                                    ? '<div class="f__m__f">'.concat(
                                          e.buttons.reduce(function (e, t, n) {
                                              var a,
                                                  r = i({}, C);
                                              t.style && "Light" != t.style && T[t.style] && ((r.color = T[t.style].btnOkColor), (r.background = T[t.style].btnOkBackground), (r.borderColor = T[t.style].btnOkBorderColor));
                                              var o = i(i({}, r), t);
                                              return (
                                                  e +
                                                  '<button class="f__btn '
                                                      .concat(null !== (a = o.css) && void 0 !== a ? a : "", '" data-i="')
                                                      .concat(n, '" style="background:')
                                                      .concat(o.background, ";color:")
                                                      .concat(o.color, ";--b-sh:")
                                                      .concat(o.shadow, ";border-color:")
                                                      .concat(o.borderColor, ';">')
                                                      .concat(o.text, "</button>")
                                              );
                                          }, ""),
                                          "</div>"
                                      )
                                    : '<div class="f__m__f">'
                                          .concat(
                                              "alert" != t
                                                  ? '<button class="f__btn" data-evt="ccl" style="background:'
                                                        .concat(e.btnCancelBackground, ";color:")
                                                        .concat(e.btnCancelColor, ";--b-sh:")
                                                        .concat(e.btnCancelShadow, ";border-color:")
                                                        .concat(e.btnCancelBorderColor, ';">')
                                                        .concat(e.btnCancelText, "</button>")
                                                  : "",
                                              '<button class="f__btn" data-al="true" data-evt="tr" style="background:'
                                          )
                                          .concat(e.btnOkBackground, ";color:")
                                          .concat(e.btnOkColor, ";--b-sh:")
                                          .concat(e.btnOkShadow, ";border-color:")
                                          .concat(e.btnOkBorderColor, ';">')
                                          .concat(e.btnOkText, "</button></div>"));
                            var o = 'style="color:'.concat(e.titleColor, ';"'),
                                c = e.title
                                    ? '<div class="f__m__h" style="background:'
                                          .concat(e.titleBackground, ';"><h5 class="f__m__h__ttl" ')
                                          .concat(o, ">")
                                          .concat(e.title, "</h5>")
                                          .concat(
                                              e.closeButton
                                                  ? '<div style="display:flex;">'
                                                        .concat(
                                                            e.showMaxMin
                                                                ? '<button type="button" title="Max - Min" data-al="true" data-evt="max" class="cls"><svg  xmlns="http://www.w3.org/2000/svg" style="transform:scale(.9)" viewBox="0 0 473 473"  xml:space="preserve"><g><g><path fill="'
                                                                      .concat(
                                                                          e.titleColor,
                                                                          '" d="M459.5,0H330.4c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5h96.5L218.8,235.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4\n            s6.9-1.3,9.5-4L446,46.1v96.5c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V13.5C473,6,467,0,459.5,0z"/>\n        <path fill="'
                                                                      )
                                                                      .concat(
                                                                          e.titleColor,
                                                                          '" d="M459.5,231.2c-7.5,0-13.5,6-13.5,13.5v130.9c0,38.8-31.6,70.4-70.4,70.4H97.4C58.6,446,27,414.4,27,375.6V97.4 C27,58.6,58.6,27,97.4,27h129.9c7.5,0,13.5-6,13.5-13.5S234.8,0,227.3,0H97.4C43.7,0,0,43.7,0,97.4v278.2\n            C0,429.3,43.7,473,97.4,473h278.2c53.7,0,97.4-43.7,97.4-97.4V244.7C473,237.2,467,231.2,459.5,231.2z"/>\n    </g></g></svg></button>'
                                                                      )
                                                                : "",
                                                            '<button type="button" data-al="true" data-evt="ccl" class="cls"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
                                                        )
                                                        .concat(o, '><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div>')
                                                  : "",
                                              "</div>"
                                          )
                                    : "",
                                s = '<div class="f__m__b">'
                                    .concat(n, '<div class="f__m__b__ask ')
                                    .concat("dialogue" == t ? "" : "ico", '" styel="--color:')
                                    .concat(e.color, '"></div></div>'),
                                l = "";
                            if (e.layout && "hbf" !== e.layout) {
                                var u = new Set();
                                e.layout
                                    .split("")
                                    .filter(function (e) {
                                        return "hbf".includes(e) && e.trim().length > 0;
                                    })
                                    .forEach(function (e) {
                                        return u.add(e);
                                    }),
                                    u.forEach(function (e) {
                                        "h" === e ? (l += c) : "b" === e ? (l += s) : "f" === e && (l += r);
                                    });
                            } else l = c + s + r;
                            var d = '<div class="f__cm'
                                .concat("fl" === e.width ? " fl" : "", '" style="--f-f:')
                                .concat(e.fontFamily, ";--m-bg:")
                                .concat(e.background, ";--fnon-scroll-color:")
                                .concat(e.titleBackground, ";z-index:")
                                .concat(e.zIndex, ';transition: width 2s;"><div class="f__m f__m__')
                                .concat(e.width, " ")
                                .concat(e.animation, '">')
                                .concat(l, "</div></div>");
                            (d = h(d)), e.onInit && "function" == typeof e.onInit && e.onInit(d);
                            var f = d.querySelector(".f__m__b__ask");
                            if ((e.message instanceof HTMLElement ? f.append(e.message) : (f.innerHTML = e.message), "alert" != t)) {
                                var m = d.querySelectorAll('[data-evt="ccl"]');
                                if (
                                    (m &&
                                        Array.from(m).forEach(function (n) {
                                            "dialogue" == t
                                                ? n.addEventListener("click", function (t) {
                                                      if (e.cancelCallback && "function" == typeof e.cancelCallback) {
                                                          var n = e.cancelCallback(
                                                              function () {
                                                                  B(d, e);
                                                              },
                                                              d.querySelector("div.f__m__b__ask"),
                                                              t
                                                          );
                                                          (null != n && !0 !== n) || B(d, e);
                                                      } else B(d, e);
                                                  })
                                                : n.addEventListener("click", function () {
                                                      B(d, e), e.callback && "function" == typeof e.callback && e.callback(!1);
                                                  });
                                        }),
                                    a)
                                )
                                    d.querySelectorAll(".f__m__f button").forEach(function (t) {
                                        var n = e.buttons[t.dataset.i];
                                        n && n.callback && "function" == typeof n.callback
                                            ? t.addEventListener("click", function (t) {
                                                  var a = n.callback(
                                                      function () {
                                                          B(d, e);
                                                      },
                                                      d.querySelector("div.f__m__b__ask"),
                                                      t
                                                  );
                                                  (null != a && !0 !== a) || B(d, e);
                                              })
                                            : t.addEventListener("click", function () {
                                                  return B(d, e);
                                              });
                                    });
                                else {
                                    var p = d.querySelector('[data-evt="tr"]');
                                    p &&
                                        p.addEventListener("click", function (n) {
                                            if (e.callback && "function" == typeof e.callback)
                                                if ("dialogue" == t) {
                                                    var a = e.callback(
                                                        function () {
                                                            B(d, e);
                                                        },
                                                        d.querySelector("div.f__m__b__ask"),
                                                        n
                                                    );
                                                    (null != a && !0 !== a) || B(d, e);
                                                } else e.callback(!0, n), B(d, e);
                                            else B(d, e);
                                        });
                                }
                            } else {
                                var g = d.querySelectorAll('[data-al="true"]');
                                Array.from(g).forEach(function (t) {
                                    t.addEventListener("click", function (t) {
                                        e.callback && "function" == typeof e.callback && e.callback(t), B(d, e);
                                    });
                                });
                            }
                            e.defaultBefore && "function" == typeof e.defaultBefore && e.defaultBefore(d), e.beforeShow && "function" == typeof e.beforeShow && e.beforeShow(d);
                            var y = d.querySelector('button[data-evt="max"]');
                            if (
                                (y &&
                                    y.addEventListener("click", function () {
                                        d.classList.contains("fl") ? (d.classList.remove("fl"), d.querySelector(".f__m").classList.remove("f__m__fl")) : (d.classList.add("fl"), d.querySelector(".f__m").classList.add("f__m__fl"));
                                    }),
                                document.body.classList.add("f__of_hidden"),
                                document.body.appendChild(d),
                                e.defaultAfter && "function" == typeof e.defaultAfter && e.defaultAfter(d),
                                e.afterShow && "function" == typeof e.afterShow && e.afterShow(d),
                                e.autoFocus)
                            ) {
                                var v = d.querySelector(e.autoFocusTag);
                                v &&
                                    setTimeout(function () {
                                        return v.focus();
                                    }, e.autoFocusDelay);
                            } else
                                setTimeout(function () {
                                    var e = d.querySelector(".f__btn");
                                    e && e.focus();
                                }, e.autoFocusDelay);
                            return d;
                        }
                        var O = {
                            Init: function (e) {
                                return (M = w(M, e));
                            },
                        };
                        Object.keys(T).forEach(function (e) {
                            return (O[e] = function (t, n, a, o, c) {
                                if (t && "" != t) {
                                    var s = i(i({}, M), T[e]);
                                    t instanceof HTMLElement || "object" !== r(t) ? ((s.message = t), n && (s.title = n), a && (s.btnOkText = a), o && (s.btnCancelText = o), c && (s.callback = c)) : (s = i(i({}, s), t));
                                    var l = A(s);
                                    if (s.delButtons)
                                        return function () {
                                            B(l, s);
                                        };
                                } else x("Message Null", "Message Can not be null !!!");
                            });
                        });
                        var N = {
                            Init: function (e) {
                                return (_ = w(_, e));
                            },
                        };
                        Object.keys(T).forEach(function (e) {
                            return (N[e] = function (t, n, a, o, c, s) {
                                if (t && "" != t) {
                                    var l = i(i({}, _), T[e]);
                                    t instanceof HTMLElement || "object" !== r(t)
                                        ? ((l.message = t), n && (l.title = n), a && (l.btnOkText = a), o && (l.btnCancelText = o), c && (l.callback = c), s && (l.cancelCallback = s))
                                        : (l = i(i({}, l), t));
                                    var u = A(l, "dialogue");
                                    if (l.delButtons)
                                        return function () {
                                            B(u, l);
                                        };
                                } else x("Message Null", "Body not be null !!!");
                            });
                        });
                        var z = {
                            Init: function (e) {
                                return (S = w(S, e));
                            },
                        };
                        Object.keys(T).forEach(function (e) {
                            return (z[e] = function (t, n, a, o) {
                                if (t && "" != t) {
                                    var c = i(i({}, S), T[e]);
                                    t instanceof HTMLElement || "object" !== r(t) ? ((c.message = t), n && (c.title = n), a && (c.btnOkText = a), o && (c.callback = o)) : (c = i(i({}, c), t));
                                    var s = A(c, "alert");
                                    if (c.delButtons)
                                        return function () {
                                            B(s, c);
                                        };
                                } else x("Message Null", "Message Can not be null !!!");
                            });
                        });
                        var j = {
                                fontFamily: b,
                                position: "right-top",
                                spacing: "16px",
                                svgSize: { w: "16px", h: "16px" },
                                textColor: "#fff",
                                fontSize: "14px",
                                backgroundColor: "#029eff",
                                shadowColor: "rgba(2, 158, 255, 0.3)",
                                width: "300px",
                                zindex: 4e3,
                                animation: "slide-left",
                                animationDuration: 500,
                                displayDuration: 3e3,
                                progressColor: "rgba(255,255,255,0.9)",
                                callback: void 0,
                                title: void 0,
                            },
                            E = {
                                Primary: { textColor: "#fff", backgroundColor: u, shadowColor: "rgba(2, 158, 255, 0.3)", svg: null },
                                Light: { textColor: g, backgroundColor: y, shadowColor: "rgba(34, 47, 62, 0.3)", svg: null },
                                Dark: { textColor: "#fff", backgroundColor: g, shadowColor: "rgba(34, 47, 62, 0.3)", svg: null },
                                Success: { textColor: "#fff", backgroundColor: d, shadowColor: "rgba(57, 218, 138, 0.3)", svg: o },
                                Warning: { textColor: "#fff", backgroundColor: f, shadowColor: "rgba(253, 211, 71, 0.3)", svg: c },
                                Danger: { textColor: "#fff", backgroundColor: m, shadowColor: "rgba(245, 82, 96, 0.3)", svg: s },
                                Info: { textColor: "#fff", backgroundColor: p, shadowColor: "rgba(86, 182, 247, 0.3)", svg: l },
                            },
                            D = {
                                Init: function (e) {
                                    return (j = w(j, e));
                                },
                            };
                        Object.keys(E).forEach(function (e) {
                            return (D[e] = function (t, n) {
                                if (t) {
                                    var a = E[e],
                                        o = n && "object" === r(n) ? i(i(i({}, j), a), n) : i(i({}, j), a);
                                    n && "function" == typeof n && (o.callback = n),
                                        n && "object" !== r(n) && "function" != typeof n && (o.title = n),
                                        (function (e, t) {
                                            var n = t.title ? '<span style="font-weight:bold;font-size:1.025em;">'.concat(t.title, "</span><br/>") : "",
                                                a = '<div class="f__h '
                                                    .concat(t.animation ? t.animation : "", '" style="--hint-color:')
                                                    .concat(t.textColor, ";--hint-bg-color:")
                                                    .concat(t.backgroundColor, ";--hint-shadow-color:")
                                                    .concat(t.shadowColor, ";font-size:")
                                                    .concat(t.fontSize, ";--svg-h:")
                                                    .concat(t.svgSize.h, ";--svg-w:")
                                                    .concat(t.svgSize.w, ";--h-width:")
                                                    .concat(t.width, ";--ani-dura:")
                                                    .concat(t.animationDuration, "ms;--display-dur:")
                                                    .concat(t.displayDuration, "ms;--prog-color:")
                                                    .concat(t.progressColor, '">')
                                                    .concat(t.svg ? t.svg : "", '<span style="font-family:')
                                                    .concat(t.fontFamily, ';">')
                                                    .concat(n + e, "</span></div>");
                                            a = h(a);
                                            var r = ".f__ch." + t.position,
                                                o = document.querySelector(r);
                                            o || ((o = h('<div class="f__ch '.concat(t.position, '" style="--h-spacing:').concat(t.spacing, '"></div>'))), document.body.appendChild(o)),
                                                o.appendChild(a),
                                                setTimeout(function () {
                                                    a.remove(),
                                                        t.callback && "function" == typeof t.callback && t.callback(),
                                                        setTimeout(function () {
                                                            0 === o.children.length && o.remove();
                                                        }, t.displayDuration);
                                                }, t.displayDuration + t.animationDuration);
                                        })(t, o);
                                } else x("Message Empty!", "Hint body can not be displayed if message is null.");
                            });
                        });
                        var I = {
                                cid: n(12),
                                svgSize: { w: "100px", h: "100px" },
                                svgColor: "#029eff",
                                textColor: "#029eff",
                                textSize: "16px",
                                clickToClose: !0,
                                fontFamily: b,
                                background: "rgba(255,255,255,0.5)",
                                zindex: 4e3,
                                containerSize: "350px",
                            },
                            q = a(
                                {
                                    Infinity: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><path fill="none" stroke="'.concat(
                                            v[0],
                                            '" stroke-width="4" stroke-dasharray="133.42624267578125 123.162685546875" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px"><animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256"></animate></path></svg>'
                                        );
                                    },
                                    Ripple: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="'
                                            .concat(
                                                v[0],
                                                '" stroke-width="6"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate></circle><circle cx="50" cy="50" r="0" fill="none" stroke="'
                                            )
                                            .concat(
                                                v[1],
                                                '" stroke-width="6"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate></circle></svg>'
                                            );
                                    },
                                    Liquid: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="43" stroke="'
                                            .concat(v[0], '" stroke-width="5" fill="none"></circle><path d="M12 50 Q31 40 50 50 Q69 60 88 50 A38 38 0 0 1 12 50" fill="')
                                            .concat(
                                                v[3],
                                                '"><animate attributeName="d" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="M12 50 Q31 40 50 50 Q69 60 88 50 A38 38 0 0 1 12 50;M12 50 Q31 60 50 50 Q69 40 88 50 A38 38 0 0 1 12 50;M12 50 Q31 40 50 50 Q69 60 88 50 A38 38 0 0 1 12 50" keySplines="0.5 0 0.5 1;0.5 0 0.5 1"></animate></path></svg>'
                                            );
                                    },
                                    ColorBar: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><defs><clipPath id="ldio-4jm8omtt4e-cp" x="0" y="0" width="100" height="100"><path d="M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"></path></clipPath></defs><path fill="none" stroke="'
                                            .concat(
                                                v[0],
                                                '" stroke-width="2.7928" d="M82 63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z"></path><g clip-path="url(#ldio-4jm8omtt4e-cp)"><g><rect x="-100" y="0" width="25" height="100" fill="'
                                            )
                                            .concat(v[4], '"></rect><rect x="-75" y="0" width="25" height="100" fill="')
                                            .concat(v[3], '"></rect><rect x="-50" y="0" width="25" height="100" fill="')
                                            .concat(v[2], '"></rect><rect x="-25" y="0" width="25" height="100" fill="')
                                            .concat(v[1], '"></rect><rect x="0" y="0" width="25" height="100" fill="')
                                            .concat(v[4], '"></rect><rect x="25" y="0" width="25" height="100" fill="')
                                            .concat(v[3], '"></rect><rect x="50" y="0" width="25" height="100" fill="')
                                            .concat(v[2], '"></rect><rect x="75" y="0" width="25" height="100" fill="')
                                            .concat(v[1], '"></rect><animateTransform attributeName="transform" type="translate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0;100"></animateTransform></g></g></svg>');
                                    },
                                    ProgressBar: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><defs><clipPath id="ldio-93bom2a7rr-cp" x="0" y="0" width="100" height="100"><rect x="0" y="0" width="0" height="100"><animate attributeName="width" repeatCount="indefinite" dur="1s" values="0;100;100" keyTimes="0;0.5;1"></animate><animate attributeName="x" repeatCount="indefinite" dur="1s" values="0;0;100" keyTimes="0;0.5;1"></animate></rect></clipPath></defs><path fill="none" stroke="'
                                            .concat(v[0], '" stroke-width="2.7928" d="M82 63H18c-7.2 0-13-5.8-13-13v0c0-7.2 5.8-13 13-13h64c7.2 0 13 5.8 13 13v0C95 57.2 89.2 63 82 63z"></path><path fill="')
                                            .concat(v[1], '" clip-path="url(#ldio-93bom2a7rr-cp)" d="M81.3 58.7H18.7c-4.8 0-8.7-3.9-8.7-8.7v0c0-4.8 3.9-8.7 8.7-8.7h62.7c4.8 0 8.7 3.9 8.7 8.7v0C90 54.8 86.1 58.7 81.3 58.7z"></path></svg>');
                                    },
                                    CurveBar: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50,50)"><circle cx="0" cy="0" r="8.333333333333334" fill="none" stroke="'
                                            .concat(
                                                v[0],
                                                '" stroke-width="4" stroke-dasharray="26.179938779914945 26.179938779914945"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="0" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="16.666666666666668" fill="none" stroke="'
                                            )
                                            .concat(
                                                v[1],
                                                '" stroke-width="4" stroke-dasharray="52.35987755982989 52.35987755982989"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.2" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="25" fill="none" stroke="'
                                            )
                                            .concat(
                                                v[2],
                                                '" stroke-width="4" stroke-dasharray="78.53981633974483 78.53981633974483"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.4" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="33.333333333333336" fill="none" stroke="'
                                            )
                                            .concat(
                                                v[3],
                                                '" stroke-width="4" stroke-dasharray="104.71975511965978 104.71975511965978"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.6" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="41.666666666666664" fill="none" stroke="'
                                            )
                                            .concat(
                                                v[4],
                                                '" stroke-width="4" stroke-dasharray="130.89969389957471 130.89969389957471"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.8" repeatCount="indefinite"></animateTransform></circle></g></svg>'
                                            );
                                    },
                                    LineDots: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(20 50)"><circle cx="0" cy="0" r="6" fill="'
                                            .concat(
                                                v[0],
                                                '"><animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(40 50)"><circle cx="0" cy="0" r="6" fill="'
                                            )
                                            .concat(
                                                v[1],
                                                '"><animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(60 50)"><circle cx="0" cy="0" r="6" fill="'
                                            )
                                            .concat(
                                                v[2],
                                                '"><animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(80 50)"><circle cx="0" cy="0" r="6" fill="'
                                            )
                                            .concat(
                                                v[3],
                                                '"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g></svg>'
                                            );
                                    },
                                    Circle: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="'.concat(
                                            v[0],
                                            '" stroke-width="3" r="23" stroke-dasharray="108.38494654884786 38.12831551628262"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg>'
                                        );
                                    },
                                    CircleDots: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g><circle cx="73.801" cy="68.263" fill="'
                                            .concat(
                                                v[0],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="0s"></animateTransform></circle><circle cx="68.263" cy="73.801" fill="'
                                            )
                                            .concat(
                                                v[1],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.062s"></animateTransform></circle><circle cx="61.481" cy="77.716" fill="'
                                            )
                                            .concat(
                                                v[2],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.125s"></animateTransform></circle><circle cx="53.916" cy="79.743" fill="'
                                            )
                                            .concat(
                                                v[3],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.187s"></animateTransform></circle><circle cx="46.084" cy="79.743" fill="'
                                            )
                                            .concat(
                                                v[4],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.25s"></animateTransform></circle><circle cx="38.519" cy="77.716" fill="'
                                            )
                                            .concat(
                                                v[5],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.312s"></animateTransform></circle><circle cx="31.737" cy="73.801" fill="'
                                            )
                                            .concat(
                                                v[6],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.375s"></animateTransform></circle><circle cx="26.199" cy="68.263" fill="'
                                            )
                                            .concat(
                                                v[7],
                                                '" r="3"><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.437s"></animateTransform></circle><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"></animateTransform></g></svg>'
                                            );
                                    },
                                    Bricks: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect fill="'
                                            .concat(
                                                v[0],
                                                '" x="15" y="15" width="30" height="30" rx="3" ry="3"><animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.8333333333333333s"></animate><animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.3333333333333333s"></animate></rect><rect fill="'
                                            )
                                            .concat(
                                                v[1],
                                                '" x="15" y="15" width="30" height="30" rx="3" ry="3"><animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.1666666666666667s"></animate><animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-0.6666666666666666s"></animate></rect><rect fill="'
                                            )
                                            .concat(
                                                v[2],
                                                '" x="15" y="15" width="30" height="30" rx="3" ry="3"><animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-0.5s"></animate><animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="0s"></animate></rect></svg>'
                                            );
                                    },
                                    Interwind: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(0 -7.5)"><circle cx="50" cy="41" r="10" fill="'
                                            .concat(
                                                v[0],
                                                '"><animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform><animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="0;15;0" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate></circle><circle cx="50" cy="41" r="10" fill="'
                                            )
                                            .concat(
                                                v[1],
                                                '"><animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="180 50 50;540 50 50"></animateTransform><animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="15;0;15" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate></circle></g></svg>'
                                            );
                                    },
                                    Typing: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="27.5" cy="57.5" r="5" fill="'
                                            .concat(
                                                v[0],
                                                '"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.6s"></animate></circle> <circle cx="42.5" cy="57.5" r="5" fill="'
                                            )
                                            .concat(
                                                v[1],
                                                '"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.44999999999999996s"></animate></circle> <circle cx="57.5" cy="57.5" r="5" fill="'
                                            )
                                            .concat(
                                                v[2],
                                                '"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.3s"></animate></circle> <circle cx="72.5" cy="57.5" r="5" fill="'
                                            )
                                            .concat(
                                                v[3],
                                                '89bff8"><animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur=".7s" begin="-0.15s"></animate></circle></svg>'
                                            );
                                    },
                                    Gear: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;32.72727272727273" keyTimes="0;1" dur="0.2785515320334262s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 27.783373422978222 11.31742732423528 L27.783373422978222 11.31742732423528 L34.51340168562767 15.64255386388006 L28.5663526936161 24.896342725023054 L21.836324430966652 20.571216185378272 A30 30 0 0 1 17.254197885979497 24.54165143814614 L17.254197885979497 24.54165143814614 L20.57751798999459 31.818707400982287 L10.57156604109489 36.38827254400304 L7.2482459370797985 29.111216581166893 A30 30 0 0 1 1.246936432518882 29.974074623468482 L1.246936432518882 29.974074623468482 L0.1084177263326025 37.892646158515944 L-10.779618134357655 36.327182937509804 L-9.641099428171374 28.408611402462345 A30 30 0 0 1 -15.15621852783466 25.88994090253049 L-15.15621852783466 25.88994090253049 L-20.395104399396942 31.935937497364556 L-28.708349717293792 24.732469423966418 L-23.46946384573151 18.686472829132352 A30 30 0 0 1 -26.74738119432351 13.58593387462007 L-26.74738119432351 13.58593387462007 L-34.42332498323949 15.839794329351507 L-37.52238310849522 5.285371619592024 L-29.84643931957924 3.031511164860587 A30 30 0 0 1 -29.84643931957924 -3.0315111648605795 L-29.84643931957924 -3.0315111648605795 L-37.52238310849522 -5.285371619592015 L-34.423324983239496 -15.839794329351498 L-26.747381194323513 -13.585933874620062 A30 30 0 0 1 -23.469463845731514 -18.686472829132345 L-23.469463845731514 -18.686472829132345 L-28.7083497172938 -24.73246942396641 L-20.395104399396963 -31.93593749736455 L-15.156218527834678 -25.889940902530483 A30 30 0 0 1 -9.641099428171389 -28.40861140246234 L-9.641099428171389 -28.40861140246234 L-10.779618134357671 -36.327182937509804 L0.1084177263325996 -37.892646158515944 L1.2469364325188814 -29.974074623468482 A30 30 0 0 1 7.248245937079778 -29.111216581166897 L7.248245937079778 -29.111216581166897 L10.571566041094865 -36.388272544003044 L20.57751798999458 -31.81870740098229 L17.25419788597949 -24.541651438146143 A30 30 0 0 1 21.83632443096665 -20.571216185378276 L21.83632443096665 -20.571216185378276 L28.566352693616096 -24.896342725023057 L34.51340168562768 -15.642553863880053 L27.783373422978226 -11.317427324235274 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="'.concat(
                                            v[0],
                                            '"></path></g></g></svg>'
                                        );
                                    },
                                    Gears: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)">  <g transform="translate(-19 -19) scale(0.6)"> <g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" begin="0s" repeatCount="indefinite"></animateTransform><path d="M31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="'
                                            .concat(
                                                v[0],
                                                '"></path></g></g> <g transform="translate(19 19) scale(0.6)"> <g><animateTransform attributeName="transform" type="rotate" values="45;0" keyTimes="0;1" dur="0.2s" begin="-0.1s" repeatCount="indefinite"></animateTransform><path d="M-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 L31.359972760794346 21.460477824182686 L38.431040572659825 28.531545636048158 L28.53154563604818 38.4310405726598 L21.460477824182703 31.35997276079433 A38 38 0 0 1 6.9999999999999964 37.3496987939662 L6.9999999999999964 37.3496987939662 L6.999999999999995 47.3496987939662 L-7.000000000000009 47.3496987939662 L-7.000000000000007 37.3496987939662 A38 38 0 0 1 -21.46047782418263 31.359972760794385 L-21.46047782418263 31.359972760794385 L-28.531545636048097 38.43104057265987 L-38.431040572659796 28.531545636048186 L-31.35997276079433 21.460477824182703 A38 38 0 0 1 -37.34969879396619 7.000000000000032 L-37.34969879396619 7.000000000000032 L-47.34969879396619 7.0000000000000355 L-47.3496987939662 -7.000000000000002 L-37.3496987939662 -7.000000000000005 A38 38 0 0 1 -31.359972760794346 -21.46047782418268 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="'
                                            )
                                            .concat(v[2], '"></path></g></g></g></svg>');
                                    },
                                    Rainbow: function () {
                                        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><clipPath id="cp"><path d="M0 -44 A44 44 0 0 1 0 44 A44 44 0 0 1 0 -44 M24 -1L24 1L32 1L32 -1Z"></path></clipPath><g transform="translate(50,50)"><circle clip-path="url(#cp)" cx="0" cy="0" fill="none" r="27" stroke="'
                                            .concat(
                                                v[0],
                                                '" stroke-width="6" stroke-dasharray="42.411500823462205 0 0 0 0 169.64600329384882"><animate attributeName="stroke-dasharray" dur="1.6949152542372878s" repeatCount="indefinite" begin="-0.16949152542372878s" keyTimes="0;0.2;0.4;0.6;0.8;1" values="0 0 0 0 0 169.64600329384882;0 0 0 0 0 169.64600329384882;0 0 84.82300164692441 0 0 169.64600329384882;0 0 169.64600329384882 0 0 169.64600329384882;0 0 84.82300164692441 0 0 169.64600329384882;0 0 0 0 0 169.64600329384882"></animate><animateTransform attributeName="transform" type="rotate" dur="1.6949152542372878s" repeatCount="indefinite" begin="-0.16949152542372878s" values="0;0;0;0;180;360"></animateTransform></circle><circle cx="0" cy="0" fill="none" r="34" stroke="'
                                            )
                                            .concat(
                                                v[1],
                                                '" stroke-width="6" stroke-dasharray="106.81415022205297 0 0 213.62830044410595"><animate attributeName="stroke-dasharray" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" values="0 0 0 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 106.81415022205297 0 0 213.62830044410595;0 0 0 0 0 213.62830044410595"></animate><animateTransform attributeName="transform" type="rotate" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" values="0;0;0;180;180;360"></animateTransform></circle><circle cx="0" cy="0" fill="none" r="41" stroke="'
                                            )
                                            .concat(
                                                v[3],
                                                '" stroke-width="6" stroke-dasharray="128.8052987971815 0 0 257.610597594363" transform="rotate(45)"><animate attributeName="stroke-dasharray" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" keyTimes="0;0.06;0.1;0.3;0.45;0.5;0.7;0.90;1" values="0 0 96.60397409788612 0 0 257.610597594363;0 0 96.60397409788612 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 32.20132469929538 0 0 257.610597594363;0 0 32.20132469929538 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 128.8052987971815 0 0 257.610597594363;0 0 96.60397409788612 0 0 257.610597594363"></animate><animateTransform attributeName="transform" type="rotate" dur="1.6949152542372878s" repeatCount="indefinite" begin="0s" keyTimes="0;0.06;0.1;0.3;0.5;0.6;0.8;0.90;1" values="-60;0;0;0;180;180;180;180;300"></animateTransform></circle></g></svg>'
                                            );
                                    },
                                },
                                "CurveBar",
                                function () {
                                    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50,50)"><circle cx="0" cy="0" r="8.333333333333334" fill="none" stroke="'
                                        .concat(
                                            v[0],
                                            '" stroke-width="4" stroke-dasharray="26.179938779914945 26.179938779914945"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="0" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="16.666666666666668" fill="none" stroke="'
                                        )
                                        .concat(
                                            v[1],
                                            '" stroke-width="4" stroke-dasharray="52.35987755982989 52.35987755982989"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.2" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="25" fill="none" stroke="'
                                        )
                                        .concat(
                                            v[2],
                                            '" stroke-width="4" stroke-dasharray="78.53981633974483 78.53981633974483"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.4" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="33.333333333333336" fill="none" stroke="'
                                        )
                                        .concat(
                                            v[3],
                                            '" stroke-width="4" stroke-dasharray="104.71975511965978 104.71975511965978"><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.6" repeatCount="indefinite"></animateTransform></circle><circle cx="0" cy="0" r="41.666666666666664" fill="none" stroke="'
                                        )
                                        .concat(
                                            v[4],
                                            '" stroke-width="4" stroke-dasharray="130.89969389957471 130.89969389957471"><animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.8" repeatCount="indefinite"></animateTransform></circle></g></svg>'
                                        );
                                }
                            ),
                            P = {
                                Init: function (e) {
                                    return (I = w(I, e));
                                },
                            };
                        Object.keys(q).forEach(function (e) {
                            return (P[e] = function (t, n) {
                                var a = n ? i(i({}, I), n) : I;
                                (v = k(a.svgColor, 9)),
                                    (function (e, t, n) {
                                        if (document.getElementById(I.cid)) x("Waiting Existed!", "Waiting box is already existed. you need to call Change function instead.");
                                        else {
                                            var a = t && "object" === r(t) ? i(i({}, I), t) : I,
                                                o = "<div id="
                                                    .concat(I.cid, ' class="f f__cw" style="background:')
                                                    .concat(a.background, '"><div class="f__w" style="width:')
                                                    .concat(a.containerSize, '"><div style="width:')
                                                    .concat(a.svgSize.w, ";height:")
                                                    .concat(a.svgSize.h, ';">')
                                                    .concat(n, "</div>")
                                                    .concat(e ? '<p style="font-size:' + a.textSize + ";color:" + a.textColor + ";font-family:" + a.fontFamily + '">' + e + "</p>" : "", "</div></div>");
                                            (o = h(o)),
                                                a.clickToClose &&
                                                    o.addEventListener("click", function () {
                                                        return P.Remove();
                                                    }),
                                                document.body.appendChild(o);
                                        }
                                    })(t, n, q[e]());
                            });
                        }),
                            (P.Change = function (e) {
                                var t = document.getElementById(I.cid);
                                if (t) {
                                    var n = t.querySelector("p");
                                    n ? (e ? (n.innerHTML = e) : n.remove()) : (((n = h('<p style="font-size:'.concat(I.textSize, ";color:").concat(I.textColor, '"></p>'))).innerHTML = e), t.querySelector(".f__w").appendChild(n));
                                }
                            }),
                            (P.Remove = function (e) {
                                var t = document.getElementById(I.cid),
                                    n = function () {
                                        t.remove();
                                    };
                                t &&
                                    ("number" == typeof e
                                        ? setTimeout(function () {
                                              n();
                                          }, e)
                                        : n());
                            });
                        var R = { cid: n(12), fontFamily: b, svgSize: { w: "100px", h: "100px" }, svgColor: u, background: "rgba(255,255,255,0.8)", zindex: 4e3, textColor: "#029eff", textSize: "16px" },
                            F = {
                                Init: function (e) {
                                    return (R = w(R, e));
                                },
                            };
                        return (
                            Object.keys(q).forEach(function (e) {
                                return (F[e] = function (t, n, a) {
                                    var o = a ? i(i({}, R), a) : R;
                                    (v = k(o.svgColor, 9)),
                                        (function (e, t, n, a) {
                                            var o = "object" === r(e) ? e : "string" == typeof e ? document.querySelector(e) : null;
                                            if (o) {
                                                o.setAttribute("data-pos", o.style.position), (o.style.position = "relative");
                                                var c = n && "object" === r(n) ? i(i({}, R), n) : R,
                                                    s = '<div data-id="'
                                                        .concat(R.cid, '" class="f f__cb" style="background:')
                                                        .concat(c.background, '"><div class="f__w"><div style="width:')
                                                        .concat(c.svgSize.w, ";height:")
                                                        .concat(c.svgSize.h, ';">')
                                                        .concat(a, "</div>")
                                                        .concat(t ? '<p style="font-size:' + c.textSize + ";color:" + c.textColor + ";font-family:" + c.fontFamily + '">' + t + "</p>" : "", "</div></div>");
                                                (s = h(s)), o.appendChild(s);
                                            } else x("Invalid Selector!", e + " is invalid selector or no element found by this selector.");
                                        })(t, n, a, q[e]());
                                });
                            }),
                            (F.Remove = function (e, t) {
                                var n = "object" === r(e) ? e.querySelector('div[data-id="'.concat(R.cid, '"]')) : "string" == typeof e ? document.querySelector(e + ' div[data-id="'.concat(R.cid, '"]')) : null;
                                if (n) {
                                    var a = n.parentElement,
                                        o = function () {
                                            (n.style.opacity = 0),
                                                setTimeout(function () {
                                                    n.remove();
                                                    var e = a.getAttribute("data-pos");
                                                    (a.style.position = e || ""), a.removeAttribute("data-pos");
                                                }, 100);
                                        };
                                    n &&
                                        ("number" == typeof t
                                            ? setTimeout(function () {
                                                  o();
                                              }, t)
                                            : o());
                                } else x("Invalid Selector", sel + " is invalid selector or no element found by this selector.");
                            }),
                            { Ask: O, Alert: z, Dialogue: N, Hint: D, Wait: P, Box: F }
                        );
                    }),
                    "function" == typeof define && n.amdO
                        ? define([], function () {
                              return s(c);
                          })
                        : "object" === r(e) && "object" === r(e.exports)
                        ? (e.exports = s(c))
                        : (c.Fnon = s(c));
            },
        },
        t = {};
    function n(a) {
        var r = t[a];
        if (void 0 !== r) return r.exports;
        var o = (t[a] = { id: a, loaded: !1, exports: {} });
        return e[a](o, o.exports, n), (o.loaded = !0), o.exports;
    }
    (n.amdO = {}),
        (n.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (n.hmd = (e) => (
            (e = Object.create(e)).children || (e.children = []),
            Object.defineProperty(e, "exports", {
                enumerable: !0,
                set: () => {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
                },
            }),
            e
        )),
        n(736);
})();
// Tour
!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.tourguide = e()) : (t.tourguide = e());
})(self, () =>
    (() => {
        "use strict";
        var t = {
                362: (t, e, i) => {
                    function n(t) {
                        return t.split("-")[0];
                    }
                    function o(t) {
                        return t.split("-")[1];
                    }
                    function r(t) {
                        return ["top", "bottom"].includes(n(t)) ? "x" : "y";
                    }
                    function s(t) {
                        return "y" === t ? "height" : "width";
                    }
                    function a(t, e, i) {
                        let { reference: a, floating: l } = t;
                        const c = a.x + a.width / 2 - l.width / 2,
                            d = a.y + a.height / 2 - l.height / 2,
                            u = r(e),
                            f = s(u),
                            p = a[f] / 2 - l[f] / 2,
                            h = "x" === u;
                        let g;
                        switch (n(e)) {
                            case "top":
                                g = { x: c, y: a.y - l.height };
                                break;
                            case "bottom":
                                g = { x: c, y: a.y + a.height };
                                break;
                            case "right":
                                g = { x: a.x + a.width, y: d };
                                break;
                            case "left":
                                g = { x: a.x - l.width, y: d };
                                break;
                            default:
                                g = { x: a.x, y: a.y };
                        }
                        switch (o(e)) {
                            case "start":
                                g[u] -= p * (i && h ? -1 : 1);
                                break;
                            case "end":
                                g[u] += p * (i && h ? -1 : 1);
                        }
                        return g;
                    }
                    function l(t) {
                        return "number" != typeof t
                            ? (function (t) {
                                  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
                              })(t)
                            : { top: t, right: t, bottom: t, left: t };
                    }
                    function c(t) {
                        return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
                    }
                    async function d(t, e) {
                        var i;
                        void 0 === e && (e = {});
                        const { x: n, y: o, platform: r, rects: s, elements: a, strategy: d } = t,
                            { boundary: u = "clippingAncestors", rootBoundary: f = "viewport", elementContext: p = "floating", altBoundary: h = !1, padding: g = 0 } = e,
                            m = l(g),
                            v = a[h ? ("floating" === p ? "reference" : "floating") : p],
                            y = c(
                                await r.getClippingRect({
                                    element: null == (i = await (null == r.isElement ? void 0 : r.isElement(v))) || i ? v : v.contextElement || (await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(a.floating))),
                                    boundary: u,
                                    rootBoundary: f,
                                    strategy: d,
                                })
                            ),
                            b = c(
                                r.convertOffsetParentRelativeRectToViewportRelativeRect
                                    ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
                                          rect: "floating" === p ? { ...s.floating, x: n, y: o } : s.reference,
                                          offsetParent: await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(a.floating)),
                                          strategy: d,
                                      })
                                    : s[p]
                            );
                        return { top: y.top - b.top + m.top, bottom: b.bottom - y.bottom + m.bottom, left: y.left - b.left + m.left, right: b.right - y.right + m.right };
                    }
                    i.r(e),
                        i.d(e, {
                            arrow: () => h,
                            autoPlacement: () => k,
                            autoUpdate: () => ct,
                            computePosition: () => dt,
                            detectOverflow: () => d,
                            flip: () => E,
                            getOverflowAncestors: () => rt,
                            hide: () => P,
                            inline: () => D,
                            limitShift: () => B,
                            offset: () => L,
                            platform: () => lt,
                            shift: () => O,
                            size: () => A,
                        });
                    const u = Math.min,
                        f = Math.max;
                    function p(t, e, i) {
                        return f(t, u(e, i));
                    }
                    const h = (t) => ({
                            name: "arrow",
                            options: t,
                            async fn(e) {
                                const { element: i, padding: n = 0 } = null != t ? t : {},
                                    { x: a, y: c, placement: d, rects: u, platform: f } = e;
                                if (null == i) return {};
                                const h = l(n),
                                    g = { x: a, y: c },
                                    m = r(d),
                                    v = o(d),
                                    y = s(m),
                                    b = await f.getDimensions(i),
                                    w = "y" === m ? "top" : "left",
                                    x = "y" === m ? "bottom" : "right",
                                    k = u.reference[y] + u.reference[m] - g[m] - u.floating[y],
                                    E = g[m] - u.reference[m],
                                    _ = await (null == f.getOffsetParent ? void 0 : f.getOffsetParent(i));
                                let S = _ ? ("y" === m ? _.clientHeight || 0 : _.clientWidth || 0) : 0;
                                0 === S && (S = u.floating[y]);
                                const P = k / 2 - E / 2,
                                    L = h[w],
                                    C = S - b[y] - h[x],
                                    O = S / 2 - b[y] / 2 + P,
                                    B = p(L, O, C),
                                    A = ("start" === v ? h[w] : h[x]) > 0 && O !== B && u.reference[y] <= u.floating[y];
                                return { [m]: g[m] - (A ? (O < L ? L - O : C - O) : 0), data: { [m]: B, centerOffset: O - B } };
                            },
                        }),
                        g = { left: "right", right: "left", bottom: "top", top: "bottom" };
                    function m(t) {
                        return t.replace(/left|right|bottom|top/g, (t) => g[t]);
                    }
                    function v(t, e, i) {
                        void 0 === i && (i = !1);
                        const n = o(t),
                            a = r(t),
                            l = s(a);
                        let c = "x" === a ? (n === (i ? "end" : "start") ? "right" : "left") : "start" === n ? "bottom" : "top";
                        return e.reference[l] > e.floating[l] && (c = m(c)), { main: c, cross: m(c) };
                    }
                    const y = { start: "end", end: "start" };
                    function b(t) {
                        return t.replace(/start|end/g, (t) => y[t]);
                    }
                    const w = ["top", "right", "bottom", "left"],
                        x = w.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []),
                        k = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                {
                                    name: "autoPlacement",
                                    options: t,
                                    async fn(e) {
                                        var i, r, s, a, l;
                                        const { x: c, y: u, rects: f, middlewareData: p, placement: h, platform: g, elements: m } = e,
                                            { alignment: y = null, allowedPlacements: w = x, autoAlignment: k = !0, ...E } = t,
                                            _ = (function (t, e, i) {
                                                return (t ? [...i.filter((e) => o(e) === t), ...i.filter((e) => o(e) !== t)] : i.filter((t) => n(t) === t)).filter((i) => !t || o(i) === t || (!!e && b(i) !== i));
                                            })(y, k, w),
                                            S = await d(e, E),
                                            P = null != (i = null == (r = p.autoPlacement) ? void 0 : r.index) ? i : 0,
                                            L = _[P];
                                        if (null == L) return {};
                                        const { main: C, cross: O } = v(L, f, await (null == g.isRTL ? void 0 : g.isRTL(m.floating)));
                                        if (h !== L) return { x: c, y: u, reset: { placement: _[0] } };
                                        const B = [S[n(L)], S[C], S[O]],
                                            A = [...(null != (s = null == (a = p.autoPlacement) ? void 0 : a.overflows) ? s : []), { placement: L, overflows: B }],
                                            D = _[P + 1];
                                        if (D) return { data: { index: P + 1, overflows: A }, reset: { placement: D } };
                                        const T = A.slice().sort((t, e) => t.overflows[0] - e.overflows[0]),
                                            R =
                                                null ==
                                                (l = T.find((t) => {
                                                    let { overflows: e } = t;
                                                    return e.every((t) => t <= 0);
                                                }))
                                                    ? void 0
                                                    : l.placement,
                                            M = null != R ? R : T[0].placement;
                                        return M !== h ? { data: { index: P + 1, overflows: A }, reset: { placement: M } } : {};
                                    },
                                }
                            );
                        },
                        E = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                {
                                    name: "flip",
                                    options: t,
                                    async fn(e) {
                                        var i;
                                        const { placement: o, middlewareData: r, rects: s, initialPlacement: a, platform: l, elements: c } = e,
                                            { mainAxis: u = !0, crossAxis: f = !0, fallbackPlacements: p, fallbackStrategy: h = "bestFit", flipAlignment: g = !0, ...y } = t,
                                            w = n(o),
                                            x =
                                                p ||
                                                (w !== a && g
                                                    ? (function (t) {
                                                          const e = m(t);
                                                          return [b(t), e, b(e)];
                                                      })(a)
                                                    : [m(a)]),
                                            k = [a, ...x],
                                            E = await d(e, y),
                                            _ = [];
                                        let S = (null == (i = r.flip) ? void 0 : i.overflows) || [];
                                        if ((u && _.push(E[w]), f)) {
                                            const { main: t, cross: e } = v(o, s, await (null == l.isRTL ? void 0 : l.isRTL(c.floating)));
                                            _.push(E[t], E[e]);
                                        }
                                        if (((S = [...S, { placement: o, overflows: _ }]), !_.every((t) => t <= 0))) {
                                            var P, L;
                                            const t = (null != (P = null == (L = r.flip) ? void 0 : L.index) ? P : 0) + 1,
                                                e = k[t];
                                            if (e) return { data: { index: t, overflows: S }, reset: { placement: e } };
                                            let i = "bottom";
                                            switch (h) {
                                                case "bestFit": {
                                                    var C;
                                                    const t = null == (C = S.map((t) => [t, t.overflows.filter((t) => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : C[0].placement;
                                                    t && (i = t);
                                                    break;
                                                }
                                                case "initialPlacement":
                                                    i = a;
                                            }
                                            if (o !== i) return { reset: { placement: i } };
                                        }
                                        return {};
                                    },
                                }
                            );
                        };
                    function _(t, e) {
                        return { top: t.top - e.height, right: t.right - e.width, bottom: t.bottom - e.height, left: t.left - e.width };
                    }
                    function S(t) {
                        return w.some((e) => t[e] >= 0);
                    }
                    const P = function (t) {
                            let { strategy: e = "referenceHidden", ...i } = void 0 === t ? {} : t;
                            return {
                                name: "hide",
                                async fn(t) {
                                    const { rects: n } = t;
                                    switch (e) {
                                        case "referenceHidden": {
                                            const e = _(await d(t, { ...i, elementContext: "reference" }), n.reference);
                                            return { data: { referenceHiddenOffsets: e, referenceHidden: S(e) } };
                                        }
                                        case "escaped": {
                                            const e = _(await d(t, { ...i, altBoundary: !0 }), n.floating);
                                            return { data: { escapedOffsets: e, escaped: S(e) } };
                                        }
                                        default:
                                            return {};
                                    }
                                },
                            };
                        },
                        L = function (t) {
                            return (
                                void 0 === t && (t = 0),
                                {
                                    name: "offset",
                                    options: t,
                                    async fn(e) {
                                        const { x: i, y: s } = e,
                                            a = await (async function (t, e) {
                                                const { placement: i, platform: s, elements: a } = t,
                                                    l = await (null == s.isRTL ? void 0 : s.isRTL(a.floating)),
                                                    c = n(i),
                                                    d = o(i),
                                                    u = "x" === r(i),
                                                    f = ["left", "top"].includes(c) ? -1 : 1,
                                                    p = l && u ? -1 : 1,
                                                    h = "function" == typeof e ? e(t) : e;
                                                let { mainAxis: g, crossAxis: m, alignmentAxis: v } = "number" == typeof h ? { mainAxis: h, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
                                                return d && "number" == typeof v && (m = "end" === d ? -1 * v : v), u ? { x: m * p, y: g * f } : { x: g * f, y: m * p };
                                            })(e, t);
                                        return { x: i + a.x, y: s + a.y, data: a };
                                    },
                                }
                            );
                        };
                    function C(t) {
                        return "x" === t ? "y" : "x";
                    }
                    const O = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                {
                                    name: "shift",
                                    options: t,
                                    async fn(e) {
                                        const { x: i, y: o, placement: s } = e,
                                            {
                                                mainAxis: a = !0,
                                                crossAxis: l = !1,
                                                limiter: c = {
                                                    fn: (t) => {
                                                        let { x: e, y: i } = t;
                                                        return { x: e, y: i };
                                                    },
                                                },
                                                ...u
                                            } = t,
                                            f = { x: i, y: o },
                                            h = await d(e, u),
                                            g = r(n(s)),
                                            m = C(g);
                                        let v = f[g],
                                            y = f[m];
                                        if (a) {
                                            const t = "y" === g ? "bottom" : "right";
                                            v = p(v + h["y" === g ? "top" : "left"], v, v - h[t]);
                                        }
                                        if (l) {
                                            const t = "y" === m ? "bottom" : "right";
                                            y = p(y + h["y" === m ? "top" : "left"], y, y - h[t]);
                                        }
                                        const b = c.fn({ ...e, [g]: v, [m]: y });
                                        return { ...b, data: { x: b.x - i, y: b.y - o } };
                                    },
                                }
                            );
                        },
                        B = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                {
                                    options: t,
                                    fn(e) {
                                        const { x: i, y: o, placement: s, rects: a, middlewareData: l } = e,
                                            { offset: c = 0, mainAxis: d = !0, crossAxis: u = !0 } = t,
                                            f = { x: i, y: o },
                                            p = r(s),
                                            h = C(p);
                                        let g = f[p],
                                            m = f[h];
                                        const v = "function" == typeof c ? c(e) : c,
                                            y = "number" == typeof v ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
                                        if (d) {
                                            const t = "y" === p ? "height" : "width",
                                                e = a.reference[p] - a.floating[t] + y.mainAxis,
                                                i = a.reference[p] + a.reference[t] - y.mainAxis;
                                            g < e ? (g = e) : g > i && (g = i);
                                        }
                                        if (u) {
                                            var b, w, x, k;
                                            const t = "y" === p ? "width" : "height",
                                                e = ["top", "left"].includes(n(s)),
                                                i = a.reference[h] - a.floating[t] + (e && null != (b = null == (w = l.offset) ? void 0 : w[h]) ? b : 0) + (e ? 0 : y.crossAxis),
                                                o = a.reference[h] + a.reference[t] + (e ? 0 : null != (x = null == (k = l.offset) ? void 0 : k[h]) ? x : 0) - (e ? y.crossAxis : 0);
                                            m < i ? (m = i) : m > o && (m = o);
                                        }
                                        return { [p]: g, [h]: m };
                                    },
                                }
                            );
                        },
                        A = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                {
                                    name: "size",
                                    options: t,
                                    async fn(e) {
                                        const { placement: i, rects: r, platform: s, elements: a } = e,
                                            { apply: l = () => {}, ...c } = t,
                                            u = await d(e, c),
                                            p = n(i),
                                            h = o(i);
                                        let g, m;
                                        "top" === p || "bottom" === p
                                            ? ((g = p), (m = h === ((await (null == s.isRTL ? void 0 : s.isRTL(a.floating))) ? "start" : "end") ? "left" : "right"))
                                            : ((m = p), (g = "end" === h ? "top" : "bottom"));
                                        const v = f(u.left, 0),
                                            y = f(u.right, 0),
                                            b = f(u.top, 0),
                                            w = f(u.bottom, 0),
                                            x = {
                                                availableHeight: r.floating.height - (["left", "right"].includes(i) ? 2 * (0 !== b || 0 !== w ? b + w : f(u.top, u.bottom)) : u[g]),
                                                availableWidth: r.floating.width - (["top", "bottom"].includes(i) ? 2 * (0 !== v || 0 !== y ? v + y : f(u.left, u.right)) : u[m]),
                                            };
                                        await l({ ...e, ...x });
                                        const k = await s.getDimensions(a.floating);
                                        return r.floating.width !== k.width || r.floating.height !== k.height ? { reset: { rects: !0 } } : {};
                                    },
                                }
                            );
                        },
                        D = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                {
                                    name: "inline",
                                    options: t,
                                    async fn(e) {
                                        var i;
                                        const { placement: o, elements: s, rects: a, platform: d, strategy: p } = e,
                                            { padding: h = 2, x: g, y: m } = t,
                                            v = c(
                                                d.convertOffsetParentRelativeRectToViewportRelativeRect
                                                    ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
                                                          rect: a.reference,
                                                          offsetParent: await (null == d.getOffsetParent ? void 0 : d.getOffsetParent(s.floating)),
                                                          strategy: p,
                                                      })
                                                    : a.reference
                                            ),
                                            y = null != (i = await (null == d.getClientRects ? void 0 : d.getClientRects(s.reference))) ? i : [],
                                            b = l(h),
                                            w = await d.getElementRects({
                                                reference: {
                                                    getBoundingClientRect: function () {
                                                        var t;
                                                        if (2 === y.length && y[0].left > y[1].right && null != g && null != m)
                                                            return null != (t = y.find((t) => g > t.left - b.left && g < t.right + b.right && m > t.top - b.top && m < t.bottom + b.bottom)) ? t : v;
                                                        if (y.length >= 2) {
                                                            if ("x" === r(o)) {
                                                                const t = y[0],
                                                                    e = y[y.length - 1],
                                                                    i = "top" === n(o),
                                                                    r = t.top,
                                                                    s = e.bottom,
                                                                    a = i ? t.left : e.left,
                                                                    l = i ? t.right : e.right;
                                                                return { top: r, bottom: s, left: a, right: l, width: l - a, height: s - r, x: a, y: r };
                                                            }
                                                            const t = "left" === n(o),
                                                                e = f(...y.map((t) => t.right)),
                                                                i = u(...y.map((t) => t.left)),
                                                                s = y.filter((n) => (t ? n.left === i : n.right === e)),
                                                                a = s[0].top,
                                                                l = s[s.length - 1].bottom;
                                                            return { top: a, bottom: l, left: i, right: e, width: e - i, height: l - a, x: i, y: a };
                                                        }
                                                        return v;
                                                    },
                                                },
                                                floating: s.floating,
                                                strategy: p,
                                            });
                                        return a.reference.x !== w.reference.x || a.reference.y !== w.reference.y || a.reference.width !== w.reference.width || a.reference.height !== w.reference.height ? { reset: { rects: w } } : {};
                                    },
                                }
                            );
                        };
                    function T(t) {
                        return t && t.document && t.location && t.alert && t.setInterval;
                    }
                    function R(t) {
                        if (null == t) return window;
                        if (!T(t)) {
                            const e = t.ownerDocument;
                            return (e && e.defaultView) || window;
                        }
                        return t;
                    }
                    function M(t) {
                        return R(t).getComputedStyle(t);
                    }
                    function H(t) {
                        return T(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
                    }
                    function j() {
                        const t = navigator.userAgentData;
                        return null != t && t.brands ? t.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
                    }
                    function z(t) {
                        return t instanceof R(t).HTMLElement;
                    }
                    function W(t) {
                        return t instanceof R(t).Element;
                    }
                    function V(t) {
                        return "undefined" != typeof ShadowRoot && (t instanceof R(t).ShadowRoot || t instanceof ShadowRoot);
                    }
                    function F(t) {
                        const { overflow: e, overflowX: i, overflowY: n, display: o } = M(t);
                        return /auto|scroll|overlay|hidden/.test(e + n + i) && !["inline", "contents"].includes(o);
                    }
                    function I(t) {
                        return ["table", "td", "th"].includes(H(t));
                    }
                    function N(t) {
                        const e = /firefox/i.test(j()),
                            i = M(t);
                        return (
                            "none" !== i.transform ||
                            "none" !== i.perspective ||
                            (e && "filter" === i.willChange) ||
                            (e && !!i.filter && "none" !== i.filter) ||
                            ["transform", "perspective"].some((t) => i.willChange.includes(t)) ||
                            ["paint", "layout", "strict", "content"].some((t) => {
                                const e = i.contain;
                                return null != e && e.includes(t);
                            })
                        );
                    }
                    function G() {
                        return !/^((?!chrome|android).)*safari/i.test(j());
                    }
                    function q(t) {
                        return ["html", "body", "#document"].includes(H(t));
                    }
                    const Y = Math.min,
                        X = Math.max,
                        $ = Math.round;
                    function J(t, e, i) {
                        var n, o, r, s;
                        void 0 === e && (e = !1), void 0 === i && (i = !1);
                        const a = t.getBoundingClientRect();
                        let l = 1,
                            c = 1;
                        e && z(t) && ((l = (t.offsetWidth > 0 && $(a.width) / t.offsetWidth) || 1), (c = (t.offsetHeight > 0 && $(a.height) / t.offsetHeight) || 1));
                        const d = W(t) ? R(t) : window,
                            u = !G() && i,
                            f = (a.left + (u && null != (n = null == (o = d.visualViewport) ? void 0 : o.offsetLeft) ? n : 0)) / l,
                            p = (a.top + (u && null != (r = null == (s = d.visualViewport) ? void 0 : s.offsetTop) ? r : 0)) / c,
                            h = a.width / l,
                            g = a.height / c;
                        return { width: h, height: g, top: p, right: f + h, bottom: p + g, left: f, x: f, y: p };
                    }
                    function Z(t) {
                        return ((e = t), (e instanceof R(e).Node ? t.ownerDocument : t.document) || window.document).documentElement;
                        var e;
                    }
                    function U(t) {
                        return W(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
                    }
                    function K(t) {
                        return J(Z(t)).left + U(t).scrollLeft;
                    }
                    function Q(t, e, i) {
                        const n = z(e),
                            o = Z(e),
                            r = J(
                                t,
                                n &&
                                    (function (t) {
                                        const e = J(t);
                                        return $(e.width) !== t.offsetWidth || $(e.height) !== t.offsetHeight;
                                    })(e),
                                "fixed" === i
                            );
                        let s = { scrollLeft: 0, scrollTop: 0 };
                        const a = { x: 0, y: 0 };
                        if (n || (!n && "fixed" !== i))
                            if ((("body" !== H(e) || F(o)) && (s = U(e)), z(e))) {
                                const t = J(e, !0);
                                (a.x = t.x + e.clientLeft), (a.y = t.y + e.clientTop);
                            } else o && (a.x = K(o));
                        return { x: r.left + s.scrollLeft - a.x, y: r.top + s.scrollTop - a.y, width: r.width, height: r.height };
                    }
                    function tt(t) {
                        return "html" === H(t) ? t : t.assignedSlot || t.parentNode || (V(t) ? t.host : null) || Z(t);
                    }
                    function et(t) {
                        return z(t) && "fixed" !== M(t).position ? t.offsetParent : null;
                    }
                    function it(t) {
                        const e = R(t);
                        let i = et(t);
                        for (; i && I(i) && "static" === M(i).position; ) i = et(i);
                        return i && ("html" === H(i) || ("body" === H(i) && "static" === M(i).position && !N(i)))
                            ? e
                            : i ||
                                  (function (t) {
                                      let e = tt(t);
                                      for (V(e) && (e = e.host); z(e) && !q(e); ) {
                                          if (N(e)) return e;
                                          {
                                              const t = e.parentNode;
                                              e = V(t) ? t.host : t;
                                          }
                                      }
                                      return null;
                                  })(t) ||
                                  e;
                    }
                    function nt(t) {
                        if (z(t)) return { width: t.offsetWidth, height: t.offsetHeight };
                        const e = J(t);
                        return { width: e.width, height: e.height };
                    }
                    function ot(t) {
                        const e = tt(t);
                        return q(e) ? t.ownerDocument.body : z(e) && F(e) ? e : ot(e);
                    }
                    function rt(t, e) {
                        var i;
                        void 0 === e && (e = []);
                        const n = ot(t),
                            o = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
                            r = R(n),
                            s = o ? [r].concat(r.visualViewport || [], F(n) ? n : []) : n,
                            a = e.concat(s);
                        return o ? a : a.concat(rt(s));
                    }
                    function st(t, e, i) {
                        return "viewport" === e
                            ? c(
                                  (function (t, e) {
                                      const i = R(t),
                                          n = Z(t),
                                          o = i.visualViewport;
                                      let r = n.clientWidth,
                                          s = n.clientHeight,
                                          a = 0,
                                          l = 0;
                                      if (o) {
                                          (r = o.width), (s = o.height);
                                          const t = G();
                                          (t || (!t && "fixed" === e)) && ((a = o.offsetLeft), (l = o.offsetTop));
                                      }
                                      return { width: r, height: s, x: a, y: l };
                                  })(t, i)
                              )
                            : W(e)
                            ? (function (t, e) {
                                  const i = J(t, !1, "fixed" === e),
                                      n = i.top + t.clientTop,
                                      o = i.left + t.clientLeft;
                                  return { top: n, left: o, x: o, y: n, right: o + t.clientWidth, bottom: n + t.clientHeight, width: t.clientWidth, height: t.clientHeight };
                              })(e, i)
                            : c(
                                  (function (t) {
                                      var e;
                                      const i = Z(t),
                                          n = U(t),
                                          o = null == (e = t.ownerDocument) ? void 0 : e.body,
                                          r = X(i.scrollWidth, i.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                                          s = X(i.scrollHeight, i.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
                                      let a = -n.scrollLeft + K(t);
                                      const l = -n.scrollTop;
                                      return "rtl" === M(o || i).direction && (a += X(i.clientWidth, o ? o.clientWidth : 0) - r), { width: r, height: s, x: a, y: l };
                                  })(Z(t))
                              );
                    }
                    function at(t) {
                        const e = rt(t),
                            i = (function (t, e) {
                                let i = t;
                                for (; i && !q(i) && !e.includes(i) && (!W(i) || !["absolute", "fixed"].includes(M(i).position)); ) {
                                    const t = tt(i);
                                    i = V(t) ? t.host : t;
                                }
                                return i;
                            })(t, e);
                        let n = null;
                        if (i && z(i)) {
                            const t = it(i);
                            F(i) ? (n = i) : z(t) && (n = t);
                        }
                        return W(n)
                            ? e.filter(
                                  (t) =>
                                      n &&
                                      W(t) &&
                                      (function (t, e) {
                                          const i = null == e.getRootNode ? void 0 : e.getRootNode();
                                          if (t.contains(e)) return !0;
                                          if (i && V(i)) {
                                              let i = e;
                                              do {
                                                  if (i && t === i) return !0;
                                                  i = i.parentNode || i.host;
                                              } while (i);
                                          }
                                          return !1;
                                      })(t, n) &&
                                      "body" !== H(t)
                              )
                            : [];
                    }
                    const lt = {
                        getClippingRect: function (t) {
                            let { element: e, boundary: i, rootBoundary: n, strategy: o } = t;
                            const r = [...("clippingAncestors" === i ? at(e) : [].concat(i)), n],
                                s = r[0],
                                a = r.reduce((t, i) => {
                                    const n = st(e, i, o);
                                    return (t.top = X(n.top, t.top)), (t.right = Y(n.right, t.right)), (t.bottom = Y(n.bottom, t.bottom)), (t.left = X(n.left, t.left)), t;
                                }, st(e, s, o));
                            return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
                        },
                        convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
                            let { rect: e, offsetParent: i, strategy: n } = t;
                            const o = z(i),
                                r = Z(i);
                            if (i === r) return e;
                            let s = { scrollLeft: 0, scrollTop: 0 };
                            const a = { x: 0, y: 0 };
                            if ((o || (!o && "fixed" !== n)) && (("body" !== H(i) || F(r)) && (s = U(i)), z(i))) {
                                const t = J(i, !0);
                                (a.x = t.x + i.clientLeft), (a.y = t.y + i.clientTop);
                            }
                            return { ...e, x: e.x - s.scrollLeft + a.x, y: e.y - s.scrollTop + a.y };
                        },
                        isElement: W,
                        getDimensions: nt,
                        getOffsetParent: it,
                        getDocumentElement: Z,
                        getElementRects: (t) => {
                            let { reference: e, floating: i, strategy: n } = t;
                            return { reference: Q(e, it(i), n), floating: { ...nt(i), x: 0, y: 0 } };
                        },
                        getClientRects: (t) => Array.from(t.getClientRects()),
                        isRTL: (t) => "rtl" === M(t).direction,
                    };
                    function ct(t, e, i, n) {
                        void 0 === n && (n = {});
                        const { ancestorScroll: o = !0, ancestorResize: r = !0, elementResize: s = !0, animationFrame: a = !1 } = n,
                            l = o && !a,
                            c = l || r ? [...(W(t) ? rt(t) : []), ...rt(e)] : [];
                        c.forEach((t) => {
                            l && t.addEventListener("scroll", i, { passive: !0 }), r && t.addEventListener("resize", i);
                        });
                        let d,
                            u = null;
                        if (s) {
                            let n = !0;
                            (u = new ResizeObserver(() => {
                                n || i(), (n = !1);
                            })),
                                W(t) && !a && u.observe(t),
                                u.observe(e);
                        }
                        let f = a ? J(t) : null;
                        return (
                            a &&
                                (function e() {
                                    const n = J(t);
                                    !f || (n.x === f.x && n.y === f.y && n.width === f.width && n.height === f.height) || i(), (f = n), (d = requestAnimationFrame(e));
                                })(),
                            i(),
                            () => {
                                var t;
                                c.forEach((t) => {
                                    l && t.removeEventListener("scroll", i), r && t.removeEventListener("resize", i);
                                }),
                                    null == (t = u) || t.disconnect(),
                                    (u = null),
                                    a && cancelAnimationFrame(d);
                            }
                        );
                    }
                    const dt = (t, e, i) =>
                        (async (t, e, i) => {
                            const { placement: n = "bottom", strategy: o = "absolute", middleware: r = [], platform: s } = i,
                                l = await (null == s.isRTL ? void 0 : s.isRTL(e));
                            let c = await s.getElementRects({ reference: t, floating: e, strategy: o }),
                                { x: d, y: u } = a(c, n, l),
                                f = n,
                                p = {},
                                h = 0;
                            for (let i = 0; i < r.length; i++) {
                                const { name: g, fn: m } = r[i],
                                    { x: v, y, data: b, reset: w } = await m({ x: d, y: u, initialPlacement: n, placement: f, strategy: o, middlewareData: p, rects: c, platform: s, elements: { reference: t, floating: e } });
                                (d = null != v ? v : d),
                                    (u = null != y ? y : u),
                                    (p = { ...p, [g]: { ...p[g], ...b } }),
                                    w &&
                                        h <= 50 &&
                                        (h++,
                                        "object" == typeof w &&
                                            (w.placement && (f = w.placement), w.rects && (c = !0 === w.rects ? await s.getElementRects({ reference: t, floating: e, strategy: o }) : w.rects), ({ x: d, y: u } = a(c, f, l))),
                                        (i = -1));
                            }
                            return { x: d, y: u, placement: f, strategy: o, middlewareData: p };
                        })(t, e, { platform: lt, ...i });
                },
                131: (t, e, i) => {
                    i.p;
                },
                797: function (t, e, i) {
                    var n =
                            (this && this.__createBinding) ||
                            (Object.create
                                ? function (t, e, i, n) {
                                      void 0 === n && (n = i);
                                      var o = Object.getOwnPropertyDescriptor(e, i);
                                      (o && !("get" in o ? !e.__esModule : o.writable || o.configurable)) ||
                                          (o = {
                                              enumerable: !0,
                                              get: function () {
                                                  return e[i];
                                              },
                                          }),
                                          Object.defineProperty(t, n, o);
                                  }
                                : function (t, e, i, n) {
                                      void 0 === n && (n = i), (t[n] = e[i]);
                                  }),
                        o =
                            (this && this.__setModuleDefault) ||
                            (Object.create
                                ? function (t, e) {
                                      Object.defineProperty(t, "default", { enumerable: !0, value: e });
                                  }
                                : function (t, e) {
                                      t.default = e;
                                  }),
                        r =
                            (this && this.__importStar) ||
                            function (t) {
                                if (t && t.__esModule) return t;
                                var e = {};
                                if (null != t) for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && n(e, t, i);
                                return o(e, t), e;
                            },
                        s =
                            (this && this.__importDefault) ||
                            function (t) {
                                return t && t.__esModule ? t : { default: t };
                            };
                    Object.defineProperty(e, "__esModule", { value: !0 }), (e.TourGuideClient = void 0);
                    const a = i(693),
                        l = s(i(121)),
                        c = i(319),
                        d = i(166),
                        u = i(737),
                        f = r(i(483)),
                        p = s(i(971)),
                        h = s(i(330)),
                        g = s(i(340)),
                        m = s(i(544)),
                        v = r(i(612)),
                        y = r(i(283)),
                        b = s(i(717));
                    e.TourGuideClient = class {
                        constructor(t) {
                            (this.group = ""),
                                (this.isVisible = !1),
                                (this.activeStep = 0),
                                (this.tourSteps = []),
                                (this.options = b.default),
                                (this.isFinished = y.getIsFinished),
                                (this.createTourGuideBackdrop = c.createTourGuideBackdrop),
                                (this.computeBackdropAttributes = c.computeBackdropAttributes),
                                (this.createTourGuideDialog = a.createTourGuideDialog),
                                (this.start = h.default),
                                (this.visitStep = f.default),
                                (this.addSteps = p.default),
                                (this.nextStep = f.handleVisitNextStep),
                                (this.prevStep = f.handleVisitPrevStep),
                                (this.exit = m.default),
                                (this.refresh = v.default),
                                (this.refreshDialog = v.handleRefreshDialog),
                                (this.finishTour = y.default),
                                (this.updatePositions = l.default),
                                (this.deleteFinishedTour = y.delFinishedTour),
                                (this.setOptions = g.default),
                                (this.initListeners = u.handleInitListeners),
                                (this.destroyListeners = u.handleDestroyListeners),
                                (this._trackedEvents = {
                                    nextBtnClickEvent: { initialized: !1, fn: this.nextStep.bind(this) },
                                    prevBtnClickEvent: { initialized: !1, fn: this.prevStep.bind(this) },
                                    closeBtnClickEvent: { initialized: !1, fn: this.exit.bind(this) },
                                    keyPressEvent: { initialized: !1, fn: u.keyPressHandler.bind(this) },
                                    outsideClickEvent: { initialized: !1, fn: u.clickOutsideHandler.bind(this) },
                                }),
                                (this.onFinish = d.handleOnFinish),
                                (this.onBeforeExit = d.handleOnBeforeExit),
                                (this.onAfterExit = d.handleOnAfterExit),
                                (this.onBeforeStepChange = d.handleOnBeforeStepChange),
                                (this.onAfterStepChange = d.handleOnAfterStepChange),
                                (this.dialog = document.createElement("div")),
                                (this.backdrop = document.createElement("div")),
                                (this.options = b.default),
                                t && Object.assign(this.options, t),
                                this.createTourGuideDialog().catch((t) => {
                                    this.options.debug && console.warn(t);
                                }),
                                this.createTourGuideBackdrop();
                        }
                    };
                },
                319: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.computeBackdropPosition = e.computeBackdropAttributes = e.createTourGuideBackdrop = void 0),
                        (e.createTourGuideBackdrop = function () {
                            (this.backdrop = document.createElement("div")), this.computeBackdropAttributes(), document.body.append(this.backdrop);
                        }),
                        (e.computeBackdropAttributes = function () {
                            this.options &&
                                ((this.backdrop.className = "tg-backdrop"),
                                (this.backdrop.style.boxShadow = this.options.backdropColor + " 0 0 1px 2px, " + this.options.backdropColor + " 0 0 0 1000vh"),
                                this.options.backdropClass && this.backdrop.classList.add(this.options.backdropClass),
                                this.options.dialogAnimate && this.backdrop.classList.add("tg-backdrop-animate"));
                        }),
                        (e.computeBackdropPosition = function (t) {
                            return new Promise(async (e, i) => {
                                if (void 0 === t.options.targetPadding) return i("Options failed to initialize");
                                if (!t.backdrop) return i("No backdrop element initialized");
                                const n = t.tourSteps[t.activeStep],
                                    o = n.target,
                                    r = o.getBoundingClientRect(),
                                    s = r.width + t.options.targetPadding > document.documentElement.clientWidth;
                                if (o === document.body) {
                                    const e = 0;
                                    (r.width = e), (r.height = e), (t.backdrop.style.position = "fixed"), (t.backdrop.style.top = window.innerHeight / 2.5 + "px"), (t.backdrop.style.left = window.innerWidth / 2 + "px");
                                } else
                                    n.fixed
                                        ? ((t.backdrop.style.position = "fixed"), (t.backdrop.style.top = r.top - t.options.targetPadding / 2 + "px"), (t.backdrop.style.left = (s ? r.x : r.x - t.options.targetPadding / 2) + "px"))
                                        : ((t.backdrop.style.position = "absolute"),
                                          (t.backdrop.style.top = window.scrollY + r.top - t.options.targetPadding / 2 + "px"),
                                          (t.backdrop.style.left = (s ? r.x : r.x - t.options.targetPadding / 2) + "px"));
                                (t.backdrop.style.width = (s ? r.width : r.width + t.options.targetPadding) + "px"), (t.backdrop.style.height = (r.height ? r.height + t.options.targetPadding : r.height) + "px"), e(!0);
                            });
                        });
                },
                166: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.handleOnAfterStepChange = e.handleOnBeforeStepChange = e.handleOnAfterExit = e.handleOnBeforeExit = e.handleOnFinish = void 0),
                        (e.handleOnFinish = function (t) {
                            if ("function" != typeof t) throw new Error("Provided callback for onFinish was not a function");
                            this._globalFinishCallback = t;
                        }),
                        (e.handleOnBeforeExit = function (t) {
                            if ("function" != typeof t) throw new Error("Provided callback for onBeforeExit was not a function");
                            this._globalBeforeExitCallback = t;
                        }),
                        (e.handleOnAfterExit = function (t) {
                            if ("function" != typeof t) throw new Error("Provided callback for onAfterExit was not a function");
                            this._globalAfterExitCallback = t;
                        }),
                        (e.handleOnBeforeStepChange = function (t) {
                            if ("function" != typeof t) throw new Error("Provided callback for onBeforeStepChange was not a function");
                            this._globalBeforeChangeCallback = t;
                        }),
                        (e.handleOnAfterStepChange = function (t) {
                            if ("function" != typeof t) throw new Error("Provided callback for onAfterStepChange was not a function");
                            this._globalAfterChangeCallback = t;
                        });
                },
                693: (t, e, i) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }), (e.computeDialogPosition = e.updateDialogHtml = e.renderDialogHtml = e.createTourGuideDialog = void 0);
                    const n = i(500),
                        o = i(362);
                    async function r(t) {
                        t.options.dialogClass && t.dialog.classList.add(t.options.dialogClass),
                            t.options.dialogZ && (t.dialog.style.zIndex = String(t.options.dialogZ)),
                            (t.dialog.style.width = t.options.dialogWidth ? t.options.dialogWidth + "px" : "auto"),
                            t.options.dialogMaxWidth && (t.dialog.style.maxWidth = t.options.dialogMaxWidth + "px");
                        let e = "";
                        if (
                            ((e += "<div class='tg-dialog-header'>"),
                            (e += '<div class="tg-dialog-title" id="tg-dialog-title">\x3c!-- JS rendered --\x3e</div>'),
                            t.options.closeButton &&
                                ((e += '<div class="tg-dialog-close-btn" id="tg-dialog-close-btn">'),
                                (e +=
                                    ' <svg width="12px" height="12px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>'),
                                (e += "</div>")),
                            (e += "</div>"),
                            t.options.progressBar && (e += '<div class="tg-dialog-progress-bar"><span class="tg-bar" id="tg-dialog-progbar"></span></div>'),
                            (e += '<div class="tg-dialog-body" id="tg-dialog-body">\x3c!-- JS rendered --\x3e</div>'),
                            t.options.showStepDots && "body" === t.options.stepDotsPlacement)
                        ) {
                            const t = (0, n.dotsWrapperHtmlString)();
                            t && (e += t);
                        }
                        e += '<div class="tg-dialog-footer">';
                        let i = "tg-dialog-btn",
                            o = "false";
                        if (
                            (0 === t.activeStep && ((o = "true"), (i += " disabled")),
                            t.options.showButtons && !t.options.hidePrev && (e += '<button type="button" class="' + i + '" id="tg-dialog-prev-btn" disabled="' + o + `">${t.options.prevLabel}</button>`),
                            (e += '<div class="tg-dialog-footer-sup">'),
                            t.options.showStepDots && "footer" === t.options.stepDotsPlacement)
                        ) {
                            const t = (0, n.dotsWrapperHtmlString)();
                            t && (e += t);
                        }
                        return (
                            t.options.showStepProgress && (e += '<span class="tg-step-progress" id="tg-step-progress">\x3c!-- JS rendered --\x3e</span>'),
                            (e += "</div>"),
                            t.options.showButtons && !t.options.hideNext && (e += `<button type="button" class="tg-dialog-btn" id="tg-dialog-next-btn">${t.options.nextLabel}</button>`),
                            (e += "</div>"),
                            (e += '<div id="tg-arrow" class="tg-arrow"></div>\x3c!-- end tour arrow --\x3e'),
                            e
                        );
                    }
                    (e.createTourGuideDialog = async function () {
                        return (
                            (this.dialog = document.createElement("div")),
                            this.dialog.classList.add("tg-dialog"),
                            await r(this).then((t) => {
                                this.dialog.innerHTML = t;
                            }),
                            document.body.append(this.dialog),
                            !0
                        );
                    }),
                        (e.renderDialogHtml = r),
                        (e.updateDialogHtml = function (t) {
                            return new Promise((e, i) => {
                                const o = t.tourSteps[t.activeStep];
                                o || i("No active step data");
                                const r = document.getElementById("tg-dialog-title");
                                r && (r.innerHTML = o.title ? o.title : "");
                                const s = document.getElementById("tg-dialog-body");
                                s && o && ("string" == typeof o.content ? (s.innerHTML = o.content ? o.content : "") : ((s.innerHTML = ""), s.append(o.content)));
                                const a = document.getElementById("tg-dialog-dots");
                                a && t.options.showStepDots && (0, n.computeDots)(t) && (a.innerHTML = (0, n.computeDots)(t));
                                const l = document.getElementById("tg-dialog-prev-btn");
                                l && (0 === t.activeStep ? (l.classList.add("disabled"), l.setAttribute("disabled", "true")) : (l.classList.remove("disabled"), l.removeAttribute("disabled")));
                                const c = document.getElementById("tg-dialog-next-btn");
                                c && (c.innerHTML = t.activeStep + 1 >= t.tourSteps.length ? t.options.finishLabel : t.options.nextLabel);
                                const d = document.getElementById("tg-step-progress");
                                d && (d.innerHTML = t.activeStep + 1 + "/" + t.tourSteps.length);
                                const u = document.getElementById("tg-dialog-progbar");
                                u && (t.options.progressBar && (u.style.backgroundColor = t.options.progressBar), (u.style.width = ((t.activeStep + 1) / t.tourSteps.length) * 100 + "%")), e(!0);
                            });
                        }),
                        (e.computeDialogPosition = function (t) {
                            return new Promise(async (e) => {
                                const i = document.querySelector("#tg-arrow");
                                let n = t.tourSteps[t.activeStep].target;
                                if (n === document.body)
                                    return (
                                        Object.assign(t.dialog.style, { top: window.innerHeight / 2.25 - t.dialog.clientHeight / 2 + "px", left: window.innerWidth / 2 - t.dialog.clientWidth / 2 + "px", position: "fixed" }),
                                        t.dialog.classList.add("tg-dialog-fixed"),
                                        i && (i.style.display = "none"),
                                        e(!0)
                                    );
                                (t.dialog.style.position = "absolute"),
                                    t.dialog.classList.remove("tg-dialog-fixed"),
                                    i && (i.style.display = "inline-block"),
                                    (0, o.computePosition)(n, t.dialog, {
                                        placement: t.options.dialogPlacement,
                                        middleware: [(0, o.autoPlacement)({ autoAlignment: !0, padding: 5 }), (0, o.shift)({ padding: 15 }), (0, o.arrow)({ element: i }), (0, o.offset)(20)],
                                    }).then(({ x: n, y: o, placement: r, middlewareData: s }) => {
                                        if ((Object.assign(t.dialog.style, { left: `${n}px`, top: `${o}px` }), s.arrow)) {
                                            const t = s.arrow.x,
                                                e = s.arrow.y,
                                                n = { top: "bottom", right: "left", bottom: "top", left: "right" }[r.split("-")[0]];
                                            i && Object.assign(i.style, { left: null != t ? `${t}px` : "", top: null != e ? `${e}px` : "", [n]: "-4px" });
                                        }
                                        return e(!0);
                                    });
                            });
                        });
                },
                500: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.computeDots = e.dotsWrapperHtmlString = void 0),
                        (e.dotsWrapperHtmlString = function () {
                            const t = document.createElement("div");
                            return t.classList.add("tg-dialog-dots"), (t.id = "tg-dialog-dots"), t.outerHTML;
                        }),
                        (e.computeDots = (t) => {
                            let e = "";
                            return (
                                t.tourSteps.length &&
                                    t.tourSteps.forEach((i, n) => {
                                        const o = document.createElement("span");
                                        o.classList.add("tg-dot"), n === t.activeStep && o.classList.add("tg-dot-active"), (e += o.outerHTML);
                                    }),
                                e
                            );
                        });
                },
                737: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.keyPressHandler = e.clickOutsideHandler = e.handleDestroyListeners = e.handleInitListeners = void 0),
                        (e.clickOutsideHandler = async function (t) {
                            if ((t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), !(t.target instanceof Element))) return;
                            const e = this.backdrop.getBoundingClientRect();
                            if (t.clientX >= e.x && t.clientX <= e.x + e.width && t.clientY >= e.y && t.clientY <= e.y + e.height) return;
                            const i = this.dialog.getBoundingClientRect();
                            (t.clientX >= i.x && t.clientX <= i.x + i.width && t.clientY >= i.y && t.clientY <= i.y + i.height) || this.dialog.contains(t.target) || (await this.exit());
                        }),
                        (e.keyPressHandler = async function (t) {
                            return "Escape" === t.key && this.options.exitOnEscape
                                ? (t.preventDefault(), void (await this.exit()))
                                : "ArrowRight" === t.key && this.options.keyboardControls
                                ? (t.preventDefault(),
                                  void this.visitStep("next").catch((t) => {
                                      this.options.debug && console.warn(t);
                                  }))
                                : "ArrowLeft" === t.key && this.options.keyboardControls
                                ? (t.preventDefault(),
                                  void this.visitStep("prev").catch((t) => {
                                      this.options.debug && console.warn(t);
                                  }))
                                : void 0;
                        }),
                        (e.handleInitListeners = function () {
                            const t = () => {
                                    let t = document.getElementById("tg-dialog-next-btn");
                                    t && !this._trackedEvents.nextBtnClickEvent.initialized && (t.addEventListener("click", this._trackedEvents.nextBtnClickEvent.fn), (this._trackedEvents.nextBtnClickEvent.initialized = !0));
                                },
                                e = () => {
                                    let t = document.getElementById("tg-dialog-prev-btn");
                                    t && !this._trackedEvents.prevBtnClickEvent.initialized && (t.addEventListener("click", this._trackedEvents.prevBtnClickEvent.fn), (this._trackedEvents.prevBtnClickEvent.initialized = !0));
                                },
                                i = () => {
                                    let t = document.getElementById("tg-dialog-close-btn");
                                    t && !this._trackedEvents.closeBtnClickEvent.initialized && (t.addEventListener("click", this._trackedEvents.closeBtnClickEvent.fn, !1), (this._trackedEvents.closeBtnClickEvent.initialized = !0));
                                },
                                n = () => {
                                    this._trackedEvents.outsideClickEvent.initialized || (document.body.addEventListener("click", this._trackedEvents.outsideClickEvent.fn, !1), (this._trackedEvents.outsideClickEvent.initialized = !0));
                                },
                                o = () => {
                                    this._trackedEvents.keyPressEvent.initialized || (window.addEventListener("keydown", this._trackedEvents.keyPressEvent.fn, !1), (this._trackedEvents.keyPressEvent.initialized = !0));
                                };
                            return new Promise(
                                (r) => (
                                    this.options.showButtons && t(),
                                    this.options.showButtons && e(),
                                    this.options.closeButton && i(),
                                    this.options.exitOnClickOutside && n(),
                                    (this.options.keyboardControls || this.options.exitOnEscape) && o(),
                                    r(!0)
                                )
                            );
                        }),
                        (e.handleDestroyListeners = function () {
                            const t = () => {
                                    let t = document.getElementById("tg-dialog-next-btn");
                                    t && (t.removeEventListener("click", this._trackedEvents.nextBtnClickEvent.fn), (this._trackedEvents.nextBtnClickEvent.initialized = !1));
                                },
                                e = () => {
                                    let t = document.getElementById("tg-dialog-prev-btn");
                                    t && (t.removeEventListener("click", this._trackedEvents.prevBtnClickEvent.fn), (this._trackedEvents.prevBtnClickEvent.initialized = !1));
                                },
                                i = () => {
                                    let t = document.getElementById("tg-dialog-close-btn");
                                    t && (t.removeEventListener("click", this._trackedEvents.closeBtnClickEvent.fn, !1), (this._trackedEvents.closeBtnClickEvent.initialized = !1));
                                },
                                n = () => {
                                    document.body.removeEventListener("click", this._trackedEvents.outsideClickEvent.fn, !1), (this._trackedEvents.outsideClickEvent.initialized = !1);
                                },
                                o = () => {
                                    window.removeEventListener("keydown", this._trackedEvents.keyPressEvent.fn, !1), (this._trackedEvents.keyPressEvent.initialized = !1);
                                };
                            return new Promise(
                                (r) => (
                                    this.options.showButtons && t(),
                                    this.options.showButtons && e(),
                                    this.options.closeButton && i(),
                                    this.options.exitOnClickOutside && n(),
                                    (this.options.keyboardControls || this.options.exitOnEscape) && o(),
                                    r(!0)
                                )
                            );
                        });
                },
                121: (t, e, i) => {
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    const n = i(319),
                        o = i(693);
                    e.default = function () {
                        return new Promise(async (t) => {
                            (this.backdrop.style.display = "block"),
                                await (0, n.computeBackdropPosition)(this),
                                (this.dialog.style.display = "block"),
                                this.options.dialogAnimate && this.isVisible && this.dialog.classList.add("animate-position"),
                                await (0, o.computeDialogPosition)(this),
                                this.options.dialogAnimate &&
                                    setTimeout(() => {
                                        this.dialog.classList.remove("animate-position");
                                    }, 300),
                                (this.isVisible = !0),
                                window.onresize ||
                                    (window.onresize = () => {
                                        (0, n.computeBackdropPosition)(this), (0, o.computeDialogPosition)(this);
                                    }),
                                window.onscroll ||
                                    (window.onscroll = () => {
                                        (0, o.computeDialogPosition)(this);
                                    }),
                                await setTimeout(() => t(!0), 300);
                        });
                    };
                },
                830: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.default = (t, e) => {
                            e.scrollIntoView({ behavior: t.options.autoScrollSmooth ? "smooth" : "auto", block: "end", inline: "nearest" });
                        });
                },
                755: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.default = async function (t) {
                            return new Promise(async (e, i) => {
                                let n = [];
                                t.options.steps && t.options.steps.length && (n = t.options.steps.map((t) => ("string" == typeof t.target && (t.target = document.querySelector(t.target)), t.target || (t.target = document.body), t)));
                                const o = document.querySelectorAll("[data-tg-tour]");
                                return (
                                    o &&
                                        o.forEach((e) => {
                                            const i = e.getAttribute("data-tg-title"),
                                                o = e.getAttribute("data-tg-tour"),
                                                r = e.getAttribute("data-tg-group"),
                                                s = e.getAttribute("data-tg-order"),
                                                a = e.getAttribute("data-tg-fixed"),
                                                l = e.getAttribute("data-tg-margin");
                                            t.options.targetPadding && t.options.autoScrollOffset
                                                ? (e.style.scrollMargin = (l ? l + t.options.targetPadding : t.options.autoScrollOffset + t.options.targetPadding) + "px 0")
                                                : (e.style.scrollMargin = (l || "30") + "px 0"),
                                                n.push({ title: i || void 0, order: s ? Number(s) : 999, target: e, content: o || void 0, fixed: null !== a && "false" !== a, group: r || void 0 });
                                        }),
                                    t.group && (n = n.filter((e) => e.group === t.group)),
                                    n.sort(function (t, e) {
                                        return new Date(t.order) < new Date(e.order) ? -1 : 1;
                                    }),
                                    (t.tourSteps = n),
                                    t.tourSteps.length ? e(!0) : i("No tour steps detected" + (t.group ? " in group: " + t.group : ""))
                                );
                            });
                        });
                },
                971: function (t, e, i) {
                    var n =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    const o = n(i(755)),
                        r = i(693),
                        s = n(i(570));
                    e.default = async function (t) {
                        this.options.steps &&
                            (this.options.steps.push(...t),
                            await (0, o.default)(this),
                            this.isVisible &&
                                (await (0, r.updateDialogHtml)(this).catch((t) => {
                                    this.options.debug && console.warn(t);
                                })),
                            this.isVisible &&
                                this.updatePositions().catch((t) => {
                                    this.options.debug && console.warn(t);
                                }),
                            this.isVisible && (await (0, s.default)(".tg-dialog").then(async () => (await this.destroyListeners(), await this.initListeners(), !0))));
                    };
                },
                544: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.default = async function () {
                            if (this._globalBeforeExitCallback)
                                try {
                                    await this._globalBeforeExitCallback();
                                } catch (t) {
                                    return;
                                }
                            (this.dialog.style.display = "none"),
                                (this.backdrop.style.display = "none"),
                                (this.isVisible = !1),
                                this.options.rememberStep || (this.activeStep = 0),
                                this.options.debug && console.info("Tour exited"),
                                await this.destroyListeners(),
                                setTimeout(() => {
                                    this._globalAfterExitCallback && this._globalAfterExitCallback();
                                }, 0);
                        });
                },
                283: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.delFinishedTour = e.getIsFinished = void 0),
                        (e.getIsFinished = function (t = "tour") {
                            return localStorage.tg_tours_complete.split(",").includes(t);
                        }),
                        (e.delFinishedTour = function (t = "tour") {
                            if ("all" === t) return void (localStorage.tg_tours_complete = null);
                            const e = localStorage.tg_tours_complete.split(",");
                            localStorage.tg_tours_complete = e.filter((e) => e !== t);
                        }),
                        (e.default = async function (t = !0, e = "tour") {
                            if (this._globalFinishCallback)
                                try {
                                    await this._globalFinishCallback();
                                } catch (t) {
                                    return !1;
                                }
                            if (this.options.completeOnFinish) {
                                if (!localStorage.tg_tours_complete) return (localStorage.tg_tours_complete = [e]), t && (await this.exit()), void (this.activeStep = 0);
                                const i = localStorage.tg_tours_complete.split(",");
                                i.push(e), (localStorage.tg_tours_complete = i);
                            }
                            return t && (await this.exit()), (this.activeStep = 0), !0;
                        });
                },
                612: function (t, e, i) {
                    var n =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                    Object.defineProperty(e, "__esModule", { value: !0 }), (e.handleRefreshDialog = void 0);
                    const o = n(i(755)),
                        r = i(693),
                        s = n(i(570));
                    (e.handleRefreshDialog = async function () {
                        return new Promise(
                            async (t, e) => (
                                await (0, r.renderDialogHtml)(this)
                                    .then((t) => {
                                        t && (this.dialog.innerHTML = t);
                                    })
                                    .catch((t) => {
                                        this.options.debug && console.warn(t);
                                    }),
                                await (0, r.updateDialogHtml)(this).catch((t) => {
                                    this.options.debug && console.warn(t), e(t);
                                }),
                                await this.updatePositions(),
                                this.isVisible && (await (0, s.default)(".tg-dialog").then(async () => (await this.destroyListeners(), await this.initListeners(), !0))),
                                t(!0)
                            )
                        );
                    }),
                        (e.default = async function () {
                            return new Promise(async (t, e) => (await (0, o.default)(this).catch((t) => e(t)), this.computeBackdropAttributes(), await this.refreshDialog().catch((t) => e(t)), t(!0)));
                        });
                },
                340: function (t, e, i) {
                    var n =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    const o = i(693),
                        r = n(i(570));
                    e.default = async function (t) {
                        if (t)
                            return (
                                Object.assign(this.options, t),
                                this.computeBackdropAttributes(),
                                await (0, o.renderDialogHtml)(this)
                                    .then((t) => {
                                        t && (this.dialog.innerHTML = t);
                                    })
                                    .catch((t) => {
                                        this.options.debug && console.warn(t);
                                    }),
                                await (0, o.updateDialogHtml)(this).catch((t) => {
                                    this.options.debug && console.warn(t);
                                }),
                                this.isVisible && (await (0, r.default)(".tg-dialog").then(async () => (await this.destroyListeners(), await this.initListeners(), !0))),
                                this
                            );
                    };
                },
                330: function (t, e, i) {
                    var n =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    const o = n(i(570)),
                        r = n(i(755));
                    e.default = async function (t) {
                        return new Promise(async (e, i) => {
                            if (this.isVisible) return this.options.debug && console.warn("Tour already active"), i("Tour already active");
                            t && (this.group = t), this.options.debug && console.info("Start tour");
                            const n = this;
                            try {
                                await (0, r.default)(n);
                            } catch (t) {
                                return this.options.debug && console.warn(t), i(t);
                            }
                            return (
                                await n.visitStep(this.activeStep).catch((t) => (this.options.debug && console.warn(t), i(t))),
                                await (0, o.default)(".tg-dialog").then(async () => {
                                    await this.initListeners(), this.options.dialogAnimate && this.dialog.classList.add("animate-position");
                                }),
                                e(!0)
                            );
                        });
                    };
                },
                483: function (t, e, i) {
                    var n =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                    Object.defineProperty(e, "__esModule", { value: !0 }), (e.handleVisitPrevStep = e.handleVisitNextStep = e.goToStep = void 0);
                    const o = i(693),
                        r = n(i(830));
                    function s(t, e) {
                        return new Promise(async (i, n) => {
                            if (e >= t.tourSteps.length) return n("End of tour steps");
                            if (e < 0) return n("Start of tour steps");
                            const s = t.activeStep,
                                a = t.tourSteps[s],
                                l = t.tourSteps[e];
                            if (!l || !a) return n("Step not found by index");
                            if (t._globalBeforeChangeCallback && e !== s)
                                try {
                                    await t._globalBeforeChangeCallback();
                                } catch (t) {
                                    return n(t);
                                }
                            if (a.beforeLeave)
                                try {
                                    await a.beforeLeave(a, l);
                                } catch (t) {
                                    return n(t);
                                }
                            if (l.beforeEnter)
                                try {
                                    await l.beforeEnter(a, l);
                                } catch (t) {
                                    return n(t);
                                }
                            return (
                                "string" == typeof l.target && (t.tourSteps[e].target = document.querySelector(l.target)),
                                (l.target && t.tourSteps[e].target) || (t.tourSteps[e].target = document.body),
                                (t.activeStep = Number(e)),
                                await (0, o.updateDialogHtml)(t).catch((e) => {
                                    t.options.debug && console.warn(e), n(e);
                                }),
                                t.options.autoScroll && l.target !== document.body && (await (0, r.default)(t, l.target)),
                                await t.updatePositions(),
                                a.afterLeave && (await a.afterLeave(a, l)),
                                l.afterEnter && (await l.afterEnter(a, l)),
                                t._globalAfterChangeCallback && e !== s && (await t._globalAfterChangeCallback()),
                                i(!0)
                            );
                        });
                    }
                    (e.handleVisitNextStep = async function () {
                        return new Promise(async (t, e) => {
                            const i = this.activeStep + 1;
                            try {
                                await this.visitStep(i);
                            } catch (t) {
                                return e(t);
                            }
                            return t(!0);
                        });
                    }),
                        (e.handleVisitPrevStep = async function () {
                            return new Promise(async (t, e) => {
                                const i = this.activeStep - 1;
                                try {
                                    await this.visitStep(i);
                                } catch (t) {
                                    return e(t);
                                }
                                return t(!0);
                            });
                        }),
                        (e.goToStep = s),
                        (e.default = async function (t) {
                            return new Promise(async (e, i) => {
                                if (("string" == typeof t && (t = "next" === t ? this.activeStep + 1 : this.activeStep - 1), !(t >= this.tourSteps.length))) return await s(this, t).catch((t) => i(t)), e(!0);
                                await this.finishTour(!0, this.group);
                            });
                        });
                },
                717: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    e.default = {
                        nextLabel: "Next",
                        prevLabel: "Back",
                        finishLabel: "Finish",
                        hidePrev: !1,
                        hideNext: !1,
                        dialogClass: "",
                        dialogZ: 999,
                        dialogWidth: 0,
                        dialogMaxWidth: 340,
                        dialogAnimate: !0,
                        dialogPlacement: void 0,
                        backdropClass: "",
                        backdropColor: "rgba(20,20,21,0.84)",
                        backdropAnimate: !0,
                        targetPadding: 30,
                        completeOnFinish: !0,
                        showStepDots: !0,
                        stepDotsPlacement: "footer",
                        showButtons: !0,
                        showStepProgress: !0,
                        progressBar: "",
                        keyboardControls: !0,
                        exitOnEscape: !0,
                        exitOnClickOutside: !0,
                        autoScroll: !0,
                        autoScrollSmooth: !0,
                        autoScrollOffset: 20,
                        closeButton: !0,
                        rememberStep: !1,
                        debug: !0,
                        steps: [],
                    };
                },
                570: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.default = function (t) {
                            return new Promise((e) => {
                                if (document.querySelector(t)) return e(document.querySelector(t));
                                const i = new MutationObserver(() => {
                                    document.querySelector(t) && (e(document.querySelector(t)), i.disconnect());
                                });
                                i.observe(document.body, { childList: !0, subtree: !0 });
                            });
                        });
                },
            },
            e = {};
        function i(n) {
            var o = e[n];
            if (void 0 !== o) return o.exports;
            var r = (e[n] = { exports: {} });
            return t[n].call(r.exports, r, r.exports, i), r.exports;
        }
        return (
            (i.d = (t, e) => {
                for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
            }),
            (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
            (i.r = (t) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (i.p = ""),
            i(131),
            i(797)
        );
    })()
);

var main_categories = [
    "Alimentación y bebidas",
    "Alimentari e cura della casa",
    "Alimentos y Bebidas",
    "Amazon Devices & Accessories",
    "Amazon Launchpad",
    "Amazon Renewed",
    "Amazon Renewed : Productos Reacondicionados",
    "Animalerie",
    "App e Giochi",
    "Appareils Amazon et Accessoires",
    "Appliances",
    "Applis et Jeux",
    "Apps & Games",
    "Apps for Android",
    "Apps y Juegos",
    "Arts, Crafts & Sewing",
    "Audible Books & Originals",
    "Auto e Moto",
    "Auto et Moto",
    "Automotive",
    "Automotriz y Motocicletas",
    "Baby",
    "Baby Products",
    "Bags, Wallets and Luggage",
    "Beauté et Parfum",
    "Beauty",
    "Beauty & Personal Care",
    "Bebé",
    "Bébé et Puériculture",
    "Belleza",
    "Bellezza",
    "Books",
    "Boutique cartes cadeaux",
    "Boutique Kindle",
    "Bricolage",
    "Bricolaje y herramientas",
    "Buoni regalo",
    "Business, Industry & Science",
    "Camera & Photo",
    "Camera & Photo Products",
    "Cancelleria e prodotti per ufficio",
    "Car & Motorbike",
    "Casa e cucina",
    "CD e Vinili",
    "CD et Vinyles",
    "CDs & Vinyl",
    "CDs y vinilos",
    "Cell Phones & Accessories",
    "Cheques regalo",
    "Climate Pledge Friendly",
    "Clothing & Accessories",
    "Clothing, Shoes & Accessories",
    "Clothing, Shoes & Jewelry",
    "Coche y moto",
    "Collectible Coins",
    "Commerce, Industrie et Science",
    "Commercio, Industria e Scienza",
    "Computer & Accessories",
    "Computers",
    "Computers & Accessories",
    "Cuisine et Maison",
    "Deportes y aire libre",
    "Deportes y Aire Libre",
    "Digital Educational Resources",
    "Digital Music",
    "Dispositivi Amazon & Accessori",
    "Dispositivos Amazon y accesorios",
    "Dispositivos Amazon y Accesorios",
    "DIY & Tools",
    "DIY, Tools & Garden",
    "DVD",
    "DVD & Blu-ray",
    "DVD et Blu-ray",
    "Electrónica",
    "Electrónicos",
    "Electronics",
    "Electronics & Photo",
    "Elettronica",
    "Entertainment Collectibles",
    "Epicerie",
    "Equipaje",
    "Fai da te",
    "Fashion",
    "Film e TV",
    "Food, Beverages & Alcohol",
    "Foreign Language Books",
    "Fournitures de bureau",
    "Garden",
    "Garden & Outdoors",
    "Giardino e giardinaggio",
    "Gift Cards",
    "Giochi e giocattoli",
    "Grandes electrodomésticos",
    "Grandi elettrodomestici",
    "Grocery",
    "Grocery & Gourmet Food",
    "Grocery & Gourmet Foods",
    "Gros électroménager",
    "Handmade Products",
    "Health",
    "Health & Household",
    "Health & Personal Care",
    "Health, Household & Personal Care",
    "Herramientas y Mejoras del Hogar",
    "High-Tech",
    "Hobbies",
    "Hogar y cocina",
    "Hogar y Cocina",
    "Home",
    "Home & Kitchen",
    "Home Improvement",
    "Hygiène et Santé",
    "Illuminazione",
    "Iluminación",
    "Industria, empresas y ciencia",
    "Industria, Empresas y Ciencia",
    "Industrial & Scientific",
    "Informatica",
    "Informática",
    "Informatique",
    "Instrumentos musicales",
    "Instrumentos Musicales",
    "Instruments de musique et Sono",
    "Japanese Books",
    "Jardin",
    "Jardín",
    "Jeux et Jouets",
    "Jeux vidéo",
    "Jewellery",
    "Juguetes y juegos",
    "Juguetes y Juegos",
    "Kindle Store",
    "Kitchen",
    "Kitchen & Dining",
    "Large Appliances",
    "Libri",
    "Libri in altre lingue",
    "Libros",
    "Lighting",
    "Livres",
    "Livres anglais et étrangers",
    "Logiciels",
    "Luggage & Bags",
    "Luminaires et Éclairage",
    "Luxury Beauty",
    "Magazine Subscriptions",
    "Magazines",
    "Mobile Phones & Communication Products",
    "Moda",
    "Mode",
    "Movies & TV",
    "Movies & TV Shows",
    "Music",
    "Música",
    "Música Digital",
    "Musica Digitale",
    "Musical Instruments",
    "Musical Instruments & DJ",
    "Musical Instruments, Stage & Studio",
    "Office Products",
    "Oficina y papelería",
    "Patio, Lawn & Garden",
    "PC & Video Games",
    "Películas y Series de TV",
    "Películas y TV",
    "Pet Supplies",
    "Prima infanzia",
    "Prime Video",
    "Prodotti Handmade",
    "Prodotti per animali domestici",
    "Productos Handmade",
    "Productos para animales",
    "Productos para mascotas",
    "Produits Handmade",
    "Ropa, Zapatos y Accesorios",
    "Salud y cuidado personal",
    "Salud y Cuidado Personal",
    "Salute e cura della persona",
    "Shoes & Handbags",
    "Software",
    "Sport e tempo libero",
    "Sporting Goods",
    "Sports & Outdoors",
    "Sports Collectibles",
    "Sports et Loisirs",
    "Sports, Fitness & Outdoors",
    "Stationery & Office Supplies",
    "Strumenti Musicali",
    "Tarjetas de Regalo",
    "Téléchargement de Musique",
    "Tienda Kindle",
    "Tools & Home Improvement",
    "Toys",
    "Toys & Games",
    "Unique Finds",
    "Video Games",
    "Videogames",
    "Videogiochi",
    "Videojuegos",
    "Watches",
];
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "iconClicked") {
        main();
    }
});
function checkLoggedIn() {
    chrome.runtime.sendMessage({ action: "checkLoggedIn" }, function (response) {
        var loggedIn = response.loggedIn;
        return loggedIn;
    });
}
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
var top_value_important = 40;
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    document.getElementById("topBar_Name").onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        document.getElementById("searchResult").style.opacity = 0;
        document.getElementById("progressBar").style.opacity = 0;
        document.getElementById("bottomBar").style.opacity = 0;
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        // Calculate the new position for the element
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Limit the drag to the top of the window
        const newTop = elmnt.offsetTop - pos2;
        if (newTop >= 0) {
            // Check if the new top position is not negative (above the window top)
            elmnt.style.top = newTop + "px";
            top_value_important = newTop;
            console.log(top_value_important);
        }
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.getElementById("searchResult").style.opacity = 1;
        document.getElementById("progressBar").style.opacity = 1;
        document.getElementById("bottomBar").style.opacity = 1;
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function average_product_research() {
    var ratings = 0;
    var price = 0;
    var bsr = 0;
    var review = 0;
    var counter = 0;
    var imageProducts = document.querySelectorAll(".imageProduct");
    imageProducts.forEach(function (element) {
        if (getComputedStyle(element).display !== "none") {
            ratings += parseFloat(element.getAttribute("ratings"));
            price += parseFloat(element.getAttribute("price"));
            if (element.getAttribute("bsr") !== "-") {
                bsr += parseFloat(element.getAttribute("bsr"));
            }
            review += parseFloat(element.getAttribute("review"));
            counter++;
        }
    });
    document.getElementById("avgRatings_h1").innerHTML = numberWithCommas((ratings / counter).toFixed(2));
    document.getElementById("avgPrice_h1").innerHTML = numberWithCommas((price / counter).toFixed(2));
    document.getElementById("avgBSR_h1").innerHTML = numberWithCommas((bsr / counter).toFixed(0));
    document.getElementById("avgReview_h1").innerHTML = numberWithCommas((review / counter).toFixed(0));
}
function Sponsored_filter() {
    var Sponsored = document.querySelectorAll("div.Sponsored");
    var Sponsored_table = document.querySelectorAll("tr.Sponsored");
    var Sponsored_count = Sponsored.length;
    var showingCounter_total = 0;

    if (document.getElementById("show_hide_Sponsor") != null && document.getElementById("show_hide_Sponsor").checked) {
        for (var k = 0; k < Sponsored_count; k++) {
            Sponsored[k].style.display = "block";
            Sponsored_table[k].style.display = "table-row";
        }
        showingCounter_total = showingCounter + Sponsored_count;
    } else {
        for (var k = 0; k < Sponsored_count; k++) {
            Sponsored[k].style.display = "none";
            Sponsored_table[k].style.display = "none";
        }
        showingCounter_total = showingCounter;
    }

    document.getElementById("totalProduct").innerHTML = totalCount;
    document.getElementById("showing").innerHTML = showingCounter_total;
}
function sorting_top10(isAscending, sortValue) {
    // Search result sorting ~ Image View
    var imageProducts = Array.from(document.querySelectorAll("#imageView .imageProduct"));
    imageProducts.sort(function (a, b) {
        if (isAscending) {
            return parseFloat(a.getAttribute(sortValue)) - parseFloat(b.getAttribute(sortValue));
        } else {
            return parseFloat(b.getAttribute(sortValue)) - parseFloat(a.getAttribute(sortValue));
        }
    });
    var imageView = document.getElementById("imageView");
    imageProducts.forEach(function (product) {
        imageView.appendChild(product);
    });

    // Search result sorting ~ Tabular View
    var tableRows = Array.from(document.querySelectorAll("#tableView tbody tr"));
    tableRows.sort(function (a, b) {
        if (isAscending) {
            return parseFloat(a.getAttribute(sortValue)) - parseFloat(b.getAttribute(sortValue));
        } else {
            return parseFloat(b.getAttribute(sortValue)) - parseFloat(a.getAttribute(sortValue));
        }
    });
    var tableViewTbody = document.querySelector("#tableView tbody");
    tableRows.forEach(function (row) {
        tableViewTbody.appendChild(row);
    });

    top10_average();
}

function top10_average() {
    /* Top 10 ~ average */
    var hiddenCount = 0;
    var top10_counter = 0;
    var imageProducts = document.getElementsByClassName("imageProduct");

    for (var i = 0; i < imageProducts.length; i++) {
        if (window.getComputedStyle(imageProducts[i]).display !== "none") {
            top10_counter++;
        } else {
            hiddenCount++;
        }
    }

    if (top10_counter > 10) {
        top10_counter = 10;
    }

    var ratings = 0;
    var price = 0;
    var bsr = 0;
    var review = 0;

    for (var i = 0; i < top10_counter; i++) {
        var div2check = document.querySelector(".imageProduct:nth-child(" + (i + 1) + ")");

        if (window.getComputedStyle(div2check).display !== "none") {
            ratings += parseFloat(div2check.getAttribute("ratings"));
            price += parseFloat(div2check.getAttribute("price"));

            if (div2check.getAttribute("bsr") !== "-") {
                bsr += parseFloat(div2check.getAttribute("bsr"));
            }

            review += parseFloat(div2check.getAttribute("review"));
        }
    }

    document.getElementById("avgRatings_top10").getElementsByTagName("h5")[0].innerHTML = numberWithCommas((ratings / top10_counter).toFixed(2));
    document.getElementById("avgPrice_top10").getElementsByTagName("h5")[0].innerHTML = (price / top10_counter).toFixed(2);
    document.getElementById("avgBSR_top10").getElementsByTagName("h5")[0].innerHTML = numberWithCommas((bsr / top10_counter).toFixed(0));
    document.getElementById("avgReview_top10").getElementsByTagName("h5")[0].innerHTML = numberWithCommas((review / top10_counter).toFixed(0));
}

let height_win = window.innerHeight;
let only_first_time = false;
function fix_height() {
    let original_height = 431;
    if (height_win < original_height + 205 + 43 + 7 + 36) {
        if (only_first_time == false) {
            top_value_important = 0;
            only_first_time = true;
        }
        searchResult_height = height_win - 43 - 7 - 36;
        original_height = searchResult_height - 205;
        wrapper = searchResult_height + 43 + 7 + 36;
        document.getElementById("searchResult").style.height = searchResult_height + "px";
        document.getElementById("imageView").style.height = original_height + "px";
        document.getElementById("tableView").style.height = original_height + "px";
        document.getElementById("wrapper").style.height = wrapper + "px";
        document.getElementById("amzInspenct_container").style.top = top_value_important + "px";
    } else {
        document.getElementById("searchResult").style.height = "636px";
        document.getElementById("imageView").style.height = original_height + "px";
        document.getElementById("tableView").style.height = original_height + "px";
        document.getElementById("wrapper").style.height = "720px";
        document.getElementById("amzInspenct_container").style.top = top_value_important + "px";
    }
}

function secondAjax(price, ratings, sale, productURL, imgSrc, productTitle, asin, totalCount, i, adv) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", productURL, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            if (String(data).indexOf("productTitle") > 0 && String(data).indexOf("imgTagWrapperId") > 0) {
                var bsr;

                if (data.match(/Best\sSellers\sRank(.|\n)*?(\d+)(,\d+)*\s+in\s+([^(]+?)\s*\(.*?See\sTop\s100/g)) {
                    bsr = String(data.match(/Best\sSellers\sRank(.|\n)*?(\d+)(,\d+)*\s+in\s+([^(]+?)\s*\(.*?See\sTop\s100/g)[0]);
                    bsr = bsr
                        .replace(/(\r\n|\n|\r)/gm, "")
                        .replace("#", "")
                        .replace(/,/g, "");
                    bsr = bsr.split("in")[0];
                    bsr = bsr.replace(/\D+/gm, "");
                    bsr = parseInt(bsr);
                } else if (data.match(/Posizione\snella\sclassifica\sBestseller\sdi\sAmazon(.|\n)*?(\d+)(,\d+)*\s+in\s+([^(]+?)\s*\(.*?Visualizza\si\sTop\s100/g)) {
                    bsr = String(data.match(/Posizione\snella\sclassifica\sBestseller\sdi\sAmazon(.|\n)*?(\d+)(,\d+)*\s+in\s+([^(]+?)\s*\(.*?Visualizza\si\sTop\s100/g)[0]);
                    bsr = bsr
                        .replace(/(\r\n|\n|\r)/gm, "")
                        .replace("n. ", "")
                        .replace(/,/g, "");
                    bsr = bsr.split("in")[0];
                    bsr = bsr.replace(/\D+/gm, "");
                    bsr = parseInt(bsr);
                } else if (data.match(/Clasificación\sen\slos\smás\svendidos\sde\sAmazon(.|\n)*?(\d+)(,\d+)*\s+en\s+([^(]+?)\s*\(.*?Ver\sel\sTop\s100/g)) {
                    bsr = String(data.match(/Clasificación\sen\slos\smás\svendidos\sde\sAmazon(.|\n)*?(\d+)(,\d+)*\s+en\s+([^(]+?)\s*\(.*?Ver\sel\sTop\s100/g)[0]);
                    bsr = bsr
                        .replace(/(\r\n|\n|\r)/gm, "")
                        .replace("nº", "")
                        .replace(/,/g, "")
                        .replace("100", "");
                    bsr = bsr.replace(/\D+/gm, "");
                    bsr = parseInt(bsr);
                } else if (data.match(/Classement\sdes\smeilleures\sventes\sd'Amazon(.|\n)*?(\d+)(,\d+)*\s+en\s+([^(]+?)\s*\(.*?Voir\sles\s100/g)) {
                    bsr = String(data.match(/Classement\sdes\smeilleures\sventes\sd'Amazon(.|\n)*?(\d+)(,\d+)*\s+en\s+([^(]+?)\s*\(.*?Voir\sles\s100/g)[0]);
                    bsr = bsr
                        .replace(/(\r\n|\n|\r)/gm, "")
                        .replace("nº", "")
                        .replace(/,/g, "")
                        .replace("100", "");
                    bsr = bsr.replace(/\D+/gm, "");
                    bsr = parseInt(bsr);
                } else if (data.match(/Amazon\sBestseller(.|\n)*?(\d+)(,\d+)*\s+in\s+([^(]+?)\s*\(.*?See\sTop\s100/g)) {
                    bsr = String(data.match(/Amazon\sBestseller(.|\n)*?(\d+)(,\d+)*\s+in\s+([^(]+?)\s*\(.*?See\sTop\s100/g)[0]);
                    bsr = bsr
                        .replace(/(\r\n|\n|\r)/gm, "")
                        .replace("#", "")
                        .replace(/,/g, "");
                    bsr = bsr.split("in")[0];
                    bsr = bsr.replace(/\D+/gm, "");
                    bsr = parseInt(bsr);
                } else {
                    bsr = "-";
                }

                var weight;
                var pound;
                try {
                    weight = String(
                        data.match(
                            /prodDetSectionEntry">\s(Item\sWeight|Dimensioni\sprodotto|Peso\sdel\sproducto|Poids\sde\sl'article)(.|\n)*?">(.|\n)*?[+-]?([0-9]*[.])?[0-9]+(.|\n)*?(pound|pounds|Pound|Pounds|Lbs|lbs|ounce|ounces|Ounce|Ounces|oz|Oz|kilogram|kilograms|Kilogram|Kilograms|chilogrammo|Chilogrammo|chilogrammi|Chilogrammi|kg|Kg|kilogramo|Kilogramo|kilogramos|Kilogramos|gram|grams|Gram|Grams|grammo|Grammo|grammi|Grammi|g|gramo|Gramo|gramos|Gramos|gramme|Gramme|grammes|Grammes|kilogramme|Kilogramme|kilogrammes|Kilogrammes)/g
                        )[0]
                    );
                    weight = weight.replace(/prodDetSectionEntry">\s(Item\sWeight|Dimensioni\sprodotto|Peso\sdel\sproducto|Poids\sde\sl'article)(.|\n)*?">/gm, "");
                } catch (error) {
                    try {
                        weight = String(
                            data.match(
                                /(Package\sDimensions|Product\sDimensions|Dimensioni\sdel\scollo|Neck\ssize|Dimensiones\sdel\sproducto|Dimensions\sdu\sproduit|Dimensions\sdu\scolis|Poids)(.|\n)*?x(.|\n)*?;(.|\n)*?(pound|pounds|Pound|Pounds|Lbs|lbs|ounce|ounces|Ounce|Ounces|oz|Oz|kilogram|kilograms|Kilogram|Kilograms|chilogrammo|Chilogrammo|chilogrammi|Chilogrammi|kg|Kg|kilogramo|Kilogramo|kilogramos|Kilogramos|gram|grams|Gram|Grams|grammo|Grammo|grammi|Grammi|g|gramo|Gramo|gramos|Gramos|gramme|Gramme|grammes|Grammes|kilogramme|Kilogramme|kilogrammes|Kilogrammes)/g
                            )[0]
                        );
                        weight = weight.replace(/(Package\sDimensions|Product\sDimensions|Dimensioni\sdel\scollo|Neck\ssize|Dimensiones\sdel\sproducto|Dimensions\sdu\sproduit|Dimensions\sdu\scolis|Poids)(.|\n)*?x(.|\n)*?;/gm, "");
                    } catch (error) {
                        weight = "-";
                    }
                }
                if (weight.length > 1) {
                    weight = weight.split(" ");
                    unit = weight[weight.length - 1];
                    weight = weight[weight.length - 2].replace(/[^0-9.]/g, "");
                    weight = parseFloat(weight);

                    if (/pound|pounds|Pound|Pounds|Lbs|lbs/i.test(unit)) {
                        pound = weight;
                    } else if (/ounce|ounces|Ounce|Ounces|oz|Oz/i.test(unit)) {
                        pound = weight * 0.0625;
                    } else if (/kilogram|kilograms|Kilogram|Kilograms|chilogrammo|Chilogrammo|chilogrammi|Chilogrammi|kg|kilogramo|Kilogramo|kilogramos|Kilogramos|kilogramme|Kilogramme|kilogrammes|Kilogrammes/i.test(unit)) {
                        pound = weight * 2.205;
                    } else if (/gram|grams|Gram|Grams|grammo|Grammo|grammi|Grammi|g|gramo|Gramo|gramos|Gramos|gramme|Gramme|grammes|Grammes/i.test(unit)) {
                        pound = weight * 0.002;
                    } else {
                    }
                } else {
                    weight = "-";
                }

                var review;
                try {
                    review = parseFloat(
                        String(data.match(/<span id="acrCustomerReviewText" class="a-size-base">(.|\n)*?<\/span>/gm))
                            .replace('<span id="acrCustomerReviewText" class="a-size-base">', "")
                            .replace("ratings", "")
                            .replace("</span>", "")
                            .replace(",", "")
                    );
                } catch {
                    review = 0;
                }
                // ============================ sale
                var sale_data = parseInt(sale);
                if (sale_data < 50) sale = "below 50";
                else sale = "above " + sale;

                var brand = "";
                var brand_link = "";
                var category = "";
                brand = String(data.match(/<a id="bylineInfo" class="a-link-normal".*?<\/a>/gm));
                brand_link = brand;
                brand = String(brand.match(/>.*?</gm));
                brand = brand.replace(">Brand: ", "").replace("<", "").replace(">", "").replace("Visit the ", "");
                brand_link = String(brand_link.match(/<a id="bylineInfo" class="a-link-normal" href=".*?"/gm));
                brand_link = brand_link.replace('<a id="bylineInfo" class="a-link-normal" href="', "").replace('"', "");

                category = data.match(/(\d+)(,\d+)*\s+in\s+([^(]+?)\s*\(.*?See\sTop\s100/gm);
                if (category != null) {
                    if (category.length > 1) {
                        category = category[0];
                    }
                    category = String(category);
                    category = category.split(" in ")[1];
                    var flag_category = false;
                    for (var p = 0; p < main_categories.length; p++) {
                        if (category.includes(main_categories[p])) {
                            category = main_categories[p];
                            flag_category = true;
                        }
                    }
                    if (flag_category == false) {
                        category = "-";
                    }
                } else {
                    category = "-";
                }
                if (bsr >= minBSR && bsr <= maxBSR && pound >= minWeight && pound <= maxWeight && review >= minReview && review <= maxReview) {
                    var bookmarkImgLink = "";
                    var bookmarkClass = "";
                    if (all_bookmark.indexOf(asin) < 0) {
                        bookmarkImgLink = chrome.runtime.getURL("img/bookmark.png");
                        bookmarkClass = "bookmark";
                    } else {
                        bookmarkImgLink = chrome.runtime.getURL("img/bookmarked.png");
                        bookmarkClass = "bookmark bookmarked";
                    }

                    var adv_class = "";
                    var adv_html = "";
                    if (adv == true) {
                        adv_class = "Sponsored";
                        adv_html = '<br/><div class="adv_badge">Sponsored</div>';
                    } else {
                        showingCounter++;
                    }

                    var imageView_product =
                        '<div class="imageProduct ' +
                        adv_class +
                        '" index="' +
                        totalCount +
                        '" asin="' +
                        asin +
                        '" sale="' +
                        sale_data +
                        '" price="' +
                        price +
                        '" review="' +
                        review +
                        '" bsr="' +
                        bsr +
                        '" ratings="' +
                        ratings +
                        '" weight="' +
                        weight +
                        '">' +
                        '  <div class="imageProduct_close"><img src="' +
                        chrome.runtime.getURL("img/close.png") +
                        '" class="productRemove"></div>' +
                        '  <div class="imageProduct_bookmark"><img src="' +
                        bookmarkImgLink +
                        '" class="' +
                        bookmarkClass +
                        '"></div>' +
                        '  <a href="' +
                        productURL +
                        '" target="_blank">' +
                        '    <img src="' +
                        imgSrc +
                        '">' +
                        '    <div class="imageProduct_hover">' +
                        '      <p>Price: <span class="imageProduct_price">' +
                        price +
                        "</span></p>" +
                        '      <p>Review: <span class="imageProduct_review">' +
                        review +
                        "</span></p>" +
                        '      <p>Ratings: <span class="imageProduct_ratings">' +
                        ratings +
                        "</span></p>" +
                        '      <p>BSR: <span class="imageProduct_BSR">' +
                        bsr +
                        "</span></p>" +
                        '      <p>Last Month Sale: <span class="imageProduct_BSR">' +
                        sale +
                        "</span></p>" +
                        '      <p>Weight[pound]: <span class="imageProduct_Weight">' +
                        pound +
                        "</span><span> pound</span></p>" +
                        "      <br/>" +
                        '      <p class="imageProduct_title">' +
                        productTitle +
                        adv_html +
                        "</p>" +
                        "    </div>" +
                        "  </a>" +
                        "</div>";

                    document.getElementById("imageView").innerHTML += imageView_product;

                    var tableView_product =
                        '<tr class="' +
                        adv_class +
                        '" index="' +
                        totalCount +
                        '" asin="' +
                        asin +
                        '" sale="' +
                        sale_data +
                        '" price="' +
                        price +
                        '" review="' +
                        review +
                        '" bsr="' +
                        bsr +
                        '" ratings="' +
                        ratings +
                        '" weight="' +
                        weight +
                        '">' +
                        '  <td><img src="' +
                        bookmarkImgLink +
                        '" class="' +
                        bookmarkClass +
                        '"></td>' +
                        "  <td>" +
                        totalCount +
                        "</td>" +
                        "  <td>" +
                        asin +
                        "</td>" +
                        '  <td><img src="' +
                        imgSrc +
                        '"></td>' +
                        '  <td class="tableTitle"><a href="' +
                        productURL +
                        '" target="_blank">' +
                        productTitle +
                        adv_html +
                        "</a></td>" +
                        '  <td><a href="' +
                        brand_link +
                        '" target="_blank">' +
                        brand +
                        "</a></td>" +
                        "  <td>" +
                        category +
                        "</td>" +
                        '  <td><a href="#" data-asin="' +
                        asin +
                        '">' +
                        price +
                        "</a></td>" +
                        "  <td>" +
                        review +
                        "</td>" +
                        "  <td>" +
                        ratings +
                        "</td>" +
                        "  <td>" +
                        bsr +
                        "</td>" +
                        "  <td>" +
                        sale +
                        "</td>" +
                        "  <td>" +
                        pound +
                        "</td>" +
                        '  <td class="tableProduct_close"><img src="' +
                        chrome.runtime.getURL("img/close.png") +
                        '" class="productRemove"></td>' +
                        "</tr>";

                    document.getElementById("tableView_tbody").innerHTML += tableView_product;
                }

                Sponsored_filter();
                sorting_top10(isAscending, sortValue);
                average_product_research();
            }
            ajax1_counter++;
        }
    };
    xhr.send();
}
var totalCount = 0,
    showingCounter = 0;
var cliked_search = false;
var minPrice, maxPrice, minBSR, maxBSR, minReview, maxReview, minRatings, maxRatings, minWeight, maxWeight, minSale, maxSale;
var fromPageNumber, toPageNumber;
var currentPage = "",
    basePage = "";
var ajax1_counter;
var all_asins = "";
var all_bookmark = "";
var pageLoadtime = 500;
var ajaxParent_counter = 0;
var isAscending = true; // default true value
var sortValue = "index"; // default sort by index
var showingCounter_total = 0;

function main() {
    if (!document.getElementById("amzInspenct_container")) {
        var plugins =
            '   <div id="amzInspect_blackBg"></div>' +
            '   <div id="amzInspenct_container">' +
            '       <div id="wrapper">' +
            '           <div id="topBar">' +
            '               <div id="topBar_Name" data-tg-order="1" data-tg-tour="<p>You can hover and drag the logo to resize to tool vertically</p>" data-tg-title="Logo and Verital Resizer"> <img src="' +
            chrome.runtime.getURL("./img/small_logo.png") +
            '"></div>' +
            '               <div id="topBar_Buttons">' +
            '                   <div data-tg-order="2" data-tg-tour="<p>You can use this toggle button to show or hide sponser adv product from search result</p>" data-tg-title="Show/Hide Sponser Adv">' +
            '                       <label class="el-switch">' +
            '                           <input type="checkbox" name="switch" checked id="show_hide_Sponsor">' +
            '                           <span class="el-switch-style"></span>' +
            "                       </label>" +
            '                       <span class="margin-r">Show Sponsor Ads</span>' +
            "                   </div>" +
            '                   <div data-tg-order="3" data-tg-tour="<p>You can use this toggle button to show or hide Average Box while searching for Niches. Cause its useless in Niche Searching. But You will definately in need of this while product validation and market research</p>" data-tg-title="Show/Hide Average Menu">' +
            '                       <label class="el-switch">' +
            '                           <input type="checkbox" name="switch" checked id="show_hide_average">' +
            '                           <span class="el-switch-style"></span>' +
            "                       </label>" +
            '                       <span class="margin-r">Show Average</span>' +
            "                   </div>" +
            "               </div>" +
            '               <div id="topBar_Menus" data-tg-order="4" data-tg-tour="<p>You can use this toggle button display the filtered search result in either Image View or Table view as your preference</p>" data-tg-title="Image & Table View of Search Result">' +
            '                   <input type="radio" class="viewChanger" id="radio1" name="radios" value="imageView" checked>' +
            '                   <label for="radio1" id="menuFirst">Image View</label>' +
            '                   <input type="radio" class="viewChanger" id="radio2" name="radios" value="tableView">' +
            '                   <label for="radio2" id="menuLast">Table View</label>' +
            "               </div>" +
            '               <div id="logout_button">Logout</div>' +
            '               <div id="closeButton"><img src="' +
            chrome.runtime.getURL("./img/icons8-macos-close-32.png") +
            '"></div>' +
            '               <div id="maxmin"><img src="' +
            chrome.runtime.getURL("./img/icons8-macos-minimize.png") +
            '"></div>' +
            '               <div id="tourGuide"><img src="' +
            chrome.runtime.getURL("./img/Infobox_info_icon.svg") +
            '"></div>' +
            "           </div>" +
            '           <div id="searchResult">' +
            '               <div id="averageResult">' +
            '                   <div id="searchVolumn">Found ~ <span id="numberofResult">x</span> Keyword ~ <span id="searchTerm">x</span></div>' +
            '                   <div id="avgContainers" data-tg-order="5" data-tg-tour="<p>This Average Box shows the average BSR, Price, Review & Ratings of all the Search Result. And Also top 10 average BSR, Price, Review & Ratings accourding to the sorting. Default Sorting value is numeric number as shown in Amazon Search Page</p>" data-tg-title="Average Box">' +
            '                       <div id="avgBSR" class="eachAvg">' +
            "                           <p>Average Best Selling Rank</p>" +
            '                           <div id="avgBSR_h1">0</div>' +
            '                           <div id="avgBSR_top10">' +
            "                               <h4>Top 10</h4>" +
            "                               <h5>0.00</h5>" +
            "                           </div>" +
            "                       </div>" +
            '                       <div id="avgPrice" class="eachAvg">' +
            "                           <p>Average Price</p>" +
            '                           <div id="avgPrice_h1">0</div>' +
            '                           <div id="avgPrice_top10">' +
            "                               <h4>Top 10</h4>" +
            "                               <h5>0.00</h5>" +
            "                           </div>" +
            "                       </div>" +
            '                       <div id="avgReview" class="eachAvg">' +
            "                           <p>Average Reviews</p>" +
            '                           <div id="avgReview_h1">0</div>' +
            '                           <div id="avgReview_top10">' +
            "                               <h4>Top 10</h4>" +
            "                               <h5>0.00</h5>" +
            "                           </div>" +
            "                       </div>" +
            '                       <div id="avgRatings" class="eachAvg">' +
            "                           <p>Average Ratings</p>" +
            '                           <div id="avgRatings_h1">0</div>' +
            '                           <div id="avgRatings_top10">' +
            "                               <h4>Top 10</h4>" +
            "                               <h5>0.00</h5>" +
            "                           </div>" +
            "                       </div>" +
            "                   </div>" +
            "               </div>" +
            '               <div id="filterMenu" data-tg-order="6" data-tg-tour="<p>Before Searching You can filter your search result from minimum BSR to Maximum BSR and same for other filters. The up and down arrow is used for Sorting the results in ascending and desending order</p>" data-tg-title="Filter Menu">' +
            '                   <div id="filterSerial" data-sort="index">' +
            '                       <img src="' +
            chrome.runtime.getURL("./img/number.png") +
            '">' +
            '                       <div class="sorting_ascen sort"></div>' +
            "                   </div>" +
            '                   <div id="filterPrice" class="filterEach" data-sort="price">' +
            '                       <div class="sorting_not sort"></div>' +
            "                       <p>Price</p>" +
            '                       <input type="number" name="" placeholder="Min" id="minPrice" min="0">' +
            '                       <input type="number" name="" placeholder="Max" id="maxPrice" min="0">           ' +
            "                   </div>" +
            '                   <div id="filterBSR" class="filterEach" data-sort="bsr">' +
            '                       <div class="sorting_not sort"></div>' +
            "                       <p>Best Seller Rank</p>" +
            '                       <input type="number" name="" placeholder="Min" id="minBSR" min="0">' +
            '                       <input type="number" name="" placeholder="Max" id="maxBSR" min="0">         ' +
            "                   </div>" +
            '                   <div id="filterSale" class="filterEach" data-sort="sale">' +
            '                       <div class="sorting_not sort"></div>' +
            "                       <p>Last Month Sale</p>" +
            '                       <input type="number" name="" placeholder="Min" id="minSale" min="0">' +
            '                       <input type="number" name="" placeholder="Max" id="maxSale" min="0">' +
            "                   </div>" +
            '                   <div id="filterReview" class="filterEach" data-sort="review">' +
            '                       <div class="sorting_not sort"></div>' +
            "                       <p>Review</p>" +
            '                       <input type="number" name="" placeholder="Min" id="minReview" min="0">' +
            '                       <input type="number" name="" placeholder="Max" id="maxReview" min="0">          ' +
            "                   </div>" +
            '                   <div id="filterRating" class="filterEach" data-sort="ratings">' +
            '                       <div class="sorting_not sort"></div>' +
            "                       <p>Rating</p>" +
            '                       <input type="number" name="" placeholder="Min" id="minRatings" max="5" min="0">' +
            '                       <input type="number" name="" placeholder="Max" id="maxRatings" max="5" min="0">' +
            "                   </div>" +
            '                   <div id="filterWeight" class="filterEach" data-sort="weight">' +
            "                       <p>Weight (pound)</p>" +
            '                       <input type="number" name="" placeholder="Min" id="minWeight" min="0">' +
            '                       <input type="number" name="" placeholder="Max" id="maxWeight" min="0">' +
            "                   </div>" +
            '                   <div id="filterPageNumber" class="filterEach">' +
            "                       <p>PageNumber</p>" +
            '                       <input type="number" name="" placeholder="From" id="fromPageNumber">' +
            '                       <input type="number" name="" placeholder="To" id="toPageNumber" max="' +
            parseInt(document.querySelectorAll(".s-pagination-disabled")[1] ? document.querySelectorAll(".s-pagination-disabled")[1].innerHTML : 1) +
            '">           ' +
            "                   </div>" +
            "               </div>" +
            '               <div id="imageView">' +
            "               </div>" +
            '               <div id="tableView">' +
            '                   <table id="tbl_exporttable_to_xls">' +
            "                       <thead>" +
            "                           <tr>" +
            "                               <th>&nbsp;</th>" +
            "                               <th>#</th>" +
            "                               <th>ASIN</th>" +
            "                               <th>Thumbnail</th>" +
            '                               <th id="tableTitle">Title</th>' +
            "                               <th>Brand</th>" +
            "                               <th>Category</th>" +
            "                               <th>Price</th>" +
            "                               <th>Review</th>" +
            "                               <th>Ratings</th>" +
            "                               <th>Best Seller Rank</th>" +
            "                               <th>Last Month Sell</th>" +
            "                               <th>Weight [pound]</th>" +
            "                               <th>&nbsp;</th>" +
            "                           </tr>" +
            "                       </thead>" +
            '                       <tbody id="tableView_tbody">' +
            "                       </tbody>" +
            "                   </table>" +
            "               </div>" +
            '               <div id="bookmarkView">' +
            "                   <table>" +
            "                       <thead>" +
            "                           <tr>" +
            "                               <th>ASIN</th>" +
            "                               <th>Thumbnail</th>" +
            '                               <th id="tableTitle">Title</th>' +
            "                               <th>Brand</th>" +
            "                               <th>Category</th>" +
            "                               <th>Price</th>" +
            "                               <th>Review</th>" +
            "                               <th>Ratings</th>" +
            "                               <th>Best Seller Rank</th>" +
            "                               <th>Weight [pound]</th>" +
            "                               <th>&nbsp;</th>" +
            "                           </tr>" +
            "                       </thead>" +
            "                       <tbody>" +
            "                       </tbody>" +
            "                   </table>" +
            "               </div>" +
            "           </div>" +
            '           <div id="progressBar" data-tg-order="7" data-tg-tour="<p>This is the Progress Bar, helps you to undestand how many pages are remaining to search</p>" data-tg-title="Progress Bar"><span id="progressBarSpan" style="width: 0%;"></span></div>' +
            '           <div id="bottomBar">' +
            '               <div id="scanningPage" data-tg-order="8" data-tg-tour="<p>This shows the number of page is currently scaning.</p>" data-tg-title="Scanning Page">Scaning Page : <span>1</span></div>' +
            '               <div id="rightBottomBar">' +
            '                   <div id="showing_product" data-tg-order="9" data-tg-tour="<p>This shows the total number of product found and how many is showing accourding to your filter</p>" data-tg-title="Showing Data">Showing <span id="showing">0</span> out of <span id="totalProduct">0</span></div>' +
            '                   <div id="exceltDownload" data-tg-order="10" data-tg-tour="<p>You can Download your Data in excel format</p>" data-tg-title="Excel Download"><img src="' +
            chrome.runtime.getURL("./img/download.png") +
            '"></div>' +
            '                   <button id="searchButton" data-tg-order="11" data-tg-tour="<p>This is the search button. After setting your desire filters press search. Remember you cant change the filter after you pressed this button</p>" data-tg-title="Search">Search</button>' +
            "               </div>" +
            "           </div>" +
            "       </div>" +
            "   </div>";

        var login_form =
            '<div id="amzInspect_blackBg"></div>' +
            '<div id="amzInspenct_container">' +
            '<div id="wrapper">' +
            '<div id="topBar">' +
            '<div id="topBar_Name"> <img src="' +
            chrome.runtime.getURL("./img/small_logo.png") +
            '"></div>' +
            '<div id="closeButton"><img src="' +
            chrome.runtime.getURL("./img/icons8-macos-close-32.png") +
            '"></div>' +
            "</div>" +
            '<div id="formView">' +
            '<div id="loginForm">' +
            "<p><strong>If you dont have active subscritption, please renew and then login.</strong></p><br/>" +
            '<table cellspacing="0" cellpadding="0">' +
            "<tr>" +
            "<td><p>Email:</p></td>" +
            '<td><input type="text" name="" id="userName"></td>' +
            "</tr>" +
            "<tr>" +
            "<td><p>Password:</p></td>" +
            '<td><input type="password" name="" id="passWord"></td>' +
            "</tr>" +
            "<tr>" +
            '<td colspan="2"><button id="login_submit">Submit</button></td>' +
            "</tr>" +
            "</table>" +
            '<p>If you are new in here, please <a href="https://user.nerd-spy.com/login">Register</a></p>' +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        var minimize_versin =
            '<div id="minimized_version"><img id="logo_minimized" src="' + chrome.runtime.getURL("./img/small_logo.png") + '"><img id="maxClick" src="' + chrome.runtime.getURL("./img/icons8-macos-maximize.png") + '"></div>';

        var mainBoxMother = document.createElement("div");
        mainBoxMother.id = "mainBOX_mother";
        document.body.appendChild(mainBoxMother);

        var minBoxMother = document.createElement("div");
        minBoxMother.id = "minBoxMother";
        document.body.appendChild(minBoxMother);

        chrome.runtime.sendMessage({ action: "checkLoggedIn" }, function (response) {
            var loggedIn = response.loggedIn;
            if (loggedIn == "no_subscription") {
                Fnon.Alert.Danger("You Dont have Active Subscription.", "NerdSpy Says", "Go to Subscription Page", () => {
                    window.open("https://user.nerd-spy.com/login", "_blank");
                });
            } else if (loggedIn == true) {
                document.getElementById("mainBOX_mother").innerHTML = plugins;
                document.getElementById("toPageNumber").value = parseInt(document.getElementsByClassName("s-pagination-disabled")[1] ? document.getElementsByClassName("s-pagination-disabled")[1].innerHTML : 1);
                document.getElementById("closeButton").addEventListener("click", function () {
                    location.reload();
                });
                var viewChangers = document.getElementsByClassName("viewChanger");
                for (var i = 0; i < viewChangers.length; i++) {
                    viewChangers[i].addEventListener("change", function () {
                        if (this.value == "imageView") {
                            document.getElementById("imageView").style.display = "block";
                            document.getElementById("tableView").style.display = "none";
                            document.getElementById("bookmarkView").style.display = "none";
                        }
                        if (this.value == "tableView") {
                            document.getElementById("imageView").style.display = "none";
                            document.getElementById("tableView").style.display = "block";
                            document.getElementById("bookmarkView").style.display = "none";
                        }
                        if (this.value == "bookmarkView") {
                            document.getElementById("imageView").style.display = "none";
                            document.getElementById("tableView").style.display = "none";
                            document.getElementById("bookmarkView").style.display = "block";
                        }
                    });
                }
                chrome.storage.local.get(["ada_bookmark"], function (result) {
                    all_bookmark = result.ada_bookmark;
                    if (all_bookmark === undefined) {
                        all_bookmark = "";
                    }
                });

                document.addEventListener("click", function (event) {
                    var target = event.target;
                    if (target.classList.contains("bookmarkProduct_close")) {
                        var $this = target;
                        var asin = $this.closest("tr").getAttribute("asin");
                        all_bookmark = all_bookmark.replace(asin + ",", "");
                        try {
                            document.querySelector('.imageProduct[asin="' + asin + '"] .imageProduct_bookmark img').src = chrome.runtime.getURL("img/bookmark.png");
                            document.querySelector('.imageProduct[asin="' + asin + '"] .imageProduct_bookmark img').classList.remove("bookmarked");
                            document.querySelector('#tableView_tbody tr[asin="' + asin + '"] td:first-child img').src = chrome.runtime.getURL("img/bookmark.png");
                            document.querySelector('#tableView_tbody tr[asin="' + asin + '"] td:first-child img').classList.remove("bookmarked");
                        } catch (error) {
                            //console.log('items not present in search results');
                        }
                        chrome.storage.local.set({
                            ada_bookmark: all_bookmark,
                        });
                        $this.closest("tr").remove();
                    }
                });

                document.getElementById("show_hide_average").addEventListener("change", function () {
                    var avgContainers = document.getElementById("avgContainers");
                    var imageView = document.getElementById("imageView");
                    var tableView = document.getElementById("tableView");

                    if (window.getComputedStyle(avgContainers).display === "none") {
                        avgContainers.style.display = "block";
                        imageView.style.height = "431px";
                        tableView.style.height = "431px";
                    } else {
                        avgContainers.style.display = "none";
                        imageView.style.height = "511px";
                        tableView.style.height = "511px";
                    }
                });

                document.getElementById("show_hide_Sponsor").addEventListener("change", function () {
                    Sponsored_filter();
                    average_product_research();
                    top10_average();
                });

                dragElement(document.getElementById("amzInspenct_container"));

                var sortButtons = document.querySelectorAll(".sort");
                sortButtons.forEach(function (button) {
                    button.addEventListener("click", function () {
                        sortValue = this.parentNode.getAttribute("data-sort");
                        if (this.classList.contains("sorting_ascen")) {
                            isAscending = false;
                            this.classList.remove("sorting_ascen");
                            this.classList.add("sorting_dscen");
                        } else if (this.classList.contains("sorting_dscen")) {
                            isAscending = true;
                            this.classList.remove("sorting_dscen");
                            this.classList.add("sorting_ascen");
                        } else {
                            isAscending = true;
                            sortButtons.forEach(function (btn) {
                                btn.classList.add("sorting_not");
                                btn.classList.remove("sorting_ascen");
                                btn.classList.remove("sorting_dscen");
                            });
                            this.classList.remove("sorting_not");
                            this.classList.add("sorting_ascen");
                        }
                        sorting_top10(isAscending, sortValue);
                    });
                });

                document.addEventListener("click", function (event) {
                    if (event.target.closest(".imageProduct_close")) {
                        var index = event.target.closest(".imageProduct").getAttribute("index");
                        event.target.closest(".imageProduct").remove();
                        document.querySelector('#tableView table tbody tr[index="' + index + '"]').remove();
                        average_product_research();
                        top10_average();
                        showingCounter--;
                        document.getElementById("showing").innerHTML = showingCounter;
                    } else if (event.target.closest(".tableProduct_close")) {
                        var index = event.target.closest(".tableProduct_close").parentElement.getAttribute("index");
                        document.querySelector('#tableView table tbody tr[index="' + index + '"]').remove();
                        document.querySelector('#imageView .imageProduct[index="' + index + '"]').remove();
                        average_product_research();
                        top10_average();
                        showingCounter--;
                        document.getElementById("showing").innerHTML = showingCounter;
                    }
                });

                const tg = new tourguide.TourGuideClient({});
                document.addEventListener("click", function (event) {
                    if (event.target.closest("#maxmin")) {
                        const divToHide = document.getElementById("mainBOX_mother");
                        divToHide.style.transition = "opacity 0.5s ease-out"; // Add a smooth ease-out transition
                        divToHide.style.opacity = "0"; // Set opacity to 0 to hide the div
                        document.getElementById("minBoxMother").innerHTML = minimize_versin;
                    } else if (event.target.closest("#maxClick")) {
                        const divToHide = document.getElementById("mainBOX_mother");
                        divToHide.style.transition = "opacity 0.5s ease-out"; // Add a smooth ease-out transition
                        divToHide.style.opacity = 1; // Set opacity to 0 to hide the div
                        document.getElementById("minBoxMother").innerHTML = "";
                    } else if (event.target.closest("#logout_button")) {
                        Fnon.Wait.Infinity();
                        Fnon.Hint.Light("Loging Out from the Tool. See You Soon..");
                        chrome.runtime.sendMessage({ action: "logout" }, function (response) {
                            var loggedOut = response.loggedOut;
                            if (loggedOut == true) {
                                Fnon.Wait.Remove();
                                Fnon.Alert.Success("Logout Successfull", "NerdSpy Says", "Ok Button", () => {
                                    location.reload();
                                });
                            }
                        });
                    } else if (event.target.closest("#tourGuide")) {
                        tg.start();
                    } else {
                    }
                });

                document.addEventListener("click", function (event) {
                    var target = event.target;
                    if (target.classList.contains("bookmark")) {
                        var thisParent = target.parentElement.parentElement;
                        var asin = thisParent.getAttribute("asin");
                        var index = thisParent.getAttribute("index");
                        var normalImg = document.querySelector('#imageView .imageProduct[index="' + index + '"] .bookmark');
                        var tableImg = document.querySelector('#tableView_tbody tr[index="' + index + '"] .bookmark');

                        if (target.classList.contains("bookmarked")) {
                            all_bookmark = all_bookmark.replace(asin + ",", "");
                            normalImg.src = chrome.runtime.getURL("img/bookmark.png");
                            normalImg.classList.remove("bookmarked");
                            tableImg.src = chrome.runtime.getURL("img/bookmark.png");
                            tableImg.classList.remove("bookmarked");
                        } else {
                            if (all_bookmark.indexOf(asin) < 0) {
                                all_bookmark = all_bookmark + asin + ",";
                            }
                            normalImg.src = chrome.runtime.getURL("img/bookmarked.png");
                            normalImg.classList.add("bookmarked");
                            tableImg.src = chrome.runtime.getURL("img/bookmarked.png");
                            tableImg.classList.add("bookmarked");
                        }

                        chrome.storage.local.set({
                            ada_bookmark: all_bookmark,
                        });
                    }
                });

                // Grab Current Page Location
                currentPage = window.location.href;
                basePage = currentPage.match(/amazon\.(co\.uk|com\.au|com\.mx|co.jp|ca|com|de|ae|it|es|fr|in|sg)/gm);

                document.getElementById("exceltDownload").addEventListener("click", function () {
                    // Select rows from table_id
                    let data = "";
                    const tableData = [];
                    const rows = document.querySelectorAll("table#tbl_exporttable_to_xls tr:not([style*='display: none'])");
                    for (const row of rows) {
                        const rowData = [];
                        var counter = 1;
                        for (const [index, column] of row.querySelectorAll("th, td").entries()) {
                            if (counter > 1 && counter < 12) {
                                // To retain the commas in the "Description" column, we can enclose those fields in quotation marks.
                                if ((index + 1) % 3 === 0) {
                                    rowData.push('"' + column.innerText.replace(/\,/g, "|") + '"');
                                } else {
                                    rowData.push(column.innerText.replace(/\,/g, "|"));
                                }
                            }
                            counter++;
                        }
                        tableData.push(rowData.join(","));
                    }
                    data += tableData.join("\n");
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(
                        new Blob([data], {
                            type: "text/csv",
                        })
                    );
                    a.setAttribute("download", "data.csv");
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                });

                cliked_search = false;
                document.getElementById("searchButton").addEventListener("click", async function () {
                    totalCount = 0;
                    showingCounter = 0;
                    cliked_search = true;
                    // disable all the Filter inputs and search buttons
                    document.getElementById("searchButton").disabled = true;
                    document.getElementById("searchButton").classList.add("deactivate");
                    var filterInputs = document.querySelectorAll(".filterEach input");
                    for (var i = 0; i < filterInputs.length; i++) {
                        filterInputs[i].disabled = true;
                        filterInputs[i].classList.add("deactivate");
                    }
                    // Grab Filter values
                    if (document.getElementById("minPrice").value.length === 0) {
                        minPrice = 0;
                    } else {
                        minPrice = parseFloat(document.getElementById("minPrice").value);
                    }
                    if (document.getElementById("maxPrice").value.length === 0) {
                        maxPrice = 9999;
                    } else {
                        maxPrice = parseFloat(document.getElementById("maxPrice").value);
                    }
                    if (document.getElementById("minBSR").value.length === 0) {
                        minBSR = 0;
                    } else {
                        minBSR = parseFloat(document.getElementById("minBSR").value);
                    }
                    if (document.getElementById("maxBSR").value.length === 0) {
                        maxBSR = 9999999;
                    } else {
                        maxBSR = parseFloat(document.getElementById("maxBSR").value);
                    }
                    if (document.getElementById("minReview").value.length === 0) {
                        minReview = 0;
                    } else {
                        minReview = parseFloat(document.getElementById("minReview").value);
                    }
                    if (document.getElementById("maxReview").value.length === 0) {
                        maxReview = 9999999;
                    } else {
                        maxReview = parseFloat(document.getElementById("maxReview").value);
                    }
                    if (document.getElementById("minRatings").value.length === 0) {
                        minRatings = 0;
                    } else {
                        minRatings = parseFloat(document.getElementById("minRatings").value);
                    }
                    if (document.getElementById("maxRatings").value.length === 0) {
                        maxRatings = 5;
                    } else {
                        maxRatings = parseFloat(document.getElementById("maxRatings").value);
                    }
                    // weight
                    if (document.getElementById("minWeight").value.length === 0) {
                        minWeight = -1;
                    } else {
                        minWeight = parseFloat(document.getElementById("minWeight").value);
                    }
                    if (document.getElementById("maxWeight").value.length === 0) {
                        maxWeight = 1000;
                    } else {
                        maxWeight = parseFloat(document.getElementById("maxWeight").value);
                    }
                    // Sale
                    // weight
                    if (document.getElementById("minSale").value.length === 0) {
                        minSale = 0;
                    } else {
                        minSale = parseFloat(document.getElementById("minSale").value);
                    }
                    if (document.getElementById("maxSale").value.length === 0) {
                        maxSale = 1000000;
                    } else {
                        maxSale = parseFloat(document.getElementById("maxSale").value);
                    }
                    // Pre Set PageNumber Value
                    if (document.getElementById("fromPageNumber").value.length === 0) {
                        fromPageNumber = 1;
                    } else {
                        fromPageNumber = parseFloat(document.getElementById("fromPageNumber").value);
                    }
                    if (document.getElementById("toPageNumber").value.length === 0) {
                        toPageNumber = 1;
                    } else {
                        toPageNumber = parseFloat(document.getElementById("toPageNumber").value);
                    }
                    // Showing Result Volume and Keyword:
                    var results_breadcrumb = document.querySelector(".s-breadcrumb .a-spacing-small span:first-child").innerHTML;
                    results_breadcrumb = results_breadcrumb.split("of")[1];
                    var keyword_breadcrumb = document.querySelector(".s-breadcrumb .a-spacing-small span:last-child").innerHTML;
                    document.getElementById("numberofResult").innerHTML = results_breadcrumb;
                    document.getElementById("searchTerm").innerHTML = keyword_breadcrumb;

                    for (var page = fromPageNumber; page <= toPageNumber; page++) {
                        // Scanning Page Number and Progress Bar Animation
                        document.getElementById("scanningPage").innerHTML = "Scanning Page: " + page;
                        var percentage = ((page - fromPageNumber + 1) / (toPageNumber - fromPageNumber + 1)) * 100;
                        document.getElementById("progressBarSpan").style.width = percentage + "%";

                        // Ajax 1 Fetch Data
                        ajaxParent_counter = 0;
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", currentPage + "&page=" + page, false);
                        xhr.onload = async function () {
                            var data = xhr.responseText;
                            var dataTemp = data.match(/<div data-asin="[A-Z0-9]{10}" (.|\n)*?data-index="[0-9]+"(.|\n)*?<span class="a-price-whole">/gm);
                            ajax1_counter = 0; // to trace number of DataTemp to wait until all products on a page are loaded

                            // Each Product Div ASIN Start
                            for (var i = 0; i < dataTemp.length; i++) {
                                if (dataTemp[i].includes("tetris-creative-desktop") > 0) {
                                    ajax1_counter++;
                                } else {
                                    var asin, price, review, ratings, adv;
                                    var separateData = dataTemp[i];
                                    if (separateData.search("AdHolder") > 0) {
                                        adv = true;
                                    } else {
                                        adv = false;
                                    }

                                    try {
                                        asin = String(separateData.match(/(<div data-asin=")([A-Z0-9]{10})/)[0]);
                                        asin = asin.replace('<div data-asin="', "").replace('"', ""); // asin of the current product

                                        if (all_asins.indexOf(asin) < 0) {
                                            // no repetition
                                            totalCount++; // each product counter increasing
                                            all_asins = all_asins + asin + ","; // keep this asin in record
                                            var productURL = "https://www." + basePage + "/dp/" + asin + "/";
                                            var imgSrc = String(separateData.match(/<img class="s-image" src="(.|\n)*? srcset/gm))
                                                .replace(" srcset", "")
                                                .replace('<img class="s-image" src="', "");
                                            var productTitle = String(separateData.match(/<span class="(a-size-medium|a-size-base(-plus)*) a-color-base a-text-normal">(.|\n)*?<\/span>/gm))
                                                .replace('<span class="a-size-base a-color-base a-text-normal">', "")
                                                .replace('<span class="a-size-base-plus a-color-base a-text-normal">', "")
                                                .replace("</span>", "");
                                            productTitle = productTitle.replace(/(<([^>]+)>)/gi, "");
                                            price = parseFloat(
                                                String(separateData.match(/<span class="a-offscreen">(.|\n)*?<\/span>/gm))
                                                    .replace('<span class="a-offscreen">', "")
                                                    .replace("</span>", "")
                                                    .replace(/[^\d+(\.\d{1,2})]/gm, "")
                                            );
                                            var sale = parseInt(
                                                String(separateData.match(/<span class="a-size-base a-color-secondary">(.|\n)*?\+ bought in past month/gm))
                                                    .replace("+ bought in past month", "")
                                                    .replace('<span class="a-size-base a-color-secondary">', "")
                                            );
                                            ratings = parseFloat(
                                                String(separateData.match(/<div class="a-section a-spacing-none a-spacing-top-micro"><div class="a-row a-size-small"><span aria-label="(.|\n)*? out of 5 stars/gm))
                                                    .replace('<div class="a-section a-spacing-none a-spacing-top-micro"><div class="a-row a-size-small"><span aria-label="', "")
                                                    .replace(" out of 5 stars", "")
                                                    .replace(",", "")
                                            );
                                            if (isNaN(price) || price == "NaN") {
                                                price = -1; // don't want to show this product
                                            }
                                            if (isNaN(sale) || sale == "NaN") {
                                                sale = 0; // no review means review = 0
                                            }
                                            if (isNaN(ratings) || ratings == "NaN") {
                                                ratings = 0; // no ratings means ratings = 0  //----------------------------------------------------------------------------------------------------------------------------
                                            }
                                            if (price >= minPrice && price <= maxPrice && ratings >= minRatings && ratings <= maxRatings && sale >= minSale && sale <= maxSale) {
                                                secondAjax(price, ratings, sale, productURL, imgSrc, productTitle, asin, totalCount, i, adv);
                                            } else {
                                                ajax1_counter++;
                                            }
                                        } else {
                                            ajax1_counter++;
                                        }
                                    } catch (e) {
                                        ajax1_counter++;
                                    }
                                }
                            }

                            while (ajax1_counter < dataTemp.length) {
                                await delay(pageLoadtime);
                            }

                            ajaxParent_counter = 1;
                            // Each Product Div ASIN End
                        };

                        xhr.send();

                        while (ajaxParent_counter == 0) {
                            await delay(pageLoadtime);
                        }
                    }

                    document.getElementById("scanningPage").innerHTML = "Scanning Complete";
                });
            } else {
                document.getElementById("mainBOX_mother").innerHTML = login_form;
                document.querySelector("#loginForm button").addEventListener("click", function (event) {
                    Fnon.Wait.Infinity();
                    Fnon.Hint.Light("We are checking your credentials, please wait");
                    event.preventDefault();
                    const username = document.getElementById("userName").value;
                    const password = document.getElementById("passWord").value;

                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "https://user.nerd-spy.com/api/v1/auth/login", true);
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                var response = JSON.parse(xhr.responseText);
                                if (response.data.token !== undefined) {
                                    chrome.runtime.sendMessage(
                                        {
                                            action: "login",
                                            token: response.data.token,
                                        },
                                        function (response) {
                                            if (response && response.success) {
                                                Fnon.Wait.Remove();
                                                Fnon.Alert.Success("Login successful, You can now access the tool.", "NerdSpy Says", "Ok Button", () => {
                                                    location.reload();
                                                });
                                            } else {
                                                Fnon.Wait.Remove();
                                                Fnon.Hint.Light("Wrong Info, Please Try Again");
                                            }
                                        }
                                    );
                                } else {
                                    Fnon.Wait.Remove();
                                    Fnon.Hint.Light("Wrong Info, Please Try Again");
                                }
                            } else {
                                Fnon.Wait.Remove();
                                Fnon.Hint.Light("Wrong Info, Please Try Again");
                            }
                        }
                    };
                    xhr.send(
                        JSON.stringify({
                            email: username,
                            password: password,
                        })
                    );
                });

                document.getElementById("closeButton").addEventListener("click", function () {
                    location.reload();
                });
            }
        });
    }
}

function colorReview() {
    // top sponsor adv
    var topMicroLinks = document.querySelectorAll(".a-spacing-top-micro .a-color-link");
    topMicroLinks.forEach(function (link) {
        if (!link.classList.contains("colorReview_added")) {
            link.classList.add("colorReview_added");
            var colorReview = parseInt(link.innerHTML.replace(/,/g, ""));
            if (colorReview >= 0 && colorReview <= 100) {
                link.classList.add("amz-few-ratings");
            }
            if (colorReview > 100 && colorReview <= 500) {
                link.classList.add("amz-ok-ratings");
            }
            if (colorReview > 500 && colorReview <= 1000) {
                link.classList.add("amz-many-ratings");
            }
            if (colorReview > 1000) {
                link.classList.add("amz-super-many-ratings");
            }
        }
    });

    // baki sob
    var searchResultSpans = document.querySelectorAll('div[data-component-type="s-search-result"] span.a-size-base.s-underline-text');
    searchResultSpans.forEach(function (span) {
        if (!span.classList.contains("colorReview_added")) {
            span.classList.add("colorReview_added");
            var colorReview = parseInt(span.innerHTML.replace(/,/g, ""));
            if (colorReview >= 0 && colorReview <= 100) {
                span.classList.add("amz-few-ratings");
            }
            if (colorReview > 100 && colorReview <= 500) {
                span.classList.add("amz-ok-ratings");
            }
            if (colorReview > 500 && colorReview <= 1000) {
                span.classList.add("amz-many-ratings");
            }
            if (colorReview > 1000) {
                span.classList.add("amz-super-many-ratings");
            }
        }
    });
}

window.onload = (event) => {
    setInterval(function () {
        colorReview();
        fix_height();
    }, 1500);
};
