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
          <router-link class="banner-link" to="dashboard/products">
            前往購買<i class="bi bi-chevron-right arrow-move"></i>
          </router-link>
        </div>
      </div>
    </div>
    <Inrto></Inrto>
  </div>
</template>

<script>

import Inrto from '@/components/Home/Intro.vue'
export default {
  components: { Inrto }
}
</script>

<style lang="scss" scoped>
* {
  // background-color: rgba(0, 100, 0, 0.025)
}

.home {
  margin-top: -63px;
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
      padding-top: -3px;
      position: absolute;
      animation: arrowMove 0.5s ease-in-out infinite alternate;
    }
  }

  animation: moveIn 2s ease-in-out;
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
