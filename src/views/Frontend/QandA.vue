<template>
  <div>
    <QandABanner title="常見問題"
      imgUrl="https://images.unsplash.com/photo-1588338949261-659fc6fed20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
      fontColor="#F7F1F0"
      boderColor="#F7F1F0"></QandABanner>
    <div class="container">
      <div class="row qanda-main">
        <div class="col-12 col-md-8">
          <div class="accordion"
            id="accordionExample">

            <div class="accordion-item qanda-item">
              <h2 class="accordion-header qanda-header">
                <button class="accordion-button collapsed qanda-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#itemOne"
                  aria-expanded="true"
                  aria-controls="itemOne">
                  購物指南
                </button>
              </h2>
              <div id="itemOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body qanda-text-body">
                  <ol>
                    <li>選擇商品</li>
                    <li>確認規格﹝組合／味道﹞</li>
                    <li>加入購物車並結帳</li>
                    <li>存取訂單編號</li>
                    <li>付款完成</li>
                  </ol>
                  <p>(下單後若有任何問題，歡迎來電或傳信至官方信箱，我們將盡速為您處理！)</p>
                </div>
              </div>
            </div>

            <div class="accordion-item qanda-item">
              <h2 class="accordion-header qanda-header">
                <button class="accordion-button collapsed qanda-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#itemTwo"
                  aria-expanded="true"
                  aria-controls="itemTwo">
                  運費計算
                </button>
              </h2>
              <div id="itemTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body qanda-text-body">
                  <ul>
                    <li>商品總計購買500元以上，即可免運。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item qanda-item">
              <h2 class="accordion-header qanda-header">
                <button class="accordion-button collapsed qanda-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#itemThree"
                  aria-expanded="true"
                  aria-controls="itemThree">
                  退貨須知
                </button>
              </h2>
              <div id="itemThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body qanda-text-body">
                  <ul>
                    <li>為保護消費者權益，如確認商品斷貨等無法正常供貨情狀，提供兩種退費機制，可來電或來信並以您希望的退款方式，以便為您服務</li>
                    <ol class="mt-2">
                      <li>額度轉購物金，另增5%回饋金：原金額轉為購物金，將獲得額外5%金額，如原金額為$1000元，則可獲得$1050元購物金。</li>
                      <li>全額退費：由買家提供銀行帳戶，將於七個工作天內將款項匯入指定帳戶。</li>
                    </ol>
                    <li class="mt-2">瑕疵商品更換請於三天內寄回（超過期限恕不接受退換服務）
                    </li>
                    <li>其餘商品售出後一律不接受退換貨</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item qanda-item">
              <h2 class="accordion-header qanda-header">
                <button class="accordion-button collapsed qanda-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#itemFour"
                  aria-expanded="true"
                  aria-controls="itemFour">
                  如何付款？
                </button>
              </h2>
              <div id="itemFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body qanda-text-body">
                  <ol>
                    <li>信用卡</li>
                    <li>ATM 轉帳匯款</li>
                    <li>貨到付款</li>
                    <li>至實體店面付款</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="accordion-item qanda-item">
              <h2 class="accordion-header qanda-header">
                <button class="accordion-button collapsed qanda-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#itemFive"
                  aria-expanded="true"
                  aria-controls="itemFive">
                  出貨時間
                </button>
              </h2>
              <div id="itemFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body qanda-text-body">
                  <ul>
                    <li>若商品有現貨，交易金額確認後四十八小時內出貨。</li>
                    <li>國定假日延後</li>
                    <li>商品出貨後，訂單狀態會顯示「發貨狀態」「查詢貨號」等，並以信件告知。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item qanda-item">
              <h2 class="accordion-header qanda-header">
                <button class="accordion-button collapsed qanda-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#itemSix"
                  aria-expanded="true"
                  aria-controls="itemSix">
                  客服聯絡
                </button>
              </h2>
              <div id="itemSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body qanda-text-body">
                  <ul>
                    <li>官方信箱：noriyang0215@gmail.com </li>
                    <li>客服電話：0987-654321 (08:00 - 18:00)</li>
                    <li>實體店面：台北市信義區市府路 45 號</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QandABanner from '@/components/Frontend/Content/ImgBanner.vue'
export default {
  components: { QandABanner }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";
.qanda-main {
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qanda-item {
  .qanda-header {
    button {
      font-size: 1.2rem;
      letter-spacing: 2px;
    }
    .accordion-button:not(.collapsed) {
      color: #eee;
      background-color: $second-bgc;
    }
    .accordion-button:focus {
      box-shadow: none;
    }
  }

  .qanda-text-body {
    padding: 20px;
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
}
</style>
