<!DOCTYPE html>
<html lang="<?php echo getCurrentLang(); ?>">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”format-detection” content=”telephone=no”>
    <meta name="theme-color" content="#10AF13">
    <?php wp_head(); ?>
</head>

<body>
    <?php wp_body_open(); ?>
    <!-- <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <?php
                    if(function_exists('the_custom_logo')) {
                        the_custom_logo();
                    }
                ?>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul>
                        <?php 
                            // Header Main Navigation Menu
                            $args = array(
                                'theme_location' => 'main_menu',
                                'depth'          => 1,
                                'container'      => '', // remove div container
                                'item_wrap'      => '%3$s', // remove ul tag
                            );
                            wp_nav_menu( $args );
                        ?>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header> -->
    <main>

    <div class="loader">
        <div class="loader__counter" data-count="99">100</div>
    </div>