import Service from '@/core/service'
import type { Pokemon } from './types'

export class HomeService extends Service {
  public getPokemon(params = { limit: 20 }): Promise<{ results: Pokemon[] }> {
    return this.get('/pokemon', params)
  }
}
