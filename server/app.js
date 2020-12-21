const restify = require("restify");
const logger = require('../plugins/logger');
const routes = require('./api/routes');
const config = require('../config')
const {Nuxt, Builder} = require('nuxt')
const app = restify.createServer();
const consola = require('consola')

// Import and Set Nuxt.js options
const nuxtConfig = require('../nuxt.config.js')
const {setKey} = require('../plugins/etcd');
nuxtConfig.dev = process.env.NODE_ENV !== 'production'

async function start() {
    // Iniciar Nuxt
    const nuxt = new Nuxt(config);
    const {host, port} = nuxt.options.server;

    // Set variables Host y port en etcd.
    await setKey('HOST', host);
    await setKey('PORT', port);

    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Configurar middleware. Con esto cada vez que se haga una llamada a una ruta se logueará en Papertrail
    app.use(function (req, res, next) {
        const request_method = req.method
        const request_url = req.url
        logger.log('INFO', `${request_method} ${request_url}`)
        next()
    });

    // Hacemos que el servidor escuche el el puerto especificado, para poder hacer las solicitudes
    app.listen(port)

    consola.ready({
        message: `Server listening on: http://${host}:${port}`,
        badge: true
    })
    // Pasamos al módulo de rutas el servidor con el que las definiremos
    routes(app);
}

start()
