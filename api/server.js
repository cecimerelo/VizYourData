
const restify = require('restify');
const getPlotTypeDefinitionUseCase = require('../src/modules/Plots/useCases/getPlotTypeDefinitionUseCase');

function respond(req, res, next) {

    const plotType = req.params.plotType;
    const use_case = new getPlotTypeDefinitionUseCase(plotType);
    use_case.run();

    const definitionFields = use_case.getDefinitionFields();

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(definitionFields);
    next();
}

const server = restify.createServer();
server.get('/definitions/:plotType', respond);

module.exports = server;