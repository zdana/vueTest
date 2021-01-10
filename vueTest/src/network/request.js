import axios from 'axios'

// 方法3:axios本身就是peomise，故可省略promise包装
export function request(config) {
    // 1. 创建axios实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })
    // 2. axios拦截器
    //2.1 请求拦截的作用
    instance.interceptors.request.use(config=>{
      console.log(config)
      // 1.比如config中的一些信息不符合服务器的要求
      // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      // 3.某些网络请求（如登陆）必须携带一些特殊星系
      return config
    },err=>{
      console.log(err)
    });
    //2.2 响应拦截
    instance.interceptors.response.use(res=>{
      // console.log(res)
      // return res//注释该行，表示将结果拦截掉则在main中显示undefined
      // 因此正确操作为，先拦截掉，处理完之后在返回出去
      return res.data
    },err=>{
      console.log(err)
    });
    // 3. 发送真正的网络请求
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

