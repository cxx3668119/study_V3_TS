import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// import './service/axios.demo.ts'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/index.less'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
