<template>
  <div>
    <FavoriteBanner title="我的最愛"
      imgUrl="https://images.unsplash.com/photo-1596568840418-5f4db2029de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      fontColor="#F7F1F0" boderColor="#F7F1F0">
    </FavoriteBanner>
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="container main-favorite">
      <div class="favorite-top-buttons">
        <div class="back-button">
          <router-link to="/productslist/lists">
            <i class="bi bi-arrow-left"></i>
            商品列表
          </router-link>
        </div>
        <button class="clean-button btn btn-danger" @click="cleanAllButton"
          :disabled="FavoriteItems.length === 0">清空我的最愛</button>
      </div>
      <FavoriteItems :loadingItem="status.loadingItem" :products="favoriteFilter"
        @removeFavoriteHandler="removeFavItemButton" @addCartHandler="addCart">
      </FavoriteItems>
    </div>
    <delModal ref="favDelModal" :delTitle="delTitle" @cleanAllFavItemsHandler="cleanAllFavItems"
      @removeFavItemHandler="removeFavItem"></delModal>
  </div>
</template>
<script>

import delModal from '@/components/Frontend/Favorite/delModal.vue'
import FavoriteBanner from '@/components/Frontend/Content/ImgBanner.vue'
import FavoriteItems from '@/components/Frontend/Favorite/FavoriteItems.vue'

import favoriteMixin from '@/mixins/favoriteMixin.js'
import emitter from '@/methods/emitter.js'

export default {
  mixins: [favoriteMixin],
  components: { FavoriteItems, FavoriteBanner, delModal },
  data () {
    return {
      status: {
        loadingItem: '' // 對應品項ID
      },
      delTitle: 'all',
      delProductId: ''
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
            this.favoriteInit()
          }
        })
    },
    addCart ({ productTitle, productId }, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const payload = {
        data: {
          product_id: productId,
          qty: qty
        }
      }
      emitter.emit('push-message', {
        style: 'success',
        title: `${productTitle} 新增購物車成功`
      })
      this.status.loadingItem = productId
      this.$http.post(api, payload)
        .then(res => {
          if (res.data.success) {
            this.status.loadingItem = ''
            this.updateNavCartLength()
          }
        })
    },
    openDelModal () {
      this.$refs.favDelModal.showModal()
    },
    hideDelModal () {
      this.$refs.favDelModal.hideModal()
    },
    updateNavCartLength () {
      emitter.emit('updateCartLength')
    },
    removeFavItemButton ({ productId, productTitle }) {
      this.delProductId = productId
      this.delTitle = productTitle
      this.openDelModal()
    },
    cleanAllButton () {
      this.delTitle = 'all'
      this.openDelModal()
    },
    cleanAllFavItems () {
      this.cleanFavoriteAll()
      this.hideDelModal()
    },
    removeFavItem () {
      this.removeFavorite(this.delProductId)
      this.hideDelModal()
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss">
.main-favorite {
  min-height: 500px;
}
.favorite-top-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .back-button {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;

    a {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
