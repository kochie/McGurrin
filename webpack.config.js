const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  resolve: { extensions: ['.js', '.jsx'] },
  entry: ['./src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        verbose: true,
      },
    ),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
