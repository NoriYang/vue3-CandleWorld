<template>
  <div class="coupon">
    <div class="coupon-banner">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 coupon-left">
            <h2 class="left-title">歡慶五週年</h2>
            <p class="left-text">訂閱立即贈送 8 折優惠碼！</p>
            <p class="left-text">每月送出訂閱獨享優惠！</p>
            <div class="left-input-box">
              <VForm class="subscribe-form-main"
                ref="subscribe"
                v-slot="{ errors }"
                @submit="sendEmail">
                <label for="email"
                  class="form-label">訂閱請輸入信箱<span></span></label>
                <VField v-model="form.email"
                  name="email"
                  type="email"
                  rules="required|email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="example@email.com" />
                <ErrorMessage class="invalid-feedback"
                  name="email" />
                <button type="submit"
                  :disabled="showLetter"
                  class="btn btn-warning subBtn">訂閱我們</button>
              </VForm>

            </div>
          </div>
          <div class="col-12 col-md-6 coupon-right">
            <div class="envelope-wrapper"
              :class="{ flap: showLetter }">
              <div class="envelope">
                <div class="letter">
                  <div class="text">
                    <span>20% OFF</span>
                    {{ couponCode }}
                  </div>
                </div>
                <div class="logo">
                  CANDLE WORLD
                </div>
              </div>
            </div>
            <h2 class="thankText"
              :class="{ 'show-text': showLetter }">
              感謝您的訂閱<br />贈送您8折優惠碼<br />請在結帳時使用
            </h2>
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
      showLetter: false,
      couponCode: '*****',
      form: {
        email: ''
      }
    }
  },
  methods: {
    sendEmail () {
      this.ShowLetterHandler()
    },
    ShowLetterHandler () {
      this.showLetter = !this.showLetter
      this.couponCode = 'TK888'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/helpers/main.scss";

.coupon-banner {
  min-height: 30dvh;
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
    font-size: 2.8rem;
  }

  .left-text {
    font-size: 1.3rem;
  }

  .left-input-box {
    .invalid-feedback {
      font-size: 20px;
      color: red;
      text-shadow: none;
      text-transform: uppercase;
    }

    .form-label {
      font-size: 1.3rem;
      margin-bottom: 15px;
    }

    .subBtn {
      margin-top: 10px;
      font-size: 24px;
      font-weight: bold;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

.coupon-right {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  z-index: 6;

  .thankText {
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
    color: #eee;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 24px;
    letter-spacing: 5px;
    opacity: 0;
    transition: 2s;
  }

  .thankText.show-text {
    opacity: 1;
  }

  .envelope-wrapper {
    background-color: #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 25px;
  }

  .envelope {
    position: relative;
    width: 200px;
    height: 150px;
  }

  .envelope::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 50px;
    height: 50px;
    border-top: 112px solid #F9CA36;
    border-right: 100px solid transparent;
    border-left: 100px solid transparent;
    top: 0;
    transform-origin: top;
    transition: all 0.5s ease-in-out 0.7s;
  }

  .envelope::after {
    content: '';
    position: absolute;
    z-index: 2;
    border-top: 110px solid transparent;
    border-right: 100px solid #E7AE2D;
    border-left: 100px solid #E7AE2D;
    border-bottom: 40px solid #E7AE2D;
    bottom: 0;
  }

  .envelope>.letter {
    position: absolute;
    right: 20%;
    bottom: 0;
    width: 60%;
    height: 50%;
    background: #ffffff;
    text-align: center;
    transition: all 1s ease-in-out;
    box-shadow: 0 0 5px #333;
    padding: 20px 10px;
  }

  .letter>.text {
    color: #333;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .letter>.text>span {
    position: absolute;
    font-size: 0.8rem;
    color: red;
    font-weight: bold;
    top: 0;
    left: 2px;
  }

  .flap>.envelope:before {
    z-index: 0;
    transform: rotateX(180deg);
  }

  .flap>.envelope>.letter {
    bottom: 80px;
    transform: scale(1.5);
    transition-delay: 0.5s;
  }

  .flap>.envelope>.logo {
    transition-delay: 0.5s;
    animation: 1s hideLogo ease-in-out forwards;
  }

  @keyframes hideLogo {
    0% {
      opacity: 1;
      top: 60%;
    }

    100% {
      opacity: 0;
      top: 70%;
    }
  }

  .logo {
    position: absolute;
    top: 60%;
    left: 50%;
    text-align: center;
    font-weight: bold;
    width: 80px;
    background-color: $second-bgc;
    color: #eee;
    z-index: 4;
    border-radius: 5px;
    transform: translate(-50%, -20%);
    box-shadow: 0 1px 2px black;
  }
}

@media(max-width: 768px) {
  .coupon-left {
    .left-title {
      font-size: 2rem;
    }

    .left-text {
      font-size: 1.2rem;
    }

    .left-input-box {
      .invalid-feedback {
        font-size: 18px;
      }

      .form-label {
        font-size: 1.2rem;
      }

      .subBtn {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
}

@media(max-width: 767px) {
  .coupon-right {
    .thankText {
      margin-bottom: 50px;
    }
  }

  .envelope-wrapper {
    margin-top: 50px;
  }
}

@media(max-width: 320px) {
  .coupon-left {
    margin-bottom: 20px;

    .left-title {
      font-size: 1.5rem;
    }

    .left-text {
      font-size: 18px;
    }

    .left-input-box {
      .invalid-feedback {
        font-size: 18px;
      }

      .form-label {
        font-size: 18px;
      }

      .subBtn {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
