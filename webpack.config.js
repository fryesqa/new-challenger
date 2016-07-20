const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: './client/public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './client',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: [/client/, path.resolve(__dirname, 'routes','routes.jsx')],
        loader: 'babel',
      },
    ],
  },
};
