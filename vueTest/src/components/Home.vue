<template>
  <div class="hello">
    <h2>我是首页</h2>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      path:'/home/news'
    }
  },
  created(){
    /* 修改浏览器页签名
      但需要逐个去写，比较麻烦，
      router->index.js中提供路由守卫方法
    */
    document.title='首页';
    console.log('home created')
  },
  destroyed(){
    console.log('home destory')
  },
  /* activated、deactivated只有该组件保持了状态适用keep-alive才有效*/
  // 页面处于活跃状态
  activated(){
    // 会有一个问题，比如切换前点的是首页里的消息，但当电机其他页面后切换回来则首页会变成新闻
    // console.log('home activated')
    this.$router.push(this.path)
  },
  // 页面处于不活跃状态
  deactivated(){
    // console.log('home deactivated')
  },
  beforeRouteLeave(to,from,next){
    console.log(this.path)
    this.path=this.$route.path
    next();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
