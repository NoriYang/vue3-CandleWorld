import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

// import bootstrap from 'bootstrap/dist/js/bootstrap.js'
// createApp(App).use(bootstrap).use(router).mount('#app')
