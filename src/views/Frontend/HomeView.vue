<template>
  <FrontendNavbar></FrontendNavbar>
  <router-view></router-view>
</template>
<script>
import FrontendNavbar from '@/components/Frontend/HomeView/FrontendNavbar.vue'
export default {
  components: { FrontendNavbar }
}
</script>
<style lang="scss"></style>
