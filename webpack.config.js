module.exports = {
  entry: './src/javascripts/index.ts',
  output: {
    path: __dirname + '/build/javascripts',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  }
};
