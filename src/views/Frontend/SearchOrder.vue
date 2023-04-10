<template>
  <div>
    <OrderBanner title="搜尋訂單"
      imgUrl="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      fontColor="#F7F1F0"
      boderColor="#F7F1F0">
    </OrderBanner>
    <div class="container">
      <div class="row main-serch-order">
        <div class="col-12 col-md-8">
          <div class="input-group input-group-lg">
            <input type="text"
              class="form-control"
              placeholder="請輸入訂單編號"
              v-model="orderID"
              >
            <button @click="serchID" class="input-group-text">
              搜尋
            </button>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <h3 class="teach-title">重要提醒</h3>
          <div class="teach-info">
            <ul>
              <li>訂單編號格式： -NSey30fYYOnDLJTkkEk</li>
              <li>下單後（不含訂購當天）現貨商品約3 - 5工作天寄出商品<br/>配送天數約3 - 5天，節慶假日物流量較多則可能延遲。</li>
              <li>下單後請於三天內付款，未付款則取消訂單。</li>
              <li>商品若無庫存將由店家與您電話聯繫</li>
              <li>我們不會主動請你提供資料若接到可疑簡訊、電話請撥打165反詐騙</li>
              <li>有任何問題歡迎撥打電話詢問或傳信至官方信箱</li>
            </ul>
          </div>
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
      orderID: ''
    }
  },
  methods: {
    serchID () {
      this.$router.push('/checkout/' + this.orderID)
    }
  }
}
</script>
<style lang="scss" scoped>
.main-serch-order {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  .input-group  {
    margin-top: 20px;
  }
  .teach-title {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    margin-top: 50px;

  }
  .teach-info{
    background-color: #fff;
    padding: 30px 20px 20px 20px;
    ul {
      li {
        font-size: 1rem;
        letter-spacing: 2px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
