<template>
  <div class="info-wrap">
    <div class="cart-info-lists">
      <div class="info-list">
        <div>商品總額</div>
        <div>{{ $filters.currency(total) }}</div>
      </div>
      <div class="info-list">
        <div>商品數</div>
        <div>{{ cartLength }}</div>
      </div>
      <div class="d-grid gap-2">
        <button class="clean-btn" :disabled="cartLength === 0" @click="cleanCart">清空購物車</button>
      </div>
      <div class="d-grid gap-2">
        <button class="buy-btn" :disabled="cartLength === 0" @click="goCartForm">前往結帳</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    total: {
      type: Number
    },
    cartLength: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      couponCode: ''
    }
  },
  methods: {
    goCartForm () {
      this.$router.push('/checkorder')
    },
    cleanCart () {
      const id = ''
      const title = '購物車全部內容'
      this.$emit('cleanCartHandler', { id, title })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.info-wrap {
  position: sticky;
  top: 80px;

  .cart-info-lists {
    padding: 20px 10px;
    background-color: #ffffff96;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.05);
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.08);

    .info-list {
      display: flex;
      justify-content: space-between;
      padding: 10px 15px;
      font-size: 1.2rem;
    }

    .clean-btn,
    .buy-btn {
      margin-left: 10px;
      margin-right: 10px;
      border: none;
      padding: 10px;
      letter-spacing: 10px;
      margin-top: 10px;
      font-size: 1.2rem;
    }

    .clean-btn {
      background-color: #ffffff96;
      border: 2px solid #d15662;
      color: #d15662;

    }

    .buy-btn {
      background-color: #069297;
      color: #fff;

    }

    .buy-btn:disabled {
      background-color: gray;
    }

    .clean-btn:disabled {
      border: 1px solid gray;
      color: gray
    }

    .main-buttons {
      background-color: #fff;
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      padding: 15px;
    }
  }
}
</style>
