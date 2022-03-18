/** @type {import('webpack/types').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: __dirname + "/src/index.js",
  mode: "production",
  output: {
    path: __dirname + "/build",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(gif|mp3)$/i,
        type: "asset/inline",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
