<template>
  <div class="home">
    <Navbar></Navbar>
    <router-view class="main"></router-view>
    <Footer></Footer>
    <ToastMessage></ToastMessage>
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue'
import Footer from '@/components/Home/Footer.vue'
import ToastMessage from '@/components/Home/ToastMessages.vue'
import emitter from '@/methods/emitter'
export default {
  components: { Navbar, Footer, ToastMessage },
  provide () {
    return {
      emitter
    }
  }

}
</script>

<style lang="scss" scoped>

.main {
  min-height: 80dvh;
}
</style>
