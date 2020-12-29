export default{
  state:{
    name:'eva'
  },
  mutations:{
    updateName(state,payload){
      state.name=payload
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','jane')
      },1000)
    }
  },
  getters:{
    fullName(state){
      return state.name+'111'
    },
    fullName2(state,getters){
      return getters.fullName+'222'
    },
    // 调用根里面的state
    fullName3(state,getters,rootState){
      return getters.fullName2+rootState.counter
    }
  }
}