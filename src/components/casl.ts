import { abilitiesPlugin, Can } from '@casl/vue'
import type { App } from 'vue'
import { ability } from '../config/AppAbility'

export const useCasl = (app: App) => {
  app.use(abilitiesPlugin, ability, { useGlobalProperties: true })
  app.component(Can.name, Can)
  app.provide('$ability', app.config.globalProperties.$ability)
}
