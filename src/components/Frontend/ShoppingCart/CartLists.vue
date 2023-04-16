<template>
  <div>
    <table class="table main-table">
      <thead class="table-thead">
        <tr>
          <th class="thead-img">圖片</th>
          <th>內容</th>
          <th>單價</th>
          <th>數量</th>
          <th>總計</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <slot v-if="cartLists.length > 0">
          <tr v-for="list of cartLists"
            :key="list.id"
            class="product-list">
            <td class="list-img">
              <div class="img-wrap">
                <img class="img"
                  :src="list.product.imageUrl"
                  alt="商品圖片">
              </div>
            </td>
            <td class="list-title">
              <span>{{ list.product.title.split('-')[0] }}</span>
              <span>{{ list.product.title.split('-')[1] }}</span>
            </td>
            <td class="list-per-price">
              {{ $filters.currency(list.product.price) }}
            </td>

            <td class="list-qty-buttons">
              <div class="btn-wrap">
                <button class="btn qty-btn"
                  @click="updateCart(list, -1)"
                  :disabled="list.qty === 1">
                  <i class="bi bi-dash"></i>
                </button>
                <span class="list-qty-text">
                  {{ list.qty }}
                </span>
                <button class="btn qty-btn"
                  @click="updateCart(list, 1)">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </td>

            <td class="list-product-price-count">
              {{ $filters.currency(list.total) }}
            </td>
            <td class="list-del-btn">
              <button class="btn del-btn"
                @click="delList(list.id, list.product.title)">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </slot>
        <slot v-else>
          <tr>
            <td colspan="6"
              class="Empty-cart">
              <h2>購物車內無選購商品</h2>
              <span>請前往<router-link to="/productslist/lists">商品列表</router-link></span>
            </td>
          </tr>
        </slot>
      </tbody>
    </table>
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
    delList (id, title) {
      this.$emit('delListHandler', { id, title })
    },
    updateCart (list, num) {
      list.qty += num
      this.$emit('updateCartHandler', list)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-table {
  min-height: 250px;
}

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

    span {
      display: block;
    }
  }

  .list-per-price {
    min-width: 80px;
  }

  .list-product-price-count {
    min-width: 80px;
  }

  .list-qty-buttons {
    padding: 0;

    .btn-wrap {
      min-width: 98px;
      display: inline-block;
      border: 1px solid rgba(#919191, 0.5);
      border-radius: 5px;
      font-size: 18px;
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
    }

    .list-qty-text {
      display: inline-block;
      vertical-align: middle;
      min-width: 40px;
    }

    .qty-btn {
      padding: 5px 5px;
      border-radius: 0;
      font-size: 18px;
      background-color: rgba(#9a9a9a, 0.4);
      border: none;
      color: #000;
    }

    .qty-btn:disabled {
      background-color: rgba(#9a9a9a, 0.2);
      color: rgba(#000, 0.5);
    }

  }

  .list-del-btn {
    padding: 0;
    width: 40px;

    .del-btn {
      padding: 5px 8px;
      border: 1px solid #dc3545;
      color: #dc3545;

      &:hover {
        color: white;
        background-color: #dc3545;
      }
    }
  }

}

.Empty-cart {
  padding: 50px;

  h2 {
    font-size: 2rem;
    font-weight: 900;
  }

  span {
    font-size: 1.8rem;
    font-weight: 900;

    a {
      text-decoration: none;
    }
  }
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

  .list-qty-buttons {
    .btn-wrap {
      font-size: 16px;
    }

    .list-qty-text {
      font-size: 16px;
    }

    .qty-btn {
      font-size: 16px;
    }
  }

  .product-list {
    font-size: 14px;
  }
}
</style>
