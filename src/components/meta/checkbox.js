/**
 * CheckboxControl that updates a UserMeta value.
 */

import PropTypes from 'prop-types';

const { CheckboxControl } = wp.components;
const { select } = wp.data;
const { Component } = wp.element;

export class UserMetaCheckboxControl extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: '',
		};

		this.setUserMetaValue = this.setUserMetaValue.bind(this);
		this.changeChecked = this.changeChecked.bind(this);
	}

	componentDidMount() {
		wp.apiFetch( {
			path: '/wp/v2/users/me',
			method: 'GET'
		} ).then( ( response ) => {
			const UserMetaValue = response.meta[this.props.metaKey] || false;
			this.setState({ checked: UserMetaValue });
			this.props.onChange(UserMetaValue);
			this.updateBodyClass(UserMetaValue);
		});
	}

	setUserMetaValue(UserMetaValue) {
		wp.apiFetch( {
			path: '/wp/v2/users/me',
			method: 'POST',
			data: {
				meta: {
					[this.props.metaKey]: UserMetaValue,
				}
			}
		} );
	}

	changeChecked(checked) {
		this.setState({ checked });
		this.setUserMetaValue(checked);
		this.props.onChange(checked);
		this.updateBodyClass(checked);
	}

	updateBodyClass(checked) {
		if ( checked ) {
			document.body.classList.add( 'sr-only-show-always' );
		} else {
			document.body.classList.remove( 'sr-only-show-always' );
		}
	}

	render() {
		const { heading, label, help, className } = this.props;

		return (
			<CheckboxControl
				heading={heading}
				label={label}
				help={help}
				checked={this.state.checked}
				onChange={this.changeChecked}
				className={className}
			/>
		);
	}
}

UserMetaCheckboxControl.defaultProps = {
	className: '',
	heading: '',
	help: '',
	label: '',
	metaKey: '',
	onChange: () => {},
};

UserMetaCheckboxControl.propTypes = {
	className: PropTypes.string,
	heading: PropTypes.string,
	help: PropTypes.string,
	label: PropTypes.string,
	metaKey: PropTypes.string,
	onChange: PropTypes.func,
};

export default UserMetaCheckboxControl;
