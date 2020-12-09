<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home" activeColor="pink">
        <img slot="item-icon" src="~static/img/TabBar/zhuye 2.svg" alt />
        <img slot="item-icon-active" src="~static/img/TabBar/zhuye.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="red">
        <img slot="item-icon" src="~static/img/TabBar/fenlei 2.svg" alt />
        <img slot="item-icon-active" src="~static/img/TabBar/fenlei.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" activeColor="yellow">
        <img slot="item-icon" src="~static/img/TabBar/gouwuche 2.svg" alt />
        <img slot="item-icon-active" src="~static/img/TabBar/gouwuche.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="yellowGreen">
        <img slot="item-icon" src="~static/img/TabBar/wode 2.svg" alt />
        <img slot="item-icon-active" src="~static/img/TabBar/wode.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'

export default{
  name:'MainTabBar',
    components:{
    TabBar,
    TabBarItem
  },
  mounted(){
    this.promiseTest();
  },
  methods:{
    promiseTest(){
      // //1. promise的基本使用
      // new Promise((resolve,reject)=>{
      //   setTimeout(()=>{
      //     // 成功的时候调用
      //     resolve('hello,world')
      //     // 失败的时候调用
      //     reject('error')
      //   })
      // }).then((data)=>{
      //   console.log(data)
      // }).catch((err)=>{
      //   console.log(err)
      // })

      // // 2.promise的另一种写法，常用
      // new Promise((resolve,reject)=>{
      //   setTimeout(()=>{
      //     // 成功的时候调用
      //     resolve('hello,world')
      //     // 失败的时候调用
      //     reject('error')
      //   })
      // }).then((data)=>{
      //   console.log(data)
      // },err=>{
      //   console.log(data)
      // })

      // 3.promise的中return简写
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('aaa')
        },1000)
      }).then((res)=>{
        console.log(res,'第一层处理的代码')
        // 对结果进行第一次处理
        // return new Promise((resolve,reject)=>{
        //   reject('err')
        // })
        // 上三行可以简写为
        return Promise.reject('error message')
      }).then((res)=>{
        console.log(res,'第二层处理的代码')
        // return new Promise(resolve=>{
        //   resolve(res+'222')
        // }) 
        // 4.省略promise.resolve
        return res+'222'
      }).then((res)=>{
        console.log(res,'第三层处理的代码')
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>