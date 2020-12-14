const logger = require('./plugins/logger');
const server = require('./api/routes.js');

const message = 'Server listening at ' + 8080;
server.listen(8080, function() {
    logger.log('INFO', message);
});