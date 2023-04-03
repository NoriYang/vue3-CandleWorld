<template>
  <div class="row content-main">
    <div class="col-12">
      <div class="text-content">
        <div class="title">CANDLE WORLD</div>
        <div class="text">
          <p>使用最天然的原材料</p>
          <p>任何地點、無時無刻</p>
          <p>讓您都能享受大自然的擁抱</p>
          <p>因近期疫情導致人心惶惶</p>
          <p>希望我們的產品能使你的心情放鬆</p>
          <p>帶給你美好的一天</p>
        </div>
      </div>
    </div>

    <div class="col-12 row about-card-wrap">
      <div class="col-12 col-md-4">
        <div class="about-card">
          <div class="about-card-icon">
            <i class="bi bi-calendar3"></i>
          </div>
          <div class="about-card-title">服務時段</div>
          <div class="about-card-text">
            <span>周一至周六</span>
            <span>早上8:30 - 晚上8:00</span>
            <span>0987654321</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="about-card">
          <div class="about-card-icon">
            <i class="bi bi-exclamation-triangle-fill"></i>
          </div>
          <div class="about-card-title">注意事項</div>
          <div class="about-card-text">
            <span>我們不會主動請你提供資料</span>
            <span>若接到可疑簡訊、電話</span>
            <span>請撥打165反詐騙</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="about-card">
          <div class="about-card-icon">
            <i class="bi bi-box-seam-fill"></i>
          </div>
          <div class="about-card-title">出貨時間</div>
          <div class="about-card-text">
            <span>下訂單後的3~5天</span>
            <span>國定假日延後</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="location-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.7581802931063!2d121.56423589919741!3d25.032963599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe10238cb87%3A0x8c0ca929f18c0d23!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1680172152264!5m2!1szh-TW!2stw"
          height="400" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss">
.content-main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 40px 0px;

  .title {
    font-weight: 900;
    font-size: 3rem;
    margin-top: 5px;
    margin-bottom: 20px;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
    border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  }

  .text {
    font-size: 1.5rem;
    letter-spacing: 5px;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }
}

.about-card-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

}

.about-card {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  min-height: 350px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  .about-card-icon {
    font-size: 5rem;
  }

  .about-card-title {
    font-size: 2rem;
  }

  .about-card-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
      margin-top: 10px;
      letter-spacing: 3px;
      text-align: center;
    }
  }
}

.location-wrap {
  margin-top: 20px;

  iframe {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .text-content {
    .title {
      font-weight: 900;
      font-size: 2.4rem;
    }

    .text {
      font-size: 1.2rem
    }
  }

  .about-card {
    min-height: 300px;

    .about-card-icon {
      font-size: 4rem;
    }

    .about-card-title {
      font-size: 2rem;
    }

    .about-card-text {
      span {
        margin-top: 10px;
        letter-spacing: 3px;
        font-size: 1rem;
      }
    }
  }

}

@media (max-width: 320px) {
  .text-content {
    .title {
      font-weight: 900;
      font-size: 2rem;
    }

    .text {
      font-size: 14px;
    }
  }

  .about-card {
    min-height: 300px;

    .about-card-icon {
      font-size: 4rem;
    }

    .about-card-title {
      font-size: 2rem;
    }

    .about-card-text {
      span {
        margin-top: 10px;
        letter-spacing: 3px;
        font-size: 1.2rem;
      }
    }
  }
}</style>
