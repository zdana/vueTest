export default{
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
}