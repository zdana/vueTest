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
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asycUpdateName">异步修改名字</button>
 
     <h2>----------------VueIndex:modules内容演示 ----------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>

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
import {INCREMENT} from '../store/mutations-types'
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
      this.$store.commit(INCREMENT)
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
      // // 1.只传内容
      // this.$store.commit('updateInfo')
      // // 2.携带参数传值，函数相当于一个 参数
      // this.$store.dispatch('aUpdateInfo',()=>{
      //   console.log('里面已经完成了')
      // })
      // // 3-1. 传函数的同时传参数,但是这种做法不够优雅
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success:()=>{
      //     console.log('里面已经完成了')
      //   }
      // })
      // 3-2. 传函数的同时传参数,比较优雅的写法
      this.$store.dispatch('aUpdateInfo','我是携带的信息')
      .then(res=>{
        console.log('里面已经完成了');
        console.log(res)
      })
    },
    updateName(){
      this.$store.commit('updateName','summer')
    },
    asycUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>