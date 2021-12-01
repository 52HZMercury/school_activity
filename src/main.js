import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// 暂时先写后端的地址，后面合并成一个文件之后，
// 用相对路径，这个就改成易班的地址

axios.defaults.baseURL = '/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
