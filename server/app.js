const fs = require('fs')
const restify = require('restify')
const consola = require('consola')
const dotenv = require('dotenv')
const routes = require('./api/routes')
const middleware = require('./middleware')
dotenv.config()

const app = restify.createServer()
const { host, port } = { host: '0.0.0.0', port: 8080 }

// Set variables Host y port en etcd.
const serverConfigKeys = { HOST: host, PORT: port }
const serverConfigKeysJson = JSON.stringify(serverConfigKeys)

fs.writeFileSync('./static/server_config_keys.json', serverConfigKeysJson, 'utf8')

// Hacemos que el servidor escuche el el puerto especificado, para poder hacer las solicitudes
app.listen(port, host)

// configuramos el middleware
middleware(app)

consola.ready({
  message: `Server listening on: http://${host}:${port}`,
  badge: true
})

// Pasamos al módulo de rutas el servidor con el que las definiremos
routes(app)
