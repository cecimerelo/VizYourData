const logger = require('./plugins/logger');
const server = require('./api/routes.js');
const {Etcd3} = require('etcd3');

const ETCD_HOST = process.env.ETCD_IP;
const ETCD_PORT = process.env.ETCD_PORT;
const CONFIG_URL = `${ETCD_HOST}:${ETCD_PORT}` || 'http://localhost:8080';

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
