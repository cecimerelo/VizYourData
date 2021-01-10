const Etcd = require('node-etcd')
const logger = require('./logger')

const client = new Etcd()

const setKey = async (key, value) => {
  const message = 'set ' + key + ' to ' + value
  logger.log('info', message)
  const res = await client.set(key, value)
  return res
}

const getKey = async (key) => {
  const getKeyMessage = 'get key ' + key
  logger.log('info', getKeyMessage)
  const val = await client.get(key)
  return val
}

module.exports = { setKey, getKey }
