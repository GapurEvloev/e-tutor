const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 'production' or 'development'
  entry: path.resolve(__dirname, 'src', 'index.js'), // the entry point of the app (where the bundler starts the bundling process)
  output: {
    filename: '[name].[contenthash].js', // [name] is the name of the entry, [contenthash] is a hash of the content of the file
    path: path.resolve(__dirname, 'build'), // the folder where the build file will be
    clean: true, // clean the build folder before building
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      title: 'Webpack Demo',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
}