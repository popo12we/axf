import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入Vant-ui
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入封装好的JSONP跨域方法
import './tools'
// 引入样式初始化文件
import './assets/css/base.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
