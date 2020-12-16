const restify = require("restify");
const logger = require('./plugins/logger');
const {Etcd3} = require('etcd3');
const routes = require('./api/routes');

const ETCD_HOST = process.env.ETCD_IP;
const ETCD_PORT = process.env.ETCD_PORT;
const CONFIG_URL = `${ETCD_HOST}:${ETCD_PORT}` || 'http://localhost:8080';

const server = restify.createServer();
server.use(function (req,res,next) {
    const request_method = req.method
    const request_url = req.url
    logger.log('INFO', `${request_method} ${request_url}` )
    next()
});

let port;

const run = async (configUrl) => {
    const client = new Etcd3({
        hosts: configUrl
    })

    port = await client.get("API_PORT").string();
    port = port || process.env.API_PORT || 8080;

    const message = 'Server listening at ' + port;
    server.listen(port, function () {
        logger.log('INFO', message);
    });
};

run(CONFIG_URL);

routes(server);

module.exports = server;
