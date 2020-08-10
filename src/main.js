import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'normalize.css'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { getToken } from './utils/auth.js'

import Videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
Vue.prototype.$video = Videojs

Vue.use(vueSwiper)
Vue.config.productionTip = false

// 设置基础URL
if (process.env.EVN_CONFIG === 'prod' && process.env.NODE_ENV === 'production') {
  // 正式环境
  console.log('正式环境')
  axios.defaults.baseURL = 'http://gaosaiedu.com/api'
} else {
  // 开发环境
  console.log('开发环境')
  axios.defaults.baseURL = '/api'
}
// 设置请求超时时间
axios.defaults.timeout = 5000
// 设置默认请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求前添加凭证
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['Authorization'] = 'Bearer ' + getToken()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
