<template>
  <div class="home">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue'
export default {
  components: { Navbar }
}
</script>

<style lang="scss" scoped>
</style>
