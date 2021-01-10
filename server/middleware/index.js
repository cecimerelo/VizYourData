const logger = require('../../src/commons/logger')

module.exports = function (app) {
// Configurar middleware. Con esto cada vez que se haga una llamada a una ruta se logueará en Papertrail
  app.use(function (req, res, next) {
    const requestMethod = req.method
    const requestUrl = req.url
    logger.log('info', `${requestMethod} ${requestUrl}`)
    next()
  })
}
