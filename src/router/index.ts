import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Feed from '../views/feed/Feed.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Feed',
    component: Feed,
  },
  {
    path: '/categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/r/:id',
    name: 'Video Room',
    component: () => import('../views/video-room/VideoRoom.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
