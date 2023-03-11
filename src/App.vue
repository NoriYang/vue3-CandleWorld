<template>
  <div class="main">
    <div class="navbar-wrap">
      <Navbar></Navbar>
    </div>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <!-- <div class="footer">
      footer
    </div> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style lang="scss">
@import "./assets/all";
.navbar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  z-index: 1;
}
.content-wrap {
  margin-top: 63px
}
.footer {
  height: 200px;
  width: 100%;
  background-color: green;
}
</style>
