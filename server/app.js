const restify = require("restify");
const logger = require('../plugins/logger');
const routes = require('./api/routes');
const config = require('../config')
const { Nuxt, Builder } = require('nuxt')
const app = restify.createServer();
const consola = require('consola')

// Import and Set Nuxt.js options
const nuxtConfig = require('../nuxt.config.js')
nuxtConfig.dev = process.env.NODE_ENV !== 'production'

async function start () {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)
    const { host, port } = nuxt.options.server

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    app.use(function (req, res, next) {
        const request_method = req.method
        const request_url = req.url
        logger.log('INFO', `${request_method} ${request_url}`)
        next()
    });

    // Listen the server
    app.listen(port)
    consola.ready({
        message: `Server listening on: http://${host}:${port}`,
        badge: true
    })
    routes(app);
}
start()
