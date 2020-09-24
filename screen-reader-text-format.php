<?php
/*
Plugin Name: Screen Reader Text Format
Plugin URI: https://github.com/reaktivstudios/screen-reader-text-format
Description: Adds a screen reader only text format to the block editor.
Author: Reaktiv Studios
Version: 1.0
Requires at least: 5.4
Author URI: https://reaktivstudios.com

Text Domain: screen-reader-text-format
Domain Path: /languages

@package screen-reader-text-format
*/

/*
	Copyright 2020 Reaktiv Studios, Josh Eaton

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; version 2 of the License (GPL v2) only.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

define( 'SROF_BLOCK_EDITOR', plugin_dir_path( __FILE__ ) );
define( 'SROF_BLOCK_EDITOR_URL', plugin_dir_url( __FILE__ ) );

/**
 * Loads the text domain.
 *
 * @return void
 */
function srtf_load_plugin_textdomain() {
    load_plugin_textdomain( 'screen-reader-text-format', FALSE, basename( dirname( __FILE__ ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'srtf_load_plugin_textdomain' );

/**
 * Block Initializer.
 */
require_once SROF_BLOCK_EDITOR . 'src/init.php';
