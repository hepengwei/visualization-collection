const { merge } = require("webpack-merge");
const getBaseConfig = require("./webpack.base");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const prodConfig = {};

module.exports = merge(getBaseConfig("production"), prodConfig);
