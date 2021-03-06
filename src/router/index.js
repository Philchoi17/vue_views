import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestReq from '../views/TestReq.vue'
// import Review2 from '../views/Review2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestReq
  },
  {
    path: '/review2',
    name: 'review2',
    component: () => import('../views/Review2.vue')
  }, 
  {
    path: '/styling',
    name: 'styling',
    component: () => import('../views/StylingPrac')
  },
  {
    path: '/starwars',
    name: 'starwars',
    component: () => import('../views/StarWars')
  },
  {
    path: '/review3',
    name: 'review3',
    component: () => import('../views/Review3')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
