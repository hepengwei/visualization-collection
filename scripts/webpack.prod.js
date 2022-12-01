const path = require("path");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const getBaseConfig = require("./webpack.base");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const prodConfig = {
  output: {
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../public", "smoke.mp4"),
          to: "smoke.mp4",
          toType: "file",
        },
      ],
    }),
  ],
};

module.exports = merge(getBaseConfig("production"), prodConfig);
