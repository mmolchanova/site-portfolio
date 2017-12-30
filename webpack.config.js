const webpack = require('webpack');
const UglifyJSPlagin = require('uglifyjs-webpack-plugin');
const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src/scripts')
}

const config = {
    entry: PATHS.source + '/common/map/map.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlagin({
            sourceMap: true
        })
    ]
};

module.exports = config;