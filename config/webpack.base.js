import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
export default {
  target: "web",
  entry: resolve("src/index.tsx"),
  plugins: [
    new HtmlWebpackPlugin({
      base: { href: "/" },
      template: resolve("index.html"),
    }),
  ],
  output: {
    library: `react-app`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_react-app`,
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
      {
        test: /\.scss|css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
