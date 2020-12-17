import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store=new Vuex.Store({
  // 状态，其他页面可以共享状态
  state:{
    counter:1000
  },
  mutations:{
    // 方法,state是默认参数
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  // 异步操作，发送网络请求
  actions:{

  },
  getters:{

  },
  modules:{

  }
})

// 3. 导出store对象
export default store