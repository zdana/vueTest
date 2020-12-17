<template>
  <div class="VuexIndex">
    <h2>----------------VueIndex内容----------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
    <!-- 使用父子组件传值共享数据 -->
    <h2>----------------HellowIndex内容----------------</h2>
    <hello-vuex/>
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
    }
  },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtration(){
      this.$store.commit('decrement')
    }
  }
}
</script>