<template>
  <div>
    <IndexCarousel />
    <HotProducts />
    <Subscribe />
    <Intro />
  </div>
</template>

<script>
import IndexCarousel from '@/components/Frontend/Index/IndexCarousel.vue'
import Intro from '@/components/Frontend/Index/Intro.vue'
import HotProducts from '@/components/Frontend/Index/HotProducts.vue'
import Subscribe from '@/components/Frontend/Index/Subscribe.vue'
export default {
  components: { IndexCarousel, Intro, HotProducts, Subscribe }
}
</script>

<style lang="scss"></style>
