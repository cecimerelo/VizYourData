const {VuetifyProgressiveModule} = require("vuetify-loader")

const config = {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  server: {
    host: process.env.HOST // default: localhost
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxtApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuetify' }, { src: '~/plugins/slideoutPanel' }
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv', '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/vuetify', '@nuxt/http'],
  http: {},

  winstonLog: {
    autoCreateLogPath: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    transpile: ['vuetify/lib'],

    extend (config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )

      config.node = {
        child_process: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
      }

      vueLoader.options.compilerOptions = {
        modules: [VuetifyProgressiveModule]
      }

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    babel: {
      // envName: server, client, modern
      presets () {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              useBuiltIns: 'entry'
            }
          ]
        ]
      }
    }
  }
}
if (process.env.NODE_ENV === 'development') {
  config.modules.push('@nuxtjs/eslint-module')
}

module.exports = config
