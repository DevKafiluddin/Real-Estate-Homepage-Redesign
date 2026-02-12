var Ec = e => {
    throw TypeError(e)
}
;
var dl = (e, t, n) => t.has(e) || Ec("Cannot " + n);
var N = (e, t, n) => (dl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Z = (e, t, n) => t.has(e) ? Ec("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (dl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Te = (e, t, n) => (dl(e, t, "access private method"),
n);
var gi = (e, t, n, r) => ({
    set _(o) {
        H(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function Hg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Ef(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var bf = {
    exports: {}
}
  , Ms = {}
  , Cf = {
    exports: {}
}
  , G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi = Symbol.for("react.element")
  , Wg = Symbol.for("react.portal")
  , Qg = Symbol.for("react.fragment")
  , Kg = Symbol.for("react.strict_mode")
  , Yg = Symbol.for("react.profiler")
  , Gg = Symbol.for("react.provider")
  , Xg = Symbol.for("react.context")
  , qg = Symbol.for("react.forward_ref")
  , Zg = Symbol.for("react.suspense")
  , Jg = Symbol.for("react.memo")
  , ev = Symbol.for("react.lazy")
  , bc = Symbol.iterator;
function tv(e) {
    return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var kf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Pf = Object.assign
  , Nf = {};
function to(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Nf,
    this.updater = n || kf
}
to.prototype.isReactComponent = {};
to.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
to.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Tf() {}
Tf.prototype = to.prototype;
function ou(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Nf,
    this.updater = n || kf
}
var iu = ou.prototype = new Tf;
iu.constructor = ou;
Pf(iu, to.prototype);
iu.isPureReactComponent = !0;
var Cc = Array.isArray
  , Rf = Object.prototype.hasOwnProperty
  , su = {
    current: null
}
  , jf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function _f(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Rf.call(t, r) && !jf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: oi,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: su.current
    }
}
function nv(e, t) {
    return {
        $$typeof: oi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function lu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === oi
}
function rv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var kc = /\/+/g;
function fl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? rv("" + e.key) : t.toString(36)
}
function Fi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case oi:
            case Wg:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + fl(s, 0) : r,
        Cc(o) ? (n = "",
        e != null && (n = e.replace(kc, "$&/") + "/"),
        Fi(o, t, n, "", function(u) {
            return u
        })) : o != null && (lu(o) && (o = nv(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(kc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Cc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + fl(i, l);
            s += Fi(i, t, n, a, o)
        }
    else if (a = tv(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + fl(i, l++),
            s += Fi(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function vi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Fi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function ov(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ze = {
    current: null
}
  , $i = {
    transition: null
}
  , iv = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: $i,
    ReactCurrentOwner: su
};
function Mf() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: vi,
    forEach: function(e, t, n) {
        vi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return vi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return vi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!lu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = to;
G.Fragment = Qg;
G.Profiler = Yg;
G.PureComponent = ou;
G.StrictMode = Kg;
G.Suspense = Zg;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iv;
G.act = Mf;
G.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Pf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = su.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Rf.call(t, a) && !jf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: oi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
G.createContext = function(e) {
    return e = {
        $$typeof: Xg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Gg,
        _context: e
    },
    e.Consumer = e
}
;
G.createElement = _f;
G.createFactory = function(e) {
    var t = _f.bind(null, e);
    return t.type = e,
    t
}
;
G.createRef = function() {
    return {
        current: null
    }
}
;
G.forwardRef = function(e) {
    return {
        $$typeof: qg,
        render: e
    }
}
;
G.isValidElement = lu;
G.lazy = function(e) {
    return {
        $$typeof: ev,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ov
    }
}
;
G.memo = function(e, t) {
    return {
        $$typeof: Jg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
G.startTransition = function(e) {
    var t = $i.transition;
    $i.transition = {};
    try {
        e()
    } finally {
        $i.transition = t
    }
}
;
G.unstable_act = Mf;
G.useCallback = function(e, t) {
    return ze.current.useCallback(e, t)
}
;
G.useContext = function(e) {
    return ze.current.useContext(e)
}
;
G.useDebugValue = function() {}
;
G.useDeferredValue = function(e) {
    return ze.current.useDeferredValue(e)
}
;
G.useEffect = function(e, t) {
    return ze.current.useEffect(e, t)
}
;
G.useId = function() {
    return ze.current.useId()
}
;
G.useImperativeHandle = function(e, t, n) {
    return ze.current.useImperativeHandle(e, t, n)
}
;
G.useInsertionEffect = function(e, t) {
    return ze.current.useInsertionEffect(e, t)
}
;
G.useLayoutEffect = function(e, t) {
    return ze.current.useLayoutEffect(e, t)
}
;
G.useMemo = function(e, t) {
    return ze.current.useMemo(e, t)
}
;
G.useReducer = function(e, t, n) {
    return ze.current.useReducer(e, t, n)
}
;
G.useRef = function(e) {
    return ze.current.useRef(e)
}
;
G.useState = function(e) {
    return ze.current.useState(e)
}
;
G.useSyncExternalStore = function(e, t, n) {
    return ze.current.useSyncExternalStore(e, t, n)
}
;
G.useTransition = function() {
    return ze.current.useTransition()
}
;
G.version = "18.3.1";
Cf.exports = G;
var x = Cf.exports;
const _ = Ef(x)
  , Of = Hg({
    __proto__: null,
    default: _
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv = x
  , lv = Symbol.for("react.element")
  , av = Symbol.for("react.fragment")
  , uv = Object.prototype.hasOwnProperty
  , cv = sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , dv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Af(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        uv.call(t, r) && !dv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: lv,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: cv.current
    }
}
Ms.Fragment = av;
Ms.jsx = Af;
Ms.jsxs = Af;
bf.exports = Ms;
var g = bf.exports
  , Lf = {
    exports: {}
}
  , Je = {}
  , Df = {
    exports: {}
}
  , If = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, T) {
        var D = P.length;
        P.push(T);
        e: for (; 0 < D; ) {
            var W = D - 1 >>> 1
              , F = P[W];
            if (0 < o(F, T))
                P[W] = T,
                P[D] = F,
                D = W;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var T = P[0]
          , D = P.pop();
        if (D !== T) {
            P[0] = D;
            e: for (var W = 0, F = P.length, Y = F >>> 1; W < Y; ) {
                var X = 2 * (W + 1) - 1
                  , ge = P[X]
                  , Ne = X + 1
                  , J = P[Ne];
                if (0 > o(ge, D))
                    Ne < F && 0 > o(J, ge) ? (P[W] = J,
                    P[Ne] = D,
                    W = Ne) : (P[W] = ge,
                    P[X] = D,
                    W = X);
                else if (Ne < F && 0 > o(J, D))
                    P[W] = J,
                    P[Ne] = D,
                    W = Ne;
                else
                    break e
            }
        }
        return T
    }
    function o(P, T) {
        var D = P.sortIndex - T.sortIndex;
        return D !== 0 ? D : P.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , d = null
      , p = 3
      , f = !1
      , S = !1
      , y = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= P)
                r(u),
                T.sortIndex = T.expirationTime,
                t(a, T);
            else
                break;
            T = n(u)
        }
    }
    function E(P) {
        if (y = !1,
        v(P),
        !S)
            if (n(a) !== null)
                S = !0,
                $(b);
            else {
                var T = n(u);
                T !== null && B(E, T.startTime - P)
            }
    }
    function b(P, T) {
        S = !1,
        y && (y = !1,
        m(R),
        R = -1),
        f = !0;
        var D = p;
        try {
            for (v(T),
            d = n(a); d !== null && (!(d.expirationTime > T) || P && !z()); ) {
                var W = d.callback;
                if (typeof W == "function") {
                    d.callback = null,
                    p = d.priorityLevel;
                    var F = W(d.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof F == "function" ? d.callback = F : d === n(a) && r(a),
                    v(T)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var Y = !0;
            else {
                var X = n(u);
                X !== null && B(E, X.startTime - T),
                Y = !1
            }
            return Y
        } finally {
            d = null,
            p = D,
            f = !1
        }
    }
    var C = !1
      , k = null
      , R = -1
      , O = 5
      , M = -1;
    function z() {
        return !(e.unstable_now() - M < O)
    }
    function L() {
        if (k !== null) {
            var P = e.unstable_now();
            M = P;
            var T = !0;
            try {
                T = k(!0, P)
            } finally {
                T ? U() : (C = !1,
                k = null)
            }
        } else
            C = !1
    }
    var U;
    if (typeof h == "function")
        U = function() {
            h(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel
          , K = A.port2;
        A.port1.onmessage = L,
        U = function() {
            K.postMessage(null)
        }
    } else
        U = function() {
            w(L, 0)
        }
        ;
    function $(P) {
        k = P,
        C || (C = !0,
        U())
    }
    function B(P, T) {
        R = w(function() {
            P(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || f || (S = !0,
        $(b))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(P) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = p
        }
        var D = p;
        p = T;
        try {
            return P()
        } finally {
            p = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, T) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var D = p;
        p = P;
        try {
            return T()
        } finally {
            p = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, T, D) {
        var W = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? W + D : W) : D = W,
        P) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = D + F,
        P = {
            id: c++,
            callback: T,
            priorityLevel: P,
            startTime: D,
            expirationTime: F,
            sortIndex: -1
        },
        D > W ? (P.sortIndex = D,
        t(u, P),
        n(a) === null && P === n(u) && (y ? (m(R),
        R = -1) : y = !0,
        B(E, D - W))) : (P.sortIndex = F,
        t(a, P),
        S || f || (S = !0,
        $(b))),
        P
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(P) {
        var T = p;
        return function() {
            var D = p;
            p = T;
            try {
                return P.apply(this, arguments)
            } finally {
                p = D
            }
        }
    }
}
)(If);
Df.exports = If;
var fv = Df.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv = x
  , Ze = fv;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var zf = new Set
  , Lo = {};
function ar(e, t) {
    Qr(e, t),
    Qr(e + "Capture", t)
}
function Qr(e, t) {
    for (Lo[e] = t,
    e = 0; e < t.length; e++)
        zf.add(t[e])
}
var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Wl = Object.prototype.hasOwnProperty
  , hv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Pc = {}
  , Nc = {};
function mv(e) {
    return Wl.call(Nc, e) ? !0 : Wl.call(Pc, e) ? !1 : hv.test(e) ? Nc[e] = !0 : (Pc[e] = !0,
    !1)
}
function gv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function vv(e, t, n, r) {
    if (t === null || typeof t > "u" || gv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Fe(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new Fe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ke[t] = new Fe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new Fe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new Fe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new Fe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new Fe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var au = /[\-:]([a-z])/g;
function uu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(au, uu);
    ke[t] = new Fe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(au, uu);
    ke[t] = new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(au, uu);
    ke[t] = new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ke.xlinkHref = new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function cu(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vv(t, n, o, r) && (n = null),
    r || o === null ? mv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xt = pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , yi = Symbol.for("react.element")
  , vr = Symbol.for("react.portal")
  , yr = Symbol.for("react.fragment")
  , du = Symbol.for("react.strict_mode")
  , Ql = Symbol.for("react.profiler")
  , Ff = Symbol.for("react.provider")
  , $f = Symbol.for("react.context")
  , fu = Symbol.for("react.forward_ref")
  , Kl = Symbol.for("react.suspense")
  , Yl = Symbol.for("react.suspense_list")
  , pu = Symbol.for("react.memo")
  , un = Symbol.for("react.lazy")
  , Bf = Symbol.for("react.offscreen")
  , Tc = Symbol.iterator;
function co(e) {
    return e === null || typeof e != "object" ? null : (e = Tc && e[Tc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var de = Object.assign, pl;
function So(e) {
    if (pl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            pl = t && t[1] || ""
        }
    return `
` + pl + e
}
var hl = !1;
function ml(e, t) {
    if (!e || hl)
        return "";
    hl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        hl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? So(e) : ""
}
function yv(e) {
    switch (e.tag) {
    case 5:
        return So(e.type);
    case 16:
        return So("Lazy");
    case 13:
        return So("Suspense");
    case 19:
        return So("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ml(e.type, !1),
        e;
    case 11:
        return e = ml(e.type.render, !1),
        e;
    case 1:
        return e = ml(e.type, !0),
        e;
    default:
        return ""
    }
}
function Gl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case yr:
        return "Fragment";
    case vr:
        return "Portal";
    case Ql:
        return "Profiler";
    case du:
        return "StrictMode";
    case Kl:
        return "Suspense";
    case Yl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case $f:
            return (e.displayName || "Context") + ".Consumer";
        case Ff:
            return (e._context.displayName || "Context") + ".Provider";
        case fu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case pu:
            return t = e.displayName || null,
            t !== null ? t : Gl(e.type) || "Memo";
        case un:
            t = e._payload,
            e = e._init;
            try {
                return Gl(e(t))
            } catch {}
        }
    return null
}
function xv(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Gl(t);
    case 8:
        return t === du ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Rn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Uf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function wv(e) {
    var t = Uf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function xi(e) {
    e._valueTracker || (e._valueTracker = wv(e))
}
function Vf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Uf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function es(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Xl(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Rc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Rn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Hf(e, t) {
    t = t.checked,
    t != null && cu(e, "checked", t, !1)
}
function ql(e, t) {
    Hf(e, t);
    var n = Rn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Zl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zl(e, t.type, Rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function jc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Zl(e, t, n) {
    (t !== "number" || es(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Eo = Array.isArray;
function Rr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Rn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Jl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function _c(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (Eo(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Rn(n)
    }
}
function Wf(e, t) {
    var n = Rn(t.value)
      , r = Rn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Mc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Qf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ea(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var wi, Kf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (wi = wi || document.createElement("div"),
        wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = wi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Do(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ko = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Sv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ko).forEach(function(e) {
    Sv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ko[t] = ko[e]
    })
});
function Yf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ko.hasOwnProperty(e) && ko[e] ? ("" + t).trim() : t + "px"
}
function Gf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Yf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Ev = de({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ta(e, t) {
    if (t) {
        if (Ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function na(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ra = null;
function hu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var oa = null
  , jr = null
  , _r = null;
function Oc(e) {
    if (e = li(e)) {
        if (typeof oa != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Is(t),
        oa(e.stateNode, e.type, t))
    }
}
function Xf(e) {
    jr ? _r ? _r.push(e) : _r = [e] : jr = e
}
function qf() {
    if (jr) {
        var e = jr
          , t = _r;
        if (_r = jr = null,
        Oc(e),
        t)
            for (e = 0; e < t.length; e++)
                Oc(t[e])
    }
}
function Zf(e, t) {
    return e(t)
}
function Jf() {}
var gl = !1;
function ep(e, t, n) {
    if (gl)
        return e(t, n);
    gl = !0;
    try {
        return Zf(e, t, n)
    } finally {
        gl = !1,
        (jr !== null || _r !== null) && (Jf(),
        qf())
    }
}
function Io(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Is(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var ia = !1;
if (Ht)
    try {
        var fo = {};
        Object.defineProperty(fo, "passive", {
            get: function() {
                ia = !0
            }
        }),
        window.addEventListener("test", fo, fo),
        window.removeEventListener("test", fo, fo)
    } catch {
        ia = !1
    }
function bv(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Po = !1
  , ts = null
  , ns = !1
  , sa = null
  , Cv = {
    onError: function(e) {
        Po = !0,
        ts = e
    }
};
function kv(e, t, n, r, o, i, s, l, a) {
    Po = !1,
    ts = null,
    bv.apply(Cv, arguments)
}
function Pv(e, t, n, r, o, i, s, l, a) {
    if (kv.apply(this, arguments),
    Po) {
        if (Po) {
            var u = ts;
            Po = !1,
            ts = null
        } else
            throw Error(j(198));
        ns || (ns = !0,
        sa = u)
    }
}
function ur(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function tp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ac(e) {
    if (ur(e) !== e)
        throw Error(j(188))
}
function Nv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ur(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Ac(o),
                    e;
                if (i === r)
                    return Ac(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function np(e) {
    return e = Nv(e),
    e !== null ? rp(e) : null
}
function rp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = rp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var op = Ze.unstable_scheduleCallback
  , Lc = Ze.unstable_cancelCallback
  , Tv = Ze.unstable_shouldYield
  , Rv = Ze.unstable_requestPaint
  , me = Ze.unstable_now
  , jv = Ze.unstable_getCurrentPriorityLevel
  , mu = Ze.unstable_ImmediatePriority
  , ip = Ze.unstable_UserBlockingPriority
  , rs = Ze.unstable_NormalPriority
  , _v = Ze.unstable_LowPriority
  , sp = Ze.unstable_IdlePriority
  , Os = null
  , _t = null;
function Mv(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function")
        try {
            _t.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Lv
  , Ov = Math.log
  , Av = Math.LN2;
function Lv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Ov(e) / Av | 0) | 0
}
var Si = 64
  , Ei = 4194304;
function bo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function os(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = bo(l) : (i &= s,
        i !== 0 && (r = bo(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = bo(s) : i !== 0 && (r = bo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - wt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Dv(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Iv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - wt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = Dv(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function la(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lp() {
    var e = Si;
    return Si <<= 1,
    !(Si & 4194240) && (Si = 64),
    e
}
function vl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ii(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - wt(t),
    e[t] = n
}
function zv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - wt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function gu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - wt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ee = 0;
function ap(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var up, vu, cp, dp, fp, aa = !1, bi = [], Sn = null, En = null, bn = null, zo = new Map, Fo = new Map, dn = [], Fv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Dc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Sn = null;
        break;
    case "dragenter":
    case "dragleave":
        En = null;
        break;
    case "mouseover":
    case "mouseout":
        bn = null;
        break;
    case "pointerover":
    case "pointerout":
        zo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Fo.delete(t.pointerId)
    }
}
function po(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = li(t),
    t !== null && vu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function $v(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Sn = po(Sn, e, t, n, r, o),
        !0;
    case "dragenter":
        return En = po(En, e, t, n, r, o),
        !0;
    case "mouseover":
        return bn = po(bn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return zo.set(i, po(zo.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Fo.set(i, po(Fo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function pp(e) {
    var t = Wn(e.target);
    if (t !== null) {
        var n = ur(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = tp(n),
                t !== null) {
                    e.blockedOn = t,
                    fp(e.priority, function() {
                        cp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Bi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ua(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ra = r,
            n.target.dispatchEvent(r),
            ra = null
        } else
            return t = li(n),
            t !== null && vu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ic(e, t, n) {
    Bi(e) && n.delete(t)
}
function Bv() {
    aa = !1,
    Sn !== null && Bi(Sn) && (Sn = null),
    En !== null && Bi(En) && (En = null),
    bn !== null && Bi(bn) && (bn = null),
    zo.forEach(Ic),
    Fo.forEach(Ic)
}
function ho(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    aa || (aa = !0,
    Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Bv)))
}
function $o(e) {
    function t(o) {
        return ho(o, e)
    }
    if (0 < bi.length) {
        ho(bi[0], e);
        for (var n = 1; n < bi.length; n++) {
            var r = bi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Sn !== null && ho(Sn, e),
    En !== null && ho(En, e),
    bn !== null && ho(bn, e),
    zo.forEach(t),
    Fo.forEach(t),
    n = 0; n < dn.length; n++)
        r = dn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < dn.length && (n = dn[0],
    n.blockedOn === null); )
        pp(n),
        n.blockedOn === null && dn.shift()
}
var Mr = Xt.ReactCurrentBatchConfig
  , is = !0;
function Uv(e, t, n, r) {
    var o = ee
      , i = Mr.transition;
    Mr.transition = null;
    try {
        ee = 1,
        yu(e, t, n, r)
    } finally {
        ee = o,
        Mr.transition = i
    }
}
function Vv(e, t, n, r) {
    var o = ee
      , i = Mr.transition;
    Mr.transition = null;
    try {
        ee = 4,
        yu(e, t, n, r)
    } finally {
        ee = o,
        Mr.transition = i
    }
}
function yu(e, t, n, r) {
    if (is) {
        var o = ua(e, t, n, r);
        if (o === null)
            Nl(e, t, r, ss, n),
            Dc(e, r);
        else if ($v(o, e, t, n, r))
            r.stopPropagation();
        else if (Dc(e, r),
        t & 4 && -1 < Fv.indexOf(e)) {
            for (; o !== null; ) {
                var i = li(o);
                if (i !== null && up(i),
                i = ua(e, t, n, r),
                i === null && Nl(e, t, r, ss, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Nl(e, t, r, null, n)
    }
}
var ss = null;
function ua(e, t, n, r) {
    if (ss = null,
    e = hu(r),
    e = Wn(e),
    e !== null)
        if (t = ur(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = tp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ss = e,
    null
}
function hp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (jv()) {
        case mu:
            return 1;
        case ip:
            return 4;
        case rs:
        case _v:
            return 16;
        case sp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var yn = null
  , xu = null
  , Ui = null;
function mp() {
    if (Ui)
        return Ui;
    var e, t = xu, n = t.length, r, o = "value"in yn ? yn.value : yn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Ui = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Vi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ci() {
    return !0
}
function zc() {
    return !1
}
function et(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ci : zc,
        this.isPropagationStopped = zc,
        this
    }
    return de(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ci)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ci)
        },
        persist: function() {},
        isPersistent: Ci
    }),
    t
}
var no = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, wu = et(no), si = de({}, no, {
    view: 0,
    detail: 0
}), Hv = et(si), yl, xl, mo, As = de({}, si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== mo && (mo && e.type === "mousemove" ? (yl = e.screenX - mo.screenX,
        xl = e.screenY - mo.screenY) : xl = yl = 0,
        mo = e),
        yl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : xl
    }
}), Fc = et(As), Wv = de({}, As, {
    dataTransfer: 0
}), Qv = et(Wv), Kv = de({}, si, {
    relatedTarget: 0
}), wl = et(Kv), Yv = de({}, no, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Gv = et(Yv), Xv = de({}, no, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), qv = et(Xv), Zv = de({}, no, {
    data: 0
}), $c = et(Zv), Jv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, ey = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, ty = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ny(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ty[e]) ? !!t[e] : !1
}
function Su() {
    return ny
}
var ry = de({}, si, {
    key: function(e) {
        if (e.key) {
            var t = Jv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Vi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ey[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function(e) {
        return e.type === "keypress" ? Vi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , oy = et(ry)
  , iy = de({}, As, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Bc = et(iy)
  , sy = de({}, si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su
})
  , ly = et(sy)
  , ay = de({}, no, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , uy = et(ay)
  , cy = de({}, As, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , dy = et(cy)
  , fy = [9, 13, 27, 32]
  , Eu = Ht && "CompositionEvent"in window
  , No = null;
Ht && "documentMode"in document && (No = document.documentMode);
var py = Ht && "TextEvent"in window && !No
  , gp = Ht && (!Eu || No && 8 < No && 11 >= No)
  , Uc = " "
  , Vc = !1;
function vp(e, t) {
    switch (e) {
    case "keyup":
        return fy.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function yp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var xr = !1;
function hy(e, t) {
    switch (e) {
    case "compositionend":
        return yp(t);
    case "keypress":
        return t.which !== 32 ? null : (Vc = !0,
        Uc);
    case "textInput":
        return e = t.data,
        e === Uc && Vc ? null : e;
    default:
        return null
    }
}
function my(e, t) {
    if (xr)
        return e === "compositionend" || !Eu && vp(e, t) ? (e = mp(),
        Ui = xu = yn = null,
        xr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return gp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var gy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Hc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gy[e.type] : t === "textarea"
}
function xp(e, t, n, r) {
    Xf(r),
    t = ls(t, "onChange"),
    0 < t.length && (n = new wu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var To = null
  , Bo = null;
function vy(e) {
    jp(e, 0)
}
function Ls(e) {
    var t = Er(e);
    if (Vf(t))
        return e
}
function yy(e, t) {
    if (e === "change")
        return t
}
var wp = !1;
if (Ht) {
    var Sl;
    if (Ht) {
        var El = "oninput"in document;
        if (!El) {
            var Wc = document.createElement("div");
            Wc.setAttribute("oninput", "return;"),
            El = typeof Wc.oninput == "function"
        }
        Sl = El
    } else
        Sl = !1;
    wp = Sl && (!document.documentMode || 9 < document.documentMode)
}
function Qc() {
    To && (To.detachEvent("onpropertychange", Sp),
    Bo = To = null)
}
function Sp(e) {
    if (e.propertyName === "value" && Ls(Bo)) {
        var t = [];
        xp(t, Bo, e, hu(e)),
        ep(vy, t)
    }
}
function xy(e, t, n) {
    e === "focusin" ? (Qc(),
    To = t,
    Bo = n,
    To.attachEvent("onpropertychange", Sp)) : e === "focusout" && Qc()
}
function wy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ls(Bo)
}
function Sy(e, t) {
    if (e === "click")
        return Ls(t)
}
function Ey(e, t) {
    if (e === "input" || e === "change")
        return Ls(t)
}
function by(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Et = typeof Object.is == "function" ? Object.is : by;
function Uo(e, t) {
    if (Et(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Wl.call(t, o) || !Et(e[o], t[o]))
            return !1
    }
    return !0
}
function Kc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Yc(e, t) {
    var n = Kc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Kc(n)
    }
}
function Ep(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ep(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function bp() {
    for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = es(e.document)
    }
    return t
}
function bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Cy(e) {
    var t = bp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ep(n.ownerDocument.documentElement, n)) {
        if (r !== null && bu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Yc(n, i);
                var s = Yc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ky = Ht && "documentMode"in document && 11 >= document.documentMode
  , wr = null
  , ca = null
  , Ro = null
  , da = !1;
function Gc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    da || wr == null || wr !== es(r) || (r = wr,
    "selectionStart"in r && bu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ro && Uo(Ro, r) || (Ro = r,
    r = ls(ca, "onSelect"),
    0 < r.length && (t = new wu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = wr)))
}
function ki(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Sr = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd")
}
  , bl = {}
  , Cp = {};
Ht && (Cp = document.createElement("div").style,
"AnimationEvent"in window || (delete Sr.animationend.animation,
delete Sr.animationiteration.animation,
delete Sr.animationstart.animation),
"TransitionEvent"in window || delete Sr.transitionend.transition);
function Ds(e) {
    if (bl[e])
        return bl[e];
    if (!Sr[e])
        return e;
    var t = Sr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Cp)
            return bl[e] = t[n];
    return e
}
var kp = Ds("animationend")
  , Pp = Ds("animationiteration")
  , Np = Ds("animationstart")
  , Tp = Ds("transitionend")
  , Rp = new Map
  , Xc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function In(e, t) {
    Rp.set(e, t),
    ar(t, [e])
}
for (var Cl = 0; Cl < Xc.length; Cl++) {
    var kl = Xc[Cl]
      , Py = kl.toLowerCase()
      , Ny = kl[0].toUpperCase() + kl.slice(1);
    In(Py, "on" + Ny)
}
In(kp, "onAnimationEnd");
In(Pp, "onAnimationIteration");
In(Np, "onAnimationStart");
In("dblclick", "onDoubleClick");
In("focusin", "onFocus");
In("focusout", "onBlur");
In(Tp, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
ar("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ar("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ar("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));
function qc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Pv(r, t, void 0, e),
    e.currentTarget = null
}
function jp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    qc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    qc(o, l, u),
                    i = a
                }
        }
    }
    if (ns)
        throw e = sa,
        ns = !1,
        sa = null,
        e
}
function oe(e, t) {
    var n = t[ga];
    n === void 0 && (n = t[ga] = new Set);
    var r = e + "__bubble";
    n.has(r) || (_p(t, e, 2, !1),
    n.add(r))
}
function Pl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    _p(n, e, r, t)
}
var Pi = "_reactListening" + Math.random().toString(36).slice(2);
function Vo(e) {
    if (!e[Pi]) {
        e[Pi] = !0,
        zf.forEach(function(n) {
            n !== "selectionchange" && (Ty.has(n) || Pl(n, !1, e),
            Pl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Pi] || (t[Pi] = !0,
        Pl("selectionchange", !1, t))
    }
}
function _p(e, t, n, r) {
    switch (hp(t)) {
    case 1:
        var o = Uv;
        break;
    case 4:
        o = Vv;
        break;
    default:
        o = yu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !ia || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Nl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Wn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    ep(function() {
        var u = i
          , c = hu(n)
          , d = [];
        e: {
            var p = Rp.get(e);
            if (p !== void 0) {
                var f = wu
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Vi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    f = oy;
                    break;
                case "focusin":
                    S = "focus",
                    f = wl;
                    break;
                case "focusout":
                    S = "blur",
                    f = wl;
                    break;
                case "beforeblur":
                case "afterblur":
                    f = wl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    f = Fc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    f = Qv;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    f = ly;
                    break;
                case kp:
                case Pp:
                case Np:
                    f = Gv;
                    break;
                case Tp:
                    f = uy;
                    break;
                case "scroll":
                    f = Hv;
                    break;
                case "wheel":
                    f = dy;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    f = qv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    f = Bc
                }
                var y = (t & 4) !== 0
                  , w = !y && e === "scroll"
                  , m = y ? p !== null ? p + "Capture" : null : p;
                y = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var E = v.stateNode;
                    if (v.tag === 5 && E !== null && (v = E,
                    m !== null && (E = Io(h, m),
                    E != null && y.push(Ho(h, E, v)))),
                    w)
                        break;
                    h = h.return
                }
                0 < y.length && (p = new f(p,S,null,n,c),
                d.push({
                    event: p,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                f = e === "mouseout" || e === "pointerout",
                p && n !== ra && (S = n.relatedTarget || n.fromElement) && (Wn(S) || S[Wt]))
                    break e;
                if ((f || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window,
                f ? (S = n.relatedTarget || n.toElement,
                f = u,
                S = S ? Wn(S) : null,
                S !== null && (w = ur(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (f = null,
                S = u),
                f !== S)) {
                    if (y = Fc,
                    E = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Bc,
                    E = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    w = f == null ? p : Er(f),
                    v = S == null ? p : Er(S),
                    p = new y(E,h + "leave",f,n,c),
                    p.target = w,
                    p.relatedTarget = v,
                    E = null,
                    Wn(c) === u && (y = new y(m,h + "enter",S,n,c),
                    y.target = v,
                    y.relatedTarget = w,
                    E = y),
                    w = E,
                    f && S)
                        t: {
                            for (y = f,
                            m = S,
                            h = 0,
                            v = y; v; v = gr(v))
                                h++;
                            for (v = 0,
                            E = m; E; E = gr(E))
                                v++;
                            for (; 0 < h - v; )
                                y = gr(y),
                                h--;
                            for (; 0 < v - h; )
                                m = gr(m),
                                v--;
                            for (; h--; ) {
                                if (y === m || m !== null && y === m.alternate)
                                    break t;
                                y = gr(y),
                                m = gr(m)
                            }
                            y = null
                        }
                    else
                        y = null;
                    f !== null && Zc(d, p, f, y, !1),
                    S !== null && w !== null && Zc(d, w, S, y, !0)
                }
            }
            e: {
                if (p = u ? Er(u) : window,
                f = p.nodeName && p.nodeName.toLowerCase(),
                f === "select" || f === "input" && p.type === "file")
                    var b = yy;
                else if (Hc(p))
                    if (wp)
                        b = Ey;
                    else {
                        b = wy;
                        var C = xy
                    }
                else
                    (f = p.nodeName) && f.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (b = Sy);
                if (b && (b = b(e, u))) {
                    xp(d, b, n, c);
                    break e
                }
                C && C(e, p, u),
                e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Zl(p, "number", p.value)
            }
            switch (C = u ? Er(u) : window,
            e) {
            case "focusin":
                (Hc(C) || C.contentEditable === "true") && (wr = C,
                ca = u,
                Ro = null);
                break;
            case "focusout":
                Ro = ca = wr = null;
                break;
            case "mousedown":
                da = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                da = !1,
                Gc(d, n, c);
                break;
            case "selectionchange":
                if (ky)
                    break;
            case "keydown":
            case "keyup":
                Gc(d, n, c)
            }
            var k;
            if (Eu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                    }
                    R = void 0
                }
            else
                xr ? vp(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
            R && (gp && n.locale !== "ko" && (xr || R !== "onCompositionStart" ? R === "onCompositionEnd" && xr && (k = mp()) : (yn = c,
            xu = "value"in yn ? yn.value : yn.textContent,
            xr = !0)),
            C = ls(u, R),
            0 < C.length && (R = new $c(R,e,null,n,c),
            d.push({
                event: R,
                listeners: C
            }),
            k ? R.data = k : (k = yp(n),
            k !== null && (R.data = k)))),
            (k = py ? hy(e, n) : my(e, n)) && (u = ls(u, "onBeforeInput"),
            0 < u.length && (c = new $c("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        jp(d, t)
    })
}
function Ho(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ls(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Io(e, n),
        i != null && r.unshift(Ho(e, i, o)),
        i = Io(e, t),
        i != null && r.push(Ho(e, i, o))),
        e = e.return
    }
    return r
}
function gr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Zc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Io(n, i),
        a != null && s.unshift(Ho(n, a, l))) : o || (a = Io(n, i),
        a != null && s.push(Ho(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Ry = /\r\n?/g
  , jy = /\u0000|\uFFFD/g;
function Jc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ry, `
`).replace(jy, "")
}
function Ni(e, t, n) {
    if (t = Jc(t),
    Jc(e) !== t && n)
        throw Error(j(425))
}
function as() {}
var fa = null
  , pa = null;
function ha(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ma = typeof setTimeout == "function" ? setTimeout : void 0
  , _y = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ed = typeof Promise == "function" ? Promise : void 0
  , My = typeof queueMicrotask == "function" ? queueMicrotask : typeof ed < "u" ? function(e) {
    return ed.resolve(null).then(e).catch(Oy)
}
: ma;
function Oy(e) {
    setTimeout(function() {
        throw e
    })
}
function Tl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    $o(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    $o(t)
}
function Cn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function td(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ro = Math.random().toString(36).slice(2)
  , jt = "__reactFiber$" + ro
  , Wo = "__reactProps$" + ro
  , Wt = "__reactContainer$" + ro
  , ga = "__reactEvents$" + ro
  , Ay = "__reactListeners$" + ro
  , Ly = "__reactHandles$" + ro;
function Wn(e) {
    var t = e[jt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Wt] || n[jt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = td(e); e !== null; ) {
                    if (n = e[jt])
                        return n;
                    e = td(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function li(e) {
    return e = e[jt] || e[Wt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Er(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Is(e) {
    return e[Wo] || null
}
var va = []
  , br = -1;
function zn(e) {
    return {
        current: e
    }
}
function se(e) {
    0 > br || (e.current = va[br],
    va[br] = null,
    br--)
}
function ne(e, t) {
    br++,
    va[br] = e.current,
    e.current = t
}
var jn = {}
  , Oe = zn(jn)
  , Ve = zn(!1)
  , nr = jn;
function Kr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function He(e) {
    return e = e.childContextTypes,
    e != null
}
function us() {
    se(Ve),
    se(Oe)
}
function nd(e, t, n) {
    if (Oe.current !== jn)
        throw Error(j(168));
    ne(Oe, t),
    ne(Ve, n)
}
function Mp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, xv(e) || "Unknown", o));
    return de({}, n, r)
}
function cs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn,
    nr = Oe.current,
    ne(Oe, e),
    ne(Ve, Ve.current),
    !0
}
function rd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Mp(e, t, nr),
    r.__reactInternalMemoizedMergedChildContext = e,
    se(Ve),
    se(Oe),
    ne(Oe, e)) : se(Ve),
    ne(Ve, n)
}
var zt = null
  , zs = !1
  , Rl = !1;
function Op(e) {
    zt === null ? zt = [e] : zt.push(e)
}
function Dy(e) {
    zs = !0,
    Op(e)
}
function Fn() {
    if (!Rl && zt !== null) {
        Rl = !0;
        var e = 0
          , t = ee;
        try {
            var n = zt;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            zt = null,
            zs = !1
        } catch (o) {
            throw zt !== null && (zt = zt.slice(e + 1)),
            op(mu, Fn),
            o
        } finally {
            ee = t,
            Rl = !1
        }
    }
    return null
}
var Cr = []
  , kr = 0
  , ds = null
  , fs = 0
  , rt = []
  , ot = 0
  , rr = null
  , $t = 1
  , Bt = "";
function Vn(e, t) {
    Cr[kr++] = fs,
    Cr[kr++] = ds,
    ds = e,
    fs = t
}
function Ap(e, t, n) {
    rt[ot++] = $t,
    rt[ot++] = Bt,
    rt[ot++] = rr,
    rr = e;
    var r = $t;
    e = Bt;
    var o = 32 - wt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - wt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        $t = 1 << 32 - wt(t) + o | n << o | r,
        Bt = i + e
    } else
        $t = 1 << i | n << o | r,
        Bt = e
}
function Cu(e) {
    e.return !== null && (Vn(e, 1),
    Ap(e, 1, 0))
}
function ku(e) {
    for (; e === ds; )
        ds = Cr[--kr],
        Cr[kr] = null,
        fs = Cr[--kr],
        Cr[kr] = null;
    for (; e === rr; )
        rr = rt[--ot],
        rt[ot] = null,
        Bt = rt[--ot],
        rt[ot] = null,
        $t = rt[--ot],
        rt[ot] = null
}
var Xe = null
  , Ge = null
  , ae = !1
  , xt = null;
function Lp(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function od(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ge = Cn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ge = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = rr !== null ? {
            id: $t,
            overflow: Bt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = it(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        Ge = null,
        !0) : !1;
    default:
        return !1
    }
}
function ya(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function xa(e) {
    if (ae) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!od(e, t)) {
                if (ya(e))
                    throw Error(j(418));
                t = Cn(n.nextSibling);
                var r = Xe;
                t && od(e, t) ? Lp(r, n) : (e.flags = e.flags & -4097 | 2,
                ae = !1,
                Xe = e)
            }
        } else {
            if (ya(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            ae = !1,
            Xe = e
        }
    }
}
function id(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function Ti(e) {
    if (e !== Xe)
        return !1;
    if (!ae)
        return id(e),
        ae = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps)),
    t && (t = Ge)) {
        if (ya(e))
            throw Dp(),
            Error(j(418));
        for (; t; )
            Lp(e, t),
            t = Cn(t.nextSibling)
    }
    if (id(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = Cn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else
        Ge = Xe ? Cn(e.stateNode.nextSibling) : null;
    return !0
}
function Dp() {
    for (var e = Ge; e; )
        e = Cn(e.nextSibling)
}
function Yr() {
    Ge = Xe = null,
    ae = !1
}
function Pu(e) {
    xt === null ? xt = [e] : xt.push(e)
}
var Iy = Xt.ReactCurrentBatchConfig;
function go(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Ri(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sd(e) {
    var t = e._init;
    return t(e._payload)
}
function Ip(e) {
    function t(m, h) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [h],
            m.flags |= 16) : v.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function o(m, h) {
        return m = Tn(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, h, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < h ? (m.flags |= 2,
        h) : v) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, h, v, E) {
        return h === null || h.tag !== 6 ? (h = Dl(v, m.mode, E),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function a(m, h, v, E) {
        var b = v.type;
        return b === yr ? c(m, h, v.props.children, E, v.key) : h !== null && (h.elementType === b || typeof b == "object" && b !== null && b.$$typeof === un && sd(b) === h.type) ? (E = o(h, v.props),
        E.ref = go(m, h, v),
        E.return = m,
        E) : (E = Xi(v.type, v.key, v.props, null, m.mode, E),
        E.ref = go(m, h, v),
        E.return = m,
        E)
    }
    function u(m, h, v, E) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Il(v, m.mode, E),
        h.return = m,
        h) : (h = o(h, v.children || []),
        h.return = m,
        h)
    }
    function c(m, h, v, E, b) {
        return h === null || h.tag !== 7 ? (h = tr(v, m.mode, E, b),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function d(m, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Dl("" + h, m.mode, v),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case yi:
                return v = Xi(h.type, h.key, h.props, null, m.mode, v),
                v.ref = go(m, null, h),
                v.return = m,
                v;
            case vr:
                return h = Il(h, m.mode, v),
                h.return = m,
                h;
            case un:
                var E = h._init;
                return d(m, E(h._payload), v)
            }
            if (Eo(h) || co(h))
                return h = tr(h, m.mode, v, null),
                h.return = m,
                h;
            Ri(m, h)
        }
        return null
    }
    function p(m, h, v, E) {
        var b = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return b !== null ? null : l(m, h, "" + v, E);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case yi:
                return v.key === b ? a(m, h, v, E) : null;
            case vr:
                return v.key === b ? u(m, h, v, E) : null;
            case un:
                return b = v._init,
                p(m, h, b(v._payload), E)
            }
            if (Eo(v) || co(v))
                return b !== null ? null : c(m, h, v, E, null);
            Ri(m, v)
        }
        return null
    }
    function f(m, h, v, E, b) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return m = m.get(v) || null,
            l(h, m, "" + E, b);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case yi:
                return m = m.get(E.key === null ? v : E.key) || null,
                a(h, m, E, b);
            case vr:
                return m = m.get(E.key === null ? v : E.key) || null,
                u(h, m, E, b);
            case un:
                var C = E._init;
                return f(m, h, v, C(E._payload), b)
            }
            if (Eo(E) || co(E))
                return m = m.get(v) || null,
                c(h, m, E, b, null);
            Ri(h, E)
        }
        return null
    }
    function S(m, h, v, E) {
        for (var b = null, C = null, k = h, R = h = 0, O = null; k !== null && R < v.length; R++) {
            k.index > R ? (O = k,
            k = null) : O = k.sibling;
            var M = p(m, k, v[R], E);
            if (M === null) {
                k === null && (k = O);
                break
            }
            e && k && M.alternate === null && t(m, k),
            h = i(M, h, R),
            C === null ? b = M : C.sibling = M,
            C = M,
            k = O
        }
        if (R === v.length)
            return n(m, k),
            ae && Vn(m, R),
            b;
        if (k === null) {
            for (; R < v.length; R++)
                k = d(m, v[R], E),
                k !== null && (h = i(k, h, R),
                C === null ? b = k : C.sibling = k,
                C = k);
            return ae && Vn(m, R),
            b
        }
        for (k = r(m, k); R < v.length; R++)
            O = f(k, m, R, v[R], E),
            O !== null && (e && O.alternate !== null && k.delete(O.key === null ? R : O.key),
            h = i(O, h, R),
            C === null ? b = O : C.sibling = O,
            C = O);
        return e && k.forEach(function(z) {
            return t(m, z)
        }),
        ae && Vn(m, R),
        b
    }
    function y(m, h, v, E) {
        var b = co(v);
        if (typeof b != "function")
            throw Error(j(150));
        if (v = b.call(v),
        v == null)
            throw Error(j(151));
        for (var C = b = null, k = h, R = h = 0, O = null, M = v.next(); k !== null && !M.done; R++,
        M = v.next()) {
            k.index > R ? (O = k,
            k = null) : O = k.sibling;
            var z = p(m, k, M.value, E);
            if (z === null) {
                k === null && (k = O);
                break
            }
            e && k && z.alternate === null && t(m, k),
            h = i(z, h, R),
            C === null ? b = z : C.sibling = z,
            C = z,
            k = O
        }
        if (M.done)
            return n(m, k),
            ae && Vn(m, R),
            b;
        if (k === null) {
            for (; !M.done; R++,
            M = v.next())
                M = d(m, M.value, E),
                M !== null && (h = i(M, h, R),
                C === null ? b = M : C.sibling = M,
                C = M);
            return ae && Vn(m, R),
            b
        }
        for (k = r(m, k); !M.done; R++,
        M = v.next())
            M = f(k, m, R, M.value, E),
            M !== null && (e && M.alternate !== null && k.delete(M.key === null ? R : M.key),
            h = i(M, h, R),
            C === null ? b = M : C.sibling = M,
            C = M);
        return e && k.forEach(function(L) {
            return t(m, L)
        }),
        ae && Vn(m, R),
        b
    }
    function w(m, h, v, E) {
        if (typeof v == "object" && v !== null && v.type === yr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case yi:
                e: {
                    for (var b = v.key, C = h; C !== null; ) {
                        if (C.key === b) {
                            if (b = v.type,
                            b === yr) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    h = o(C, v.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (C.elementType === b || typeof b == "object" && b !== null && b.$$typeof === un && sd(b) === C.type) {
                                n(m, C.sibling),
                                h = o(C, v.props),
                                h.ref = go(m, C, v),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    v.type === yr ? (h = tr(v.props.children, m.mode, E, v.key),
                    h.return = m,
                    m = h) : (E = Xi(v.type, v.key, v.props, null, m.mode, E),
                    E.ref = go(m, h, v),
                    E.return = m,
                    m = E)
                }
                return s(m);
            case vr:
                e: {
                    for (C = v.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(m, h.sibling),
                                h = o(h, v.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = Il(v, m.mode, E),
                    h.return = m,
                    m = h
                }
                return s(m);
            case un:
                return C = v._init,
                w(m, h, C(v._payload), E)
            }
            if (Eo(v))
                return S(m, h, v, E);
            if (co(v))
                return y(m, h, v, E);
            Ri(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = o(h, v),
        h.return = m,
        m = h) : (n(m, h),
        h = Dl(v, m.mode, E),
        h.return = m,
        m = h),
        s(m)) : n(m, h)
    }
    return w
}
var Gr = Ip(!0)
  , zp = Ip(!1)
  , ps = zn(null)
  , hs = null
  , Pr = null
  , Nu = null;
function Tu() {
    Nu = Pr = hs = null
}
function Ru(e) {
    var t = ps.current;
    se(ps),
    e._currentValue = t
}
function wa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Or(e, t) {
    hs = e,
    Nu = Pr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (Nu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Pr === null) {
            if (hs === null)
                throw Error(j(308));
            Pr = e,
            hs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Pr = Pr.next = e;
    return t
}
var Qn = null;
function ju(e) {
    Qn === null ? Qn = [e] : Qn.push(e)
}
function Fp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    ju(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Qt(e, r)
}
function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var cn = !1;
function _u(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function $p(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ut(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function kn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Qt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    ju(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Qt(e, n)
}
function Hi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        gu(e, n)
    }
}
function ld(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ms(e, t, n, r) {
    var o = e.updateQueue;
    cn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
        c = u = a = null,
        l = i;
        do {
            var p = l.lane
              , f = l.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: f,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var S = e
                      , y = l;
                    switch (p = t,
                    f = n,
                    y.tag) {
                    case 1:
                        if (S = y.payload,
                        typeof S == "function") {
                            d = S.call(f, d, p);
                            break e
                        }
                        d = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = y.payload,
                        p = typeof S == "function" ? S.call(f, d, p) : S,
                        p == null)
                            break e;
                        d = de({}, d, p);
                        break e;
                    case 2:
                        cn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                p = o.effects,
                p === null ? o.effects = [l] : p.push(l))
            } else
                f = {
                    eventTime: f,
                    lane: p,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = f,
                a = d) : c = c.next = f,
                s |= p;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                p = l,
                l = p.next,
                p.next = null,
                o.lastBaseUpdate = p,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        ir |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function ad(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var ai = {}
  , Mt = zn(ai)
  , Qo = zn(ai)
  , Ko = zn(ai);
function Kn(e) {
    if (e === ai)
        throw Error(j(174));
    return e
}
function Mu(e, t) {
    switch (ne(Ko, t),
    ne(Qo, e),
    ne(Mt, ai),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ea(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ea(t, e)
    }
    se(Mt),
    ne(Mt, t)
}
function Xr() {
    se(Mt),
    se(Qo),
    se(Ko)
}
function Bp(e) {
    Kn(Ko.current);
    var t = Kn(Mt.current)
      , n = ea(t, e.type);
    t !== n && (ne(Qo, e),
    ne(Mt, n))
}
function Ou(e) {
    Qo.current === e && (se(Mt),
    se(Qo))
}
var ue = zn(0);
function gs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var jl = [];
function Au() {
    for (var e = 0; e < jl.length; e++)
        jl[e]._workInProgressVersionPrimary = null;
    jl.length = 0
}
var Wi = Xt.ReactCurrentDispatcher
  , _l = Xt.ReactCurrentBatchConfig
  , or = 0
  , ce = null
  , ye = null
  , Se = null
  , vs = !1
  , jo = !1
  , Yo = 0
  , zy = 0;
function Re() {
    throw Error(j(321))
}
function Lu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Et(e[n], t[n]))
            return !1;
    return !0
}
function Du(e, t, n, r, o, i) {
    if (or = i,
    ce = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Wi.current = e === null || e.memoizedState === null ? Uy : Vy,
    e = n(r, o),
    jo) {
        i = 0;
        do {
            if (jo = !1,
            Yo = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            Se = ye = null,
            t.updateQueue = null,
            Wi.current = Hy,
            e = n(r, o)
        } while (jo)
    }
    if (Wi.current = ys,
    t = ye !== null && ye.next !== null,
    or = 0,
    Se = ye = ce = null,
    vs = !1,
    t)
        throw Error(j(300));
    return e
}
function Iu() {
    var e = Yo !== 0;
    return Yo = 0,
    e
}
function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Se === null ? ce.memoizedState = Se = e : Se = Se.next = e,
    Se
}
function at() {
    if (ye === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ye.next;
    var t = Se === null ? ce.memoizedState : Se.next;
    if (t !== null)
        Se = t,
        ye = e;
    else {
        if (e === null)
            throw Error(j(310));
        ye = e,
        e = {
            memoizedState: ye.memoizedState,
            baseState: ye.baseState,
            baseQueue: ye.baseQueue,
            queue: ye.queue,
            next: null
        },
        Se === null ? ce.memoizedState = Se = e : Se = Se.next = e
    }
    return Se
}
function Go(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ml(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = ye
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var c = u.lane;
            if ((or & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                s = r) : a = a.next = d,
                ce.lanes |= c,
                ir |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        Et(r, t.memoizedState) || (Ue = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ce.lanes |= i,
            ir |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ol(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        Et(i, t.memoizedState) || (Ue = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Up() {}
function Vp(e, t) {
    var n = ce
      , r = at()
      , o = t()
      , i = !Et(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ue = !0),
    r = r.queue,
    zu(Qp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Xo(9, Wp.bind(null, n, r, o, t), void 0, null),
        Ee === null)
            throw Error(j(349));
        or & 30 || Hp(n, t, o)
    }
    return o
}
function Hp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Wp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Kp(t) && Yp(e)
}
function Qp(e, t, n) {
    return n(function() {
        Kp(t) && Yp(e)
    })
}
function Kp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Et(e, n)
    } catch {
        return !0
    }
}
function Yp(e) {
    var t = Qt(e, 1);
    t !== null && St(t, e, 1, -1)
}
function ud(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Go,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = By.bind(null, ce, e),
    [t.memoizedState, e]
}
function Xo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Gp() {
    return at().memoizedState
}
function Qi(e, t, n, r) {
    var o = Pt();
    ce.flags |= e,
    o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Fs(e, t, n, r) {
    var o = at();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ye !== null) {
        var s = ye.memoizedState;
        if (i = s.destroy,
        r !== null && Lu(r, s.deps)) {
            o.memoizedState = Xo(t, n, i, r);
            return
        }
    }
    ce.flags |= e,
    o.memoizedState = Xo(1 | t, n, i, r)
}
function cd(e, t) {
    return Qi(8390656, 8, e, t)
}
function zu(e, t) {
    return Fs(2048, 8, e, t)
}
function Xp(e, t) {
    return Fs(4, 2, e, t)
}
function qp(e, t) {
    return Fs(4, 4, e, t)
}
function Zp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Jp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Fs(4, 4, Zp.bind(null, t, e), n)
}
function Fu() {}
function eh(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Lu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function th(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Lu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function nh(e, t, n) {
    return or & 21 ? (Et(n, t) || (n = lp(),
    ce.lanes |= n,
    ir |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ue = !0),
    e.memoizedState = n)
}
function Fy(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = _l.transition;
    _l.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        _l.transition = r
    }
}
function rh() {
    return at().memoizedState
}
function $y(e, t, n) {
    var r = Nn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    oh(e))
        ih(t, n);
    else if (n = Fp(e, t, n, r),
    n !== null) {
        var o = Ie();
        St(n, e, r, o),
        sh(n, t, r)
    }
}
function By(e, t, n) {
    var r = Nn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (oh(e))
        ih(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                Et(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    ju(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Fp(e, t, o, r),
        n !== null && (o = Ie(),
        St(n, e, r, o),
        sh(n, t, r))
    }
}
function oh(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}
function ih(e, t) {
    jo = vs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function sh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        gu(e, n)
    }
}
var ys = {
    readContext: lt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1
}
  , Uy = {
    readContext: lt,
    useCallback: function(e, t) {
        return Pt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: cd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Qi(4194308, 4, Zp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Qi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Qi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Pt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Pt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = $y.bind(null, ce, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Pt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ud,
    useDebugValue: Fu,
    useDeferredValue: function(e) {
        return Pt().memoizedState = e
    },
    useTransition: function() {
        var e = ud(!1)
          , t = e[0];
        return e = Fy.bind(null, e[1]),
        Pt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ce
          , o = Pt();
        if (ae) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            Ee === null)
                throw Error(j(349));
            or & 30 || Hp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        cd(Qp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Xo(9, Wp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Pt()
          , t = Ee.identifierPrefix;
        if (ae) {
            var n = Bt
              , r = $t;
            n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Yo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = zy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Vy = {
    readContext: lt,
    useCallback: eh,
    useContext: lt,
    useEffect: zu,
    useImperativeHandle: Jp,
    useInsertionEffect: Xp,
    useLayoutEffect: qp,
    useMemo: th,
    useReducer: Ml,
    useRef: Gp,
    useState: function() {
        return Ml(Go)
    },
    useDebugValue: Fu,
    useDeferredValue: function(e) {
        var t = at();
        return nh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Ml(Go)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Up,
    useSyncExternalStore: Vp,
    useId: rh,
    unstable_isNewReconciler: !1
}
  , Hy = {
    readContext: lt,
    useCallback: eh,
    useContext: lt,
    useEffect: zu,
    useImperativeHandle: Jp,
    useInsertionEffect: Xp,
    useLayoutEffect: qp,
    useMemo: th,
    useReducer: Ol,
    useRef: Gp,
    useState: function() {
        return Ol(Go)
    },
    useDebugValue: Fu,
    useDeferredValue: function(e) {
        var t = at();
        return ye === null ? t.memoizedState = e : nh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Ol(Go)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Up,
    useSyncExternalStore: Vp,
    useId: rh,
    unstable_isNewReconciler: !1
};
function ht(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Sa(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : de({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var $s = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ur(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = Nn(e)
          , i = Ut(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = kn(e, i, o),
        t !== null && (St(t, e, o, r),
        Hi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = Nn(e)
          , i = Ut(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = kn(e, i, o),
        t !== null && (St(t, e, o, r),
        Hi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ie()
          , r = Nn(e)
          , o = Ut(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = kn(e, o, r),
        t !== null && (St(t, e, r, n),
        Hi(t, e, r))
    }
};
function dd(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Uo(n, r) || !Uo(o, i) : !0
}
function lh(e, t, n) {
    var r = !1
      , o = jn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (o = He(t) ? nr : Oe.current,
    r = t.contextTypes,
    i = (r = r != null) ? Kr(e, o) : jn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = $s,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function fd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $s.enqueueReplaceState(t, t.state, null)
}
function Ea(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    _u(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = lt(i) : (i = He(t) ? nr : Oe.current,
    o.context = Kr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Sa(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && $s.enqueueReplaceState(o, o.state, null),
    ms(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function qr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += yv(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Al(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ba(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Wy = typeof WeakMap == "function" ? WeakMap : Map;
function ah(e, t, n) {
    n = Ut(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ws || (ws = !0,
        Oa = r),
        ba(e, t)
    }
    ,
    n
}
function uh(e, t, n) {
    n = Ut(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ba(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ba(e, t),
        typeof r != "function" && (Pn === null ? Pn = new Set([this]) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function pd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Wy;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = i0.bind(null, e, t, n),
    t.then(e, e))
}
function hd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function md(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1),
    t.tag = 2,
    kn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Qy = Xt.ReactCurrentOwner
  , Ue = !1;
function Le(e, t, n, r) {
    t.child = e === null ? zp(t, null, n, r) : Gr(t, e.child, n, r)
}
function gd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Or(t, o),
    r = Du(e, t, n, r, i, o),
    n = Iu(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Kt(e, t, o)) : (ae && n && Cu(t),
    t.flags |= 1,
    Le(e, t, r, o),
    t.child)
}
function vd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Ku(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        ch(e, t, i, r, o)) : (e = Xi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Uo,
        n(s, r) && e.ref === t.ref)
            return Kt(e, t, o)
    }
    return t.flags |= 1,
    e = Tn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ch(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Uo(i, r) && e.ref === t.ref)
            if (Ue = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ue = !0);
            else
                return t.lanes = e.lanes,
                Kt(e, t, o)
    }
    return Ca(e, t, n, r, o)
}
function dh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Tr, Ke),
            Ke |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Tr, Ke),
                Ke |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ne(Tr, Ke),
            Ke |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(Tr, Ke),
        Ke |= r;
    return Le(e, t, o, n),
    t.child
}
function fh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ca(e, t, n, r, o) {
    var i = He(n) ? nr : Oe.current;
    return i = Kr(t, i),
    Or(t, o),
    n = Du(e, t, n, r, i, o),
    r = Iu(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Kt(e, t, o)) : (ae && r && Cu(t),
    t.flags |= 1,
    Le(e, t, n, o),
    t.child)
}
function yd(e, t, n, r, o) {
    if (He(n)) {
        var i = !0;
        cs(t)
    } else
        i = !1;
    if (Or(t, o),
    t.stateNode === null)
        Ki(e, t),
        lh(t, n, r),
        Ea(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = He(n) ? nr : Oe.current,
        u = Kr(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && fd(t, s, r, u),
        cn = !1;
        var p = t.memoizedState;
        s.state = p,
        ms(t, r, s, o),
        a = t.memoizedState,
        l !== r || p !== a || Ve.current || cn ? (typeof c == "function" && (Sa(t, n, c, r),
        a = t.memoizedState),
        (l = cn || dd(t, n, l, r, p, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        $p(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : ht(t.type, l),
        s.props = u,
        d = t.pendingProps,
        p = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = lt(a) : (a = He(n) ? nr : Oe.current,
        a = Kr(t, a));
        var f = n.getDerivedStateFromProps;
        (c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || p !== a) && fd(t, s, r, a),
        cn = !1,
        p = t.memoizedState,
        s.state = p,
        ms(t, r, s, o);
        var S = t.memoizedState;
        l !== d || p !== S || Ve.current || cn ? (typeof f == "function" && (Sa(t, n, f, r),
        S = t.memoizedState),
        (u = cn || dd(t, n, u, r, p, S, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        s.props = r,
        s.state = S,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ka(e, t, n, r, i, o)
}
function ka(e, t, n, r, o, i) {
    fh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && rd(t, n, !1),
        Kt(e, t, i);
    r = t.stateNode,
    Qy.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Gr(t, e.child, null, i),
    t.child = Gr(t, null, l, i)) : Le(e, t, l, i),
    t.memoizedState = r.state,
    o && rd(t, n, !0),
    t.child
}
function ph(e) {
    var t = e.stateNode;
    t.pendingContext ? nd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nd(e, t.context, !1),
    Mu(e, t.containerInfo)
}
function xd(e, t, n, r, o) {
    return Yr(),
    Pu(o),
    t.flags |= 256,
    Le(e, t, n, r),
    t.child
}
var Pa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Na(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function hh(e, t, n) {
    var r = t.pendingProps, o = ue.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
        return xa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Vs(s, r, 0, null),
        e = tr(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Na(n),
        t.memoizedState = Pa,
        e) : $u(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Ky(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Tn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = Tn(l, i) : (i = tr(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Na(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Pa,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Tn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function $u(e, t) {
    return t = Vs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ji(e, t, n, r) {
    return r !== null && Pu(r),
    Gr(t, e.child, null, n),
    e = $u(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ky(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Al(Error(j(422))),
        ji(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Vs({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = tr(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Gr(t, e.child, null, s),
        t.child.memoizedState = Na(s),
        t.memoizedState = Pa,
        i);
    if (!(t.mode & 1))
        return ji(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(j(419)),
        r = Al(i, r, void 0),
        ji(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Ue || l) {
        if (r = Ee,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Qt(e, o),
            St(r, e, o, -1))
        }
        return Qu(),
        r = Al(Error(j(421))),
        ji(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = s0.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ge = Cn(o.nextSibling),
    Xe = t,
    ae = !0,
    xt = null,
    e !== null && (rt[ot++] = $t,
    rt[ot++] = Bt,
    rt[ot++] = rr,
    $t = e.id,
    Bt = e.overflow,
    rr = t),
    t = $u(t, r.children),
    t.flags |= 4096,
    t)
}
function wd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    wa(e.return, t, n)
}
function Ll(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function mh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Le(e, t, r.children, n),
    r = ue.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && wd(e, n, t);
                else if (e.tag === 19)
                    wd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ue, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && gs(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Ll(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && gs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Ll(t, !0, n, null, i);
            break;
        case "together":
            Ll(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ki(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ir |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Tn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Tn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Yy(e, t, n) {
    switch (t.tag) {
    case 3:
        ph(t),
        Yr();
        break;
    case 5:
        Bp(t);
        break;
    case 1:
        He(t.type) && cs(t);
        break;
    case 4:
        Mu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ne(ps, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ue, ue.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? hh(e, t, n) : (ne(ue, ue.current & 1),
            e = Kt(e, t, n),
            e !== null ? e.sibling : null);
        ne(ue, ue.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return mh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ne(ue, ue.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        dh(e, t, n)
    }
    return Kt(e, t, n)
}
var gh, Ta, vh, yh;
gh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ta = function() {}
;
vh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Kn(Mt.current);
        var i = null;
        switch (n) {
        case "input":
            o = Xl(e, o),
            r = Xl(e, r),
            i = [];
            break;
        case "select":
            o = de({}, o, {
                value: void 0
            }),
            r = de({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Jl(e, o),
            r = Jl(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = as)
        }
        ta(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Lo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Lo.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
yh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function vo(e, t) {
    if (!ae)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Gy(e, t, n) {
    var r = t.pendingProps;
    switch (ku(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return je(t),
        null;
    case 1:
        return He(t.type) && us(),
        je(t),
        null;
    case 3:
        return r = t.stateNode,
        Xr(),
        se(Ve),
        se(Oe),
        Au(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        xt !== null && (Da(xt),
        xt = null))),
        Ta(e, t),
        je(t),
        null;
    case 5:
        Ou(t);
        var o = Kn(Ko.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            vh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return je(t),
                null
            }
            if (e = Kn(Mt.current),
            Ti(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[jt] = t,
                r[Wo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Co.length; o++)
                        oe(Co[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Rc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    _c(r, i),
                    oe("invalid", r)
                }
                ta(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Ni(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Ni(r.textContent, l, e),
                        o = ["children", "" + l]) : Lo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    xi(r),
                    jc(r, i, !0);
                    break;
                case "textarea":
                    xi(r),
                    Mc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = as)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[jt] = t,
                e[Wo] = r,
                gh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = na(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Co.length; o++)
                            oe(Co[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Rc(e, r),
                        o = Xl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = de({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        _c(e, r),
                        o = Jl(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ta(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Gf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Kf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Do(e, a) : typeof a == "number" && Do(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Lo.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && cu(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        xi(e),
                        jc(e, r, !1);
                        break;
                    case "textarea":
                        xi(e),
                        Mc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Rn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Rr(e, !!r.multiple, i, !1) : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = as)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return je(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            yh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Kn(Ko.current),
            Kn(Mt.current),
            Ti(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[jt] = t,
                (i = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ni(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ni(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[jt] = t,
                t.stateNode = r
        }
        return je(t),
        null;
    case 13:
        if (se(ue),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ae && Ge !== null && t.mode & 1 && !(t.flags & 128))
                Dp(),
                Yr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ti(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[jt] = t
                } else
                    Yr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                je(t),
                i = !1
            } else
                xt !== null && (Da(xt),
                xt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : Qu())),
        t.updateQueue !== null && (t.flags |= 4),
        je(t),
        null);
    case 4:
        return Xr(),
        Ta(e, t),
        e === null && Vo(t.stateNode.containerInfo),
        je(t),
        null;
    case 10:
        return Ru(t.type._context),
        je(t),
        null;
    case 17:
        return He(t.type) && us(),
        je(t),
        null;
    case 19:
        if (se(ue),
        i = t.memoizedState,
        i === null)
            return je(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                vo(i, !1);
            else {
                if (xe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = gs(e),
                        s !== null) {
                            for (t.flags |= 128,
                            vo(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ue, ue.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && me() > Zr && (t.flags |= 128,
                r = !0,
                vo(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = gs(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    vo(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
                        return je(t),
                        null
                } else
                    2 * me() - i.renderingStartTime > Zr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    vo(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = me(),
        t.sibling = null,
        n = ue.current,
        ne(ue, r ? n & 1 | 2 : n & 1),
        t) : (je(t),
        null);
    case 22:
    case 23:
        return Wu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ke & 1073741824 && (je(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Xy(e, t) {
    switch (ku(t),
    t.tag) {
    case 1:
        return He(t.type) && us(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Xr(),
        se(Ve),
        se(Oe),
        Au(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ou(t),
        null;
    case 13:
        if (se(ue),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Yr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return se(ue),
        null;
    case 4:
        return Xr(),
        null;
    case 10:
        return Ru(t.type._context),
        null;
    case 22:
    case 23:
        return Wu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _i = !1
  , Me = !1
  , qy = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function Nr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                he(e, t, r)
            }
        else
            n.current = null
}
function Ra(e, t, n) {
    try {
        n()
    } catch (r) {
        he(e, t, r)
    }
}
var Sd = !1;
function Zy(e, t) {
    if (fa = is,
    e = bp(),
    bu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , p = null;
                    t: for (; ; ) {
                        for (var f; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o),
                        d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (f = d.firstChild) !== null; )
                            p = d,
                            d = f;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (p === n && ++u === o && (l = s),
                            p === i && ++c === r && (a = s),
                            (f = d.nextSibling) !== null)
                                break;
                            d = p,
                            p = d.parentNode
                        }
                        d = f
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (pa = {
        focusedElem: e,
        selectionRange: n
    },
    is = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var y = S.memoizedProps
                                  , w = S.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ht(t.type, y), w);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (E) {
                    he(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return S = Sd,
    Sd = !1,
    S
}
function _o(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Ra(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Bs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ja(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function xh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    xh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[jt],
    delete t[Wo],
    delete t[ga],
    delete t[Ay],
    delete t[Ly])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function wh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ed(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || wh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function _a(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = as));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (_a(e, t, n),
        e = e.sibling; e !== null; )
            _a(e, t, n),
            e = e.sibling
}
function Ma(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ma(e, t, n),
        e = e.sibling; e !== null; )
            Ma(e, t, n),
            e = e.sibling
}
var be = null
  , yt = !1;
function on(e, t, n) {
    for (n = n.child; n !== null; )
        Sh(e, t, n),
        n = n.sibling
}
function Sh(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
        try {
            _t.onCommitFiberUnmount(Os, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Me || Nr(n, t);
    case 6:
        var r = be
          , o = yt;
        be = null,
        on(e, t, n),
        be = r,
        yt = o,
        be !== null && (yt ? (e = be,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
        break;
    case 18:
        be !== null && (yt ? (e = be,
        n = n.stateNode,
        e.nodeType === 8 ? Tl(e.parentNode, n) : e.nodeType === 1 && Tl(e, n),
        $o(e)) : Tl(be, n.stateNode));
        break;
    case 4:
        r = be,
        o = yt,
        be = n.stateNode.containerInfo,
        yt = !0,
        on(e, t, n),
        be = r,
        yt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Me && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Ra(n, t, s),
                o = o.next
            } while (o !== r)
        }
        on(e, t, n);
        break;
    case 1:
        if (!Me && (Nr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                he(n, t, l)
            }
        on(e, t, n);
        break;
    case 21:
        on(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null,
        on(e, t, n),
        Me = r) : on(e, t, n);
        break;
    default:
        on(e, t, n)
    }
}
function bd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new qy),
        t.forEach(function(r) {
            var o = l0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        be = l.stateNode,
                        yt = !1;
                        break e;
                    case 3:
                        be = l.stateNode.containerInfo,
                        yt = !0;
                        break e;
                    case 4:
                        be = l.stateNode.containerInfo,
                        yt = !0;
                        break e
                    }
                    l = l.return
                }
                if (be === null)
                    throw Error(j(160));
                Sh(i, s, o),
                be = null,
                yt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                he(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Eh(t, e),
            t = t.sibling
}
function Eh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ft(t, e),
        kt(e),
        r & 4) {
            try {
                _o(3, e, e.return),
                Bs(3, e)
            } catch (y) {
                he(e, e.return, y)
            }
            try {
                _o(5, e, e.return)
            } catch (y) {
                he(e, e.return, y)
            }
        }
        break;
    case 1:
        ft(t, e),
        kt(e),
        r & 512 && n !== null && Nr(n, n.return);
        break;
    case 5:
        if (ft(t, e),
        kt(e),
        r & 512 && n !== null && Nr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Do(o, "")
            } catch (y) {
                he(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Hf(o, i),
                    na(l, s);
                    var u = na(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , d = a[s + 1];
                        c === "style" ? Gf(o, d) : c === "dangerouslySetInnerHTML" ? Kf(o, d) : c === "children" ? Do(o, d) : cu(o, c, d, u)
                    }
                    switch (l) {
                    case "input":
                        ql(o, i);
                        break;
                    case "textarea":
                        Wf(o, i);
                        break;
                    case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var f = i.value;
                        f != null ? Rr(o, !!i.multiple, f, !1) : p !== !!i.multiple && (i.defaultValue != null ? Rr(o, !!i.multiple, i.defaultValue, !0) : Rr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Wo] = i
                } catch (y) {
                    he(e, e.return, y)
                }
        }
        break;
    case 6:
        if (ft(t, e),
        kt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (y) {
                he(e, e.return, y)
            }
        }
        break;
    case 3:
        if (ft(t, e),
        kt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                $o(t.containerInfo)
            } catch (y) {
                he(e, e.return, y)
            }
        break;
    case 4:
        ft(t, e),
        kt(e);
        break;
    case 13:
        ft(t, e),
        kt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Vu = me())),
        r & 4 && bd(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Me = (u = Me) || c,
        ft(t, e),
        Me = u) : ft(t, e),
        kt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (I = e,
                c = e.child; c !== null; ) {
                    for (d = I = c; I !== null; ) {
                        switch (p = I,
                        f = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            _o(4, p, p.return);
                            break;
                        case 1:
                            Nr(p, p.return);
                            var S = p.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (y) {
                                    he(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Nr(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                kd(d);
                                continue
                            }
                        }
                        f !== null ? (f.return = p,
                        I = f) : kd(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Yf("display", s))
                        } catch (y) {
                            he(e, e.return, y)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            he(e, e.return, y)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        ft(t, e),
        kt(e),
        r & 4 && bd(e);
        break;
    case 21:
        break;
    default:
        ft(t, e),
        kt(e)
    }
}
function kt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (wh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Do(o, ""),
                r.flags &= -33);
                var i = Ed(e);
                Ma(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Ed(e);
                _a(e, l, s);
                break;
            default:
                throw Error(j(161))
            }
        } catch (a) {
            he(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Jy(e, t, n) {
    I = e,
    bh(e)
}
function bh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var o = I
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || _i;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Me;
                l = _i;
                var u = Me;
                if (_i = s,
                (Me = a) && !u)
                    for (I = o; I !== null; )
                        s = I,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Pd(o) : a !== null ? (a.return = s,
                        I = a) : Pd(o);
                for (; i !== null; )
                    I = i,
                    bh(i),
                    i = i.sibling;
                I = o,
                _i = l,
                Me = u
            }
            Cd(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            I = i) : Cd(e)
    }
}
function Cd(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Me || Bs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Me)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && ad(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ad(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && $o(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                Me || t.flags & 512 && ja(t)
            } catch (p) {
                he(t, t.return, p)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function kd(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Pd(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Bs(4, t)
                } catch (a) {
                    he(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        he(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    ja(t)
                } catch (a) {
                    he(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ja(t)
                } catch (a) {
                    he(t, s, a)
                }
            }
        } catch (a) {
            he(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            I = l;
            break
        }
        I = t.return
    }
}
var e0 = Math.ceil
  , xs = Xt.ReactCurrentDispatcher
  , Bu = Xt.ReactCurrentOwner
  , st = Xt.ReactCurrentBatchConfig
  , q = 0
  , Ee = null
  , ve = null
  , Ce = 0
  , Ke = 0
  , Tr = zn(0)
  , xe = 0
  , qo = null
  , ir = 0
  , Us = 0
  , Uu = 0
  , Mo = null
  , Be = null
  , Vu = 0
  , Zr = 1 / 0
  , It = null
  , ws = !1
  , Oa = null
  , Pn = null
  , Mi = !1
  , xn = null
  , Ss = 0
  , Oo = 0
  , Aa = null
  , Yi = -1
  , Gi = 0;
function Ie() {
    return q & 6 ? me() : Yi !== -1 ? Yi : Yi = me()
}
function Nn(e) {
    return e.mode & 1 ? q & 2 && Ce !== 0 ? Ce & -Ce : Iy.transition !== null ? (Gi === 0 && (Gi = lp()),
    Gi) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : hp(e.type)),
    e) : 1
}
function St(e, t, n, r) {
    if (50 < Oo)
        throw Oo = 0,
        Aa = null,
        Error(j(185));
    ii(e, n, r),
    (!(q & 2) || e !== Ee) && (e === Ee && (!(q & 2) && (Us |= n),
    xe === 4 && fn(e, Ce)),
    We(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (Zr = me() + 500,
    zs && Fn()))
}
function We(e, t) {
    var n = e.callbackNode;
    Iv(e, t);
    var r = os(e, e === Ee ? Ce : 0);
    if (r === 0)
        n !== null && Lc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Lc(n),
        t === 1)
            e.tag === 0 ? Dy(Nd.bind(null, e)) : Op(Nd.bind(null, e)),
            My(function() {
                !(q & 6) && Fn()
            }),
            n = null;
        else {
            switch (ap(r)) {
            case 1:
                n = mu;
                break;
            case 4:
                n = ip;
                break;
            case 16:
                n = rs;
                break;
            case 536870912:
                n = sp;
                break;
            default:
                n = rs
            }
            n = _h(n, Ch.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ch(e, t) {
    if (Yi = -1,
    Gi = 0,
    q & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Ar() && e.callbackNode !== n)
        return null;
    var r = os(e, e === Ee ? Ce : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Es(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = Ph();
        (Ee !== e || Ce !== t) && (It = null,
        Zr = me() + 500,
        er(e, t));
        do
            try {
                r0();
                break
            } catch (l) {
                kh(e, l)
            }
        while (!0);
        Tu(),
        xs.current = i,
        q = o,
        ve !== null ? t = 0 : (Ee = null,
        Ce = 0,
        t = xe)
    }
    if (t !== 0) {
        if (t === 2 && (o = la(e),
        o !== 0 && (r = o,
        t = La(e, o))),
        t === 1)
            throw n = qo,
            er(e, 0),
            fn(e, r),
            We(e, me()),
            n;
        if (t === 6)
            fn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !t0(o) && (t = Es(e, r),
            t === 2 && (i = la(e),
            i !== 0 && (r = i,
            t = La(e, i))),
            t === 1))
                throw n = qo,
                er(e, 0),
                fn(e, r),
                We(e, me()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Hn(e, Be, It);
                break;
            case 3:
                if (fn(e, r),
                (r & 130023424) === r && (t = Vu + 500 - me(),
                10 < t)) {
                    if (os(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ie(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = ma(Hn.bind(null, e, Be, It), t);
                    break
                }
                Hn(e, Be, It);
                break;
            case 4:
                if (fn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - wt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = me() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * e0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ma(Hn.bind(null, e, Be, It), r);
                    break
                }
                Hn(e, Be, It);
                break;
            case 5:
                Hn(e, Be, It);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return We(e, me()),
    e.callbackNode === n ? Ch.bind(null, e) : null
}
function La(e, t) {
    var n = Mo;
    return e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    e = Es(e, t),
    e !== 2 && (t = Be,
    Be = n,
    t !== null && Da(t)),
    e
}
function Da(e) {
    Be === null ? Be = e : Be.push.apply(Be, e)
}
function t0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Et(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function fn(e, t) {
    for (t &= ~Uu,
    t &= ~Us,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - wt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Nd(e) {
    if (q & 6)
        throw Error(j(327));
    Ar();
    var t = os(e, 0);
    if (!(t & 1))
        return We(e, me()),
        null;
    var n = Es(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = la(e);
        r !== 0 && (t = r,
        n = La(e, r))
    }
    if (n === 1)
        throw n = qo,
        er(e, 0),
        fn(e, t),
        We(e, me()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Hn(e, Be, It),
    We(e, me()),
    null
}
function Hu(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (Zr = me() + 500,
        zs && Fn())
    }
}
function sr(e) {
    xn !== null && xn.tag === 0 && !(q & 6) && Ar();
    var t = q;
    q |= 1;
    var n = st.transition
      , r = ee;
    try {
        if (st.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = r,
        st.transition = n,
        q = t,
        !(q & 6) && Fn()
    }
}
function Wu() {
    Ke = Tr.current,
    se(Tr)
}
function er(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    _y(n)),
    ve !== null)
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch (ku(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && us();
                break;
            case 3:
                Xr(),
                se(Ve),
                se(Oe),
                Au();
                break;
            case 5:
                Ou(r);
                break;
            case 4:
                Xr();
                break;
            case 13:
                se(ue);
                break;
            case 19:
                se(ue);
                break;
            case 10:
                Ru(r.type._context);
                break;
            case 22:
            case 23:
                Wu()
            }
            n = n.return
        }
    if (Ee = e,
    ve = e = Tn(e.current, null),
    Ce = Ke = t,
    xe = 0,
    qo = null,
    Uu = Us = ir = 0,
    Be = Mo = null,
    Qn !== null) {
        for (t = 0; t < Qn.length; t++)
            if (n = Qn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Qn = null
    }
    return e
}
function kh(e, t) {
    do {
        var n = ve;
        try {
            if (Tu(),
            Wi.current = ys,
            vs) {
                for (var r = ce.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                vs = !1
            }
            if (or = 0,
            Se = ye = ce = null,
            jo = !1,
            Yo = 0,
            Bu.current = null,
            n === null || n.return === null) {
                xe = 1,
                qo = t,
                ve = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = Ce,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue,
                        c.memoizedState = p.memoizedState,
                        c.lanes = p.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var f = hd(s);
                    if (f !== null) {
                        f.flags &= -257,
                        md(f, s, l, i, t),
                        f.mode & 1 && pd(i, u, t),
                        t = f,
                        a = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var y = new Set;
                            y.add(a),
                            t.updateQueue = y
                        } else
                            S.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            pd(i, u, t),
                            Qu();
                            break e
                        }
                        a = Error(j(426))
                    }
                } else if (ae && l.mode & 1) {
                    var w = hd(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        md(w, s, l, i, t),
                        Pu(qr(a, l));
                        break e
                    }
                }
                i = a = qr(a, l),
                xe !== 4 && (xe = 2),
                Mo === null ? Mo = [i] : Mo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = ah(i, a, t);
                        ld(i, m);
                        break e;
                    case 1:
                        l = a;
                        var h = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Pn === null || !Pn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var E = uh(i, l, t);
                            ld(i, E);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Th(n)
        } catch (b) {
            t = b,
            ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Ph() {
    var e = xs.current;
    return xs.current = ys,
    e === null ? ys : e
}
function Qu() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ee === null || !(ir & 268435455) && !(Us & 268435455) || fn(Ee, Ce)
}
function Es(e, t) {
    var n = q;
    q |= 2;
    var r = Ph();
    (Ee !== e || Ce !== t) && (It = null,
    er(e, t));
    do
        try {
            n0();
            break
        } catch (o) {
            kh(e, o)
        }
    while (!0);
    if (Tu(),
    q = n,
    xs.current = r,
    ve !== null)
        throw Error(j(261));
    return Ee = null,
    Ce = 0,
    xe
}
function n0() {
    for (; ve !== null; )
        Nh(ve)
}
function r0() {
    for (; ve !== null && !Tv(); )
        Nh(ve)
}
function Nh(e) {
    var t = jh(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps,
    t === null ? Th(e) : ve = t,
    Bu.current = null
}
function Th(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Xy(n, t),
            n !== null) {
                n.flags &= 32767,
                ve = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                xe = 6,
                ve = null;
                return
            }
        } else if (n = Gy(n, t, Ke),
        n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    xe === 0 && (xe = 5)
}
function Hn(e, t, n) {
    var r = ee
      , o = st.transition;
    try {
        st.transition = null,
        ee = 1,
        o0(e, t, n, r)
    } finally {
        st.transition = o,
        ee = r
    }
    return null
}
function o0(e, t, n, r) {
    do
        Ar();
    while (xn !== null);
    if (q & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (zv(e, i),
    e === Ee && (ve = Ee = null,
    Ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Mi || (Mi = !0,
    _h(rs, function() {
        return Ar(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = st.transition,
        st.transition = null;
        var s = ee;
        ee = 1;
        var l = q;
        q |= 4,
        Bu.current = null,
        Zy(e, n),
        Eh(n, e),
        Cy(pa),
        is = !!fa,
        pa = fa = null,
        e.current = n,
        Jy(n),
        Rv(),
        q = l,
        ee = s,
        st.transition = i
    } else
        e.current = n;
    if (Mi && (Mi = !1,
    xn = e,
    Ss = o),
    i = e.pendingLanes,
    i === 0 && (Pn = null),
    Mv(n.stateNode),
    We(e, me()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ws)
        throw ws = !1,
        e = Oa,
        Oa = null,
        e;
    return Ss & 1 && e.tag !== 0 && Ar(),
    i = e.pendingLanes,
    i & 1 ? e === Aa ? Oo++ : (Oo = 0,
    Aa = e) : Oo = 0,
    Fn(),
    null
}
function Ar() {
    if (xn !== null) {
        var e = ap(Ss)
          , t = st.transition
          , n = ee;
        try {
            if (st.transition = null,
            ee = 16 > e ? 16 : e,
            xn === null)
                var r = !1;
            else {
                if (e = xn,
                xn = null,
                Ss = 0,
                q & 6)
                    throw Error(j(331));
                var o = q;
                for (q |= 4,
                I = e.current; I !== null; ) {
                    var i = I
                      , s = i.child;
                    if (I.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (I = u; I !== null; ) {
                                    var c = I;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _o(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        I = d;
                                    else
                                        for (; I !== null; ) {
                                            c = I;
                                            var p = c.sibling
                                              , f = c.return;
                                            if (xh(c),
                                            c === u) {
                                                I = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = f,
                                                I = p;
                                                break
                                            }
                                            I = f
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var y = S.child;
                                if (y !== null) {
                                    S.child = null;
                                    do {
                                        var w = y.sibling;
                                        y.sibling = null,
                                        y = w
                                    } while (y !== null)
                                }
                            }
                            I = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        I = s;
                    else
                        e: for (; I !== null; ) {
                            if (i = I,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    _o(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                I = m;
                                break e
                            }
                            I = i.return
                        }
                }
                var h = e.current;
                for (I = h; I !== null; ) {
                    s = I;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        I = v;
                    else
                        e: for (s = h; I !== null; ) {
                            if (l = I,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bs(9, l)
                                    }
                                } catch (b) {
                                    he(l, l.return, b)
                                }
                            if (l === s) {
                                I = null;
                                break e
                            }
                            var E = l.sibling;
                            if (E !== null) {
                                E.return = l.return,
                                I = E;
                                break e
                            }
                            I = l.return
                        }
                }
                if (q = o,
                Fn(),
                _t && typeof _t.onPostCommitFiberRoot == "function")
                    try {
                        _t.onPostCommitFiberRoot(Os, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n,
            st.transition = t
        }
    }
    return !1
}
function Td(e, t, n) {
    t = qr(n, t),
    t = ah(e, t, 1),
    e = kn(e, t, 1),
    t = Ie(),
    e !== null && (ii(e, 1, t),
    We(e, t))
}
function he(e, t, n) {
    if (e.tag === 3)
        Td(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Td(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pn === null || !Pn.has(r))) {
                    e = qr(n, e),
                    e = uh(t, e, 1),
                    t = kn(t, e, 1),
                    e = Ie(),
                    t !== null && (ii(t, 1, e),
                    We(t, e));
                    break
                }
            }
            t = t.return
        }
}
function i0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ie(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ee === e && (Ce & n) === n && (xe === 4 || xe === 3 && (Ce & 130023424) === Ce && 500 > me() - Vu ? er(e, 0) : Uu |= n),
    We(e, t)
}
function Rh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ei,
    Ei <<= 1,
    !(Ei & 130023424) && (Ei = 4194304)) : t = 1);
    var n = Ie();
    e = Qt(e, t),
    e !== null && (ii(e, t, n),
    We(e, n))
}
function s0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Rh(e, n)
}
function l0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    Rh(e, n)
}
var jh;
jh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ve.current)
            Ue = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ue = !1,
                Yy(e, t, n);
            Ue = !!(e.flags & 131072)
        }
    else
        Ue = !1,
        ae && t.flags & 1048576 && Ap(t, fs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ki(e, t),
        e = t.pendingProps;
        var o = Kr(t, Oe.current);
        Or(t, n),
        o = Du(null, t, r, e, o, n);
        var i = Iu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        He(r) ? (i = !0,
        cs(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        _u(t),
        o.updater = $s,
        t.stateNode = o,
        o._reactInternals = t,
        Ea(t, r, e, n),
        t = ka(null, t, r, !0, i, n)) : (t.tag = 0,
        ae && i && Cu(t),
        Le(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ki(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = u0(r),
            e = ht(r, e),
            o) {
            case 0:
                t = Ca(null, t, r, e, n);
                break e;
            case 1:
                t = yd(null, t, r, e, n);
                break e;
            case 11:
                t = gd(null, t, r, e, n);
                break e;
            case 14:
                t = vd(null, t, r, ht(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        Ca(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        yd(e, t, r, o, n);
    case 3:
        e: {
            if (ph(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            $p(e, t),
            ms(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = qr(Error(j(423)), t),
                    t = xd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = qr(Error(j(424)), t),
                    t = xd(e, t, r, n, o);
                    break e
                } else
                    for (Ge = Cn(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    ae = !0,
                    xt = null,
                    n = zp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Yr(),
                r === o) {
                    t = Kt(e, t, n);
                    break e
                }
                Le(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Bp(t),
        e === null && xa(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        ha(r, o) ? s = null : i !== null && ha(r, i) && (t.flags |= 32),
        fh(e, t),
        Le(e, t, s, n),
        t.child;
    case 6:
        return e === null && xa(t),
        null;
    case 13:
        return hh(e, t, n);
    case 4:
        return Mu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Gr(t, null, r, n) : Le(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        gd(e, t, r, o, n);
    case 7:
        return Le(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Le(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Le(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ne(ps, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (Et(i.value, s)) {
                    if (i.children === o.children && !Ve.current) {
                        t = Kt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Ut(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    wa(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(j(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            wa(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Le(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Or(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        Le(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ht(r, t.pendingProps),
        o = ht(r.type, o),
        vd(e, t, r, o, n);
    case 15:
        return ch(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ht(r, o),
        Ki(e, t),
        t.tag = 1,
        He(r) ? (e = !0,
        cs(t)) : e = !1,
        Or(t, n),
        lh(t, r, o),
        Ea(t, r, o, n),
        ka(null, t, r, !0, e, n);
    case 19:
        return mh(e, t, n);
    case 22:
        return dh(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function _h(e, t) {
    return op(e, t)
}
function a0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function it(e, t, n, r) {
    return new a0(e,t,n,r)
}
function Ku(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function u0(e) {
    if (typeof e == "function")
        return Ku(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === fu)
            return 11;
        if (e === pu)
            return 14
    }
    return 2
}
function Tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Xi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Ku(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case yr:
            return tr(n.children, o, i, t);
        case du:
            s = 8,
            o |= 8;
            break;
        case Ql:
            return e = it(12, n, t, o | 2),
            e.elementType = Ql,
            e.lanes = i,
            e;
        case Kl:
            return e = it(13, n, t, o),
            e.elementType = Kl,
            e.lanes = i,
            e;
        case Yl:
            return e = it(19, n, t, o),
            e.elementType = Yl,
            e.lanes = i,
            e;
        case Bf:
            return Vs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ff:
                    s = 10;
                    break e;
                case $f:
                    s = 9;
                    break e;
                case fu:
                    s = 11;
                    break e;
                case pu:
                    s = 14;
                    break e;
                case un:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = it(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function tr(e, t, n, r) {
    return e = it(7, e, r, t),
    e.lanes = n,
    e
}
function Vs(e, t, n, r) {
    return e = it(22, e, r, t),
    e.elementType = Bf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Dl(e, t, n) {
    return e = it(6, e, null, t),
    e.lanes = n,
    e
}
function Il(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function c0(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = vl(0),
    this.expirationTimes = vl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = vl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Yu(e, t, n, r, o, i, s, l, a) {
    return e = new c0(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = it(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    _u(i),
    e
}
function d0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: vr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Mh(e) {
    if (!e)
        return jn;
    e = e._reactInternals;
    e: {
        if (ur(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (He(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (He(n))
            return Mp(e, n, t)
    }
    return t
}
function Oh(e, t, n, r, o, i, s, l, a) {
    return e = Yu(n, r, !0, e, o, i, s, l, a),
    e.context = Mh(null),
    n = e.current,
    r = Ie(),
    o = Nn(n),
    i = Ut(r, o),
    i.callback = t ?? null,
    kn(n, i, o),
    e.current.lanes = o,
    ii(e, o, r),
    We(e, r),
    e
}
function Hs(e, t, n, r) {
    var o = t.current
      , i = Ie()
      , s = Nn(o);
    return n = Mh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ut(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = kn(o, t, s),
    e !== null && (St(e, o, s, i),
    Hi(e, o, s)),
    s
}
function bs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Rd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Gu(e, t) {
    Rd(e, t),
    (e = e.alternate) && Rd(e, t)
}
function f0() {
    return null
}
var Ah = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Xu(e) {
    this._internalRoot = e
}
Ws.prototype.render = Xu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Hs(e, t, null, null)
}
;
Ws.prototype.unmount = Xu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sr(function() {
            Hs(null, e, null, null)
        }),
        t[Wt] = null
    }
}
;
function Ws(e) {
    this._internalRoot = e
}
Ws.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = dp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++)
            ;
        dn.splice(n, 0, e),
        n === 0 && pp(e)
    }
}
;
function qu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Qs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function jd() {}
function p0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = bs(s);
                i.call(u)
            }
        }
        var s = Oh(t, r, e, 0, null, !1, !1, "", jd);
        return e._reactRootContainer = s,
        e[Wt] = s.current,
        Vo(e.nodeType === 8 ? e.parentNode : e),
        sr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = bs(a);
            l.call(u)
        }
    }
    var a = Yu(e, 0, !1, null, null, !1, !1, "", jd);
    return e._reactRootContainer = a,
    e[Wt] = a.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    sr(function() {
        Hs(t, a, n, r)
    }),
    a
}
function Ks(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = bs(s);
                l.call(a)
            }
        }
        Hs(t, s, e, o)
    } else
        s = p0(n, t, e, o, r);
    return bs(s)
}
up = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = bo(t.pendingLanes);
            n !== 0 && (gu(t, n | 1),
            We(t, me()),
            !(q & 6) && (Zr = me() + 500,
            Fn()))
        }
        break;
    case 13:
        sr(function() {
            var r = Qt(e, 1);
            if (r !== null) {
                var o = Ie();
                St(r, e, 1, o)
            }
        }),
        Gu(e, 1)
    }
}
;
vu = function(e) {
    if (e.tag === 13) {
        var t = Qt(e, 134217728);
        if (t !== null) {
            var n = Ie();
            St(t, e, 134217728, n)
        }
        Gu(e, 134217728)
    }
}
;
cp = function(e) {
    if (e.tag === 13) {
        var t = Nn(e)
          , n = Qt(e, t);
        if (n !== null) {
            var r = Ie();
            St(n, e, t, r)
        }
        Gu(e, t)
    }
}
;
dp = function() {
    return ee
}
;
fp = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
oa = function(e, t, n) {
    switch (t) {
    case "input":
        if (ql(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Is(r);
                    if (!o)
                        throw Error(j(90));
                    Vf(r),
                    ql(r, o)
                }
            }
        }
        break;
    case "textarea":
        Wf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Rr(e, !!n.multiple, t, !1)
    }
}
;
Zf = Hu;
Jf = sr;
var h0 = {
    usingClientEntryPoint: !1,
    Events: [li, Er, Is, Xf, qf, Hu]
}
  , yo = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , m0 = {
    bundleType: yo.bundleType,
    version: yo.version,
    rendererPackageName: yo.rendererPackageName,
    rendererConfig: yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = np(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: yo.findFiberByHostInstance || f0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Oi.isDisabled && Oi.supportsFiber)
        try {
            Os = Oi.inject(m0),
            _t = Oi
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0;
Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qu(t))
        throw Error(j(200));
    return d0(e, t, null, n)
}
;
Je.createRoot = function(e, t) {
    if (!qu(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = Ah;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Yu(e, 1, !1, null, null, n, !1, r, o),
    e[Wt] = t.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    new Xu(t)
}
;
Je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = np(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Je.flushSync = function(e) {
    return sr(e)
}
;
Je.hydrate = function(e, t, n) {
    if (!Qs(t))
        throw Error(j(200));
    return Ks(null, e, t, !0, n)
}
;
Je.hydrateRoot = function(e, t, n) {
    if (!qu(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Ah;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Oh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Wt] = t.current,
    Vo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ws(t)
}
;
Je.render = function(e, t, n) {
    if (!Qs(t))
        throw Error(j(200));
    return Ks(null, e, t, !1, n)
}
;
Je.unmountComponentAtNode = function(e) {
    if (!Qs(e))
        throw Error(j(40));
    return e._reactRootContainer ? (sr(function() {
        Ks(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Wt] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = Hu;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Qs(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Ks(e, t, n, !1, r)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function Lh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lh)
        } catch (e) {
            console.error(e)
        }
}
Lh(),
Lf.exports = Je;
var ui = Lf.exports;
const Dh = Ef(ui);
var Ih, _d = ui;
Ih = _d.createRoot,
_d.hydrateRoot;
const g0 = 1
  , v0 = 1e6;
let zl = 0;
function y0() {
    return zl = (zl + 1) % Number.MAX_SAFE_INTEGER,
    zl.toString()
}
const Fl = new Map
  , Md = e => {
    if (Fl.has(e))
        return;
    const t = setTimeout( () => {
        Fl.delete(e),
        Ao({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , v0);
    Fl.set(e, t)
}
  , x0 = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, g0)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Md(n) : e.toasts.forEach(r => {
                Md(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , qi = [];
let Zi = {
    toasts: []
};
function Ao(e) {
    Zi = x0(Zi, e),
    qi.forEach(t => {
        t(Zi)
    }
    )
}
function w0({...e}) {
    const t = y0()
      , n = o => Ao({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Ao({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Ao({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function S0() {
    const [e,t] = x.useState(Zi);
    return x.useEffect( () => (qi.push(t),
    () => {
        const n = qi.indexOf(t);
        n > -1 && qi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: w0,
        dismiss: n => Ao({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ie(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Od(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function zh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Od(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Od(e[o], null)
                }
            }
    }
}
function Pe(...e) {
    return x.useCallback(zh(...e), e)
}
function ci(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = d => {
            var m;
            const {scope: p, children: f, ...S} = d
              , y = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[a]) || l
              , w = x.useMemo( () => S, Object.values(S));
            return g.jsx(y.Provider, {
                value: w,
                children: f
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(d, p) {
            var y;
            const f = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[a]) || l
              , S = x.useContext(f);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, E0(o, ...t)]
}
function E0(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const d = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...d
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Cs(e) {
    const t = C0(e)
      , n = x.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , l = x.Children.toArray(i)
          , a = l.find(P0);
        if (a) {
            const u = a.props.children
              , c = l.map(d => d === a ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
            return g.jsx(t, {
                ...s,
                ref: o,
                children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null
            })
        }
        return g.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var b0 = Cs("Slot");
function C0(e) {
    const t = x.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (x.isValidElement(o)) {
            const s = T0(o)
              , l = N0(i, o.props);
            return o.type !== x.Fragment && (l.ref = r ? zh(r, s) : s),
            x.cloneElement(o, l)
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Fh = Symbol("radix.slottable");
function k0(e) {
    const t = ({children: n}) => g.jsx(g.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Fh,
    t
}
function P0(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Fh
}
function N0(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const a = i(...l);
            return o(...l),
            a
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function T0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function $h(e) {
    const t = e + "CollectionProvider"
      , [n,r] = ci(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: w, children: m} = y
          , h = _.useRef(null)
          , v = _.useRef(new Map).current;
        return g.jsx(o, {
            scope: w,
            itemMap: v,
            collectionRef: h,
            children: m
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = Cs(l)
      , u = _.forwardRef( (y, w) => {
        const {scope: m, children: h} = y
          , v = i(l, m)
          , E = Pe(w, v.collectionRef);
        return g.jsx(a, {
            ref: E,
            children: h
        })
    }
    );
    u.displayName = l;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , p = Cs(c)
      , f = _.forwardRef( (y, w) => {
        const {scope: m, children: h, ...v} = y
          , E = _.useRef(null)
          , b = Pe(w, E)
          , C = i(c, m);
        return _.useEffect( () => (C.itemMap.set(E, {
            ref: E,
            ...v
        }),
        () => void C.itemMap.delete(E))),
        g.jsx(p, {
            [d]: "",
            ref: b,
            children: h
        })
    }
    );
    f.displayName = c;
    function S(y) {
        const w = i(e + "CollectionConsumer", y);
        return _.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const v = Array.from(h.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (C, k) => v.indexOf(C.ref.current) - v.indexOf(k.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: f
    }, S, r]
}
var R0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , we = R0.reduce( (e, t) => {
    const n = Cs(`Primitive.${t}`)
      , r = x.forwardRef( (o, i) => {
        const {asChild: s, ...l} = o
          , a = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        g.jsx(a, {
            ...l,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Bh(e, t) {
    e && ui.flushSync( () => e.dispatchEvent(t))
}
function _n(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function j0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _n(e);
    x.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var _0 = "DismissableLayer", Ia = "dismissableLayer.update", M0 = "dismissableLayer.pointerDownOutside", O0 = "dismissableLayer.focusOutside", Ad, Uh = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Zu = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = x.useContext(Uh)
      , [c,d] = x.useState(null)
      , p = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,f] = x.useState({})
      , S = Pe(t, k => d(k))
      , y = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = y.indexOf(w)
      , h = c ? y.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , E = h >= m
      , b = L0(k => {
        const R = k.target
          , O = [...u.branches].some(M => M.contains(R));
        !E || O || (o == null || o(k),
        s == null || s(k),
        k.defaultPrevented || l == null || l())
    }
    , p)
      , C = D0(k => {
        const R = k.target;
        [...u.branches].some(M => M.contains(R)) || (i == null || i(k),
        s == null || s(k),
        k.defaultPrevented || l == null || l())
    }
    , p);
    return j0(k => {
        h === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && l && (k.preventDefault(),
        l()))
    }
    , p),
    x.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ad = p.body.style.pointerEvents,
            p.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Ld(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ad)
            }
    }
    , [c, p, n, u]),
    x.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Ld())
    }
    , [c, u]),
    x.useEffect( () => {
        const k = () => f({});
        return document.addEventListener(Ia, k),
        () => document.removeEventListener(Ia, k)
    }
    , []),
    g.jsx(we.div, {
        ...a,
        ref: S,
        style: {
            pointerEvents: v ? E ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ie(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ie(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ie(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
Zu.displayName = _0;
var A0 = "DismissableLayerBranch"
  , Vh = x.forwardRef( (e, t) => {
    const n = x.useContext(Uh)
      , r = x.useRef(null)
      , o = Pe(t, r);
    return x.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    g.jsx(we.div, {
        ...e,
        ref: o
    })
}
);
Vh.displayName = A0;
function L0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _n(e)
      , r = x.useRef(!1)
      , o = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    Hh(M0, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function D0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _n(e)
      , r = x.useRef(!1);
    return x.useEffect( () => {
        const o = i => {
            i.target && !r.current && Hh(O0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Ld() {
    const e = new CustomEvent(Ia);
    document.dispatchEvent(e)
}
function Hh(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Bh(o, i) : o.dispatchEvent(i)
}
var I0 = Zu
  , z0 = Vh
  , Mn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , F0 = "Portal"
  , Wh = x.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = x.useState(!1);
    Mn( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? Dh.createPortal(g.jsx(we.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Wh.displayName = F0;
function $0(e, t) {
    return x.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Ju = e => {
    const {present: t, children: n} = e
      , r = B0(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n)
      , i = Pe(r.ref, U0(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
}
;
Ju.displayName = "Presence";
function B0(e) {
    const [t,n] = x.useState()
      , r = x.useRef(null)
      , o = x.useRef(e)
      , i = x.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = $0(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect( () => {
        const u = Ai(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    Mn( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const p = i.current
              , f = Ai(u);
            e ? a("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && p !== f ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    Mn( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = f => {
                const y = Ai(r.current).includes(f.animationName);
                if (f.target === t && y && (a("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , p = f => {
                f.target === t && (i.current = Ai(r.current))
            }
            ;
            return t.addEventListener("animationstart", p),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", p),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: x.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Ai(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function U0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var V0 = Of[" useInsertionEffect ".trim().toString()] || Mn;
function Qh({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = H0({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , a = l ? e : o;
    {
        const c = x.useRef(e !== void 0);
        x.useEffect( () => {
            const d = c.current;
            d !== l && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = l
        }
        , [l, r])
    }
    const u = x.useCallback(c => {
        var d;
        if (l) {
            const p = W0(c) ? c(e) : c;
            p !== e && ((d = s.current) == null || d.call(s, p))
        } else
            i(c)
    }
    , [l, e, i, s]);
    return [a, u]
}
function H0({defaultProp: e, onChange: t}) {
    const [n,r] = x.useState(e)
      , o = x.useRef(n)
      , i = x.useRef(t);
    return V0( () => {
        i.current = t
    }
    , [t]),
    x.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function W0(e) {
    return typeof e == "function"
}
var Q0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , K0 = "VisuallyHidden"
  , Ys = x.forwardRef( (e, t) => g.jsx(we.span, {
    ...e,
    ref: t,
    style: {
        ...Q0,
        ...e.style
    }
}));
Ys.displayName = K0;
var Y0 = Ys
  , ec = "ToastProvider"
  , [tc,G0,X0] = $h("Toast")
  , [Kh,PE] = ci("Toast", [X0])
  , [q0,Gs] = Kh(ec)
  , Yh = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = x.useState(null)
      , [u,c] = x.useState(0)
      , d = x.useRef(!1)
      , p = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${ec}\`. Expected non-empty \`string\`.`),
    g.jsx(tc.Provider, {
        scope: t,
        children: g.jsx(q0, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: x.useCallback( () => c(f => f + 1), []),
            onToastRemove: x.useCallback( () => c(f => f - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: p,
            children: s
        })
    })
}
;
Yh.displayName = ec;
var Gh = "ToastViewport"
  , Z0 = ["F8"]
  , za = "toast.viewportPause"
  , Fa = "toast.viewportResume"
  , Xh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Z0, label: o="Notifications ({hotkey})", ...i} = e
      , s = Gs(Gh, n)
      , l = G0(n)
      , a = x.useRef(null)
      , u = x.useRef(null)
      , c = x.useRef(null)
      , d = x.useRef(null)
      , p = Pe(t, d, s.onViewportChange)
      , f = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = s.toastCount > 0;
    x.useEffect( () => {
        const w = m => {
            var v;
            r.length !== 0 && r.every(E => m[E] || m.code === E) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    x.useEffect( () => {
        const w = a.current
          , m = d.current;
        if (S && w && m) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const C = new CustomEvent(za);
                    m.dispatchEvent(C),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const C = new CustomEvent(Fa);
                    m.dispatchEvent(C),
                    s.isClosePausedRef.current = !1
                }
            }
              , E = C => {
                !w.contains(C.relatedTarget) && v()
            }
              , b = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", E),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", b),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", E),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [S, s.isClosePausedRef]);
    const y = x.useCallback( ({tabbingDirection: w}) => {
        const h = l().map(v => {
            const E = v.ref.current
              , b = [E, ...d1(E)];
            return w === "forwards" ? b : b.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return x.useEffect( () => {
        const w = d.current;
        if (w) {
            const m = h => {
                var b, C, k;
                const v = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !v) {
                    const R = document.activeElement
                      , O = h.shiftKey;
                    if (h.target === w && O) {
                        (b = u.current) == null || b.focus();
                        return
                    }
                    const L = y({
                        tabbingDirection: O ? "backwards" : "forwards"
                    })
                      , U = L.findIndex(A => A === R);
                    $l(L.slice(U + 1)) ? h.preventDefault() : O ? (C = u.current) == null || C.focus() : (k = c.current) == null || k.focus()
                }
            }
            ;
            return w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
        }
    }
    , [l, y]),
    g.jsxs(z0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", f),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && g.jsx($a, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "forwards"
                });
                $l(w)
            }
        }), g.jsx(tc.Slot, {
            scope: n,
            children: g.jsx(we.ol, {
                tabIndex: -1,
                ...i,
                ref: p
            })
        }), S && g.jsx($a, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "backwards"
                });
                $l(w)
            }
        })]
    })
}
);
Xh.displayName = Gh;
var qh = "ToastFocusProxy"
  , $a = x.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Gs(qh, n);
    return g.jsx(Ys, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
$a.displayName = qh;
var di = "Toast"
  , J0 = "toast.swipeStart"
  , e1 = "toast.swipeMove"
  , t1 = "toast.swipeCancel"
  , n1 = "toast.swipeEnd"
  , Zh = x.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l,a] = Qh({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: di
    });
    return g.jsx(Ju, {
        present: n || l,
        children: g.jsx(i1, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: _n(e.onPause),
            onResume: _n(e.onResume),
            onSwipeStart: ie(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ie(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: ie(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ie(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                a(!1)
            }
            )
        })
    })
}
);
Zh.displayName = di;
var [r1,o1] = Kh(di, {
    onClose() {}
})
  , i1 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: p, onSwipeEnd: f, ...S} = e
      , y = Gs(di, n)
      , [w,m] = x.useState(null)
      , h = Pe(t, A => m(A))
      , v = x.useRef(null)
      , E = x.useRef(null)
      , b = o || y.duration
      , C = x.useRef(0)
      , k = x.useRef(b)
      , R = x.useRef(0)
      , {onToastAdd: O, onToastRemove: M} = y
      , z = _n( () => {
        var K;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((K = y.viewport) == null || K.focus()),
        s()
    }
    )
      , L = x.useCallback(A => {
        !A || A === 1 / 0 || (window.clearTimeout(R.current),
        C.current = new Date().getTime(),
        R.current = window.setTimeout(z, A))
    }
    , [z]);
    x.useEffect( () => {
        const A = y.viewport;
        if (A) {
            const K = () => {
                L(k.current),
                u == null || u()
            }
              , $ = () => {
                const B = new Date().getTime() - C.current;
                k.current = k.current - B,
                window.clearTimeout(R.current),
                a == null || a()
            }
            ;
            return A.addEventListener(za, $),
            A.addEventListener(Fa, K),
            () => {
                A.removeEventListener(za, $),
                A.removeEventListener(Fa, K)
            }
        }
    }
    , [y.viewport, b, a, u, L]),
    x.useEffect( () => {
        i && !y.isClosePausedRef.current && L(b)
    }
    , [i, b, y.isClosePausedRef, L]),
    x.useEffect( () => (O(),
    () => M()), [O, M]);
    const U = x.useMemo( () => w ? im(w) : null, [w]);
    return y.viewport ? g.jsxs(g.Fragment, {
        children: [U && g.jsx(s1, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), g.jsx(r1, {
            scope: n,
            onClose: z,
            children: ui.createPortal(g.jsx(tc.ItemSlot, {
                scope: n,
                children: g.jsx(I0, {
                    asChild: !0,
                    onEscapeKeyDown: ie(l, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || z(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: g.jsx(we.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...S,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ie(e.onKeyDown, A => {
                            A.key === "Escape" && (l == null || l(A.nativeEvent),
                            A.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: ie(e.onPointerDown, A => {
                            A.button === 0 && (v.current = {
                                x: A.clientX,
                                y: A.clientY
                            })
                        }
                        ),
                        onPointerMove: ie(e.onPointerMove, A => {
                            if (!v.current)
                                return;
                            const K = A.clientX - v.current.x
                              , $ = A.clientY - v.current.y
                              , B = !!E.current
                              , P = ["left", "right"].includes(y.swipeDirection)
                              , T = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , D = P ? T(0, K) : 0
                              , W = P ? 0 : T(0, $)
                              , F = A.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: D,
                                y: W
                            }
                              , X = {
                                originalEvent: A,
                                delta: Y
                            };
                            B ? (E.current = Y,
                            Li(e1, d, X, {
                                discrete: !1
                            })) : Dd(Y, y.swipeDirection, F) ? (E.current = Y,
                            Li(J0, c, X, {
                                discrete: !1
                            }),
                            A.target.setPointerCapture(A.pointerId)) : (Math.abs(K) > F || Math.abs($) > F) && (v.current = null)
                        }
                        ),
                        onPointerUp: ie(e.onPointerUp, A => {
                            const K = E.current
                              , $ = A.target;
                            if ($.hasPointerCapture(A.pointerId) && $.releasePointerCapture(A.pointerId),
                            E.current = null,
                            v.current = null,
                            K) {
                                const B = A.currentTarget
                                  , P = {
                                    originalEvent: A,
                                    delta: K
                                };
                                Dd(K, y.swipeDirection, y.swipeThreshold) ? Li(n1, f, P, {
                                    discrete: !0
                                }) : Li(t1, p, P, {
                                    discrete: !0
                                }),
                                B.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , s1 = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Gs(di, t)
      , [i,s] = x.useState(!1)
      , [l,a] = x.useState(!1);
    return u1( () => s(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : g.jsx(Wh, {
        asChild: !0,
        children: g.jsx(Ys, {
            ...r,
            children: i && g.jsxs(g.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , l1 = "ToastTitle"
  , Jh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return g.jsx(we.div, {
        ...r,
        ref: t
    })
}
);
Jh.displayName = l1;
var a1 = "ToastDescription"
  , em = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return g.jsx(we.div, {
        ...r,
        ref: t
    })
}
);
em.displayName = a1;
var tm = "ToastAction"
  , nm = x.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? g.jsx(om, {
        altText: n,
        asChild: !0,
        children: g.jsx(nc, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${tm}\`. Expected non-empty \`string\`.`),
    null)
}
);
nm.displayName = tm;
var rm = "ToastClose"
  , nc = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = o1(rm, n);
    return g.jsx(om, {
        asChild: !0,
        children: g.jsx(we.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ie(e.onClick, o.onClose)
        })
    })
}
);
nc.displayName = rm;
var om = x.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return g.jsx(we.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function im(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        c1(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...im(r))
        }
    }
    ),
    t
}
function Li(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Bh(o, i) : o.dispatchEvent(i)
}
var Dd = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function u1(e= () => {}
) {
    const t = _n(e);
    Mn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function c1(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function d1(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function $l(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var f1 = Yh
  , sm = Xh
  , lm = Zh
  , am = Jh
  , um = em
  , cm = nm
  , dm = nc;
function fm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = fm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function pm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = fm(e)) && (r && (r += " "),
        r += t);
    return r
}
const Id = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , zd = pm
  , hm = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return zd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const p = Id(c) || Id(d);
        return o[u][p]
    }
    )
      , l = n && Object.entries(n).reduce( (u, c) => {
        let[d,p] = c;
        return p === void 0 || (u[d] = p),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: p, ...f} = c;
        return Object.entries(f).every(S => {
            let[y,w] = S;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...l
            }[y]) : {
                ...i,
                ...l
            }[y] === w
        }
        ) ? [...u, d, p] : u
    }
    , []);
    return zd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , mm = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var h1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => x.createElement("svg", {
    ref: a,
    ...h1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: mm("lucide", o),
    ...l
}, [...s.map( ([u,c]) => x.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = (e, t) => {
    const n = x.forwardRef( ({className: r, ...o}, i) => x.createElement(m1, {
        ref: i,
        iconNode: t,
        className: mm(`lucide-${p1(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = fe("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = fe("Bath", [["path", {
    d: "M10 4 8 6",
    key: "1rru8s"
}], ["path", {
    d: "M17 19v2",
    key: "ts1sot"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}], ["path", {
    d: "M7 19v2",
    key: "12npes"
}], ["path", {
    d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
    key: "14ym8i"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = fe("BedDouble", [["path", {
    d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",
    key: "1k78r4"
}], ["path", {
    d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
    key: "fb3tl2"
}], ["path", {
    d: "M12 4v6",
    key: "1dcgq2"
}], ["path", {
    d: "M2 18h20",
    key: "ajqnye"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = fe("Bed", [["path", {
    d: "M2 4v16",
    key: "vw9hq8"
}], ["path", {
    d: "M2 8h18a2 2 0 0 1 2 2v10",
    key: "1dgv2r"
}], ["path", {
    d: "M2 17h20",
    key: "18nfp3"
}], ["path", {
    d: "M6 8v9",
    key: "1yriud"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = fe("Bell", [["path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
    key: "1qo2s2"
}], ["path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
    key: "qgo35s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = fe("Calculator", [["rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    key: "1nb95v"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "6",
    y2: "6",
    key: "x4nwl0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "14",
    y2: "18",
    key: "wjye3r"
}], ["path", {
    d: "M16 10h.01",
    key: "1m94wz"
}], ["path", {
    d: "M12 10h.01",
    key: "1nrarc"
}], ["path", {
    d: "M8 10h.01",
    key: "19clt8"
}], ["path", {
    d: "M12 14h.01",
    key: "1etili"
}], ["path", {
    d: "M8 14h.01",
    key: "6423bh"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}], ["path", {
    d: "M8 18h.01",
    key: "lrp35t"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = fe("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = fe("ChartColumn", [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = fe("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = fe("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = fe("GitCompare", [["circle", {
    cx: "18",
    cy: "18",
    r: "3",
    key: "1xkwt0"
}], ["circle", {
    cx: "6",
    cy: "6",
    r: "3",
    key: "1lh9wr"
}], ["path", {
    d: "M13 6h3a2 2 0 0 1 2 2v7",
    key: "1yeb86"
}], ["path", {
    d: "M11 18H8a2 2 0 0 1-2-2V9",
    key: "19pyzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = fe("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = fe("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = fe("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = fe("Maximize", [["path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3",
    key: "1dcmit"
}], ["path", {
    d: "M21 8V5a2 2 0 0 0-2-2h-3",
    key: "1e4gt3"
}], ["path", {
    d: "M3 16v3a2 2 0 0 0 2 2h3",
    key: "wsl5sc"
}], ["path", {
    d: "M16 21h3a2 2 0 0 0 2-2v-3",
    key: "18trek"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = fe("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = fe("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = fe("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O1 = fe("Quote", [["path", {
    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "rib7q0"
}], ["path", {
    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "1ymkrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = fe("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = fe("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = fe("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = fe("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , rc = "-"
  , D1 = e => {
    const t = z1(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(rc);
            return l[0] === "" && l.length !== 1 && l.shift(),
            xm(l, t) || I1(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , xm = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? xm(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(rc);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , Fd = /^\[(.+)\]$/
  , I1 = e => {
    if (Fd.test(e)) {
        const t = Fd.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , z1 = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return $1(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Ba(s, r, i, t)
    }
    ),
    r
}
  , Ba = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : $d(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (F1(o)) {
                Ba(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Ba(s, $d(t, i), n, r)
        }
        )
    }
    )
}
  , $d = (e, t) => {
    let n = e;
    return t.split(rc).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , F1 = e => e.isThemeGetter
  , $1 = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , B1 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , wm = "!"
  , U1 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < l.length; w++) {
            let m = l[w];
            if (u === 0) {
                if (m === o && (r || l.slice(w, w + i) === t)) {
                    a.push(l.slice(c, w)),
                    c = w + i;
                    continue
                }
                if (m === "/") {
                    d = w;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const p = a.length === 0 ? l : l.substring(c)
          , f = p.startsWith(wm)
          , S = f ? p.substring(1) : p
          , y = d && d > c ? d - c : void 0;
        return {
            modifiers: a,
            hasImportantModifier: f,
            baseClassName: S,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , V1 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , H1 = e => ({
    cache: B1(e.cacheSize),
    parseClassName: U1(e),
    ...D1(e)
})
  , W1 = /\s+/
  , Q1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(W1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: c, hasImportantModifier: d, baseClassName: p, maybePostfixModifierPosition: f} = n(u);
        let S = !!f
          , y = r(S ? p.substring(0, f) : p);
        if (!y) {
            if (!S) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (y = r(p),
            !y) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            S = !1
        }
        const w = V1(c).join(":")
          , m = d ? w + wm : w
          , h = m + y;
        if (i.includes(h))
            continue;
        i.push(h);
        const v = o(y, S);
        for (let E = 0; E < v.length; ++E) {
            const b = v[E];
            i.push(m + b)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function K1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Sm(t)) && (r && (r += " "),
        r += n);
    return r
}
const Sm = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Sm(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Y1(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = H1(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const c = Q1(a, n);
        return o(a, c),
        c
    }
    return function() {
        return i(K1.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Em = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , G1 = /^\d+\/\d+$/
  , X1 = new Set(["px", "full", "screen"])
  , q1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Z1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , J1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , ex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , tx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Lt = e => Lr(e) || X1.has(e) || G1.test(e)
  , sn = e => oo(e, "length", ux)
  , Lr = e => !!e && !Number.isNaN(Number(e))
  , Bl = e => oo(e, "number", Lr)
  , xo = e => !!e && Number.isInteger(Number(e))
  , nx = e => e.endsWith("%") && Lr(e.slice(0, -1))
  , Q = e => Em.test(e)
  , ln = e => q1.test(e)
  , rx = new Set(["length", "size", "percentage"])
  , ox = e => oo(e, rx, bm)
  , ix = e => oo(e, "position", bm)
  , sx = new Set(["image", "url"])
  , lx = e => oo(e, sx, dx)
  , ax = e => oo(e, "", cx)
  , wo = () => !0
  , oo = (e, t, n) => {
    const r = Em.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , ux = e => Z1.test(e) && !J1.test(e)
  , bm = () => !1
  , cx = e => ex.test(e)
  , dx = e => tx.test(e)
  , fx = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , a = re("contrast")
      , u = re("grayscale")
      , c = re("hueRotate")
      , d = re("invert")
      , p = re("gap")
      , f = re("gradientColorStops")
      , S = re("gradientColorStopPositions")
      , y = re("inset")
      , w = re("margin")
      , m = re("opacity")
      , h = re("padding")
      , v = re("saturate")
      , E = re("scale")
      , b = re("sepia")
      , C = re("skew")
      , k = re("space")
      , R = re("translate")
      , O = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", Q, t]
      , L = () => [Q, t]
      , U = () => ["", Lt, sn]
      , A = () => ["auto", Lr, Q]
      , K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", Q]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , W = () => [Lr, Q];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [wo],
            spacing: [Lt, sn],
            blur: ["none", "", ln, Q],
            brightness: W(),
            borderColor: [e],
            borderRadius: ["none", "", "full", ln, Q],
            borderSpacing: L(),
            borderWidth: U(),
            contrast: W(),
            grayscale: T(),
            hueRotate: W(),
            invert: T(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [nx, sn],
            inset: z(),
            margin: z(),
            opacity: W(),
            padding: L(),
            saturate: W(),
            scale: W(),
            sepia: T(),
            skew: W(),
            space: L(),
            translate: L()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Q]
            }],
            container: ["container"],
            columns: [{
                columns: [ln]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...K(), Q]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: O()
            }],
            "overscroll-x": [{
                "overscroll-x": O()
            }],
            "overscroll-y": [{
                "overscroll-y": O()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", xo, Q]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Q]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", xo, Q]
            }],
            "grid-cols": [{
                "grid-cols": [wo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", xo, Q]
                }, Q]
            }],
            "col-start": [{
                "col-start": A()
            }],
            "col-end": [{
                "col-end": A()
            }],
            "grid-rows": [{
                "grid-rows": [wo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [xo, Q]
                }, Q]
            }],
            "row-start": [{
                "row-start": A()
            }],
            "row-end": [{
                "row-end": A()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Q]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Q]
            }],
            gap: [{
                gap: [p]
            }],
            "gap-x": [{
                "gap-x": [p]
            }],
            "gap-y": [{
                "gap-y": [p]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
            }],
            "min-w": [{
                "min-w": [Q, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [ln]
                }, ln]
            }],
            h: [{
                h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Q, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", ln, sn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bl]
            }],
            "font-family": [{
                font: [wo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Lr, Bl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Lt, Q]
            }],
            "list-image": [{
                "list-image": ["none", Q]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Q]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Lt, sn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Lt, Q]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Q]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...K(), ix]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", ox]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, lx]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [Lt, Q]
            }],
            "outline-w": [{
                outline: [Lt, sn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: U()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [Lt, sn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", ln, ax]
            }],
            "shadow-color": [{
                shadow: [wo]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...B(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": B()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", ln, Q]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
            }],
            duration: [{
                duration: W()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Q]
            }],
            delay: [{
                delay: W()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Q]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [E]
            }],
            "scale-x": [{
                "scale-x": [E]
            }],
            "scale-y": [{
                "scale-y": [E]
            }],
            rotate: [{
                rotate: [xo, Q]
            }],
            "translate-x": [{
                "translate-x": [R]
            }],
            "translate-y": [{
                "translate-y": [R]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Q]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Lt, sn, Bl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , px = Y1(fx);
function qt(...e) {
    return px(pm(e))
}
const hx = f1
  , Cm = x.forwardRef( ({className: e, ...t}, n) => g.jsx(sm, {
    ref: n,
    className: qt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Cm.displayName = sm.displayName;
const mx = hm("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , km = x.forwardRef( ({className: e, variant: t, ...n}, r) => g.jsx(lm, {
    ref: r,
    className: qt(mx({
        variant: t
    }), e),
    ...n
}));
km.displayName = lm.displayName;
const gx = x.forwardRef( ({className: e, ...t}, n) => g.jsx(cm, {
    ref: n,
    className: qt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
gx.displayName = cm.displayName;
const Pm = x.forwardRef( ({className: e, ...t}, n) => g.jsx(dm, {
    ref: n,
    className: qt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: g.jsx(ym, {
        className: "h-4 w-4"
    })
}));
Pm.displayName = dm.displayName;
const Nm = x.forwardRef( ({className: e, ...t}, n) => g.jsx(am, {
    ref: n,
    className: qt("text-sm font-semibold", e),
    ...t
}));
Nm.displayName = am.displayName;
const Tm = x.forwardRef( ({className: e, ...t}, n) => g.jsx(um, {
    ref: n,
    className: qt("text-sm opacity-90", e),
    ...t
}));
Tm.displayName = um.displayName;
function vx() {
    const {toasts: e} = S0();
    return g.jsxs(hx, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return g.jsxs(km, {
                ...i,
                children: [g.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && g.jsx(Nm, {
                        children: n
                    }), r && g.jsx(Tm, {
                        children: r
                    })]
                }), o, g.jsx(Pm, {})]
            }, t)
        }), g.jsx(Cm, {})]
    })
}
var Bd = ["light", "dark"]
  , yx = "(prefers-color-scheme: dark)"
  , xx = x.createContext(void 0)
  , wx = {
    setTheme: e => {}
    ,
    themes: []
}
  , Sx = () => {
    var e;
    return (e = x.useContext(xx)) != null ? e : wx
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? Bd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , p = (S, y=!1, w=!0) => {
        let m = s ? s[S] : S
          , h = y ? S + "|| ''" : `'${m}'`
          , v = "";
        return o && w && !y && Bd.includes(S) && (v += `d.style.colorScheme = '${S}';`),
        n === "class" ? y || m ? v += `c.add(${h})` : v += "null" : m && (v += `d[s](n,${h})`),
        v
    }
      , f = e ? `!function(){${c}${p(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${yx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + p(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(i, !1, !1)};}${d}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
}
);
var Ex = e => {
    switch (e) {
    case "success":
        return kx;
    case "info":
        return Nx;
    case "warning":
        return Px;
    case "error":
        return Tx;
    default:
        return null
    }
}
  , bx = Array(12).fill(0)
  , Cx = ({visible: e, className: t}) => _.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, _.createElement("div", {
    className: "sonner-spinner"
}, bx.map( (n, r) => _.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , kx = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, _.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Px = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Nx = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Tx = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Rx = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, _.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), _.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , jx = () => {
    let[e,t] = _.useState(document.hidden);
    return _.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Ua = 1
  , _x = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ua++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async a => {
                if (i = ["resolve", a],
                _.isValidElement(a))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: a
                    });
                else if (Ox(a) && !a.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(a) : t.success
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async a => {
                if (i = ["reject", a],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(a) : t.error
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var a;
                o && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ), l = () => new Promise( (a, u) => s.then( () => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Ua++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , $e = new _x
  , Mx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ua++;
    return $e.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Ox = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , Ax = Mx
  , Lx = () => $e.toasts
  , Dx = () => $e.getActiveToasts();
Object.assign(Ax, {
    success: $e.success,
    info: $e.info,
    warning: $e.warning,
    error: $e.error,
    custom: $e.custom,
    message: $e.message,
    promise: $e.promise,
    dismiss: $e.dismiss,
    loading: $e.loading
}, {
    getHistory: Lx,
    getToasts: Dx
});
function Ix(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Ix(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Di(e) {
    return e.label !== void 0
}
var zx = 3
  , Fx = "32px"
  , $x = "16px"
  , Ud = 4e3
  , Bx = 356
  , Ux = 14
  , Vx = 20
  , Hx = 200;
function pt(...e) {
    return e.filter(Boolean).join(" ")
}
function Wx(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var Qx = e => {
    var t, n, r, o, i, s, l, a, u, c, d;
    let {invert: p, toast: f, unstyled: S, interacting: y, setHeights: w, visibleToasts: m, heights: h, index: v, toasts: E, expanded: b, removeToast: C, defaultRichColors: k, closeButton: R, style: O, cancelButtonStyle: M, actionButtonStyle: z, className: L="", descriptionClassName: U="", duration: A, position: K, gap: $, loadingIcon: B, expandByDefault: P, classNames: T, icons: D, closeButtonAriaLabel: W="Close toast", pauseWhenPageIsHidden: F} = e
      , [Y,X] = _.useState(null)
      , [ge,Ne] = _.useState(null)
      , [J,cr] = _.useState(!1)
      , [Zt,$n] = _.useState(!1)
      , [Jt,dr] = _.useState(!1)
      , [en,pi] = _.useState(!1)
      , [ll,hi] = _.useState(!1)
      , [al,ao] = _.useState(0)
      , [fr,gc] = _.useState(0)
      , uo = _.useRef(f.duration || A || Ud)
      , vc = _.useRef(null)
      , Bn = _.useRef(null)
      , Lg = v === 0
      , Dg = v + 1 <= m
      , tt = f.type
      , pr = f.dismissible !== !1
      , Ig = f.className || ""
      , zg = f.descriptionClassName || ""
      , mi = _.useMemo( () => h.findIndex(V => V.toastId === f.id) || 0, [h, f.id])
      , Fg = _.useMemo( () => {
        var V;
        return (V = f.closeButton) != null ? V : R
    }
    , [f.closeButton, R])
      , yc = _.useMemo( () => f.duration || A || Ud, [f.duration, A])
      , ul = _.useRef(0)
      , hr = _.useRef(0)
      , xc = _.useRef(0)
      , mr = _.useRef(null)
      , [$g,Bg] = K.split("-")
      , wc = _.useMemo( () => h.reduce( (V, te, le) => le >= mi ? V : V + te.height, 0), [h, mi])
      , Sc = jx()
      , Ug = f.invert || p
      , cl = tt === "loading";
    hr.current = _.useMemo( () => mi * $ + wc, [mi, wc]),
    _.useEffect( () => {
        uo.current = yc
    }
    , [yc]),
    _.useEffect( () => {
        cr(!0)
    }
    , []),
    _.useEffect( () => {
        let V = Bn.current;
        if (V) {
            let te = V.getBoundingClientRect().height;
            return gc(te),
            w(le => [{
                toastId: f.id,
                height: te,
                position: f.position
            }, ...le]),
            () => w(le => le.filter(ut => ut.toastId !== f.id))
        }
    }
    , [w, f.id]),
    _.useLayoutEffect( () => {
        if (!J)
            return;
        let V = Bn.current
          , te = V.style.height;
        V.style.height = "auto";
        let le = V.getBoundingClientRect().height;
        V.style.height = te,
        gc(le),
        w(ut => ut.find(ct => ct.toastId === f.id) ? ut.map(ct => ct.toastId === f.id ? {
            ...ct,
            height: le
        } : ct) : [{
            toastId: f.id,
            height: le,
            position: f.position
        }, ...ut])
    }
    , [J, f.title, f.description, w, f.id]);
    let tn = _.useCallback( () => {
        $n(!0),
        ao(hr.current),
        w(V => V.filter(te => te.toastId !== f.id)),
        setTimeout( () => {
            C(f)
        }
        , Hx)
    }
    , [f, C, w, hr]);
    _.useEffect( () => {
        if (f.promise && tt === "loading" || f.duration === 1 / 0 || f.type === "loading")
            return;
        let V;
        return b || y || F && Sc ? ( () => {
            if (xc.current < ul.current) {
                let te = new Date().getTime() - ul.current;
                uo.current = uo.current - te
            }
            xc.current = new Date().getTime()
        }
        )() : uo.current !== 1 / 0 && (ul.current = new Date().getTime(),
        V = setTimeout( () => {
            var te;
            (te = f.onAutoClose) == null || te.call(f, f),
            tn()
        }
        , uo.current)),
        () => clearTimeout(V)
    }
    , [b, y, f, tt, F, Sc, tn]),
    _.useEffect( () => {
        f.delete && tn()
    }
    , [tn, f.delete]);
    function Vg() {
        var V, te, le;
        return D != null && D.loading ? _.createElement("div", {
            className: pt(T == null ? void 0 : T.loader, (V = f == null ? void 0 : f.classNames) == null ? void 0 : V.loader, "sonner-loader"),
            "data-visible": tt === "loading"
        }, D.loading) : B ? _.createElement("div", {
            className: pt(T == null ? void 0 : T.loader, (te = f == null ? void 0 : f.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": tt === "loading"
        }, B) : _.createElement(Cx, {
            className: pt(T == null ? void 0 : T.loader, (le = f == null ? void 0 : f.classNames) == null ? void 0 : le.loader),
            visible: tt === "loading"
        })
    }
    return _.createElement("li", {
        tabIndex: 0,
        ref: Bn,
        className: pt(L, Ig, T == null ? void 0 : T.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[tt], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[tt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : k,
        "data-styled": !(f.jsx || f.unstyled || S),
        "data-mounted": J,
        "data-promise": !!f.promise,
        "data-swiped": ll,
        "data-removed": Zt,
        "data-visible": Dg,
        "data-y-position": $g,
        "data-x-position": Bg,
        "data-index": v,
        "data-front": Lg,
        "data-swiping": Jt,
        "data-dismissible": pr,
        "data-type": tt,
        "data-invert": Ug,
        "data-swipe-out": en,
        "data-swipe-direction": ge,
        "data-expanded": !!(b || P && J),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": E.length - v,
            "--offset": `${Zt ? al : hr.current}px`,
            "--initial-height": P ? "auto" : `${fr}px`,
            ...O,
            ...f.style
        },
        onDragEnd: () => {
            dr(!1),
            X(null),
            mr.current = null
        }
        ,
        onPointerDown: V => {
            cl || !pr || (vc.current = new Date,
            ao(hr.current),
            V.target.setPointerCapture(V.pointerId),
            V.target.tagName !== "BUTTON" && (dr(!0),
            mr.current = {
                x: V.clientX,
                y: V.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var V, te, le, ut;
            if (en || !pr)
                return;
            mr.current = null;
            let ct = Number(((V = Bn.current) == null ? void 0 : V.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , nn = Number(((te = Bn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Un = new Date().getTime() - ((le = vc.current) == null ? void 0 : le.getTime())
              , dt = Y === "x" ? ct : nn
              , rn = Math.abs(dt) / Un;
            if (Math.abs(dt) >= Vx || rn > .11) {
                ao(hr.current),
                (ut = f.onDismiss) == null || ut.call(f, f),
                Ne(Y === "x" ? ct > 0 ? "right" : "left" : nn > 0 ? "down" : "up"),
                tn(),
                pi(!0),
                hi(!1);
                return
            }
            dr(!1),
            X(null)
        }
        ,
        onPointerMove: V => {
            var te, le, ut, ct;
            if (!mr.current || !pr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let nn = V.clientY - mr.current.y
              , Un = V.clientX - mr.current.x
              , dt = (le = e.swipeDirections) != null ? le : Wx(K);
            !Y && (Math.abs(Un) > 1 || Math.abs(nn) > 1) && X(Math.abs(Un) > Math.abs(nn) ? "x" : "y");
            let rn = {
                x: 0,
                y: 0
            };
            Y === "y" ? (dt.includes("top") || dt.includes("bottom")) && (dt.includes("top") && nn < 0 || dt.includes("bottom") && nn > 0) && (rn.y = nn) : Y === "x" && (dt.includes("left") || dt.includes("right")) && (dt.includes("left") && Un < 0 || dt.includes("right") && Un > 0) && (rn.x = Un),
            (Math.abs(rn.x) > 0 || Math.abs(rn.y) > 0) && hi(!0),
            (ut = Bn.current) == null || ut.style.setProperty("--swipe-amount-x", `${rn.x}px`),
            (ct = Bn.current) == null || ct.style.setProperty("--swipe-amount-y", `${rn.y}px`)
        }
    }, Fg && !f.jsx ? _.createElement("button", {
        "aria-label": W,
        "data-disabled": cl,
        "data-close-button": !0,
        onClick: cl || !pr ? () => {}
        : () => {
            var V;
            tn(),
            (V = f.onDismiss) == null || V.call(f, f)
        }
        ,
        className: pt(T == null ? void 0 : T.closeButton, (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton)
    }, (i = D == null ? void 0 : D.close) != null ? i : Rx) : null, f.jsx || x.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : _.createElement(_.Fragment, null, tt || f.icon || f.promise ? _.createElement("div", {
        "data-icon": "",
        className: pt(T == null ? void 0 : T.icon, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || Vg() : null, f.type !== "loading" ? f.icon || (D == null ? void 0 : D[tt]) || Ex(tt) : null) : null, _.createElement("div", {
        "data-content": "",
        className: pt(T == null ? void 0 : T.content, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.content)
    }, _.createElement("div", {
        "data-title": "",
        className: pt(T == null ? void 0 : T.title, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? _.createElement("div", {
        "data-description": "",
        className: pt(U, zg, T == null ? void 0 : T.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), x.isValidElement(f.cancel) ? f.cancel : f.cancel && Di(f.cancel) ? _.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || M,
        onClick: V => {
            var te, le;
            Di(f.cancel) && pr && ((le = (te = f.cancel).onClick) == null || le.call(te, V),
            tn())
        }
        ,
        className: pt(T == null ? void 0 : T.cancelButton, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.cancelButton)
    }, f.cancel.label) : null, x.isValidElement(f.action) ? f.action : f.action && Di(f.action) ? _.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || z,
        onClick: V => {
            var te, le;
            Di(f.action) && ((le = (te = f.action).onClick) == null || le.call(te, V),
            !V.defaultPrevented && tn())
        }
        ,
        className: pt(T == null ? void 0 : T.actionButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.actionButton)
    }, f.action.label) : null))
}
;
function Vd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function Kx(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , l = i ? $x : Fx;
        function a(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = l : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : a(l)
    }
    ),
    n
}
var Yx = x.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: l, offset: a, mobileOffset: u, theme: c="light", richColors: d, duration: p, style: f, visibleToasts: S=zx, toastOptions: y, dir: w=Vd(), gap: m=Ux, loadingIcon: h, icons: v, containerAriaLabel: E="Notifications", pauseWhenPageIsHidden: b} = e
      , [C,k] = _.useState([])
      , R = _.useMemo( () => Array.from(new Set([r].concat(C.filter(F => F.position).map(F => F.position)))), [C, r])
      , [O,M] = _.useState([])
      , [z,L] = _.useState(!1)
      , [U,A] = _.useState(!1)
      , [K,$] = _.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , B = _.useRef(null)
      , P = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = _.useRef(null)
      , D = _.useRef(!1)
      , W = _.useCallback(F => {
        k(Y => {
            var X;
            return (X = Y.find(ge => ge.id === F.id)) != null && X.delete || $e.dismiss(F.id),
            Y.filter( ({id: ge}) => ge !== F.id)
        }
        )
    }
    , []);
    return _.useEffect( () => $e.subscribe(F => {
        if (F.dismiss) {
            k(Y => Y.map(X => X.id === F.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            Dh.flushSync( () => {
                k(Y => {
                    let X = Y.findIndex(ge => ge.id === F.id);
                    return X !== -1 ? [...Y.slice(0, X), {
                        ...Y[X],
                        ...F
                    }, ...Y.slice(X + 1)] : [F, ...Y]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    _.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: Y}) => {
                $(Y ? "dark" : "light")
            }
            )
        } catch {
            F.addListener( ({matches: X}) => {
                try {
                    $(X ? "dark" : "light")
                } catch (ge) {
                    console.error(ge)
                }
            }
            )
        }
    }
    , [c]),
    _.useEffect( () => {
        C.length <= 1 && L(!1)
    }
    , [C]),
    _.useEffect( () => {
        let F = Y => {
            var X, ge;
            o.every(Ne => Y[Ne] || Y.code === Ne) && (L(!0),
            (X = B.current) == null || X.focus()),
            Y.code === "Escape" && (document.activeElement === B.current || (ge = B.current) != null && ge.contains(document.activeElement)) && L(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [o]),
    _.useEffect( () => {
        if (B.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                D.current = !1)
            }
    }
    , [B.current]),
    _.createElement("section", {
        ref: t,
        "aria-label": `${E} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map( (F, Y) => {
        var X;
        let[ge,Ne] = F.split("-");
        return C.length ? _.createElement("ol", {
            key: F,
            dir: w === "auto" ? Vd() : w,
            tabIndex: -1,
            ref: B,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": K,
            "data-y-position": ge,
            "data-lifted": z && C.length > 1 && !i,
            "data-x-position": Ne,
            style: {
                "--front-toast-height": `${((X = O[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${Bx}px`,
                "--gap": `${m}px`,
                ...f,
                ...Kx(a, u)
            },
            onBlur: J => {
                D.current && !J.currentTarget.contains(J.relatedTarget) && (D.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || D.current || (D.current = !0,
                T.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => L(!0),
            onMouseMove: () => L(!0),
            onMouseLeave: () => {
                U || L(!1)
            }
            ,
            onDragEnd: () => L(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || A(!0)
            }
            ,
            onPointerUp: () => A(!1)
        }, C.filter(J => !J.position && Y === 0 || J.position === F).map( (J, cr) => {
            var Zt, $n;
            return _.createElement(Qx, {
                key: J.id,
                icons: v,
                index: cr,
                toast: J,
                defaultRichColors: d,
                duration: (Zt = y == null ? void 0 : y.duration) != null ? Zt : p,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: ($n = y == null ? void 0 : y.closeButton) != null ? $n : s,
                interacting: U,
                position: F,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: W,
                toasts: C.filter(Jt => Jt.position == J.position),
                heights: O.filter(Jt => Jt.position == J.position),
                setHeights: M,
                expandByDefault: i,
                gap: m,
                loadingIcon: h,
                expanded: z,
                pauseWhenPageIsHidden: b,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const Gx = ({...e}) => {
    const {theme: t="system"} = Sx();
    return g.jsx(Yx, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , Xx = ["top", "right", "bottom", "left"]
  , On = Math.min
  , Ye = Math.max
  , ks = Math.round
  , Ii = Math.floor
  , An = e => ({
    x: e,
    y: e
})
  , qx = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Zx = {
    start: "end",
    end: "start"
};
function Va(e, t, n) {
    return Ye(e, On(t, n))
}
function Yt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Gt(e) {
    return e.split("-")[0]
}
function io(e) {
    return e.split("-")[1]
}
function oc(e) {
    return e === "x" ? "y" : "x"
}
function ic(e) {
    return e === "y" ? "height" : "width"
}
function Ln(e) {
    return ["top", "bottom"].includes(Gt(e)) ? "y" : "x"
}
function sc(e) {
    return oc(Ln(e))
}
function Jx(e, t, n) {
    n === void 0 && (n = !1);
    const r = io(e)
      , o = sc(e)
      , i = ic(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Ps(s)),
    [s, Ps(s)]
}
function ew(e) {
    const t = Ps(e);
    return [Ha(e), t, Ha(t)]
}
function Ha(e) {
    return e.replace(/start|end/g, t => Zx[t])
}
function tw(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function nw(e, t, n, r) {
    const o = io(e);
    let i = tw(Gt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Ha)))),
    i
}
function Ps(e) {
    return e.replace(/left|right|bottom|top/g, t => qx[t])
}
function rw(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Rm(e) {
    return typeof e != "number" ? rw(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ns(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Hd(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Ln(t)
      , s = sc(t)
      , l = ic(s)
      , a = Gt(t)
      , u = i === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , p = r[l] / 2 - o[l] / 2;
    let f;
    switch (a) {
    case "top":
        f = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        f = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        f = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        f = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        f = {
            x: r.x,
            y: r.y
        }
    }
    switch (io(t)) {
    case "start":
        f[s] -= p * (n && u ? -1 : 1);
        break;
    case "end":
        f[s] += p * (n && u ? -1 : 1);
        break
    }
    return f
}
const ow = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = Hd(u, r, a)
      , p = r
      , f = {}
      , S = 0;
    for (let y = 0; y < l.length; y++) {
        const {name: w, fn: m} = l[y]
          , {x: h, y: v, data: E, reset: b} = await m({
            x: c,
            y: d,
            initialPlacement: r,
            placement: p,
            strategy: o,
            middlewareData: f,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = h ?? c,
        d = v ?? d,
        f = {
            ...f,
            [w]: {
                ...f[w],
                ...E
            }
        },
        b && S <= 50 && (S++,
        typeof b == "object" && (b.placement && (p = b.placement),
        b.rects && (u = b.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : b.rects),
        {x: c, y: d} = Hd(u, p, a)),
        y = -1)
    }
    return {
        x: c,
        y: d,
        placement: p,
        strategy: o,
        middlewareData: f
    }
}
;
async function Zo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: p=!1, padding: f=0} = Yt(t, e)
      , S = Rm(f)
      , w = l[p ? d === "floating" ? "reference" : "floating" : d]
      , m = Ns(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: a
    }))
      , h = d === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , E = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = Ns(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: v,
        strategy: a
    }) : h);
    return {
        top: (m.top - b.top + S.top) / E.y,
        bottom: (b.bottom - m.bottom + S.bottom) / E.y,
        left: (m.left - b.left + S.left) / E.x,
        right: (b.right - m.right + S.right) / E.x
    }
}
const iw = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: c=0} = Yt(e, t) || {};
        if (u == null)
            return {};
        const d = Rm(c)
          , p = {
            x: n,
            y: r
        }
          , f = sc(o)
          , S = ic(f)
          , y = await s.getDimensions(u)
          , w = f === "y"
          , m = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , E = i.reference[S] + i.reference[f] - p[f] - i.floating[S]
          , b = p[f] - i.reference[f]
          , C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let k = C ? C[v] : 0;
        (!k || !await (s.isElement == null ? void 0 : s.isElement(C))) && (k = l.floating[v] || i.floating[S]);
        const R = E / 2 - b / 2
          , O = k / 2 - y[S] / 2 - 1
          , M = On(d[m], O)
          , z = On(d[h], O)
          , L = M
          , U = k - y[S] - z
          , A = k / 2 - y[S] / 2 + R
          , K = Va(L, A, U)
          , $ = !a.arrow && io(o) != null && A !== K && i.reference[S] / 2 - (A < L ? M : z) - y[S] / 2 < 0
          , B = $ ? A < L ? A - L : A - U : 0;
        return {
            [f]: p[f] + B,
            data: {
                [f]: K,
                centerOffset: A - K - B,
                ...$ && {
                    alignmentOffset: B
                }
            },
            reset: $
        }
    }
})
  , sw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: p, fallbackStrategy: f="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: y=!0, ...w} = Yt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const m = Gt(o)
              , h = Ln(l)
              , v = Gt(l) === l
              , E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , b = p || (v || !y ? [Ps(l)] : ew(l))
              , C = S !== "none";
            !p && C && b.push(...nw(l, y, S, E));
            const k = [l, ...b]
              , R = await Zo(t, w)
              , O = [];
            let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && O.push(R[m]),
            d) {
                const A = Jx(o, s, E);
                O.push(R[A[0]], R[A[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: O
            }],
            !O.every(A => A <= 0)) {
                var z, L;
                const A = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1
                  , K = k[A];
                if (K)
                    return {
                        data: {
                            index: A,
                            overflows: M
                        },
                        reset: {
                            placement: K
                        }
                    };
                let $ = (L = M.filter(B => B.overflows[0] <= 0).sort( (B, P) => B.overflows[1] - P.overflows[1])[0]) == null ? void 0 : L.placement;
                if (!$)
                    switch (f) {
                    case "bestFit":
                        {
                            var U;
                            const B = (U = M.filter(P => {
                                if (C) {
                                    const T = Ln(P.placement);
                                    return T === h || T === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(T => T > 0).reduce( (T, D) => T + D, 0)]).sort( (P, T) => P[1] - T[1])[0]) == null ? void 0 : U[0];
                            B && ($ = B);
                            break
                        }
                    case "initialPlacement":
                        $ = l;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Wd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Qd(e) {
    return Xx.some(t => e[t] >= 0)
}
const lw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Yt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Zo(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Wd(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Qd(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Zo(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Wd(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Qd(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function aw(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Gt(n)
      , l = io(n)
      , a = Ln(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , c = i && a ? -1 : 1
      , d = Yt(t, e);
    let {mainAxis: p, crossAxis: f, alignmentAxis: S} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return l && typeof S == "number" && (f = l === "end" ? S * -1 : S),
    a ? {
        x: f * c,
        y: p * u
    } : {
        x: p * u,
        y: f * c
    }
}
const uw = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await aw(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , cw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: w => {
                    let {x: m, y: h} = w;
                    return {
                        x: m,
                        y: h
                    }
                }
            }, ...a} = Yt(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Zo(t, a)
              , d = Ln(Gt(o))
              , p = oc(d);
            let f = u[p]
              , S = u[d];
            if (i) {
                const w = p === "y" ? "top" : "left"
                  , m = p === "y" ? "bottom" : "right"
                  , h = f + c[w]
                  , v = f - c[m];
                f = Va(h, f, v)
            }
            if (s) {
                const w = d === "y" ? "top" : "left"
                  , m = d === "y" ? "bottom" : "right"
                  , h = S + c[w]
                  , v = S - c[m];
                S = Va(h, S, v)
            }
            const y = l.fn({
                ...t,
                [p]: f,
                [d]: S
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r,
                    enabled: {
                        [p]: i,
                        [d]: s
                    }
                }
            }
        }
    }
}
  , dw = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Yt(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = Ln(o)
              , p = oc(d);
            let f = c[p]
              , S = c[d];
            const y = Yt(l, t)
              , w = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (a) {
                const v = p === "y" ? "height" : "width"
                  , E = i.reference[p] - i.floating[v] + w.mainAxis
                  , b = i.reference[p] + i.reference[v] - w.mainAxis;
                f < E ? f = E : f > b && (f = b)
            }
            if (u) {
                var m, h;
                const v = p === "y" ? "width" : "height"
                  , E = ["top", "left"].includes(Gt(o))
                  , b = i.reference[d] - i.floating[v] + (E && ((m = s.offset) == null ? void 0 : m[d]) || 0) + (E ? 0 : w.crossAxis)
                  , C = i.reference[d] + i.reference[v] + (E ? 0 : ((h = s.offset) == null ? void 0 : h[d]) || 0) - (E ? w.crossAxis : 0);
                S < b ? S = b : S > C && (S = C)
            }
            return {
                [p]: f,
                [d]: S
            }
        }
    }
}
  , fw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Yt(e, t)
              , c = await Zo(t, u)
              , d = Gt(o)
              , p = io(o)
              , f = Ln(o) === "y"
              , {width: S, height: y} = i.floating;
            let w, m;
            d === "top" || d === "bottom" ? (w = d,
            m = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = d,
            w = p === "end" ? "top" : "bottom");
            const h = y - c.top - c.bottom
              , v = S - c.left - c.right
              , E = On(y - c[w], h)
              , b = On(S - c[m], v)
              , C = !t.middlewareData.shift;
            let k = E
              , R = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = h),
            C && !p) {
                const M = Ye(c.left, 0)
                  , z = Ye(c.right, 0)
                  , L = Ye(c.top, 0)
                  , U = Ye(c.bottom, 0);
                f ? R = S - 2 * (M !== 0 || z !== 0 ? M + z : Ye(c.left, c.right)) : k = y - 2 * (L !== 0 || U !== 0 ? L + U : Ye(c.top, c.bottom))
            }
            await a({
                ...t,
                availableWidth: R,
                availableHeight: k
            });
            const O = await s.getDimensions(l.floating);
            return S !== O.width || y !== O.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Xs() {
    return typeof window < "u"
}
function so(e) {
    return jm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function At(e) {
    var t;
    return (t = (jm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function jm(e) {
    return Xs() ? e instanceof Node || e instanceof qe(e).Node : !1
}
function bt(e) {
    return Xs() ? e instanceof Element || e instanceof qe(e).Element : !1
}
function Ot(e) {
    return Xs() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}
function Kd(e) {
    return !Xs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}
function fi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Ct(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function pw(e) {
    return ["table", "td", "th"].includes(so(e))
}
function qs(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function lc(e) {
    const t = ac()
      , n = bt(e) ? Ct(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function hw(e) {
    let t = Dn(e);
    for (; Ot(t) && !Jr(t); ) {
        if (lc(t))
            return t;
        if (qs(t))
            return null;
        t = Dn(t)
    }
    return null
}
function ac() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Jr(e) {
    return ["html", "body", "#document"].includes(so(e))
}
function Ct(e) {
    return qe(e).getComputedStyle(e)
}
function Zs(e) {
    return bt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Dn(e) {
    if (so(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Kd(e) && e.host || At(e);
    return Kd(t) ? t.host : t
}
function _m(e) {
    const t = Dn(e);
    return Jr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ot(t) && fi(t) ? t : _m(t)
}
function Jo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = _m(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = qe(o);
    if (i) {
        const l = Wa(s);
        return t.concat(s, s.visualViewport || [], fi(o) ? o : [], l && n ? Jo(l) : [])
    }
    return t.concat(o, Jo(o, [], n))
}
function Wa(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Mm(e) {
    const t = Ct(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Ot(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = ks(n) !== i || ks(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function uc(e) {
    return bt(e) ? e : e.contextElement
}
function Dr(e) {
    const t = uc(e);
    if (!Ot(t))
        return An(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Mm(t);
    let s = (i ? ks(n.width) : n.width) / r
      , l = (i ? ks(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const mw = An(0);
function Om(e) {
    const t = qe(e);
    return !ac() || !t.visualViewport ? mw : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function gw(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== qe(e) ? !1 : t
}
function lr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = uc(e);
    let s = An(1);
    t && (r ? bt(r) && (s = Dr(r)) : s = Dr(e));
    const l = gw(i, n, r) ? Om(i) : An(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , c = o.width / s.x
      , d = o.height / s.y;
    if (i) {
        const p = qe(i)
          , f = r && bt(r) ? qe(r) : r;
        let S = p
          , y = Wa(S);
        for (; y && r && f !== S; ) {
            const w = Dr(y)
              , m = y.getBoundingClientRect()
              , h = Ct(y)
              , v = m.left + (y.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , E = m.top + (y.clientTop + parseFloat(h.paddingTop)) * w.y;
            a *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            a += v,
            u += E,
            S = qe(y),
            y = Wa(S)
        }
    }
    return Ns({
        width: c,
        height: d,
        x: a,
        y: u
    })
}
function vw(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = At(r)
      , l = t ? qs(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = An(1);
    const c = An(0)
      , d = Ot(r);
    if ((d || !d && !i) && ((so(r) !== "body" || fi(s)) && (a = Zs(r)),
    Ot(r))) {
        const p = lr(r);
        u = Dr(r),
        c.x = p.x + r.clientLeft,
        c.y = p.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y
    }
}
function yw(e) {
    return Array.from(e.getClientRects())
}
function Qa(e, t) {
    const n = Zs(e).scrollLeft;
    return t ? t.left + n : lr(At(e)).left + n
}
function xw(e) {
    const t = At(e)
      , n = Zs(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Qa(e);
    const l = -n.scrollTop;
    return Ct(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function ww(e, t) {
    const n = qe(e)
      , r = At(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = ac();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
function Sw(e, t) {
    const n = lr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Ot(e) ? Dr(e) : An(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function Yd(e, t, n) {
    let r;
    if (t === "viewport")
        r = ww(e, n);
    else if (t === "document")
        r = xw(At(e));
    else if (bt(t))
        r = Sw(t, n);
    else {
        const o = Om(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Ns(r)
}
function Am(e, t) {
    const n = Dn(e);
    return n === t || !bt(n) || Jr(n) ? !1 : Ct(n).position === "fixed" || Am(n, t)
}
function Ew(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Jo(e, [], !1).filter(l => bt(l) && so(l) !== "body")
      , o = null;
    const i = Ct(e).position === "fixed";
    let s = i ? Dn(e) : e;
    for (; bt(s) && !Jr(s); ) {
        const l = Ct(s)
          , a = lc(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || fi(s) && !a && Am(e, s)) ? r = r.filter(c => c !== s) : o = l,
        s = Dn(s)
    }
    return t.set(e, r),
    r
}
function bw(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? qs(t) ? [] : Ew(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, c) => {
        const d = Yd(t, c, o);
        return u.top = Ye(d.top, u.top),
        u.right = On(d.right, u.right),
        u.bottom = On(d.bottom, u.bottom),
        u.left = Ye(d.left, u.left),
        u
    }
    , Yd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function Cw(e) {
    const {width: t, height: n} = Mm(e);
    return {
        width: t,
        height: n
    }
}
function kw(e, t, n) {
    const r = Ot(t)
      , o = At(t)
      , i = n === "fixed"
      , s = lr(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = An(0);
    if (r || !r && !i)
        if ((so(t) !== "body" || fi(o)) && (l = Zs(t)),
        r) {
            const f = lr(t, !0, i, t);
            a.x = f.x + t.clientLeft,
            a.y = f.y + t.clientTop
        } else
            o && (a.x = Qa(o));
    let u = 0
      , c = 0;
    if (o && !r && !i) {
        const f = o.getBoundingClientRect();
        c = f.top + l.scrollTop,
        u = f.left + l.scrollLeft - Qa(o, f)
    }
    const d = s.left + l.scrollLeft - a.x - u
      , p = s.top + l.scrollTop - a.y - c;
    return {
        x: d,
        y: p,
        width: s.width,
        height: s.height
    }
}
function Ul(e) {
    return Ct(e).position === "static"
}
function Gd(e, t) {
    if (!Ot(e) || Ct(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return At(e) === n && (n = n.ownerDocument.body),
    n
}
function Lm(e, t) {
    const n = qe(e);
    if (qs(e))
        return n;
    if (!Ot(e)) {
        let o = Dn(e);
        for (; o && !Jr(o); ) {
            if (bt(o) && !Ul(o))
                return o;
            o = Dn(o)
        }
        return n
    }
    let r = Gd(e, t);
    for (; r && pw(r) && Ul(r); )
        r = Gd(r, t);
    return r && Jr(r) && Ul(r) && !lc(r) ? n : r || hw(e) || n
}
const Pw = async function(e) {
    const t = this.getOffsetParent || Lm
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: kw(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Nw(e) {
    return Ct(e).direction === "rtl"
}
const Tw = {
    convertOffsetParentRelativeRectToViewportRelativeRect: vw,
    getDocumentElement: At,
    getClippingRect: bw,
    getOffsetParent: Lm,
    getElementRects: Pw,
    getClientRects: yw,
    getDimensions: Cw,
    getScale: Dr,
    isElement: bt,
    isRTL: Nw
};
function Rw(e, t) {
    let n = null, r;
    const o = At(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const {left: u, top: c, width: d, height: p} = e.getBoundingClientRect();
        if (l || t(),
        !d || !p)
            return;
        const f = Ii(c)
          , S = Ii(o.clientWidth - (u + d))
          , y = Ii(o.clientHeight - (c + p))
          , w = Ii(u)
          , h = {
            rootMargin: -f + "px " + -S + "px " + -y + "px " + -w + "px",
            threshold: Ye(0, On(1, a)) || 1
        };
        let v = !0;
        function E(b) {
            const C = b[0].intersectionRatio;
            if (C !== a) {
                if (!v)
                    return s();
                C ? s(!1, C) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...h,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,h)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function jw(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = uc(e)
      , c = o || i ? [...u ? Jo(u) : [], ...Jo(t)] : [];
    c.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        i && m.addEventListener("resize", n)
    }
    );
    const d = u && l ? Rw(u, n) : null;
    let p = -1
      , f = null;
    s && (f = new ResizeObserver(m => {
        let[h] = m;
        h && h.target === u && f && (f.unobserve(t),
        cancelAnimationFrame(p),
        p = requestAnimationFrame( () => {
            var v;
            (v = f) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && f.observe(u),
    f.observe(t));
    let S, y = a ? lr(e) : null;
    a && w();
    function w() {
        const m = lr(e);
        y && (m.x !== y.x || m.y !== y.y || m.width !== y.width || m.height !== y.height) && n(),
        y = m,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var m;
        c.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (m = f) == null || m.disconnect(),
        f = null,
        a && cancelAnimationFrame(S)
    }
}
const _w = uw
  , Mw = cw
  , Ow = sw
  , Aw = fw
  , Lw = lw
  , Xd = iw
  , Dw = dw
  , Iw = (e, t, n) => {
    const r = new Map
      , o = {
        platform: Tw,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return ow(e, t, {
        ...o,
        platform: i
    })
}
;
var Ji = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Ts(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ts(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ts(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Dm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function qd(e, t) {
    const n = Dm(e);
    return Math.round(t * n) / n
}
function Vl(e) {
    const t = x.useRef(e);
    return Ji( () => {
        t.current = e
    }
    ),
    t
}
function zw(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [c,d] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [p,f] = x.useState(r);
    Ts(p, r) || f(r);
    const [S,y] = x.useState(null)
      , [w,m] = x.useState(null)
      , h = x.useCallback(P => {
        P !== C.current && (C.current = P,
        y(P))
    }
    , [])
      , v = x.useCallback(P => {
        P !== k.current && (k.current = P,
        m(P))
    }
    , [])
      , E = i || S
      , b = s || w
      , C = x.useRef(null)
      , k = x.useRef(null)
      , R = x.useRef(c)
      , O = a != null
      , M = Vl(a)
      , z = Vl(o)
      , L = Vl(u)
      , U = x.useCallback( () => {
        if (!C.current || !k.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: p
        };
        z.current && (P.platform = z.current),
        Iw(C.current, k.current, P).then(T => {
            const D = {
                ...T,
                isPositioned: L.current !== !1
            };
            A.current && !Ts(R.current, D) && (R.current = D,
            ui.flushSync( () => {
                d(D)
            }
            ))
        }
        )
    }
    , [p, t, n, z, L]);
    Ji( () => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1,
        d(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const A = x.useRef(!1);
    Ji( () => (A.current = !0,
    () => {
        A.current = !1
    }
    ), []),
    Ji( () => {
        if (E && (C.current = E),
        b && (k.current = b),
        E && b) {
            if (M.current)
                return M.current(E, b, U);
            U()
        }
    }
    , [E, b, U, M, O]);
    const K = x.useMemo( () => ({
        reference: C,
        floating: k,
        setReference: h,
        setFloating: v
    }), [h, v])
      , $ = x.useMemo( () => ({
        reference: E,
        floating: b
    }), [E, b])
      , B = x.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return P;
        const T = qd($.floating, c.x)
          , D = qd($.floating, c.y);
        return l ? {
            ...P,
            transform: "translate(" + T + "px, " + D + "px)",
            ...Dm($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: D
        }
    }
    , [n, l, $.floating, c.x, c.y]);
    return x.useMemo( () => ({
        ...c,
        update: U,
        refs: K,
        elements: $,
        floatingStyles: B
    }), [c, U, K, $, B])
}
const Fw = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Xd({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Xd({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , $w = (e, t) => ({
    ..._w(e),
    options: [e, t]
})
  , Bw = (e, t) => ({
    ...Mw(e),
    options: [e, t]
})
  , Uw = (e, t) => ({
    ...Dw(e),
    options: [e, t]
})
  , Vw = (e, t) => ({
    ...Ow(e),
    options: [e, t]
})
  , Hw = (e, t) => ({
    ...Aw(e),
    options: [e, t]
})
  , Ww = (e, t) => ({
    ...Lw(e),
    options: [e, t]
})
  , Qw = (e, t) => ({
    ...Fw(e),
    options: [e, t]
});
var Kw = "Arrow"
  , Im = x.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return g.jsx(we.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : g.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Im.displayName = Kw;
var Yw = Im;
function zm(e) {
    const [t,n] = x.useState(void 0);
    return Mn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Fm = "Popper"
  , [$m,Bm] = ci(Fm)
  , [NE,Um] = $m(Fm)
  , Vm = "PopperAnchor"
  , Hm = x.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Um(Vm, n)
      , s = x.useRef(null)
      , l = Pe(t, s);
    return x.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : g.jsx(we.div, {
        ...o,
        ref: l
    })
}
);
Hm.displayName = Vm;
var cc = "PopperContent"
  , [Gw,Xw] = $m(cc)
  , Wm = x.forwardRef( (e, t) => {
    var J, cr, Zt, $n, Jt, dr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: p=!1, updatePositionStrategy: f="optimized", onPlaced: S, ...y} = e
      , w = Um(cc, n)
      , [m,h] = x.useState(null)
      , v = Pe(t, en => h(en))
      , [E,b] = x.useState(null)
      , C = zm(E)
      , k = (C == null ? void 0 : C.width) ?? 0
      , R = (C == null ? void 0 : C.height) ?? 0
      , O = r + (i !== "center" ? "-" + i : "")
      , M = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , L = z.length > 0
      , U = {
        padding: M,
        boundary: z.filter(Zw),
        altBoundary: L
    }
      , {refs: A, floatingStyles: K, placement: $, isPositioned: B, middlewareData: P} = zw({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...en) => jw(...en, {
            animationFrame: f === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [$w({
            mainAxis: o + R,
            alignmentAxis: s
        }), a && Bw({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? Uw() : void 0,
            ...U
        }), a && Vw({
            ...U
        }), Hw({
            ...U,
            apply: ({elements: en, rects: pi, availableWidth: ll, availableHeight: hi}) => {
                const {width: al, height: ao} = pi.reference
                  , fr = en.floating.style;
                fr.setProperty("--radix-popper-available-width", `${ll}px`),
                fr.setProperty("--radix-popper-available-height", `${hi}px`),
                fr.setProperty("--radix-popper-anchor-width", `${al}px`),
                fr.setProperty("--radix-popper-anchor-height", `${ao}px`)
            }
        }), E && Qw({
            element: E,
            padding: l
        }), Jw({
            arrowWidth: k,
            arrowHeight: R
        }), p && Ww({
            strategy: "referenceHidden",
            ...U
        })]
    })
      , [T,D] = Ym($)
      , W = _n(S);
    Mn( () => {
        B && (W == null || W())
    }
    , [B, W]);
    const F = (J = P.arrow) == null ? void 0 : J.x
      , Y = (cr = P.arrow) == null ? void 0 : cr.y
      , X = ((Zt = P.arrow) == null ? void 0 : Zt.centerOffset) !== 0
      , [ge,Ne] = x.useState();
    return Mn( () => {
        m && Ne(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    g.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...K,
            transform: B ? K.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ge,
            "--radix-popper-transform-origin": [($n = P.transformOrigin) == null ? void 0 : $n.x, (Jt = P.transformOrigin) == null ? void 0 : Jt.y].join(" "),
            ...((dr = P.hide) == null ? void 0 : dr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: g.jsx(Gw, {
            scope: n,
            placedSide: T,
            onArrowChange: b,
            arrowX: F,
            arrowY: Y,
            shouldHideArrow: X,
            children: g.jsx(we.div, {
                "data-side": T,
                "data-align": D,
                ...y,
                ref: v,
                style: {
                    ...y.style,
                    animation: B ? void 0 : "none"
                }
            })
        })
    })
}
);
Wm.displayName = cc;
var Qm = "PopperArrow"
  , qw = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Km = x.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = Xw(Qm, r)
      , s = qw[i.placedSide];
    return g.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: g.jsx(Yw, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Km.displayName = Qm;
function Zw(e) {
    return e !== null
}
var Jw = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, m, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,c] = Ym(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , p = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2
          , f = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let S = ""
          , y = "";
        return u === "bottom" ? (S = s ? d : `${p}px`,
        y = `${-a}px`) : u === "top" ? (S = s ? d : `${p}px`,
        y = `${r.floating.height + a}px`) : u === "right" ? (S = `${-a}px`,
        y = s ? d : `${f}px`) : u === "left" && (S = `${r.floating.width + a}px`,
        y = s ? d : `${f}px`),
        {
            data: {
                x: S,
                y
            }
        }
    }
});
function Ym(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var eS = Hm
  , tS = Wm
  , nS = Km
  , [Js,TE] = ci("Tooltip", [Bm])
  , dc = Bm()
  , Gm = "TooltipProvider"
  , rS = 700
  , Zd = "tooltip.open"
  , [oS,Xm] = Js(Gm)
  , qm = e => {
    const {__scopeTooltip: t, delayDuration: n=rS, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = x.useRef(!0)
      , l = x.useRef(!1)
      , a = x.useRef(0);
    return x.useEffect( () => {
        const u = a.current;
        return () => window.clearTimeout(u)
    }
    , []),
    g.jsx(oS, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: x.useCallback( () => {
            window.clearTimeout(a.current),
            s.current = !1
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(a.current),
            a.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: x.useCallback(u => {
            l.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
qm.displayName = Gm;
var Zm = "Tooltip"
  , [RE,el] = Js(Zm)
  , Ka = "TooltipTrigger"
  , iS = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = el(Ka, n)
      , i = Xm(Ka, n)
      , s = dc(n)
      , l = x.useRef(null)
      , a = Pe(t, l, o.onTriggerChange)
      , u = x.useRef(!1)
      , c = x.useRef(!1)
      , d = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    g.jsx(eS, {
        asChild: !0,
        ...s,
        children: g.jsx(we.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: ie(e.onPointerMove, p => {
                p.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: ie(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: ie(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: ie(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ie(e.onBlur, o.onClose),
            onClick: ie(e.onClick, o.onClose)
        })
    })
}
);
iS.displayName = Ka;
var sS = "TooltipPortal"
  , [jE,lS] = Js(sS, {
    forceMount: void 0
})
  , eo = "TooltipContent"
  , Jm = x.forwardRef( (e, t) => {
    const n = lS(eo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = el(eo, e.__scopeTooltip);
    return g.jsx(Ju, {
        present: r || s.open,
        children: s.disableHoverableContent ? g.jsx(eg, {
            side: o,
            ...i,
            ref: t
        }) : g.jsx(aS, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , aS = x.forwardRef( (e, t) => {
    const n = el(eo, e.__scopeTooltip)
      , r = Xm(eo, e.__scopeTooltip)
      , o = x.useRef(null)
      , i = Pe(t, o)
      , [s,l] = x.useState(null)
      , {trigger: a, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: d} = r
      , p = x.useCallback( () => {
        l(null),
        d(!1)
    }
    , [d])
      , f = x.useCallback( (S, y) => {
        const w = S.currentTarget
          , m = {
            x: S.clientX,
            y: S.clientY
        }
          , h = pS(m, w.getBoundingClientRect())
          , v = hS(m, h)
          , E = mS(y.getBoundingClientRect())
          , b = vS([...v, ...E]);
        l(b),
        d(!0)
    }
    , [d]);
    return x.useEffect( () => () => p(), [p]),
    x.useEffect( () => {
        if (a && c) {
            const S = w => f(w, c)
              , y = w => f(w, a);
            return a.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", y),
            () => {
                a.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", y)
            }
        }
    }
    , [a, c, f, p]),
    x.useEffect( () => {
        if (s) {
            const S = y => {
                const w = y.target
                  , m = {
                    x: y.clientX,
                    y: y.clientY
                }
                  , h = (a == null ? void 0 : a.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , v = !gS(m, s);
                h ? p() : v && (p(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [a, c, s, u, p]),
    g.jsx(eg, {
        ...e,
        ref: i
    })
}
)
  , [uS,cS] = Js(Zm, {
    isInside: !1
})
  , dS = k0("TooltipContent")
  , eg = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = el(eo, n)
      , u = dc(n)
      , {onClose: c} = a;
    return x.useEffect( () => (document.addEventListener(Zd, c),
    () => document.removeEventListener(Zd, c)), [c]),
    x.useEffect( () => {
        if (a.trigger) {
            const d = p => {
                const f = p.target;
                f != null && f.contains(a.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [a.trigger, c]),
    g.jsx(Zu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: g.jsxs(tS, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [g.jsx(dS, {
                children: r
            }), g.jsx(uS, {
                scope: n,
                isInside: !0,
                children: g.jsx(Y0, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Jm.displayName = eo;
var tg = "TooltipArrow"
  , fS = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = dc(n);
    return cS(tg, n).isInside ? null : g.jsx(nS, {
        ...o,
        ...r,
        ref: t
    })
}
);
fS.displayName = tg;
function pS(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function hS(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function mS(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function gS(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i]
          , a = t[s]
          , u = l.x
          , c = l.y
          , d = a.x
          , p = a.y;
        c > r != p > r && n < (d - u) * (r - c) / (p - c) + u && (o = !o)
    }
    return o
}
function vS(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    yS(t)
}
function yS(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var xS = qm
  , ng = Jm;
const wS = xS
  , SS = x.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => g.jsx(ng, {
    ref: r,
    sideOffset: t,
    className: qt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
SS.displayName = ng.displayName;
var tl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , nl = typeof window > "u" || "Deno"in globalThis;
function mt() {}
function ES(e, t) {
    return typeof e == "function" ? e(t) : e
}
function bS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function CS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ya(e, t) {
    return typeof e == "function" ? e(t) : e
}
function kS(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Jd(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== fc(s, t.options))
                return !1
        } else if (!ti(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function ef(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (ei(t.options.mutationKey) !== ei(i))
                return !1
        } else if (!ti(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function fc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ei)(e)
}
function ei(e) {
    return JSON.stringify(e, (t, n) => Ga(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ti(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ti(e[n], t[n])) : !1
}
function rg(e, t) {
    if (e === t)
        return e;
    const n = tf(e) && tf(t);
    if (n || Ga(e) && Ga(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {}
          , a = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : i[c];
            (!n && a.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            u++) : (l[d] = rg(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}
function tf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ga(e) {
    if (!nf(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!nf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function nf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function PS(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function NS(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? rg(e, t) : t
}
function TS(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function RS(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var pc = Symbol();
function og(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === pc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Yn, pn, zr, hf, jS = (hf = class extends tl {
    constructor() {
        super();
        Z(this, Yn);
        Z(this, pn);
        Z(this, zr);
        H(this, zr, t => {
            if (!nl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, pn) || this.setEventListener(N(this, zr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, pn)) == null || t.call(this),
        H(this, pn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, zr, t),
        (n = N(this, pn)) == null || n.call(this),
        H(this, pn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Yn) !== t && (H(this, Yn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Yn) == "boolean" ? N(this, Yn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Yn = new WeakMap,
pn = new WeakMap,
zr = new WeakMap,
hf), ig = new jS, Fr, hn, $r, mf, _S = (mf = class extends tl {
    constructor() {
        super();
        Z(this, Fr, !0);
        Z(this, hn);
        Z(this, $r);
        H(this, $r, t => {
            if (!nl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, hn) || this.setEventListener(N(this, $r))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, hn)) == null || t.call(this),
        H(this, hn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, $r, t),
        (n = N(this, hn)) == null || n.call(this),
        H(this, hn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, Fr) !== t && (H(this, Fr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, Fr)
    }
}
,
Fr = new WeakMap,
hn = new WeakMap,
$r = new WeakMap,
mf), Rs = new _S;
function MS() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function OS(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function sg(e) {
    return (e ?? "online") === "online" ? Rs.isOnline() : !0
}
var lg = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Hl(e) {
    return e instanceof lg
}
function ag(e) {
    let t = !1, n = 0, r = !1, o;
    const i = MS()
      , s = y => {
        var w;
        r || (p(new lg(y)),
        (w = e.abort) == null || w.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => ig.isFocused() && (e.networkMode === "always" || Rs.isOnline()) && e.canRun()
      , c = () => sg(e.networkMode) && e.canRun()
      , d = y => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, y),
        o == null || o(),
        i.resolve(y))
    }
      , p = y => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, y),
        o == null || o(),
        i.reject(y))
    }
      , f = () => new Promise(y => {
        var w;
        o = m => {
            (r || u()) && y(m)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var y;
        o = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let y;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn()
        } catch (m) {
            y = Promise.reject(m)
        }
        Promise.resolve(y).then(d).catch(m => {
            var C;
            if (r)
                return;
            const h = e.retry ?? (nl ? 0 : 3)
              , v = e.retryDelay ?? OS
              , E = typeof v == "function" ? v(n, m) : v
              , b = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
            if (t || !b) {
                p(m);
                return
            }
            n++,
            (C = e.onFail) == null || C.call(e, n, m),
            PS(E).then( () => u() ? void 0 : f()).then( () => {
                t ? p(m) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? S() : f().then(S),
        i)
    }
}
var AS = e => setTimeout(e, 0);
function LS() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = AS;
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var De = LS(), Gn, gf, ug = (gf = class {
    constructor() {
        Z(this, Gn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        bS(this.gcTime) && H(this, Gn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (nl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, Gn) && (clearTimeout(N(this, Gn)),
        H(this, Gn, void 0))
    }
}
,
Gn = new WeakMap,
gf), Br, Xn, nt, qn, _e, ni, Zn, gt, Dt, vf, DS = (vf = class extends ug {
    constructor(t) {
        super();
        Z(this, gt);
        Z(this, Br);
        Z(this, Xn);
        Z(this, nt);
        Z(this, qn);
        Z(this, _e);
        Z(this, ni);
        Z(this, Zn);
        H(this, Zn, !1),
        H(this, ni, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, qn, t.client),
        H(this, nt, N(this, qn).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Br, zS(this.options)),
        this.state = t.state ?? N(this, Br),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, _e)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, ni),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, nt).remove(this)
    }
    setData(t, n) {
        const r = NS(this.state.data, t, this.options);
        return Te(this, gt, Dt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Te(this, gt, Dt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = N(this, _e)) == null ? void 0 : r.promise;
        return (o = N(this, _e)) == null || o.cancel(t),
        n ? n.then(mt).catch(mt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, Br))
    }
    isActive() {
        return this.observers.some(t => kS(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === pc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ya(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !CS(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, _e)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, _e)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, nt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, _e) && (N(this, Zn) ? N(this, _e).cancel({
            revert: !0
        }) : N(this, _e).cancelRetry()),
        this.scheduleGc()),
        N(this, nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Te(this, gt, Dt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, _e))
                return N(this, _e).continueRetry(),
                N(this, _e).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const p = this.observers.find(f => f.options.queryFn);
            p && this.setOptions(p.options)
        }
        const r = new AbortController
          , o = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (H(this, Zn, !0),
                r.signal)
            })
        }
          , i = () => {
            const p = og(this.options, n)
              , S = ( () => {
                const y = {
                    client: N(this, qn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(y),
                y
            }
            )();
            return H(this, Zn, !1),
            this.options.persister ? this.options.persister(p, S, this) : p(S)
        }
          , l = ( () => {
            const p = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, qn),
                state: this.state,
                fetchFn: i
            };
            return o(p),
            p
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(l, this),
        H(this, Xn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) && Te(this, gt, Dt).call(this, {
            type: "fetch",
            meta: (d = l.fetchOptions) == null ? void 0 : d.meta
        });
        const a = p => {
            var f, S, y, w;
            Hl(p) && p.silent || Te(this, gt, Dt).call(this, {
                type: "error",
                error: p
            }),
            Hl(p) || ((S = (f = N(this, nt).config).onError) == null || S.call(f, p, this),
            (w = (y = N(this, nt).config).onSettled) == null || w.call(y, this.state.data, p, this)),
            this.scheduleGc()
        }
        ;
        return H(this, _e, ag({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: p => {
                var f, S, y, w;
                if (p === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(p)
                } catch (m) {
                    a(m);
                    return
                }
                (S = (f = N(this, nt).config).onSuccess) == null || S.call(f, p, this),
                (w = (y = N(this, nt).config).onSettled) == null || w.call(y, p, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (p, f) => {
                Te(this, gt, Dt).call(this, {
                    type: "failed",
                    failureCount: p,
                    error: f
                })
            }
            ,
            onPause: () => {
                Te(this, gt, Dt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Te(this, gt, Dt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        N(this, _e).start()
    }
}
,
Br = new WeakMap,
Xn = new WeakMap,
nt = new WeakMap,
qn = new WeakMap,
_e = new WeakMap,
ni = new WeakMap,
Zn = new WeakMap,
gt = new WeakSet,
Dt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...IS(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, Xn, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Hl(o) && o.revert && N(this, Xn) ? {
                ...N(this, Xn),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    De.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, nt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
vf);
function IS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: sg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function zS(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Nt, yf, FS = (yf = class extends tl {
    constructor(t={}) {
        super();
        Z(this, Nt);
        this.config = t,
        H(this, Nt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? fc(o, n);
        let s = this.get(i);
        return s || (s = new DS({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        N(this, Nt).has(t.queryHash) || (N(this, Nt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Nt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Nt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        De.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Nt).get(t)
    }
    getAll() {
        return [...N(this, Nt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Jd(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Jd(t, r)) : n
    }
    notify(t) {
        De.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        De.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        De.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Nt = new WeakMap,
yf), Tt, Ae, Jn, Rt, an, xf, $S = (xf = class extends ug {
    constructor(t) {
        super();
        Z(this, Rt);
        Z(this, Tt);
        Z(this, Ae);
        Z(this, Jn);
        this.mutationId = t.mutationId,
        H(this, Ae, t.mutationCache),
        H(this, Tt, []),
        this.state = t.state || BS(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, Tt).includes(t) || (N(this, Tt).push(t),
        this.clearGcTimeout(),
        N(this, Ae).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Tt, N(this, Tt).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, Ae).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, Tt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, Ae).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, Jn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, l, a, u, c, d, p, f, S, y, w, m, h, v, E, b, C, k, R;
        const n = () => {
            Te(this, Rt, an).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Jn, ag({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, M) => {
                Te(this, Rt, an).call(this, {
                    type: "failed",
                    failureCount: O,
                    error: M
                })
            }
            ,
            onPause: () => {
                Te(this, Rt, an).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, Ae).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !N(this, Jn).canStart();
        try {
            if (r)
                n();
            else {
                Te(this, Rt, an).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = N(this, Ae).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const M = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                M !== this.state.context && Te(this, Rt, an).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const O = await N(this, Jn).start();
            return await ((c = (u = N(this, Ae).config).onSuccess) == null ? void 0 : c.call(u, O, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null ? void 0 : p.call(d, O, t, this.state.context)),
            await ((S = (f = N(this, Ae).config).onSettled) == null ? void 0 : S.call(f, O, null, this.state.variables, this.state.context, this)),
            await ((w = (y = this.options).onSettled) == null ? void 0 : w.call(y, O, null, t, this.state.context)),
            Te(this, Rt, an).call(this, {
                type: "success",
                data: O
            }),
            O
        } catch (O) {
            try {
                throw await ((h = (m = N(this, Ae).config).onError) == null ? void 0 : h.call(m, O, t, this.state.context, this)),
                await ((E = (v = this.options).onError) == null ? void 0 : E.call(v, O, t, this.state.context)),
                await ((C = (b = N(this, Ae).config).onSettled) == null ? void 0 : C.call(b, void 0, O, this.state.variables, this.state.context, this)),
                await ((R = (k = this.options).onSettled) == null ? void 0 : R.call(k, void 0, O, t, this.state.context)),
                O
            } finally {
                Te(this, Rt, an).call(this, {
                    type: "error",
                    error: O
                })
            }
        } finally {
            N(this, Ae).runNext(this)
        }
    }
}
,
Tt = new WeakMap,
Ae = new WeakMap,
Jn = new WeakMap,
Rt = new WeakSet,
an = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    De.batch( () => {
        N(this, Tt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, Ae).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
xf);
function BS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ft, vt, ri, wf, US = (wf = class extends tl {
    constructor(t={}) {
        super();
        Z(this, Ft);
        Z(this, vt);
        Z(this, ri);
        this.config = t,
        H(this, Ft, new Set),
        H(this, vt, new Map),
        H(this, ri, 0)
    }
    build(t, n, r) {
        const o = new $S({
            mutationCache: this,
            mutationId: ++gi(this, ri)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        N(this, Ft).add(t);
        const n = zi(t);
        if (typeof n == "string") {
            const r = N(this, vt).get(n);
            r ? r.push(t) : N(this, vt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, Ft).delete(t)) {
            const n = zi(t);
            if (typeof n == "string") {
                const r = N(this, vt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && N(this, vt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = zi(t);
        if (typeof n == "string") {
            const r = N(this, vt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = zi(t);
        if (typeof n == "string") {
            const o = (r = N(this, vt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        De.batch( () => {
            N(this, Ft).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, Ft).clear(),
            N(this, vt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, Ft))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => ef(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => ef(t, n))
    }
    notify(t) {
        De.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return De.batch( () => Promise.all(t.map(n => n.continue().catch(mt))))
    }
}
,
Ft = new WeakMap,
vt = new WeakMap,
ri = new WeakMap,
wf);
function zi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function rf(e) {
    return {
        onFetch: (t, n) => {
            var c, d, p, f, S;
            const r = t.options
              , o = (p = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : p.direction
              , i = ((f = t.state.data) == null ? void 0 : f.pages) || []
              , s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let y = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = og(t.options, t.fetchOptions)
                  , h = async (v, E, b) => {
                    if (y)
                        return Promise.reject();
                    if (E == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: E,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(z),
                        z
                    }
                    )()
                      , R = await m(k)
                      , {maxPages: O} = t.options
                      , M = b ? RS : TS;
                    return {
                        pages: M(v.pages, R, O),
                        pageParams: M(v.pageParams, E, O)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , E = v ? VS : of
                      , b = {
                        pages: i,
                        pageParams: s
                    }
                      , C = E(r, b);
                    l = await h(b, C, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const E = a === 0 ? s[0] ?? r.initialPageParam : of(r, l);
                        if (a > 0 && E == null)
                            break;
                        l = await h(l, E),
                        a++
                    } while (a < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, w;
                return (w = (y = t.options).persister) == null ? void 0 : w.call(y, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function of(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function VS(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var pe, mn, gn, Ur, Vr, vn, Hr, Wr, Sf, HS = (Sf = class {
    constructor(e={}) {
        Z(this, pe);
        Z(this, mn);
        Z(this, gn);
        Z(this, Ur);
        Z(this, Vr);
        Z(this, vn);
        Z(this, Hr);
        Z(this, Wr);
        H(this, pe, e.queryCache || new FS),
        H(this, mn, e.mutationCache || new US),
        H(this, gn, e.defaultOptions || {}),
        H(this, Ur, new Map),
        H(this, Vr, new Map),
        H(this, vn, 0)
    }
    mount() {
        gi(this, vn)._++,
        N(this, vn) === 1 && (H(this, Hr, ig.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, pe).onFocus())
        }
        )),
        H(this, Wr, Rs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, pe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        gi(this, vn)._--,
        N(this, vn) === 0 && ((e = N(this, Hr)) == null || e.call(this),
        H(this, Hr, void 0),
        (t = N(this, Wr)) == null || t.call(this),
        H(this, Wr, void 0))
    }
    isFetching(e) {
        return N(this, pe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, mn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, pe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, pe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ya(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, pe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = N(this, pe).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = ES(t, i);
        if (s !== void 0)
            return N(this, pe).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return De.batch( () => N(this, pe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, pe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, pe);
        De.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, pe);
        return De.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = De.batch( () => N(this, pe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(mt).catch(mt)
    }
    invalidateQueries(e, t={}) {
        return De.batch( () => (N(this, pe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = De.batch( () => N(this, pe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(mt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(mt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, pe).build(this, t);
        return n.isStaleByTime(Ya(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(mt).catch(mt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = rf(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(mt).catch(mt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = rf(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Rs.isOnline() ? N(this, mn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, pe)
    }
    getMutationCache() {
        return N(this, mn)
    }
    getDefaultOptions() {
        return N(this, gn)
    }
    setDefaultOptions(e) {
        H(this, gn, e)
    }
    setQueryDefaults(e, t) {
        N(this, Ur).set(ei(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, Ur).values()]
          , n = {};
        return t.forEach(r => {
            ti(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, Vr).set(ei(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, Vr).values()]
          , n = {};
        return t.forEach(r => {
            ti(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, gn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = fc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === pc && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, gn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, pe).clear(),
        N(this, mn).clear()
    }
}
,
pe = new WeakMap,
mn = new WeakMap,
gn = new WeakMap,
Ur = new WeakMap,
Vr = new WeakMap,
vn = new WeakMap,
Hr = new WeakMap,
Wr = new WeakMap,
Sf), WS = x.createContext(void 0), QS = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
g.jsx(WS.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function js() {
    return js = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    js.apply(this, arguments)
}
var wn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(wn || (wn = {}));
const sf = "popstate";
function KS(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Xa("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : dg(o)
    }
    return GS(t, n, null, e)
}
function Qe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function cg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function YS() {
    return Math.random().toString(36).substr(2, 8)
}
function lf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Xa(e, t, n, r) {
    return n === void 0 && (n = null),
    js({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? rl(t) : t, {
        state: n,
        key: t && t.key || r || YS()
    })
}
function dg(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function rl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function GS(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = wn.Pop
      , a = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(js({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        l = wn.Pop;
        let w = c()
          , m = w == null ? null : w - u;
        u = w,
        a && a({
            action: l,
            location: y.location,
            delta: m
        })
    }
    function p(w, m) {
        l = wn.Push;
        let h = Xa(y.location, w, m);
        u = c() + 1;
        let v = lf(h, u)
          , E = y.createHref(h);
        try {
            s.pushState(v, "", E)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            o.location.assign(E)
        }
        i && a && a({
            action: l,
            location: y.location,
            delta: 1
        })
    }
    function f(w, m) {
        l = wn.Replace;
        let h = Xa(y.location, w, m);
        u = c();
        let v = lf(h, u)
          , E = y.createHref(h);
        s.replaceState(v, "", E),
        i && a && a({
            action: l,
            location: y.location,
            delta: 0
        })
    }
    function S(w) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : dg(w);
        return h = h.replace(/ $/, "%20"),
        Qe(m, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,m)
    }
    let y = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(sf, d),
            a = w,
            () => {
                o.removeEventListener(sf, d),
                a = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let m = S(w);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: p,
        replace: f,
        go(w) {
            return s.go(w)
        }
    };
    return y
}
var af;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(af || (af = {}));
function XS(e, t, n) {
    return n === void 0 && (n = "/"),
    qS(e, t, n, !1)
}
function qS(e, t, n, r) {
    let o = typeof t == "string" ? rl(t) : t
      , i = hg(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = fg(e);
    ZS(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = u2(i);
        l = l2(s[a], u, r)
    }
    return l
}
function fg(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (Qe(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Ir([r, a.relativePath])
          , c = n.concat(a);
        i.children && i.children.length > 0 && (Qe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        fg(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: i2(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of pg(i.path))
                o(i, s, a)
    }
    ),
    t
}
function pg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = pg(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function ZS(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : s2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const JS = /^:[\w-]+$/
  , e2 = 3
  , t2 = 2
  , n2 = 1
  , r2 = 10
  , o2 = -2
  , uf = e => e === "*";
function i2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(uf) && (r += o2),
    t && (r += t2),
    n.filter(o => !uf(o)).reduce( (o, i) => o + (JS.test(i) ? e2 : i === "" ? n2 : r2), r)
}
function s2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function l2(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , d = cf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, c)
          , p = a.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = cf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(o, d.params),
        s.push({
            params: o,
            pathname: Ir([i, d.pathname]),
            pathnameBase: c2(Ir([i, d.pathnameBase])),
            route: p
        }),
        d.pathnameBase !== "/" && (i = Ir([i, d.pathnameBase]))
    }
    return s
}
function cf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = a2(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: p, isOptional: f} = c;
            if (p === "*") {
                let y = l[d] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const S = l[d];
            return f && !S ? u[p] = void 0 : u[p] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function a2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function u2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return cg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function hg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Ir = e => e.join("/").replace(/\/\/+/g, "/")
  , c2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function d2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const mg = ["post", "put", "patch", "delete"];
new Set(mg);
const f2 = ["get", ...mg];
new Set(f2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _s() {
    return _s = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    _s.apply(this, arguments)
}
const p2 = x.createContext(null)
  , h2 = x.createContext(null)
  , gg = x.createContext(null)
  , ol = x.createContext(null)
  , il = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , vg = x.createContext(null);
function hc() {
    return x.useContext(ol) != null
}
function yg() {
    return hc() || Qe(!1),
    x.useContext(ol).location
}
function m2(e, t) {
    return g2(e, t)
}
function g2(e, t, n, r) {
    hc() || Qe(!1);
    let {navigator: o} = x.useContext(gg)
      , {matches: i} = x.useContext(il)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = yg(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? rl(t) : t;
        a === "/" || (d = w.pathname) != null && d.startsWith(a) || Qe(!1),
        c = w
    } else
        c = u;
    let p = c.pathname || "/"
      , f = p;
    if (a !== "/") {
        let w = a.replace(/^\//, "").split("/");
        f = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = XS(e, {
        pathname: f
    })
      , y = S2(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: Ir([a, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? a : Ir([a, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && y ? x.createElement(ol.Provider, {
        value: {
            location: _s({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: wn.Pop
        }
    }, y) : y
}
function v2() {
    let e = k2()
      , t = d2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const y2 = x.createElement(v2, null);
class x2 extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(il.Provider, {
            value: this.props.routeContext
        }, x.createElement(vg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function w2(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = x.useContext(p2);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(il.Provider, {
        value: t
    }, r)
}
function S2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(d => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        c >= 0 || Qe(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: p, errors: f} = n
                  , S = d.route.loader && p[d.route.id] === void 0 && (!f || f[d.route.id] === void 0);
                if (d.route.lazy || S) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, d, p) => {
        let f, S = !1, y = null, w = null;
        n && (f = l && d.route.id ? l[d.route.id] : void 0,
        y = d.route.errorElement || y2,
        a && (u < 0 && p === 0 ? (S = !0,
        w = null) : u === p && (S = !0,
        w = d.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, p + 1))
          , h = () => {
            let v;
            return f ? v = y : S ? v = w : d.route.Component ? v = x.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
            x.createElement(w2, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: m,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? x.createElement(x2, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: f,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var qa = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(qa || {});
function E2(e) {
    let t = x.useContext(h2);
    return t || Qe(!1),
    t
}
function b2(e) {
    let t = x.useContext(il);
    return t || Qe(!1),
    t
}
function C2(e) {
    let t = b2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Qe(!1),
    n.route.id
}
function k2() {
    var e;
    let t = x.useContext(vg)
      , n = E2(qa.UseRouteError)
      , r = C2(qa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function P2(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Za(e) {
    Qe(!1)
}
function N2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=wn.Pop, navigator: i, static: s=!1, future: l} = e;
    hc() && Qe(!1);
    let a = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: _s({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = rl(r));
    let {pathname: c="/", search: d="", hash: p="", state: f=null, key: S="default"} = r
      , y = x.useMemo( () => {
        let w = hg(c, a);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: p,
                state: f,
                key: S
            },
            navigationType: o
        }
    }
    , [a, c, d, p, f, S, o]);
    return y == null ? null : x.createElement(gg.Provider, {
        value: u
    }, x.createElement(ol.Provider, {
        children: n,
        value: y
    }))
}
function T2(e) {
    let {children: t, location: n} = e;
    return m2(Ja(t), n)
}
new Promise( () => {}
);
function Ja(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, Ja(r.props.children, i));
            return
        }
        r.type !== Za && Qe(!1),
        !r.props.index || !r.props.children || Qe(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Ja(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const R2 = "6";
try {
    window.__reactRouterVersion = R2
} catch {}
const j2 = "startTransition"
  , df = Of[j2];
function _2(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = x.useRef();
    i.current == null && (i.current = KS({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = x.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = x.useCallback(d => {
        u && df ? df( () => a(d)) : a(d)
    }
    , [a, u]);
    return x.useLayoutEffect( () => s.listen(c), [s, c]),
    x.useEffect( () => P2(r), [r]),
    x.createElement(N2, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var ff;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(ff || (ff = {}));
var pf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(pf || (pf = {}));
const M2 = hm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Vt = x.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? b0 : "button";
    return g.jsx(s, {
        className: qt(M2({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
Vt.displayName = "Button";
const O2 = () => {
    const [e,t] = x.useState(!1);
    return g.jsx("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50",
        children: g.jsxs("div", {
            className: "container-wide px-4 sm:px-6 lg:px-8",
            children: [g.jsxs("div", {
                className: "flex items-center justify-between h-16 lg:h-20",
                children: [g.jsx("a", {
                    href: "/",
                    className: "flex items-center gap-2",
                    children: g.jsxs("span", {
                        className: "font-heading text-2xl font-bold text-primary tracking-tight",
                        children: ["Haven", g.jsx("span", {
                            className: "text-accent",
                            children: "."
                        })]
                    })
                }), g.jsx("div", {
                    className: "hidden lg:flex items-center gap-8",
                    children: ["Buy", "Rent", "Sell", "Communities", "Tools"].map(n => g.jsx("a", {
                        href: "#",
                        className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                        children: n
                    }, n))
                }), g.jsxs("div", {
                    className: "hidden lg:flex items-center gap-4",
                    children: [g.jsxs("a", {
                        href: "tel:+1234567890",
                        className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
                        children: [g.jsx(gm, {
                            className: "w-4 h-4"
                        }), "(123) 456-7890"]
                    }), g.jsx(Vt, {
                        size: "sm",
                        className: "bg-primary text-primary-foreground hover:bg-navy-light",
                        children: "Contact Agent"
                    })]
                }), g.jsx("button", {
                    onClick: () => t(!e),
                    className: "lg:hidden p-2 text-foreground",
                    children: e ? g.jsx(ym, {
                        className: "w-6 h-6"
                    }) : g.jsx(_1, {
                        className: "w-6 h-6"
                    })
                })]
            }), e && g.jsx("div", {
                className: "lg:hidden pb-4 border-t border-border",
                children: g.jsxs("div", {
                    className: "flex flex-col gap-3 pt-4",
                    children: [["Buy", "Rent", "Sell", "Communities", "Tools"].map(n => g.jsx("a", {
                        href: "#",
                        className: "text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1",
                        children: n
                    }, n)), g.jsx(Vt, {
                        size: "sm",
                        className: "bg-primary text-primary-foreground mt-2",
                        children: "Contact Agent"
                    })]
                })
            })]
        })
    })
}
  , A2 = "/assets/hero-community-DdqE8bWe.jpg"
  , L2 = () => g.jsxs("section", {
    className: "relative min-h-[90vh] flex items-center",
    children: [g.jsxs("div", {
        className: "absolute inset-0",
        children: [g.jsx("img", {
            src: A2,
            alt: "Beautiful neighborhood community at golden hour",
            className: "w-full h-full object-cover"
        }), g.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"
        }), g.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20"
        })]
    }), g.jsxs("div", {
        className: "relative z-10 container-wide px-4 sm:px-6 lg:px-8 pt-20",
        children: [g.jsxs("div", {
            className: "max-w-2xl",
            children: [g.jsx("p", {
                className: "text-gold font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up",
                children: "Discover Your Perfect Neighborhood"
            }), g.jsxs("h1", {
                className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up",
                children: ["Find More Than a Home —", " ", g.jsx("span", {
                    className: "italic text-gold-light",
                    children: "Discover Your Community"
                })]
            }), g.jsx("p", {
                className: "text-lg text-primary-foreground/80 mb-10 max-w-lg animate-fade-up-delay",
                children: "Explore neighborhoods, connect with communities, and find the perfect place to call home."
            })]
        }), g.jsx("div", {
            className: "glass-card p-4 sm:p-6 max-w-4xl animate-fade-up-delay-2",
            children: g.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3",
                children: [g.jsxs("div", {
                    className: "flex items-center gap-2 bg-background rounded-lg px-3 py-2.5 border border-border",
                    children: [g.jsx(R1, {
                        className: "w-4 h-4 text-accent shrink-0"
                    }), g.jsx("input", {
                        type: "text",
                        placeholder: "Location",
                        className: "bg-transparent text-sm w-full outline-none text-foreground placeholder:text-muted-foreground"
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center gap-2 bg-background rounded-lg px-3 py-2.5 border border-border",
                    children: [g.jsx(k1, {
                        className: "w-4 h-4 text-accent shrink-0"
                    }), g.jsxs("select", {
                        className: "bg-transparent text-sm w-full outline-none text-muted-foreground",
                        children: [g.jsx("option", {
                            children: "Price Range"
                        }), g.jsx("option", {
                            children: "$200k - $400k"
                        }), g.jsx("option", {
                            children: "$400k - $600k"
                        }), g.jsx("option", {
                            children: "$600k - $800k"
                        }), g.jsx("option", {
                            children: "$800k+"
                        })]
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center gap-2 bg-background rounded-lg px-3 py-2.5 border border-border",
                    children: [g.jsx(T1, {
                        className: "w-4 h-4 text-accent shrink-0"
                    }), g.jsxs("select", {
                        className: "bg-transparent text-sm w-full outline-none text-muted-foreground",
                        children: [g.jsx("option", {
                            children: "Property Type"
                        }), g.jsx("option", {
                            children: "Single Family"
                        }), g.jsx("option", {
                            children: "Condo"
                        }), g.jsx("option", {
                            children: "Townhouse"
                        }), g.jsx("option", {
                            children: "Multi-Family"
                        })]
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center gap-2 bg-background rounded-lg px-3 py-2.5 border border-border",
                    children: [g.jsx(y1, {
                        className: "w-4 h-4 text-accent shrink-0"
                    }), g.jsxs("select", {
                        className: "bg-transparent text-sm w-full outline-none text-muted-foreground",
                        children: [g.jsx("option", {
                            children: "Beds / Baths"
                        }), g.jsx("option", {
                            children: "1+ Bed"
                        }), g.jsx("option", {
                            children: "2+ Beds"
                        }), g.jsx("option", {
                            children: "3+ Beds"
                        }), g.jsx("option", {
                            children: "4+ Beds"
                        })]
                    })]
                }), g.jsxs(Vt, {
                    className: "bg-accent text-accent-foreground hover:bg-gold-dark font-semibold gap-2 h-auto py-2.5",
                    children: [g.jsx(A1, {
                        className: "w-4 h-4"
                    }), "Search Homes"]
                })]
            })
        })]
    })]
})
  , D2 = "/assets/community-1-xPe-zkZw.jpg"
  , I2 = "/assets/community-2-DSFXZCH8.jpg"
  , z2 = "/assets/community-3-DluhzJAb.jpg"
  , F2 = [{
    name: "Riverside Heights",
    image: D2,
    description: "Top-rated schools, resort-style pools, and tree-lined streets in a family-friendly setting.",
    avgPrice: "$485,000",
    schoolRating: 9,
    commute: "22 min downtown",
    tag: "Family Favorite"
}, {
    name: "Old Town District",
    image: I2,
    description: "Walkable streets, boutique shops, and vibrant nightlife in the heart of the city.",
    avgPrice: "$620,000",
    schoolRating: 8,
    commute: "8 min downtown",
    tag: "Urban Living"
}, {
    name: "Lakewood Estates",
    image: z2,
    description: "Waterfront luxury with private docks, golf courses, and panoramic lake views.",
    avgPrice: "$875,000",
    schoolRating: 9,
    commute: "35 min downtown",
    tag: "Luxury"
}]
  , $2 = () => g.jsx("section", {
    className: "section-padding bg-secondary",
    children: g.jsxs("div", {
        className: "container-wide",
        children: [g.jsxs("div", {
            className: "text-center mb-12",
            children: [g.jsx("p", {
                className: "text-accent font-medium tracking-widest uppercase text-sm mb-3",
                children: "Explore Neighborhoods"
            }), g.jsx("h2", {
                className: "text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4",
                children: "Featured Communities"
            }), g.jsx("p", {
                className: "text-muted-foreground max-w-xl mx-auto",
                children: "People don't just buy homes — they buy lifestyles. Discover communities that match yours."
            })]
        }), g.jsx("div", {
            className: "grid md:grid-cols-3 gap-6 lg:gap-8",
            children: F2.map(e => g.jsxs("div", {
                className: "group bg-card rounded-xl overflow-hidden hover-lift border border-border",
                children: [g.jsxs("div", {
                    className: "relative overflow-hidden aspect-[4/3]",
                    children: [g.jsx("img", {
                        src: e.image,
                        alt: e.name,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    }), g.jsx("div", {
                        className: "absolute top-3 left-3",
                        children: g.jsx("span", {
                            className: "badge-new",
                            children: e.tag
                        })
                    })]
                }), g.jsxs("div", {
                    className: "p-5",
                    children: [g.jsx("h3", {
                        className: "font-heading text-xl font-semibold text-foreground mb-2",
                        children: e.name
                    }), g.jsx("p", {
                        className: "text-muted-foreground text-sm mb-4 leading-relaxed",
                        children: e.description
                    }), g.jsxs("div", {
                        className: "flex items-center gap-4 text-sm text-muted-foreground mb-4",
                        children: [g.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [g.jsx(vm, {
                                className: "w-4 h-4 text-accent"
                            }), e.schoolRating, "/10 Schools"]
                        }), g.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [g.jsx(C1, {
                                className: "w-4 h-4 text-accent"
                            }), e.commute]
                        })]
                    }), g.jsxs("div", {
                        className: "flex items-center justify-between pt-4 border-t border-border",
                        children: [g.jsxs("div", {
                            children: [g.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Avg. Home Price"
                            }), g.jsx("p", {
                                className: "font-heading text-lg font-bold text-foreground",
                                children: e.avgPrice
                            })]
                        }), g.jsxs(Vt, {
                            variant: "ghost",
                            size: "sm",
                            className: "text-accent hover:text-gold-dark gap-1",
                            children: ["Explore ", g.jsx(g1, {
                                className: "w-4 h-4"
                            })]
                        })]
                    })]
                })]
            }, e.name))
        })]
    })
});
function xg(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var B2 = x.createContext(void 0);
function U2(e) {
    const t = x.useContext(B2);
    return e || t || "ltr"
}
function V2(e) {
    const t = x.useRef({
        value: e,
        previous: e
    });
    return x.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var wg = ["PageUp", "PageDown"]
  , Sg = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  , Eg = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}
  , lo = "Slider"
  , [eu,H2,W2] = $h(lo)
  , [bg,_E] = ci(lo, [W2])
  , [Q2,sl] = bg(lo)
  , Cg = x.forwardRef( (e, t) => {
    const {name: n, min: r=0, max: o=100, step: i=1, orientation: s="horizontal", disabled: l=!1, minStepsBetweenThumbs: a=0, defaultValue: u=[r], value: c, onValueChange: d= () => {}
    , onValueCommit: p= () => {}
    , inverted: f=!1, form: S, ...y} = e
      , w = x.useRef(new Set)
      , m = x.useRef(0)
      , v = s === "horizontal" ? K2 : Y2
      , [E=[],b] = Qh({
        prop: c,
        defaultProp: u,
        onChange: z => {
            var U;
            (U = [...w.current][m.current]) == null || U.focus(),
            d(z)
        }
    })
      , C = x.useRef(E);
    function k(z) {
        const L = J2(E, z);
        M(z, L)
    }
    function R(z) {
        M(z, m.current)
    }
    function O() {
        const z = C.current[m.current];
        E[m.current] !== z && p(E)
    }
    function M(z, L, {commit: U}={
        commit: !1
    }) {
        const A = rE(i)
          , K = oE(Math.round((z - r) / i) * i + r, A)
          , $ = xg(K, [r, o]);
        b( (B=[]) => {
            const P = q2(B, $, L);
            if (nE(P, a * i)) {
                m.current = P.indexOf($);
                const T = String(P) !== String(B);
                return T && U && p(P),
                T ? P : B
            } else
                return B
        }
        )
    }
    return g.jsx(Q2, {
        scope: e.__scopeSlider,
        name: n,
        disabled: l,
        min: r,
        max: o,
        valueIndexToChangeRef: m,
        thumbs: w.current,
        values: E,
        orientation: s,
        form: S,
        children: g.jsx(eu.Provider, {
            scope: e.__scopeSlider,
            children: g.jsx(eu.Slot, {
                scope: e.__scopeSlider,
                children: g.jsx(v, {
                    "aria-disabled": l,
                    "data-disabled": l ? "" : void 0,
                    ...y,
                    ref: t,
                    onPointerDown: ie(y.onPointerDown, () => {
                        l || (C.current = E)
                    }
                    ),
                    min: r,
                    max: o,
                    inverted: f,
                    onSlideStart: l ? void 0 : k,
                    onSlideMove: l ? void 0 : R,
                    onSlideEnd: l ? void 0 : O,
                    onHomeKeyDown: () => !l && M(r, 0, {
                        commit: !0
                    }),
                    onEndKeyDown: () => !l && M(o, E.length - 1, {
                        commit: !0
                    }),
                    onStepKeyDown: ({event: z, direction: L}) => {
                        if (!l) {
                            const K = wg.includes(z.key) || z.shiftKey && Sg.includes(z.key) ? 10 : 1
                              , $ = m.current
                              , B = E[$]
                              , P = i * K * L;
                            M(B + P, $, {
                                commit: !0
                            })
                        }
                    }
                })
            })
        })
    })
}
);
Cg.displayName = lo;
var [kg,Pg] = bg(lo, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
})
  , K2 = x.forwardRef( (e, t) => {
    const {min: n, max: r, dir: o, inverted: i, onSlideStart: s, onSlideMove: l, onSlideEnd: a, onStepKeyDown: u, ...c} = e
      , [d,p] = x.useState(null)
      , f = Pe(t, v => p(v))
      , S = x.useRef(void 0)
      , y = U2(o)
      , w = y === "ltr"
      , m = w && !i || !w && i;
    function h(v) {
        const E = S.current || d.getBoundingClientRect()
          , b = [0, E.width]
          , k = mc(b, m ? [n, r] : [r, n]);
        return S.current = E,
        k(v - E.left)
    }
    return g.jsx(kg, {
        scope: e.__scopeSlider,
        startEdge: m ? "left" : "right",
        endEdge: m ? "right" : "left",
        direction: m ? 1 : -1,
        size: "width",
        children: g.jsx(Ng, {
            dir: y,
            "data-orientation": "horizontal",
            ...c,
            ref: f,
            style: {
                ...c.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: v => {
                const E = h(v.clientX);
                s == null || s(E)
            }
            ,
            onSlideMove: v => {
                const E = h(v.clientX);
                l == null || l(E)
            }
            ,
            onSlideEnd: () => {
                S.current = void 0,
                a == null || a()
            }
            ,
            onStepKeyDown: v => {
                const b = Eg[m ? "from-left" : "from-right"].includes(v.key);
                u == null || u({
                    event: v,
                    direction: b ? -1 : 1
                })
            }
        })
    })
}
)
  , Y2 = x.forwardRef( (e, t) => {
    const {min: n, max: r, inverted: o, onSlideStart: i, onSlideMove: s, onSlideEnd: l, onStepKeyDown: a, ...u} = e
      , c = x.useRef(null)
      , d = Pe(t, c)
      , p = x.useRef(void 0)
      , f = !o;
    function S(y) {
        const w = p.current || c.current.getBoundingClientRect()
          , m = [0, w.height]
          , v = mc(m, f ? [r, n] : [n, r]);
        return p.current = w,
        v(y - w.top)
    }
    return g.jsx(kg, {
        scope: e.__scopeSlider,
        startEdge: f ? "bottom" : "top",
        endEdge: f ? "top" : "bottom",
        size: "height",
        direction: f ? 1 : -1,
        children: g.jsx(Ng, {
            "data-orientation": "vertical",
            ...u,
            ref: d,
            style: {
                ...u.style,
                "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: y => {
                const w = S(y.clientY);
                i == null || i(w)
            }
            ,
            onSlideMove: y => {
                const w = S(y.clientY);
                s == null || s(w)
            }
            ,
            onSlideEnd: () => {
                p.current = void 0,
                l == null || l()
            }
            ,
            onStepKeyDown: y => {
                const m = Eg[f ? "from-bottom" : "from-top"].includes(y.key);
                a == null || a({
                    event: y,
                    direction: m ? -1 : 1
                })
            }
        })
    })
}
)
  , Ng = x.forwardRef( (e, t) => {
    const {__scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: i, onHomeKeyDown: s, onEndKeyDown: l, onStepKeyDown: a, ...u} = e
      , c = sl(lo, n);
    return g.jsx(we.span, {
        ...u,
        ref: t,
        onKeyDown: ie(e.onKeyDown, d => {
            d.key === "Home" ? (s(d),
            d.preventDefault()) : d.key === "End" ? (l(d),
            d.preventDefault()) : wg.concat(Sg).includes(d.key) && (a(d),
            d.preventDefault())
        }
        ),
        onPointerDown: ie(e.onPointerDown, d => {
            const p = d.target;
            p.setPointerCapture(d.pointerId),
            d.preventDefault(),
            c.thumbs.has(p) ? p.focus() : r(d)
        }
        ),
        onPointerMove: ie(e.onPointerMove, d => {
            d.target.hasPointerCapture(d.pointerId) && o(d)
        }
        ),
        onPointerUp: ie(e.onPointerUp, d => {
            const p = d.target;
            p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId),
            i(d))
        }
        )
    })
}
)
  , Tg = "SliderTrack"
  , Rg = x.forwardRef( (e, t) => {
    const {__scopeSlider: n, ...r} = e
      , o = sl(Tg, n);
    return g.jsx(we.span, {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
    })
}
);
Rg.displayName = Tg;
var tu = "SliderRange"
  , jg = x.forwardRef( (e, t) => {
    const {__scopeSlider: n, ...r} = e
      , o = sl(tu, n)
      , i = Pg(tu, n)
      , s = x.useRef(null)
      , l = Pe(t, s)
      , a = o.values.length
      , u = o.values.map(p => Og(p, o.min, o.max))
      , c = a > 1 ? Math.min(...u) : 0
      , d = 100 - Math.max(...u);
    return g.jsx(we.span, {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: l,
        style: {
            ...e.style,
            [i.startEdge]: c + "%",
            [i.endEdge]: d + "%"
        }
    })
}
);
jg.displayName = tu;
var nu = "SliderThumb"
  , _g = x.forwardRef( (e, t) => {
    const n = H2(e.__scopeSlider)
      , [r,o] = x.useState(null)
      , i = Pe(t, l => o(l))
      , s = x.useMemo( () => r ? n().findIndex(l => l.ref.current === r) : -1, [n, r]);
    return g.jsx(G2, {
        ...e,
        ref: i,
        index: s
    })
}
)
  , G2 = x.forwardRef( (e, t) => {
    const {__scopeSlider: n, index: r, name: o, ...i} = e
      , s = sl(nu, n)
      , l = Pg(nu, n)
      , [a,u] = x.useState(null)
      , c = Pe(t, h => u(h))
      , d = a ? s.form || !!a.closest("form") : !0
      , p = zm(a)
      , f = s.values[r]
      , S = f === void 0 ? 0 : Og(f, s.min, s.max)
      , y = Z2(r, s.values.length)
      , w = p == null ? void 0 : p[l.size]
      , m = w ? eE(w, S, l.direction) : 0;
    return x.useEffect( () => {
        if (a)
            return s.thumbs.add(a),
            () => {
                s.thumbs.delete(a)
            }
    }
    , [a, s.thumbs]),
    g.jsxs("span", {
        style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [l.startEdge]: `calc(${S}% + ${m}px)`
        },
        children: [g.jsx(eu.ItemSlot, {
            scope: e.__scopeSlider,
            children: g.jsx(we.span, {
                role: "slider",
                "aria-label": e["aria-label"] || y,
                "aria-valuemin": s.min,
                "aria-valuenow": f,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...i,
                ref: c,
                style: f === void 0 ? {
                    display: "none"
                } : e.style,
                onFocus: ie(e.onFocus, () => {
                    s.valueIndexToChangeRef.current = r
                }
                )
            })
        }), d && g.jsx(Mg, {
            name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
            form: s.form,
            value: f
        }, r)]
    })
}
);
_g.displayName = nu;
var X2 = "RadioBubbleInput"
  , Mg = x.forwardRef( ({__scopeSlider: e, value: t, ...n}, r) => {
    const o = x.useRef(null)
      , i = Pe(o, r)
      , s = V2(t);
    return x.useEffect( () => {
        const l = o.current;
        if (!l)
            return;
        const a = window.HTMLInputElement.prototype
          , c = Object.getOwnPropertyDescriptor(a, "value").set;
        if (s !== t && c) {
            const d = new Event("input",{
                bubbles: !0
            });
            c.call(l, t),
            l.dispatchEvent(d)
        }
    }
    , [s, t]),
    g.jsx(we.input, {
        style: {
            display: "none"
        },
        ...n,
        ref: i,
        defaultValue: t
    })
}
);
Mg.displayName = X2;
function q2(e=[], t, n) {
    const r = [...e];
    return r[n] = t,
    r.sort( (o, i) => o - i)
}
function Og(e, t, n) {
    const i = 100 / (n - t) * (e - t);
    return xg(i, [0, 100])
}
function Z2(e, t) {
    return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0
}
function J2(e, t) {
    if (e.length === 1)
        return 0;
    const n = e.map(o => Math.abs(o - t))
      , r = Math.min(...n);
    return n.indexOf(r)
}
function eE(e, t, n) {
    const r = e / 2
      , i = mc([0, 50], [0, r]);
    return (r - i(t) * n) * n
}
function tE(e) {
    return e.slice(0, -1).map( (t, n) => e[n + 1] - t)
}
function nE(e, t) {
    if (t > 0) {
        const n = tE(e);
        return Math.min(...n) >= t
    }
    return !0
}
function mc(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1])
            return t[0];
        const r = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + r * (n - e[0])
    }
}
function rE(e) {
    return (String(e).split(".")[1] || "").length
}
function oE(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}
var Ag = Cg
  , iE = Rg
  , sE = jg
  , lE = _g;
const ru = x.forwardRef( ({className: e, ...t}, n) => g.jsxs(Ag, {
    ref: n,
    className: qt("relative flex w-full touch-none select-none items-center", e),
    ...t,
    children: [g.jsx(iE, {
        className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
        children: g.jsx(sE, {
            className: "absolute h-full bg-primary"
        })
    }), g.jsx(lE, {
        className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    })]
}));
ru.displayName = Ag.displayName;
const aE = [{
    icon: S1,
    title: "Mortgage Calculator",
    desc: "Estimate your monthly payments"
}, {
    icon: L1,
    title: "Affordability",
    desc: "See what you can afford"
}, {
    icon: b1,
    title: "Property Value",
    desc: "Estimate your home's value"
}, {
    icon: P1,
    title: "Compare Areas",
    desc: "Side-by-side neighborhoods"
}]
  , uE = () => {
    const [e,t] = x.useState([45e4])
      , [n,r] = x.useState([20])
      , [o] = x.useState(6.5)
      , [i] = x.useState(30)
      , s = e[0] * (1 - n[0] / 100)
      , l = o / 100 / 12
      , a = i * 12
      , u = s * l * Math.pow(1 + l, a) / (Math.pow(1 + l, a) - 1);
    return g.jsx("section", {
        className: "section-padding bg-background",
        children: g.jsxs("div", {
            className: "container-wide",
            children: [g.jsxs("div", {
                className: "text-center mb-12",
                children: [g.jsx("p", {
                    className: "text-accent font-medium tracking-widest uppercase text-sm mb-3",
                    children: "Interactive Tools"
                }), g.jsx("h2", {
                    className: "text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4",
                    children: "Plan Your Home Purchase"
                })]
            }), g.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [g.jsx("div", {
                    className: "space-y-4",
                    children: aE.map(c => g.jsxs("div", {
                        className: "flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover-lift cursor-pointer group",
                        children: [g.jsx("div", {
                            className: "w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0",
                            children: g.jsx(c.icon, {
                                className: "w-6 h-6 text-accent"
                            })
                        }), g.jsxs("div", {
                            children: [g.jsx("h3", {
                                className: "font-semibold text-foreground group-hover:text-accent transition-colors",
                                children: c.title
                            }), g.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: c.desc
                            })]
                        })]
                    }, c.title))
                }), g.jsxs("div", {
                    className: "lg:col-span-2 bg-card rounded-xl border border-border p-6 lg:p-8",
                    children: [g.jsx("h3", {
                        className: "font-heading text-xl font-bold text-foreground mb-6",
                        children: "Mortgage Calculator"
                    }), g.jsxs("div", {
                        className: "space-y-6",
                        children: [g.jsxs("div", {
                            children: [g.jsxs("div", {
                                className: "flex justify-between mb-2",
                                children: [g.jsx("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Home Price"
                                }), g.jsxs("span", {
                                    className: "text-sm font-bold text-accent",
                                    children: ["$", e[0].toLocaleString()]
                                })]
                            }), g.jsx(ru, {
                                value: e,
                                onValueChange: t,
                                min: 1e5,
                                max: 2e6,
                                step: 1e4,
                                className: "[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent"
                            }), g.jsxs("div", {
                                className: "flex justify-between text-xs text-muted-foreground mt-1",
                                children: [g.jsx("span", {
                                    children: "$100k"
                                }), g.jsx("span", {
                                    children: "$2M"
                                })]
                            })]
                        }), g.jsxs("div", {
                            children: [g.jsxs("div", {
                                className: "flex justify-between mb-2",
                                children: [g.jsx("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Down Payment"
                                }), g.jsxs("span", {
                                    className: "text-sm font-bold text-accent",
                                    children: [n[0], "%"]
                                })]
                            }), g.jsx(ru, {
                                value: n,
                                onValueChange: r,
                                min: 3,
                                max: 50,
                                step: 1,
                                className: "[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent"
                            })]
                        }), g.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [g.jsxs("div", {
                                className: "bg-secondary rounded-lg p-4 text-center",
                                children: [g.jsx("p", {
                                    className: "text-xs text-muted-foreground mb-1",
                                    children: "Interest Rate"
                                }), g.jsxs("p", {
                                    className: "font-heading text-lg font-bold text-foreground",
                                    children: [o, "%"]
                                })]
                            }), g.jsxs("div", {
                                className: "bg-secondary rounded-lg p-4 text-center",
                                children: [g.jsx("p", {
                                    className: "text-xs text-muted-foreground mb-1",
                                    children: "Loan Term"
                                }), g.jsxs("p", {
                                    className: "font-heading text-lg font-bold text-foreground",
                                    children: [i, " yrs"]
                                })]
                            })]
                        }), g.jsxs("div", {
                            className: "bg-primary rounded-xl p-6 text-center",
                            children: [g.jsx("p", {
                                className: "text-primary-foreground/70 text-sm mb-1",
                                children: "Estimated Monthly Payment"
                            }), g.jsxs("p", {
                                className: "font-heading text-4xl font-bold text-primary-foreground",
                                children: ["$", Math.round(u).toLocaleString()]
                            }), g.jsx("p", {
                                className: "text-primary-foreground/50 text-xs mt-2",
                                children: "Principal & Interest only"
                            })]
                        }), g.jsx(Vt, {
                            className: "w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold",
                            children: "Get Pre-Approved"
                        })]
                    })]
                })]
            })]
        })
    })
}
  , cE = "/assets/listing-1-BDJL0vMT.jpg"
  , dE = "/assets/listing-2-bkzmVOiX.jpg"
  , fE = "/assets/listing-3-BPA9c6Hy.jpg"
  , pE = "/assets/listing-4-BhEt8A8G.jpg"
  , hE = [{
    image: cE,
    price: "$425,000",
    address: "1842 Oak Valley Dr",
    city: "Riverside Heights",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    badge: "New",
    badgeClass: "badge-new"
}, {
    image: dE,
    price: "$789,000",
    address: "55 Stonebridge Ct",
    city: "Lakewood Estates",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    badge: "Hot Deal",
    badgeClass: "badge-hot"
}, {
    image: fE,
    price: "$345,000",
    address: "210 Elm Street",
    city: "Old Town District",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    badge: "Price Drop",
    badgeClass: "badge-price-drop"
}, {
    image: pE,
    price: "$950,000",
    address: "12 Modern Way",
    city: "The Arts Quarter",
    beds: 3,
    baths: 2.5,
    sqft: "2,400",
    badge: "New",
    badgeClass: "badge-new"
}]
  , mE = () => g.jsx("section", {
    className: "section-padding bg-secondary",
    children: g.jsxs("div", {
        className: "container-wide",
        children: [g.jsxs("div", {
            className: "flex items-end justify-between mb-12",
            children: [g.jsxs("div", {
                children: [g.jsx("p", {
                    className: "text-accent font-medium tracking-widest uppercase text-sm mb-3",
                    children: "Just Listed"
                }), g.jsx("h2", {
                    className: "text-3xl lg:text-4xl font-heading font-bold text-foreground",
                    children: "Featured Properties"
                })]
            }), g.jsx("a", {
                href: "#",
                className: "hidden sm:block text-sm font-medium text-accent hover:text-gold-dark transition-colors",
                children: "View All Listings →"
            })]
        }), g.jsx("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
            children: hE.map(e => g.jsxs("div", {
                className: "group bg-card rounded-xl overflow-hidden hover-lift border border-border cursor-pointer",
                children: [g.jsxs("div", {
                    className: "relative overflow-hidden aspect-[4/3]",
                    children: [g.jsx("img", {
                        src: e.image,
                        alt: e.address,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    }), g.jsx("div", {
                        className: "absolute top-3 left-3",
                        children: g.jsx("span", {
                            className: e.badgeClass,
                            children: e.badge
                        })
                    }), g.jsx("button", {
                        className: "absolute top-3 right-3 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors",
                        children: g.jsx(N1, {
                            className: "w-4 h-4 text-muted-foreground hover:text-destructive transition-colors"
                        })
                    }), g.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity",
                        children: g.jsxs("button", {
                            className: "w-full bg-accent text-accent-foreground text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1.5 hover:bg-gold-dark transition-colors",
                            children: [g.jsx(E1, {
                                className: "w-3.5 h-3.5"
                            }), "Schedule Tour"]
                        })
                    })]
                }), g.jsxs("div", {
                    className: "p-4",
                    children: [g.jsx("p", {
                        className: "font-heading text-xl font-bold text-foreground mb-1",
                        children: e.price
                    }), g.jsx("p", {
                        className: "text-sm font-medium text-foreground",
                        children: e.address
                    }), g.jsx("p", {
                        className: "text-xs text-muted-foreground mb-3",
                        children: e.city
                    }), g.jsxs("div", {
                        className: "flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border",
                        children: [g.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [g.jsx(x1, {
                                className: "w-3.5 h-3.5"
                            }), " ", e.beds, " Beds"]
                        }), g.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [g.jsx(v1, {
                                className: "w-3.5 h-3.5"
                            }), " ", e.baths, " Baths"]
                        }), g.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [g.jsx(j1, {
                                className: "w-3.5 h-3.5"
                            }), " ", e.sqft, " sqft"]
                        })]
                    })]
                })]
            }, e.address))
        })]
    })
})
  , gE = [{
    value: "2,500+",
    label: "Homes Sold"
}, {
    value: "15+",
    label: "Years Experience"
}, {
    value: "$1.2B",
    label: "Total Value Sold"
}, {
    value: "98%",
    label: "Client Satisfaction"
}]
  , vE = [{
    name: "Sarah & Michael T.",
    location: "Riverside Heights",
    text: "Haven helped us find not just a house, but a community. Our kids love the neighborhood park and we've made lifelong friends.",
    rating: 5
}, {
    name: "David Chen",
    location: "Old Town District",
    text: "The neighborhood comparison tool was a game-changer. We could see school ratings, commute times, and walkability all in one place.",
    rating: 5
}, {
    name: "Lisa & Robert M.",
    location: "Lakewood Estates",
    text: "From the first consultation to closing day, the Haven team was exceptional. They truly understood what lifestyle we were looking for.",
    rating: 5
}]
  , yE = () => g.jsx("section", {
    className: "section-padding bg-primary",
    children: g.jsxs("div", {
        className: "container-wide",
        children: [g.jsx("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20",
            children: gE.map(e => g.jsxs("div", {
                className: "text-center",
                children: [g.jsx("p", {
                    className: "font-heading text-3xl lg:text-4xl font-bold text-gold mb-1",
                    children: e.value
                }), g.jsx("p", {
                    className: "text-primary-foreground/60 text-sm",
                    children: e.label
                })]
            }, e.label))
        }), g.jsxs("div", {
            className: "text-center mb-10",
            children: [g.jsx("p", {
                className: "text-gold font-medium tracking-widest uppercase text-sm mb-3",
                children: "Client Stories"
            }), g.jsx("h2", {
                className: "text-3xl lg:text-4xl font-heading font-bold text-primary-foreground",
                children: "Trusted by Families"
            })]
        }), g.jsx("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: vE.map(e => g.jsxs("div", {
                className: "bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6",
                children: [g.jsx(O1, {
                    className: "w-8 h-8 text-gold/40 mb-4"
                }), g.jsxs("p", {
                    className: "text-primary-foreground/80 text-sm leading-relaxed mb-4",
                    children: ['"', e.text, '"']
                }), g.jsx("div", {
                    className: "flex gap-0.5 mb-3",
                    children: Array.from({
                        length: e.rating
                    }).map( (t, n) => g.jsx(vm, {
                        className: "w-4 h-4 fill-gold text-gold"
                    }, n))
                }), g.jsx("p", {
                    className: "font-semibold text-primary-foreground text-sm",
                    children: e.name
                }), g.jsx("p", {
                    className: "text-primary-foreground/50 text-xs",
                    children: e.location
                })]
            }, e.name))
        })]
    })
})
  , xE = () => g.jsx("section", {
    className: "section-padding bg-background",
    children: g.jsxs("div", {
        className: "container-wide text-center",
        children: [g.jsx("h2", {
            className: "text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4",
            children: "Ready to Find Your Perfect Neighborhood?"
        }), g.jsx("p", {
            className: "text-muted-foreground max-w-lg mx-auto mb-8",
            children: "Let us help you discover a community that fits your lifestyle, budget, and dreams."
        }), g.jsxs("div", {
            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
            children: [g.jsxs(Vt, {
                size: "lg",
                className: "bg-primary text-primary-foreground hover:bg-navy-light gap-2 font-semibold px-8",
                children: [g.jsx(M1, {
                    className: "w-5 h-5"
                }), "Book a Consultation"]
            }), g.jsxs(Vt, {
                size: "lg",
                variant: "outline",
                className: "border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-2 font-semibold px-8",
                children: [g.jsx(w1, {
                    className: "w-5 h-5"
                }), "Get Home Alerts"]
            }), g.jsxs(Vt, {
                size: "lg",
                variant: "ghost",
                className: "text-muted-foreground hover:text-foreground gap-2 font-semibold",
                children: [g.jsx(gm, {
                    className: "w-5 h-5"
                }), "Contact an Agent"]
            })]
        })]
    })
})
  , wE = () => g.jsx("footer", {
    className: "bg-primary text-primary-foreground",
    children: g.jsxs("div", {
        className: "container-wide px-4 sm:px-6 lg:px-8 py-12 lg:py-16",
        children: [g.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
            children: [g.jsxs("div", {
                className: "col-span-2 md:col-span-1",
                children: [g.jsxs("span", {
                    className: "font-heading text-2xl font-bold tracking-tight",
                    children: ["Haven", g.jsx("span", {
                        className: "text-gold",
                        children: "."
                    })]
                }), g.jsx("p", {
                    className: "text-primary-foreground/60 text-sm mt-3 max-w-xs",
                    children: "Helping families discover communities and homes they love since 2010."
                })]
            }), [{
                title: "Buy & Sell",
                links: ["Browse Homes", "Sell Your Home", "Home Valuation", "Market Reports"]
            }, {
                title: "Explore",
                links: ["Communities", "Schools", "Mortgage Calculator", "Neighborhood Guide"]
            }, {
                title: "Company",
                links: ["About Us", "Our Agents", "Careers", "Contact"]
            }].map(e => g.jsxs("div", {
                children: [g.jsx("h4", {
                    className: "font-semibold text-sm mb-4",
                    children: e.title
                }), g.jsx("ul", {
                    className: "space-y-2",
                    children: e.links.map(t => g.jsx("li", {
                        children: g.jsx("a", {
                            href: "#",
                            className: "text-primary-foreground/50 hover:text-gold text-sm transition-colors",
                            children: t
                        })
                    }, t))
                })]
            }, e.title))]
        }), g.jsxs("div", {
            className: "border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [g.jsx("p", {
                className: "text-primary-foreground/40 text-xs",
                children: "© 2026 Haven Real Estate. All rights reserved."
            }), g.jsx("div", {
                className: "flex gap-6",
                children: ["Privacy Policy", "Terms of Service", "Accessibility"].map(e => g.jsx("a", {
                    href: "#",
                    className: "text-primary-foreground/40 hover:text-primary-foreground/70 text-xs transition-colors",
                    children: e
                }, e))
            })]
        })]
    })
})
  , SE = () => g.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [g.jsx(O2, {}), g.jsx(L2, {}), g.jsx($2, {}), g.jsx(uE, {}), g.jsx(mE, {}), g.jsx(yE, {}), g.jsx(xE, {}), g.jsx(wE, {})]
})
  , EE = () => {
    const e = yg();
    return x.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    g.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: g.jsxs("div", {
            className: "text-center",
            children: [g.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), g.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), g.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , bE = new HS
  , CE = () => g.jsx(QS, {
    client: bE,
    children: g.jsxs(wS, {
        children: [g.jsx(vx, {}), g.jsx(Gx, {}), g.jsx(_2, {
            children: g.jsxs(T2, {
                children: [g.jsx(Za, {
                    path: "/",
                    element: g.jsx(SE, {})
                }), g.jsx(Za, {
                    path: "*",
                    element: g.jsx(EE, {})
                })]
            })
        })]
    })
});
Ih(document.getElementById("root")).render(g.jsx(CE, {}));
