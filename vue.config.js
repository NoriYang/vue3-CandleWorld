module.exports = {
  publicPath: '/vue3-final-project/dist',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'CandleWorld'
        return args
      })
  }
}
