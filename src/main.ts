import 'element-plus/dist/index.css'
import mitt from 'mitt'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/app.scss'
import './assets/css/index.css'
import AppComponents from './components'
import router from './router'

const emitter = mitt()

const app = createApp(App)

const createNewApp = () => {
  app.provide('eventHub', emitter)
  app.use(AppComponents)
  app.use(createPinia())
  app.use(router)
  app.config.globalProperties.emitter = emitter
  app.mount('#app')
}

const initData = async () => {
  return Promise.resolve()
}

const initialize = async () => {
  emitter.on('initialized', createNewApp)
  return initData()
}

initialize().then(() => {
  emitter.emit('initialized')
})
