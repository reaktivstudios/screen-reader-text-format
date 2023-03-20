/**
 * Register a screen reader only text format.
 *
 * @package screen-reader-only-format
 */

import PropTypes from 'prop-types';

const __ = wp.i18n.__;
const registerFormatType = wp.richText.registerFormatType;
const toggleFormat = wp.richText.toggleFormat;
const RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;

const name = 'rkv/sr-only';
const title = __('Screen Reader Only', 'screen-reader-text-format');

const srOnlyEdit = ({ isActive, value, onChange, onFocus }) => {
	const onToggle = () => {
		onChange(toggleFormat(value, { type: name }));
	};

	const onClick = () => {
		onToggle();
		onFocus();
	};

	return (
		<>
			<RichTextToolbarButton icon="hidden" title={title} onClick={onClick} isActive={isActive} />
		</>
	);
};

srOnlyEdit.propTypes = {
	isActive: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
};

registerFormatType(name, {
	title,
	tagName: 'span',
	className: 'text-format-sr-only',
	edit: srOnlyEdit,
});
