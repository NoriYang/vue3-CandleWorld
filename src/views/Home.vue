<template>
  <div class="home">
    <div class="about">
      <div class="about-content">
        <p class="content-pc">居家空間也能擁有草木花香</p>
        <div class="content-mobile">
          <p>居家空間</p>
          <p>也能擁有草木花香</p>
        </div>
        <div class="about-link">
          <router-link class="about-link" to="/products">
            前往購買<i class="bi bi-chevron-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.home {
  margin-top: -63px;
}

.about {
  width: 100%;
  height: 100dvh;
  background-image: url(https://images.unsplash.com/photo-1602607203588-d6d0eda790e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
}

.about-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 35px;
  border-radius: 5px;

  p {
    color: black;
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 1px;
  }

  .content-mobile {
    display: none;
  }

  .about-link {
    text-align: right;

    a {
      text-decoration: none;
      color: black;
      font-size: 20px;
      font-weight: 600;
    }
  }

  animation: moveIn 2s ease-in-out;
}

@media(max-width: 767px) {
  .about-content {
    width: 100%;
  }
}

@media(max-width: 375px) {
  .about-content {
    .content-pc {
      display: none;
    }

    .content-mobile {
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
</style>
