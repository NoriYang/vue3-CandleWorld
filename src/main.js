import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// import bootstrap from 'bootstrap/dist/js/bootstrap.js'
// createApp(App).use(bootstrap).use(router).mount('#app')
