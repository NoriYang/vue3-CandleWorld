<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="home-main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue'
import Footer from '@/components/Home/Footer.vue'
export default {
  components: { Navbar, Footer }
}
</script>

<style lang="scss" scoped>
.home-main {
  min-height: 100vh;
}
</style>
