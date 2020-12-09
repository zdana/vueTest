<template>
  <div class="HelloVuex">
    <h2>{{this.message}}</h2>
    <h3>{{this.counter}}</h3>
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