<template>
  <div>
    <Dashboard-Navbar></Dashboard-Navbar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <ToastMessage></ToastMessage>
  </div>
</template>

<script>
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar.vue'
import ToastMessage from '@/components/Dashboard/ToastMessages.vue'
import emitter from '@/methods/emitter'
export default {
  components: { DashboardNavbar, ToastMessage },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
<style lang="scss"></style>
