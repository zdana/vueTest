import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

/*路由懒加载
  会对懒加载的js文件分开打包，因此该文件只有当路由被访问时才会加载
*/
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

Vue.use(Router)

export default new Router({
  mode:'history',//将hash路径改为history，即取代哦浏览器url中的#变成html模式
  linkActiveClass:'active',
  routes: [
    {
      path: '',
      redirect:'/home'//redirect,重定向，即当访问‘’时定向到home中
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'news',
          name: 'news',
          component: HomeNews,
        },
        {
          path: 'message',
          name: 'message',
          component: HomeMessage,
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ]
})
