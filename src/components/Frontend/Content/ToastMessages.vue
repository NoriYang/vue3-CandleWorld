<template>
  <div class="toast-container toast-main">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import Toast from '@/components/Frontend/Content/Toast.vue'
export default {
  components: { Toast },
  inject: ['emitter'],
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, actionText, content } = message
      this.messages.push({ style, title, actionText, content })
    })
  }
}
</script>

<style lang="scss" scoped>
.toast-main {
  position: fixed;
  top: 80px;
  right: 0;
}

</style>
