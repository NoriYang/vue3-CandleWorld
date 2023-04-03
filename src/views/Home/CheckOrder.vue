<template>
  <div>
    <OrderBanner title="填寫訂單"
      imgUrl="https://images.unsplash.com/photo-1602693875034-52c6b2e79785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
      fontColor="#F7F1F0" boderColor="#F7F1F0"></OrderBanner>
    <div class="checkorder-main container">
      <HomeLoading :isLoading="isLoading"></HomeLoading>
      <div class="back-button">
        <router-link to="/home/Shoppingcart">
          <i class="bi bi-arrow-left"></i>
          回購物車
        </router-link>
      </div>
      <div class="row gx-5">
        <div class="col-12 col-md-12 col-lg-5">
          <OrderLists :cartLists="cartLists" :total="total" :finalTotal="finalTotal" @setCouponHandler="setCoupon">
          </OrderLists>
        </div>
        <div class="col-12 col-md-12 col-lg-7">
          <OrderForm @createOrderHandler="createOrder"></OrderForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderBanner from '@/components/Home/ImgBanner.vue'
import OrderLists from '@/components/Home/CheckOrder/OrderLists.vue'
import OrderForm from '@/components/Home/CheckOrder/OrderForm.vue'
export default {
  components: { OrderBanner, OrderLists, OrderForm },
  data () {
    return {
      isLoading: false,
      cartLists: [],
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
            this.getPrice()
          }
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
    setCoupon (couponCode) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const payload = {
        data: {
          code: couponCode
        }
      }
      this.$http.post(api, payload)
        .then(res => {
          this.getCart()
        })
    },
    createOrder (payload) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: payload })
        .then(res => {
          if (res.data.success) {
            const orderID = res.data.orderId
            this.$router.replace(`checkout/${orderID}`)
          }
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped>
.checkorder-main {
  margin-top: 20px;

  .back-button {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 10px;

    a {
      color: black;
      text-decoration: none;
    }
  }

}

@media (max-width: 991px) {
  .order-form-main {}

  .order-form-wrap {
    margin-top: 50px;
  }
}
</style>
