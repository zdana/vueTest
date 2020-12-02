import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
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
const Profile = () => import('../components/Profile.vue')

Vue.use(Router)

const routes=[
  {
    path: '',
    redirect:'/home'//redirect,重定向，即当访问‘’时定向到home中
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    children:[
      {
        path: 'news',
        name: '新闻',
        component: HomeNews,
      },
      {
        path: 'message',
        name: '消息',
        component: HomeMessage,
      }
    ]
  },
  {
    path: '/about',
    name: '关于',
    component: About,
    beforeEach:(to,from,next)=>{
      
    }
  },
  {
    path: '/user/:userId',
    name: '我的',
    component: User
  },
  {
    path: '/profile/',
    name: '档案',
    component: Profile
  }
]
const router=new VueRouter({
  routes,
  mode:'history',//将hash路径改为history，即取代哦浏览器url中的#变成html模式
  linkActiveClass:'active',
})
// 路由守卫
// 前置守卫(guard)
router.beforeEach(function(to,from,next){
  // 从from跳转到to
  document.title=to.name
  next()
})
// 后置守卫(hook)
// 不需要调用next()函数
router.afterEach((to,from)=>{

})
export default router
