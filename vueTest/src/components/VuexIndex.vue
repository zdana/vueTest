<template>
  <div class="VuexIndex">
    <h2>----------------VueIndex内容----------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>

    <h2>----------------VueIndex:getter相关信息 ----------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(18)}}</h2>
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
  computed:{

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