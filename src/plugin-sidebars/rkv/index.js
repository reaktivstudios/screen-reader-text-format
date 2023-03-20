/**
 * Registering a basic plugin with Gutenberg.
 * Adds functionality to Gutenberg by creating a sidebar plugin
 */

// Import dependencies.
import RkvSidebar from './components/rkv-sidebar';

const { __ } = wp.i18n;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

// Set a unique name for the sidebar.
const sidebarName = 'rkv-screen-reader-text-visibility';

// Add a label for the sidebar.
const sidebarLabel = __('Screen Reader Text Visibility');

// Render function.
const render = () => {
	return (
		<>
			<PluginSidebarMoreMenuItem target={sidebarName} icon="visibility">
				{sidebarLabel}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar name={sidebarName} title={sidebarLabel}>
				<RkvSidebar />
			</PluginSidebar>
		</>
	);
};

// Register the plugin for use in Gutenberg.
registerPlugin(sidebarName, {
	icon: 'visibility',
	render,
});
