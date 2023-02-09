import type { App } from 'vue'
import Header from './app/Header.vue'

export default {
  install(app: App) {
    app.component('AppHeader', Header)
  },
}
