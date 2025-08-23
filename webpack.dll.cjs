const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development", // 生产模式和开发模式构建产物不同需要区分
  entry: {
    vendor: ["react", "react-dom"], // 需要提前打包的库
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
