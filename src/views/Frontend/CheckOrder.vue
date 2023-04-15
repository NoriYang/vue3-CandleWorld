<template>
  <div>
    <OrderBanner title="填寫訂單"
      imgUrl="https://images.unsplash.com/photo-1602693875034-52c6b2e79785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
      fontColor="#F7F1F0"
      boderColor="#F7F1F0"></OrderBanner>
    <div class="checkorder-main container">
      <HomeLoading :isLoading="isLoading"></HomeLoading>
      <div class="row gx-5">
        <div class="col-12 top-btns">
          <div class="back-button">
            <button @click="backBtn">
              <i class="bi bi-arrow-left"></i>
              回購物車
            </button>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-5 mb-4">
          <OrderForm @createOrderHandler="createOrder"></OrderForm>
        </div>
        <div class="col-12 col-md-12 col-lg-7">
          <OrderLists :cartLists="cartLists"
            :total="total"
            :finalTotal="finalTotal"
            :hasCouponCode="hasCouponCode"
            :couponCode="couponCode"
            @setCouponHandler="setCoupon">
          </OrderLists>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderBanner from '@/components/Frontend/Content/ImgBanner.vue'
import OrderLists from '@/components/Frontend/CheckOrder/OrderLists.vue'
import OrderForm from '@/components/Frontend/CheckOrder/OrderForm.vue'
import emitter from '@/methods/emitter'
export default {
  components: { OrderBanner, OrderLists, OrderForm },
  data () {
    return {
      isLoading: false,
      cartLists: [],
      total: 0,
      finalTotal: 0,
      hasCouponCode: false,
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
            if (this.cartLists.length === 0) {
              this.$router.replace('/productslist/lists')
            }
            this.getPrice()
          }
          this.checkCouponCode()
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
      console.log(couponCode)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const payload = {
        data: {
          code: couponCode
        }
      }
      this.$http.post(api, payload)
        .then(res => {
          if (res.data.success) {
            emitter.emit('push-message', {
              style: 'success',
              title: `${res.data.message}`
            })
          } else {
            emitter.emit('push-message', {
              style: 'danger',
              title: `${res.data.message}`
            })
          }
          this.getCart()
        })
    },
    createOrder (payload) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: payload })
        .then(res => {
          if (res.data.success) {
            const orderID = res.data.orderId
            emitter.emit('updateCartLength')
            this.$router.replace(`checkout/${orderID}`)
          }
        })
    },
    checkCouponCode () {
      this.hasCouponCode = !!this.cartLists[0].coupon
      if (this.hasCouponCode) this.couponCode = this.cartLists[0].coupon.code
    },
    backBtn () {
      this.$router.push('/shoppingCart')
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";
.checkorder-main {
  margin-top: 20px;

  .top-btns {
    padding: 10px;
  }

  .back-button {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 5px 15px;

    button {
      padding: 10px;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: black;
    }
    button:hover{
      background-color: $second-bgc;
      color: white;
      transition: 0.2s;
    }
  }

  .back-button a:hover {
    color: white;
    background-color: #333;
  }
}

@media (max-width: 991px) {
  .order-form-wrap {
    margin-top: 50px;
  }
}
</style>
