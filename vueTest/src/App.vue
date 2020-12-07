<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item link="/home" activeColor="pink">
        <img slot="item-icon" src="../static/img/TabBar/zhuye 2.svg" alt />
        <img slot="item-icon-active" src="../static/img/TabBar/zhuye.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="red">
        <img slot="item-icon" src="../static/img/TabBar/fenlei 2.svg" alt />
        <img slot="item-icon-active" src="../static/img/TabBar/fenlei.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" activeColor="yellow">
        <img slot="item-icon" src="../static/img/TabBar/gouwuche 2.svg" alt />
        <img slot="item-icon-active" src="../static/img/TabBar/gouwuche.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="yellowGreen">
        <img slot="item-icon" src="../static/img/TabBar/wode 2.svg" alt />
        <img slot="item-icon-active" src="../static/img/TabBar/wode.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  },
  data(){
    return{
    }
  },
  methods:{
    
  }
}
</script>

<style>
/* 动态引用css样式，在style中引用需要加@ */
@import url('../static/css/style.css');
</style>
