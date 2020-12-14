const winston = require('winston');

require('winston-papertrail').Papertrail;
const logger = new winston.transports.Papertrail({
    host: 'logs3.papertrailapp.com',
    port: 46375,
    handleExceptions: true,
    logFormat: function(level, message) {
        return '<<<' + level + '>>> ' + message;
    }
});

module.exports = logger;