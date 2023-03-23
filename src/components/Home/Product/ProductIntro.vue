<template>
  <div class="col-12 col-md-6 product-intro">
    <div class="product-category">
      <span>
        {{ product.category }}
      </span>
    </div>
    <div class="product-title">
      {{ product.title }}
    </div>
    <div class="product-price">
      <span>${{ $filters.currency(product.price) }}</span>
      <span>${{ $filters.currency(product.origin_price) }}</span>
    </div>
    <div class="product-des">
      <h2>產品規格</h2>
      {{ product.description }}
    </div>
    <div class="product-content">
      <h2>產品說明</h2>
      {{ product.content }}
    </div>

    <div class="product-qty">
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
      <button class="btn btn-favorite">加入至最愛</button>
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
    }
  },
  data () {
    return {
      qty: 1
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
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const payload = {
        data: {
          product_id: this.product.id,
          qty: this.qty
        }
      }
      this.isLoading = true
      this.$http.post(api, payload)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
          }
        })
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

    button {
      height: 60px;
      display: inline-block;
      flex-grow: 1;
      letter-spacing: 3px;
      font-weight: 900;
      color: $main-font-color;
    }

    .btn-favorite {
      margin-right: 30px;
      border: 3px solid $main-font-color;
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
