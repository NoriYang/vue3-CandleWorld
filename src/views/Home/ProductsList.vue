<template>
  <div class="products">
    <!-- <loading :active="isLoading"></loading> -->
    <div class="container-xl">
      <div class="row main">
        <nav class="sidebar col-md-3 col-lg-2">

          <ul class="sidebar-lists">
            <li class="sidebar-lists-item" :class="{ 'active': sidebarTarget == '全部商品' }" @click="chageSidebar('全部商品')">
              全部商品</li>
            <li class="sidebar-lists-item" :class="{ 'active': sidebarTarget == list }" v-for="list of sidebarList"
              :key="list" @click="chageSidebar(list)">
              {{ list }}
            </li>
          </ul>
        </nav>

        <div class="products-items col-md-9 col-lg-10">
          <div class="container">
            <div class="row mt-4 gx-3">
              <div class="card col-sm-6 col-md-6 col-lg-3" v-for="product of productsFilter" :key="product.id">
                <div class="card-item">
                  <div class="card-item-img" :style="{ backgroundImage: `url(${product.imageUrl})` }">
                    <div class="enter-item">
                      <i class="bi bi-hand-index-thumb-fill"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{{ product.title.split('-')[0] }}</h5>
                    <h5 class="card-title">{{ product.title.split('-')[1] }}</h5>
                    <div class="card-body-bottom">
                      <div class="price-lists">
                        <span class="origin-price">${{ $filters.currency(product.origin_price) }}</span>
                        <span class="price">${{ $filters.currency(product.price) }}</span>
                      </div>
                      <div class="button-lists">
                        <button class="btn btn-outline-dark">
                          <i class="bi bi-star"></i>
                        </button>
                        <button class="btn btn-outline-dark">
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

  .sidebar-lists {
    list-style: none;
    padding: 0;
    margin: 0;

    .sidebar-lists-item {
      letter-spacing: 5px;
      font-size: 20px;
      font-weight: 900;
      margin-top: 1px;
      margin-bottom: 5px;
      padding: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      border-left: 2px solid rgba(0, 0, 0, 0.2);
      box-shadow: -2px 3px 5px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      position: relative;
      &.active {
        border-left: 5px solid rgba(0, 0, 0, 0.7);
      }
      &:hover{
        &::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 4px solid rgba(0, 0, 0, 0.7);
          animation: 0.3s sidebarListHover forwards ease-in-out;
        }
      }
    }
    @keyframes sidebarListHover {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }
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
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

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
    position: relative;
    cursor: pointer;
    .enter-item {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.7);
      width: 100%;
      height: 100%;
      opacity: 0;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 18px;
        transform: translateX(-50%) translateY(-50%);
      }
    }

    .enter-item:hover {
      animation: 0.5s enterItem forwards ease-in-out;
      i {
        animation: 0.5s enterItemIcon forwards ease-in-out;
      }
    }
  }

  @keyframes enterItem {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100;
    }
  }

  @keyframes enterItemIcon {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(2);
    }
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
      button {
        margin-left: 5px;
      }

      i {
        font-size: 18px;
      }
    }
  }
}

@media(max-width: 764px) {
  .sidebar {
    position: static;
  }
}</style>
