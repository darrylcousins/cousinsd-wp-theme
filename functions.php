<?php
/**
 * _themename-wp-theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _themename-wp-theme
 */

if ( ! function_exists( '_themename_setup' ) ) :
  /**
  * Sets up theme defaults and registers support for various WordPress features.
  *
  * Note that this function is hooked into the after_setup_theme hook, which
  * runs before the init hook. The init hook is too late for some features, such
  * as indicating support for post thumbnails.
  */
  function _themename_setup() {
    /*
    * Let WordPress manage the document title.
    * By adding theme support, we declare that this theme does not use a
    * hard-coded <title> tag in the document head, and expect WordPress to
    * provide it for us.
    */
    add_theme_support( 'title-tag' );
  }
endif;
add_action( 'after_setup_theme', '_themename_setup' );

/**
 * Enqueue scripts and styles.
 */
function _themename_scripts() {
  wp_enqueue_style( '_themename-style', get_template_directory_uri() . '/dist/css/bundle.css' );
  wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', '_themename_scripts' );


