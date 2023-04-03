<template>
  <div>
    <OrderBanner :title="!order.is_paid ? '訂單成立' : '感謝訂購'"
      imgUrl="https://images.unsplash.com/photo-1617909517054-64d4958be1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      fontColor="#F7F1F0" boderColor="#F7F1F0"></OrderBanner>
    <div class="container">
      <div class="my-5 row justify-content-center main-list">
        <form class="col-md-6 list-table" @submit.prevent="payOrder">
          <table class="table align-middle">
            <thead class="order-thead">
              <th class="thead-title">品名</th>
              <th class="thead-qty">數量</th>
              <th class="thead-per-price text-end">單價</th>
            </thead>
            <tbody>
              <tr class="order-lists" v-for="item in order.products" :key="item.id">
                <td class="list-title">{{ item.product.title }}</td>
                <td>{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="text-end">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>

          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>留言</th>
                <td>{{ order.message }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end" v-if="order.is_paid === false">
            <button class="btn btn-danger">確認付款去</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import OrderBanner from '@/components/Home/ImgBanner.vue'
export default {
  components: { OrderBanner },
  data () {
    return {
      order: {
        user: {},
        message: ''
      },
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.order = res.data.order
          }
        })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(api)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.getOrder()
          }
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
<style lang="scss" scoped>
.list-table {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 25px;

  .order-thead {
    text-align: center;

    .thead-qty {
      width: 50px;
    }
  }

  .order-lists {
    text-align: center;

    .list-title {
      text-align: left;
    }
  }
}
</style>
