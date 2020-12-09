<template>
  <div class="VuexIndex">
    <h2>{{this.message}}</h2>
    <h3>{{this.counter}}</h3>
    <button @click="counter ++">+</button>
    <button @click="counter --">-</button>
    <!-- 使用父子组件传值共享数据 -->
    <!-- <hello-vuex :counter="counter"></hello-vuex> -->
  </div>
</template>
<script>
import HelloVuex from "components/HelloVuex";
export default {
  name: "VuexIndex",
  components: {
    HelloVuex
  },
  data(){
    return{
      message:'我是 vueindex 页面',
      counter:0
    }
  }
}
</script>