import Vue from 'vue'
import VueRouter, { RouteConfig as VueRouteConfig } from 'vue-router'
import Feed from '../views/feed/Feed.vue'

Vue.use(VueRouter)

type RouteConfig = VueRouteConfig & { sidebar?: boolean }

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Feed',
    sidebar: true,
    component: Feed,
  },
  {
    path: '/categories',
    name: 'Categories',
    sidebar: true,
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    sidebar: true,
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/r/:id',
    name: 'Video Room',
    component: () => import('../views/video-room/VideoRoom.vue'),
  },
  {
    path: '/settings',
    name: 'Application Setting',
    component: () => import('../views/settings/Settings.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export function hasSideBar(pathname: string): boolean {
  const routesWithoutSidebar = ["/r"];

  const baseRoutePath = pathname.split("/")[1];
  return !routesWithoutSidebar.includes(`/${baseRoutePath}`);
}

export default router
