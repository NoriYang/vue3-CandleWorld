<template>
  <div class="Index">
    <!-- <Hometopnav></Hometopnav> -->
    <Navbar></Navbar>
    <Banner></Banner>
    <Inrto></Inrto>
    <Footer></Footer>
  </div>
</template>

<script>
// import Hometopnav from '@/components/Home/HomeTopNav.vue'
import Navbar from '@/components/Home/Navbar.vue'
import Inrto from '@/components/Home/Index/Intro.vue'
import Banner from '@/components/Home/Index/Banner.vue'
import Footer from '@/components/Home/Footer.vue'
export default {
  components: { Banner, Inrto, Footer, Navbar }
}
</script>

<style lang="scss" scoped>
.nav-banner {
  position: relative;
}
</style>
