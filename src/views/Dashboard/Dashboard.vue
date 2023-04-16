<template>
  <div>
    <HomeLoading :isLoading="!check"></HomeLoading>
    <div v-if="check">
      <Dashboard-Navbar />
      <div class="container-fluid">
        <router-view />
      </div>
      <ToastMessage />
    </div>
  </div>
</template>

<script>
import HomeLoading from '@/components/Content/HomeLoading.vue'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar.vue'
import ToastMessage from '@/components/Dashboard/ToastMessages.vue'
import emitter from '@/methods/emitter'
export default {
  components: { DashboardNavbar, ToastMessage, HomeLoading },
  data () {
    return {
      check: false
    }
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `${token}`
      const api = `${process.env.VUE_APP_API}api/user/check`
      this.$http.post(api)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login')
          } else {
            this.check = true
          }
        })
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style lang="scss"></style>
