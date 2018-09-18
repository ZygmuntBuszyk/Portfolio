module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(eot|woff)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  mode: 'none'
};
