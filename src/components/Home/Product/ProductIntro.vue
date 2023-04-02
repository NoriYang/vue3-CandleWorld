<template>
  <div class="col-12 col-md-6 product-intro">
    <div class="product-category" v-if="product.category">
      <span>
        {{ product.category }}
      </span>
    </div>
    <div class="product-title" v-if="product.title">
      {{ product.title }}
    </div>
    <div class="product-price" v-if="product.price">
      <span>${{ $filters.currency(product.price) }}</span>
      <span>${{ $filters.currency(product.origin_price) }}</span>
    </div>
    <div class="product-des" v-if="product.description">
      <h2>產品規格</h2>
      <div v-html="textDescriptionBR"></div>
    </div>
    <div class="product-content" v-if="product.content">
      <h2>產品說明</h2>
      <div v-html="textContentBR"></div>
    </div>
    <div class="product-qty" v-if="product.unit">
      <span class="qty-text">數量：</span>
      <button @click="updateQty(-1)" class="btn btn-outline-dark">
        <i class="bi bi-dash"></i>
      </button>
      <span class="qty-unit">{{ qty }} {{ product.unit }}</span>
      <button @click="updateQty(1)" class="btn btn-outline-dark">
        <i class="bi bi-plus"></i>
      </button>
    </div>
    <div class="product-intro-button">
      <button v-if="isFav === -1" @click="addToFavorite" class="btn btn-favorite">加入至最愛</button>
      <button v-else @click="delFavorite" class="btn btn-danger like">
        <i class="bi bi-suit-heart-fill"></i>
      </button>
      <button @click="addToCart" class="btn btn-add-cart">加入購物車</button>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    product: {
      type: Object,
      default: () => { return {} }
    },
    isFav: {
      type: Number
    }
  },
  data () {
    return {
      qty: 1
    }
  },
  computed: {
    textDescriptionBR () {
      return this.product.description.replace(/\n/g, '<br>')
    },
    textContentBR () {
      return this.product.content.replace(/\n/g, '<br>')
    }
  },
  methods: {
    updateQty (num) {
      if (num === -1 && this.qty === 1) {
        return
      }
      this.qty += num
    },
    addToCart () {
      this.$emit('addCartHandler', this.qty)
    },
    addToFavorite () {
      this.$emit('addFavoriteHandler', this.product.id)
    },
    delFavorite () {
      this.$emit('openDelModalHandler')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.product-intro {
  display: flex;
  flex-direction: column;
  color: $main-font-color;

  .product-category {
    font-size: 24px;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 5px;

    span {
      background-color: $second-bgc;
      padding: 5px 10px;
      border-radius: 5px;
      color: white;
      font-weight: 900;
    }
  }

  .product-title {
    font-size: 30px;
    margin: 15px 0;
    font-weight: 900;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  }

  .product-price {
    background-image: linear-gradient(to left top,
        rgba($second-bgc, 0.1), rgba($second-bgc, 0.05));
    border-radius: 10px;
    padding: 25px 10px;
    position: relative;
    margin-bottom: 14px;

    span:nth-child(1) {
      font-size: 30px;
      font-weight: 900;
      margin-right: 10px;
      color: red;
      z-index: 2;
    }

    span:nth-child(2) {
      margin-right: 24px;
      font-size: 18px;
      text-decoration: line-through;
      font-weight: 600;
    }
  }

  .product-des,
  .product-content {
    font-size: 16px;
    margin-bottom: 24px;
    line-height: 32px;

    h2 {
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .product-qty {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 900;

    .qty-text {
      margin-right: 5px;
    }

    .qty-unit {
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  .product-intro-button {
    flex-basis: auto;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 15px;

    button {
      height: 60px;
      display: inline-block;
      flex-grow: 1;
      letter-spacing: 3px;
      font-weight: 900;
    }

    .btn-favorite {
      margin-right: 30px;
      border: 3px solid $main-font-color;
    }

    .like {
      margin-right: 30px;
      font-size: 1.2rem;
    }

    .btn-add-cart {
      background-color: $main-font-color;
      color: $main-bgc;
    }

    .btn-favorite:hover {
      background-color: $main-font-color;
      color: $main-bgc
    }

    .btn-add-cart:hover {
      filter: brightness(1.75);
    }
  }
}

@media (max-width: 991px) {
  .product-intro {
    .product-category {
      font-size: 20px;
      margin-top: 5px;
      margin-bottom: 0px;
    }

    .product-title {
      font-size: 24px;
      margin-bottom: 5px;
    }
  }

}

@media (max-width: 767px) {
  .product-intro {
    margin-top: 20px;

    .product-qty {
      margin-top: 10px;
      margin-bottom: 20px;

      .qty-text {
        font-size: 24px;
        margin-right: 5px;
      }

      .qty-unit {
        margin-left: 15px;
        margin-right: 15px;
      }
    }
  }
}
</style>
