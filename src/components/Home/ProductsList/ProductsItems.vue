<template>
  <div class="products-items col-md-9 col-lg-10">
    <div class="container">
      <div class="row mt-4 gx-3">
        <div class="card col-sm-6 col-md-6 col-lg-3" v-for="product of products" :key="product.id">
          <div class="card-item">
            <div class="card-item-img" :style="{ backgroundImage: `url(${product.imageUrl})` }">
              <div class="enter-item" @click="getProduct(product.id)">
                <i class="bi bi-hand-index-thumb-fill"></i>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.title.split('-')[0] }}</h5>
              <h5 class="card-title">{{ product.title.split('-')[1] }}</h5>
              <div class="card-body-bottom">
                <div class="price-lists">
                  <span class="origin-price">${{ $filters.currency(product.origin_price) }}</span>
                  <span class="price">${{ $filters.currency(product.price) }}</span>
                </div>
                <div class="button-lists">
                  <button class="btn">
                    <i class="bi bi-bookmark"></i>
                  </button>
                  <button class="btn" @click="addToCart(product.id)" :disabled="loadingItem === product.id">
                    <i v-if="loadingItem !== product.id"
                      class="bi bi-cart3"></i>
                    <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    sidebarTarget: {
      type: String,
      default: '全部商品'
    },
    products: {
      type: Array,
      default: () => []
    },
    loadingItem: {
      type: String,
      default: ''
    }
  },
  methods: {
    getProduct (id) {
      this.$router.push('/home/product/' + id)
    },
    addToCart (productId) {
      this.$emit('addCartHandler', productId)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.products-items {
  padding-top: 0px;
  margin-top: 0px;
}

.card,
.cart-item {
  border: none;
  border-radius: 0px;
  background-color: inherit;
}

.card-item {
  border: none;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  color: $main-font-color;
  border-radius: 0 0 5px 5px;

  .card-item-img {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;

    .enter-item {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.7);
      width: 100%;
      height: 100%;
      opacity: 0;

      i {
        color: $main-font-color;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 18px;
        transform: translateX(-50%) translateY(-50%);
      }
    }

    .enter-item:hover {
      animation: 0.5s enterItem forwards ease-in-out;

      i {
        animation: 0.5s enterItemIcon forwards ease-in-out;
      }
    }
  }

  @keyframes enterItem {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100;
    }
  }

  @keyframes enterItemIcon {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(2);
    }
  }

  .card-title {
    font-size: 18px;
    text-align: center;
    font-weight: 900;
  }

  .card-title:nth-child(1) {
    color: $main-font-color;
  }

  .card-title:nth-child(2) {
    font-size: 16px;
    font-weight: 900;
    color: $main-font-color;
  }

  .card-body {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  .card-body-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .price-lists {
      margin-bottom: -5px;

      span {
        display: flex;
      }

      .origin-price {
        text-decoration: line-through;
        font-size: 14px;
      }

      .price {
        font-size: 20px;
        font-weight: 900;
      }
    }

    .button-lists {
      button {
        margin-left: 5px;
        color: $main-font-color;
      }

      i {
        font-size: 16px;
      }

      button:hover {}

      button:nth-child(1) {
        color: $third-bgc;
        border: 1px solid $third-bgc;
      }

      button:nth-child(2) {
        background-color: $third-bgc;
        color: $main-bgc;
      }
    }
  }
}

@media(max-width: 764px) {
  .sidebar {
    position: static;
  }
}
</style>
