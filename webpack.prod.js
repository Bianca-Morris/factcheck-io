const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: path.resolve(__dirname, 'client/app.jsx'),
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: ['babel-loader']
    },
    {
      test: /(\.css)$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin({ outputDirectory }),
    new HtmlWebpackPlugin({
      template: './client/public/index.html'
    })
  ]
};
