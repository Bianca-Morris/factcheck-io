const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: __dirname + outputDirectory,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    index: '',
    port: 3000,
    open: true,
    proxy: {
      "!/app": "http://localhost:8080",
      "/api": "http://localhost:8080"
    },
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public')
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
      template: "./src/public/index.html"
    })
  ]
};