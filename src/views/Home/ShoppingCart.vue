<template>
  <div>
    <CartBanner title="購物清單"
      imgUrl="https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      fontColor="#F7F1F0" boderColor="#F7F1F0"></CartBanner>
    <div class="container-xl">
      <HomeLoading :isLoading="isLoading"></HomeLoading>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-9">
          <Cartlists @delListHandler="delCartList" @updateCartHandler="updateCart" :cartLists="cartLists"></Cartlists>
        </div>
        <div class="col-12 col-md-12 col-lg-3">
          <CartInfo :total="total" :finalTotal="finalTotal" :cartLength="cartLists.length"
          @setCouponHandler="setCoupon"
          @cleanCartHandler="cleanCart"
          ></CartInfo>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>
<script>
import Cartlists from '@/components/Home/ShoppingCart/CartLists.vue'
import CartBanner from '@/components/Home/ImgBanner.vue'
import CartInfo from '@/components/Home/ShoppingCart/CartInfo.vue'
import emitter from '@/methods/emitter.js'
export default {
  components: { Cartlists, CartBanner, CartInfo },
  data () {
    return {
      cartLists: [],
      isLoading: true,

      total: 0,
      finalTotal: 0,

      couponCode: ''
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
            console.log(this.cartLists)
            this.getPrice()
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
    },
    setCoupon (couponCode) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const payload = {
        data: {
          code: couponCode
        }
      }
      this.$http.post(api, payload)
        .then(res => {
          console.log(res)
          this.getCart()
        })
    },
    getPrice () {
      let total = 0
      let finalTotal = 0
      this.cartLists.forEach((list) => {
        total += list.total
        finalTotal += list.final_total
      })
      this.total = total
      this.finalTotal = finalTotal
    },
    cleanCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(api)
        .then(res => {
          this.getCart()
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped>
// @import "@/assets/helpers/main.scss";
</style>
