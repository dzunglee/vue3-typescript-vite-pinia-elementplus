import { defineStore } from 'pinia'

export const useAppOptionStore = defineStore({
  id: 'appOptions',
  state: () => ({
    // setting for app go here
    appLoading: false,
  }),
  getters: {
    getAppLoading: (state) => state.appLoading,
  },
  actions: {
    setAppLoading(loading: boolean) {
      this.appLoading = loading
    },
  },
})
