<!doctype html>
<!-- Darryl Cousins -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->
<head>
 
    <!--=== META TAGS ===-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="description" content="Keywords">
    <meta name="author" content="Darryl Cousins">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
     
    <!--=== LINK TAGS ===-->
    <link rel="shortcut icon" href="<?php echo THEME_DIR; ?>/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="<?php echo THEME_DIR; ?>/favicon.ico" type="image/x-icon" />	
<!--
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS2 Feed" href="<?php bloginfo('rss2_url'); ?>" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
-->
 
    <!--=== WP_HEAD() ===-->
    <?php wp_head(); ?>
      
</head>
  <body <?php body_class(); ?>>
 
    <header class="pv1 pv2-ns ph1 ph2-ns tc">
      <h1 class="f1 f-headline-ns mb0 pb0"><?php bloginfo('title') ?></h1>
      <h2 class="f2 f1-ns i system-serif mid-gray"><?php bloginfo('description') ?></h2>
    </header>
