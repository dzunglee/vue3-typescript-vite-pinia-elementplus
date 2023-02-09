import { defineStore } from 'pinia'
import { HomeService } from './service'
import type { HomeState } from './types'

const svc = new HomeService()

export const useHomeStore = defineStore('key', {
  state: (): HomeState => ({
    pokemonList: [],
  }),
  getters: {
    totalPokemon(state) {
      return state.pokemonList.length
    },
  },
  actions: {
    async actGetPokemonList() {
      return svc.getPokemon().then((res) => {
        this.pokemonList = res.results
        return res
      })
    },
  },
})
