<template>
  <div>
    <div v-if="products.length !== 0" class="row mt-4 gx-3">
      <div class="card col-sm-12 col-md-4 col-lg-3" v-for="product of products" :key="product.id">
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
                <button class="btn" @click="removeFavorite(product.id, product.title)">
                  <i class="bi bi-bookmark-fill"></i>
                </button>
                <button class="btn" @click="addToCart(product.id, product.title)" :disabled="loadingItem === product.id">
                  <i v-if="loadingItem !== product.id" class="bi bi-cart3"></i>
                  <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-else class="row mt-4 gx-3">
      <div colspan="6" class="Empty-favorite">
        <h2>目前沒有關注的商品</h2>
        <span>快點去關注商品吧！
          <router-link to="/home/productslist/lists">商品列表</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    addToCart (productId, productTitle) {
      this.$emit('addCartHandler', { productId, productTitle })
    },
    setFavorite (productId) {
      this.$emit('setFavoriteHandler', productId)
    },
    removeFavorite (productId, productTitle) {
      this.$emit('removeFavoriteHandler', { productId, productTitle })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.products-items {
  padding-top: 0px;
  margin-top: 0px;
  border: 1px solid #000;
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

  }

  .card-title:nth-child(1) {
    color: $main-font-color;
  }

  .card-title:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
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

.Empty-favorite {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 900;
    font-size: 2rem;
  }

  span {
    font-size: 1.5rem;

    a {
      text-decoration: none;
    }
  }
}
</style>
