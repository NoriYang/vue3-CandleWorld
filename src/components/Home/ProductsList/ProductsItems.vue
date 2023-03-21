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
                  <button class="btn btn-outline-dark">
                    <i class="bi bi-star"></i>
                  </button>
                  <button class="btn btn-outline-dark">
                    <i class="bi bi-cart3"></i>
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
    }
  },
  methods: {
    getProduct (id) {
      console.log(id)
      this.$router.push('/home/product/' + id)
    }
  }
}
</script>
<style lang="scss" scoped>
.products-items {
  padding-top: 0px;
  margin-top: 0px;
}

.card,
.cart-item {
  border: none;
  border-radius: 0px;
}

.card-item {
  border: none;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  .card-title {
    font-size: 18px;
    text-align: center;
    font-weight: 900;
  }

  .card-title:nth-child(2) {
    font-size: 16px;
    font-weight: 900;
  }

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
        font-size: 18px;
        font-weight: 900;
      }
    }

    .button-lists {
      button {
        margin-left: 5px;
      }

      i {
        font-size: 18px;
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
