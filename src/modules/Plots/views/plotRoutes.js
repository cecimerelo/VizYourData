import getPlotTypeDefinitionUseCase from '../useCases/getPlotTypeDefinitionUseCase';

const restify = require('restify');

function getPlotTypeDefinition(req, res, next) {
    const plotType = req.params.plotType;
    const use_case = new getPlotTypeDefinitionUseCase(plotType);
    use_case.run();

    const definitionFields = use_case.getDefinitionFields();
    res.send(definitionFields);
    next();
}

const server = restify.createServer();

server.get('/definitions/:plotType', getPlotTypeDefinition);

module.exports = server;