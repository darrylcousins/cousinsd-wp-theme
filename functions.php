<?php
/**
 * cousinsd-wp-theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package cousinsd-wp-theme
 */

if ( ! function_exists( 'cousinsd_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function cousinsd_setup() {
		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );
	}
endif;
add_action( 'after_setup_theme', 'cousinsd_setup' );

/**
 * Enqueue scripts and styles.
 */
function cousinsd_scripts() {

	wp_enqueue_style( 'cousinsd-style', get_template_directory_uri() . '/dist/css/bundle.css' );

}
add_action( 'wp_enqueue_scripts', 'cousinsd_scripts' );


