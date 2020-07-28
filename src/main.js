import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(vueSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
