import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
// 导入通用样式
import './assets/styles/common.css'
import './assets/styles/map.css'

// 导入echarts
import echarts from './echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
