import { useAppOptionStore } from '@/store/app/options'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((_to, _from, next) => {
  const appOption = useAppOptionStore()
  appOption.setAppLoading(true)
  next()
})

router.afterEach(() => {
  const appOption = useAppOptionStore()
  appOption.setAppLoading(false)
})

export default router
