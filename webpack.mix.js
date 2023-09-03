const mix = require('laravel-mix');

mix.sass('src/scss/layout.scss', 'dist/css/')
    .sourceMaps(true, 'source-map');

mix.js('src/js/layout.js', 'dist/js/')
    .js('src/js/pages/home.js', 'dist/js/pages/')
    .sourceMaps(true, 'source-map');

// Wordpress Custom Admin Login CSS
mix.sass('src/scss/tmdr-admin.scss', 'dist/css/')
    .sass('src/scss/pages/home.scss', 'dist/css/pages/')
    .sourceMaps(true, 'source-map');


mix.options({
    processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

mix.disableNotifications()