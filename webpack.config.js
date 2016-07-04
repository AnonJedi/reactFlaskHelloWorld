var path = require('path');
module.exports = {
  entry: ['./app/static/javascript/app.js'],
  output: {
    path: './app/static/bin',
    filename: 'script.js'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel",
              query:
              {
                presets:['react']
              }
          }
      ]
  }
};