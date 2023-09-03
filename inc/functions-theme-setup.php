<?php

/**
 * This function is use to get image background and logo for login page
 * The background image is set from admin page 
 */
function tmdr_custom_admin_login() {
    
    // Add Background Image to Admin Login Page
    if(get_field('login_image', 'general-settings')) {
        echo '
        <style type="text/css">
            body.login:before {
                background-image: url("' . get_field('login_image', 'general-settings')['sizes']['large'] . '");
            }
        </style>
        ';
    }

    // Add Custom Logo to Admin Login Page
    $custom_logo = get_theme_mod( 'custom_logo' );
    $logo = wp_get_attachment_image_src( $custom_logo , 'full' );
    
    echo '<style type="text/css">
    #login h1 a {
        background-image: url(' . $logo[0] . ');
    }
    </style>';
    
}
add_action('login_enqueue_scripts', 'tmdr_custom_admin_login');

/**
 * Function to set the logo link in login page to our website home page
 * If we didn't change it, it will redirect to wordpress.org website
 */
function tmdr_logo_url_login() {
    return home_url();
}
add_filter('login_headerurl', 'tmdr_logo_url_login');

/**
 * Change logo alt text in login page to match the website name
 */
function tmdr_logo_url_title_login() {
    return wp_get_theme()->get('Theme Name');
}
add_filter('login_headertitle', 'tmdr_logo_url_title_login');


/**
 * Add google recaptcha badge in login page
 */
function tmdr_recaptcha_badge_login() { 
    ?>
    
    <div class="message captcha-text">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer noopener">Terms of Service</a> apply.</div>
    
    <?php 
}
add_action('login_form','tmdr_recaptcha_badge_login');

/**
 * Change login logo title
 */
function tmdr_custom_title_login($origtitle) { 
    
    return get_bloginfo('name').' - Login';
    
}
add_filter('login_title', 'tmdr_custom_title_login', 99);

/**
 * Function to add custom logo upload via menu appearance > customize
 * This function also add support for <title> tag in wp_head, so you dont need to add it manually
 */
function tmdr_theme_setup() {
    /**
     * Enable title tag for wordpress
     * @link https://codex.wordpress.org/Title_Tag
     */
    add_theme_support( 'title-tag' );

    // Enable custom logo upload
    $defaults = array(
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme','tmdr_theme_setup');

/**
 * Enable wordpress submenu in admin under menu appearance
 * Also register starter menu which is main navbar and footer navbar
 * register_nav_menu need 2 parameter
 * First parameter is location identifier, like a slug
 * Second parameter is location descriptive text
 * @link https://developer.wordpress.org/reference/functions/register_nav_menu/
 */
function tmdr_menu_setup() {
    add_theme_support('menus');
    register_nav_menu('main_menu', 'Main Navbar');
    register_nav_menu('footer', 'Footer Navbar');
    
}
add_action('init', 'tmdr_menu_setup');

/**
 * Replace custom logo class
 */
function tmdr_change_logo_class($html) {
    $html = str_replace('custom-logo-link', 'navbar-brand', $html);
    $html = str_replace('custom-logo', 'img-responsive', $html);
    return $html;
}
add_filter('get_custom_logo', 'tmdr_change_logo_class');