import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const state={
  counter:1000,
  students:[
    {id:110,name:'amy',age:19},
    {id:111,name:'john',age:29},
    {id:112,name:'eva',age:18},
    {id:113,name:'kobe',age:26}
  ],
  info:{
    name:'kobe',
    age:40,
    height:1.98
  }
}
const store=new Vuex.Store({
  // 状态，其他页面可以共享状态
  state:state,
  mutations:mutations,
  // 异步操作，发送网络请求
  actions:actions,
  getters:getters,

  /*以上代码es6写法为：
    state,mutations,actions,getters
  */

  // 单独抽取模块
  modules:{
    a:moduleA
  }
})

// 3. 导出store对象
export default store

// 对象解构赋值
const obj={
  name:'why',
  height:1.88,
  age:18
}
const {name,age,height}=obj
console.log(name,age,height)