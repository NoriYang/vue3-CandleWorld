<template>
  <div class="home">
    <Navbar></Navbar>
    <router-view class="main"></router-view>
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
.home {
  height: 100%;
}
.main {
  min-height: 80dvh;
}
</style>
