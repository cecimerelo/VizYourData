import restify from "restify";
import errors from 'restify-errors';

const getPlotTypeDefinitionUseCase = require('../src/modules/Plots/useCases/getPlotTypeDefinitionUseCase');

function getPlotFields(req, res, next) {
    const plotType = req.params.plotType;

    if(!plotType.length ){
        return next(new errors.BadRequestError())
    }

    const use_case = new getPlotTypeDefinitionUseCase(plotType);
    use_case.run();

    const definitionFields = use_case.getDefinitionFields();

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(definitionFields);
    next();
}

const server = restify.createServer();
server.get('/definitions/:plotType', getPlotFields);

module.exports = server;