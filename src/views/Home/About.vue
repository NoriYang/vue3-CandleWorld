<template>
  <div>
    <CartBanner title="關於我們"
      imgUrl="https://images.unsplash.com/photo-1608181831843-e7e72430f993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      fontColor="#222" boderColor="#222"></CartBanner>
  </div>
</template>
<script>
import CartBanner from '@/components/Home/ImgBanner.vue'
export default {
  components: { CartBanner }
}
</script>
<style lang="scss">
  .body{
    background-color: #222222;
  }
</style>
