import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/lineage',
    name: 'Lineage',
    component: () => import(/* webpackChunkName: "lineage" */ '../views/Lineage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
