<template>
  <nav class="navbar navbar-expand-md">
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
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/productslist">商品列表</router-link>
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

        <!-- <ul class="navbar-nav navbar-cart-mobile">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="bi bi-bookmark"></i> 收藏項目</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="bi bi-cart"></i> 購物車</router-link>
          </li>
        </ul> -->
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
@import "@/assets/helpers/main.scss";

$aColor: white;
$aColorHover: black;
$aBGCHover: white;

.navbar {
  font-weight: 900;
  font-size: 18px;
  color: $main-font-color;
  padding-top: 0;
  padding-bottom: 0;
  background-color: $second-bgc;
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
  border-radius: 2px;
  border: none;
  a {
    color: $main-bgc;
  }
}

.navbar-nav .nav-item:hover {
  background-color: $main-bgc;
  border: none;
  a {
    color: $main-font-color;
  }
}
</style>
