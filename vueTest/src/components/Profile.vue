<template>
  <div>
    <h2>我是档案界面</h2>
    <!--$route表示目前处于活跃对象 
        router是整个new的对象 -->
    <h2>{{this.$route.params.name}}</h2>
    <button @click="btnClick">
      按钮
    </button>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
    }
  },
  methods:{
    btnClick(){
      console.log(this.$router);
      // this.$route:当前处于活跃的路由
      console.log(this.$route) 
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
