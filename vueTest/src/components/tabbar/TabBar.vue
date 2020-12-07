<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  data(){
    return{
    }
  },
  methods:{
    
  }
}
</script>

<style>
/* 父元素设置display: flex;，子元素为flex: 1;表示均分 */
/* tabbar的高度一般都设置为49px,背景颜色为f6 */
/* 设置导航栏底部显示
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
 */
 /* 设置阴影
  box-shadow: x轴平移 y轴平移 模糊程度 rgba(100,100,100,0.1);
 */
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
}
</style>
