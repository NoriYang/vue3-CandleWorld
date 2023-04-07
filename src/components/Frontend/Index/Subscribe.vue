<template>
  <div class="coupon">
    <div class="coupon-banner">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 coupon-left">
            <h2 class="left-title">歡慶五週年</h2>
            <p class="left-text">現在訂閱立即贈送 8 折優惠卷！</p>
            <p class="left-text">每月送出訂閱獨享優惠！</p>
            <div class="left-input-box">
              <VForm class="subscribe-form-main"
                ref="subscribe"
                v-slot="{ errors }"
                @submit="createOrder">
                <label for="email"
                  class="form-label">請輸入信箱<span></span></label>
                <VField v-model="form.email"
                  name="email"
                  type="email"
                  rules="required|email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="example@email.com" />
                <ErrorMessage class="invalid-feedback"
                  name="email" />
              </VForm>
              <button class="btn subBtn">訂閱</button>
            </div>
          </div>
          <div class="col-12 col-md-6 coupon-right">
            <div class="envelope-wrapper">
              <div class="envelope">
                <div class="letter">
                  <div class="text"></div>
                </div>
              </div>
            </div>
            <!-- <div class="coupon">
              <div class="coupon-left">恭喜獲得 8 折優惠卷</div>
              <div class="coupon-right"></div>
            </div> -->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    createOrder () {
      console.log('123')
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/helpers/main.scss";

* {
  box-sizing: border-box;
}

.coupon-banner {
  min-height: 40dvh;
  overflow: hidden;
  background-image: url('../../../assets/img/Subscribe/Subscribe_02.jpg');
  background-size: cover;
  background-position: bottom center;
  background-attachment: fixed;
  position: relative;
}

.coupon-banner::before {
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}

.coupon-left {
  z-index: 10;
  color: #eee;
  padding: 50px;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

  .left-title {
    font-size: 3rem;
  }

  .left-text {
    font-size: 1.5rem;
  }

  .left-input-box {
    .invalid-feedback {
      font-size: 20px;
      color: red;
      text-shadow: none;
      text-transform: uppercase;
    }

    .form-label {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }

    .subBtn {
      margin-top: 10px;
      color: #eee;
      font-size: 1.5rem;
      font-weight: bold;
      background-color: $third-bgc;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

.envelope-wrapper {
  background-color: #fff;
  box-shadow: 0 0 40px black;
}

.envelope {
  position: relative;
  width: 300px;
  height: 300px;
}

.envelope::before {
  content: '';
  position: absolute;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: 10px solid;
  border-color: #96ceb4 #ffeead #d9534f #ffad60;
  top: 0;
  transform-origin: top;
  transition: all 0.5s ease-in-out 0.7s;
}

.coupon-right {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;

  .coupon {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .coupon-left {
    width: 350px;
    font-size: 1.5rem;
    background-color: $second-bgc;
  }

  .coupon-right {
    width: 350px;
    height: 20px;
    background-color: $main-bgc;
  }
}
</style>
