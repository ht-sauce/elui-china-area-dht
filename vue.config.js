const vueConfig = {
  devServer: {
    proxy: {
      '/test': {
        target: 'http://127.0.0.1:3000/',
        //ws: true,
        changeOrigin: true,
      },
      '/sns': {
        target: 'https://api.weixin.qq.com',
        //ws: true,
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '~@/styles/variables.scss';`,
      },
    },
  },
}

module.exports = vueConfig
