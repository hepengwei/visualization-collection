const fs = require("fs");
const path = require("path");

/**
 * 获取 Node.js 进程的当前工作目录的绝对路径
 */
const appDirectory = fs.realpathSync(process.cwd());

/**
 * 返回相对于当前工作目录的绝对路径
 * @param {String} relativePath  需要返回的目录
 * @returns
 */
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appDirectory,
  resolveApp,
};
