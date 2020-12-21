const logger = require("../plugins/logger");
const { Etcd3 } = require('etcd3');
const client = new Etcd3();

const setKey = async (key, value) => {
    logger.log('set ', key, ' to ', value);
    const res = await client.put(key).value(value);
    return res;
}

const getKey = async (key) => {
    logger.log('get key ', key);
    const val = await client.get(key).string();
    logger.log(key, ' is ', val);
    return val;
}

module.exports = {setKey, getKey};