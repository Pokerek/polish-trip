const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const defaultConfig = new HtmlWebpackPlugin({
    hash: true,
    filename: 'index.html',
    template: './app/pages/index.html'
  });

  const plugin = {
    production: defaultConfig,
    development: defaultConfig
  };

  return plugin[env];
};
