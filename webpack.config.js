const webpack = require('webpack');
const UglifyJSPlagin = require('uglifyjs-webpack-plugin');
const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src/scripts'),
    build: path.join(__dirname, 'build/assets/scripts/')
}

const config = {
    entry: {
        index: PATHS.source + '/index.js',
        blog: PATHS.source + '/blog.js',
        my_works: PATHS.source + '/my_works.js',
        about: PATHS.source + '/about.js',
        authorization: PATHS.source + '/authorization.js'
    },
    output: {
        path: PATHS.build,
        filename: './[name].js'
    },
    plugins: [
        new UglifyJSPlagin({
            sourceMap: true
        }),
        new webpack.ProvidePlugin ({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

module.exports = config;