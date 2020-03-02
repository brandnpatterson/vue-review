const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: 'public',
    hot: true,
    overlay: true
  },
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new VueLoaderPlugin()]
};
