<template>
  <div class="order-lists-wrap">
    <div class="order-lists">
      <h2 class="table-title">購物清單</h2>
      <table class="table">
        <thead class="table-thead">
          <tr>
            <th class="list-title">品名</th>
            <th class="list-qty">數量</th>
            <th class="list-price">單價</th>
          </tr>
        </thead>
        <tbody class="table-tbody">
          <tr v-for="list of cartLists" :key="list.id">
            <td class="list-title">
              {{ list.product.title }}
            </td>
            <td>{{ list.qty }}</td>
            <td class="list-price">
              {{ $filters.currency(list.product.price) }}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="order-info">
        <div class="info-list">
          <div>商品數</div>
          <div>{{ cartLists.length }}</div>
        </div>
        <div class="info-list">
          <div>商品總額</div>
          <div>{{ $filters.currency(total) }}</div>
        </div>
        <div class="info-list discount-text">
          <div>折價</div>
          <div>{{ $filters.currency(total - finalTotal) }}</div>
        </div>
        <div class="info-list total-price-text">
          <div>總計</div>
          <div>{{ $filters.currency(finalTotal) }}</div>
        </div>
      </div>
      <div class="coupon-wrap">
        <input type="text" v-model="couponCode" placeholder="請輸入折扣碼">
        <button @click="setCoupon" :disabled="couponCode === ''">確認</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cartLists: {
      type: Array
    },
    total: {
      type: Number
    },
    finalTotal: {
      type: Number
    }
  },
  data () {
    return {
      couponCode: ''
    }
  },
  methods: {
    setCoupon () {
      this.$emit('setCouponHandler', this.couponCode)
    }
  }
}
</script>
<style lang="scss">
.order-lists-wrap {
  .order-lists {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    text-align: center;
    min-height: 607px;

    .table-title {
      font-weight: 900;
      padding: 30px 0px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.4);
      margin-bottom: 5px;
    }

    .table {
      margin-bottom: 5px;

      .table-thead {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 10px;

        .list-title {
          text-align: center;
        }

        .list-qty {
          min-width: 50px;
        }

        .list-price {
          text-align: right;
          min-width: 50px;
        }
      }

      .table-tbody tr,
      .table-tbody td {
        border: none;
        vertical-align: middle;
      }

      .table-tbody {
        font-size: 16px;

        .list-title {
          text-align: left;
          padding-left: 20px;
        }

        .list-price {
          text-align: right;
        }
      }
    }

    .order-info {
      padding-top: 10px;
      padding-left: 20px;
      padding-right: 30px;
      width: 100%;
      font-size: 18px;
      border-top: 2px solid rgba(0, 0, 0, 0.4);

      .info-list {
        margin-top: 10px;
        display: flex;
        width: 100%;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.2);

        div:nth-child(1) {
          width: 70%;
          text-align: left;
        }

        div:nth-child(2) {
          text-align: right;
          width: 30%;
        }
      }

      .discount-text {
        font-weight: 900;
        color: #dc3545;
      }

      .total-price-text {
        color: #198754;
        font-weight: 900;
      }

    }

    .coupon-wrap {
      display: flex;
      padding: 10px 10px;
      margin-bottom: 10px;
      margin-top: 10px;

      input {
        width: 80%;
        border: 1px solid rgba(0, 0, 0, 0.25);
        height: 35px;
        padding: 5px;
        border-radius: 5px 0px 0px 5px;
      }

      button {
        width: 20%;
        border: none;
        background-color: #f36f10;
        color: #fff;
        border-radius: 0px 5px 5px 0px;
        font-size: 18px;
        font-weight: 900;

        &:disabled {

          background-color: gray;

        }
      }
    }
  }
}
</style>
