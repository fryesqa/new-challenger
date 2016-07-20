const fs = require('fs');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'server', 'server.js'),
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  output: {
    path: './server',
    filename: 'server.bundle.js'
  },
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
