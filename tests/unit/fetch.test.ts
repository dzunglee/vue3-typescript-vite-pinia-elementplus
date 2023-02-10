import './__mocks__/constants'

import Service from 'core/service'

const service = new Service()

test('fetchPokemons', async () => {
  const response = await service.get('/pokemon', { limit: 20 })
  expect(response.results.length).toBe(20)
})
