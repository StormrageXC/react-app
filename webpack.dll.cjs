const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "production",
  entry: {
    vendor: ["react"], // 需要提前打包的库
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist", "[name]-manifest.json"),
      name: "[name]_[hash]",
      dependencies: ["react"],
    }),
  ],
};
