<template>
  <div>
    <loading :active="isLoading"></loading>

    <div class="login-main container mt-5">
      <div class="back-button">
        <router-link to="/" class="btn btn-dark">
          <i class="bi bi-arrow-left"></i>
          回首頁
        </router-link>
      </div>
      <div class="login-main-wrap">
        <h2>後台管理頁面</h2>
        <form class="login-main-form mt-3 row justify-content-center" @submit.prevent="signIn">
          <div class="col-md-12">
            <div class="mb-2">
              <label for="inputText" class="sr-only">帳號：</label>
              <input type="text" id="inputText" class="form-control" placeholder="請輸入帳號" required autofocus
                v-model="user.username" />
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only">密碼：</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="請輸入密碼" required
                v-model="user.password" />
            </div>

            <div class="text-end mt-4">
              <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.isLoading = true
      this.$http.post(api, this.user)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token};expires=${new Date(expired)}`
            this.$router.push('/dashboard/products')
          }
        })
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `${token}`
      const api = `${process.env.VUE_APP_API}api/user/check`
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.replace('/dashboard/products')
          }
        })
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style lang="scss" scoped>
.back-button {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 10px;
  display: inline;
  width: 100%;
}

.login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .login-main-wrap {
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);

    .login-main-form {
      max-width: 500px;
    }
  }
}
</style>
