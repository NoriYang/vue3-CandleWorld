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
                to="about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"
                to="productslist/all">香氛蠟燭</router-link>
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
          to="/about">
          <i class="cart-icon bi bi-bookmark-fill"></i>
        </router-link>
        <router-link class="nav-link"
          to="/about">
          <i class="cart-icon bi bi-cart cart-length-i"></i>
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
                to="about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link menu-item"
                @click.prevent="showOffcanvasMenu"
                to="productslist/all">香氛蠟燭</router-link>
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
          to="/about">
          <i class="cart-icon bi bi-bookmark-fill"></i>
        </router-link>
        <router-link class="nav-link"
          to="/about">
          <i class="cart-icon bi bi-cart cart-length-i"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      navDeepColor: false,
      showMenu: false
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler () {
      this.navDeepColor = window.scrollY > 80
    },
    showOffcanvasMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
<style lang="scss" scoped>
// * {
//   background-color: rgba(100, 200, 100, 0.2);
//   border: 1px solid #000;
// }
.desktop {
  display: flex;
}

.mobile {
  display: none;
}

.header {
  transition: all 0.5s;

  &.deepColor {
    background-color: #403234;
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
}

.desktop {
  background-color: rgba(#403234, 0.5);

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
  background-color: rgba(#403234, 0.8);
}

.main-panel {
  width: 100%;
  background-color: #403234;
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
}</style>
