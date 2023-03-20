(() => {
	var R = Object.create;
	var h = Object.defineProperty;
	var _ = Object.getOwnPropertyDescriptor;
	var v = Object.getOwnPropertyNames;
	var O = Object.getPrototypeOf,
		V = Object.prototype.hasOwnProperty;
	var i = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
	var k = (t, e, s, n) => {
		if ((e && typeof e == 'object') || typeof e == 'function')
			for (let r of v(e))
				!V.call(t, r) &&
					r !== s &&
					h(t, r, { get: () => e[r], enumerable: !(n = _(e, r)) || n.enumerable });
		return t;
	};
	var N = (t, e, s) => (
		(s = t != null ? R(O(t)) : {}),
		k(e || !t || !t.__esModule ? h(s, 'default', { value: t, enumerable: !0 }) : s, t)
	);
	var u = i((z, d) => {
		'use strict';
		var M = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		d.exports = M;
	});
	var b = i((J, g) => {
		'use strict';
		var E = u();
		function m() {}
		function y() {}
		y.resetWarningCache = m;
		g.exports = function () {
			function t(n, r, A, j, G, S) {
				if (S !== E) {
					var l = new Error(
						'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
					);
					throw ((l.name = 'Invariant Violation'), l);
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
				checkPropTypes: y,
				resetWarningCache: m,
			};
			return (s.PropTypes = s), s;
		};
	});
	var w = i((Z, f) => {
		f.exports = b()();
		var Q, X;
	});
	var a = N(w()),
		{ CheckboxControl: I } = wp.components,
		{ Component: U } = wp.element,
		o = class extends U {
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
				let { heading: e, label: s, help: n, className: r } = this.props;
				return React.createElement(I, {
					heading: e,
					label: s,
					help: n,
					checked: this.state.checked,
					onChange: this.changeChecked,
					className: r,
				});
			}
		};
	o.defaultProps = {
		className: '',
		heading: '',
		help: '',
		label: '',
		metaKey: '',
		onChange: () => {},
	};
	o.propTypes = {
		className: a.default.string,
		heading: a.default.string,
		help: a.default.string,
		label: a.default.string,
		metaKey: a.default.string,
		onChange: a.default.func,
	};
	var T = o;
	var { __: x } = wp.i18n,
		{ Component: B } = wp.element,
		{ PanelBody: D, PanelRow: F } = wp.components,
		p = class extends B {
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
					D,
					{ title: x('Screen Reader Text Options', 'screen-reader-text-format'), initialOpen: !0 },
					React.createElement(
						F,
						null,
						React.createElement(T, {
							label: x('Always show screen reader text?', 'screen-reader-text-format'),
							metaKey: 'show_sr_text_in_editor',
							onChange: this.setHideSRTextValue,
						})
					)
				);
			}
		},
		C = p;
	var { __: q } = wp.i18n,
		{ registerPlugin: H } = wp.plugins,
		{ PluginSidebar: K, PluginSidebarMoreMenuItem: L } = wp.editPost,
		c = 'rkv-screen-reader-text-visibility',
		P = q('Screen Reader Text Visibility'),
		W = () =>
			React.createElement(
				React.Fragment,
				null,
				React.createElement(L, { target: c, icon: 'visibility' }, P),
				React.createElement(K, { name: c, title: P }, React.createElement(C, null))
			);
	H(c, { icon: 'visibility', render: W });
})();
