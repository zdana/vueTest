import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.$store=store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 两种写法
axios({
  // url:'http://httpbin.org/ip'
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get'//默认是get请求
}).then(res=>{
  console.log(res)
})

axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'sell',
    page:1
  }
}).then(res=>{
  console.log(res)
})