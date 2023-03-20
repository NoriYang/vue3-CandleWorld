<template>
  <div class="product">
    <div class="container">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/home/productsList">商品列表</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>

      <div class="row product-main">
        <div class="col-12 col-md-6">
          <div class="product-img" :style="{ backgroundImage: `url(${product.imageUrl})` }">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div>{{ product.category }}</div>
          <div>{{ product.title }}</div>
          <div>
            {{ product.price }}
            {{ product.origin_price }}
          </div>
          <div>
            {{ product.description }}
          </div>
          <div>
            {{ product.content }}
          </div>
          <div>
            數量：1組
          </div>
          <div>
            <button>加入最愛</button>
            <button>加入購物車</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
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
            console.log(res.data.product)
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
<style lang="scss">
.product-main {
  min-height: 480px;

  .product-img {
    height: 720px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.25);
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
      background-size: 80%;
    }
  }
}
</style>
