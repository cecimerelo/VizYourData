import logger from '../../../src/commons/logger'

const data = require('../../../static/objects.json')

module.exports = function (req, res) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')

    res.send(data)
  } catch (e) {
    logger.log('info', e)
  }
}
