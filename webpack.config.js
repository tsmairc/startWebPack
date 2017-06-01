var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/public/assets'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            { 
                test:/\.(woff|svg|ttf|eot)$/,
                loader:'url-loader?limit=10000'
            }
            ,
            {
                test: /\.png$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new ExtractTextPlugin('main.css')
    ],
    resolve: {
        root: [path.resolve('./src')]
    }
};