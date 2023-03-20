<template>
  <div class="Index">
    <Navbar></Navbar>
    <Banner></Banner>
    <Inrto></Inrto>
    <Footer></Footer>
  </div>
</template>

<script>

import Navbar from '@/components/Home/Navbar.vue'
import Inrto from '@/components/Home/Index/Intro.vue'
import Banner from '@/components/Home/Index/Banner.vue'
import Footer from '@/components/Home/Footer.vue'
export default {
  components: { Navbar, Banner, Inrto, Footer }
}
</script>

<style lang="scss" scoped>
.Index {
  margin-top: -63px;
}
</style>
