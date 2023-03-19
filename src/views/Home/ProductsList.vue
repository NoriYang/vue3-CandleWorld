<template>
  <div class="products">
    <!-- <loading :active="isLoading"></loading> -->
    <div class="container">
      <div class="row main">
        <nav class="sidebar col-md-2">

          <ul class="sidebar-lists">
            <li class="sidebar-lists-item" @click="chageSidebar('全部商品')">全部商品</li>
            <li class="sidebar-lists-item" v-for="list of sidebarList" :key="list" @click="chageSidebar(list)">
              {{ list }}
            </li>
          </ul>
        </nav>

        <div class="products-items col-md-10">
          <div class="container">
            <div class="row mt-4 gx-3">
              <div class="card col-sm-6 col-md-4 col-lg-3" v-for="product of productsFilter" :key="product.id">
                <div class="card-item">
                  <div class="card-item-img" :style="{ backgroundImage: `url(${product.imageUrl})` }"></div>
                  <div class="card-body">
                    <h5 class="card-title">{{ product.title.split('-')[0] }}</h5>
                    <h5 class="card-title">{{ product.title.split('-')[1] }}</h5>
                    <div class="card-body-bottom">
                      <div class="price-lists">
                        <span class="origin-price">${{ $filters.currency(product.origin_price) }}</span>
                        <span class="price">${{ $filters.currency(product.price) }}</span>
                      </div>
                      <div class="button-lists">
                        <button class="btn btn-primary">
                          <i class="bi bi-cart3"></i>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sidebarTarget: '全部商品',
      products: [],
      sidebarList: [],
      pagination: {}
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
      // this.isLoading = true
      this.$http.get(api)
        .then(res => {
          // this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.getSidebar()
          }
        })
    },
    getSidebar () {
      this.products.forEach(item => {
        this.sidebarList.push(item.category)
      })
      this.sidebarList = [...new Set(this.sidebarList)]
    },
    chageSidebar (target) {
      this.sidebarTarget = target
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped>
* {
  // background-color: rgba(0, 100, 0, 0.05);
  // border: 1px solid #000;
}

.sidebar {
  margin-top: 20px;
  height: 100%;
  position: sticky;
  top: 64px;
}

.products-items {
  padding-top: 0px;
  margin-top: 0px;
}

.card,
.cart-item {
  border: none;
  border-radius: 0px;
}

.card-item {
  border: none;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  .card-title {
    font-size: 18px;
    text-align: center;
    font-weight: 900;
  }

  .card-title:nth-child(2) {
    font-size: 16px;
    font-weight: 900;
  }

  .card-item-img {
    height: 200px;
    background-size: cover;
    background-position: center;
  }

  .card-body {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
  .card-body-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .price-lists {
      margin-bottom: -5px;
      span {
        display: flex;
      }
      .origin-price {
        text-decoration: line-through;
        font-size: 14px;
      }
      .price {
        font-size: 18px;
        font-weight: 900;
      }
    }
    .button-lists {

    }
  }

}
</style>
