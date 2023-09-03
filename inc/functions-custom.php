<?php

/**
 * Functions for get wordpress current language
 * You just need to call the function in templates to get the current language
 * it is usefull when you work with polylang plugin
 * Expexted return format "en_us"
 * @return string
 */
function getCurrentLang() {
    if( function_exists('pll_current_language') ) {
        return pll_current_language();
    } else {
        return get_locale();
    }
}

/**
 * Functions to get page data object with page title only
 * See page title in page option general settings -> page link
 * @param string default empty
 * @return object
 */
function getPageData($page_title) {
    $pageData = get_field( 'page_links', 'page-links' );

    foreach($pageData as $data) {
        if ( $data['page_title'] === $page_title ) {
            return $data['page_object'];
        }
    }

    return 'No "' . $page_title . '" page_links configuration found.';
}