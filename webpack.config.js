const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/matter.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /.jsx?$/,
              exclude: /node-modules/,
              loader: 'babel-loader'
            }
        ]
    }
}