<template>
  <div class="products">
    <div class="container">
      <div class="row main">
        <nav class="sidebar col-md-3">
          <ul class="sidebar-lists">
            <li class="sidebar-lists-item">全部商品</li>
            <li class="sidebar-lists-item">熱門商品</li>
            <li class="sidebar-lists-item">組合包</li>
            <li class="sidebar-lists-item">器具</li>
            <li class="sidebar-lists-item">香氛蠟燭</li>
            <li class="sidebar-lists-item">全部商品</li>
            <li class="sidebar-lists-item">熱門商品</li>
            <li class="sidebar-lists-item">組合包</li>
            <li class="sidebar-lists-item">器具</li>
            <li class="sidebar-lists-item">香氛蠟燭</li>
          </ul>
        </nav>
        <div class="products-items col-md-9">
          products-items
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
* {
  background-color: rgba(0, 100, 0, 0.05);
}
// .products {
//   height: 100dvh;
// }
.products-banner {
  height: 250px;
  width: 100%;
  background-image: url(https://images.unsplash.com/photo-1513538209087-f223a5718ede?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80);
  background-size: 100%;
  background-position: center 75%;
  background-repeat: no-repeat;
  position: relative;

  .banner-title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
    font-size: 36px;
    font-weight: bolder;
    text-shadow: 0 3px 10px #020202;
    letter-spacing: 3px;
  }
}
.main {
  position: relative;
}
.sidebar-lists {
  position: sticky;
  top: 63px;
}
.products-items {
}
</style>
