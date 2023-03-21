<template>
  <div class="product">
    <div class="container">
      <nav class="product-breadcrumb" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
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

        <div class="col-12 col-md-6 product-intro">

          <div class="product-category">
            {{ product.category }}
          </div>
          <div class="product-title">
            {{ product.title }}
          </div>

          <div class="product-des">
            <h2>產品規格</h2>
            {{ product.description }}
          </div>
          <div class="product-content">
            <h2>產品說明</h2>
            {{ product.content }}
          </div>
          <div class="product-price">
            {{ product.price }}
            {{ product.origin_price }}
          </div>
          <div>
            <span>數量：</span>
            <button class="btn btn-dark">
              <i class="bi bi-plus"></i>
            </button>
            1
            {{ product.unit }}
            <button class="btn btn-dark">
              <i class="bi bi-dash"></i>
            </button>
          </div>
          <div class="product-intro-button">
            <button class="btn btn-outline-secondary btn-favorite ">加入至最愛</button>
            <button class="btn btn-dark">加入購物車</button>
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
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }

  .product-intro {
    display: flex;
    flex-direction: column;

    .product-category {
      font-size: 24px;
    }

    .product-title,
    .product-price {
      font-size: 30px;
    }

    .product-des,
    .product-content {
      font-size: 16px;
    }

    .product-intro-button {
      flex-basis: auto;
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      button {
        height: 60px;
        display: inline-block;
        flex-grow: 1;
        letter-spacing: 3px;
        font-weight: 900;
      }
      button:nth-child(1){
        margin-right: 30px;
      }
      .btn-favorite {
        border: 3px solid rgba(0,0,0,0.5);
      }
      .btn-add-cart {
        border: 1px solid #000;
      }
    }
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
}</style>
