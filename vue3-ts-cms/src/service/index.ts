import XXRequest from './request/index'

const xxRequest = new XXRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

export default xxRequest
