const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 配置跨域
      "/backstage/api/": {
        ws: true,
        target: "https://www.sjhpt.com",
      },
    },
  },
})
