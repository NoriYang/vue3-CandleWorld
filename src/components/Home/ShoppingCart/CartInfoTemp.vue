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

      <div class="info-list discount-text">
        <div>折價</div>
        <div>{{ $filters.currency(total - finalTotal) }}</div>
      </div>

      <div class="info-list total-price-text">
        <div>總價</div>
        <div>{{ $filters.currency(finalTotal) }}</div>
      </div>
    </div>
    <div class="coupon">
      <input type="text" v-model="couponCode" placeholder="請輸入折扣碼">
      <button @click="setCoupon">確認</button>
    </div>
    <div class="main-buttons">
      <div class="d-grid gap-2">
        <button class="clean-btn" :disabled="cartLength === 0" @click="cleanCart">清空購物車</button>
      </div>
      <div class="d-grid gap-2">
        <button class="buy-btn" :disabled="cartLength === 0" @click="goCartForm">確認購買</button>
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
    finalTotal: {
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
      this.$router.push('/home/checkorder')
    },
    setCoupon () {
      this.$emit('setCouponHandler', this.couponCode)
      // this.couponCode = ''
    },
    cleanCart () {
      const id = ''
      const title = '購物車全部內容'
      this.$emit('cleanCartHandler', { id, title })
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.info-wrap {
  position: sticky;
  top: 80px;
}

.cart-info-lists {
  padding: 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.05);
  font-weight: 900;
  text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.08);

  .info-list {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 16px;
  }

}

.discount-text {
  color: #dc3545;
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
}

.total-price-text {
  color: #198754;
  font-weight: 900;
}

.coupon {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.05);

  input {
    height: 40px;
    padding: 5px;
    max-width: 150px;
  }

  button {
    background-color: $third-bgc;
    color: white;
    height: 40px;
    min-width: 30px;
    padding: 5px;
    border: none;
    font-weight: 600;
  }
}

.clean-btn,
.buy-btn {
  border: none;
  padding: 10px;
  letter-spacing: 10px;
  margin-top: 10px;
  font-size: 18px;
}

.clean-btn {
  background-color: #fff;
  border: 2px solid #d15662;
  color: #d15662;
  font-weight: 600;
}

.buy-btn {
  background-color: #069297;
  color: #fff;
  font-weight: 600;
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

@media (max-width: 991px) {
  .coupon {
    input {
      max-width: none;
    }
  }
}
</style>
