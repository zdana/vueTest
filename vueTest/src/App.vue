<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'
export default {
  name: 'App',
  components:{
    MainTabBar
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
