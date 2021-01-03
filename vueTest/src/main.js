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

//1. axios两种写法
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
// // 3.使用全局axios和对应配置进行网络请求,业务复杂时不建议使用
// axios.defaults.baseURL='http://152.136.185.210:7878/api/m5',
// axios.defaults.timeout=5000

// //2.axios并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:4
//   }
// // })]).then(results=>{
// //   console.log(results)//返回值是一个数组
// // })
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1,res2)//将两个接口获取的数据自动分割
// }))

// axios({
//   url:'/category'
// })

// // 补充：数组解构与对象解构
// // 1). 对象解构
// const obj={
//   name:'kobe',
//   age:30
// }
// const {name,age}=obj;
// // 2). 数组解构
// const names=['kobe','why','james']
// const[name1,name2,name3]=names;
// console.log(name1)

//4. 创建对应的axios实例
const instance1 =axios.create({
  baseURL:'http://152.136.185.210:7878/api/m5',
  timeout:5000
})
instance1({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)
})
instance1({
  url:'/home/data',
    params:{
    type:'pop',
    page:1
  }
}).then(res=>{
  console.log(res)
})