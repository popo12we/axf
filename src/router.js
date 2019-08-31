import Vue from 'vue'
import Router from 'vue-router'
// 组件按需加载
const Home = () => import(/* webpackChunkName: 'home' */ './views/Home.vue')
const List = () => import(/* webpackChunkName: 'home' */ './views/List.vue')
const Cart = () => import(/* webpackChunkName: 'home' */ './views/Cart.vue')
console.log(List)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 默认重定向到home/list
      redirect: '/home/list'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/home/list', name: 'list', component: List },
        { path: '/home/cart', name: 'cart', component: Cart }
      ]
    }
  ]
})
