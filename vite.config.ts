import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import eslintPLugin from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import pkg from './package.json'

const resolvePath = (dir: string) => path.resolve(__dirname, 'src', dir)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      modules: resolvePath('modules'),
      stores: resolvePath('stores'),
      core: resolvePath('core'),
      utils: resolvePath('utils'),
    },
  },
  plugins: [
    vue(),
    eslintPLugin(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          __APP_VERSION__: pkg.version,
        },
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  define: {
    __APP_CONFIGS__: JSON.stringify({
      VERSION: pkg.version,
    }),
    __EXTERNAL_CONFIGS__: JSON.stringify({}),
  },
})
