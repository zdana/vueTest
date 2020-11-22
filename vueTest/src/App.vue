<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- router-link是vuerouter带来的全局组件，被渲染成a标签 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--  <router-view/>表示占位，根据当前路径动态渲染不同组件-->
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
