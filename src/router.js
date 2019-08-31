import Vue from 'vue'
import Router from 'vue-router'
const List = () => import(/* webpackChunkName: 'index' */ './views/List.vue')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/list',
    name: 'list',
    component: List
  }]
})
