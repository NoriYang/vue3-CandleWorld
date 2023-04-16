<template>
  <div class="order-form-wrap">
    <div class="order-forms">
      <h2 class="form-title">訂購人資訊</h2>
      <div class="order-form row justify-content-center">
        <VForm class="order-form-main"
          ref="orderForm"
          v-slot="{ meta, errors }"
          @submit="createOrder">
          <div class="input-wrap form-floating">
            <VField v-model="form.user.name"
              name="姓名"
              type="text"
              rules="required"
              class="form-control"
              placeholder="姓名"
              id="floatingInputOne"
              :class="{ 'is-invalid': errors['姓名'] }">
            </VField>
            <label for="floatingInputOne">姓名</label>
            <ErrorMessage class="invalid-feedback"
              name="姓名" />
          </div>
          <div class="input-wrap form-floating">
            <VField v-model="form.user.email"
              name="email"
              type="email"
              rules="required|email"
              class="form-control"
              id="floatingInputTwo"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="信箱" />
            <label for="floatingInputTwo">信箱</label>
            <ErrorMessage class="invalid-feedback"
              name="email" />
          </div>
          <div class="input-wrap form-floating">
            <VField v-model="form.user.tel"
              name="phone"
              type="text"
              :rules="isPhone"
              class="form-control"
              id="floatingInputThree"
              placeholder="聯絡電話"
              :class="{ 'is-invalid': errors['phone'] }"></VField>
            <label for="floatingInputThree">聯絡電話</label>
            <ErrorMessage class="invalid-feedback"
              name="phone" />
          </div>
          <div class="input-wrap form-floating">
            <VField v-model="form.user.address"
              name="地址"
              type="text"
              rules="required"
              class="form-control"
              placeholder="收件地址"
              id="floatingInputFour"
              :class="{ 'is-invalid': errors['地址'] }"></VField>
            <label for="floatingInputFour">收件地址</label>
            <ErrorMessage class="invalid-feedback"
              name="地址" />
          </div>
          <div class="input-wrap form-floating">
            <textarea placeholder="商品備註"
              v-model="form.message"
              class="form-control"
              id="form-message"></textarea>
            <label for="form-message">商品備註</label>
          </div>
          <div class="buttons-wrap d-grid gap-2">
            <button type="submit"
              class="submit-btn"
              :disabled="!meta.valid">送出訂單</button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          phone: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    resetForm () {
      this.$refs.orderForm.resetForm()
      this.message = ''
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    createOrder () {
      this.$emit('createOrderHandler', this.form)
    }
  }
}
</script>
<style lang="scss">
.order-form-wrap {
  .order-forms {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    padding-bottom: 10px;

    .form-title {
      font-weight: bold;
      padding: 30px 0px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.25);
      margin-bottom: 5px;
      text-align: center;
    }

    .order-form {
      padding: 10px 20px;

      .order-form-main {
        .input-wrap {
          margin-bottom: 10px;

          .form-control {
            font-size: 18px;
            border-radius: 0px;

            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
          }
        }

        .buttons-wrap {
          margin-top: 20px;
          margin-bottom: 5px;

          .submit-btn {
            padding: 10px;
            font-size: 18px;
            font-weight: 900;
            border: none;
            background-color: #f36f10;
            color: #fff;
            border-radius: 5px;
          }

          .submit-btn:disabled {
            background-color: gray;
            cursor: not-allowed;
          }
        }
      }
    }

  }
}
</style>
