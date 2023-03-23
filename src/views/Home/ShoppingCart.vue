<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 cart-lists">
        {{ CartLists }}
      </div>
      <div class="col-12 col-md-4 cart-info">
        button區域
      </div>
    </div>
    <br>
  </div>
</template>
<script>
export default {
  data () {
    return {
      CartLists: []
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
            this.CartLists = res.data.data.carts
            console.log(res.data.data.carts)
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
