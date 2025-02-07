const path = require("path"),
  resolve = (dir) => path.resolve(__dirname, dir),
  HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  target: "web",
  entry: resolve("../src/index.tsx"),
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../index.html"),
    }),
  ],
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
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
