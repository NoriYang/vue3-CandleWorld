<template>
  <div class="row main-information">
    <div class="col-md-12 top-info-wrap">
      <div class="list-id-wrap">
        <div class="list-id-icon">
          <i class="bi bi-check-circle-fill"></i>
        </div>
        <div class="list-id-text-wrap">
          <p>您的訂單建立成功！</p>
          <p>
            訂單編號：<span class="order-id">{{ order.id }}</span>
            <button class="copy-btn"
              @click="copyID">
              <i class="bi bi-clipboard-check"></i>
            </button>
          </p>
          <p>請保存編號以便查閱訂單狀態！</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-12 col-lg-6">
      <div class="order-user-info">
        <h4 class="info-title">訂單資訊</h4>
        <ul class="info-ul">
          <li class="info-item">
            <p class="item-title">訂購時間</p>
            <p class="item-data">
              {{ $filters.localeDateStr(order.create_at) }}
              {{ $filters.localeTimeStr(order.create_at) }}
            </p>
          </li>
          <li class="info-item">
            <p class="item-title">姓名</p>
            <p class="item-data">{{ order.user.name }}</p>
          </li>
          <li class="info-item">
            <p class="item-title">電話</p>
            <p class="item-data">{{ order.user.tel }}</p>
          </li>
          <li class="info-item">
            <p class="item-title">地址</p>
            <p class="item-data">{{ order.user.address }}</p>
          </li>
          <li class="info-item">
            <p class="item-title">信箱</p>
            <p class="item-data">{{ order.user.email }}</p>
          </li>
          <li class="info-item">
            <p class="item-title">備註</p>
            <p class="item-data">{{ order.message || '無' }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-md-12 col-lg-6">
      <div class="order-product-lists">
        <h4 class="lists-title">購買項目</h4>
        <ul class="lists-ul">
          <li class="list-item"
            v-for="list of order.products"
            :key="list.id">
            <p class="item-title">
              {{ list.product.title }} x {{ list.qty }}
              {{ list.product.unit }}
            </p>
            <p class="item-price">
              NT $ {{ $filters.currency(list.final_total) }}
            </p>
          </li>
        </ul>
        <div class="lists-total-price">
          <h4>總計</h4>
          <div class="total-price">NT $ {{ $filters.currency(order.total) }}</div>
        </div>
        <div class="pay-state">
          <h4 class="pay-title">付款狀態</h4>
          <ul class="state-ul">
            <li class="state-item">
              付款方式 / 信用卡
            </li>
            <li class="state-item">
              付款狀態 / <span v-if="order.is_paid"
                class="badge rounded-pill text-bg-success">已付款</span><span v-else
                class="badge rounded-pill text-bg-danger">未付款</span>
            </li>
          </ul>
        </div>
        <div class="pay-button-wrap" v-if="!order.is_paid">
          <button class="pay-button" @click="payOrder">付 款</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object
    }
  },
  methods: {
    payOrder () {
      this.$emit('payOrderHandler')
    },
    copyID () {
      navigator.clipboard
        .writeText(this.order.id)
        .then(() => {
          this.$httpMessageState(
            {
              data: {
                success: true
              }
            },
            '複製訂單編號'
          )
        })
        .catch((err) => {
          this.$httpMessageState(err, '複製失敗')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.main-information {
  background-color: #fff;
  padding: 20px;

  .top-info-wrap {
    margin-bottom: 30px;

    .list-id-wrap {
      display: flex;
      align-items: center;
      justify-content: center;

      .list-id-icon {
        padding: 15px;
        font-size: 3rem;
        color: green;
      }

      .list-id-text-wrap {
        font-size: 1rem;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;

        p {
          margin-bottom: 5px;
        }
      }

      .copy-btn {
        font-size: 1.2rem;
        background-color: inherit;
        border: none;
        padding-left: 5px;
      }
    }

    .list-id-wrap.mobile {
      display: none;
    }
  }

  .lists-title,
  .info-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  .lists-ul,
  .info-ul {
    font-size: 1rem;
    padding: 0;
    list-style: none;
    letter-spacing: 1px;
  }

  .order-user-info {
    .info-ul {
      .info-item {
        display: flex;
        padding: 0;
        margin: 0;
        margin-top: 10px;
        .item-title {
          width: 25%;
          margin: 0;
          color: #737c85;
        }

        .item-data {
          width: 75%;
          margin: 0;
        }
      }
    }
  }

  .order-product-lists {
    .lists-ul {
      padding-bottom: 25px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      .list-item {
        display: flex;
        padding: 0;
        margin: 0;
        margin-top: 10px;

        .item-title {
          width: 80%;
          margin: 0;
        }

        .item-price {
          width: 20%;
          padding: 0;
          margin: 0;
        }
      }
    }

    .lists-total-price {
      display: flex;
      padding: 0;
      margin: 0;
      letter-spacing: 1px;
      h4 {
        font-size: 1rem;
        width: 80%;
      }

      .totla-price {
        width: 20%;
        font-weight: bold;
      }
    }

    .pay-state {
      margin-top: 25px;

      .pay-title {
        font-weight: bold;
        font-size: 1.5rem;
        padding-bottom: 1px;
      }

      .state-ul {
        font-size: 1.2rem;
        padding: 25px 25px 25px 15px;
        list-style: none;
        letter-spacing: 1px;
        background-color: rgba(0, 0, 0, 0.1);

        .state-item {
          font-size: 1.2rem;
          padding: 5px;
        }
      }
    }
    .pay-button-wrap {
      display: flex;
      justify-content: end;
      align-items: center;
      .pay-button {
        background-color: #f7b865;
        border: none;
        text-align: center;
        padding: 10px 25px;
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 991px) {
  .main-information {
    .order-user-info {
      .info-ul {
        .info-item {
          display: block;
          margin-bottom: 15px;

          .item-title {
            width: 100%;
            margin-bottom: 5px;
          }

          .item-data {
            width: 100%;
            word-wrap: break-word;
          }
        }
      }
    }
    .order-product-lists {
      .lists-title {
        margin-top: 25px;
      }
    }
  }
}

@media (max-width: 414px) {
  .main-information {
    .top-info-wrap {
      .list-id-wrap {
        flex-direction: column;
        .order-id {
          display: inline-block;
        }
      }
    }

    .order-product-lists {
      .lists-ul {
        .list-item {
          display: block;
          margin-bottom: 15px;
          border-bottom: 1px dashed rgba(0, 0, 0, 0.35);
          .item-title {
            width: 100%;
          }

          .item-price {
            width: 100%;

          }
        }
      }
    }
  }
}
</style>
