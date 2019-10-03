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

    /*--- REMOVE GENERATOR META TAG ---*/
    remove_action('wp_head', 'wp_generator');
  }
endif;
add_action( 'after_setup_theme', '_themename_setup' );

define("THEME_DIR", get_template_directory_uri());

/**
 * Enqueue scripts and styles.
 */
function _themename_scripts() {
  wp_enqueue_style( '_themename-style', THEME_DIR . '/dist/css/app.css' );
  wp_enqueue_style( '_themename-tachyons', THEME_DIR . '/dist/css/tachyons.css' );
  wp_enqueue_script( '_themename-scripts', THEME_DIR . '/dist/js/app.js', array(), false, true);
}
add_action( 'wp_enqueue_scripts', '_themename_scripts' );

/**
 * Adds favicon to header
 */
function _themename_favicon() {  
  $favicon = get_template_directory_uri() . '/favicon.ico';
  echo '<link rel="shortcut icon" href="' . $favicon . '" type="image/x-icon" />';
  echo "\r\n";
  echo '<link rel="icon" href="' . $favicon . '" type="image/x-icon" />';
  echo "\r\n";
}  
add_action('wp_head', '_themename_favicon', 5);

/**
 * Adds theme body class
 */
add_filter( 'body_class','_themename_body_classes' );
function _themename_body_classes( $classes ) {
  $classes[] = 'sans-serif';
  return $classes;
}

/**
 * Remove emoji script and styles from head
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
