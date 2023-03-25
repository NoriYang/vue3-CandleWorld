<template>
  <div class="container">
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="row">
      <div class="col-12">
        <Cartlists @delListHandler="delCartList" @updateCartHandler="updateCart" :cartLists="cartLists"></Cartlists>
      </div>
      <div class="col-12">
        <button @click="goCartForm">確認購買</button>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import Cartlists from '@/components/Home/ShoppingCart/CartLists.vue'
import emitter from '@/methods/emitter.js'
export default {
  components: { Cartlists },
  data () {
    return {
      cartLists: [],
      isLoading: true
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
            this.getCart()
            this.updateNavCartLength()
          }
        })
    },
    goCartForm () {
      this.$router.push('/home/checkorder')
    },
    updateCart (list) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${list.id}`
      const payload = {
        data: {
          product_id: list.product_id,
          qty: list.qty
        }
      }
      this.$http.put(api, payload)
        .then(res => {
          this.isLoading = false
          this.getCart()
          this.updateNavCartLength()
        })
    },
    updateNavCartLength () {
      emitter.emit('updateCartLength')
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped></style>
