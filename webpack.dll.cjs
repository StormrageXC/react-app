const path = require("path");
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    vendor: ["react", "react-dom"], // 需要提前打包的库
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   base: { href: "/" },
    //   template: path.resolve("src/index.html"),
    // }),
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist", "[name]-manifest.json"),
      name: "[name]_[hash]",
    }),
  ],
};
