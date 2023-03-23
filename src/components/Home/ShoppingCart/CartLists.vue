<template>
  <div>
    <h2>購物清單</h2>
    <table class="table">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品</th>
          <th>單價</th>
          <th>數量</th>
          <th>總計</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list of cartLists" :key="list.id">
          <th class="list-img">
            <img :src="list.product.imageUrl" alt="">
          </th>
          <td>
            {{ list.product.title }}
          </td>
          <td>
            {{ $filters.currency(list.product.price) }}
          </td>
          <td>
            {{ list.qty }}
          </td>
          <td>
            {{ $filters.currency(list.final_total) }}
          </td>
          <td>
            <button class="btn del-btn" @click="delList(list.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
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
    }
  }
}
</script>
<style lang="scss" scoped>
.list-img img {
  height: 100px;
  width: 100px;
}

.del-btn {
  border: 1px solid #000;
}
</style>
