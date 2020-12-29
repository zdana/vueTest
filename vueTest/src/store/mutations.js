import{
  INCREMENT
}from './mutations-types'

export default{
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
}