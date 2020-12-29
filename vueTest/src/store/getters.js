export default{
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
}