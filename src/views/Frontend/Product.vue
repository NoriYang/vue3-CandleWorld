<template>
  <div class="product">
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <AlertModal ref="alertModal"></AlertModal>
    <div class="container">
      <Breadcrumb :productTitle="product.title"
        :productCategory="product.category"></Breadcrumb>
      <div class="row product-main">
        <div class="col-12 col-md-6">
          <div class="product-img"
            :style="{ backgroundImage: `url(${product.imageUrl})` }">
          </div>
        </div>
        <ProductIntro :product="product"
          @addCartHandler="addCart"
          :isFav="isFav"
          @openDelModalHandler="openDelModal"
          @addFavoriteHandler="setFavorite"
          @openAlertModalHandler="openAlertModal"></ProductIntro>
      </div>
    </div>
    <delModal ref="favDelModal"
      :delTitle="product.title"
      @removeFavItemHandler="removeFavItem"></delModal>
  </div>
</template>

<script>
import AlertModal from '@/components/Frontend/Content/AlertModal.vue'
import delModal from '@/components/Frontend/Favorite/delModal.vue'
import Breadcrumb from '@/components/Frontend/Product/Breadcrumb.vue'
import ProductIntro from '@/components/Frontend/Product/ProductIntro.vue'

import HomeLoading from '@/components/Content/HomeLoading.vue'

import favoriteMixin from '@/mixins/favoriteMixin.js'
import emitter from '@/methods/emitter.js'

export default {
  mixins: [favoriteMixin],
  components: { Breadcrumb, ProductIntro, HomeLoading, delModal, AlertModal },
  data () {
    return {
      product: {},
      isLoading: false
    }
  },
  computed: {
    isFav () {
      return this.FavoriteItems.findIndex((item) => {
        return item === this.product.id
      })
    }
  },
  methods: {
    getProduct () {
      const id = this.$route.params.productId
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.product = res.data.product
            this.delProductId = this.product.id
            this.favoriteInit()
          }
        })
    },
    addCart (qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const payload = {
        data: {
          product_id: this.product.id,
          qty: qty
        }
      }
      this.isLoading = true
      this.$http.post(api, payload)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            emitter.emit('push-message', {
              style: 'success',
              title: `${this.product.title}`,
              actionText: '新增至購物車'
            })
            this.updateNavCartLength()
          }
        })
    },
    updateNavCartLength () {
      emitter.emit('updateCartLength')
    },
    openAlertModal () {
      this.$refs.alertModal.showModal()
    },
    openDelModal () {
      this.$refs.favDelModal.showModal()
    },
    hideDelModal () {
      this.$refs.favDelModal.hideModal()
    },
    removeFavItem () {
      this.removeFavorite(this.delProductId)
      this.hideDelModal()
      this.delProductId = ''
      emitter.emit('push-message', {
        style: 'success',
        title: `${this.product.title}`,
        actionText: '取消關注成功'
      })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.product {
  margin-top: 80px;
}

.product-main {
  margin-top: 5px;
  min-height: 480px;
  margin-bottom: 5px;

  .product-img {
    height: 720px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }
}

@media (max-width: 991px) {
  .product-main {
    .product-img {
      height: 600px;
    }
  }
}

@media (max-width: 767px) {
  .product-main {
    .product-img {
      height: 340px;
    }
  }
}
</style>
