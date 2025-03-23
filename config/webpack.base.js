const path = require("path"),
  { resolve } = path,
  HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(__dirname);
module.exports = {
  target: "web",
  entry: resolve("src/index.tsx"),
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("index.html"),
    }),
  ],
  output: {
    filename: "main.js",
    path: resolve("dist"),
    assetModuleFilename: "images/[hash][ext][query]", //自定义资源模块输出目录
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
