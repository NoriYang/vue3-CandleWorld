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
          <div class="container">
            <div class="row">
              <div class="item-card col-md-4">
                <div class="card">
                  <img src="" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                      card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="item-card col-md-4">
                item-card
              </div>
              <div class="item-card col-md-4">
                item-card
              </div>
            </div>
          </div>
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

.products {
  background-color: #fff;
  padding-top: 25px;
}

.sidebar {
  height: 100%;
  background-color: orange;
  position: sticky;
  top: 64px;
}

.products-items {

  .item-card {
    background-color: gray;
    min-height: 400px;
  }
}
</style>
