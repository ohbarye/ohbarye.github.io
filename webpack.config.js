module.exports = {
  entry: './src/javascripts/index.js',
  output: {
    path: __dirname + '/build/javascripts',
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
