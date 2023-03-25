<template>
  <div class="product">
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="container">
      <Breadcrumb :productTitle="product.title" :productCategory="product.category"></Breadcrumb>
      <div class="row product-main">

        <div class="col-12 col-md-6">
          <div class="product-img" :style="{ backgroundImage: `url(${product.imageUrl})` }">
          </div>
        </div>
        <ProductIntro :product="product" @addCartHandler="addCart"></ProductIntro>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Home/Product/Breadcrumb.vue'
import ProductIntro from '@/components/Home/Product/ProductIntro.vue'
import HomeLoading from '@/components/Content/HomeLoading.vue'
import emitter from '@/methods/emitter.js'

export default {
  components: { Breadcrumb, ProductIntro, HomeLoading },
  data () {
    return {
      product: {},
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      const id = this.$route.params.productId
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.product = res.data.product
          }
        })
    },
    addCart (qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const payload = {
        data: {
          product_id: this.product.id,
          qty: qty
        }
      }
      this.isLoading = true
      this.$http.post(api, payload)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.updateNavCartLength()
          }
        })
    },
    updateNavCartLength () {
      emitter.emit('updateCartLength')
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.product-main {
  min-height: 480px;
  margin-bottom: 5px;
  margin-top: 5px;

  .product-img {
    height: 720px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }
}

@media (max-width: 991px) {
  .product-main {
    .product-img {
      height: 600px;
    }
  }

}

@media (max-width: 767px) {

  .product-main {
    .product-img {
      height: 340px;
    }
  }
}
</style>
