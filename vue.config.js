module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue3-CandleWorld/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // args[0].title = 'CandleWorld'
        // return args
        const [meta] = args
        meta.title = 'CandleWorld'
        meta.icon = 'favicon.ico'
        meta.meta = {
          keywords: '香氛蠟燭',
          og: {
            type: 'website',
            title: '香氛蠟燭',
            image: 'https://raw.githubusercontent.com/NoriYang/vue3-final-project/master/public/favicon.ico',
            description: '還記得大自然的味道嗎？我們使用最天然、無毒的原材料，讓你能依照自己的喜好，隨時隨地創造你最喜歡的居家環境氛圍！'
          }
        }
        return args
      })
  }
}
