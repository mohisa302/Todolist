const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-unresolved
const path = require('path');

module.exports = {
  module: {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
