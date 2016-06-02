const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" },
            { test: /\.css$/, exclude: /node_modules/, loaders: ["style", "css", "postcss"] },
            { test: /\.scss$/, exclude: /node_modules/, loaders: ["style", "css", "postcss", "sass"] },
            { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'file' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    postcss: function() {
        return [autoprefixer];
    },
    plugins: [new HtmlWebpackPlugin()]
}
