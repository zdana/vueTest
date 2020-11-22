<template>
  <div id="app">
    <!-- 
      router-link是vuerouter带来的全局组件，被渲染成a标签 
      属性1. to: 指定跳转的路径
      属性2. tag:制动router-link之后渲染成什么组件，如 tag="button"
      属性3. replac:不希望切换组件的时候可以使用浏览器的后退前进按钮
      属性4. active-class:点击时调用actice这个class，该方法的缺陷是每当需要逐个给标签添加 active-class="active"，
            替代方法: 在router中加入：linkActiveClass:'active'
    -->
    <!-- <router-link to="/home" tag="button" replace="" active-class="active">首页</router-link>
    <router-link to="/about" active-class="active">关于</router-link> -->
    <router-link to="/home" tag="button" replace="">首页</router-link>
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
/* 点击按钮切换时字体变成红色 */
.active{
  color: red;
}
</style>
