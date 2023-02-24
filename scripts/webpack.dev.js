const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const getBaseConfig = require("./webpack.base");

const { appDirectory } = require("./utils");

const devConfig = {
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: appDirectory,
    },
    hot: true,
    compress: false,
    port: 3002,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ],
};

module.exports = merge(getBaseConfig(), devConfig);
