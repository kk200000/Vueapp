const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api': {
        target: 'http://8.130.32.5:8081/api',
        changeOrigin: true,  //默认为true 用于控制请求头中的host值
        pathRewrite:{
          '^/api' : '' // 重写请求
        }
      }
    }
  }
})
