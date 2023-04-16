<template>
  <div class="footer">
    <div class="container-xl">
      <div class="row">
        <div class="col-12 col-md-12">
          <div class="lists-wrap footer-left">
            <h2 class="logo-title">
              CANDLE WORLD
            </h2>
            <ul>
              <li>
                <router-link to="/">
                  <i class="bi bi-facebook"></i>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <i class="bi bi-instagram"></i>
                </router-link>
              </li>
              <li>
                <a href="https://github.com/NoriYang/vue3-final-project" target="_blank">
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
        <div class="col-12 col-md-6">
          <div class="lists-wrap footer-center">
            <h2 class="list-title">關於本站</h2>
            <ul>
              <li>
                <router-link to="/about">
                  關於我們
                </router-link>
              </li>
              <li>
                <router-link to="/productslist/lists">
                  香氛蠟燭
                </router-link>
              </li>
              <li>
                <router-link to="/searchorder">
                  訂單查詢
                </router-link>
              </li>
              <li>
                <router-link to="/qanda">
                  常見問題
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="lists-wrap footer-right">
            <h2 class="list-title">聯絡方式</h2>
            <div class="right-info">
              <ul>
                <li>
                  <i class="bi bi-geo-alt-fill"></i>
                  台灣台灣市區123號
                </li>
                <li>
                  <i class="bi bi-clock"></i>
                  周一至周六 08:00 - 21:00
                </li>
                <li>
                  <i class="bi bi-envelope"></i>
                  noriyang0215@gmail.com
                </li>
                <li>
                  <i class="bi bi-telephone-fill"></i>
                  (09)8765-432
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 copyright-text">
          <p>
            Copyright &copy; 2023 Dylan Li
            <br>
            本網站僅供個人作品使用，不做任何商業用途
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.footer {
  background-color: $second-bgc;
  min-height: 30dvh;
  color: #eee;
  font-size: 1.2rem;
  padding-top: 20px;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
}

.lists-wrap {
  text-align: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.list-title,
.logo-title {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 5px;
}

.footer-left {

  ul {
    li {
      padding: 10px;
    }

    li>a>i {
      font-size: 1.2rem;
      color: #ccc
    }
  }
}

.footer-center {
  ul {
    flex-direction: column;

    li {
      margin-bottom: 5px;
    }

    li a {
      font-size: 1rem;
      padding: 5px 20px;
      color: #ccc;
      text-decoration: none;
    }
  }
}

.footer-right {
  text-align: center;
  font-size: 1rem;
  .right-info {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
  }

  ul {
    align-items: start;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;

    li {
      margin-top: 5px;
      margin-bottom: 5px;

      i {
        margin-right: 5px;
      }
    }
  }
}

.copyright-text {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  font-size: 1rem;
  margin-top: 15px;
  text-align: center;
  color: #ccc;
}

@media (max-width: 768px) {

  .list-title,
  .logo-title {
    margin-top: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}</style>
