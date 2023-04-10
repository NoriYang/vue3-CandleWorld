<template>
  <div class="products">
    <AlertModal ref="alertModal"></AlertModal>
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <CartBanner title="商品列表"
      imgUrl="https://images.unsplash.com/photo-1557761830-8d36eedd1718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      fontColor="#F7F1F0"
      boderColor="#F7F1F0"></CartBanner>
    <div class="container-xl">
      <div class="row main">
        <sidebar :sidebarList="sidebarList"
          :sidebarTarget="sidebarTarget"
          :isLoading="isLoading"
          @changeSidebar="changeSidebarHandler"></sidebar>
        <ProductsItems :products="productsFilter"
          @addCartHandler="addCart"
          :loadingItem="status.loadingItem"
          @setFavoriteHandler="setFavorite"
          @removeFavoriteHandler="removeFavItemButton"
          :FavoriteItems="FavoriteItems"
          @openAlertModalHandler="openAlertModal">
        </ProductsItems>
      </div>
    </div>
    <delModal ref="favDelModal"
      :delTitle="delTitle"
      :delProductId="delProductId"
      @removeFavItemHandler="removeFavItem(delTitle)">
    </delModal>
  </div>
</template>

<script>
import delModal from '@/components/Frontend/Favorite/delModal.vue'
import AlertModal from '@/components/Frontend/Content/AlertModal.vue'
import CartBanner from '@/components/Frontend/Content/ImgBanner.vue'
import Sidebar from '@/components/Frontend/ProductsList/Sidebar.vue'
import ProductsItems from '@/components/Frontend/ProductsList/ProductsItems.vue'

import emitter from '@/methods/emitter.js'
import favoriteMixin from '@/mixins/favoriteMixin.js'

export default {
  mixins: [favoriteMixin],
  components: { Sidebar, ProductsItems, CartBanner, delModal, AlertModal },
  data () {
    return {
      products: [],
      FavoriteItems: [],
      favoriteFilter: [],
      isLoading: false,
      sidebarTarget: '全部商品',
      sidebarList: [],
      pagination: {},
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
            this.favoriteInit() // mixin
          }
        })
    },
    getProduct (id) {
      this.$router.push('/product/' + id)
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
        this.isFavorite = false
        this.$router.replace('/productslist/lists')
      }
    },
    updateSibarTarget () {
      const target = this.$route.params.sidebarTarget
      // 如果有分類 不是lists favorite
      const flag = this.sidebarList.some((item) => {
        return item === target
      })
      if (flag) {
        this.sidebarTarget = this.$route.params.sidebarTarget + ''
      }
    },
    addCart ({ productTitle, productId }, qty = 1) {
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
            emitter.emit('push-message', {
              style: 'success',
              title: `${productTitle}`,
              actionText: '新增至購物車'
            })
            this.status.loadingItem = ''
            this.updateNavCartLength()
          }
        })
    },
    updateNavCartLength () {
      emitter.emit('updateCartLength')
    },
    // fav del Modal
    openDelModal () {
      this.$refs.favDelModal.showModal()
    },
    hideDelModal () {
      this.$refs.favDelModal.hideModal()
    },
    removeFavItemButton ({ productId, productTitle }) {
      this.delProductId = productId
      this.delTitle = productTitle
      this.openDelModal()
    },
    removeFavItem (title) {
      this.removeFavorite(this.delProductId)
      this.hideDelModal()
      emitter.emit('push-message', {
        style: 'success',
        title: `${title}`,
        actionText: '取消關注成功'
      })
    },
    openAlertModal () {
      this.$refs.alertModal.showModal()
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped></style>
