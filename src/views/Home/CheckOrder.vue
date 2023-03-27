<template>
  <div>
    <div class="my-5 row justify-content-center">
      <VForm ref="orderForm" v-slot="{ meta, errors }" @submit="createOrder">
        {{ errors }}

        <div>
          <label for="name" class="form-label">姓名</label>
          <VField v-model="form.user.name" name="name" type="text" rules="required" class="form-control"
            placeholder="請輸入姓名" :class="{ 'is-invalid': errors['name'] }">
          </VField>
          <ErrorMessage class="invalid-feedback" name="name" />

        </div>

        <div>
          <label for="email" class="form-label">信箱:</label>
          <VField v-model="form.user.email" name="email" type="email" rules="required|email" class="form-control"
            :class="{ 'is-invalid': errors['email'] }" placeholder="example@email.com" />
          <ErrorMessage class="invalid-feedback" name="email" />
          <!-- error-message 的 name 要跟 VField 的 name 對應 -->
        </div>

        <div>
          <label for="phone" class="form-label">電話</label>
          <VField v-model="form.user.tel" name="phone" type="text" :rules="isPhone" class="form-control"
            placeholder="請輸入電話" :class="{ 'is-invalid': errors['phone'] }"></VField>
          <ErrorMessage class="invalid-feedback" name="phone" />
        </div>

        <div>
          <label for="address" class="form-label">地址</label>
          <VField v-model="form.user.address" name="address" type="text" rules="required" class="form-control"
            placeholder="請輸入地址" :class="{ 'is-invalid': errors['address'] }"></VField>
          <ErrorMessage class="invalid-feedback" name="address" />
        </div>

        <div>
          <label for="message" class="form-label">備註</label>
          <textarea v-model="form.message" class="form-control" id="form-message"></textarea>
        </div>
        <button type="submit" :disabled="!meta.valid">送出</button>
        <button type="button" @click="resetForm">重設</button>
      </VForm>
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
    createOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const payload = this.form
      this.$http.post(api, { data: payload })
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.resetForm()
          }
        })
    },
    resetForm () {
      this.$refs.orderForm.resetForm()
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  }
}
</script>
<style lang="scss" scoped></style>
