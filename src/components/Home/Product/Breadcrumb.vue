<template>
  <nav class="product-breadcrumb" aria-label="breadcrumb" style="--bs-breadcrumb-divider : '>';">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">
          首頁
        </router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="/home/productsList/lists">商品列表</router-link>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <a href="#" @click.prevent="goTarget">{{ productCategory }}</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        {{ productTitle }}
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  props: {
    productTitle: {
      type: String,
      default: ''
    },
    productCategory: {
      type: String,
      default: ''
    }
  },
  methods: {
    goTarget () {
      this.$router.push('/home/productslist/' + this.productCategory)
    }
  },
  created () {
  }
}
</script>
<style lang="scss">
@import "@/assets/helpers/main.scss";

.breadcrumb {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 900;

  a {
    text-decoration: none;
    color: $second-bgc;
  }

  a:hover {
    filter: brightness(1.5);
  }
}
</style>
