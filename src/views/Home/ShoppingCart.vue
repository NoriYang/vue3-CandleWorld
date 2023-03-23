<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <Cartlists @delListHandler="delCartList" :cartLists="cartLists"></Cartlists>
      </div>
      <div class="col-12 col-md-4">
        button區域
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import Cartlists from '@/components/Home/ShoppingCart/CartLists.vue'

export default {
  components: { Cartlists },
  data () {
    return {
      cartLists: []
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.cartLists = res.data.data.carts
            console.log(res.data.data.carts)
          }
        })
    },
    delCartList (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            console.log('刪除成功', res.data)
          }
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped></style>
