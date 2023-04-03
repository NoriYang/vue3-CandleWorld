<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="logo" src="@/assets/logo.png" alt="logo">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ul-wrap" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">回首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/products">商品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/Orders">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/coupons">優惠卷</router-link>
          </li>
        </ul>

        <ul class="navbar-nav navbar-cart-md">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">
              登出
            </a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
import 'bootstrap/js/dist/collapse'
export default {
  methods: {
    logout () {
      console.log('logout')
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$aColor: white;
$aColorHover: black;
$aBGCHover: white;

.navbar {
  font-weight: 900;
  font-size: 18px;
  color: $aColor;
  padding-top: 0;
  padding-bottom: 0;
  position: sticky;
  top: 0;
  z-index: 999;
}

.mr-auto {
  margin-right: auto;
}

.logo {
  width: 200px;
}

.ul-wrap {
  justify-content: space-between;
}

.navbar-nav {
  padding: 0;
  margin: 0;
}

.navbar-nav .nav-item {
  padding: 5px;
  margin: 0;
  border-radius: 5px;

  a {
    color: $aColor;
  }
}

.navbar-nav .nav-item:hover {
  background-color: $aBGCHover;

  a {
    color: $aColorHover;
  }
}
</style>
