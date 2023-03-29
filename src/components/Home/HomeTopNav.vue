<template>
  <div class="first-nav">
    <div class="nav-left">
      <ul class="link-groups">
        <li class="link">
          <router-link class="nav-link" to="/home/about">關於我們</router-link>
        </li>
        <li class="link">
          <router-link class="nav-link" to="/home/productslist/lists">商品列表</router-link>
        </li>
      </ul>
    </div>
    <div class="nav-center">
      <a class="navbar-brand" href="#">
        <img class="logo" src="@/assets/new-logo.png" alt="logo">
      </a>
    </div>
    <div class="nav-right">
      <ul class="link-groups">
        <li class="link">
          <router-link class="nav-link" to="/">
            <i class="cart-icon bi bi-bookmark"></i>
          </router-link>
        </li>
        <li class="link">
          <router-link class="nav-link" to="/home/Shoppingcart">
            <i class="cart-icon bi bi-cart cart-length-i">
              <span class="cart-length" v-if="cartLength !== 0">{{ cartLength }}</span>
            </i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.first-nav {
  padding: 20px;
  position: absolute;
  width: 100%;
  z-index: 996;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link-groups {
    padding: 0;
    list-style: none;
    display: inline-block;
    font-size: 1.5rem;

    .link {
      display: inline-block;
      font-weight: 900;
      font-size: 2;
      padding: 10px;
    }
  }

  .nav-right,
  .nav-left {
    width: 30%;
  }

  .nav-center {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-center {
    .logo {
      width: 300px;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: end;
  }

}
</style>
