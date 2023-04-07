<template>
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <a class="navbar-brand"
        href="#">
        <img class="logo"
          src="@/assets/logo.png"
          alt="logo">
      </a>

      <button class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ul-wrap"
        id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav navbar-cart-md">
          <li class="nav-item">
            <router-link class="nav-link"
              to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/home/about">
              關於我們
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/home/productslist/lists">商品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/home/favorite">
              <span class="cart-text">
                我的最愛
              </span>
              <i class="cart-icon bi bi-bookmark-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/home/Shoppingcart">
              <span class="cart-text">
                購物車 <span class="mobile-cart-length"
                  v-if="cartLength !== 0">{{ cartLength }}</span>
              </span>
              <i class="cart-icon bi bi-cart cart-length-i">
                <span class="cart-length"
                  v-if="cartLength !== 0">{{ cartLength }}</span>
              </i>
            </router-link>
          </li>
        </ul>

      </div>

    </div>
  </nav>
</template>

<script>
import 'bootstrap/js/dist/collapse'
import emitter from '@/methods/emitter.js'
export default {
  data () {
    return {
      cartLength: 0
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const length = res.data.data.carts.reduce((acc, cur) => {
              return acc + cur.qty
            }, 0)
            this.cartLength = length
          }
        })
    }
  },
  created () {
    this.getCart()
    emitter.on('updateCartLength', () => {
      this.getCart()
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

$aColor: white;
$aColorHover: black;
$aBGCHover: white;

.navbar {
  font-size: 18px;
  color: $main-font-color;
  padding-top: 0;
  padding-bottom: 0;
  background-color: $second-bgc;
  position: sticky;
  top: 0;
  z-index: 995;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
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

.bi-bookmark,
bi-cart {
  font-size: 1.2rem;
}

.mobile-cart-length {
  background-color: red;
  font-weight: 900;
  border-radius: 5px;
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}

.cart-length-i {
  position: relative;
  font-size: 1.2rem;

  .cart-length {
    font-style: initial;
    font-size: 12px;
    border-radius: 5px;
    padding: 0 3px;
    background-color: red;
    position: absolute;
    top: -5px;
    right: -8px;
  }
}

.cart-text {
  display: none;
}

@media (max-width: 767px) {
  .cart-icon {
    display: none;
    color: white;
  }

  .cart-text {
    display: block;
  }

}
</style>
