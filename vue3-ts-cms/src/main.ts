import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// import './service/axios.demo.ts'
import 'element-plus/lib/theme-chalk/index.css'
import hyRequest from './service/index'
import './assets/css/index.less'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      config.headers['token'] = '123'
      return config
    },
    responseInterceptor: (res) => {
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.returnCode)
  })
