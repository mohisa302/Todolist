const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-unresolved

module.exports = {
  module: {
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
  mode: 'production',
};
