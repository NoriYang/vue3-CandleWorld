<template>
  <div class="product">
    <div class="container">
      <Breadcrumb :productTitle="product.title" :productCategory="product.category"></Breadcrumb>
      <div class="row product-main">

        <div class="col-12 col-md-6">
          <div class="product-img" :style="{ backgroundImage: `url(${product.imageUrl})` }">
          </div>
        </div>
        <ProductIntro :product="product"></ProductIntro>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Home/Product/Breadcrumb.vue'
import ProductIntro from '@/components/Home/Product/ProductIntro.vue'

export default {
  components: { Breadcrumb, ProductIntro },
  data () {
    return {
      product: {}
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
