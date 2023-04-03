<template>
  <div>
    <CartBanner title="關於我們"
      imgUrl="https://images.unsplash.com/photo-1555178738-465e12b1bfc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      fontColor="#eee" boderColor="#eee"></CartBanner>
    <div class="container">
      <AboutContent></AboutContent>
    </div>
  </div>
</template>

<script>
import AboutContent from '@/components/Home/About/Content.vue'
import CartBanner from '@/components/Home/ImgBanner.vue'
export default {
  components: { CartBanner, AboutContent },
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss">
.body {
  background-color: #222222;
}
</style>
