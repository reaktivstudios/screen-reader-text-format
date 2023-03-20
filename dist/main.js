(() => {
	var V = Object.create;
	var u = Object.defineProperty;
	var E = Object.getOwnPropertyDescriptor;
	var F = Object.getOwnPropertyNames;
	var M = Object.getPrototypeOf,
		B = Object.prototype.hasOwnProperty;
	var c = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
	var I = (t, e, s, o) => {
		if ((e && typeof e == 'object') || typeof e == 'function')
			for (let r of F(e))
				!B.call(t, r) &&
					r !== s &&
					u(t, r, { get: () => e[r], enumerable: !(o = E(e, r)) || o.enumerable });
		return t;
	};
	var m = (t, e, s) => (
		(s = t != null ? V(M(t)) : {}),
		I(e || !t || !t.__esModule ? u(s, 'default', { value: t, enumerable: !0 }) : s, t)
	);
	var g = c((se, y) => {
		'use strict';
		var U = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		y.exports = U;
	});
	var w = c((re, f) => {
		'use strict';
		var A = g();
		function T() {}
		function b() {}
		b.resetWarningCache = T;
		f.exports = function () {
			function t(o, r, O, $, ee, N) {
				if (N !== A) {
					var d = new Error(
						'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
					);
					throw ((d.name = 'Invariant Violation'), d);
				}
			}
			t.isRequired = t;
			function e() {
				return t;
			}
			var s = {
				array: t,
				bigint: t,
				bool: t,
				func: t,
				number: t,
				object: t,
				string: t,
				symbol: t,
				any: t,
				arrayOf: e,
				element: t,
				elementType: t,
				instanceOf: e,
				node: t,
				objectOf: e,
				oneOf: e,
				oneOfType: e,
				shape: e,
				exact: e,
				checkPropTypes: b,
				resetWarningCache: T,
			};
			return (s.PropTypes = s), s;
		};
	});
	var p = c((ae, x) => {
		x.exports = w()();
		var oe, ne;
	});
	var a = m(p()),
		D = wp.i18n.__,
		q = wp.richText.registerFormatType,
		H = wp.richText.toggleFormat,
		K = wp.blockEditor.RichTextToolbarButton,
		C = 'rkv/sr-only',
		P = D('Screen Reader Only', 'screen-reader-text-format'),
		R = ({ isActive: t, value: e, onChange: s, onFocus: o }) => {
			let r = () => {
				s(H(e, { type: C }));
			};
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(K, {
					icon: 'hidden',
					title: P,
					onClick: () => {
						r(), o();
					},
					isActive: t,
				})
			);
		};
	R.propTypes = {
		isActive: a.default.bool,
		value: a.default.string,
		onChange: a.default.func,
		onFocus: a.default.func,
	};
	q(C, { title: P, tagName: 'span', className: 'text-format-sr-only', edit: R });
	var n = m(p()),
		{ CheckboxControl: L } = wp.components,
		{ select: ie } = wp.data,
		{ Component: W } = wp.element,
		i = class extends W {
			constructor(e) {
				super(e),
					(this.state = { checked: '' }),
					(this.setUserMetaValue = this.setUserMetaValue.bind(this)),
					(this.changeChecked = this.changeChecked.bind(this));
			}
			componentDidMount() {
				wp.apiFetch({ path: '/wp/v2/users/me', method: 'GET' }).then((e) => {
					let s = e.meta[this.props.metaKey] || !1;
					this.setState({ checked: s }), this.props.onChange(s), this.updateBodyClass(s);
				});
			}
			setUserMetaValue(e) {
				wp.apiFetch({
					path: '/wp/v2/users/me',
					method: 'POST',
					data: { meta: { [this.props.metaKey]: e } },
				});
			}
			changeChecked(e) {
				this.setState({ checked: e }),
					this.setUserMetaValue(e),
					this.props.onChange(e),
					this.updateBodyClass(e);
			}
			updateBodyClass(e) {
				e
					? document.body.classList.add('sr-only-show-always')
					: document.body.classList.remove('sr-only-show-always');
			}
			render() {
				let { heading: e, label: s, help: o, className: r } = this.props;
				return React.createElement(L, {
					heading: e,
					label: s,
					help: o,
					checked: this.state.checked,
					onChange: this.changeChecked,
					className: r,
				});
			}
		};
	i.defaultProps = {
		className: '',
		heading: '',
		help: '',
		label: '',
		metaKey: '',
		onChange: () => {},
	};
	i.propTypes = {
		className: n.default.string,
		heading: n.default.string,
		help: n.default.string,
		label: n.default.string,
		metaKey: n.default.string,
		onChange: n.default.func,
	};
	var S = i;
	var { __: _ } = wp.i18n,
		{ Component: j } = wp.element,
		{ PanelBody: G, PanelRow: Y } = wp.components,
		l = class extends j {
			constructor() {
				super(),
					(this.state = { hideSRTextValue: !1 }),
					(this.setHideSRTextValue = this.setHideSRTextValue.bind(this));
			}
			setHideSRTextValue(e) {
				this.setState({ hideSRTextValue: e });
			}
			render() {
				return React.createElement(
					G,
					{ title: _('Screen Reader Text Options', 'screen-reader-text-format'), initialOpen: !0 },
					React.createElement(
						Y,
						null,
						React.createElement(S, {
							label: _('Always show screen reader text?', 'screen-reader-text-format'),
							metaKey: 'show_sr_text_in_editor',
							onChange: this.setHideSRTextValue,
						})
					)
				);
			}
		},
		v = l;
	var { __: z } = wp.i18n,
		{ registerPlugin: J } = wp.plugins,
		{ PluginSidebar: Q, PluginSidebarMoreMenuItem: X } = wp.editPost,
		h = 'rkv-screen-reader-text-visibility',
		k = z('Screen Reader Text Visibility'),
		Z = () =>
			React.createElement(
				React.Fragment,
				null,
				React.createElement(X, { target: h, icon: 'visibility' }, k),
				React.createElement(Q, { name: h, title: k }, React.createElement(v, null))
			);
	J(h, { icon: 'visibility', render: Z });
})();
