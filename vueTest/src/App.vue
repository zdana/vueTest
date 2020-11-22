<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- router-link是vuerouter带来的全局组件 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--  <router-view/>表示占位，显示对应vue页面的内容 -->
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
