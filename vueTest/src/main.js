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

// axios两种写法
// axios({
//   // url:'http://httpbin.org/ip'
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'//默认是get请求
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })

//axios并发请求
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'sell',
    page:4
  }
// })]).then(results=>{
//   console.log(results)//返回值是一个数组
// })
})]).then(axios.spread((res1,res2)=>{
  console.log(res1,res2)//将两个接口获取的数据自动分割
}))

// 补充：数组解构与对象解构

// 1. 对象解构
const obj={
  name:'kobe',
  age:30
}
const {name,age}=obj;

// 2. 数组解构
const names=['kobe','why','james']
const[name1,name2,name3]=names;
 console.log(name1)