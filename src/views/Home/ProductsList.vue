<template>
  <div class="products">
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="container-xl">
      <div class="row main">
        <sidebar :sidebarList="sidebarList" @changeSidebar="changeSidebarHandler"></sidebar>
        <ProductsItems :sidebarTarget="sidebarTarget" :products="productsFilter"></ProductsItems>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Home/ProductsList/Sidebar.vue'
import ProductsItems from '@/components/Home/ProductsList/ProductsItems.vue'
export default {
  components: { Sidebar, ProductsItems },

  data () {
    return {
      sidebarTarget: '全部商品',
      products: [],
      sidebarList: [],
      pagination: {},
      isLoading: false
    }
  },
  computed: {
    productsFilter () {
      return this.products.filter(item => {
        return this.sidebarTarget === '全部商品' ? item : item.category === this.sidebarTarget
      })
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.getSidebar()
          }
        })
    },
    getProduct (id) {
      console.log(id)
      this.$router.push('/home/product/' + id)
    },
    getSidebar () {
      const tempArr = []
      this.products.forEach(item => {
        tempArr.push(item.category)
      })
      this.sidebarList = [...new Set(tempArr)]
    },
    changeSidebarHandler (target) {
      this.sidebarTarget = target
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped></style>
