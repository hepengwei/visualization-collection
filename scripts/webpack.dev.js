const { merge } = require("webpack-merge");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const getBaseConfig = require("./webpack.base");

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const devConfig = {
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
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

module.exports = merge(getBaseConfig("development"), devConfig);
