module.exports = {
  entry: './src/javascript/index.js',
  output: {
    path: __dirname + '/build/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      },
    ]
  }
};
