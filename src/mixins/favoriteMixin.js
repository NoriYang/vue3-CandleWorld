export default {
  data () {
    return {
      products: [],
      FavoriteItems: [],
      favoriteFilter: [],
      isLoading: false,
      delTitle: 'all',
      delProductId: ''
    }
  },
  methods: {
    // 初始化
    favoriteInit () {
      this.getLoaclFavorite()
      this.getFavorite()
    },
    // 每個瀏覽器的Favorite
    getLoaclFavorite () {
      const tempFavoriteArr = localStorage.getItem('FavoriteArr')
      this.FavoriteItems = JSON.parse(tempFavoriteArr !== null ? tempFavoriteArr : '[]')
    },
    // 從products獲取使用者的Favorite
    getFavorite () {
      const productslength = this.products.length
      const FavoriteItemslength = this.FavoriteItems.length
      this.favoriteFilter = []
      for (let i = 0; i < FavoriteItemslength; i++) {
        for (let y = 0; y < productslength; y++) {
          if (this.FavoriteItems[i] === this.products[y].id) {
            this.favoriteFilter.push(this.products[y])
          }
        }
      }
    },
    // 新增Favorite
    setFavorite (productID) {
      const tempFavoriteArr = localStorage.getItem('FavoriteArr')
      let localFavoriteArr = JSON.parse(tempFavoriteArr !== null ? tempFavoriteArr : '[]')
      localFavoriteArr.push(productID)
      localFavoriteArr = JSON.stringify(localFavoriteArr)
      localStorage.setItem('FavoriteArr', localFavoriteArr)
      this.favoriteInit()
    },
    // 刪除Favorite
    removeFavorite (productID) {
      const tempFavoriteArr = localStorage.getItem('FavoriteArr')
      let localFavoriteArr = JSON.parse(tempFavoriteArr !== null ? tempFavoriteArr : '[]')
      const delIndex = localFavoriteArr.findIndex(item => {
        return item === productID
      })
      localFavoriteArr.splice(delIndex, 1)
      localFavoriteArr = JSON.stringify(localFavoriteArr)
      localStorage.setItem('FavoriteArr', localFavoriteArr)
      this.favoriteInit()
    },
    cleanFavoriteAll () {
      localStorage.removeItem('FavoriteArr')
      this.favoriteInit()
    }
  }
}
