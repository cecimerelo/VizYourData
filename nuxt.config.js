const {VuetifyProgressiveModule} = require("vuetify-loader")

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    server: {
        port: process.env.PROD_PORT || 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxtApp',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'shortcut icon', type: 'image/x-icon', href: ''}
        ],
        "script": [
            {
                "src": "https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"
            },
            {
                "src": "https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js"
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        {src: '~/plugins/vuetify'}, {src: '~/plugins/slideoutPanel'}, {src: '~/plugins/logger'}
    ],
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/dotenv'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/axios', '@nuxtjs/vuetify', '@nuxt/http'],

    http : {},

    winstonLog: {
        autoCreateLogPath: false
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        transpile: ['vuetify/lib'],

        extend(config, {isDev, isClient}) {
            const vueLoader = config.module.rules.find(
                rule => rule.loader === "vue-loader"
            )

            config.node = {
                fs: 'empty',
                child_process: 'empty',
                net: 'empty',
                tls: 'empty'
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
            presets() {
                return [
                    [
                        '@nuxt/babel-preset-app',
                        {
                            useBuiltIns: "entry"
                        }
                    ]
                ]
            },
        }

    }
}
