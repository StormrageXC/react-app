import { resolve } from "path";
import os from "os";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import HappyPack from "happypack";
import AddAssetHtmlPlugin from "add-asset-html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length,
});
export default {
  target: "web",
  entry: resolve("src/index.tsx"),
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      base: { href: "/" },
      template: resolve("src/index.html"),
      publicPath: "/",
    }),

    // new webpack.DllReferencePlugin({
    //   manifest: resolve("dist/vendor-manifest.json"),
    // }),
    // new AddAssetHtmlPlugin({
    //   filepath: resolve("dist/vendor.dll.js"),
    //   publicPath: "/",
    // }),
    // new HappyPack({
    //   id: "happyBabel",
    //   loaders: ["babel-loader"],
    // }),
  ],
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true, // 开启缓存
      //   parallel: true, // 开启并行压缩
      //   uglifyOptions: {
      //     compress: {
      //       drop_console: true, // 移除console
      //       drop_debugger: true, // 移除debugger
      //     },
      //     output: {
      //       comments: false,
      //     },
      //   },
      // }),
    ],
  },
  output: {
    library: `react-app`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_react-app`,
    filename: "main.js",
    path: resolve("dist"),
    assetModuleFilename: "images/[name][ext]", //自定义资源模块输出目录
  },
  module: {
    rules: [
      // {
      //   test: /\.(tsx|ts|js|jsx)$/,
      //   use: ["happypack/loader?id=happyBabel"],
      // },
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(txt|hdr)$/i,
        type: "asset/source",
      },
      {
        test: /\.(gif|png|jpe?g|svg|jfif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb限制
          },
        },
      },
      {
        test: /\.mp4$/i,
        type: "asset/resource",
      },
      {
        test: /\.scss|css$/,
        use: [
          // "thread-loader",
          "style-loader",
          "thread-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
              }, // 开启css module ,module 为true时会为所有文件类型开启css module， 其属性auto为true时会根据特定文件类型css module
              importLoaders: 1, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // 自动解析确定的扩展
    alias: {
      src: resolve("src"),
    },
  },
};
