const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: path.resolve(__dirname, 'client/app.js'),
  output: {
    path: __dirname + outputDirectory,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/, 
      exclude: /node_modules/,
      loader: ['babel-loader']
    },
    {
      test: /(\.css)$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin({outputDirectory}),
    new HtmlWebpackPlugin({
      template: "./client/public/index.html"
    })
  ]
};