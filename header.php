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
  <body <?php body_class(); ?> style="background: #374d6d">
 
    <header class="pv1 pv1-ns ph1 ph1-ns tc">
      <h1 class="dn f1"><?php bloginfo('title') ?></h1>
      <h2 class="dn f2 i system-serif mid-gray"><?php bloginfo('description') ?></h2>
    </header>
