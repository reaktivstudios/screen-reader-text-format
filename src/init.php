<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @package screen-reader-only-format
 */

 namespace RKV\Screen\Reader\Text\Format;

/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function block_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'srof-blocks-js',
		SROF_BLOCK_EDITOR_URL . 'dist/main.js',
		[ 'wp-blocks', 'wp-element' ],
		'0.0.1',
		true
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' );

/**
 * Enqueue Gutenberg block assets for front end and editor.
 */
function dual_assets() {
	// Styles.
	wp_enqueue_style(
		'srof-blocks-editor-css',
		SROF_BLOCK_EDITOR_URL . 'dist/main.css',
		[ 'wp-edit-blocks', 'wp-codemirror' ],
		'0.1'
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\dual_assets' );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\dual_assets' );
