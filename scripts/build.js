const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');
const config = require('../webpack/webpack.config.prod.js');

function copyPublicFolder() {
  console.log('Building optimized production build...');
  fs.copySync(path.resolve('./public/'), path.resolve('./build/'), {
    dereference: true,
    filter: file => file !== path.resolve('./public/index.html'),
  });
}

function build() {
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err) => {
      if (err) {
        return reject(err);
      }
      console.log('Done!');
      return resolve();
    });
  });
}

copyPublicFolder();
build();
