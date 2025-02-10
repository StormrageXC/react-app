const { default: merge } = require("webpack-merge"),
  base = require("./webpack.base.js");
module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    client: {
      progress: true,
    },
    compress: true,
    hot: true,
    open: {
      app: {
        name: "goole-chrome",
        arguments: ["--incognito", "--new-window"],
      },
    },
    port: 8081, //监听端口
    proxy: [],
  },
});
