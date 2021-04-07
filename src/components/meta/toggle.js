/**
 * ToggleControl that updates a meta value.
 */

import PropTypes from 'prop-types';

const { ToggleControl } = wp.components;
const { select, dispatch } = wp.data;
const { Component } = wp.element;

export class MetaToggleControl extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: '',
		};

		this.setMetaValue = this.setMetaValue.bind(this);
		this.changeToggle = this.changeToggle.bind(this);
	}

	componentDidMount() {
		const metaValue = select('core/editor').getEditedPostAttribute('meta')[this.props.metaKey];

		this.setState({ checked: metaValue });
		this.props.onChange(metaValue);
	}

	setMetaValue(metaValue) {
		const meta = select('core/editor').getEditedPostAttribute('meta');

		dispatch('core/editor').editPost({
			meta: {
				...meta,
				[this.props.metaKey]: metaValue,
			},
		});
	}

	changeToggle() {
		const { checked } = this.state;

		this.setState({ checked: !checked });
		this.setMetaValue(!checked);
		this.props.onChange(!checked);
	}

	render() {
		const { label, help, className } = this.props;

		return (
			<ToggleControl
				label={label}
				help={help}
				checked={this.state.checked}
				onChange={this.changeToggle}
				className={className}
			/>
		);
	}
}

MetaToggleControl.defaultProps = {
	className: '',
	help: '',
	label: '',
	metaKey: '',
	onChange: () => {},
};

MetaToggleControl.propTypes = {
	className: PropTypes.string,
	help: PropTypes.string,
	label: PropTypes.string,
	metaKey: PropTypes.string,
	onChange: PropTypes.func,
};

export default MetaToggleControl;
