<template>
  <div id='loading-page' v-if="isLoading">
    <div id='loading'>
      <div id='loading-text'>
        <div class='text'>L</div>
        <div class='text'>O</div>
        <div class='text'>A</div>
        <div class='text'>D</div>
        <div class='text'>I</div>
        <div class='text'>N</div>
        <div class='text'>G</div>
        <div class='text'>.</div>
        <div class='text'>.</div>
        <div class='text'>.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      progressBar: {
        width: '0%',
        background: 'black'
      }
    }
  },
  methods: {
    startProgressBar () {
      let num = 0
      const timer = setInterval(() => {
        num += 1
        this.progressBar.width = num + '%'
        if (num > 100) clearInterval(timer)
      }, this.progressBarSpeed)
    }
  },
  mounted () {
    this.progressBar.bacground = this.progressBarColor
    this.startProgressBar()
  }
}
</script>

<style lang="scss" scoped>
#loading-page {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

#loading-text {
  font-family: sans-serif, Comic Sans MS;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#loading-text .text {
  font-size: 2rem;
  animation: loading .9s infinite alternate;
}

#loading-text .text:nth-child(2) {
  animation-delay: .1s;
}

#loading-text .text:nth-child(3) {
  animation-delay: .2s;
}

#loading-text .text:nth-child(4) {
  animation-delay: .3s;
}

#loading-text .text:nth-child(5) {
  animation-delay: .4s;
}

#loading-text .text:nth-child(6) {
  animation-delay: .5s;
}

#loading-text .text:nth-child(7) {
  animation-delay: .6s;
}

#loading-text .text:nth-child(8) {
  animation-delay: .7s;
}

#loading-text .text:nth-child(9) {
  animation-delay: .8s;
}

#loading-text .text:nth-child(10) {
  animation-delay: .9s;
}

#loading-progress {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#loading-progress .progress {
  height: 10px;
  border-radius: 5px;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.1);
  width: 80%;
  position: relative;
}

#loading-progress .progress .bar {
  position: absolute;
  width: 0%;
  height: 100%;
  border-radius: 5px;
  background-color: black;
}

@keyframes loading {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-30px);
  }
}

@keyframes progress {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
