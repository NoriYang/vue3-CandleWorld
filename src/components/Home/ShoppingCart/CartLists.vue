<template>
  <div>
    <h2>購物車清單</h2>
    <table class="table">
      <thead class="table-thead">
        <tr>
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
            <td class="list-title">
              <img class="img" :src="list.product.imageUrl" alt="">
              <div class="title">{{ list.product.title }}</div>
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
                  {{ list.qty }} {{ list.product.unit }}
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
// * {
//   background-color: rgba(0, 100, 0, 0.05)
// }
td,
tr {
  text-align: center;
}

.product-list {
  font-size: 18px;
  vertical-align: middle;

  .list-title {
    display: flex;
    align-items: center;

    .img {
      height: 100px;
      width: 100px;
      margin-right: 5px;
    }
  }

  .list-qty-buttons {
    .btn-wrap {
      display: inline-block;
      border: 1px solid #9a9a9a;
      border-radius: 5px;
      font-size: 18px;
    }

    .list-qty-text {
      padding-left: 25px;
      padding-right: 25px;
      vertical-align: middle;
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
}</style>
