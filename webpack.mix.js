const mix = require('laravel-mix')
const { resolve } = require('path')

const vuetify = require('vuetifyjs-mix-extension')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/bootstrap.js', 'public/js')
    .vuetify('vuetify-loader')
    .vue()
    .sourceMaps()
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            alias: {
                '@': resolve('resources/js'),
                '@components': resolve('resources/js/components'),
                '@common': resolve('resources/js/components/common'),
                '@layout': resolve('resources/js/components/layout'),
                '@ui': resolve('resources/js/components/ui'),
                '@pages': resolve('resources/js/pages'),
                '@plugins': resolve('resources/js/plugins'),
                '@services': resolve('resources/js/services'),
                '@store': resolve('resources/js/store'),
                '@modules': resolve('resources/js/store/modules'),
            }
        }
    })
