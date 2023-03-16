<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container container-wrap">
      <a class="navbar-brand" href="#">
        <img class="logo" src="@/assets/logo.png" alt="logo">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ul-wrap" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">商品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">登入</router-link>
          </li>
        </ul>

        <ul class="navbar-nav navbar-cart-md">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="bi bi-bookmark"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="bi bi-cart"></i></router-link>
          </li>
        </ul>

        <ul class="navbar-nav navbar-cart-mobile">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="bi bi-bookmark"></i> 收藏項目</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="bi bi-cart"></i> 購物車</router-link>
          </li>
        </ul>

      </div>

    </div>
  </nav>
</template>

<script>
import 'bootstrap/js/dist/collapse'
export default {

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

.logo {
  width: 200px;
}

.ul-wrap {
  display: flex;
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

.navbar-cart-mobile {
  display: none;
}

@media(max-width: 767px) {
  .ul-wrap {
    display: block;
    padding-bottom: 5px;
  }

  .navbar-cart-md {
    display: none;
  }

  .navbar-cart-mobile {
    display: flex;
  }
}
</style>
