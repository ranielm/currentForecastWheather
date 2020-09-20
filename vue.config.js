const path = require('path');
function resolveSrc(_path) {
  return path.join(__dirname, _path)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src': resolveSrc('src'),
        'assets': resolveSrc('src/assets')
      }
    }
  },
  css: {
    sourceMap: true
  },
  devServer: {
    historyApiFallback: true
  }
};
