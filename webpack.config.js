const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {

  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&overlay=true',
      path.join(__dirname, './src/index.js'),
    ],
    styles: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&overlay=true',
      path.join(__dirname, './src/index.scss'),
    ],
    vendor: ['lodash'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].[hash].js',
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      cache: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel?presets[]=es2015-webpack,presets[]=react'],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css?sourceMap'],
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        include: path.join(__dirname, 'src'),
        loader: 'file',
      },
    ],
  },

};

module.exports = config;
