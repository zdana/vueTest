import Vue from 'vue'
import Vuex from 'vuex'

import{
  INCREMENT
}from './mutations-types'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store=new Vuex.Store({
  // 状态，其他页面可以共享状态
  state:{
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
  },
  mutations:{
    //mutations中不能进行异步操作
    // increment是事件类型，其他的是回调函数
    // 方法,state是默认参数
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,count){
      state.counter+=count
    },
    addStudent(state,stu){
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name='codewhy';
      // // 响应式新增数据
      // state.info['address']='洛杉矶';
      // Vue.set(state.info,'address2','纽约')
      // // 响应式删除属性
      // delete state.info.age
      // Vue.delete(state.info,'age')
    }
  },
  // 异步操作，发送网络请求
  actions:{
    // 默认参数是context
    aUpdateInfo(context,payload){
      // 3-1方法
      // setTimeout(()=>{
      //   context.commit('updateInfo')
      //   // console.log(payload.message)
      //   // payload.success()
      //   // console.log(payload)
      // },1000)
      // 3-2方法
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updateInfo')
          console.log(payload)
          resolve('111')
        })
      })
    }
  },
  getters:{
    // 默认参数是state
    powerCounter(state){
      return state.counter*state.counter
    },
    more20stu(state){
      return state.students.filter(s=>s.age>20)
    },
    // 第二个参数无论怎么改都是getters
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgestu(state){
      // 函数内部接收传过来的参数
      return function(age){
        return state.students.filter(s=>s.age>age)
      }
    }
  },
  // 单独抽取东西
  modules:{

  }
})

// 3. 导出store对象
export default store