import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    permissions?: string[]
    title?: string
    abilities?: Permission[]
    breadCrumbs?: {
      text: string
      url?: string
      isActive?: boolean
    }[]
  }
}
