import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode:'history',//将hash路径改为history，即取代哦浏览器url中的#变成html模式
  routes: [
    {
      path: '',
      redirect:'/home'//redirect,重定向，即当访问‘’时定向到home中
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
