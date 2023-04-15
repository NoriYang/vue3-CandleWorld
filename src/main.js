import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
// ----- bootstrap -----
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// ----- Loading -----
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import HomeLoading from '@/components/Content/HomeLoading.vue'
// --------引入 VeeValidate 元件跟功能--------
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// ----------------------------------------

import { currency, date, localeDateStr, localeTimeStr } from '@/methods/filters'
import $httpMessageState from '@/methods/pushMessageState'

const app = createApp(App)

//  -------- VeeValidate --------
// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
//  --------------------------

app.config.globalProperties.$filters = {
  currency,
  date,
  localeDateStr,
  localeTimeStr
}
app.config.globalProperties.$httpMessageState = $httpMessageState
app.component('Loading', Loading)
app.component('HomeLoading', HomeLoading)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
