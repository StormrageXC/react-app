const { default: merge } = require("webpack-merge"),
  base = require("./webpack.base.js");
module.exports = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    client: {
      progress: true,
    },
    compress: false, //gzip压缩
    hot: true,
    open: {
      //指定打开浏览器
      app: {
        name: "goole-chrome", //指定打开chrome
        arguments: ["--incognito", "--new-window"], //无痕，新的窗口
      },
    },
    port: 8081, //监听端口
    proxy: [],
  },
});
