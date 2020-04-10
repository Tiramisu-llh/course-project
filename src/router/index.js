import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '@/views/About'
import Main from '@/views/main/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: About
  },
  {
    path: '/index',
    component: Main
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('@/views/main/join.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/main/create.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('@/views/login/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
