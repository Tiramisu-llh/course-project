import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'// element-ui的css

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 引入axios
import axios from 'axios'

/* 设置axios发送请求的baseURL，
axios所有请求都会在前面添加的url，
通常和前面反向代理设置的匹配路径一致 */
axios.defaults.baseURL = '/api'

Vue.use(ElementUI) // 使用elementUI

Vue.config.productionTip = false

/* 将axios挂载到vue原型上，
各个组件可以直接通过vue实例访问。 */
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
