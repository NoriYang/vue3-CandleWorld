<template>
  <div>
    <OrderBanner :title="!isPay ? '訂單狀態' : '感謝訂購'"
      imgUrl="https://images.unsplash.com/photo-1617909517054-64d4958be1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      fontColor="#F7F1F0"
      boderColor="#F7F1F0"></OrderBanner>
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="container-xl">
      <div class="my-5 row justify-content-center main-list"
        v-if="hasOrder">
        <div class="col-md-8 top-info-wrap">
          <div class="list-id-wrap">
            <div class="list-id-icon">
              <i class="bi bi-check-circle-fill"></i>
            </div>
            <div class="list-id-text-wrap">
              <p>您的訂單建立成功！</p>
              <p>
                訂單編號：<span class="order-id">{{ orderId }}</span>
                <button class="copy-btn"
                  @click="copyID">
                  <i class="bi bi-clipboard-check"></i>
                </button>
              </p>
              <p class="warning-text">請保存訂單編號以方便查閱訂單狀態！</p>
            </div>
          </div>
          <div class="list-id-wrap mobile">
            <div class="list-id-icon">
              <i class="bi bi-check-circle-fill"></i>
            </div>
            <div class="list-id-text-wrap">
              <p>您的訂單建立成功！</p>
              <p>訂單編號：</p>
              <p class="order-id">{{ orderId }}
                <button class="copy-btn"
                  @click="copyID">
                  <i class="bi bi-clipboard-check"></i>
                </button>
              </p>
              <p class="warning-text">請妥善保存訂單編號以方便您查閱訂單狀態！</p>
            </div>
          </div>
        </div>
        <form class="col-md-8 list-table"
          @submit.prevent="payOrder">
          <table class="table align-middle">
            <thead class="order-thead">
              <th class="thead-title">品名</th>
              <th class="thead-qty">數量</th>
              <th class="thead-per-price text-end">單價</th>
            </thead>
            <tbody>
              <tr class="order-lists"
                v-for="item in order.products"
                :key="item.id">
                <td class="list-title">{{ item.product.title }}</td>
                <td>{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="text-end">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"
                  class="text-end">總計</td>
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
                <th>備註</th>
                <td>{{ order.message }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid"
                    class="text-danger">尚未付款</span>
                  <span v-else
                    class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end"
            v-if="order.is_paid === false">
            <button class="btn btn-danger">確認付款去</button>
          </div>
        </form>
      </div>
      <div v-else
        class="row empty-wrap">
        <div class="col-12 col-md-8 main-empty">
          查無訂單，請再次確認訂單！
          <router-link to="/searchorder">回訂單搜尋</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderBanner from '@/components/Frontend/Content/ImgBanner.vue'
export default {
  components: { OrderBanner },
  data () {
    return {
      order: {
        user: {},
        message: ''
      },
      orderId: '',
      hasOrder: false,
      isLoading: false,
      isPay: false
    }
  },
  methods: {
    copyID () {
      navigator.clipboard
        .writeText(this.orderId)
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
    },
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            if (res.data.order !== null) {
              this.order = res.data.order
              this.hasOrder = true
              this.isLoading = false
            } else {
              this.hasOrder = false
              this.isLoading = false
            }
          }
        })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(api)
        .then(res => {
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
.top-info-wrap {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
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
      font-size: 1.2rem;
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
      font-size: 1.3rem;
      background-color: inherit;
      border: none;
      padding-left: 5px;
    }

    .warning-text {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  .list-id-wrap.mobile {
    display: none;
  }
}

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

.empty-wrap {
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  .main-empty {
    font-size: 2rem;

    a {
      text-decoration: none;
    }
  }
}

@media (max-width: 414px) {

  .top-info-wrap {
    .list-id-wrap {
      display: none;
    }
    .order-id {
      font-size: 14px;
    }

    .list-id-wrap.mobile {
      display: flex;
    }
  }
}

@media (max-width: 375px) {
  .top-info-wrap {
    .list-id-wrap {
      .list-id-icon {
        font-size: 2rem;
      }
    }
  }
}</style>
