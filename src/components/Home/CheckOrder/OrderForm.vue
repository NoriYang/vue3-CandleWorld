<template>
  <div class="order-form-wrap">
    <div class="order-forms">
      <h2 class="form-title">訂購人資訊</h2>
      <div class="order-form row justify-content-center">
        <VForm class="order-form-main" ref="orderForm" v-slot="{ meta, errors }" @submit="createOrder">
          <div class="input-wrap">
            <label for="name" class="form-label">姓名<span>*</span></label>
            <VField v-model="form.user.name" name="name" type="text" rules="required" class="form-control"
              placeholder="請輸入姓名" :class="{ 'is-invalid': errors['name'] }">
            </VField>
            <ErrorMessage class="invalid-feedback" name="name" />
          </div>
          <div class="input-wrap">
            <label for="email" class="form-label">信箱<span>*</span></label>
            <VField v-model="form.user.email" name="email" type="email" rules="required|email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }" placeholder="example@email.com" />
            <ErrorMessage class="invalid-feedback" name="email" />
            <!-- error-message 的 name 要跟 VField 的 name 對應 -->
          </div>
          <div class="input-wrap">
            <label for="phone" class="form-label">電話<span>*</span></label>
            <VField v-model="form.user.tel" name="phone" type="text" :rules="isPhone" class="form-control"
              placeholder="請輸入電話" :class="{ 'is-invalid': errors['phone'] }"></VField>
            <ErrorMessage class="invalid-feedback" name="phone" />
          </div>
          <div class="input-wrap">
            <label for="address" class="form-label">地址<span>*</span></label>
            <VField v-model="form.user.address" name="address" type="text" rules="required" class="form-control"
              placeholder="請輸入地址" :class="{ 'is-invalid': errors['address'] }"></VField>
            <ErrorMessage class="invalid-feedback" name="address" />
          </div>
          <div class="input-wrap">
            <label for="message" class="form-label">備註</label>
            <textarea v-model="form.message" class="form-control" id="form-message"></textarea>
          </div>
          <div class="buttons-wrap">
            <button type="button" class="reset-btn btn btn-outline-danger" @click="resetForm">重設</button>
            <button type="submit" class="submit-btn" :disabled="!meta.valid">送出</button>
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
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
    height: 100%;

    .form-title {
      font-weight: 900;
      padding: 30px 0px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.4);
      margin-bottom: 5px;
      text-align: center;
    }

    .order-form {
      padding: 10px 20px;

      .order-form-main {
        .input-wrap {
          margin-bottom: 10px;

          .form-label {
            span {
              color: red;
              font-weight: 900;
              margin-left: 5px;
            }
          }
        }

        .buttons-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .submit-btn,
          .reset-btn {
            padding: 5px 25px;
            margin-left: 10px;
            font-size: 18px;
            font-weight: 900;
          }

          .reset-btn {
            font-size: 18px;
            font-weight: 900;
            border: 2px solid #dc3545;
          }

          .submit-btn {
            border: none;
            background-color: #f36f10;
            color: #fff;
            border-radius: 5px;
          }

          .submit-btn:disabled {
            background-color: gray;
          }
        }
      }
    }

  }
}
</style>
