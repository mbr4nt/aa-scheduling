const HtmlWebPackPlugin = require("html-webpack-plugin");
const NodemonPlugin = require('nodemon-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry : "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin, new NodemonPlugin({
    script: "./server.js"
  })]
};
