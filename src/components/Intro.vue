<template>
  <div class="intro-main">
    <div class="intro-title">
      <p>香氛蠟燭的優點</p>
    </div>
    <div class="container">
      <div class="card mb-5" v-for="card of cardArray" :key="card.title">
        <div class="row" :class="[card.isReverse ? reverse : '']">
          <div class="col-md-6">
            <img :src="card.img" class="img-fluid rounded" alt="香氛蠟燭優點圖片">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <div>
                <h5 class="card-title">
                  {{ card.title }}
                </h5>
                <p class="card-text">
                  {{ card.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cardArray: [
        {
          title: '清除空間異味',
          text: '你有使用空氣清新劑的習慣嗎？如果含有有害的化學添加成分，吸入到人體實在不妥，選擇點上香氛蠟燭，讓香氣飄散浴室、廁間，就可以有效清除異味，跟尷尬味道說掰掰！',
          img: 'https://images.unsplash.com/photo-1602607203475-c5e99918dfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          isReverse: false
        },
        {
          title: '添加空間香氣',
          text: '對氣味敏感的人真心推！天然蠟燭的精油透過燃燒會揮發至空氣中，讓整個空間氛圍洋溢著淡淡香氣，不刺鼻不致暈，而且柔和持久，經常使用更會讓家具、身體都沾染迷人好聞的香味。',
          img: 'https://images.unsplash.com/photo-1608085021802-e886468f5fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          isReverse: true
        },
        {
          title: '緩解壓力、放鬆心情',
          text: '除了美食、美景還有什麼比香氣能更讓人放鬆呢？點上一盞搖曳的燭光，在餐桌上、沐浴時、睡覺前，幫助緩解緊繃的神經、好好享受香氣舒緩身心的每一刻吧！',
          img: 'https://images.unsplash.com/photo-1608181831843-e7e72430f993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          isReverse: false
        },
        {
          title: '改善睡眠品質',
          text: '早起起不來、晚睡睡不著？想到隔天上班就壓力破表？如果你還有睡前滑手機、追劇的習慣，會讓大腦更活躍、更難入眠！這時點上香氛蠟燭，幫助安定心緒、舒緩身心，能更快進入睡眠狀態，睡得更深沉，為你送上一個香甜的美夢。',
          img: 'https://images.unsplash.com/photo-1607646004320-94923315e7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          isReverse: true
        }
      ],
      reverse: 'd-flex flex-row-reverse'
    }
  }
}
</script>
<style lang="scss" scoped>
.intro-main {
  margin-top: 50px;

  .intro-title {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 10px;

    p {
      font-size: 2.5rem;
      font-weight: 900;
      display: inline-block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

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
      font-size: 2rem;
      font-weight: 900;
      text-align: center;
    }

    .card-text {
      color: #6b6b6b;
      font-size: 1.2rem;
      line-height: 35px;
    }
  }
}
</style>
