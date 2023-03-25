<template>
  <div class="products">
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="container-xl">
      <div class="row main">
        <sidebar :sidebarList="sidebarList" :sidebarTarget="sidebarTarget" :isLoading="isLoading"
          @changeSidebar="changeSidebarHandler"></sidebar>
        <ProductsItems :products="productsFilter" @addCartHandler="addCart" :loadingItem="status.loadingItem"></ProductsItems>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Home/ProductsList/Sidebar.vue'
import ProductsItems from '@/components/Home/ProductsList/ProductsItems.vue'
import emitter from '@/methods/emitter.js'
export default {
  components: { Sidebar, ProductsItems },
  data () {
    return {
      sidebarTarget: '全部商品',
      products: [],
      sidebarList: [],
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項ID
      }
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
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.getSidebar()
            this.updateSibarTarget()
          }
        })
    },
    getProduct (id) {
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
      if (this.$route.params.sidebarTarget !== 'lists') {
        this.$router.replace('/home/productslist/lists')
      }
    },
    updateSibarTarget () {
      const target = this.$route.params.sidebarTarget
      // 如果有分類
      const flag = this.sidebarList.some((item) => {
        return item === target
      })
      if (flag) {
        this.sidebarTarget = this.$route.params.sidebarTarget + ''
      }
    },
    addCart (productId, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const payload = {
        data: {
          product_id: productId,
          qty: qty
        }
      }
      this.status.loadingItem = productId
      this.$http.post(api, payload)
        .then(res => {
          if (res.data.success) {
            this.status.loadingItem = ''
            this.updateNavCartLength()
          }
        })
    },
    updateNavCartLength () {
      emitter.emit('updateCartLength')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped></style>
