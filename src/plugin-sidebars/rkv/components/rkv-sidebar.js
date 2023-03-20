/**
 * RKV plugin sidebar component.
 */

import UserMetaCheckboxControl from '../../../components/meta/checkbox';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { PanelBody, PanelRow } = wp.components;

export class RkvSidebar extends Component {
	constructor() {
		super();

		// Initialize the state.
		this.state = {
			hideSRTextValue: false,
		};

		// Bind methods to "this".
		this.setHideSRTextValue = this.setHideSRTextValue.bind(this);
	}

	setHideSRTextValue(hideSRTextValue) {
		this.setState({ hideSRTextValue });
	}

	render() {
		return (
			<PanelBody
				title={__('Screen Reader Text Options', 'screen-reader-text-format')}
				initialOpen={true}
			>
				<PanelRow>
					<UserMetaCheckboxControl
						label={__('Always show screen reader text?', 'screen-reader-text-format')}
						metaKey="show_sr_text_in_editor"
						onChange={this.setHideSRTextValue}
					/>
				</PanelRow>
			</PanelBody>
		);
	}
}

export default RkvSidebar;
