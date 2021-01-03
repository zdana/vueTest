import axios from 'axios'

// 方法3:axios本身就是peomise，故可省略promise包装
export function request(config) {
  
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })
    return instance(config)
}

// // 方法2:promise的方式，推荐
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(baseConfig)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// // 方法3：回调函数的方式
// export function request(config,success,faiture){
//   const instance=axios.create({
//     baseURL:'http://152.136.185.210:7878/api/m5',
//     timeout:5000
//   })
//   // 发送真正的网络请求
//   instance(config)
//     .then(res=>{
//       // console.log(res);
//       success(res)
//     })
//     .catch(err=>{
//       // console.log(err);
//       faiture(err)
//     })
// }

