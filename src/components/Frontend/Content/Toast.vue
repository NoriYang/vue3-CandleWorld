<template>
  <div class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast">
    <div class="toast-header"
      :class="`bg-${msg.style}`">
      <span class="toast-icon" v-if="msg.style == 'success'">
        <i class="bi bi-check-circle-fill"></i>
      </span>
      <span class="toast-icon" v-if="msg.style == 'dnager'">
        <i class="bi bi-exclamation-octagon-fill"></i>
      </span>
      <div class="text-wrap">
        <strong>{{ msg.title }}</strong>
        <p>{{ msg.actionText }}</p>
      </div>
      <button type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"></button>
    </div>
    <div class="toast-body"
      v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
  name: 'Toast',
  props: [
    'msg'
  ],
  mounted () {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 3000
    })
    toast.show()
  }
}
</script>
<style lang="scss" scoped>
* {
  color: #eee;
}

.toast {
  font-size: 18px;
  background-color: rgba(0,0,0,0);
}
.toast-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toast-icon {
  padding-right: 10px;
}
.text-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-top: 15px
}
.toast-body {

}
</style>
