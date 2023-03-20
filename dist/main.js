(() => {
	var v = Object.create;
	var p = Object.defineProperty;
	var b = Object.getOwnPropertyDescriptor;
	var x = Object.getOwnPropertyNames;
	var k = Object.getPrototypeOf,
		E = Object.prototype.hasOwnProperty;
	var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
	var P = (e, t, r, n) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let o of x(t))
				!E.call(e, o) &&
					o !== r &&
					p(e, o, { get: () => t[o], enumerable: !(n = b(t, o)) || n.enumerable });
		return e;
	};
	var C = (e, t, r) => (
		(r = e != null ? v(k(e)) : {}),
		P(t || !e || !e.__esModule ? p(r, 'default', { value: e, enumerable: !0 }) : r, e)
	);
	var l = s((B, a) => {
		'use strict';
		var F = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		a.exports = F;
	});
	var T = s((j, m) => {
		'use strict';
		var w = l();
		function u() {}
		function y() {}
		y.resetWarningCache = u;
		m.exports = function () {
			function e(n, o, R, A, D, _) {
				if (_ !== w) {
					var i = new Error(
						'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
					);
					throw ((i.name = 'Invariant Violation'), i);
				}
			}
			e.isRequired = e;
			function t() {
				return e;
			}
			var r = {
				array: e,
				bigint: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				elementType: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t,
				checkPropTypes: y,
				resetWarningCache: u,
			};
			return (r.PropTypes = r), r;
		};
	});
	var f = s((V, h) => {
		h.exports = T()();
		var L, U;
	});
	var c = C(f()),
		N = wp.i18n.__,
		S = wp.richText.registerFormatType,
		I = wp.richText.toggleFormat,
		q = wp.blockEditor.RichTextToolbarButton,
		g = 'rkv/sr-only',
		d = N('Screen Reader Only', 'screen-reader-text-format'),
		O = ({ isActive: e, value: t, onChange: r, onFocus: n }) => {
			let o = () => {
				r(I(t, { type: g }));
			};
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(q, {
					icon: 'hidden',
					title: d,
					onClick: () => {
						o(), n();
					},
					isActive: e,
				})
			);
		};
	O.propTypes = {
		isActive: c.default.bool,
		value: c.default.string,
		onChange: c.default.func,
		onFocus: c.default.func,
	};
	S(g, { title: d, tagName: 'span', className: 'text-format-sr-only', edit: O });
})();
