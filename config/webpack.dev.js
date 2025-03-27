// const { default: merge } = require("webpack-merge"),
//   base = require("./webpack.base.js");
import { merge } from "webpack-merge";
import base from "./webpack.base.js";
export default merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    client: {
      progress: true, //在浏览器中以百分比显示编译进度
    },
    compress: true,
    hot: true,
    open: {
      app: {
        name: "chrome", // 打开指定浏览器各操作系统值不相同
        arguments: ["--incognito", "--new-window"], // 打开无痕模式
      },
    },
    port: 8081,
    proxy: [],
  },
});
