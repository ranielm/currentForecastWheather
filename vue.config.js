import { join } from 'path';
function resolveSrc(_path) {
  return join(__dirname, _path)
}
export const configureWebpack = {
  resolve: {
    alias: {
      'src': resolveSrc('src'),
      'assets': resolveSrc('src/assets')
    }
  }
};
export const css = {
  sourceMap: true
};
export const devServer = {
  historyApiFallback: true
};
