<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    link:String,
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  data() {
    return {
      // isActive:true
    };
  },
  computed:{
    // 单击时改变图片
    isActive(){
      // 判断link有没有当前的这个link
      return this.$route.path.indexOf(this.link)!==-1
    },
    // 动态改变字体颜色
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.link)
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
