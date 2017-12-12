var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            // { test: /\.css$/, loader: 'css-loader' },
            // { test: /\.scss$/, loader: 'typings-for-css-modules-loader?modules&sass' },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    new ExtractTextPlugin('dist/styles/main.css', {
        allChunks: true
    })],
    devServer: {
        historyApiFallback: true
    }
}