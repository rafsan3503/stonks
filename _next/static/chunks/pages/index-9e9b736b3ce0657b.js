(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405],
    {
        87314: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return n(14527);
                },
            ]);
        },
        98886: function (e, t) {
            "use strict";
            t.Z = { src: "/_next/static/media/airdrop-planet.699254d9.gif", height: 320, width: 320, blurWidth: 0, blurHeight: 0 };
        },
        89915: function (e, t) {
            "use strict";
            t.Z = { src: "/_next/static/media/planet-firesale.f983c8b3.gif", height: 460, width: 450, blurWidth: 0, blurHeight: 0 };
        },
        14527: function (e, t, n) {
            "use strict";
            let i, s;
            n.r(t),
                n.d(t, {
                    Index: function () {
                        return nD;
                    },
                    default: function () {
                        return nk;
                    },
                });
            var l,
                r,
                o,
                a = n(52322),
                c = n(2784),
                d = n(5632),
                h = n(1199),
                x = n(27631),
                A = n(66390),
                u = n(64435),
                p = n(85535),
                g = n(66567),
                E = n(10301),
                f = n(96577),
                j = n.n(f),
                m = n(53738),
                b = n(11919),
                T = n(50390),
                S = n(91012),
                I = n(40226),
                y = n(3105),
                O = n(57035),
                w = n(91816),
                C = n(85403),
                R = n(3054);
            let H = new WeakMap();
            function L({ target: e, contentRect: t, borderBoxSize: n }) {
                var i;
                null === (i = H.get(e)) ||
                    void 0 === i ||
                    i.forEach((i) => {
                        i({
                            target: e,
                            contentSize: t,
                            get size() {
                                return (function (e, t) {
                                    if (t) {
                                        let { inlineSize: e, blockSize: n } = t[0];
                                        return { width: e, height: n };
                                    }
                                    return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : { width: e.offsetWidth, height: e.offsetHeight };
                                })(e, n);
                            },
                        });
                    });
            }
            function v(e) {
                e.forEach(L);
            }
            let N = new Set();
            var M = n(17475),
                U = n(75394);
            let D = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 }),
                k = () => ({ time: 0, x: D(), y: D() }),
                W = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
            function z(e, t, n, i) {
                let s = n[t],
                    { length: l, position: r } = W[t],
                    o = s.current,
                    a = n.time;
                (s.current = e["scroll" + r]), (s.scrollLength = e["scroll" + l] - e["client" + l]), (s.offset.length = 0), (s.offset[0] = 0), (s.offset[1] = s.scrollLength), (s.progress = (0, M.Y)(0, s.scrollLength, s.current));
                let c = i - a;
                s.velocity = c > 50 ? 0 : (0, U.R)(s.current - o, c);
            }
            let F = {
                    Enter: [
                        [0, 1],
                        [1, 1],
                    ],
                    Exit: [
                        [0, 0],
                        [1, 0],
                    ],
                    Any: [
                        [1, 0],
                        [0, 1],
                    ],
                    All: [
                        [0, 0],
                        [1, 1],
                    ],
                },
                Z = { start: 0, center: 0.5, end: 1 };
            function P(e, t, n = 0) {
                let i = 0;
                if ((void 0 !== Z[e] && (e = Z[e]), "string" == typeof e)) {
                    let t = parseFloat(e);
                    e.endsWith("px")
                        ? (i = t)
                        : e.endsWith("%")
                        ? (e = t / 100)
                        : e.endsWith("vw")
                        ? (i = (t / 100) * document.documentElement.clientWidth)
                        : e.endsWith("vh")
                        ? (i = (t / 100) * document.documentElement.clientHeight)
                        : (e = t);
                }
                return "number" == typeof e && (i = t * e), n + i;
            }
            let B = [0, 0];
            var V = n(83972),
                Y = n(95254);
            let G = { x: 0, y: 0 },
                X = new WeakMap(),
                J = new WeakMap(),
                K = new WeakMap(),
                q = (e) => (e === document.documentElement ? window : e);
            var _ = n(23617);
            function Q(e, t) {
                (0, O.K)(
                    !!(!t || t.current),
                    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
                );
            }
            let $ = () => ({ scrollX: (0, I.B)(0), scrollY: (0, I.B)(0), scrollXProgress: (0, I.B)(0), scrollYProgress: (0, I.B)(0) });
            function ee({ container: e, target: t, layoutEffect: n = !0, ...l } = {}) {
                let r = (0, y.h)($),
                    o = n ? _.L : c.useEffect;
                return (
                    o(
                        () => (
                            Q("target", t),
                            Q("container", e),
                            (function (e, { container: t = document.documentElement, ...n } = {}) {
                                let l = K.get(t);
                                l || ((l = new Set()), K.set(t, l));
                                let r = k(),
                                    o = (function (e, t, n, i = {}) {
                                        return {
                                            measure: () =>
                                                (function (e, t = e, n) {
                                                    if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
                                                        let i = t;
                                                        for (; i && i !== e; ) (n.x.targetOffset += i.offsetLeft), (n.y.targetOffset += i.offsetTop), (i = i.offsetParent);
                                                    }
                                                    (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                                                        (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
                                                        (n.x.containerLength = e.clientWidth),
                                                        (n.y.containerLength = e.clientHeight);
                                                })(e, i.target, n),
                                            update: (t) => {
                                                var s;
                                                z(e, "x", (s = n), t),
                                                    z(e, "y", s, t),
                                                    (s.time = t),
                                                    (i.offset || i.target) &&
                                                        (function (e, t, n) {
                                                            let { offset: i = F.All } = n,
                                                                { target: s = e, axis: l = "y" } = n,
                                                                r = "y" === l ? "height" : "width",
                                                                o =
                                                                    s !== e
                                                                        ? (function (e, t) {
                                                                              let n = { x: 0, y: 0 },
                                                                                  i = e;
                                                                              for (; i && i !== t; )
                                                                                  if (i instanceof HTMLElement) (n.x += i.offsetLeft), (n.y += i.offsetTop), (i = i.offsetParent);
                                                                                  else if (i instanceof SVGGraphicsElement && "getBBox" in i) {
                                                                                      let { top: e, left: t } = i.getBBox();
                                                                                      for (n.x += t, n.y += e; i && "svg" !== i.tagName; ) i = i.parentNode;
                                                                                  }
                                                                              return n;
                                                                          })(s, e)
                                                                        : G,
                                                                a = s === e ? { width: e.scrollWidth, height: e.scrollHeight } : { width: s.clientWidth, height: s.clientHeight },
                                                                c = { width: e.clientWidth, height: e.clientHeight };
                                                            t[l].offset.length = 0;
                                                            let d = !t[l].interpolate,
                                                                h = i.length;
                                                            for (let e = 0; e < h; e++) {
                                                                let n = (function (e, t, n, i) {
                                                                    let s = Array.isArray(e) ? e : B,
                                                                        l = 0;
                                                                    return "number" == typeof e ? (s = [e, e]) : "string" == typeof e && (s = (e = e.trim()).includes(" ") ? e.split(" ") : [e, Z[e] ? e : "0"]), P(s[0], n, i) - P(s[1], t);
                                                                })(i[e], c[r], a[r], o[l]);
                                                                d || n === t[l].interpolatorOffsets[e] || (d = !0), (t[l].offset[e] = n);
                                                            }
                                                            d && ((t[l].interpolate = (0, V.s)(t[l].offset, (0, Y.Y)(i))), (t[l].interpolatorOffsets = [...t[l].offset])), (t[l].progress = t[l].interpolate(t[l].current));
                                                        })(e, n, i);
                                            },
                                            notify: () => t(n),
                                        };
                                    })(t, e, r, n);
                                if ((l.add(o), !X.has(t))) {
                                    let e = () => {
                                            for (let e of l) e.measure();
                                        },
                                        n = () => {
                                            for (let e of l) e.update(C.w.timestamp);
                                        },
                                        r = () => {
                                            for (let e of l) e.notify();
                                        },
                                        o = () => {
                                            w.Wi.read(e, !1, !0), w.Wi.update(n, !1, !0), w.Wi.update(r, !1, !0);
                                        };
                                    X.set(t, o);
                                    let a = q(t);
                                    window.addEventListener("resize", o, { passive: !0 }),
                                        t !== document.documentElement &&
                                            J.set(
                                                t,
                                                "function" == typeof t
                                                    ? (N.add(t),
                                                      s ||
                                                          ((s = () => {
                                                              let e = { width: window.innerWidth, height: window.innerHeight },
                                                                  t = { target: window, size: e, contentSize: e };
                                                              N.forEach((e) => e(t));
                                                          }),
                                                          window.addEventListener("resize", s)),
                                                      () => {
                                                          N.delete(t), !N.size && s && (s = void 0);
                                                      })
                                                    : (function (e, t) {
                                                          i || "undefined" == typeof ResizeObserver || (i = new ResizeObserver(v));
                                                          let n = (0, R.I)(e);
                                                          return (
                                                              n.forEach((e) => {
                                                                  let n = H.get(e);
                                                                  n || ((n = new Set()), H.set(e, n)), n.add(t), null == i || i.observe(e);
                                                              }),
                                                              () => {
                                                                  n.forEach((e) => {
                                                                      let n = H.get(e);
                                                                      null == n || n.delete(t), (null == n ? void 0 : n.size) || null == i || i.unobserve(e);
                                                                  });
                                                              }
                                                          );
                                                      })(t, o)
                                            ),
                                        a.addEventListener("scroll", o, { passive: !0 });
                                }
                                let a = X.get(t);
                                return (
                                    w.Wi.read(a, !1, !0),
                                    () => {
                                        var e;
                                        (0, w.Pn)(a);
                                        let n = K.get(t);
                                        if (!n || (n.delete(o), n.size)) return;
                                        let i = X.get(t);
                                        X.delete(t), i && (q(t).removeEventListener("scroll", i), null === (e = J.get(t)) || void 0 === e || e(), window.removeEventListener("resize", i));
                                    }
                                );
                            })(
                                ({ x: e, y: t }) => {
                                    r.scrollX.set(e.current), r.scrollXProgress.set(e.progress), r.scrollY.set(t.current), r.scrollYProgress.set(t.progress);
                                },
                                { ...l, container: (null == e ? void 0 : e.current) || void 0, target: (null == t ? void 0 : t.current) || void 0 }
                            )
                        ),
                        []
                    ),
                    r
                );
            }
            var et = n(52749),
                en = n(21687),
                ei = n(74045),
                es = n(54179),
                el = n(25760),
                er = {
                    src: "/_next/static/media/junk-1.c173ec05.png",
                    height: 368,
                    width: 420,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAANlBMVEVMaXGcnJxnZ2dYWFhUVFQTExN4eHiMjIwREREzMzOLi4uFhYVbW1suLi5QUFBPT0+EhIRoaGjCT9kiAAAAEXRSTlMA/vivSSz8/RYCc42aY3Lc/s4UIBAAAAAJcEhZcwAAWJUAAFiVAdltN9MAAAA4SURBVHicJctJEsAgDMRAAbbHzgb5/2dTVHTrg2BXBWXHaRup1nQleF8hhYEPrR4PRd7jnfkfnnwiCgE3gTbDHAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 7,
                },
                eo = {
                    src: "/_next/static/media/junk-2.09c11a6e.png",
                    height: 368,
                    width: 346,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXFAQEBra2tZWVlmZmZvb2+Ojo58fHynp6dQUFBCQkIeHh43NzeXl5dycnJ5eXlsbGyEhIQSEhIHBwdQUFBcXFxhYWGFhYWCgoLFxcW/v79xcXFwWMUuAAAAFnRSTlMAefy2iP78/v75rltA+qnmyM4OI57fZDQlsgAAAAlwSFlzAABYlQAAWJUB2W030wAAAEFJREFUeJwFwQcCgCAMALFjWYZ7tIj//6cJECWJOHBm02Q7V1Ev+glVS09qG1W12zJWWvGS3xxpPedxzEB47nDCD2l+AwYAljEnAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8,
                },
                ea = {
                    src: "/_next/static/media/junk-3.ea1fcf50.png",
                    height: 200,
                    width: 366,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEWIiIhMTEx6enp5eXltbW1MTExVVVV1dXVfX19eXl5sbGw4ODiampp6enpMaXE3NzeTk5OBgYGhoaGPj4+2pTGHAAAAEXRSTlP8s9vw6DX0/v27+mPlogA8x+eH1ncAAAAJcEhZcwAAWJUAAFiVAdltN9MAAAAqSURBVHicBcGHAQAgCMCwqiC41/+/mjB1k+IpaL9wqjOu8cwyy0W8hPYBE8sBEvfvKe8AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4,
                },
                ec = {
                    src: "/_next/static/media/potzfly.f3ba018e.png",
                    height: 180,
                    width: 140,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAZlBMVEVMaXHOnYJeTUt4fIlWLTKkfne+jmxlPDpqZ21+RDdqPTwnJydEJid6STxIISZ/UDqkc1ugb1jYw5Z9eXpGVXGdmZYwPl5bWV3u1KC1q5m2jYN1Z2uEUETZqY6xeGvEsJOXjH6hoKP3PXJ/AAAAGXRSTlMA/Vw6Nfv8nsTvsg261oOM/vz8nhLSSXL+c2UEvAAAAAlwSFlzAAA3XQAAN10BGYBGXQAAADpJREFUeJwFwQUCgDAMALGbtsMdhvP/T5Jgx29eJzQPW17QJ8bXoVffHY7mNiZUtGfYxWPrlDwgUpT8VVsCh11WwjgAAAAASUVORK5CYII=",
                    blurWidth: 6,
                    blurHeight: 8,
                },
                ed = {
                    src: "/_next/static/media/ufo.d705102d.png",
                    height: 160,
                    width: 320,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEVGPkNcVVmhpKWVhINDIicoKDkYBhJAPEVFJCkzFR1NTFBpZ2d+eXl4ZmVNJypUU1dfRURcW18O1eH/AAAADHRSTlPPz/794xYVc8V/0P6n97aKAAAACXBIWXMAADddAAA3XQEZgEZdAAAAKklEQVR4nAXBhxEAIAgEsAcpchR1/2VNoE7vwBXEXJkJ7F7VeTcsZEbCPhDyAQLLy4nWAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4,
                },
                eh = n(57531);
            let ex = (e) => {
                let { size: t = 3, separationFactor: n = 3, style: i, animation: s } = e;
                return (0, a.jsx)(u.Z, {
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    ...i,
                    ...s,
                    children: (0, a.jsx)(m.xu, {
                        height: "".concat(t, "px"),
                        width: "100%",
                        backgroundImage: "repeating-linear-gradient(to right, var(--chakra-colors-whiteAlpha-600), var(--chakra-colors-whiteAlpha-600) "
                            .concat(t, "px, transparent ")
                            .concat(t, "px, transparent ")
                            .concat(t * n, "px)"),
                    }),
                });
            };
            var eA = n(33512),
                eu = n(49365),
                ep = n(62519),
                eg = n(23993),
                eE = n(75526);
            let ef = (e, t) => {
                let n = (0, E.K4)(),
                    i = (function () {
                        eg.O.current || (0, ep.A)();
                        let [e] = (0, c.useState)(eg.n.current);
                        return e;
                    })(),
                    s = (0, ei.H)(
                        n,
                        e.map((e) => e[0]),
                        e.map((e) => e[1])
                    ),
                    l = (0, es.q)(s, eh.Y),
                    r = l.set.bind(l),
                    o = { current: l.get() };
                l.set = (e) => {
                    (o.current = e), r(e);
                };
                let a = i ? s : (0, ei.H)(l, (e) => (i ? o.current : e));
                return (
                    t && (0, et.W)(a, "change", t),
                    (0, eE.q)(() => {
                        null == t || t(a.get());
                    }),
                    a
                );
            };
            var ej = n(24581),
                em = n(65382),
                eb = n(56781),
                eT = n(98886),
                eS = n(59162),
                eI = n(89e3);
            let ey = c.createContext({ height: window.innerHeight, width: window.innerWidth, scale: 0.1 }),
                eO = (0, c.forwardRef)((e, t) => {
                    let { zoomX: n, zoomY: i, zoomLevel: s, opacity: l, style: r, animation: o, children: c } = e,
                        [d, { height: h, width: x }] = (0, eS.Z)(),
                        A = (0, eI.T)(0.0769),
                        p = null != l ? l : (0, en.c)(1),
                        g = null != s ? s : (0, en.c)(1),
                        E = null != n ? n : (0, en.c)(0),
                        f = null != i ? i : (0, en.c)(0),
                        j = (0, ei.H)(E, (e) => -(e * h)),
                        m = (0, ei.H)(f, (e) => e * h);
                    return (0, a.jsx)(ey.Provider, {
                        value: { height: h, width: x, scale: A },
                        children: (0, a.jsx)(u.Z, {
                            ref: (e) => {
                                d(e), t && ("function" == typeof t ? t(e) : (t.current = e));
                            },
                            className: "univerz",
                            position: "absolute",
                            display: "none",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            style: { x: j, y: m, scale: g, opacity: p },
                            ...r,
                            ...o,
                            children: c,
                        }),
                    });
                }),
                ew = c.createContext({ cameraAngle: new I.H(), tiltAngle: new I.H() }),
                eC = (e) => {
                    let { style: t, animation: n, children: i, cameraAngle: s, tiltAngle: l, offsetX: r, offsetY: o, mouseOffsetLevel: d } = e,
                        { height: h } = (0, c.useContext)(ey),
                        x = (0, c.useRef)(null),
                        A = null != d ? d : (0, en.c)(0),
                        { relX: p, relY: E } = (0, g.c8)(),
                        f = (0, ei.H)([null != s ? s : (0, en.c)(0), A, E], (e) => {
                            let [t, n, i] = e;
                            return 90 - t + n * i * 1.69;
                        }),
                        j = (0, ei.H)([null != l ? l : (0, en.c)(0), A, p], (e) => {
                            let [t, n, i] = e;
                            return t + n * i * 1.69;
                        }),
                        m = null != r ? r : (0, en.c)(0),
                        b = null != o ? o : (0, en.c)(0),
                        T = (0, ei.H)(m, (e) => -(e * h)),
                        S = (0, ei.H)(b, (e) => e * h);
                    return (0, a.jsx)(ew.Provider, {
                        value: { cameraAngle: f, tiltAngle: j },
                        children: (0, a.jsx)(u.Z, {
                            className: "solarz",
                            ref: x,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            style: { x: T, y: S, rotateX: f, rotateY: j },
                            ...t,
                            ...n,
                            children: Array.isArray(i) ? i.map((e, t) => (c.isValidElement(e) ? c.cloneElement(e, { zIndex: i.length - t }) : e)) : i,
                        }),
                    });
                },
                eR = c.createContext({ rotateAngle: new I.H(), size: 0, scaleSizeFromRotation: !1 }),
                eH = (e) => {
                    let { size: t, active: n = !1, showTrajectory: i = !0, rotation: s, opacity: l, scaleSizeFromRotation: r, style: o, animation: d, children: h } = e,
                        { height: x, scale: A } = (0, c.useContext)(ey),
                        { cameraAngle: p } = (0, c.useContext)(ew),
                        g = null != s ? s : (0, en.c)(0),
                        E = null != l ? l : (0, en.c)(1),
                        f = (0, ei.H)(g, (e) => e + 180),
                        j = (0, ei.H)(p, (e) => -(0.8 * ((-t * A * 636.9 * (1 - e / 90)) / (2 / 7))));
                    return (0, a.jsx)(eR.Provider, {
                        value: { size: t, rotateAngle: f, scaleSizeFromRotation: r },
                        children: (0, a.jsxs)(u.Z, {
                            className: "orbitz",
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "".concat(t * A * 1e3, "px"),
                            height: "".concat(t * A * 1e3, "px"),
                            borderRadius: "50%",
                            pointerEvents: "none",
                            style: { rotate: f, y: j },
                            ...o,
                            ...d,
                            children: [
                                i &&
                                    (0, a.jsx)(u.Z, {
                                        className: "trajectoryz",
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        border: n ? "\n".concat(Math.max(1, x / 169), "px\nsolid\nrgba(255, 255, 255, 0.8)") : "\n".concat(Math.max(1, x / 169), "px\nsolid\nrgba(255, 255, 255,").concat(Math.min(0.2, 0.15 / (3 * t)), ")"),
                                        borderRadius: "50%",
                                        pointerEvents: "none",
                                        style: { opacity: E },
                                    }),
                                h,
                            ],
                        }),
                    });
                },
                eL = (e) => {
                    let { onOrbit: t = !1, offsetY: n = 0, style: i, animation: s, children: l } = e,
                        { scale: r } = (0, c.useContext)(ey),
                        { size: o } = (0, c.useContext)(eR);
                    return (0, a.jsx)(u.Z, {
                        className: "centerz",
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "0px",
                        height: "0px",
                        transform: t ? "translate3d(".concat((-o * r * 1e3) / 2, "px, 0, 10px)") : "",
                        marginBottom: n * r * 1e3,
                        ...i,
                        ...s,
                        children: l,
                    });
                },
                ev = c.createContext({ size: new I.H(), realSize: new I.H() }),
                eN = (e) => {
                    let { size: t, glowing: n, opacity: i, offsetX: s, offsetY: l, onClick: r, style: o, animation: d, motionStyle: h = {}, children: x } = e,
                        { scale: A = (0, en.c)(1), ...p } = h,
                        { scale: g, height: E } = (0, c.useContext)(ey),
                        { cameraAngle: f, tiltAngle: j } = (0, c.useContext)(ew),
                        { rotateAngle: m, scaleSizeFromRotation: b } = (0, c.useContext)(eR),
                        T = (0, ei.H)(m, (e) => -e),
                        S = (0, ei.H)(f, (e) => -e),
                        I = b
                            ? (0, ei.H)([t, T, A], (e) => {
                                  let [t, n, i] = e;
                                  return t * i * g * 1e3 * (1 + 0.5 * Math.cos(((n + 90 + 180) * Math.PI) / 180));
                              })
                            : (0, ei.H)([t, A], (e) => {
                                  let [t, n] = e;
                                  return t * n * g * 1e3;
                              }),
                        y = null != i ? i : (0, en.c)(1),
                        O = null != s ? s : (0, en.c)(0),
                        w = null != l ? l : (0, en.c)(0),
                        C = (0, ei.H)(O, (e) => -(e * E)),
                        R = (0, ei.H)(w, (e) => e * E);
                    return (0, a.jsx)(ev.Provider, {
                        value: { size: t, realSize: I },
                        children: (0, a.jsxs)(u.Z, {
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            pointerEvents: "auto",
                            onClick: r,
                            style: {
                                width: I,
                                height: I,
                                cursor: r ? "pointer" : "auto",
                                transform: (0, ei.H)([T, j, S], (e) => {
                                    let [t, n, i] = e;
                                    return "\nrotateZ(".concat(t, "deg)\nrotateX(").concat(n, "deg)\nrotateY(").concat(i, "deg)");
                                }),
                                ...p,
                            },
                            ...o,
                            ...d,
                            children: [
                                n &&
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: -1,
                                        height: "".concat(100 + 0.5 * n.amount, "%"),
                                        width: "".concat(100 + 0.5 * n.amount, "%"),
                                        borderRadius: "50%",
                                        background: n.color,
                                        filter: "blur(".concat(n.amount, "px)"),
                                    }),
                                (0, a.jsx)(u.Z, { display: "flex", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", style: { opacity: y, x: C, y: R }, children: x }),
                            ],
                        }),
                    });
                },
                eM = (e) => {
                    let { style: t, animation: n, opacity: i, showText: s = !0, ...l } = e,
                        { scale: r } = (0, c.useContext)(ey),
                        o = l.size,
                        d = null != i ? i : (0, en.c)(1);
                    return (0, a.jsxs)(eN, {
                        ...l,
                        style: t,
                        animation: n,
                        opacity: d,
                        children: [
                            (0, a.jsx)(b.k, {
                                width: "100%",
                                height: "200%",
                                alignItems: "center",
                                justifyContent: "center",
                                userSelect: "none",
                                children: (0, a.jsx)(j(), { style: { pointerEvents: "none", userSelect: "none", objectFit: "contain", transform: "translateY(-42px)" }, fill: !0, src: eT.Z.src, alt: "Holders Airdrop" }),
                            }),
                            s &&
                                (0, a.jsx)(u.Z, {
                                    position: "absolute",
                                    display: "flex",
                                    style: { y: (0, ei.H)(o, (e) => e * r * 700) },
                                    children: (0, a.jsxs)(T.X, { textTransform: "uppercase", size: "4xl", whiteSpace: "nowrap", textAlign: "center", children: ["AIRDROPS: ", (0, a.jsx)("br", {}), "NOV 3, 2023"] }),
                                }),
                        ],
                    });
                };
            var eU = { src: "/_next/static/media/memecoin-big.8968eebf.gif", height: 246, width: 246, blurWidth: 0, blurHeight: 0 },
                eD = n(66013),
                ek = n.n(eD);
            let eW = (e) => {
                    let { size: t, opacity: n, children: i, style: s, animation: l } = e,
                        { scale: r } = (0, c.useContext)(ey),
                        o = null != n ? n : (0, en.c)(1);
                    return (0, a.jsxs)(eN, {
                        size: t,
                        style: s,
                        animation: l,
                        children: [
                            (0, a.jsx)(u.Z, {
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                pointerEvents: "none",
                                style: { opacity: o },
                                children: (0, a.jsx)(j(), {
                                    className: ek().noAntialias,
                                    style: { filter: "drop-shadow(0px 0px ".concat(1e3 * r * 0.1476, "px rgba(255, 232, 79, 0.4))"), pointerEvents: "none", userSelect: "none" },
                                    fill: !0,
                                    src: eU.src,
                                    alt: "Memecoin",
                                }),
                            }),
                            i,
                        ],
                    });
                },
                ez = (e) => {
                    let { size: t, opacity: n, offsetX: i, offsetY: s, style: l, animation: r } = e,
                        { scale: o } = (0, c.useContext)(ey),
                        { realSize: d } = (0, c.useContext)(ev),
                        h = (0, ei.H)(d, (e) => 0.076 * e),
                        x = (0, ei.H)(d, (e) => 0.212 * e),
                        A = null != n ? n : (0, en.c)(1),
                        p = (0, ei.H)(null != i ? i : (0, en.c)(0), (e) => e),
                        g = (0, ei.H)([null != s ? s : (0, en.c)(0), d], (e) => {
                            let [t, n] = e;
                            return t + 0.842322261 * n;
                        });
                    return (0, a.jsxs)(u.Z, {
                        style: { fontSize: h, lineHeight: h, gap: x, x: p, y: g, opacity: A },
                        display: "none",
                        alignItems: "center",
                        alignContent: "center",
                        flexDirection: "column",
                        ...l,
                        ...r,
                        children: [
                            (0, a.jsx)(T.X, { size: "2xl", textAlign: "center", textTransform: "uppercase", whiteSpace: "nowrap", fontSize: "2.8em", children: "MEMECOIN?" }),
                            (0, a.jsx)(m.xu, {
                                height: "0",
                                children: (0, a.jsxs)(S.x, {
                                    textStyle: "lg",
                                    fontSize: "1em",
                                    width: "40em",
                                    textAlign: "center",
                                    lineHeight: "1.4em",
                                    children: [
                                        "MEMECOIN (MEME) IS LITERALLY A MEME COIN.",
                                        (0, a.jsx)("br", {}),
                                        "NO UTILITY. NO ROADMAP. NO PROMISES.",
                                        (0, a.jsx)("br", {}),
                                        "NO EXPECTATION OF FINANCIAL RETURN.",
                                        (0, a.jsx)("br", {}),
                                        "JUST 100% MEMES. \uD83D\uDE09",
                                    ],
                                }),
                            }),
                        ],
                    });
                };
            var eF = n(89915);
            let eZ = (e) => {
                let { style: t, animation: n, opacity: i, showText: s = !0, ...l } = e,
                    { scale: r } = (0, c.useContext)(ey),
                    o = l.size,
                    d = null != i ? i : (0, en.c)(1);
                return (0, a.jsxs)(eN, {
                    ...l,
                    style: t,
                    animation: n,
                    opacity: d,
                    children: [
                        (0, a.jsx)(u.Z, {
                            width: "100%",
                            height: "200%",
                            alignItems: "center",
                            justifyContent: "center",
                            userSelect: "none",
                            style: { scale: 1.1, x: (0, ei.H)(o, (e) => e * r * 140), y: (0, ei.H)(o, (e) => -(e * r * 270)) },
                            children: (0, a.jsx)(j(), { style: { pointerEvents: "none", objectFit: "contain", userSelect: "none" }, fill: !0, src: eF.Z.src, alt: "Fire Sale" }),
                        }),
                        s &&
                            (0, a.jsx)(u.Z, {
                                position: "absolute",
                                display: "flex",
                                style: { y: (0, ei.H)(o, (e) => e * r * 700) },
                                children: (0, a.jsxs)(T.X, { textTransform: "uppercase", size: "4xl", whiteSpace: "nowrap", textAlign: "center", children: ["FIRE SALE: ", (0, a.jsx)("br", {}), "OCT 26, 2023"] }),
                            }),
                    ],
                });
            };
            var eP = { src: "/_next/static/media/public-launch-planet.fff313d0.gif", height: 320, width: 320, blurWidth: 0, blurHeight: 0 };
            let eB = (e) => {
                    let { style: t, animation: n, opacity: i, showText: s = !0, ...l } = e,
                        { scale: r } = (0, c.useContext)(ey),
                        o = l.size,
                        d = null != i ? i : (0, en.c)(1);
                    return (0, a.jsxs)(eN, {
                        ...l,
                        style: t,
                        animation: n,
                        opacity: d,
                        children: [
                            (0, a.jsx)(b.k, {
                                width: "100%",
                                height: "200%",
                                alignItems: "center",
                                justifyContent: "center",
                                userSelect: "none",
                                children: (0, a.jsx)(j(), { style: { pointerEvents: "none", objectFit: "contain", transform: "translateY(-75px)", userSelect: "none" }, fill: !0, src: eP.src, alt: "Public Launch" }),
                            }),
                            s &&
                                (0, a.jsx)(u.Z, {
                                    position: "absolute",
                                    display: "flex",
                                    style: { y: (0, ei.H)(o, (e) => e * r * 700) },
                                    children: (0, a.jsxs)(T.X, { textTransform: "uppercase", size: "4xl", whiteSpace: "nowrap", textAlign: "center", children: ["TOKEN(S) LAUNCH: ", (0, a.jsx)("br", {}), "NOV 3, 2023"] }),
                                }),
                        ],
                    });
                },
                eV = (e) => {
                    let { style: t, animation: n, opacity: i, ...s } = e,
                        l = null != i ? i : (0, en.c)(1);
                    return (0, a.jsx)(eN, { ...s, style: t, animation: n, opacity: l, children: s.children });
                };
            var eY = n(3675),
                eG = n(39097),
                eX = n.n(eG),
                eJ = n(72037),
                eK = n(98837),
                eq = n(33086),
                e_ = {
                    src: "/_next/static/media/cloud-heart_1.c3844b87.png",
                    height: 128,
                    width: 185,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEX////H4/bj4/H5/P3W7fzp8/vV7ftMaXHZ6/vg7vj8/v/V6Pjw9/zR6fn////////////+/v7O4vbD3/T8/f3b8/8v1flNAAAAFXRSTlP+hQn7/fz2ACNOnGjq4A1vy+4/veg2X0COAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nBXBiRHAIAgAwVNQQPP5pP9WM9nFn3G3HUbjJ0EVKEU780BUk2NxvjV5YJevnrN9JYkBYepujRQAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6,
                },
                eQ = {
                    src: "/_next/static/media/cloud-heart_2.7eb8ff5b.png",
                    height: 96,
                    width: 135,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEWxrNfM4fTM3/Ly8vLj7vnq9Pz0+f3T5fb8///L4fTu9fzK3vLa6PXU6v3u+/3w9vzu9vrE3/Ts8/zR4/bX7f/x+/+E7dRHAAAAFHRSTlMB6lEK/P5k/f79sWaK3ey2fjDM6ndRMy4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicBcEHAgAREACxwVbXD///qoTWl5n0hi2J0Hj51dUlbka6Z8bDV6/p8wSopRywAS1hAY3+ExB/AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 6,
                },
                e$ = {
                    src: "/_next/static/media/cloud1.886715f1.png",
                    height: 142,
                    width: 312,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEX////p8/vd8/vN4fTw9/z////N4vTu9f3M4fXI3vP////w+f/m8vv////O4vT6///V6/vM4fTt//+CJ0R8AAAAEXRSTlMB8cPdqK1iNLeWbOT+Ro3//kS7VcgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicBcEJAgAQCATARalcK/9/rBkAW8UADJ1kEQO5Mu+rOOHZwvsHEU4BHKH27n4AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4,
                },
                e0 = n(75336),
                e1 = { src: "/_next/static/media/stonk.2325f3c9.gif", height: 1200, width: 1200, blurWidth: 0, blurHeight: 0 },
                e2 = { src: "/_next/static/media/stonk-coins-back.6b42b943.gif", height: 1200, width: 1200, blurWidth: 0, blurHeight: 0 },
                e5 = { src: "/_next/static/media/stonk-coins-front.dc104e70.gif", height: 1200, width: 1200, blurWidth: 0, blurHeight: 0 },
                e9 = n(79516),
                e6 = n(42710),
                e8 = n(80897);
            let e3 = (e) => {
                let { goHowTo: t } = e,
                    { publicLaunchAt: n } = h.LH,
                    i = (0, p.q0)((e) => e.vh),
                    s = (0, p.q0)((e) => e.vw),
                    l = (0, el.q)((e) => e.time),
                    r = ef([
                        [0, 1],
                        [(100 * i) / 10, 0],
                    ]);
                return (0, a.jsx)(u.Z, {
                    position: "fixed",
                    display: "flex",
                    height: 100 * i,
                    width: 100 * s,
                    background: "linear-gradient(180deg, #4EA5D9 0%, #5DC2FA 100%)",
                    zIndex: "9",
                    style: { opacity: r, visibility: (0, ei.H)(r, (e) => (0 === e ? "hidden" : "visible")) },
                    children: (0, a.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "auto",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        maxWidth: "1280px",
                        children: [
                            (0, a.jsxs)(u.Z, {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%",
                                marginTop: "".concat(8 * i, "px"),
                                gap: "".concat(2 * i, "px"),
                                zIndex: 3,
                                children: [
                                    (0, a.jsx)(b.k, {
                                        width: "".concat(30 * i, "px"),
                                        marginTop: "".concat((0, eI.T)(4), "px"),
                                        maxWidth: "60vw",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        pointerEvents: "none",
                                        children: (0, a.jsx)(e9.Z, { height: "100%", width: "100%" }),
                                    }),
                                    (0, a.jsxs)(b.k, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "".concat(50 * i, "px"),
                                        maxWidth: "78vw",
                                        pointerEvents: "none",
                                        as: "h1",
                                        fontSize: "0px",
                                        className: "memecoin-flex-wrapper",
                                        children: ["Memecoin", (0, a.jsx)(j(), { src: e0.Z, alt: "Memecoin" })],
                                    }),
                                    (0, a.jsxs)(b.k, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "".concat(46 * i, "px"),
                                        maxWidth: "78vw",
                                        pointerEvents: "none",
                                        as: "h1",
                                        fontSize: "0px",
                                        className: "one-meme-rule-them-all-flex-wrapper",
                                        children: ["", (0, a.jsx)(e6.Z, { height: "100%", width: "100%" })],
                                    }),
                                ],
                            }),
                            (0, a.jsx)(b.k, {
                                alignItems: "left",
                                justifyContent: "center",
                                position: "absolute",
                                width: "100%",
                                top: "24%",
                                zIndex: 2,
                                userSelect: "none",
                                children: (0, a.jsx)(b.k, {
                                    position: "relative",
                                    width: 28.0332 * i,
                                    height: 12.7416 * i,
                                    transform: "translate(-".concat(48 * i, "px)"),
                                    children: (0, a.jsx)(j(), { src: e$, alt: "cloud 1", fill: !0, style: { pointerEvents: "none", userSelect: "none" } }),
                                }),
                            }),
                            (0, a.jsx)(b.k, {
                                alignItems: "left",
                                justifyContent: "center",
                                position: "absolute",
                                width: "100%",
                                top: "26%",
                                zIndex: 2,
                                userSelect: "none",
                                children: (0, a.jsx)(b.k, {
                                    position: "relative",
                                    width: 134.7 * i * 0.12,
                                    height: 11.52 * i,
                                    transform: "translate(".concat(40 * i, "px)"),
                                    children: (0, a.jsx)(j(), { src: eQ, alt: "cloud 3", fill: !0, style: { pointerEvents: "none", userSelect: "none" } }),
                                }),
                            }),
                            (0, a.jsx)(b.k, {
                                alignItems: "left",
                                justifyContent: "center",
                                position: "absolute",
                                width: "100%",
                                top: "22%",
                                zIndex: 2,
                                userSelect: "none",
                                children: (0, a.jsx)(b.k, {
                                    position: "relative",
                                    width: 184.32 * i * 0.12,
                                    height: 15.36 * i,
                                    transform: "translate(".concat(54 * i, "px)"),
                                    children: (0, a.jsx)(j(), { src: e_, alt: "cloud 2", fill: !0, style: { pointerEvents: "none", userSelect: "none" } }),
                                }),
                            }),
                            (0, a.jsx)(u.Z, {
                                position: "absolute",
                                zIndex: 20,
                                style: { x: 0, y: 66 * i - 50, scale: 0.13 * i },
                                children: (0, a.jsx)(e8.$, {
                                    scale: 1,
                                    textAlign: "left",
                                    children:
                                        l < n
                                            ? (0, a.jsxs)(m.xu, { textAlign: "center", children: ["CLAIM COMING SOON, BE ON", " ", (0, a.jsx)(eJ.m.a, { as: eX(), href: "/claim", color: "yellow.500", children: "STANDBY" }), "!"] })
                                            : (0, a.jsxs)(m.xu, { textAlign: "center", children: ["Join the ", " ", (0, a.jsx)(eJ.m.a, { as: eX(), href: "tglink", color: "blue.500", children: "STONKE Community" })] }),
                                }),
                            }),
                            (0, a.jsx)(u.Z, {
                                position: "absolute",
                                pointerEvents: "none",
                                height: "100%",
                                width: "100%",
                                bottom: "0",
                                zIndex: -2,
                                userSelect: "none",
                                children: (0, a.jsx)(j(), {
                                    src: eq.Z,
                                    alt: "sky-mask",
                                    fill: !0,
                                    style: {
                                        objectFit: "cover",
                                        opacity: 0.45,
                                        transformOrigin: "bottom center",
                                        transform: "translateY(5%) scaleY(0.8) scale(1.2)",
                                        WebkitMaskImage: "radial-gradient(circle at 50% 80%, black 10%, transparent 55%)",
                                        maskImage: "radial-gradient(circle at 50% 80%, black 10%, transparent 55%)",
                                        pointerEvents: "none",
                                        userSelect: "none",
                                    },
                                }),
                            }),
                            (0, a.jsxs)(u.Z, {
                                position: "absolute",
                                bottom: "-58.8%",
                                width: 83.7 * i,
                                maxWidth: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                userSelect: "none",
                                children: [
                                    (0, a.jsx)(b.k, {
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 4,
                                        children: (0, a.jsx)(j(), { src: e5.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(b.k, {
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 3,
                                        children: (0, a.jsx)(j(), { src: e1.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(b.k, {
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 2,
                                        children: (0, a.jsx)(j(), { src: e2.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.Z, {
                                position: "absolute",
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                                zIndex: 1,
                                width: "140vw",
                                height: "25%",
                                userSelect: "none",
                                bottom: "-5%",
                                style: {
                                    WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(255,255,255,0) 100%)",
                                    maskImage: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(255,255,255,0) 100%)",
                                },
                                children: (0, a.jsx)(m.xu, {
                                    width: "100%",
                                    height: "100%",
                                    userSelect: "none",
                                    style: {
                                        WebkitMaskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                        maskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                    },
                                    children: (0, a.jsx)(m.xu, {
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: eK.Z.src,
                                        backgroundRepeat: "repeat-x",
                                        backgroundSize: "contain",
                                        bgPosition: "bottom",
                                        style: {
                                            WebkitMaskImage: "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                            maskImage: "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                        },
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var e4 = {
                src: "/_next/static/media/cloud2.b0b28d62.png",
                height: 142,
                width: 487,
                blurDataURL:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAJFBMVEXw9/vz9/zn8vrY6PbY6vjx+vrP4vX0+f3n8Pn7///s9Prc7vxoh00kAAAAC3RSTlMWyKjU4zig37ZQen7R9vcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BgYOBkZGRnYmDlYuJgZuFmAwAB4ABGLV/UxAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 2,
            };
            let e7 = (e) => {
                let { style: t, animation: n, opacity: i, elementOpacity: s, size: l, ...r } = e,
                    o = (0, p.q0)((e) => e.vh),
                    c = null != i ? i : (0, en.c)(1);
                null != s || (0, en.c)(1);
                let d = (0, ei.H)(l, [0.5, 8.69], [-20 * o, -550 * o]),
                    h = (0, ei.H)(l, [0.5, 9], [-22 * o, -820 * o]),
                    x = (0, ei.H)(l, [0.5, 8.69], [20 * o, 550 * o]),
                    A = (0, ei.H)(l, [0.5, 9], [-22 * o, -820 * o]),
                    g = (0, ei.H)(l, [0.5, 8.69], [0.5, 1]);
                return (0, a.jsxs)(eN, {
                    ...r,
                    size: l,
                    style: t,
                    animation: n,
                    opacity: c,
                    children: [
                        (0, a.jsx)(u.Z, {
                            position: "absolute",
                            width: "45%",
                            height: "20%",
                            borderRadius: "50%",
                            zIndex: 2,
                            userSelect: "none",
                            style: { x: d, y: h, scale: g },
                            children: (0, a.jsx)(j(), { src: e$, fill: !0, alt: "cloud 1", style: { pointerEvents: "none", userSelect: "none" } }),
                        }),
                        (0, a.jsx)(u.Z, {
                            position: "absolute",
                            width: "70%",
                            height: "20%",
                            borderRadius: "50%",
                            zIndex: 2,
                            userSelect: "none",
                            style: { x: x, y: A, scale: g },
                            children: (0, a.jsx)(j(), { src: e4, fill: !0, alt: "cloud 2", style: { pointerEvents: "none", userSelect: "none" } }),
                        }),
                        (0, a.jsxs)(u.Z, {
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            userSelect: "none",
                            style: { x: (0, ei.H)(l, (e) => -(0.5 * o) * e) },
                            children: [
                                (0, a.jsx)(b.k, {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 3,
                                    children: (0, a.jsx)(j(), { src: e5.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                }),
                                (0, a.jsx)(b.k, {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 2,
                                    children: (0, a.jsx)(j(), { src: e1.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                }),
                                (0, a.jsx)(b.k, {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 1,
                                    children: (0, a.jsx)(j(), { src: e2.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                }),
                            ],
                        }),
                    ],
                });
            };
            var te = { src: "/_next/static/media/waitlist-planet.bb9da62b.gif", height: 280, width: 280, blurWidth: 0, blurHeight: 0 };
            let tt = (e) => {
                let { style: t, animation: n, opacity: i, showText: s = !0, ...l } = e,
                    { scale: r } = (0, c.useContext)(ey),
                    o = l.size,
                    d = null != i ? i : (0, en.c)(1);
                return (0, a.jsxs)(eN, {
                    ...l,
                    style: t,
                    animation: n,
                    opacity: d,
                    children: [
                        (0, a.jsx)(u.Z, {
                            width: "100%",
                            height: "200%",
                            alignItems: "center",
                            justifyContent: "center",
                            userSelect: "none",
                            style: { scale: 0.8 },
                            children: (0, a.jsx)(j(), { style: { pointerEvents: "none", userSelect: "none", objectFit: "contain", transform: "translateY(-75px)" }, fill: !0, src: te.src, alt: "Waitlist" }),
                        }),
                        s &&
                            (0, a.jsx)(u.Z, {
                                position: "absolute",
                                display: "flex",
                                style: { y: (0, ei.H)(o, (e) => e * r * 700) },
                                children: (0, a.jsxs)(T.X, { textTransform: "uppercase", size: "4xl", whiteSpace: "nowrap", textAlign: "center", children: ["Waitlist: ", (0, a.jsx)("br", {}), "Jun 9, 2023"] }),
                            }),
                    ],
                });
            };
            var tn = n(70425),
                ti = {
                    src: "/_next/static/media/pie.f0670164.png",
                    height: 834,
                    width: 1466,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAVFBMVEVXm5H/xDBfP0+xnoD5rT1CnlVgblzJydLBfSPQSUfev0/ZjxpvY3w0irWdkmygSzSljVqweT3efF6JZj6heIDGgSVZuGLOsGtEpb3/uCfHjW/9XVH1dzyGAAAAFnRSTlMC/hDv+3U4CY6K+LkpqdhO/mv4ev6dOwwvMgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwFwQcCgCAMALFDRoubqeD//2mCBF9iAHzvd30P4ZzZrY/diZ8zZmwglzZNCz8oMwHAcVD4BAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5,
                },
                ts = n(53893),
                tl = ["title", "titleId"];
            function tr() {
                return (tr = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            var to = (0, c.forwardRef)(function (e, t) {
                    var n = e.title,
                        i = e.titleId,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        s = {},
                                        l = Object.keys(e);
                                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                            }
                            return s;
                        })(e, tl);
                    return c.createElement(
                        "svg",
                        tr({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, "aria-labelledby": i }, s),
                        n ? c.createElement("title", { id: i }, n) : null,
                        r || (r = c.createElement("path", { d: "M18 0H6V2H4V4H2V6H0V18H2V20H4V22H6V24H18V22H20V20H22V18H24V6H22V4H20V2H18V0Z" }))
                    );
                }),
                ta = n(12294),
                tc = n(47832);
            n(65119);
            let td = { selectedSlice: 0 },
                th = (0, ta.Ue)()(
                    (0, tc.XR)((e, t) => ({
                        ...td,
                        onSliceHover: (t) => {
                            e({ selectedSlice: t });
                        },
                    }))
                ),
                tx = (e) => {
                    let { color: t } = e;
                    return (0, a.jsx)(to, { width: "24px", height: "24px", fill: t });
                },
                tA = (e) => {
                    let t = th((e) => e);
                    return (
                        t.selectedSlice,
                        e.id,
                        (0, p.q0)((e) => e.isMobile),
                        (0, a.jsxs)(b.k, {
                            position: "relative",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: { base: "flex-start", lg: "start" },
                            gap: "24px",
                            children: [
                                (0, a.jsx)(m.xu, { children: (0, a.jsx)(tx, { color: e.color }) }),
                                (0, a.jsx)(b.k, {
                                    flexDirection: "column",
                                    width: "calc(100% - 48px)",
                                    alignItems: "start",
                                    gap: { base: "4px", lg: "0px" },
                                    children: (0, a.jsxs)(u.Z, {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        width: "100%",
                                        children: [
                                            (0, a.jsx)(S.x, { size: "md", fontWeight: "bold", lineHeight: "24px", children: e.title }),
                                            (0, a.jsx)(u.Z, { display: "flex", flexDirection: "column", width: "100%", children: e.desc && (0, a.jsx)(S.x, { textStyle: "sm", lineHeight: "".concat(26, "px}"), children: e.desc }) }),
                                        ],
                                    }),
                                }),
                            ],
                        })
                    );
                };
            var tu = n(66149),
                tp = { src: "/_next/static/media/pepefrog_popup.4df2c424.gif", height: 168, width: 272, blurWidth: 0, blurHeight: 0 };
            let tg = (e, t, n, i) =>
                void 0 !== i
                    ? (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                          return 1 / (1 + Math.exp(-e / t));
                      })(e, i) *
                          (n - t) +
                      t
                    : Math.max(t, Math.min(e, n));
            var tE = {
                    src: "/_next/static/media/pepe-left-eye-mask.5f81c999.png",
                    height: 36,
                    width: 72,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX////////////+/v7///9MaXH+/v7////e5m4iAAAACHRSTlP/iKTfGwAH1gSUehoAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAgSURBVHicJcaxDQAgCACwggL/f2yCU6sCoq2M88PNJR8CvAAh1wDl+wAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4,
                },
                tf = {
                    src: "/_next/static/media/pepe-right-eye-mask.523ebb32.png",
                    height: 40,
                    width: 88,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAC3RSTlP/0gNyUMSe8VHeJymwhNIAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAgSURBVHicY2BmZGBgYGViYoAATg4og52ZgQUkxcbFBAADvQBAMrchEAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4,
                };
            let tj = { position: "relative", alignItems: "center", justifyContent: "center", width: "272px", height: "168px" },
                tm = { position: "absolute", top: 0, width: "272px", height: "168px" },
                tb = { position: "absolute", top: "0px", left: "0px", width: "272px", height: "168px", backgroundImage: "url(".concat("/_next/static/media/pepe-head.b8657768.png", ")") },
                tT = { top: "58px", left: "20px", width: "160px", position: "relative" },
                tS = {
                    width: "72px",
                    height: "36px",
                    position: "absolute",
                    background: "#fff",
                    overflow: "hidden",
                    sx: { WebkitMaskSize: "100%", maskImage: "url(".concat(tE.src, ")"), maskSize: "100%", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskImage: "url(".concat(tE.src, ")") },
                },
                tI = {
                    width: "88px",
                    height: "40px",
                    position: "absolute",
                    background: "#fff",
                    overflow: "hidden",
                    sx: { WebkitMaskImage: "url(".concat(tf.src, ")"), maskImage: "url(".concat(tf.src, ")"), WebkitMaskSize: "100%", maskSize: "100%", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" },
                },
                ty = { width: "100%", height: "100%" },
                tO = {
                    width: "36px",
                    height: "36px",
                    backgroundImage: "url(".concat("/_next/static/media/pepe-eyeball.59b83301.png", ")"),
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-18px",
                    marginTop: "-20px",
                };
            ((l = o || (o = {})).hide = "hide"), (l.animating = "animating"), (l.animated = "animated");
            let tw = () => {
                    let e = (0, p.q0)((e) => e.isMobile),
                        t = (0, c.useRef)(null),
                        n = (0, c.useRef)(null),
                        i = (0, tu.Y)(t),
                        { mousePosition: s } = (0, g.kk)({ useBody: !0 }),
                        l = (0, c.useRef)(null),
                        [r, d] = (0, c.useState)(o.hide);
                    return (
                        (0, c.useEffect)(() => {
                            if (e || !i) return;
                            r === o.hide &&
                                (d(o.animating),
                                setTimeout(() => {
                                    d(o.animated);
                                }, 1800));
                            let { x: l, y: a } = s;
                            [t.current, n.current].forEach((e) => {
                                if (!e) return;
                                let { top: t, left: n } = e.getBoundingClientRect(),
                                    s = i ? (l - n) / Math.abs(window.innerWidth - n) : 0,
                                    r = i ? (a - t) / Math.abs(window.innerHeight - t) : 0,
                                    o = tg(s, -15, 30, 0.5),
                                    c = tg(r, -15, 15, 0.5);
                                e.style.transform = "translate(".concat(o, "px, ").concat(c, "px)");
                            });
                        }, [e, s, s.x, s.y, i, r]),
                        (0, a.jsxs)(b.k, {
                            cursor: "pointer",
                            onClick: () => {
                                (0, em.RB)("https://youtu.be/dQw4w9WgXcQ");
                            },
                            ...tj,
                            ref: l,
                            children: [
                                (0, a.jsxs)(m.xu, {
                                    as: "section",
                                    ...tm,
                                    style: { visibility: r === o.animated ? "visible" : "hidden" },
                                    children: [
                                        (0, a.jsxs)(m.xu, {
                                            ...tT,
                                            children: [
                                                (0, a.jsx)(m.xu, { ...tS, children: (0, a.jsx)(m.xu, { ...ty, children: (0, a.jsx)(m.xu, { ref: t, ...tO }) }) }),
                                                (0, a.jsx)(m.xu, { ...tI, right: "0px", children: (0, a.jsx)(m.xu, { ...ty, children: (0, a.jsx)(m.xu, { ref: n, ...tO }) }) }),
                                            ],
                                        }),
                                        (0, a.jsx)(m.xu, { ...tb }),
                                    ],
                                }),
                                (0, a.jsx)(u.Z, {
                                    height: "100%",
                                    width: "100%",
                                    children: (0, a.jsx)(j(), { src: tp.src, alt: "Pepe", fill: !0, style: { objectFit: "contain", pointerEvents: "none", userSelect: "none", visibility: r === o.animating ? "visible" : "hidden" } }),
                                }),
                            ],
                        })
                    );
                },
                tC = (e) => {
                    let { dataSet: t } = e,
                        n = (0, d.useRouter)(),
                        i = (0, p.q0)((e) => e.isMobile),
                        s = (0, p.q0)((e) => e.vw),
                        l = i ? 100 * s : 700;
                    return (0, a.jsx)(b.k, {
                        position: "relative",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: { base: "64px", lg: "128px" },
                        paddingBottom: { base: "64px", lg: "128px" },
                        children: (0, a.jsxs)(b.k, {
                            position: "relative",
                            flexDirection: "column",
                            width: "calc(100% - 48px)",
                            maxWidth: "1262px",
                            alignItems: "center",
                            gap: "0px",
                            children: [
                                (0, a.jsx)(p.di, {
                                    above: "lg",
                                    children: (0, a.jsx)(b.k, {
                                        position: "absolute",
                                        flexDirection: "column",
                                        width: "calc(100% + 108px)",
                                        height: "calc(100% + 108px)",
                                        maxWidth: "100vw",
                                        alignItems: "center",
                                        zIndex: "999",
                                        children: (0, a.jsx)(m.xu, { position: "absolute", right: "32px", bottom: "0px", children: (0, a.jsx)(tw, {}) }),
                                    }),
                                }),
                                (0, a.jsxs)(b.k, {
                                    zIndex: "999",
                                    id: "tokenomics",
                                    flexDirection: "column",
                                    maxWidth: "1062px",
                                    gap: "32px",
                                    alignItems: "center",
                                    children: [
                                        (0, a.jsx)(T.X, { size: "2xl", textAlign: "center", textTransform: "uppercase", whiteSpace: "nowrap", children: "TOKENOMICS?" }),
                                        (0, a.jsx)(S.x, {
                                            textStyle: "lg",
                                            lineHeight: "28px",
                                            textAlign: "center",
                                            whiteSpace: { base: "normal" },
                                            width: { base: "100%", lg: "calc(100% - 15%)" },
                                            children: "69 BILLION MEME WILL BE MINTED IN TOTAL. THEY WILL BE DISTRIBUTED INTO 7 MAIN POOLS, EACH WITH DIFFERENT UNLOCKING SCHEDULES.",
                                        }),
                                        (0, a.jsx)(ts.h, {
                                            onClick: () => {
                                                n.replace("/about");
                                            },
                                            width: "min-content",
                                            content: "VIEW MORE ON ABOUT",
                                            size: "regular",
                                            variant: "solid",
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)(b.k, {
                                    position: "relative",
                                    width: "100%",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: { base: "48px", lg: "80px" },
                                    marginBottom: { base: "24px", lg: "140px" },
                                    flexWrap: "wrap",
                                    gap: { base: "48px", lg: "0px" },
                                    children: [
                                        (0, a.jsx)(b.k, {
                                            width: { base: "100%", lg: "50%" },
                                            alignItems: "center",
                                            justifyContent: "center",
                                            userSelect: "none",
                                            pointerEvents: "none",
                                            padding: { base: "14px", lg: "0px 12px 0px 0px" },
                                            children: (0, a.jsx)(j(), { src: ti.src, alt: "", width: l, height: l * (342 / 202) }),
                                        }),
                                        (0, a.jsx)(b.k, {
                                            width: { base: "100%", lg: "50%" },
                                            flexDirection: "column",
                                            gap: "26px",
                                            padding: { base: "0px", lg: "31px 0px 31px 24px" },
                                            children: t.map((e, t) => (0, a.jsx)(tA, { id: e.id, title: e.title, desc: e.desc, color: e.color }, t)),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                tR = [
                    { id: 0, title: "ECOSYSTEM (30%)", desc: "30% STASHED AWAY TO GIVE BACK TO OUR COMMUNITY AND BUILD THE ECOSYSTEM.", value: 30, color: "#64B865" },
                    { id: 1, title: "AIRDROP (25%)", desc: "25% TO THANK OUR FAM THROUGH MULTIPLE AIRDROPS \uD83E\uDE82", value: 25, color: "#F8C34B" },
                    { id: 4, title: "CONTRIBUTORS (17%)", desc: "17% FOR THE PARTNERS THAT BUILD WITH US AND SOLD US THEIR LAMBOS", value: 17, color: "#35B0BB" },
                    { id: 3, title: "PRIVATE SALE (12%)", desc: "12% OF MEME DISTRIBUTED TO EXTERNAL INVESTORS AND SUPER CREW HOLDERS VIA PRIVATE PRESALE", value: 12, color: "#E53E3D" },
                    { id: 2, title: "COMMUNITY PRESALE (11%)", desc: "11% OF MEME WILL BE DISTRIBUTED TO THE GREATER MEMELAND COMMUNITY VIA A FIRE SALE \uD83D\uDD25", value: 11, color: "#F5665E" },
                    { id: 6, title: "ADVISORY (3%)", desc: "3% FOR THE COUNSELING WE NEED TO PULL THROUGH", value: 3, color: "#8982F3" },
                    { id: 5, title: "BINANCE LAUNCHPOOL (2%)", desc: "2% FOR THE INITIAL LIQUIDITY OF EXCHANGE", value: 4, color: "#A2AEC0" },
                ],
                tH = () => (0, a.jsx)(tC, { dataSet: tR });
            var tL = { src: "/_next/static/media/doge_rocket.3fc8e2ac.gif", height: 410, width: 760, blurWidth: 0, blurHeight: 0 };
            let tv = (e) => {
                    let [t, n] = (0, c.useState)(!e.visibility);
                    return (e.visibility &&
                        (0, et.W)(e.visibility, "change", (e) => {
                            n(e > 0);
                        }),
                    t)
                        ? (0, a.jsx)(tN, { ...e })
                        : (0, a.jsx)("span", {});
                },
                tN = (e) => {
                    let { children: t, visibility: n } = e,
                        { relX: i, relY: s } = (0, g.c8)(),
                        l = (0, p.q0)((e) => e.vh),
                        r = (0, p.q0)((e) => e.vw);
                    return (0, a.jsxs)(u.Z, {
                        height: "100%",
                        width: "100%",
                        pointerEvents: "none",
                        userSelect: "none",
                        children: [
                            (0, a.jsx)(
                                u.Z,
                                {
                                    className: "dogez",
                                    style: {
                                        position: "absolute",
                                        width: "114px",
                                        height: "64px",
                                        pointerEvents: "none",
                                        x: (0, ei.H)(i, (e) => ((e + 1) / 2) * r * 100 + -50),
                                        y: (0, ei.H)(s, (e) => ((e + 1) / 2) * l * 100 + -100),
                                        opacity: n,
                                    },
                                    zIndex: 10,
                                    children: (0, a.jsx)(u.Z, { height: "100%", style: { scaleX: (0, ei.H)(i, (e) => (e > i.getPrevious() ? 1 : -1)) }, children: (0, a.jsx)(j(), { fill: !0, src: tL, alt: "DogeRocket Pixelated" }) }),
                                },
                                "DogeRocket"
                            ),
                            t,
                        ],
                    });
                };
            var tM = n(1472);
            function tU(e) {
                let { breakpoint: t, hide: n, children: i, ssr: s } = e,
                    [l] = (0, tM.a)(t, { ssr: s });
                return (n ? !l : l) ? i : null;
            }
            var tD = n(14198),
                tk = (e, t) => {
                    var n, i;
                    return null != (i = null == (n = null == e ? void 0 : e.breakpoints) ? void 0 : n[t]) ? i : t;
                };
            function tW(e) {
                let { breakpoint: t = "", below: n, above: i } = e,
                    s = (0, tD.F)(),
                    l = tk(s, n),
                    r = tk(s, i),
                    o = t;
                return l ? (o = `(max-width: ${l})`) : r && (o = `(min-width: ${r})`), o;
            }
            function tz(e) {
                let { children: t, ssr: n } = e,
                    i = tW(e);
                return (0, a.jsx)(tU, { breakpoint: i, hide: !0, ssr: n, children: t });
            }
            tz.displayName = "Hide";
            var tF = n(27440);
            function tZ(e) {
                let { children: t, ssr: n } = e,
                    i = tW(e);
                return (0, a.jsx)(tU, { breakpoint: i, ssr: n, children: t });
            }
            tZ.displayName = "Show";
            var tP = n(35837),
                tB = n(51402),
                tV = n(75317),
                tY = {
                    src: "/_next/static/media/orbit.460708b4.png",
                    height: 444,
                    width: 175,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAABlBMVEVMaXH///+a4ocPAAAAAnRSTlMABHH+CSEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAPSURBVHicY2DABRhBmBEAACkABDKXLoUAAAAASUVORK5CYII=",
                    blurWidth: 3,
                    blurHeight: 8,
                },
                tG = n(40542),
                tX = n(51218);
            let tJ = (e) =>
                    (0, a.jsxs)(b.k, { flexDirection: "column", gap: e.small ? "12px" : "0px", children: [(0, a.jsx)(T.X, { size: e.small ? "md" : "lg", children: e.heading }), (0, a.jsx)(S.x, { textStyle: "lg", children: e.date })] }),
                tK = (e) =>
                    (0, a.jsxs)(b.k, { id: e.id, flexDirection: "column", children: [(0, a.jsx)(T.X, { size: "md", fontSize: e.small ? "22px" : "24px", children: e.heading }), (0, a.jsx)(S.x, { textStyle: "md", children: e.date })] }),
                tq = (e) => {
                    let t = (0, p.q0)((e) => e.isMobile);
                    return t ? (0, a.jsx)(tK, { ...e }) : (0, a.jsx)(tJ, { ...e });
                };
            var t_ = n(10268);
            let tQ = (e) =>
                    (0, a.jsx)(m.xu, {
                        position: "relative",
                        width: "200px",
                        height: "112px",
                        backgroundImage: tY.src,
                        backgroundSize: "200px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom",
                        ...e.style,
                        children: e.children,
                    }),
                t$ = { flexDirection: "column", width: "100%", gap: "16px" },
                t0 = { textStyle: "md", color: "white" },
                t1 = { position: "sticky", top: 0, height: "fit-content" },
                t2 = () =>
                    (0, a.jsx)(b.k, {
                        width: "100%",
                        position: "relative",
                        alignItems: "center",
                        flexDirection: "column",
                        overflow: "hidden",
                        children: (0, a.jsxs)(b.k, {
                            position: "relative",
                            flexDirection: "column",
                            width: "calc(100% - 48px)",
                            maxWidth: "1280px",
                            paddingTop: { base: "64px", lg: "128px" },
                            paddingBottom: { base: "64px", lg: "128px" },
                            alignItems: "center",
                            children: [
                                (0, a.jsxs)(u.Z, {
                                    id: "timeline",
                                    display: "flex",
                                    width: "100%",
                                    marginBottom: { base: "36px", lg: "0px" },
                                    flexDirection: "column",
                                    children: [
                                        (0, a.jsx)(T.X, { size: "2xl", fontWeight: "700", textAlign: { base: "start", lg: "start" }, children: "IT’S ALWAYS MEME" }),
                                        (0, a.jsxs)(S.x, {
                                            textStyle: "lg",
                                            marginTop: { base: "8px", lg: "16px" },
                                            textAlign: { base: "start", lg: "start" },
                                            children: ["WHO CONTROLS THE MEME,", (0, a.jsx)(tz, { above: "lg", children: (0, a.jsx)("br", {}) }), "CONTROLS THE UNIVERSE"],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)(tF.r, {
                                    templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
                                    marginTop: { base: "64px", lg: "64px" },
                                    gap: "16px",
                                    children: [
                                        (0, a.jsx)(u.Z, {
                                            width: "100%",
                                            padding: { base: "0px", lg: "48px 0px" },
                                            children: (0, a.jsxs)(b.k, {
                                                ...t1,
                                                children: [
                                                    (0, a.jsx)(tq, { id: "waitlist", heading: "WAITLIST", date: "JUN 9, 2023" }),
                                                    (0, a.jsx)(tZ, {
                                                        below: "lg",
                                                        children: (0, a.jsx)(tQ, {
                                                            style: { position: "absolute", top: "-60px", right: "-48px" },
                                                            children: (0, a.jsx)(m.xu, { position: "absolute", bottom: "15px", right: "60px", children: (0, a.jsx)(j(), { src: te.src, width: 60, height: 60, alt: "" }) }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            display: "flex",
                                            width: "100%",
                                            padding: { base: "0px", lg: "48px 0px" },
                                            children: (0, a.jsx)(u.Z, { width: "100%", children: (0, a.jsx)(t5, { noToggle: !0, defaulOpened: !0 }) }),
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            gridColumn: { base: "span 1", lg: "span 2" },
                                            padding: { base: "48px 0px", lg: "0px" },
                                            width: "100%",
                                            children: (0, a.jsx)(tZ, { above: "lg", children: (0, a.jsx)(m.xu, { width: "100%", children: (0, a.jsx)(ex, {}) }) }),
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            width: "100%",
                                            padding: { base: "0px", lg: "48px 0px" },
                                            children: (0, a.jsxs)(b.k, {
                                                ...t1,
                                                children: [
                                                    (0, a.jsx)(tq, { id: "firesale", heading: "FIRE SALE", date: "OCT 26 11:00AM (UTC+8)" }),
                                                    (0, a.jsx)(tZ, {
                                                        below: "lg",
                                                        children: (0, a.jsx)(tQ, {
                                                            style: { position: "absolute", top: "-60px", right: "-48px" },
                                                            children: (0, a.jsx)(m.xu, { position: "absolute", bottom: "15px", right: "60px", children: (0, a.jsx)(j(), { src: eF.Z.src, width: 60, height: 60, alt: "" }) }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)(u.Z, { width: "100%", padding: { base: "0px", lg: "48px 0px" }, children: (0, a.jsx)(t9, { noToggle: !0, defaulOpened: !0 }) }),
                                        (0, a.jsx)(u.Z, {
                                            padding: { base: "48px 0px", lg: "0px" },
                                            gridColumn: { base: "span 1", lg: "span 2" },
                                            width: "100%",
                                            children: (0, a.jsx)(tZ, { above: "lg", children: (0, a.jsx)(m.xu, { width: "100%", children: (0, a.jsx)(ex, {}) }) }),
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            width: "100%",
                                            padding: { base: "0px", lg: "48px 0px" },
                                            children: (0, a.jsxs)(b.k, {
                                                ...t1,
                                                children: [
                                                    (0, a.jsx)(tq, { id: "airdrops", heading: "AIRDROPS", date: "NOV 3, 2023 3:30PM (UCT+8)" }),
                                                    (0, a.jsx)(tZ, {
                                                        below: "lg",
                                                        children: (0, a.jsx)(tQ, {
                                                            style: { position: "absolute", top: "-60px", right: "-48px" },
                                                            children: (0, a.jsx)(m.xu, { position: "absolute", bottom: "15px", right: "60px", children: (0, a.jsx)(j(), { src: eT.Z.src, width: 60, height: 60, alt: "" }) }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)(u.Z, { width: "100%", padding: { base: "0px", lg: "48px 0px" }, children: (0, a.jsx)(t6, { noToggle: !0, defaulOpened: !0 }) }),
                                        (0, a.jsx)(u.Z, {
                                            padding: { base: "48px 0px", lg: "0px" },
                                            gridColumn: { base: "span 1", lg: "span 2" },
                                            width: "100%",
                                            children: (0, a.jsx)(tZ, { above: "lg", children: (0, a.jsx)(m.xu, { width: "100%", children: (0, a.jsx)(ex, {}) }) }),
                                        }),
                                        (0, a.jsx)(u.Z, {
                                            width: "100%",
                                            padding: { base: "0px", lg: "48px 0px" },
                                            children: (0, a.jsxs)(b.k, {
                                                ...t1,
                                                children: [
                                                    (0, a.jsx)(tq, { id: "public-launch", heading: "TOKEN(S) LAUNCH", date: "NOV 3, 2023 3:30PM (UCT+8)" }),
                                                    (0, a.jsx)(tZ, {
                                                        below: "lg",
                                                        children: (0, a.jsx)(tQ, {
                                                            style: { position: "absolute", top: "-60px", right: "-48px" },
                                                            children: (0, a.jsx)(m.xu, { position: "absolute", bottom: "15px", right: "60px", children: (0, a.jsx)(j(), { src: eP.src, width: 60, height: 60, alt: "" }) }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)(u.Z, { width: "100%", padding: { base: "0px 0px 48px 0px", lg: "48px 0px" }, children: (0, a.jsx)(t8, { noToggle: !0, defaulOpened: !0 }) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                t5 = (e) => {
                    let { defaulOpened: t, noToggle: n, showHeader: i } = e;
                    return (
                        (0, tV.p)((e) => e.prefillCode),
                        (0, a.jsxs)(b.k, {
                            ...t$,
                            children: [
                                i && (0, a.jsx)(tq, { heading: "WAITLIST", date: "JUN 9, 2023" }),
                                (0, a.jsx)(S.x, { ...t0, children: "FOR THE POOR PEOPLE WHO DON'T HOLD MEMELAND NFTS" }),
                                (0, a.jsxs)(t_.z, {
                                    defaulOpened: t,
                                    noToggle: n,
                                    title: "HOW TO GET A WAITLIST CODE?",
                                    children: [
                                        (0, a.jsxs)(tX.G, {
                                            children: [
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "BEG CAPTAINZ AND POTATOZ HOLDERS FOR WAITLIST CODE." }) }),
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "EACH CAPTAINZ HAS 5 CODES; EACH POTATOZ HAS 1 CODE." }) }),
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "LIKE A CONDOM, EACH CODE CAN ONLY BE USED ONCE." }) }),
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "EACH CODE CAN REDEEM 1 WAITLIST SPOT." }) }),
                                            ],
                                        }),
                                        (0, a.jsx)("br", {}),
                                        (0, a.jsx)(S.x, { children: 'A WISE MAN ONCE SAID: "WAITLIST CODES ARE LIKE STD—THEY ARE MEANT TO BE SHARED".' }),
                                    ],
                                }),
                                (0, a.jsxs)(t_.z, {
                                    defaulOpened: t,
                                    noToggle: n,
                                    title: "I HAVE A WAITLIST NOW WHAT?",
                                    children: [
                                        (0, a.jsxs)(tX.G, {
                                            children: [
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "PLAY THE GAME." }) }),
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "GET AT LEAST 69 COINS." }) }),
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "SUBMIT YOUR WALLET & CODE." }) }),
                                                (0, a.jsx)(tP.HC, { children: (0, a.jsx)(S.x, { children: "SHARE A TWEET." }) }),
                                            ],
                                        }),
                                        (0, a.jsx)("br", {}),
                                        (0, a.jsx)(S.x, { children: "ONCE WE VERIFY YOU HAVE DONE ALL THE ABOVE, YOU ARE ON THE WAITLIST." }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                t9 = (e) => {
                    let { defaulOpened: t, noToggle: n, showHeader: i } = e,
                        { firesaleViewableAt: s, firesaleEndAt: l } = h.LH,
                        r = (0, el.q)((e) => e.time >= s),
                        o = (0, el.q)((e) => e.time >= l);
                    return (0, a.jsxs)(b.k, {
                        ...t$,
                        children: [
                            i && (0, a.jsx)(tq, { heading: "FIRE SALE", date: "OCT 26 11:00AM (UTC+8)" }),
                            (0, a.jsx)(S.x, { ...t0, children: "SHIT’S ON FIRE, YO" }),
                            (0, a.jsxs)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "MVP, CAPTAINZ & POTATOZ HOLDERS",
                                children: [
                                    (0, a.jsx)(S.x, { children: "YOU'RE WELCOME, BUT MAKE SURE YOUR NFTS ARE IN YOUR WALLETS BEFORE THE SNAPSHOT DATE OCT 25 11:00PM (UTC+8). ALLOTMENTS ARE AS FOLLOWS:" }),
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsxs)(tX.G, {
                                        children: [
                                            (0, a.jsx)(tP.HC, { children: "MVP: YOU ARE ON THE ALLOWLIST WITH 12 LOTS PER NFT GUARANTEED." }),
                                            (0, a.jsx)(tP.HC, { children: "CAPTAINZ: YOU ARE ON THE ALLOWLIST WITH GUARANTEES BASED ON YOUR SPECIES." }),
                                            (0, a.jsxs)(tX.Q, {
                                                children: [
                                                    (0, a.jsx)(tP.HC, { children: "ALIEN: 10 LOTS PER NFT" }),
                                                    (0, a.jsx)(tP.HC, { children: "KAIJU OR KONG: 3 LOTS PER NFT" }),
                                                    (0, a.jsx)(tP.HC, { children: "SHARK OR KRAKEN: 2 LOTS PER NFT" }),
                                                    (0, a.jsx)(tP.HC, { children: "HUMAN OR UNREVEALED: 1 LOT PER NFT" }),
                                                ],
                                            }),
                                            (0, a.jsx)(tP.HC, { children: "POTATOZ: 1 LOT PER NFT FOR LUCKY WAITLIST DEPOSIT WALLETS, CHOSEN AT RANDOM." }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsx)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "FULL AND SUPER CREWS",
                                children: (0, a.jsxs)(tX.G, {
                                    children: [
                                        (0, a.jsx)(tP.HC, { children: "FULL CREWS: YOU'RE RICH SO YOU GET 1 EXTRA LOT PER FULL CREW." }),
                                        (0, a.jsx)(tP.HC, { children: "SUPER CREWS: YOU'RE ULTRA RICH SO YOU ALSO GET," }),
                                        (0, a.jsxs)(tX.Q, { children: [(0, a.jsx)(tP.HC, { children: "EXTRA 12 LOTS PER SUPER CREW GUARANTEED" }), (0, a.jsx)(tP.HC, { children: "ACCESS TO PRIVATE SALE" })] }),
                                        (0, a.jsx)(tP.HC, { children: "MUST BE QUESTING FULL AND SUPER CREWS TO BE ELIGIBLE." }),
                                    ],
                                }),
                            }),
                            (0, a.jsx)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "WAITLIST CODE USERS",
                                children: "WALLETS THAT HAVE SUCCESSFULLY CLAIMED THE WAITLIST CODE WILL HAVE AN ALLOCATION OF 1 LOT. REMAINING SUPPLIES FROM THE ALLOWLIST WILL GO TO LUCKY WAITLIST DEPOSIT WALLETS, CHOSEN AT RANDOM.",
                            }),
                            (0, a.jsx)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "SO HOW DO I START SPITTING FIRE?",
                                children: (0, a.jsxs)(tX.G, {
                                    children: [
                                        (0, a.jsx)(tP.HC, { children: "ALLOWLIST IS GUARANTEED. YOU WILL BE ALLOCATED THE LOT IF YOU PAY FOR THE LOT DURING THE FIRE SALE. YOU DO NOT NEED TO RUSH." }),
                                        (0, a.jsx)(tP.HC, {
                                            children:
                                                "WAITLIST IS NON-GUARANTEED. ITS PRIORITY IS BELOW THE ALLOWLIST. A RAFFLE WILL BE HELD AT THE END OF THE FIRE SALE TO DETERMINE THE ALLOTMENT. IF YOU PAY FOR THE LOT DURING THE FIRST HOUR OF THE FIRE SALE, YOU GET A 6.9X BOOST IN THE RAFFLE.",
                                        }),
                                        (0, a.jsx)(tP.HC, { children: "MEME IN FIRE SALE WILL BE CLAIMABLE BY THE CONTRIBUTING WALLET AND IS NOT ATTACHED TO NFTS." }),
                                        (0, a.jsx)(tP.HC, { children: "THE ALLOTMENT RESULTS WILL BE ANNOUNCED WITHIN 48 HOURS AFTER THE FIRE SALE." }),
                                        (0, a.jsx)(tP.HC, { children: "ALL UNALLOCATED AMOUNTS WILL BE REFUNDED WITHIN 48 HOURS AFTER THE FIRE SALE." }),
                                        (0, a.jsx)(tP.HC, { children: "THE PRICE PER LOT IS THE SAME FOR EVERYONE AT 300 USD PER LOT. THE ETH REQUIRED WILL BE ANNOUNCED 2 HOURS BEFORE FIRE SALE." }),
                                        (0, a.jsx)(tP.HC, { children: "EACH LOT IS EQUIVALENT TO 300,000 MEME." }),
                                    ],
                                }),
                            }),
                            (0, a.jsxs)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "UNLOCKING PERIOD?",
                                children: [
                                    "OUR ATTEMPT TO ENSURE A FAIR LAUNCH AND THAT YOU ARE PROTECTED.",
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsxs)(tX.G, {
                                        children: [
                                            (0, a.jsx)(tP.HC, {
                                                children: "FIRE SALE: 25% UNLOCKED INSTANTLY. REMAINING UNLOCKED DAILY OVER 18 MONTHS. AFTER THE 18 MONTH UNLOCKING PERIOD ENDS, YOU HAVE 69 DAYS TO CLAIM ANY REMAINING MEME.",
                                            }),
                                            (0, a.jsx)(tP.HC, {
                                                children:
                                                    "PRIVATE SALE: 10% UNLOCKED INSTANTLY AT THE END OF 6 MONTHS. THE REMAINING WILL UNLOCK DAILY OVER 18 MONTHS AFTER THE INITIAL PERIOD. AFTER THE ENTIRE 24 MONTH UNLOCKING PERIOD, YOU HAVE 69 DAYS TO CLAIM ANY REMAINING MEME.",
                                            }),
                                            (0, a.jsx)(tP.HC, { children: "AFTER THE CLAIM PERIOD IS OVER, ALL UNCLAIMED MEME WILL GO TO THE ECOSYSTEM FUND." }),
                                        ],
                                    }),
                                ],
                            }),
                            r &&
                                !o &&
                                (0, a.jsx)(tG.H, { href: "/firesale", children: (0, a.jsx)(tB.z, { variant: "solid", width: "fit-content", children: (0, a.jsx)(S.x, { textStyle: "md", fontWeight: "bold", children: "JOIN THE FIRE" }) }) }),
                        ],
                    });
                },
                t6 = (e) => {
                    let { defaulOpened: t, noToggle: n, showHeader: i } = e,
                        { firesaleViewableAt: s, firesaleEndAt: l } = h.LH;
                    (0, el.q)((e) => e.time >= s);
                    let r = (0, el.q)((e) => e.time >= l);
                    return (0, a.jsxs)(b.k, {
                        ...t$,
                        children: [
                            i && (0, a.jsx)(tq, { heading: "AIRDROPS", date: "NOV 3, 2023 3:30PM (UCT+8)" }),
                            (0, a.jsx)(S.x, { ...t0, children: "WHO SAYS THERE IS NO FREE LUNCH?" }),
                            (0, a.jsxs)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "MEMELAND NFT HOLDERS",
                                children: [
                                    "EACH MEMELAND NFT IS ELIGIBLE FOR THE FOLLOWING:",
                                    (0, a.jsxs)(tX.G, {
                                        children: [
                                            (0, a.jsx)(tP.HC, { children: "MVP HOLDER: 8229798.230792167776562956 MEME PER NFT." }),
                                            (0, a.jsxs)(tP.HC, {
                                                children: [
                                                    "CAPTAINZ HOLDER: AMOUNT VARIES DEPENDING ON CAPTAINZ TRAITS.",
                                                    (0, a.jsxs)(tX.Q, {
                                                        level: 2,
                                                        children: [
                                                            (0, a.jsx)(tP.HC, { children: "HUMAN OR UNREVEALED: 685816.519232680648046913 MEME PER NFT" }),
                                                            (0, a.jsx)(tP.HC, { children: "SHARK OR KRAKEN: 1371633.038465361296093826 MEME PER NFT" }),
                                                            (0, a.jsx)(tP.HC, { children: "KONG OR KAIJU: 2057449.557698041944140739 MEME PER NFT" }),
                                                            (0, a.jsx)(tP.HC, { children: "ALIEN: 6858165.192326806480469130 MEME PER NFT" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(tP.HC, { children: "POTATOZ HOLDER: 228605.506410893549348971 MEME PER NFT." }),
                                        ],
                                    }),
                                ],
                            }),
                            r &&
                                (0, a.jsxs)(t_.z, {
                                    defaulOpened: t,
                                    noToggle: n,
                                    title: "MAPS OR VALUABLES HOLDERS",
                                    children: [
                                        (0, a.jsx)(S.x, { children: "MAPS AND VALUABLES WILL BE BURNED AND CONVERTED TO MEME:" }),
                                        (0, a.jsx)("br", {}),
                                        (0, a.jsxs)(tX.G, {
                                            children: [
                                                (0, a.jsxs)(tP.HC, {
                                                    children: [
                                                        "MAPS: AMOUNT VARIES DEPENDING ON TRAIT",
                                                        (0, a.jsxs)(tX.Q, {
                                                            level: 2,
                                                            children: [
                                                                (0, a.jsx)(tP.HC, { children: "SPECIAL: 1526.987850487972204395 MEME PER MAP" }),
                                                                (0, a.jsx)(tP.HC, { children: "EXTRAORDINARY: 6107.951401951888817580 MEME PER MAP" }),
                                                                (0, a.jsx)(tP.HC, { children: "MAGICAL: 12215.902803903777635160 MEME PER MAP" }),
                                                                (0, a.jsx)(tP.HC, { children: "EPIC: 27485.781308783499679110 MEME PER MAP" }),
                                                                (0, a.jsx)(tP.HC, { children: "MYTHICAL: 105362.161683670082103255 MEME PER MAP" }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)(tP.HC, {
                                                    children: [
                                                        "VALUABLES: AMOUNT VARIES DEPENDING ON TRAIT",
                                                        (0, a.jsxs)(tX.Q, {
                                                            level: 2,
                                                            children: [
                                                                (0, a.jsx)(tP.HC, { children: "SAND: 208.290505484832375951 MEME PER VALUABLE" }),
                                                                (0, a.jsx)(tP.HC, { children: "KIWI: 833.162021939329503804 MEME PER VALUABLE" }),
                                                                (0, a.jsx)(tP.HC, { children: "CHERRY: 1666.324043878659007608 MEME PER VALUABLE" }),
                                                                (0, a.jsx)(tP.HC, { children: "IVORY: 3749.229098726982767118 MEME PER VALUABLE" }),
                                                                (0, a.jsx)(tP.HC, { children: "DARK: 14372.044878453433940619 MEME PER VALUABLE" }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, a.jsxs)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "UNLOCKING PERIOD?",
                                children: [
                                    (0, a.jsx)(S.x, { children: "UPON LAUNCH, MEME FOR YOUR MAPS AND VALUABLES ARE INSTANTANEOUSLY UNLOCKED. YOU WILL HAVE 69 DAYS TO CLAIM THESE MEME." }),
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsx)(S.x, { children: "THE REST WILL BE UNLOCKED WITHIN 24 MONTHS WEN RAY SAYS. YOU WILL HAVE 69 DAYS AFTER IT IS 100% UNLOCKED TO CLAIM THESE MEME." }),
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsx)(S.x, { children: "AFTER THE CLAIM PERIOD IS OVER, ALL UNCLAIMED MEME WILL GO TO THE ECOSYSTEM FUND." }),
                                ],
                            }),
                        ],
                    });
                },
                t8 = (e) => {
                    let { defaulOpened: t, noToggle: n, showHeader: i } = e;
                    return (0, a.jsxs)(b.k, {
                        ...t$,
                        children: [
                            i && (0, a.jsx)(tq, { heading: "TOKEN(S) LAUNCH", date: "NOV 3, 2023 3:30PM (UTC+8)" }),
                            (0, a.jsx)(S.x, { ...t0, children: "LFG!" }),
                            (0, a.jsx)(t_.z, {
                                defaulOpened: t,
                                noToggle: n,
                                title: "TOKEN CLAIMS/REFUNDS",
                                children: (0, a.jsxs)(tX.G, {
                                    children: [
                                        (0, a.jsxs)(tP.HC, {
                                            children: [
                                                "Allocation for each NFT will be according to:",
                                                (0, a.jsxs)(tX.Q, {
                                                    level: 2,
                                                    children: [
                                                        (0, a.jsx)(tP.HC, { children: "Maps/Valuables Airdrops: JAN 11, 2024" }),
                                                        (0, a.jsx)(tP.HC, { children: "FIRE SALE: JUL 4, 2025" }),
                                                        (0, a.jsx)(tP.HC, { children: "Private sale: DEC 31, 2025" }),
                                                        (0, a.jsx)(tP.HC, { children: "NFT AIRDROPS: 69 days AFTER IT IS 100% UNLOCKED, WEN RAY SAYS." }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(tP.HC, { children: "ALL UNCLAIMED MEME WILL GO TO THE ECOSYSTEM FUND." }),
                                        (0, a.jsx)(tP.HC, { children: "Refunds for UNALLOCATED DEPOSITS must be claimed before Jan 11, 2024." }),
                                    ],
                                }),
                            }),
                            (0, a.jsx)(tG.H, { href: "/claim", children: (0, a.jsx)(tB.z, { variant: "solid", width: "fit-content", children: (0, a.jsx)(S.x, { textStyle: "md", fontWeight: "bold", children: "CLAIM YOUR FIRE" }) }) }),
                        ],
                    });
                };
            var t3 = { src: "/_next/static/media/chevron.8ab51e86.gif", height: 42, width: 39, blurWidth: 0, blurHeight: 0 };
            let t4 = (e) =>
                    (0, a.jsx)(u.Z, {
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        userSelect: "none",
                        animate: { y: 10 },
                        transition: { repeat: 1 / 0, duration: 2 },
                        ...e.style,
                        ...e.animation,
                        children: (0, a.jsx)(j(), { fill: !0, alt: "chevron", src: t3, style: { pointerEvents: "none", userSelect: "none" } }),
                    }),
                t7 = [t5, t9, t6, t8],
                ne = [
                    { Component: tt, initialRotation: 10 },
                    { Component: eZ, initialRotation: 70 },
                    { Component: eM, initialRotation: 130 },
                    { Component: eB, initialRotation: 190 },
                ],
                nt = [0, 1, 2, 3, 3],
                nn = (e) => {
                    let t = (0, d.useRouter)(),
                        n = (e, t) => {
                            document.documentElement.scrollTo(0, t);
                        };
                    return (
                        (0, eb.A)(() => {
                            let i = (0, em.AE)(t.asPath);
                            i === e.id && document.documentElement.scrollTop !== e.position && n(e.id, e.position);
                        }, [t.asPath]),
                        (0, eE.q)(() => {
                            let t = (0, em.AE)();
                            t === e.id && document.documentElement.scrollTop !== e.position && n(e.id, e.position);
                        }),
                        (0, a.jsx)("div", {})
                    );
                },
                ni = (e) => {
                    let { children: t, position: n = 0 } = e,
                        [i, s] = (0, c.useState)(!1),
                        { scrollY: l } = ee();
                    return ((0, et.W)(l, "change", (e) => {
                        e > n && s(!0);
                    }),
                    i)
                        ? (0, a.jsx)(a.Fragment, { children: t })
                        : (0, a.jsx)(a.Fragment, {});
                },
                ns = c.memo(() => {
                    let e = (0, c.useRef)(),
                        [t, n] = (0, c.useState)(() => [645, 1817, 1257, 462]),
                        [i, s] = (0, c.useState)(5923),
                        l = (0, en.c)(0),
                        r = (0, p.q0)((e) => e.vh),
                        o = (0, p.q0)((e) => e.vw),
                        d = 100 * r,
                        h = ef([
                            [0 * d, 0],
                            [0.69 * d, 1],
                        ]),
                        x = ef([
                            [0 * d, 0],
                            [0.69 * d, 0.5],
                            [1.38 * d, 1],
                            [7.935 * d, 1],
                            [0.69 * d * 8.5 + i + 200, 2],
                        ]),
                        g = (0, ei.H)(
                            x,
                            [0, 0.5, 1, 1, 2],
                            [
                                "linear-gradient(180deg, #4EA5D9 0%, #60C7FF 14.3%, #60C7FF 14.3%, #102C52 28.6, #214E77 42.9%, #010E30 57.1%, #122F55 71.4%  )",
                                "linear-gradient(180deg, #102C52 0%, #214E77 100%)",
                                "linear-gradient(180deg, #010E30 0%, #122F55 100%)",
                                "linear-gradient(180deg, #010E30 0%, #122F55 100%)",
                                "linear-gradient(180deg, #304365 0%, #374C6E 100%)",
                            ]
                        );
                    ef([
                        [0 * d, 1],
                        [1.38 * d, 0],
                    ]);
                    let E = ef([
                            [2 * d, 0],
                            [2.07 * d, 1],
                            [0.69 * d * 5, 1],
                            [3.795 * d, 0],
                        ]),
                        f = ef([
                            [1.38 * d, 0],
                            [2.07 * d, 1],
                            [0.69 * d * 5, 1],
                            [3.795 * d, 1],
                            [5.52 * d, 1],
                            [0.69 * d * 8.0001, 0],
                        ]),
                        b = ef([
                            [5.52 * d, 1],
                            [0.69 * d * 8.0001, 0],
                        ]),
                        T = ef([
                            [0.345 * d, 0],
                            [1.035 * d, 1],
                            [0.69 * d * 2.5, 1],
                            [0.69 * d * 2.6, 0],
                        ]),
                        S = ef([
                            [0.621 * d, 0],
                            [0.69 * d * 2.1, 1],
                            [1.863 * d, 1],
                            [2.001 * d, 0],
                        ]),
                        I = ef([
                            [0.828 * d, 0],
                            [0.69 * d * 2.5, 1],
                            [2.001 * d, 1],
                            [2.07 * d, 0],
                        ]),
                        y = ef([
                            [0 * d, 0],
                            [2.415 * d, 1],
                        ]),
                        O = ef([
                            [0.69 * d * 5, 0.9415],
                            [4.14 * d, 0.9415],
                        ]),
                        w = ef([
                            [0.69 * d * 6.5, 0],
                            [0.69 * d * 6.5001, 1],
                            [5.52 * d, 1],
                            [0.69 * d * 8.0001, 0],
                        ]),
                        C = ef([
                            [5.52 * d, 0],
                            [0.69 * d * 8.0001, 1],
                            [0.69 * d * 9, 1],
                            [0.69 * d * 9.0001, 0],
                        ]),
                        R = ef([
                            [6.072 * d + 892 + 96, 0],
                            [0.69 * d * 9 + 892 + 96, 1],
                            [0.69 * d * 8.5 + i - 170, 1],
                            [0.69 * d * 8.5 + i - 169, 0],
                        ]),
                        H = ef([
                            [6.072 * d + 892 + 96, 70],
                            [0.69 * d * 9 + 892 + 96, 0],
                            [0.69 * d * 8.5 + i - 170, 0],
                            [0.69 * d * 8.5 + i - 169, -40],
                        ]),
                        L = (0, en.c)(0.3),
                        v = (0, es.q)(0, eh.Y);
                    (0, et.W)(l, "change", (e) => {
                        let t = nt[Math.max(0, e)];
                        v.set(-(60 * t));
                    });
                    let N = ef([
                        [5.52 * d, 0],
                        [0.69 * d * 8.01, 1],
                    ]);
                    (0, eE.q)(() => {
                        ej.U.current("light");
                    }),
                        (0, et.W)(h, "change", (e) => ej.U.current(e < 0.5 ? "light" : "dark"));
                    let M = ne.map((e, t) => {
                            let { initialRotation: n, Component: i } = e,
                                s = (0, es.q)(0, eh.Y),
                                r = (0, es.q)(1, eh.Y);
                            return (
                                (0, et.W)(l, "change", (e) => {
                                    let n = nt[Math.max(0, e)];
                                    s.set(n === t || 6 === e ? 1 : 0.3), r.set(n === t ? 1.4 : 1);
                                }),
                                (0, a.jsx)(
                                    eH,
                                    {
                                        scaleSizeFromRotation: !0,
                                        size: 1.369 * 0.7,
                                        rotation: (0, ei.H)([H, v], (e) => {
                                            let [t, i] = e;
                                            return n + t + i;
                                        }),
                                        showTrajectory: !1,
                                        children: (0, a.jsx)(eL, { onOrbit: !0, children: (0, a.jsx)(i, { size: L, onClick: () => {}, showText: !1, motionStyle: { filter: (0, ei.H)(s, (e) => "brightness(".concat(e, ")")), scale: r } }) }),
                                    },
                                    "planet-".concat(t)
                                )
                            );
                        }),
                        U = 0.69 * d * 8.5 + i + 200 + d,
                        D = ef([
                            [U - d - 200, 345],
                            [U - d - 199, 0],
                        ]),
                        k = 0.69 * d * 8.5,
                        W = 1 * d,
                        z = 0.69 * d * 8.5 + i + 100,
                        F = -i - 100,
                        Z = k + ((z - k) / (W - F)) * (d + 1338 - 100),
                        P = (e) => {
                            let n = 0,
                                i = 0;
                            0 === e ? (n = Z) : ((n = Z - 80 - 100), (i = (t.slice(0, e).reduce((e, t) => e + t + 96, 0) + 0.169 * d) * ((z - k) / (W - F)))), window.scrollTo(0, n + i);
                        };
                    return (0, a.jsxs)(u.Z, {
                        display: "flex",
                        height: U,
                        width: 100 * o,
                        children: [
                            (0, a.jsx)(u.Z, {
                                position: "fixed",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%",
                                pointerEvents: "none",
                                userSelect: "none",
                                zIndex: "9999999",
                                children: (0, a.jsx)(tv, {
                                    visibility: ef([
                                        [k + 1498 - 1, 0],
                                        [k + 1498, 1],
                                        [U - d - 201, 1],
                                        [U - d - 200, 0],
                                    ]),
                                }),
                            }),
                            (0, a.jsx)(e3, {
                                goHowTo: () => {
                                    P(1);
                                },
                            }),
                            (0, a.jsx)(u.Z, {
                                position: "fixed",
                                top: "0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 100 * r,
                                width: 100 * o,
                                children: (0, a.jsx)(u.Z, {
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transform: "translate3d(0px, 0px, 0px)",
                                    className: ek().threeD,
                                    ...(0, A.p)({ duration: 1 }),
                                    children: (0, a.jsxs)(u.Z, {
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                        children: [
                                            (0, a.jsx)(nn, { id: "", position: 0 }),
                                            (0, a.jsx)(nn, { id: "tokenomics", position: k + ((z - k) / (W - F)) * d }),
                                            (0, a.jsx)(nn, { id: "timeline", position: Z }),
                                            (0, a.jsx)(u.Z, {
                                                className: "chevronz",
                                                position: "absolute",
                                                display: "none",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "100%",
                                                height: "100%",
                                                zIndex: 99999,
                                                pointerEvents: "none",
                                                style: { opacity: b },
                                                children: (0, a.jsx)(m.xu, { width: "42px", height: "42px", position: "absolute", bottom: "24px", children: (0, a.jsx)(t4, {}) }),
                                            }),
                                            (0, a.jsxs)(ni, {
                                                children: [
                                                    (0, a.jsx)(u.Z, { position: "absolute", width: "100%", height: "100%", style: { background: g }, zIndex: 1 }),
                                                    (0, a.jsx)(eO, {
                                                        zoomLevel: ef([
                                                            [d, 0.369],
                                                            [2.07 * d, 1],
                                                            [0.69 * d * 6.5, 1.4],
                                                        ]),
                                                        style: { zIndex: 2 },
                                                        ref: e,
                                                        children: (0, a.jsxs)(eC, {
                                                            offsetX: ef([
                                                                [0.69 * d, -0.1269],
                                                                [2.07 * d, 0],
                                                            ]),
                                                            offsetY: ef([
                                                                [d, -0.3869],
                                                                [2.07 * d, -0.0869],
                                                                [0.69 * d * 6.5, -0.1669],
                                                            ]),
                                                            cameraAngle: ef([
                                                                [2.07 * d, 16.9],
                                                                [0.69 * d * 6.5, 13],
                                                            ]),
                                                            tiltAngle: ef([
                                                                [2.07 * d, 12.69],
                                                                [0.69 * d * 6.5, -5],
                                                            ]),
                                                            mouseOffsetLevel: E,
                                                            children: [
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 0,
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, { offsetY: 0.3969, children: (0, a.jsx)(eW, { size: O, opacity: f, children: (0, a.jsx)(ez, { size: (0, en.c)(1), opacity: w }) }) }),
                                                                    },
                                                                    0
                                                                ),
                                                                (0, a.jsx)(eH, { size: 1.369, rotation: (0, en.c)(155), opacity: f }, 3),
                                                                (0, a.jsx)(eH, { size: 0.85, opacity: f }, 1),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.369,
                                                                        rotation: ef([
                                                                            [0.69 * d, 30],
                                                                            [2.07 * d, 110],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eZ, {
                                                                                size: (0, en.c)(0.3),
                                                                                onClick: () => {
                                                                                    P(1);
                                                                                },
                                                                                opacity: E,
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "firesales-planet"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.369,
                                                                        rotation: ef([
                                                                            [0.69 * d, 170],
                                                                            [2.07 * d, 230],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(tt, {
                                                                                size: (0, en.c)(0.3),
                                                                                opacity: E,
                                                                                onClick: () => {
                                                                                    P(0);
                                                                                },
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "waitlist-planet2"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.369,
                                                                        rotation: ef([
                                                                            [0.69 * d, 80],
                                                                            [2.07 * d, 150],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(e7, {
                                                                                size: (0, en.c)(0.5),
                                                                                opacity: E,
                                                                                onClick: () => {
                                                                                    P(0);
                                                                                },
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "stonk-planet"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.369,
                                                                        rotation: ef([
                                                                            [0.69 * d, -60],
                                                                            [2.07 * d, 60],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eM, {
                                                                                size: (0, en.c)(0.3),
                                                                                opacity: E,
                                                                                onClick: () => {
                                                                                    P(2);
                                                                                },
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "holders-airdrop-planet"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.369,
                                                                        rotation: ef([
                                                                            [0.69 * d, 200],
                                                                            [2.07 * d, 320],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eB, {
                                                                                size: (0, en.c)(0.3),
                                                                                opacity: E,
                                                                                onClick: () => {
                                                                                    P(3);
                                                                                },
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "public-launch-planet"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.969,
                                                                        rotation: ef([
                                                                            [0.69 * d, 178],
                                                                            [2.07 * d, 278],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eV, {
                                                                                size: (0, en.c)(0.5),
                                                                                opacity: E,
                                                                                children: (0, a.jsx)(u.Z, {
                                                                                    animate: { x: [27.599999999999998, -138], y: [-13.799999999999999, 27.599999999999998], rotate: [20, -10] },
                                                                                    pointerEvents: "none",
                                                                                    userSelect: "none",
                                                                                    transition: { repeat: 1 / 0, repeatType: "reverse", duration: 20 },
                                                                                    children: (0, a.jsx)(j(), {
                                                                                        className: ek().noAntialias,
                                                                                        style: { pointerEvents: "none" },
                                                                                        width: 0.69 * d * 0.24,
                                                                                        height: 0.69 * d * 0.24,
                                                                                        src: ed.src,
                                                                                        alt: "",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "floating-ufo"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.869,
                                                                        rotation: ef([
                                                                            [0.69 * d, 240],
                                                                            [2.07 * d, 282],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eV, {
                                                                                size: (0, en.c)(0.5),
                                                                                opacity: E,
                                                                                children: (0, a.jsx)(u.Z, {
                                                                                    animate: { x: [41.4, -55.199999999999996, 55.199999999999996, -41.4], y: [-41.4, 55.199999999999996, -41.4, 55.199999999999996], rotate: [5, 0, 0, 0] },
                                                                                    pointerEvents: "none",
                                                                                    userSelect: "none",
                                                                                    transition: { repeat: 1 / 0, repeatType: "reverse", duration: 20 },
                                                                                    children: (0, a.jsx)(j(), { className: ek().noAntialias, style: { pointerEvents: "none" }, width: 0.0966 * d, height: 0.0966 * d, src: ec.src, alt: "" }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "floating-potatoz"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.069,
                                                                        rotation: ef([
                                                                            [0.69 * d, 260],
                                                                            [2.07 * d, 300],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eV, {
                                                                                size: (0, en.c)(0.5),
                                                                                opacity: E,
                                                                                children: (0, a.jsx)(u.Z, {
                                                                                    animate: { rotate: [0, 360] },
                                                                                    pointerEvents: "none",
                                                                                    userSelect: "none",
                                                                                    transition: { duration: 60, repeat: 1 / 0 },
                                                                                    children: (0, a.jsx)(j(), { className: ek().noAntialias, style: { pointerEvents: "none" }, width: 0.0966 * d, height: 0.0966 * d, src: er.src, alt: "" }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "floating-junk-1"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 1.169,
                                                                        rotation: ef([
                                                                            [0.69 * d, -25],
                                                                            [2.07 * d, 75],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eV, {
                                                                                size: (0, en.c)(0.5),
                                                                                opacity: E,
                                                                                children: (0, a.jsx)(u.Z, {
                                                                                    animate: { rotate: [0, -360] },
                                                                                    pointerEvents: "none",
                                                                                    userSelect: "none",
                                                                                    transition: { duration: 60, repeat: 1 / 0 },
                                                                                    children: (0, a.jsx)(j(), {
                                                                                        className: ek().noAntialias,
                                                                                        style: { pointerEvents: "none" },
                                                                                        width: 0.69 * d * 0.2,
                                                                                        height: 0.69 * d * 0.2,
                                                                                        src: eo.src,
                                                                                        alt: "",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "floating-junk-2"
                                                                ),
                                                                (0, a.jsx)(
                                                                    eH,
                                                                    {
                                                                        size: 0.669,
                                                                        rotation: ef([
                                                                            [0.69 * d, 40],
                                                                            [2.07 * d, 140],
                                                                        ]),
                                                                        showTrajectory: !1,
                                                                        children: (0, a.jsx)(eL, {
                                                                            onOrbit: !0,
                                                                            children: (0, a.jsx)(eV, {
                                                                                size: (0, en.c)(0.5),
                                                                                opacity: E,
                                                                                children: (0, a.jsx)(u.Z, {
                                                                                    animate: { rotate: [0, 360] },
                                                                                    pointerEvents: "none",
                                                                                    userSelect: "none",
                                                                                    transition: { duration: 50, repeat: 1 / 0 },
                                                                                    children: (0, a.jsx)(j(), {
                                                                                        className: ek().noAntialias,
                                                                                        style: { pointerEvents: "none" },
                                                                                        width: 0.69 * d * 0.2,
                                                                                        height: 0.69 * d * 0.2,
                                                                                        src: ea.src,
                                                                                        alt: "",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    },
                                                                    "floating-junk-3"
                                                                ),
                                                                (0, a.jsx)(eH, { size: 1.969, opacity: f }, 4),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(ni, {
                                                position: 200 * r,
                                                children: (0, a.jsx)(u.Z, {
                                                    position: "absolute",
                                                    width: "100%",
                                                    height: "100%",
                                                    zIndex: 1,
                                                    style: { opacity: h },
                                                    children: (0, a.jsx)(eY.w, { shootingOpacity1: T, shootingOpacity2: S, shootingOpacity3: I, shootingMotion: y }),
                                                }),
                                            }),
                                            (0, a.jsxs)(ni, {
                                                position: 500 * r,
                                                children: [
                                                    (0, a.jsx)(u.Z, { position: "absolute", width: "100%", height: "100%", userSelect: "none", pointerEvents: "none", zIndex: 69, children: (0, a.jsx)(tn.Y, { active: C }) }),
                                                    (0, a.jsx)(nl, { visibility: N, onHeightChange: s, onSectionHeightChange: n, onCurrentSectionChange: (e) => l.set(e) }),
                                                    (0, a.jsx)(u.Z, {
                                                        className: "footerz",
                                                        position: "absolute",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        width: "100%",
                                                        zIndex: 4,
                                                        bottom: "0",
                                                        background: "gray.800",
                                                        style: { visibility: (0, ei.H)(D, (e) => (345 === e ? "hidden" : "visible")), y: D },
                                                        children: (0, a.jsx)(eA.$, { showBurns: (0, ei.H)(D, (e) => 1 - e / 345), type: "simple" }),
                                                    }),
                                                    (0, a.jsx)(eO, {
                                                        style: { zIndex: 2, pointerEvents: "none" },
                                                        zoomLevel: ef([
                                                            [0.69 * d * 8.5 + 892 - 96, 3],
                                                            [0.69 * d * 9 + 892 - 96, 1],
                                                            [0.69 * d * 8.5 + i - 170, 1],
                                                            [0.69 * d * 8.5 + i - 169, 0.1],
                                                        ]),
                                                        opacity: R,
                                                        ref: e,
                                                        children: (0, a.jsxs)(eC, {
                                                            offsetX: ef([
                                                                [0.69 * d * 8.5 + 892 - 96, 0.75],
                                                                [0.69 * d * 9 + 892 - 96, 0.7269],
                                                                [0.69 * d * 8.5 + i - 170, 0.7269],
                                                                [0.69 * d * 8.5 + i - 169, 0.3269],
                                                            ]),
                                                            offsetY: ef([
                                                                [0.69 * d * 8.5 + 892 - 96, 0.40669],
                                                                [0.69 * d * 9 + 892 - 96, 0.1069],
                                                                [0.69 * d * 8.5 + i - 170, 0.1069],
                                                                [0.69 * d * 8.5 + i - 169, 0],
                                                            ]),
                                                            cameraAngle: (0, en.c)(20),
                                                            tiltAngle: (0, en.c)(-13),
                                                            mouseOffsetLevel: R,
                                                            children: [(0, a.jsx)(eH, { size: 0.7, style: { zIndex: 9 } }, 1), (0, a.jsx)(eH, { size: 1.369 * 0.7 }, 3), (0, a.jsx)(eH, { size: 1.3783 }, 4), M],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    });
                }),
                nl = c.memo((e) => {
                    let [t, n] = (0, c.useState)(!1);
                    return (
                        (0, et.W)(e.visibility, "change", (e) => {
                            n(e > 0.01);
                        }),
                        t ? (0, a.jsx)(nr, { ...e }) : (0, a.jsx)(a.Fragment, {})
                    );
                }),
                nr = (e) => {
                    let { visibility: t, onHeightChange: n, onSectionHeightChange: i, onCurrentSectionChange: s } = e,
                        l = (0, p.q0)((e) => e.vh),
                        r = 100 * l,
                        [o, d] = (0, c.useState)(5923),
                        [h, x] = (0, c.useState)(() => [645, 1817, 1257, 462]),
                        A = (0, eu.z)((e) => {
                            (null == e ? void 0 : e.height) && (d(e.height), null == n || n(e.height));
                        }, t);
                    (0, c.useEffect)(() => {
                        null == i || i(h);
                    }, [h, i]);
                    let g = 1 * r,
                        E = -o - 100,
                        f = ef([
                            [0.69 * r * 8.5, g],
                            [0.69 * r * 8.5 + o + 100, E],
                        ]),
                        j = 1598 + (r - 800 + 260),
                        I = (0, c.useMemo)(() => {
                            let e = [j];
                            for (let t = 0; t < h.length; t++) e.push(e[t] + h[t]);
                            return e.push(99999999), e;
                        }, [h]);
                    return (
                        (0, et.W)(f, "change", (e) => {
                            let t = r - e,
                                n = 0;
                            for (; n < I.length && !(t <= I[n]); n++);
                            let i = n - 1;
                            null == s || s(i);
                            let l = "";
                            e >= g - 100 ? (l = "") : e <= E + 100 ? (l = "") : i < 0 ? (l = "tokenomics") : i >= 0 && (l = "timeline"), el.q.setState({ currentHash: l });
                        }),
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(u.Z, {
                                    className: "headerz",
                                    position: "absolute",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "100%",
                                    zIndex: 3,
                                    top: "".concat(100, "px"),
                                    children: (0, a.jsx)(u.Z, {
                                        maxWidth: "1280px",
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "calc(100% - 160px)",
                                        style: {
                                            y: ef([
                                                [0.69 * r * 8.4 + 1338 + 260, 1 * r],
                                                [6.1065 * r + 1338 + 260, 0.1 * r],
                                                [6.417 * r + 1338 + 260 - 50, 0],
                                                [0.69 * r * 8.5 + o - 170, 0],
                                                [0.69 * r * 8.5 + o, -300],
                                            ]),
                                            opacity: ef([
                                                [0.69 * r * 8.4 + 1338 + 260, 0],
                                                [6.1065 * r + 1338 + 260, 1],
                                                [0.69 * r * 8.5 + o - 170, 1],
                                                [0.69 * r * 8.5 + o, 0],
                                            ]),
                                        },
                                        children: (0, a.jsx)(b.k, {
                                            paddingLeft: "24px",
                                            flexDirection: "column",
                                            gap: "48px",
                                            width: "calc(50% - 48px)",
                                            children: (0, a.jsxs)(u.Z, {
                                                display: "flex",
                                                flexDirection: "column",
                                                children: [
                                                    (0, a.jsxs)(T.X, { size: "2xl", fontWeight: "700", textAlign: { base: "center", lg: "right" }, children: ["IT’S ALWAYS", (0, a.jsx)("br", {}), "MEME SEASON"] }),
                                                    (0, a.jsx)(S.x, { textStyle: "lg", marginTop: "16px", textAlign: { base: "center", lg: "right" }, children: "WHO CONTROLS THE MEME, CONTROLS THE UNIVERSE" }),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                                (0, a.jsxs)(u.Z, {
                                    ref: A,
                                    position: "absolute",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "".concat(260, "px"),
                                    width: "100%",
                                    zIndex: 3,
                                    className: "contentz ".concat(ek().hideIframe),
                                    style: {
                                        y: f,
                                        opacity: ef([
                                            [0.69 * r * 8.5 + o - 170, 1],
                                            [0.69 * r * 8.5 + o, 0],
                                        ]),
                                    },
                                    children: [
                                        (0, a.jsx)(u.Z, { maxWidth: "1280px", display: "flex", flexDirection: "column", width: "100%", children: (0, a.jsx)(tH, {}) }),
                                        (0, a.jsx)(u.Z, {
                                            display: "flex",
                                            width: "100%",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            children: (0, a.jsxs)(u.Z, {
                                                maxWidth: "1280px",
                                                display: "flex",
                                                width: "100%",
                                                children: [
                                                    (0, a.jsx)(m.xu, { width: "50%" }),
                                                    (0, a.jsx)(u.Z, {
                                                        left: "50%",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "".concat(48, "px"),
                                                        width: "40%",
                                                        style: {
                                                            WebkitMaskImage: (0, ei.H)(f, (e) =>
                                                                "linear-gradient(180deg, transparent ".concat(Math.max(0, -(e - r) - j - 530), "px, black ").concat(Math.max(0, -(e - r) - j - 530 + 32), "px)")
                                                            ),
                                                        },
                                                        children: t7.map((e, t) => {
                                                            let n = (0, eu.z)((e) => {
                                                                (null == e ? void 0 : e.height) && x((n) => (((n = [...n])[t] = e.height), n));
                                                            });
                                                            return (0, a.jsxs)(
                                                                b.k,
                                                                {
                                                                    ref: n,
                                                                    flexDirection: "column",
                                                                    gap: "48px",
                                                                    children: [(0, a.jsx)(e, { defaulOpened: !0, noToggle: !0, showHeader: !0 }), (0 === t || 1 === t || 2 === t) && (0, a.jsx)(ex, {})],
                                                                },
                                                                t
                                                            );
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                };
            var no = n(34638),
                na = n(76111),
                nc = n(53539);
            let nd = () => {
                    (0, p.q0)((e) => e.vh);
                    let e = (0, p.q0)((e) => e.vw);
                    return (0, a.jsx)(u.Z, { width: 100 * e, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", children: (0, a.jsx)(u.Z, { width: "100%", children: (0, a.jsx)(tH, {}) }) });
                },
                nh = () => {
                    (0, p.q0)((e) => e.vh);
                    let e = (0, p.q0)((e) => e.vw);
                    return (0, a.jsx)(u.Z, { width: 100 * e, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", children: (0, a.jsx)(u.Z, { width: "100%", children: (0, a.jsx)(t2, {}) }) });
                };
            var nx = n(73235),
                nA = n(28165),
                nu = n(65239),
                np = n(55287),
                ng = n(35007),
                nE = n(11525),
                nf = n(72474),
                nj = n(52354),
                nm = n.n(nj);
            function nb() {
                let e = (0, nx._)(["\n  from {\n    transform: translate(0px, 0px);\n  }\n  to {\n    transform: translate(", "px, -", "px);\n  }"]);
                return (
                    (nb = function () {
                        return e;
                    }),
                    e
                );
            }
            let nT = (e) => Math.floor(Math.random() * e),
                nS = (e, t, n) => {
                    let i = "";
                    for (let s = 0; s < e; s++) i += "\n".concat(nT(1.3 * t), "px\n").concat(nT(1.3 * n), "px #FFF5, ");
                    return i.slice(0, -2);
                },
                nI = () => {
                    let [e, t] = (0, c.useState)(Date.now());
                    return (
                        (0, c.useEffect)(() => {
                            let e = 0,
                                n = setTimeout(() => {
                                    e = setInterval(() => t(Date.now()), 1e3);
                                }, 1e3 * Math.random());
                            return () => {
                                n && clearInterval(n), e && clearInterval(e);
                            };
                        }, []),
                        (0, a.jsxs)(b.k, {
                            position: "relative",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50px",
                            height: "50px",
                            top: "50%",
                            left: "50%",
                            style: { pointerEvents: "none", userSelect: "none" },
                            children: [
                                (0, a.jsx)(j(), { className: nm().noAntialias, style: { display: e % 2 == 0 ? "none" : "block" }, src: ng.Z.src, width: 11, height: 11, alt: "" }),
                                (0, a.jsx)(j(), { className: nm().noAntialias, style: { display: e % 2 == 0 ? "block" : "none" }, src: nE.Z.src, width: 7, height: 7, alt: "" }),
                            ],
                        })
                    );
                },
                ny = (e) => {
                    let { shootingOpacity1: t, shootingOpacity2: n, shootingMotion: i } = e,
                        s = (function (e) {
                            let [t] = (0, tM.a)("(prefers-reduced-motion: reduce)", void 0);
                            return t;
                        })(),
                        l = null != t ? t : (0, en.c)(1);
                    null != n || (0, en.c)(1);
                    let r = null != i ? i : (0, en.c)(0),
                        o = (0, p.q0)((e) => e.vh),
                        d = (0, p.q0)((e) => e.vw),
                        h = 100 * o,
                        x = 140 * d,
                        [g, E] = (0, c.useState)(() => nS(400, x, h)),
                        [f, b] = (0, c.useState)(() => nS(200, x, h)),
                        [T, S] = (0, c.useState)(() => nS(50, x, h));
                    (0, c.useEffect)(() => {
                        E(nS(400, x, h)), b(nS(200, x, h)), S(nS(50, x, h));
                    }, [o, d]);
                    let I = (0, nA.F4)(nb(), x / 2, h / 2),
                        y = "-40%",
                        O = (0, nA.iv)({
                            position: "absolute",
                            left: y,
                            top: "0%",
                            width: "1px",
                            height: "1px",
                            background: "transparent",
                            userSelect: "none",
                            pointerEvents: "none",
                            animation: s ? void 0 : "".concat(I, " 50s linear infinite"),
                            boxShadow: g,
                            "&::after": { content: '""', position: "relative", top: "".concat(h, "px"), left: "-".concat(x, "px"), width: "1px", height: "1px", background: "transparent", boxShadow: g },
                        }),
                        w = (0, nA.iv)({
                            position: "absolute",
                            left: y,
                            top: "0%",
                            width: "2px",
                            height: "2px",
                            background: "transparent",
                            userSelect: "none",
                            pointerEvents: "none",
                            animation: s ? void 0 : "".concat(I, " 100s linear infinite"),
                            boxShadow: f,
                            "&::after": { content: '""', position: "relative", top: "".concat(h, "px"), left: "-".concat(x, "px"), width: "2px", height: "2px", background: "transparent", boxShadow: f },
                        }),
                        C = (0, nA.iv)({
                            position: "absolute",
                            left: y,
                            top: "0%",
                            background: "transparent",
                            userSelect: "none",
                            pointerEvents: "none",
                            animation: s ? void 0 : "".concat(I, " 150s linear infinite"),
                            boxShadow: T,
                            "&::after": { content: '""', position: "relative", top: "".concat(h, "px"), left: "-".concat(x, "px"), width: "3px", height: "3px", background: "transparent", boxShadow: T },
                            width: "3px",
                            height: "3px",
                        }),
                        [R, H] = (0, c.useState)(0);
                    return (
                        (0, nf.Y)(() => {
                            H((e) => e + 1), E(nS(400, x, h)), b(nS(200, x, h)), S(nS(50, x, h));
                        }, 3e4),
                        (0, a.jsxs)(u.Z, {
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            zIndex: 0,
                            children: [
                                (0, a.jsx)(nu.M, { children: (0, a.jsx)(u.Z, { css: O, ...(0, A.p)({ duration: 5 }) }, R) }),
                                (0, a.jsx)(nu.M, { children: (0, a.jsx)(u.Z, { css: w, ...(0, A.p)({ duration: 5 }) }, R) }),
                                (0, a.jsx)(nu.M, { children: (0, a.jsx)(u.Z, { css: C, ...(0, A.p)({ duration: 5 }) }, R) }),
                                (0, a.jsx)(u.Z, {
                                    position: "absolute",
                                    style: { opacity: l, x: (0, ei.H)(r, (e) => 16 * o - e * o * 1.5), y: (0, ei.H)(r, (e) => -30 * o + e * o * 1.5) },
                                    width: "96px",
                                    height: "24px",
                                    zIndex: 1,
                                    children: (0, a.jsx)(m.xu, { width: "100%", height: "100%", transform: "rotate(340deg)", children: (0, a.jsx)(j(), { src: np.Z.src, fill: !0, alt: "Shooting Meme" }) }),
                                }),
                                (0, a.jsx)(u.Z, {
                                    position: "absolute",
                                    style: { opacity: l, x: (0, ei.H)(r, (e) => -15 * o - e * o * 1.5), y: (0, ei.H)(r, (e) => -11 * o + e * o * 1.5) },
                                    width: "96px",
                                    height: "24px",
                                    zIndex: 1,
                                    children: (0, a.jsx)(m.xu, { width: "100%", height: "100%", transform: "rotate(340deg)", children: (0, a.jsx)(j(), { src: np.Z.src, fill: !0, alt: "Shooting Meme" }) }),
                                }),
                                (0, a.jsx)(u.Z, { position: "absolute", style: { opacity: l, scale: 2, x: 9 * o, y: -11 * o }, children: (0, a.jsx)(nI, {}) }, "star 1"),
                                (0, a.jsx)(u.Z, { position: "absolute", style: { opacity: l, scale: 2, x: -17 * o, y: -33 * o }, children: (0, a.jsx)(nI, {}) }, "star 2"),
                                (0, a.jsx)(u.Z, { position: "absolute", style: { opacity: l, scale: 2, x: -18 * o, y: -3 * o }, children: (0, a.jsx)(nI, {}) }, "star 3"),
                            ],
                        })
                    );
                },
                nO = [
                    {
                        id: "waitlist",
                        order: 0,
                        rotateDeg: 0,
                        children: (0, a.jsxs)(a.Fragment, { children: ["WAITLIST:", (0, a.jsx)("br", {}), (0, a.jsx)("span", { style: { whiteSpace: "nowrap" }, children: "JUN 9, 2023" })] }),
                        imgSrc: te.src,
                        imgAlt: "Waitlist",
                        isHide: !1,
                        scale: 0.9,
                    },
                    {
                        id: "firesale",
                        order: 1,
                        rotateDeg: 0,
                        children: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("span", { style: { whiteSpace: "nowrap" }, children: "FIRE SALE" }), ":", (0, a.jsx)("br", {}), "OCT 26, 2023"] }),
                        imgSrc: eF.Z.src,
                        imgAlt: "Fire Sale",
                        isHide: !1,
                        scale: 1.1,
                        recenterX: 0.1,
                        recenterY: -0.1,
                    },
                    {
                        id: "airdrops",
                        order: 2,
                        rotateDeg: 0,
                        children: (0, a.jsxs)(a.Fragment, { children: ["AIRDROPS: ", (0, a.jsx)("br", {}), "NOV 3, 2023 3:30PM (UCT+8)"] }),
                        imgSrc: eT.Z.src,
                        imgAlt: "Holder Airdrop",
                        isHide: !1,
                        recenterY: -0.1,
                    },
                    {
                        id: "public-launch",
                        order: 3,
                        rotateDeg: 0,
                        children: (0, a.jsxs)(a.Fragment, { children: ["TOKEN(S) LAUNCH:", (0, a.jsx)("br", {}), "NOV 3, 2023 3:30PM (UCT+8)"] }),
                        imgSrc: eP.src,
                        imgAlt: "Public Launch",
                        isHide: !1,
                        recenterY: -0.05,
                    },
                ],
                nw = (e) => {
                    let { style: t, animation: n } = e,
                        i = (0, p.q0)((e) => e.vh),
                        s = (0, p.q0)((e) => e.vw),
                        l = 100 * i,
                        r = (0, eI.T)(1),
                        o = ef([
                            [0 * i, 1],
                            [document.body.scrollHeight - l - 288, 0.2],
                        ]),
                        { setColorMode: d } = (0, no.If)();
                    (0, eE.q)(() => {
                        d("light");
                    });
                    let { scrollY: x } = ee();
                    (0, et.W)(x, "change", () => {
                        let e = !1;
                        ["tokenomics", "timeline"].forEach((t) => {
                            let n = document.getElementById(t);
                            if (n) {
                                let i = n.getBoundingClientRect();
                                i.top <= 200 && ((e = !0), el.q.setState({ currentHash: t }));
                            }
                        }),
                            e || el.q.setState({ currentHash: "" }),
                            d(x.get() < 100 * i ? "light" : "dark");
                    });
                    let A = 30 * r,
                        g = 2.8 * A,
                        E = 4 * r,
                        f = l / 2 - (l / 2 - Math.max(72 + Math.min(0.2 * l, 0.375 * (100 * s)) + 30, l / 3)) / 2 + E,
                        b = (0, c.useCallback)((e) => Math.acos((((100 * s) / 2) * e) / f) * (180 / Math.PI), []),
                        I = [2 * (Math.min(b(-0.75), 120) - 90) + 90, Math.min(b(-0.65), 120), 90, Math.max(b(0.65), 60), 90 - 2 * (90 - Math.max(b(0.75), 60))],
                        y = (0, c.useMemo)(() => nO.concat(nO.map((e) => ({ ...e, order: e.order + nO.length }))).map((e) => ({ ...e, planetRadius: E })), []),
                        [O, w] = (0, c.useState)(1),
                        [C, R] = (0, c.useState)(y),
                        H = (0, c.useCallback)((e) => {
                            let t = [-2, -1, 0, 1, 2].map((t) => (e + t >= 0 ? (e + t) % y.length : e + t + y.length)),
                                n = t.map((e, t) => {
                                    let n = y[e];
                                    return { ...n, rotateDeg: I[t], isHide: !1 };
                                }),
                                i = y.filter((e, n) => !t.includes(n)).map((e) => ({ ...e, rotateDeg: 0, isHide: !0 })),
                                s = n.concat(i).sort((e, t) => e.order - t.order);
                            R(s);
                        }, []),
                        L = (0, c.useRef)(null),
                        v = (0, c.useCallback)(() => {
                            let e = () => {
                                w((e) => {
                                    let t = (e + 1) % y.length;
                                    return H(t), t;
                                });
                            };
                            e(), (L.current = setInterval(() => e(), 2e3));
                        }, []);
                    (0, eE.q)(() => {
                        v();
                    });
                    let N = (0, el.q)((e) => e.time),
                        { publicLaunchAt: M } = h.LH;
                    return (0, a.jsxs)(u.Z, {
                        width: 100 * s,
                        display: "flex",
                        flexDirection: "column",
                        background: "#18202E",
                        style: { touchAction: "pan-x pan-y" },
                        children: [
                            (0, a.jsxs)(u.Z, {
                                position: "fixed",
                                top: "0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 100 * i,
                                width: 100 * s,
                                ...t,
                                ...n,
                                children: [(0, a.jsx)(nC, { id: "", position: 0 }), (0, a.jsx)(nC, { id: "tokenomics" }), (0, a.jsx)(nC, { id: "timeline" })],
                            }),
                            (0, a.jsxs)(u.Z, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 100 * i,
                                width: 100 * s,
                                zIndex: 1,
                                children: [
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        top: "0",
                                        height: 1.7 * r,
                                        width: 33 * r,
                                        style: { x: 0, y: 10 * r },
                                        children: (0, a.jsx)(e9.Z, { height: "100%", width: "100%" }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: 20,
                                        style: { x: 0, y: 53 * i - 27 * r, scale: Math.min(0.22 * s, 0.14 * i) },
                                        children: (0, a.jsx)(e8.$, {
                                            scale: 1,
                                            textAlign: "left",
                                            children:
                                                N < M
                                                    ? (0, a.jsxs)(m.xu, { textAlign: "center", children: ["CLAIM COMING SOON, BE ON", " ", (0, a.jsx)(eJ.m.a, { as: eX(), href: "/claim", color: "yellow.500", children: "STANDBY" }), "!"] })
                                                    : (0, a.jsxs)(m.xu, { textAlign: "center", children: ["Join the", " ", (0, a.jsx)(eJ.m.a, { as: eX(), href: "tglink", color: "blue.500", children: " STONKE Community" })] }),
                                        }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        top: "0",
                                        height: 9 * r,
                                        width: 38 * r,
                                        style: { x: 0, y: 13 * r },
                                        children: (0, a.jsx)(j(), { className: ek().noAntialias, src: e0.Z, fill: !0, alt: "Memecoin", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        top: "0",
                                        height: 2.5 * r,
                                        width: 37 * r,
                                        style: { x: 0, y: 23 * r },
                                        children: (0, a.jsx)(e6.Z, { height: "100%", width: "100%" }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: 1,
                                        height: 55 * r,
                                        width: 100 * r,
                                        style: { x: -4, y: 50 * i + 50 },
                                        children: (0, a.jsx)(j(), { src: e2.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: 1,
                                        height: 55 * r,
                                        width: 100 * r,
                                        style: { x: -4, y: 50 * i + 50 },
                                        children: (0, a.jsx)(j(), { src: e1.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: 1,
                                        height: 55 * r,
                                        width: 100 * r,
                                        style: { x: -4, y: 50 * i + 50 },
                                        children: (0, a.jsx)(j(), { src: e5.src, fill: !0, alt: "stonk", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        height: 100 * i,
                                        width: 100 * s,
                                        style: {
                                            y: 15 * i,
                                            WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                            maskImage: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                        },
                                        children: (0, a.jsx)(j(), {
                                            src: eq.Z,
                                            alt: "sky-mask",
                                            fill: !0,
                                            style: {
                                                objectFit: "cover",
                                                opacity: 0.45,
                                                WebkitMaskImage: "radial-gradient(circle at 50% 80%, black 10%, transparent 55%)",
                                                maskImage: "radial-gradient(circle at 50% 80%, black 10%, transparent 55%)",
                                                pointerEvents: "none",
                                                userSelect: "none",
                                            },
                                        }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: 2,
                                        style: { width: 20 * r, height: 20 * r, x: -16 * r, y: 2 * i },
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        children: (0, a.jsx)(j(), { src: e$, fill: !0, alt: "Cloud", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: 2,
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        style: { width: 13 * r, height: 9.1 * r, x: 4 * r, y: -11 * i },
                                        children: (0, a.jsx)(j(), { src: eQ, fill: !0, alt: "Cloud", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        zIndex: 2,
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        style: { width: 16.8 * r, height: 12 * r, x: 16 * r, y: -12.5 * i },
                                        children: (0, a.jsx)(j(), { src: e_, fill: !0, alt: "Cloud", style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.Z, { position: "absolute", height: 300 * i, width: 100 * s, background: "linear-gradient(180deg, #4EA5D9 0%, #5CC0F6 ".concat(85 * i, "px, #295D88  ").concat(160 * i, "px, #18202E 100%)") }),
                            (0, a.jsxs)(u.Z, {
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 100 * i,
                                width: 100 * s,
                                marginTop: 40 * r,
                                zIndex: 10,
                                children: [
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        zIndex: 10,
                                        style: { height: A, width: A, filter: "drop-shadow(0px 0px 50px rgba(255, 232, 79, 0.4))", pointerEvents: "none", userSelect: "none", y: -(20 * r) },
                                        children: (0, a.jsx)(j(), { src: eU.src, fill: !0, alt: "Memecoin", style: { pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(ny, {}),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        borderRadius: "50%",
                                        border: "4px solid rgba(255, 255, 255, 0.12)",
                                        borderTop: "none",
                                        borderLeft: "none",
                                        borderRight: "none",
                                        style: { height: g, width: g, y: -19 * i },
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        pointerEvents: "none",
                                        style: {
                                            height: 100 * i,
                                            width: 55 * r,
                                            WebkitMaskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                            maskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                        },
                                        children: (0, a.jsx)(u.Z, {
                                            position: "absolute",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            pointerEvents: "none",
                                            style: {
                                                height: 100 * i,
                                                width: 55 * r,
                                                WebkitMaskImage: "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                                maskImage: "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(255,255,255,0) 100%)",
                                            },
                                            children: (0, a.jsx)(u.Z, {
                                                position: "absolute",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                pointerEvents: "none",
                                                style: { height: g, width: g, y: -20 * i },
                                                children: C.map((e) => (0, c.createElement)(nR, { ...e, key: e.order })),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(u.Z, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                zIndex: 5,
                                marginBottom: 10 * r,
                                children: [
                                    (0, a.jsx)(T.X, { size: "2xl", textAlign: "center", textTransform: "uppercase", whiteSpace: "nowrap", marginBottom: "0.9em", children: "" }),
                                    (0, a.jsx)(S.x, {
                                        textStyle: "md",
                                        align: "center",
                                        padding: "0px 24px",
                                        children: "MEMECOIN (MEME) IS LITERALLY A MEME COIN. NO UTILITY. NO ROADMAP. NO PROMISES. NO EXPECTATION OF FINANCIAL RETURN. JUST 100% MEMES. \uD83D\uDE09",
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.Z, { children: (0, a.jsx)(nd, {}) }),
                            (0, a.jsx)(u.Z, { children: (0, a.jsx)(nh, {}) }),
                            (0, a.jsx)(u.Z, {
                                className: "footerz",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                zIndex: 4,
                                bottom: "0px",
                                marginTop: "".concat(250, "px"),
                                style: { visibility: (0, ei.H)(o, (e) => (1 === e ? "hidden" : "visible")), transform: "translateZ(0)" },
                                children: (0, a.jsxs)(u.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "200px",
                                    width: "100%",
                                    children: [
                                        (0, a.jsx)(j(), { src: na.Z.src, alt: "burns", fill: !0, style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                        (0, a.jsx)(u.Z, {
                                            position: "absolute",
                                            height: "200px",
                                            width: "calc(100% - 24px)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            bottom: "100%",
                                            zIndex: -1,
                                            children: (0, a.jsxs)(e8.$, {
                                                fontSize: 23,
                                                scale: 1.2,
                                                paddingX: 4,
                                                children: ["WE DON’T NEED MORE MEME COINS. ", (0, a.jsx)("br", {}), "WE ONLY NEED ONE MEME COIN. ", (0, a.jsx)("br", {}), "IT’S CALLED THE MEME."],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, a.jsx)(u.Z, { children: (0, a.jsx)(eA.$, {}) }),
                        ],
                    });
                },
                nC = (e) => (
                    (0, x.k)((e) => e.useHeaderClick)((t) => {
                        let { href: n } = t,
                            i = (0, em.AE)(n);
                        i === e.id
                            ? setTimeout(() => {
                                  if (void 0 === e.position) {
                                      (0, nc.E)(e.id);
                                      return;
                                  }
                                  document.documentElement.scrollTo(0, e.position - 100);
                              }, 100)
                            : "/" === n &&
                              setTimeout(() => {
                                  document.documentElement.scrollTo(0, 0);
                              }, 100);
                    }),
                    (0, eE.q)(() => {
                        let t = (0, em.AE)();
                        t === e.id
                            ? setTimeout(() => {
                                  if (void 0 === e.position) {
                                      (0, nc.E)(e.id);
                                      return;
                                  }
                                  document.documentElement.scrollTo(0, e.position - 100);
                              }, 100)
                            : "" === t &&
                              setTimeout(() => {
                                  document.documentElement.scrollTo(0, 0);
                              }, 100);
                    }),
                    (0, a.jsx)("div", {})
                ),
                nR = (e) => {
                    let { id: t, rotateDeg: n = 0, isHide: i = !1, planetRadius: s, children: l, imgSrc: r, imgAlt: o, recenterX: d = 0, recenterY: h = 0, scale: x = 1 } = e,
                        A = (0, c.useRef)((0, es.q)(0, eh.Y)),
                        p = 2 * s;
                    return (
                        A.current.set(n),
                        (0, a.jsx)(u.Z, {
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%",
                            pointerEvents: "none",
                            style: { rotate: A.current, visibility: i ? "hidden" : "visible" },
                            children: (0, a.jsxs)(u.Z, {
                                position: "absolute",
                                right: "0",
                                width: "0",
                                height: "0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                pointerEvents: "none",
                                style: { rotate: (0, ei.H)(A.current, (e) => -e) },
                                children: [
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        display: "flex",
                                        pointerEvents: "auto",
                                        height: 2 * p,
                                        width: p,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        onClick: () => {
                                            (0, nc.E)(t);
                                        },
                                        style: { translateY: p * h, translateX: p * d, scale: x },
                                        children: (0, a.jsx)(j(), { className: ek().noAntialias, src: r, fill: !0, alt: o, style: { objectFit: "contain", pointerEvents: "none", userSelect: "none" } }),
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        position: "absolute",
                                        display: "flex",
                                        justifyContent: "center",
                                        height: "0",
                                        width: "0",
                                        style: { y: s + 12 },
                                        children: (0, a.jsx)(u.Z, {
                                            position: "absolute",
                                            display: "flex",
                                            children: (0, a.jsx)(T.X, { textTransform: "uppercase", textAlign: "center", size: "sm", lineHeight: "16px", fontWeight: 700, children: l }),
                                        }),
                                    }),
                                ],
                            }),
                        })
                    );
                },
                nH = c.memo(() => (0, a.jsxs)(E.VC, { children: [(0, a.jsx)(p.di, { above: "lg", children: (0, a.jsx)(g.hH, { children: (0, a.jsx)(ns, {}) }) }), (0, a.jsx)(p.c, { above: "lg", children: (0, a.jsx)(nw, {}) })] }));
            var nL = n(35981);
            let { firesaleViewableAt: nv, firesaleEndAt: nN } = h.LH,
                nM = Date.now(),
                nU = "/" === nL.r && nM >= nv && nM < nN;
            function nD() {
                let [e, t] = (0, c.useState)(nU);
                (0, x.g)(!!e && {});
                let n = (0, d.useRouter)();
                (0, eE.q)(() => {
                    nU && n.push("/firesale"), (nU = !1);
                }),
                    (0, x.g)();
                let [i, s] = (0, c.useState)(!0);
                return (0, a.jsx)(u.Z, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    ...(0, A.p)(),
                    onAnimationComplete: (e) => {
                        "exit" === e &&
                            setTimeout(() => {
                                s(!1), t(!1);
                            }, 300);
                    },
                    children: i && !e && (0, a.jsx)(nH, {}),
                });
            }
            var nk = nD;
        },
        59162: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return l;
                },
            });
            var i = n(2784),
                s = n(62615),
                l = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { initialSize: t = { width: 0, height: 0 } } = e,
                        [n, l] = (0, i.useState)(null),
                        [r, o] = (0, i.useState)(t),
                        a = (0, i.useCallback)(() => {
                            o({ width: (null == n ? void 0 : n.offsetWidth) || 0, height: (null == n ? void 0 : n.offsetHeight) || 0 });
                        }, [null == n ? void 0 : n.offsetHeight, null == n ? void 0 : n.offsetWidth]);
                    return (
                        !(function (e, t, n, l) {
                            let r = (0, i.useRef)(t);
                            (0, s.L)(() => {
                                r.current = t;
                            }, [t]),
                                (0, i.useEffect)(() => {
                                    var t;
                                    let i = null !== (t = null == n ? void 0 : n.current) && void 0 !== t ? t : window;
                                    if (!(i && i.addEventListener)) return;
                                    let s = (e) => r.current(e);
                                    return (
                                        i.addEventListener(e, s, l),
                                        () => {
                                            i.removeEventListener(e, s, l);
                                        }
                                    );
                                }, [e, n, l]);
                        })("resize", a),
                        (0, s.L)(() => {
                            a();
                        }, [null == n ? void 0 : n.offsetHeight, null == n ? void 0 : n.offsetWidth]),
                        [l, r]
                    );
                };
        },
        49365: function (e, t, n) {
            "use strict";
            n.d(t, {
                z: function () {
                    return r;
                },
            });
            var i = n(2784),
                s = n(52749),
                l = n(98667);
            function r(e, t) {
                let [n] = (0, i.useState)(() => ({ elem: null, size: null, onSize: e, sensor: null }));
                return (
                    (0, i.useEffect)(() => {
                        e && !(n.elem || n.onSize) && h(n), (n.onSize = e), l();
                    }),
                    (0, i.useEffect)(
                        () => () => {
                            n.onSize = !1;
                        },
                        []
                    ),
                    t &&
                        (0, s.W)(t, "change", (e) => {
                            l(e > 0.5);
                        }),
                    (0, i.useCallback)((e) => {
                        (n.elem = e), l();
                    }, [])
                );
                function l() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        { elem: t, onSize: i } = n,
                        { sensor: s } = n;
                    !s != !(t && i && e) &&
                        (s
                            ? (o.delete(n) && c(), h(n), s.remove(), (s = null))
                            : ((s = document.createElement("iframe")).setAttribute("aria-hidden", "true"),
                              (s.tabIndex = -1),
                              (s.style.cssText = "position:absolute;display:none,top:0;left:0;height:100%;width:100%;pointer-events:none;z-index:-1"),
                              a++,
                              o.add(n),
                              (s.onload = c)),
                        (n.sensor = s),
                        s && t.appendChild(s));
                }
            }
            let o = new Set(),
                a = 0;
            function c() {
                0 == --a &&
                    (o.forEach((e) => {
                        var t;
                        h(e), (null === (t = e.sensor) || void 0 === t ? void 0 : t.contentWindow) && (e.sensor.contentWindow.onresize = () => h(e));
                    }),
                    o.clear());
            }
            let d = [];
            function h(e) {
                let t = d.length;
                for (; t > 0; t--) {
                    let n = d[t - 1];
                    if (n === e) return;
                    if (n.elem && n.elem.contains(e.elem)) break;
                }
                d.splice(t, 0, e), l.W.onFrame(x);
            }
            function x() {
                let e = d;
                (d = []),
                    e.forEach((e) => {
                        let { elem: t, size: n, onSize: i } = e;
                        i && i((e.size = t ? { width: t.clientWidth, height: t.clientHeight } : null), n, t);
                    });
            }
        },
        1199: function (e, t, n) {
            "use strict";
            n.d(t, {
                QN: function () {
                    return l;
                },
                LH: function () {
                    return o;
                },
                ei: function () {
                    return r;
                },
            });
            var i = n(12902),
                s = n(20497);
            n(65382), n(35981);
            let l = 3e5,
                r = 759e7;
            (0, s.R)("___firesale");
            let o = { firesaleViewableAt: i.Z.FST1, firesaleStartAt: i.Z.FST2, firesaleEndAt: i.Z.FST3, refundableAt: i.Z.FST3R, publicLaunchAt: i.Z.FST4 };
        },
        20497: function (e, t, n) {
            "use strict";
            n.d(t, {
                R: function () {
                    return i;
                },
            });
            let i = (e) => {
                0 > +new Date() && console.error(e);
            };
        },
        66013: function (e) {
            e.exports = { noAntialias: "styles_noAntialias__N9kZG", threeD: "styles_threeD__hU8fd", hideIframe: "styles_hideIframe__6Hktj" };
        },
        99426: function (e, t, n) {
            "use strict";
            n.d(t, {
                Y: function () {
                    return l;
                },
            });
            var i = n(67573),
                s = n(2784);
            function l(e, t) {
                let n = (0, i.W)(e);
                (0, s.useEffect)(() => {
                    let e = null,
                        i = () => n();
                    return (
                        null !== t && (e = window.setInterval(i, t)),
                        () => {
                            e && window.clearInterval(e);
                        }
                    );
                }, [t, n]);
            }
        },
        71170: function (e, t, n) {
            "use strict";
            n.d(t, {
                P: function () {
                    return c;
                },
            });
            var i = n(17107),
                s = n(72037),
                l = n(49),
                r = n(49456),
                o = n(52322);
            function a(e) {
                return (0, r.XQ)(e, (e) => ("auto" === e ? "auto" : `span ${e}/span ${e}`));
            }
            var c = (0, i.G)(function (e, t) {
                let { area: n, colSpan: i, colStart: r, colEnd: c, rowEnd: d, rowSpan: h, rowStart: x, ...A } = e,
                    u = (0, l.o)({ gridArea: n, gridColumn: a(i), gridRow: a(h), gridColumnStart: r, gridColumnEnd: c, gridRowStart: x, gridRowEnd: d });
                return (0, o.jsx)(s.m.div, { ref: t, __css: u, ...A });
            });
            c.displayName = "GridItem";
        },
        35837: function (e, t, n) {
            "use strict";
            n.d(t, {
                GS: function () {
                    return u;
                },
                HC: function () {
                    return g;
                },
                QI: function () {
                    return p;
                },
            });
            var i = n(43638),
                s = n(9165),
                l = n(25578),
                r = n(17107),
                o = n(93506),
                a = n(84586),
                c = n(72037),
                d = n(52322),
                [h, x] = (0, s.k)({ name: "ListStylesContext", errorMessage: "useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" " }),
                A = (0, r.G)(function (e, t) {
                    let n = (0, o.jC)("List", e),
                        { children: i, styleType: s = "none", stylePosition: r, spacing: x, ...A } = (0, a.Lr)(e),
                        u = (0, l.W)(i);
                    return (0,
                    d.jsx)(h, { value: n, children: (0, d.jsx)(c.m.ul, { ref: t, listStyleType: s, listStylePosition: r, role: "list", __css: { ...n.container, ...(x ? { "& > *:not(style) ~ *:not(style)": { mt: x } } : {}) }, ...A, children: u }) });
                });
            A.displayName = "List";
            var u = (0, r.G)((e, t) => {
                let { as: n, ...i } = e;
                return (0, d.jsx)(A, { ref: t, as: "ol", styleType: "decimal", marginStart: "1em", ...i });
            });
            u.displayName = "OrderedList";
            var p = (0, r.G)(function (e, t) {
                let { as: n, ...i } = e;
                return (0, d.jsx)(A, { ref: t, as: "ul", styleType: "initial", marginStart: "1em", ...i });
            });
            p.displayName = "UnorderedList";
            var g = (0, r.G)(function (e, t) {
                let n = x();
                return (0, d.jsx)(c.m.li, { ref: t, ...e, __css: n.item });
            });
            (g.displayName = "ListItem"),
                ((0, r.G)(function (e, t) {
                    let n = x();
                    return (0, d.jsx)(i.J, { ref: t, role: "presentation", ...e, __css: n.icon });
                }).displayName = "ListIcon");
        },
        98667: function (e, t, n) {
            "use strict";
            n.d(t, {
                W: function () {
                    return s;
                },
            });
            let i = f(),
                s = (e) => u(e, i),
                l = f();
            s.write = (e) => u(e, l);
            let r = f();
            s.onStart = (e) => u(e, r);
            let o = f();
            s.onFrame = (e) => u(e, o);
            let a = f();
            s.onFinish = (e) => u(e, a);
            let c = [];
            s.setTimeout = (e, t) => {
                let n = s.now() + t,
                    i = () => {
                        let e = c.findIndex((e) => e.cancel == i);
                        ~e && c.splice(e, 1), (m.count -= ~e ? 1 : 0);
                    },
                    l = { time: n, handler: e, cancel: i };
                return c.splice(d(n), 0, l), (m.count += 1), p(), l;
            };
            let d = (e) => ~(~c.findIndex((t) => t.time > e) || ~c.length);
            (s.cancel = (e) => {
                i.delete(e), l.delete(e);
            }),
                (s.sync = (e) => {
                    (A = !0), s.batchedUpdates(e), (A = !1);
                }),
                (s.throttle = (e) => {
                    let t;
                    function n() {
                        try {
                            e(...t);
                        } finally {
                            t = null;
                        }
                    }
                    function i(...e) {
                        (t = e), s.onStart(n);
                    }
                    return (
                        (i.handler = e),
                        (i.cancel = () => {
                            r.delete(n), (t = null);
                        }),
                        i
                    );
                });
            let h = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
            (s.use = (e) => (h = e)), (s.now = "undefined" != typeof performance ? () => performance.now() : Date.now), (s.batchedUpdates = (e) => e()), (s.catch = console.error);
            let x = -1,
                A = !1;
            function u(e, t) {
                A ? (t.delete(e), e(0)) : (t.add(e), p());
            }
            function p() {
                x < 0 && ((x = 0), h(g));
            }
            function g() {
                ~x && (h(g), s.batchedUpdates(E));
            }
            function E() {
                let e = x;
                x = s.now();
                let t = d(x);
                t && (j(c.splice(0, t), (e) => e.handler()), (m.count -= t)), r.flush(), i.flush(e ? Math.min(64, x - e) : 16.667), o.flush(), l.flush(), a.flush();
            }
            function f() {
                let e = new Set(),
                    t = e;
                return {
                    add(n) {
                        (m.count += t != e || e.has(n) ? 0 : 1), e.add(n);
                    },
                    delete: (n) => ((m.count -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
                    flush(n) {
                        t.size && ((e = new Set()), (m.count -= t.size), j(t, (t) => t(n) && e.add(t)), (m.count += e.size), (t = e));
                    },
                };
            }
            function j(e, t) {
                e.forEach((e) => {
                    try {
                        t(e);
                    } catch (e) {
                        s.catch(e);
                    }
                });
            }
            let m = {
                count: 0,
                clear() {
                    (x = -1), (c = []), (r = f()), (i = f()), (o = f()), (l = f()), (a = f()), (m.count = 0);
                },
            };
        },
    },
    function (e) {
        e.O(0, [5839, 458, 3437, 9774, 2888, 179], function () {
            return e((e.s = 87314));
        }),
            (_N_E = e.O());
    },
]);
