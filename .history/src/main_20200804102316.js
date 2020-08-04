/*
 * @Author: Tmier
 * @Date: 2020-08-04 09:57:16
 * @LastEditTime: 2020-08-04 10:23:15
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from '@/utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$axios = service
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
