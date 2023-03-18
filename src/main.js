import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

import { currency } from '@/methods/filters'

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency
}
app.component('Loading', Loading)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

// import bootstrap from 'bootstrap/dist/js/bootstrap.js'
// createApp(App).use(bootstrap).use(router).mount('#app')
