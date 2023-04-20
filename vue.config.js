const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/jojo': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/jojo':''},
        // ws: true, //用于支持websocket,默认值为true
        // changeOrigin: true //用于控制请求头中的host值,默认值为true
      },
      '/atguigu': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/atguigu':''},
        // ws: true, //用于支持websocket,默认值为true
        // changeOrigin: true //用于控制请求头中的host值,默认值为true
      }
    }
  }
})
