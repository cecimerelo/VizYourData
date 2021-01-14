const logger = require('../../src/commons/logger')

module.exports = function (req, res, next) {
  const requestMethod = req.method
  const requestUrl = req.url
  logger.log('info', `${requestMethod} ${requestUrl}`)
  next()
}
