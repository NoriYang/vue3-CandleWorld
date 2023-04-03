module.exports = {
  publicPath: '/vue3-final-project/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'CandleWorld'
        return args
      })
  }
}
