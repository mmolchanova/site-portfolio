const webpack = require('webpack');
const UglifyJSPlagin = require('uglifyjs-webpack-plugin');

const config = {
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlagin({
            sourceMap: true
        })
    ]
};