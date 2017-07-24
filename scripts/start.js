const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack/webpack.config.dev.js');

config.entry.unshift('webpack-dev-server/client?http://localhost:8080/');
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  inline: true,
  historyApiFallback: true,
});
server.listen(process.env.PORT || 8080);
console.log(`Listening to port ${process.env.PORT || 8080}`);
