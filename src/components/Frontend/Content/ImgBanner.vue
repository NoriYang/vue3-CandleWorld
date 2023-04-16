<template>
  <div class="cart-banner" :style="baseStyle">
    <h2 :style="boderStyle">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '請輸入title'
    },
    imgUrl: {
      type: String
    },
    fontColor: {
      type: String,
      default: '#F7F1F0'
    },
    boderColor: {
      type: String,
      default: '#F7F1F0'
    }
  },
  data () {
    return {
      baseStyle: {
        backgroundImage: `url(${this.imgUrl})`,
        color: this.fontColor
      },
      boderStyle: {
        borderBottom: `5px double ${this.boderColor}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.cart-banner {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 2rem;
    font-weight: 700;
    border-bottom: 5px double $main-bgc;
    margin-top: 50px;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.8);
  }
}
</style>
