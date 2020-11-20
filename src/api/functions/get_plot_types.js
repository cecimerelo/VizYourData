const plotTypes = require("./plot_types.json")

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async event => {
    let result = plotTypes;

    const {type} = event.queryStringParameters;

    if (type) {
        result = type;
    }

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result)
    }
}