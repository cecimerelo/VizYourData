const restify = require("restify");
const logger = require('./plugins/logger');
const routes = require('./api/routes');
const config = require('./config')

const server = restify.createServer();
server.use(function (req, res, next) {
    const request_method = req.method
    const request_url = req.url
    logger.log('INFO', `${request_method} ${request_url}`)
    next()
});

const port = config.PORT || process.env.PORT / 8080;
const message = 'Server listening at ' + port;
server.listen(port, function () {
    logger.log('INFO', message);
});

routes(server);
module.exports = server;
