<template>
  <div id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel">
    <div class="hint-wrap">
      <h2 class="hint-icon">
        <i class="bi bi-caret-down-fill"></i>
      </h2>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="require('@/assets/img/Index/Carousel_5.jpg')"
          class="d-block"
          alt="RecordBanner" />
        <div class="carousel-caption first d-md-block">
          <h2 class="carousel-text">依照自己的喜好<br />創造你最喜歡的居家環境氛圍</h2>
          <router-link to="/productslist/all"
            class="btn btn-outline-light rounded-pill px-5">前往購買</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="require('@/assets/img/Index/Carousel_2.jpg')"
          class="d-block"
          alt="RecordBanner" />
        <div class="carousel-caption second d-md-block dark">
          <h2 class="carousel-text small-text">跟著最自然的味道走<br />帶領你進入大自然</h2>
          <router-link to="/productslist/all"
            class="btn btn-outline-light rounded-pill px-5">前往購買</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="require('@/assets/img/Index/Carousel_6.jpg')"
          class="d-block"
          alt="RecordBanner" />
        <div class="carousel-caption third d-md-block dark">
          <h2 class="carousel-text small-text">無時無刻、任何空間<br />只要閉上眼<br />彷彿身在大自然</h2>
          <router-link to="/productslist/all"
            class="btn btn-outline-light rounded-pill px-5">前往購買</router-link>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon"
        aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next">
      <span class="carousel-control-next-icon"
        aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</template>

<style lang="scss" scoped>
.carousel-item img {
  height: 100dvh;
  background-size: cover;
  width: 100%;
  object-fit: cover;
}

#carouselExampleInterval{
  position: relative;
}
.hint-wrap {
  position: absolute;
  left: 50%;
  bottom: 1%;
  z-index: 1;
  .hint-icon {
    font-size: 2.5rem;
    color: white;
    width: 100%;
    position: relative;
    i {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -80%);
      animation: arrowShake 1s ease-in-out infinite;
    }
  }
}

@keyframes arrowShake {
  0% {
    transform: translateY(-80%);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(-80%);
  }
}

.carousel-caption {
  padding: 0;
  margin-bottom: 50px;

  .carousel-text {
    letter-spacing: 5px;
    text-shadow: 0px 0px 10px black;
  }

  a {
    margin-top: 10px;
    font-size: 1.2rem;
    border: 3px solid #fff;
    font-weight: 900;
  }
}

.carousel-caption.first {
  text-align: left;
}

.carousel-caption.second {
  text-align: right;
}

.carousel-caption.third {
  text-align: right;
}

@media(max-width: 375px) {
  .carousel-text.small-text {
    font-size: 1.4rem;
  }
}

@media(max-width: 320px) {
  .carousel-text.small-text {
    font-size: 1.2rem;
  }
}
</style>
