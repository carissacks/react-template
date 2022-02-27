const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    port: 3000,
    open: true,
    compress: true,
    hotOnly: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
