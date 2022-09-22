import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    public: resolve(__dirname, './public/')
  },
  srcDir: 'src/',

  dir: {
    public: resolve(__dirname, './public/')
  },

  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    // 'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    // 'material-symbols/outlined.css',
    // 'prismjs/themes/prism-coy.css',
    // '~/assets/styles/layout.scss',
    // '~/assets/styles/App.scss',
    // '~/assets/styles/plus.scss',
    '~/assets/css/style.css'
  ],

  // buildModules: [
  //   '@pinia/nuxt',
  //   '@vueuse/nuxt'
  // ],

  meta: {
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    link: [
      {rel: 'icon', href: '/favicon.ico'},
    ]
  },

  generate: {
    routes: ['/'],
    subFolders: true
  },

  ssr: false,

  vite: {
    logLevel: 'info'
  },
  publicRuntimeConfig: {
    baseSocket: process.env.BASE_SOCKET
  },
  privateRuntimeConfig: {}
})
