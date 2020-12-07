<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户诶</p>
    <!--$route表示目前处于活跃对象 
        router是整个new的对象 -->
    <h2>{{this.$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
