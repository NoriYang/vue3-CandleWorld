<template>
  <div class="main-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <router-link to="/">
            <img class="logo" src="@/assets/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <p class="copyright-text">
            Copyright &copy; 2023 Dylan Li
            <br>
            本網站僅供個人作品使用，不做任何商業用途
          </p>

        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <ul class="footer-icon">
            <li>
              <a href="#">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-github"></i>
              </a>
            </li>
            <li>
              <router-link to="/dashboard/products">
                <i class="bi bi-folder"></i>
              </router-link>
            </li>
          </ul>
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
.main-footer {
  margin-top: 50px;
  width: 100%;
  background-color: #343a40;
  color: white;
}

.copyright-text {
  margin-top: 15px;
  text-align: center;
}

.footer-icon {
  margin-top: 15px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: white;
  text-decoration: none;

  li {
    padding: 5px;
    font-size: 25px;
    margin-left: 5px;

    a {
      color: white;
    }
  }
}</style>
