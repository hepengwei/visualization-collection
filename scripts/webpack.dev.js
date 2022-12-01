const fs = require("fs");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const getBaseConfig = require("./webpack.base");

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const devConfig = {
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: fs.realpathSync(process.cwd()),
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
