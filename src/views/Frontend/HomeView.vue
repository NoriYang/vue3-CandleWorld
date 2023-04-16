<template>
  <FrontendNavbar />
  <router-view />
  <FrontendFooter />
  <ToastMessage />
</template>

<script>
import FrontendNavbar from '@/components/Frontend/HomeView/FrontendNavbar.vue'
import FrontendFooter from '@/components/Frontend/HomeView/FrontendFooter.vue'
import ToastMessage from '@/components/Frontend/Content/ToastMessages.vue'
import emitter from '@/methods/emitter'
export default {
  components: { FrontendNavbar, FrontendFooter, ToastMessage },
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style lang="scss"></style>
