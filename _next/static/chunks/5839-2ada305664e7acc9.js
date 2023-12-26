"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5839],
    {
        57982: function (t, e, n) {
            var i,
                c = n(2784),
                r = ["title", "titleId"];
            function a() {
                return (a = Object.assign
                    ? Object.assign.bind()
                    : function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var n = arguments[e];
                              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                          }
                          return t;
                      }).apply(this, arguments);
            }
            var l = (0, c.forwardRef)(function (t, e) {
                var n = t.title,
                    l = t.titleId,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var n,
                            i,
                            c = (function (t, e) {
                                if (null == t) return {};
                                var n,
                                    i,
                                    c = {},
                                    r = Object.keys(t);
                                for (i = 0; i < r.length; i++) (n = r[i]), e.indexOf(n) >= 0 || (c[n] = t[n]);
                                return c;
                            })(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            for (i = 0; i < r.length; i++) (n = r[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (c[n] = t[n]);
                        }
                        return c;
                    })(t, r);
                return c.createElement(
                    "svg",
                    a({ width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ref: e, "aria-labelledby": l }, o),
                    n ? c.createElement("title", { id: l }, n) : null,
                    i ||
                        (i = c.createElement("path", {
                            d:
                                "M21 9.75C21 9.94891 20.921 10.1397 20.7803 10.2803C20.6397 10.421 20.4489 10.5 20.25 10.5C20.0511 10.5 19.8603 10.421 19.7197 10.2803C19.579 10.1397 19.5 9.94891 19.5 9.75V5.56125L13.2816 11.7806C13.1408 11.9214 12.95 12.0004 12.7509 12.0004C12.5519 12.0004 12.361 11.9214 12.2203 11.7806C12.0796 11.6399 12.0005 11.449 12.0005 11.25C12.0005 11.051 12.0796 10.8601 12.2203 10.7194L18.4387 4.5H14.25C14.0511 4.5 13.8603 4.42098 13.7197 4.28033C13.579 4.13968 13.5 3.94891 13.5 3.75C13.5 3.55109 13.579 3.36032 13.7197 3.21967C13.8603 3.07902 14.0511 3 14.25 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75V9.75ZM17.25 12C17.0511 12 16.8603 12.079 16.7197 12.2197C16.579 12.3603 16.5 12.5511 16.5 12.75V19.5H4.5V7.5H11.25C11.4489 7.5 11.6397 7.42098 11.7803 7.28033C11.921 7.13968 12 6.94891 12 6.75C12 6.55109 11.921 6.36032 11.7803 6.21967C11.6397 6.07902 11.4489 6 11.25 6H4.5C4.10218 6 3.72064 6.15804 3.43934 6.43934C3.15804 6.72064 3 7.10218 3 7.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H16.5C16.8978 21 17.2794 20.842 17.5607 20.5607C17.842 20.2794 18 19.8978 18 19.5V12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12Z",
                        }))
                );
            });
            e.Z = l;
        },
        25338: function (t, e) {
            e.Z = {
                src: "/_next/static/media/memecoin.bb084c5a.png",
                height: 192,
                width: 192,
                blurDataURL:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVcOEB8VT1JGzcAACrmsi29ZhYqKipMaXFaNzzVfwo6ADBiKDPuqxnZkh7jkAA/BDDNmDvEkEDDhzXIizq3eTykTCqeQihkN0LsAAAAEHRSTlN7kWYG/v0GAGX7ZJH6+/x4KWnRWgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJxjYGdmYmDgYGNnYOcWYmERYGRn4BLh4eTkFORg4BfmFRNlFWAAMVhZQQwuER4+PpAUXDFMOwBT9wJOLFwmCQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        76111: function (t, e) {
            e.Z = { src: "/_next/static/media/burns.42a6a33e.gif", height: 325, width: 220, blurWidth: 0, blurHeight: 0 };
        },
        57531: function (t, e, n) {
            n.d(e, {
                Y: function () {
                    return i;
                },
            });
            let i = { stiffness: 100, damping: 30, restDelta: 0.001 };
        },
        10268: function (t, e, n) {
            n.d(e, {
                z: function () {
                    return m;
                },
            });
            var i,
                c = n(52322),
                r = n(2784),
                a = n(91012),
                l = n(53738),
                o = n(1842),
                x = n.n(o),
                s = n(99686),
                h = n.n(s);
            let p = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return h()({ type: "spring", stiffness: 800, damping: 80, ...t }, x());
            };
            var d = ["title", "titleId"];
            function g() {
                return (g = Object.assign
                    ? Object.assign.bind()
                    : function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var n = arguments[e];
                              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                          }
                          return t;
                      }).apply(this, arguments);
            }
            var f = (0, r.forwardRef)(function (t, e) {
                    var n = t.title,
                        c = t.titleId,
                        a = (function (t, e) {
                            if (null == t) return {};
                            var n,
                                i,
                                c = (function (t, e) {
                                    if (null == t) return {};
                                    var n,
                                        i,
                                        c = {},
                                        r = Object.keys(t);
                                    for (i = 0; i < r.length; i++) (n = r[i]), e.indexOf(n) >= 0 || (c[n] = t[n]);
                                    return c;
                                })(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(t);
                                for (i = 0; i < r.length; i++) (n = r[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (c[n] = t[n]);
                            }
                            return c;
                        })(t, d);
                    return r.createElement(
                        "svg",
                        g({ viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: e, "aria-labelledby": c }, a),
                        n ? r.createElement("title", { id: c }, n) : null,
                        i ||
                            (i = r.createElement("path", {
                                d:
                                    "M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z",
                                fill: "currentColor",
                            }))
                    );
                }),
                u = n(64435);
            let j = () => {
                let [t, e] = (0, r.useState)(!1);
                return { isTouching: t, touchEvents: { onMouseDown: () => e(!0), onMouseUp: () => e(!1), onTouchStart: () => e(!0), onTouchEnd: () => e(!1) } };
            };
            var w = n(14976);
            let m = (t) => {
                let { title: e, children: n, defaulOpened: i = !1, noToggle: o = !1, uppercase: x = !0, enableTouchTransition: s = !1, redactedText: h } = t,
                    [d, g] = (0, r.useState)(i),
                    { isTouching: m, touchEvents: y } = j();
                return (0, c.jsxs)(u.Z, {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    transform: s && m && !o ? "translate(2px, 2px)" : "translate(0px, 0px)",
                    children: [
                        e &&
                            (0, c.jsxs)(u.Z, {
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                cursor: o ? "unset" : "pointer",
                                padding: "11px 16px",
                                background: "#2E3747",
                                onClick: () => !o && g(!d),
                                gap: "8px",
                                ...y,
                                children: [
                                    (0, c.jsx)(a.x, { textStyle: "md", color: "white", fontWeight: "700", textTransform: x ? "uppercase" : void 0, fontFamily: h ? w.Ox.style.fontFamily : w.ae.style.fontFamily, children: e }),
                                    !o && (0, c.jsx)(u.Z, { animate: { rotate: d ? -45 : 0, transition: p() }, children: (0, c.jsx)(f, { width: "24px", height: "24px", color: "white", onClick: () => g(!d) }) }),
                                ],
                            }),
                        (0, c.jsx)(u.Z, {
                            width: "100%",
                            flexDirection: "column",
                            backgroundColor: "#2E3747",
                            overflow: "hidden",
                            textColor: "white",
                            textStyle: "sm",
                            children: (0, c.jsx)(u.Z, {
                                width: "100%",
                                initial: { height: d ? "auto" : 0, y: -10, opacity: 0 },
                                animate: { height: d ? "auto" : 0, y: d ? 0 : -10, opacity: d ? 1 : 0, transition: p() },
                                children: (0, c.jsx)(l.xu, {
                                    padding: e ? "0px 16px 16px 16px" : "16px",
                                    fontFamily: w.ae.style.fontFamily,
                                    textTransform: x ? "uppercase" : void 0,
                                    children: h ? (0, c.jsx)(a.x, { fontFamily: w.ae.style.fontFamily, children: h }) : n,
                                }),
                            }),
                        }),
                    ],
                });
            };
        },
        3370: function (t, e, n) {
            n.d(e, {
                Q: function () {
                    return r;
                },
            });
            var i = n(52322),
                c = n(35837);
            let r = (t) => {
                let { ...e } = t;
                return (0, i.jsx)(c.QI, { spacing: 2, marginInlineStart: "24px", sx: { "* + &, ul &": { marginTop: "8px" } }, ...e });
            };
        },
        51218: function (t, e, n) {
            n.d(e, {
                G: function () {
                    return a;
                },
                Q: function () {
                    return l.Q;
                },
            });
            var i = n(52322),
                c = n(35837);
            let r = { 1: "decimal", 2: "lower-alpha" },
                a = (t) => {
                    let { level: e = 1, ...n } = t;
                    return (0, i.jsx)(c.GS, { spacing: 2, marginInlineStart: "24px", styleType: r[e], sx: { "* + &, ol &": { marginTop: "8px" } }, ...n });
                };
            var l = n(3370);
        },
        33512: function (t, e, n) {
            n.d(e, {
                $: function () {
                    return L;
                },
            });
            var i = n(52322);
            n(2784);
            var c = n(96577),
                r = n.n(c),
                a = n(11919),
                l = n(40110),
                o = n(27440),
                x = n(71170),
                s = n(50390),
                h = n(91012),
                p = n(74045),
                d = n(54179),
                g = n(52749),
                f = n(85535),
                u = n(57982),
                j = n(25338),
                w = n(76111),
                m = n(57531),
                y = n(24747),
                b = n(40542),
                C = n(64435);
            let H = (t) => {
                let { style: e, textProps: n, size: c = "small", ...r } = t;
                return (0, i.jsx)(b.H, { style: { display: "inline-flex", alignItems: "center", ...e }, textProps: { fontSize: "14px", lineHeight: "20px", ...n }, _hover: { textDecoration: "underline" }, ...r });
            };
            var A = n(80897);
            let v = (t) => {
                    let { show: e } = t,
                        n = (0, f.Sx)({ base: "250px", lg: "300px" });
                    return (0, i.jsx)(C.Z, {
                        position: "absolute",
                        height: n,
                        width: "100%",
                        bottom: "100%",
                        zIndex: -1,
                        userSelect: "none",
                        style: { opacity: e, y: (0, p.H)(e, (t) => (1 - t) * 200) },
                        children: (0, i.jsx)(C.Z, { height: "300px", width: "100%", children: (0, i.jsx)(r(), { src: w.Z.src, alt: "burns", fill: !0, style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }) }),
                    });
                },
                E = (t) => {
                    let { show: e } = t,
                        n = (0, f.Sx)({ base: 250, lg: 300 }),
                        c = (0, f.Sx)({ base: -200, lg: -250 }),
                        r = (0, d.q)(0, m.Y);
                    return (
                        (0, g.W)(e, "change", (t) => {
                            r.set(t > 0.9 ? 1 : 0);
                        }),
                        (0, i.jsx)(C.Z, {
                            position: "absolute",
                            height: "".concat(n, "px"),
                            width: "calc(100% - 24px)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: "100%",
                            zIndex: -1,
                            style: { opacity: r, y: (0, p.H)(e, (t) => (1 - t) * 200 + c) },
                            children: (0, i.jsxs)(A.$, {
                                fontSize: 23,
                                scale: 1.2,
                                paddingX: 4,
                                children: ["WE DON’T NEED MORE MEME COINS. ", (0, i.jsx)("br", {}), "WE ONLY NEED ONE MEME COIN. ", (0, i.jsx)("br", {}), "IT’S CALLED THE MEME."],
                            }),
                        })
                    );
                },
                L = (t) => {
                    let { showBurns: e, hidden: n, type: c = "solid", showLinks: p = !0, background: d, color: g } = t,
                        w = (0, f.q0)((t) => t.isMobile);
                    return (0, i.jsxs)(a.k, {
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        ...(n ? { height: "0", overflow: "hidden" } : {}),
                        children: [
                            e && (0, i.jsx)(v, { show: e }),
                            e && (0, i.jsx)(E, { show: e }),
                            (0, i.jsx)(a.k, {
                                zIndex: "99",
                                background: null != d ? d : "gray.800",
                                width: "100%",
                                flexDir: "column",
                                padding: "solid" === c ? (w ? "0" : "32px 0") : "0",
                                justifyContent: "center",
                                alignItems: "center",
                                children: (0, i.jsxs)(a.k, {
                                    flexDir: "column",
                                    zIndex: "69",
                                    width: "calc(100% - 48px)",
                                    maxWidth: "1280px",
                                    children: [
                                        "solid" === c && (0, i.jsx)(l.i, {}),
                                        (0, i.jsxs)(o.r, {
                                            paddingTop: { base: "32px", lg: "64px" },
                                            paddingBottom: { base: "32px", lg: "64px" },
                                            width: "100%",
                                            gridTemplateColumns: { base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" },
                                            gridTemplateRows: { base: "repeat(3, auto)", lg: "repeat(1, 1fr)" },
                                            gap: { base: "24px", lg: "24px" },
                                            children: [
                                                (0, i.jsx)(x.P, {
                                                    gridRow: { base: "1", lg: "1" },
                                                    children: (0, i.jsxs)(a.k, {
                                                        flexDirection: "column",
                                                        gap: { base: "8px", lg: "16px" },
                                                        height: "100%",
                                                        alignItems: "flex-start",
                                                        children: [
                                                            (0, i.jsx)(s.X, {
                                                                as: "div",
                                                                size: "md",
                                                                color: null != g ? g : "whiteAlpha.700",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "8px",
                                                                children: (0, i.jsx)(b.H, {
                                                                    href: "/",
                                                                    title: "Memeland",
                                                                    children: (0, i.jsxs)(a.k, {
                                                                        alignItems: "center",
                                                                        gap: "8px",
                                                                        children: [
                                                                            (0, i.jsx)(r(), { src: j.Z.src, alt: "", width: 32, height: 32 }),
                                                                            (0, i.jsx)("svg", {
                                                                                width: "119",
                                                                                height: "20",
                                                                                viewBox: "0 0 119 20",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: (0, i.jsx)("path", {
                                                                                    d:
                                                                                        "M0.728 0.3H5.408L8.288 7.98L11.12 0.3H15.8V19.5H12.032L12.008 7.668L9.32 14.772H7.184L4.472 7.668L4.448 19.5H0.68L0.728 0.3ZM19.1488 0.3H31.1008V3.876H22.9168V8.076H30.1168V11.652H22.9168V15.948L31.1008 15.924V19.5H19.1488V0.3ZM34.2671 0.3H38.9471L41.8271 7.98L44.6591 0.3H49.3391V19.5H45.5711L45.5471 7.668L42.8591 14.772H40.7231L38.0111 7.668L37.9871 19.5H34.2191L34.2671 0.3ZM52.6878 0.3H64.6398V3.876H56.4558V8.076H63.6558V11.652H56.4558V15.948L64.6398 15.924V19.5H52.6878V0.3ZM67.7581 16.908V2.892L70.3501 0.3H77.4061L79.9981 2.892V6.996H76.2301V4.74L75.3421 3.876H72.4141L71.5261 4.74V15.06L72.4141 15.924H75.3421L76.2301 15.06V12.804H79.9981V16.908L77.4061 19.5H70.3501L67.7581 16.908ZM83.3675 16.908V2.892L85.9595 0.3H93.0155L95.6075 2.892V16.908L93.0155 19.5H85.9595L83.3675 16.908ZM90.9515 15.924L91.8395 15.06V4.74L90.9515 3.876H88.0235L87.1355 4.74V15.06L88.0235 15.924H90.9515ZM98.9769 0.3H102.745V19.5H98.9769V0.3ZM106.054 0.3H109.75L114.526 10.188V0.3H118.294V19.5H115.03L109.846 9.084V19.5H106.054V0.3Z",
                                                                                    fill: "white",
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                            (0, i.jsxs)(h.x, {
                                                                textStyle: "sm",
                                                                color: null != g ? g : "whiteAlpha.700",
                                                                children: [(0, i.jsx)("span", { style: { fontFamily: "sans-serif" }, role: "img", "aria-label": "Copyright", children: "\xa9️" }), " ", "2023 MEMECOIN."],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, i.jsx)(x.P, {
                                                    gridRow: { base: "2", lg: "1" },
                                                    gridColumn: { base: "1", lg: "4" },
                                                    children: (0, i.jsx)(a.k, {
                                                        flexDirection: "column",
                                                        gap: "20px",
                                                        alignItems: "flex-start",
                                                        children:
                                                            p &&
                                                            (0, i.jsxs)(a.k, {
                                                                flexDirection: "column",
                                                                gap: "24px",
                                                                children: [
                                                                    
                                                                    (0, i.jsxs)(H, {
                                                                        href: "https://www.binance.com/en/trade/MEME_USDT?type=spot",
                                                                        openNewTab: !0,
                                                                        textProps: { display: "flex", alignItems: "center", gap: "8px" },
                                                                        children: ["Buy/Sell MEME", (0, i.jsx)(u.Z, { fill: "white", width: 20, height: 20 })],
                                                                    }),
                                                                ],
                                                            }),
                                                    }),
                                                }),
                                                (0, i.jsx)(x.P, {
                                                    gridRow: { base: "3", lg: "1" },
                                                    gridColumn: { base: "1", lg: "5" },
                                                    children: (0, i.jsx)(a.k, {
                                                        flexDirection: "column",
                                                        gap: "20px",
                                                        alignItems: "flex-start",
                                                        children:
                                                            p &&
                                                            (0, i.jsxs)(a.k, {
                                                                flexDirection: "column",
                                                                gap: "24px",
                                                                children: [
                                                                    (0, i.jsx)(H, { href: "/terms-of-use", openNewTab: !1, children: "Terms of Use" }),
                                                                    (0, i.jsx)(H, { href: "/terms-fire-sale.pdf", openNewTab: !0, children: "Terms for Fire Sale" }),
                                                                    (0, i.jsx)(H, { href: "/terms-airdrop.pdf", openNewTab: !0, children: "Terms for Airdrop" }),
                                                                    (0, i.jsx)(H, { href: "/privacy", children: "Privacy Policy" }),
                                                                ],
                                                            }),
                                                    }),
                                                }),
                                                (0, i.jsx)(x.P, {
                                                    paddingTop: { base: "8px", lg: "0px" },
                                                    gridRow: { base: "4", lg: "1" },
                                                    gridColumn: { base: "1", lg: "6" },
                                                    children: (0, i.jsx)(a.k, {
                                                        flexDirection: "column",
                                                        gap: "20px",
                                                        alignItems: w ? "flex-start" : "flex-end",
                                                        children: (0, i.jsxs)(a.k, {
                                                            flexDirection: "row",
                                                            gap: "6px",
                                                            children: [(0, i.jsx)(y.Z, { type: "twitter" }), (0, i.jsx)(y.Z, { type: "discord" }), (0, i.jsx)(y.Z, { type: "telegram" })],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        80897: function (t, e, n) {
            n.d(e, {
                $: function () {
                    return p;
                },
            });
            var i = n(52322);
            n(2784);
            var c = n(11919),
                r = n(91012),
                a = n(64435),
                l = n(24741),
                o = n(89e3);
            let x = (t) => (0, i.jsx)(c.k, { background: "black", alignItems: "center", justifyContent: "center", flexDirection: "column", ...t }),
                s = (t) => (0, i.jsx)(c.k, { background: "white", alignItems: "center", justifyContent: "center", flexDirection: "column", ...t }),
                h = (t) => (0, i.jsx)(c.k, { alignItems: "center", justifyContent: "center", flexDirection: "column", ...t }),
                p = (t) => {
                    let { pixelSize: e = 3, scale: n = 1, fontSize: p = 24, padding: d = 16, paddingX: g, paddingY: f, style: u, animation: j, children: w, textAlign: m = "center" } = t,
                        y = null != n ? n : (0, o.T)(0.12, 0.12),
                        b = e * y;
                    return (0, i.jsx)(a.Z, {
                        display: "flex",
                        flexDirection: "column",
                        width: "fit-content",
                        ...u,
                        ...j,
                        children: (0, i.jsxs)(c.k, {
                            flexDirection: "column",
                            width: "fit-content",
                            children: [
                                (0, i.jsxs)(c.k, {
                                    children: [
                                        (0, i.jsxs)(c.k, {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            children: [
                                                (0, i.jsx)(x, { height: "calc(100% - ".concat(6 * b, "px)"), width: "".concat(b, "px") }),
                                                (0, i.jsxs)(h, {
                                                    height: "calc(100% - ".concat(4 * b, "px)"),
                                                    width: "".concat(b + 1, "px"),
                                                    marginRight: "-1px",
                                                    children: [
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(s, { height: "calc(100% - ".concat(4 * b, "px)"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(h, {
                                                    height: "calc(100% - ".concat(2 * b, "px)"),
                                                    width: "".concat(b + 1, "px"),
                                                    marginRight: "-1px",
                                                    children: [
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(s, { height: "calc(100% - ".concat(4 * b, "px)"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(h, {
                                                    height: "100%",
                                                    width: "".concat(b + 1, "px"),
                                                    marginRight: "-1px",
                                                    children: [
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(s, { height: "calc(100% - ".concat(4 * b, "px)"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)(c.k, {
                                            flexDirection: "column",
                                            children: [
                                                (0, i.jsx)(x, { width: "100%", height: "".concat(b, "px") }),
                                                (0, i.jsx)(c.k, {
                                                    padding: "".concat((f || d) * y, "px ").concat((g || d) * y, "px"),
                                                    background: "white",
                                                    children: (0, i.jsx)(r.x, {
                                                        fontFamily: l.Et.style.fontFamily,
                                                        fontSize: "".concat(p * y, "px"),
                                                        lineHeight: "".concat(p * y, "px"),
                                                        transform: "translateY(0)",
                                                        color: "black",
                                                        width: "100%",
                                                        height: "100%",
                                                        textAlign: m,
                                                        textTransform: "uppercase",
                                                        children: w,
                                                    }),
                                                }),
                                                (0, i.jsxs)(h, {
                                                    width: "100%",
                                                    height: "".concat(b, "px"),
                                                    flexDirection: "row",
                                                    children: [
                                                        (0, i.jsx)(x, { height: "".concat(b + 1, "px"), width: "calc(100% - ".concat(8 * b, "px)") }),
                                                        (0, i.jsx)(s, { height: "".concat(b + 2, "px"), width: "".concat(16 * b, "px") }),
                                                        (0, i.jsx)(x, { height: "".concat(b + 1, "px"), width: "calc(100% - ".concat(8 * b, "px)") }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)(c.k, {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            children: [
                                                (0, i.jsxs)(h, {
                                                    height: "100%",
                                                    width: "".concat(b + 1, "px"),
                                                    marginLeft: "-1px",
                                                    children: [
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(s, { height: "calc(100% - ".concat(4 * b, "px)"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(h, {
                                                    height: "calc(100% - ".concat(2 * b, "px)"),
                                                    width: "".concat(b + 1, "px"),
                                                    marginLeft: "-1px",
                                                    children: [
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(s, { height: "calc(100% - ".concat(4 * b, "px)"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                    ],
                                                }),
                                                (0, i.jsxs)(h, {
                                                    height: "calc(100% - ".concat(4 * b, "px)"),
                                                    width: "".concat(b + 1, "px"),
                                                    marginLeft: "-1px",
                                                    children: [
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(s, { height: "calc(100% - ".concat(4 * b, "px)"), width: "".concat(b + 1, "px") }),
                                                        (0, i.jsx)(x, { height: "".concat(2 * b, "px"), width: "".concat(b + 1, "px") }),
                                                    ],
                                                }),
                                                (0, i.jsx)(x, { height: "calc(100% - ".concat(6 * b, "px)"), width: "".concat(b, "px") }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(c.k, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    children: [
                                        (0, i.jsxs)(h, {
                                            width: "".concat(10 * b, "px"),
                                            height: "".concat(b + 1, "px"),
                                            flexDirection: "row",
                                            marginTop: "-1px",
                                            children: [
                                                (0, i.jsx)(x, { width: "".concat(2 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(s, { width: "".concat(6 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(x, { width: "".concat(2 * b, "px"), height: "".concat(b + 1, "px") }),
                                            ],
                                        }),
                                        (0, i.jsxs)(h, {
                                            width: "".concat(8 * b, "px"),
                                            height: "".concat(b + 1, "px"),
                                            flexDirection: "row",
                                            marginTop: "-1px",
                                            children: [
                                                (0, i.jsx)(x, { width: "".concat(2 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(s, { width: "".concat(4 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(x, { width: "".concat(2 * b, "px"), height: "".concat(b + 1, "px") }),
                                            ],
                                        }),
                                        (0, i.jsxs)(h, {
                                            width: "".concat(6 * b, "px"),
                                            height: "".concat(b + 1, "px"),
                                            flexDirection: "row",
                                            marginTop: "-1px",
                                            children: [
                                                (0, i.jsx)(x, { width: "".concat(1 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(s, { width: "".concat(4 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(x, { width: "".concat(1 * b, "px"), height: "".concat(b + 1, "px") }),
                                            ],
                                        }),
                                        (0, i.jsxs)(h, {
                                            width: "".concat(4 * b, "px"),
                                            height: "".concat(b + 1, "px"),
                                            flexDirection: "row",
                                            marginTop: "-1px",
                                            children: [
                                                (0, i.jsx)(x, { width: "".concat(1 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(s, { width: "".concat(2 * b, "px"), height: "".concat(b + 1, "px") }),
                                                (0, i.jsx)(x, { width: "".concat(1 * b, "px"), height: "".concat(b + 1, "px") }),
                                            ],
                                        }),
                                        (0, i.jsx)(x, { width: "".concat(2 * b, "px"), height: "".concat(b, "px"), marginTop: "-1px", children: (0, i.jsx)("span", {}) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
        },
        89e3: function (t, e, n) {
            n.d(e, {
                T: function () {
                    return c;
                },
            });
            var i = n(85535);
            let c = function (t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2.25,
                    c = (0, i.q0)((t) => t.vh),
                    r = (0, i.q0)((t) => t.vw),
                    a = (0, i.Sx)({ base: 0, lg: 1 }),
                    l = 0 === a ? t : null != e ? e : 1.2 * t;
                return Math.min(c * l, r * (l * n));
            };
        },
    },
]);
