const fs = require("fs");
const path = require("path");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const getBaseConfig = require("./webpack.base");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const prodConfig = {
  output: {
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolveApp("public"),
          to: resolveApp("build/public"),
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/*.html"],
          },
        },
      ],
    }),
  ],
};

module.exports = merge(getBaseConfig("production"), prodConfig);
