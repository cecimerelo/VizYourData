const winston = require('winston')
require('winston-syslog')

const papertrail = new winston.transports.Syslog({
  host: 'logs3.papertrailapp.com',
  port: 46375,
  handleExceptions: true,
  colors: false,
  logFormat (level, message) {
    return '<<<' + level + '>>> ' + message
  }
})

const logger = winston.createLogger({
  format: winston.format.simple(),
  levels: winston.config.syslog.levels,
  transports: [papertrail]
})

module.exports = logger
