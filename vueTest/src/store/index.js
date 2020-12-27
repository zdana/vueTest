import Vue from 'vue'
import Vuex from 'vuex'

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
    ]
  },
  mutations:{
    // increment是事件类型，其他的是回调函数
    // 方法,state是默认参数
    increment(state){
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
    }
  },
  // 异步操作，发送网络请求
  actions:{

  },
  getters:{
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
  modules:{

  }
})

// 3. 导出store对象
export default store