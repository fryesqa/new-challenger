module.exports = {
  entry: './client/src/index.jsx',
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
        include: /client/,
        loader: 'babel',
      },
    ],
  },
};
