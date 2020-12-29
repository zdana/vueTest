<template>
  <div class="VuexIndex">
    <h2>----------------VueIndex内容----------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">增加学生</button>

    <h2>----------------VueIndex:info对象的内容是否是响应式 ----------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
 

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
    },
    addCount(count){
      // payload:负载，就是传过来的参数，可以是对象
      this.$store.commit('incrementCount',count)
    },
    addStudent(){
      const stu={id:114,name:'alen',age:26}
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      this.$store.commit('updateInfo')
    }
  }
}
</script>