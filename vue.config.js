const path = require('path');
const sass = require('sass');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: sass
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.js', '.ts', '.vue', '.json', '.css', '.scss']
    },
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
      })
    ]
  }
};
