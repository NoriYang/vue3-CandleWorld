<template>
  <div>
    <CartBanner title="購物清單"
      imgUrl="https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      fontColor="#F7F1F0"
      boderColor="#F7F1F0"></CartBanner>
    <div class="container-xl">
      <HomeLoading :isLoading="isLoading"></HomeLoading>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-9 main-table">
          <Cartlists @delListHandler="openDelListModal"
            @updateCartHandler="updateCart"
            :cartLists="cartLists">
          </Cartlists>
        </div>
        <div class="col-12 col-md-12 col-lg-9 lists-mobile">
          <CartListsMobile @delListHandler="openDelListModal"
            @updateCartHandler="updateCart"
            :cartLists="cartLists">
          </CartListsMobile>
        </div>
        <div class="col-12 col-md-12 col-lg-3">
          <CartInfo :total="total"
            :cartLength="getCartsLength"
            @setCouponHandler="setCoupon"
            @cleanCartHandler="openDelListModal"></CartInfo>
        </div>
      </div>
      <br>
    </div>
    <WarnModal ref="WarnModal"
      :delTitle="delTitle"
      @delItem="delCartList"
      @cleanCartHandler="cleanCart"></WarnModal>

  </div>
</template>
<script>
import Cartlists from '@/components/Frontend/ShoppingCart/CartLists.vue'
import CartListsMobile from '@/components/Frontend/ShoppingCart/CartListsMobile.vue'
import CartBanner from '@/components/Frontend/Content/ImgBanner.vue'
import CartInfo from '@/components/Frontend/ShoppingCart/CartInfo.vue'
import WarnModal from '@/components/Frontend/ShoppingCart/WarnModal.vue'

import emitter from '@/methods/emitter.js'
export default {
  components: { Cartlists, CartBanner, CartInfo, CartListsMobile, WarnModal },
  data () {
    return {
      cartLists: [],
      isLoading: true,
      total: 0,
      couponCode: '',
      delID: '',
      delTitle: ''
    }
  },
  computed: {
    getCartsLength () {
      return this.cartLists.reduce((acc, cur) => {
        return acc + cur.qty
      }, 0)
    }
  },
  methods: {
    openDelListModal ({ id, title }) {
      this.delID = id
      this.delTitle = title
      this.$refs.WarnModal.showModal()
    },
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
    delCartList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.delID}`
      this.isLoading = true
      this.$http.delete(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.getCart()
            this.updateNavCartLength()
          }
        })
      this.delID = ''
      this.delTitle = ''
      this.$refs.WarnModal.hideModal()
    },
    goCartForm () {
      this.$router.push('/checkorder')
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
      this.cartLists.forEach((list) => {
        total += list.total
      })
      this.total = total
    },
    cleanCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(api)
        .then(res => {
          this.getCart()
          this.updateNavCartLength()
        })
      this.delID = ''
      this.delTitle = ''
      this.$refs.WarnModal.hideModal()
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped>
.lists-mobile {
  display: none;
}

@media (max-width: 440px) {
  .main-table {
    display: none;
  }

  .lists-mobile {
    display: block;
  }
}
</style>
