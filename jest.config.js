/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^modules/(.*)$': '<rootDir>/src/modules/$1',
    '^stores/(.*)$': '<rootDir>/src/stores/$1',
  },
}
