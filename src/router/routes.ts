import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/modules/home/Home.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export default routes
