import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '~/views/Home'
import About from '~/views/About'
import TodoApp from '~/views/TodoApp'

Vue.use(VueRouter)

const routes = [
  //config
  {
    name: 'index',
    path: '/', // 사이트의 루트페이지 
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'todos',
    path: '/todos',
    redirect: '/todos/all', // todos로 접근하면 todos/all로 접근해라 !
    component: TodoApp,
    // 파라미터 작성
    children: [{
      name: 'todos-filter',
      path: ':id'
    }]
  }
]

export default new VueRouter({
  // mode: 'history',
  routes
})