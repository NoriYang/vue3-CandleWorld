<template>
  <!-- desktop -->
  <nav class="desktop header navbar navbar-expand-lg navbar-dark fixed-top"
    :class="{ deepColor: navDeepColor }">
    <div class="main-menu container">
      <router-link class="brand-font navbar-brand"
        to="/">CANDLE WORLD</router-link>
      <div class="center-menu">
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"
          id="navbarNav">
          <ul class="center-menu-ul navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link"
                to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"
                to="/productslist/lists">香氛蠟燭</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"
                to="/">訂單查詢</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"
                to="/">常見問題</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-menu">
        <router-link class="nav-link"
          to="/favorite">
          <i class="cart-icon bi bi-bookmark-fill"></i>
        </router-link>
        <router-link class="nav-link"
          to="/shoppingCart">
          <i class="cart-icon bi bi-cart cart-length-i">
            <span class="cart-length"
              v-if="cartLength !== 0">{{ cartLength }}</span>
          </i>
        </router-link>
      </div>
    </div>
  </nav>
  <!-- mobile -->
  <nav class="mobile header navbar navbar-expand-lg navbar-dark fixed-top"
    :class="{ deepColor: navDeepColor }">
    <div class="main-menu container-fluid">
      <button type="button"
        class="navbar-toggler"
        @click="showOffcanvasMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-start main-panel"
        tabindex="-1"
        :class="showMenu ? 'show' : ''"
        :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
        <div class="offcanvas-header">
          <button type="button"
            class="btn-close"
            @click="showOffcanvasMenu"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="offcanvas-menu">
            <li class="nav-item">
              <router-link class="nav-link menu-title"
                @click.prevent="showOffcanvasMenu"
                to="/">CANDLE WORLD</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link menu-item"
                @click.prevent="showOffcanvasMenu"
                to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link menu-item"
                @click.prevent="showOffcanvasMenu"
                to="/productslist/lists">香氛蠟燭</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link menu-item"
                @click.prevent="showOffcanvasMenu"
                to="/">訂單查詢</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link menu-item"
                @click.prevent="showOffcanvasMenu"
                to="/">常見問題</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="right-menu">
        <router-link class="nav-link"
          to="/favorite">
          <i class="cart-icon bi bi-bookmark-fill">
          </i>
        </router-link>
        <router-link class="nav-link"
          to="/shoppingCart">
          <i class="cart-icon bi bi-cart cart-length-i">
            <span class="cart-length"
              v-if="cartLength !== 0">{{ cartLength }}</span>
          </i>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import emitter from '@/methods/emitter'
export default {
  data () {
    return {
      navDeepColor: false,
      showMenu: false,
      cartLength: 2
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollHandler)
    this.getCart()
    emitter.on('updateCartLength', () => {
      this.getCart()
    })
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
    },
    scrollHandler () {
      this.navDeepColor = window.scrollY > 80
    },
    showOffcanvasMenu () {
      this.showMenu = !this.showMenu
    }
  },
  onBeforeUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.desktop {
  display: flex;
}

.mobile {
  display: none;
}

.header {
  transition: background-color 0.5s;

  &.deepColor {
    background-color: $second-bgc;
  }
}

.brand-font {
  font-size: 1.4rem;
}

.right-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-link {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.5rem;
    color: #F7F1F0;
  }
  .cart-length-i {
    position: relative;
  }
  .cart-length {
    background-color: red;
    font-size: 14px;
    font-weight: 900;
    border-radius: 50%;
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    font-style: normal;
    position: absolute;
    right: -8px;
    top: 0;
  }
}

.desktop {
  background-color: rgba($second-bgc, 0.5);

  .center-menu-ul {
    gap: 2rem;
    font-size: 1.15rem;
    letter-spacing: 2px;

    .nav-item {
      .nav-link {
        padding-left: 20px;
        padding-right: 20px;
      }

      a {
        color: #F7F1F0;
        position: relative;
        transition: 1s;
        padding: 10px;

        &:hover {
          &::before {
            content: '';
            border-radius: 5px;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            border-bottom: 5px solid #eee;
            border-right: 5px solid #eee;
            animation: 0.8s navItmeAHover ease-in-out forwards;
          }

          &::after {
            content: '';
            border-radius: 5px;
            position: absolute;
            top: 0;
            right: 0;
            width: 0%;
            border-top: 5px solid #eee;
            border-left: 5px solid #eee;
            animation: 0.8s navItmeAHover ease-in-out forwards;
          }
        }
      }

    }

  }
}

@keyframes navItmeAHover {
  0% {
    width: 0%;
  }

  50% {
    width: 100%;
    height: 0%;
  }

  100% {
    width: 100%;
    height: 100%;
  }
}

.mobile {
  background-color: rgba($second-bgc, 0.8);
}

.main-panel {
  width: 100%;
  background-color: $second-bgc;
  color: #fff;

  .offcanvas-menu {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;

    .menu-title {
      font-size: 1.5rem;
      font-weight: 900;
    }

    .menu-item {
      font-size: 1.3rem;
      letter-spacing: 5px;
    }

    a {
      letter-spacing: 2px;
      text-decoration: none;
      padding: 20px;
    }
  }
}

@media(max-width:991px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }
}
</style>
