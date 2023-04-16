<template>
  <div>
    <OrderBanner :title="!isPay ? '訂單狀態' : '感謝訂購'"
      imgUrl="https://images.unsplash.com/photo-1617909517054-64d4958be1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      fontColor="#F7F1F0"
      boderColor="#F7F1F0"></OrderBanner>
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="container-xl main-checkout"
      v-if="hasOrder">
      <Information :order="order"
        @payOrderHandler="payOrder"></Information>
    </div>
    <div class="container-xl main-checkout"
      v-else>
      <div class="row empty-wrap"
        v-if="isLoading === false">
        <div class="col-12 col-md-8 main-empty">
          查無訂單，請再次確認訂單！
          <router-link to="/searchorder">回訂單搜尋</router-link>
        </div>
      </div>
    </div>
    <AlertModal ref="alertModal"
      :title="'成功付款'"></AlertModal>
  </div>
</template>
<script>
import OrderBanner from '@/components/Frontend/Content/ImgBanner.vue'
import AlertModal from '@/components/Frontend/Content/AlertModal.vue'
import Information from '@/components/Frontend/CheckOut/Information.vue'
export default {
  components: { OrderBanner, Information, AlertModal },
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
            this.openAlertModal()
          }
        })
    },
    openAlertModal () {
      this.$refs.alertModal.showModal()
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
<style lang="scss" scoped>
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
</style>
