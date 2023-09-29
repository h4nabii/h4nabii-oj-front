const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.plugin("monaco").use(new MonacoWebpackPlugin());
  },
  outputDir: "docs",
  publicPath:
    process.env.NODE_ENV === "production" ? "/h4nabii-oj-frontend/" : "/",
});
