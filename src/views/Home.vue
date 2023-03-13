<template>
  <div class="home">
    <div class="banner">
      <div class="banner-content">
        <p class="banner-content-pc">
          <span class="imp-text">居家空間</span><br>
          也能擁有草木花香
        </p>
        <p class="banner-content-mobile">
          <span class="imp-text">居家空間</span><br>
          也能擁有<br>
          草木花香
        </p>
        <div class="banner-link">
          <router-link class="banner-link" to="/products">
            前往購買<i class="bi bi-chevron-right arrow-move"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="intro-main">
      <div class="container">
        <div class="card mb-3">
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1602607203475-c5e99918dfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                class="img-fluid rounded" alt="介紹圖片">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <div>
                  <h5 class="card-title">清除空間異味</h5>
                  <p class="card-text">
                    你有使用空氣清新劑的習慣嗎？如果含有有害的化學添加成分，吸入到人體實在不妥，選擇點上香氛蠟燭，讓香氣飄散浴室、廁間，就可以有效清除異味，跟尷尬味道說掰掰！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row d-flex flex-row-reverse">
            <div class="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1608085021802-e886468f5fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="img-fluid rounded" alt="介紹圖片">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <div>
                  <h5 class="card-title">添加空間香氣</h5>
                  <p class="card-text">
                    對氣味敏感的人真心推！天然蠟燭的精油透過燃燒會揮發至空氣中，讓整個空間氛圍洋溢著淡淡香氣，不刺鼻不致暈，而且柔和持久，經常使用更會讓家具、身體都沾染迷人好聞的香味。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1608181831843-e7e72430f993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="img-fluid rounded" alt="介紹圖片">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <div>
                  <h5 class="card-title">緩解壓力、放鬆心情</h5>
                  <p class="card-text">
                    除了美食、美景還有什麼比香氣能更讓人放鬆呢？點上一盞搖曳的燭光，在餐桌上、沐浴時、睡覺前，幫助緩解緊繃的神經、好好享受香氣舒緩身心的每一刻吧！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row row d-flex flex-row-reverse">
            <div class="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1607646004320-94923315e7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="img-fluid rounded" alt="介紹圖片">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <div>
                  <h5 class="card-title">改善睡眠品質</h5>
                  <p class="card-text">
                    早起起不來、晚睡睡不著？想到隔天上班就壓力破表？如果你還有睡前滑手機、追劇的習慣，會讓大腦更活躍、更難入眠！這時點上香氛蠟燭，幫助安定心緒、舒緩身心，能更快進入睡眠狀態，睡得更深沉，為你送上一個香甜的美夢。
                  </p>
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
</script>

<style lang="scss" scoped>
* {
  // background-color: rgba(0, 100, 0, 0.025)
}

.home {
  margin-top: -63px;
  height: 400dvh;
}

.banner {
  width: 100%;
  height: 100dvh;
  text-align: center;
  position: relative;
  background-color: #020202;
  background-image: url(https://images.unsplash.com/photo-1608181831688-b2a476cb100c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  overflow: hidden;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 35px;
  border-radius: 5px;
  width: 50%;

  .imp-text {

    font-size: 50px;
  }

  p {
    color: black;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1px;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .banner-content-mobile {
    display: none;
  }

  .banner-link {
    text-align: right;
    margin-right: 10px;

    a {
      position: relative;
      text-decoration: none;
      color: black;
      font-size: 20px;
      font-weight: 600;
    }

    a:hover {
      animation: aChangeColor 0.5s ease-in-out forwards;
    }

    .arrow-move {
      padding-top: -5px;
      position: absolute;
      animation: arrowMove 0.5s ease-in-out infinite alternate;
    }
  }

  animation: moveIn 2s ease-in-out;
}

.intro-main {
  margin-top: 50px;

  .card {
    min-height: 250px;
    border: none;

    img {
      width: 100%;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.09);
    }

    .card-body {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .card-title {
      font-size: 2.5rem;
      font-weight: 900;
    }

    .card-text {
      color: #6b6b6b;
      font-size: 1.2rem;
      line-height: 35px;
    }
  }
}

@media(max-width: 767px) {
  .banner-content {
    width: 100%;
  }
}

@media(max-width: 375px) {
  .banner-content {
    .banner-content-pc {
      display: none;
    }

    .banner-content-mobile {
      display: block;

      p {
        margin-bottom: 0px;
      }
    }

    .about-link {
      margin-top: 10px;
    }
  }
}

@keyframes moveIn {
  0% {
    top: 65%;
    opacity: 0;
  }

  100% {
    opacity: 100;
    top: 50%
  }
}

@keyframes arrowMove {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(15%);
  }
}

@keyframes aChangeColor {
  0% {
    color: black
  }

  100% {
    color: #ff7f00;
  }
}
</style>
