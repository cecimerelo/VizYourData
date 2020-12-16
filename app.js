const restify = require("restify");
const logger = require('./plugins/logger');
const {Etcd3} = require('etcd3');
const routes = require('./api/routes');

const ETCD_HOST = process.env.ETCD_HOST;
const ETCD_PORT = process.env.ETCD_PORT;
const CONFIG_URL = `${ETCD_HOST}:${ETCD_PORT}` || 'http://localhost:8080';

const client = new Etcd3({
    hosts: CONFIG_URL
})

const server = restify.createServer();
server.use(function (req, res, next) {
    const request_method = req.method
    const request_url = req.url
    logger.log('INFO', `${request_method} ${request_url}`)
    next()
});

let port;
let root;

const run = async () => {
    root = await client.get("ROOT").string();
    port = await client.get("PORT").string();

    root = root || process.env.API_ROOT || "";
    port = port || process.env.API_PORT || 8000;

    const message = 'Server listening at ' + port;
    server.listen(port, function () {
        logger.log('INFO', message);
    });
};

run();
routes(server);
module.exports = server;
