const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve("style-loader"),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: require.resolve("css-loader"),
        options: cssOptions,
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          postcssOptions: {
            ident: "postcss",
            config: false,
          },
          sourceMap: isEnvDevelopment,
        },
      },
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve("resolve-url-loader"),
          options: {
            sourceMap: isEnvDevelopment,
            root: resolveApp("src"),
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true,
          },
        }
      );
    }
    return loaders;
  };

  return {
    mode: webpackEnv,
    target: ["browserslist"],
    entry: resolveApp("src/index.tsx"),
    output: {
      filename: "[name].js",
      path: resolveApp("build"),
    },
    resolve: {
      modules: [resolveApp("src"), "node_modules"],
      mainFiles: ["index"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@": resolveApp("src"),
        pages: resolveApp("src/pages"),
        components: resolveApp("src/components"),
        constants: resolveApp("src/constants"),
        images: resolveApp("src/images"),
        utils: resolveApp("src/utils"),
        routes: resolveApp("src/routes"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: "babel-loader",
          include: resolveApp("src"),
        },
        {
          test: cssRegex,
          include: [
            resolveApp("src"),
            resolveApp("node_modules", "antd", "dist"),
          ],
          exclude: cssModuleRegex,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: isEnvDevelopment,
            modules: {
              mode: "icss",
            },
          }),
          // Remove this when webpack adds a warning or an error for this.
          sideEffects: true,
        },
        {
          test: cssModuleRegex,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: isEnvDevelopment,
            modules: {
              mode: "local",
              getLocalIdent: getCSSModuleLocalIdent,
            },
          }),
        },
        {
          test: lessRegex,
          exclude: lessModuleRegex,
          use: [
            ...getStyleLoaders(
              {
                importLoaders: 3,
                sourceMap: isEnvDevelopment,
                modules: {
                  mode: "icss",
                },
              },
              "less-loader"
            ),
            {
              loader: "style-resources-loader",
              options: {
                patterns: resolveApp("src/global.less"),
              },
            },
          ],
          // Remove this when webpack adds a warning or an error for this.
          sideEffects: true,
        },
        {
          test: lessModuleRegex,
          use: [
            ...getStyleLoaders(
              {
                importLoaders: 3,
                sourceMap: isEnvDevelopment,
                modules: {
                  mode: "local",
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
              "less-loader"
            ),
            {
              loader: "style-resources-loader",
              options: {
                patterns: resolveApp("src/global.less"),
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          type: "asset",
          generator: {
            filename: "images/[contenthash:8][ext][query]",
          },
        },
        {
          test: /\.svg$/,
          use: [
            "babel-loader",
            {
              loader: "@svgr/webpack",
              options: {
                babel: false,
                icon: true,
              },
            },
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2|json)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/[name][ext][query]",
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles/[name].css",
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: resolveApp("public/index.html"),
      }),
    ],
    cache: { type: "filesystem" },
    performance: false,
  };
};
