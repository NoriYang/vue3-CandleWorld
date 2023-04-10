<template>
  <div class="info-wrap">
    <div class="d-grid gap-2 ">
      <button class="clean-btn"
        :disabled="cartLength === 0"
        @click="cleanCart">清空購物車</button>
    </div>
    <div class="cart-info-lists">
      <h3 class="cart-info-title">訂單資訊</h3>
      <div class="info-list">
        <div>商品總額</div>
        <div>{{ $filters.currency(total) }}</div>
      </div>
      <div class="info-list">
        <div>商品數</div>
        <div>{{ cartLength }}</div>
      </div>
      <div class="d-grid gap-2">
        <button class="buy-btn"
          :disabled="cartLength === 0"
          @click="goCartForm">前往結帳</button>
      </div>
    </div>
    <div class="cart-info-lists">
      <h3 class="cart-info-title">購買須知</h3>
      <p class="cart-info-text">- 下單前請確認商品尺寸顏色及數量（不予以取消/修改）。</p>
      <p class="cart-info-text">- 下單後請於三天內付款，未付款則取消訂單。</p>
      <p class="cart-info-text">- 下單後（不含訂購當天）現貨商品約3 - 5工作天寄出商品，配送天數約3 - 5天，節慶假日物流量較多則可能延遲。</p>
      <p class="cart-info-text">- 瑕疵更換請於三天內寄回（超過期限恕不接受退換服務）。</p>
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
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;

    .cart-info-title {
      text-align: center;
      padding: 10px;
      padding-top: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-weight: bold;
      color: #3a3a3a;
    }

    .cart-info-text {
      padding: 5px;
      font-size: 18px;
      letter-spacing: 2px;
    }

    .info-list {
      display: flex;
      justify-content: space-between;
      padding: 10px 15px;
      font-size: 1.2rem;
    }

    .buy-btn {
      margin-left: 10px;
      margin-right: 10px;
      border: none;
      padding: 10px;
      letter-spacing: 10px;
      margin-top: 10px;
      font-size: 1.2rem;
    }

    .buy-btn {
      background-color: #069297;
      color: #fff;

    }

    .buy-btn:disabled {
      background-color: gray;
    }

    .main-buttons {
      background-color: #fff;
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      padding: 15px;
    }
  }
}

.clean-btn {
  background-color: inherit;
  border: 2px solid #d15662;
  color: #d15662;
  margin: 10px;
  padding: 10px;
  letter-spacing: 10px;
  font-size: 1.2rem;
}

.clean-btn:hover {
  background-color: #d15662;
  color: #eee;
}

.clean-btn:disabled {
  border: 1px solid gray;
  color: gray
}
</style>
