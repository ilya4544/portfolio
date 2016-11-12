const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  {
       app: './app/app.js',
       works: './app/works.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: "pug" },
            { test: /\.css$/, exclude: /node_modules/, loaders: ["style", "css", "postcss"] },
            { test: /\.scss$/, exclude: /node_modules/, loaders: ["style", "css", "postcss", "sass"] },
            { test: /\.(png|jpg|jpeg)$/, exclude: /node_modules/, loader: 'file' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['es2015'] } },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file'}
        ]
    },
    postcss: function() {
        return [autoprefixer];
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ilya Lyamkin | Resume',
            chunks: ['app'],
            favicon: './app/images/favicon.ico'
        }),
        new HtmlWebpackPlugin({
            title: 'Ilya Lyamkin | Selected works',
            filename: 'works.html',
            chunks: ['works'],
            favicon: './app/images/favicon.ico'
        })
    ]
}
