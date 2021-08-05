import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import './service/axios.demo.ts'
import 'element-plus/lib/theme-chalk/index.css'
import xxRequest from './service/index'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

xxRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

console.log(process.env.VUE_APP_BASE_URL)
