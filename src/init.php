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
 * Enqueue Gutenberg block assets for front end and editor.
 */
function dual_assets() {
	// Styles.
	wp_enqueue_style(
		'srtf-blocks-editor-css',
		SROF_BLOCK_EDITOR_URL . 'dist/main.css',
		[],
		'0.2'
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\dual_assets' );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\dual_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function block_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'srtf-blocks-js',
		SROF_BLOCK_EDITOR_URL . 'dist/main.js',
		[ 'wp-blocks', 'wp-element' ],
		'0.0.2',
		true
	);

	wp_set_script_translations( 'srtf-blocks-js', 'screen-reader-text-format', SROF_BLOCK_EDITOR . 'languages' );

	$css = sprintf(
		'.block-editor-page .is-selected .text-format-sr-only:hover:after,
		.block-editor-page .is-selected .text-format-sr-only:focus:after {
			content: %s;
		}',
		wp_json_encode( __( '* Screen Reader Text', 'screen-reader-only-format' ) )
	);

	wp_add_inline_style( 'srtf-blocks-editor-css', $css );

	if ( get_current_screen()->base === 'post' ) {
		wp_enqueue_script(
			'srtf-sidebars-js',
			SROF_BLOCK_EDITOR_URL . 'dist/sidebars.js',
			[ 'wp-blocks', 'wp-element' ],
			'0.0.2',
			true
		);
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' );

/**
 * Registers the user meta for always showing the screen reader text.
 */
function register_user_meta() {
	register_meta(
		'user',
		'show_sr_text_in_editor',
		array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\register_user_meta' );

/**
 * Adds the always show screen reader text body class if needed.
 *
 * @param mixed $classes The body classes.
 * @return mixed
 */
function admin_body_class( $classes ) {
	if ( get_user_meta( get_current_user_id(), 'show_sr_text_in_editor', true ) ) {
		if ( is_array( $classes ) ) {
			$classes[] = 'sr-only-show-always';
		} else {
			$classes .= ' sr-only-show-always';
		}
	}

	return $classes;
}
add_filter( 'admin_body_class', __NAMESPACE__ . '\admin_body_class' );
