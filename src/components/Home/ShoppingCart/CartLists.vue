<template>
  <div>
    <table class="table" v-if="false">
      <thead class="table-thead">
        <tr>
          <th class="thead-img">圖片</th>
          <th>商品內容</th>
          <th>單價</th>
          <th>數量</th>
          <th>總計</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <slot v-if="cartLists.length > 0">
          <tr v-for="list of cartLists" :key="list.id" class="product-list">
            <td class="list-img">
              <div class="img-wrap">
                <img class="img" :src="list.product.imageUrl" alt="">
              </div>
            </td>
            <td class="list-title">

              {{ list.product.title }}

            </td>
            <td class="list-per-price">
              {{ $filters.currency(list.product.price) }}
            </td>
            <td class="list-qty-buttons">
              <div class="btn-wrap">
                <button class="btn qty-btn qty-btn-right" @click="updateCart(list, -1)" :disabled="list.qty === 1">
                  <i class="bi bi-dash"></i>
                </button>
                <span class="list-qty-text">
                  {{ list.qty }}
                  <!-- {{ list.product.unit }} -->
                </span>
                <button class="btn qty-btn qty-btn-left" @click="updateCart(list, 1)">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </td>
            <td class="list-product-price-count">
              {{ $filters.currency(list.final_total) }}
            </td>
            <td class="list-del-btn">
              <button class="btn del-btn" @click="delList(list.id)">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </slot>
        <slot v-else>
          <tr>
            <td colspan="6" class="Empty-cart">
              購物車內暫無商品
              <router-link to="/home/productslist/lists">前往購物</router-link>
            </td>
          </tr>
        </slot>
      </tbody>
    </table>
    <div class="list-cards">
      <div class="list-card" v-for="cart of cartLists" :key="cart.id">
        <div class="card-top">
          <div class="card-img">
            <img :src="cart.product.imageUrl" alt="">
          </div>
          <div class="card-info">
            <div class="info-title">
              <span>{{ cart.product.title.split('-')[0] }}</span>
              <span>{{ cart.product.title.split('-')[1] }}</span>
            </div>
            <div class="info-per-price">
              $ {{ $filters.currency(cart.product.price) }}
            </div>

          </div>
        </div>
        <div class="info-bottom">
          <div class="info-qty-buttons">
            <button class="btn qty-btn qty-btn-right" @click="updateCart(cart, -1)" :disabled="cart.qty === 1">
              <i class="bi bi-dash"></i>
            </button>
            <span class="cart-qty-text">
              {{ cart.qty }}
            </span>
            <button class="btn qty-btn qty-btn-left" @click="updateCart(cart, 1)">
              <i class="bi bi-plus"></i>
            </button>
          </div>
          <div class="card-total-price">
            $ {{ $filters.currency(cart.final_total) }}
          </div>
        </div>
        <div class="clean-btn">
          <button class="btn del-btn" @click="delList(cart.id)">
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cartLists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    delList (id) {
      this.$emit('delListHandler', id)
    },
    updateCart (list, num) {
      list.qty += num
      this.$emit('updateCartHandler', list)
    }
  }
}
</script>
<style lang="scss" scoped>
td,
tr {
  text-align: center;
}

.table-thead {
  border-bottom: 1px solid #000;
  font-size: 18px;
}

.product-list {
  box-sizing: border-box;
  font-size: 18px;
  vertical-align: middle;
  font-weight: 600;

  .list-img {
    .img-wrap .img {
      height: 100px;
      width: 100px;
      margin-right: 5px;
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
    }
  }

  .list-title {
    padding-left: 10px;
  }

  .list-per-price {
    min-width: 80px;
  }

  .list-product-price-count {
    min-width: 80px;
  }

  .list-qty-buttons {
    min-width: 170px;

    .btn-wrap {
      display: inline-block;
      border: 1px solid #9a9a9a;
      border-radius: 5px;
      font-size: 18px;
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
    }

    .list-qty-text {
      display: inline-block;
      vertical-align: middle;
      min-width: 50px;
    }

    .qty-btn {
      padding: 10px 5px;
      border-radius: 0;
      border: none;
      font-size: 18px;
      background-color: rgba(#9a9a9a, 0.6);
    }

    .qty-btn-right {
      border-right: 1px solid #9a9a9a;
    }

    .qty-btn-left {
      border-left: 1px solid #9a9a9a;
    }
  }

  .del-btn {
    border: 1px solid #dc3545;
    color: #dc3545;

    &:hover {
      color: white;
      background-color: #dc3545;
    }
  }
}

.Empty-cart {
  font-size: 2rem;
  padding: 50px;
}

@media (max-width: 660px) {
  .thead-img {
    display: none;
  }

  .list-img {
    display: none;
  }
}

@media (max-width: 540px) {
  .table-thead {
    font-size: 16px;
  }

  .product-list {
    font-size: 16px;
  }

}

.list-cards {
  margin-bottom: 5px;

  .list-card {
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.15);
    position: relative;

    .card-top {
      padding: 10px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);

      .card-img {
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 120px;
          height: 120px;
          box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.15);
        }
      }

      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        padding-left: 10px;

        .info-title {
          :nth-child(1) {
            font-weight: 800;
            font-size: 16px;
            display: block;
          }

          :nth-child(2) {
            font-size: 24px;
            font-weight: 900;
            display: block;
          }
        }

        .info-per-price {
          font-weight: 800;
          color: #ff6645
        }
      }
    }

    .info-bottom {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .info-qty-buttons {
        display: inline-block;
        font-size: 18px;

        .cart-qty-text {
          padding: 2px 0px;
          display: inline-block;
          vertical-align: middle;
          min-width: 50px;
          text-align: center;
          border: 1px solid rgba(#888, 0.5);
        }

        .qty-btn {
          padding: 2px 5px;
          font-size: 18px;
          background-color: #888;
          border-radius: 0px;

          i {
            color: #fff
          }
        }

        .qty-btn:disabled {
          border: 1px solid rgba(#888, 0.5);
        }
      }

      .card-total-price {
        font-weight: 900;
        font-size: 1.2rem;
        color: #ff6645
      }
    }

    .clean-btn {
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(-25%) translateY(25%);
      z-index: 1;

      .del-btn {
        border-radius: 99em;
        color: #dc3545;
        border: 1px solid #dc3545;

        &:hover {
          color: white;
          background-color: #dc3545;
        }
      }
    }
  }
}
</style>
