module.exports = {
  entry: './server/server.js',
  output: {
    path: './server',
    filename: 'server.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: [/server/, /routes/]
        loader: 'babel',
      },
    ],
  },
};
