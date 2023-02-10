jest.mock('core/constants', () => ({
  importMetaEnv: {
    VITE_SERVICE_ENDPOINT: 'https://pokeapi.co/api/v2/',
    BASE_URL: '/',
    MODE: 'development',
    DEV: true,
    PROD: false,
    SSR: false,
    VERSION: '0.0.0',
  },
  APP_CONFIGS: {},
  EXTERNAL_CONFIGS: {},
}))

export {}
