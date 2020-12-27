<template>
  <div class="HelloVuex">
    <!-- <h3>{{this.counter}}</h3> -->
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>
<script>
export default {
  name: "HelloVuex",
  props:{
    counter:Number
  },
  components: {
  },
  data(){
    return{
      message:'我是hellowvuex页面'
    }
  }
}
</script>