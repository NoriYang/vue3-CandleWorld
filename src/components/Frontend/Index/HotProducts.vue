<template>
  <div class="hot-products container">
    <div class="hot-products-title">
      <p>精選分類</p>
    </div>
    <div class="hot-products-wrap row">
      <div class="col-12 col-md-6 col-lg-3 product-item-wrap"
        v-for="item of hotProducts"
        :key="item.title">
        <div class="product-item"
          @click=goProductsList(item.title)>
          <div class="item-img"
            :style="item.imgUrl">
          </div>
          <h3 class="item-text">
            {{ item.title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotProducts: [
        {
          title: '香氛蠟燭',
          imgUrl: {
            backgroundImage: `url(${require('@/assets/img/HotProducts/HotProduct_01.jpg')})`
          }
        },
        {
          title: '極簡主義',
          imgUrl: {
            backgroundImage: `url(${require('@/assets/img/HotProducts/HotProduct_02.jpg')})`
          }
        },
        {
          title: '香氛組合',
          imgUrl: {
            backgroundImage: `url(${require('@/assets/img/HotProducts/HotProduct_03.jpg')})`
          }
        },
        {
          title: '蠟燭配件',
          imgUrl: {
            backgroundImage: `url(${require('@/assets/img/HotProducts/HotProduct_05.jpg')})`
          }
        }
      ]
    }
  },
  methods: {
    goProductsList (target) {
      this.$router.push('/productslist/' + target)
    }
  }
}
</script>
<style lang="scss" scoped>
.hot-products {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 20px;

  .hot-products-title {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;

    p {
      font-size: 2.5rem;
      font-weight: 900;
      display: inline-block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

  .product-item {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding: 0;
    overflow: hidden;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    cursor: pointer;

    .item-img {
      width: 100%;
      height: 350px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      transition: .2s;
    }

    .item-text {
      position: absolute;
      top: 50%;
      font-size: 2rem;
      color: #eee;
      text-shadow: 0px 0px 5px black;
      font-weight: bold;
      z-index: 5;
    }
  }

  .product-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 6;
  }

  .product-item:hover {
    .item-img {
      transform: scale(1.1);
    }
    &.product-item::before {
      display: none;
    }
  }

}

@media(max-width: 766px) {
  // .product-item {
  //   background-color: red;
  //   height: 150px;
  // }
}</style>
