const restify = require('restify');
const errors = require('restify-errors');
const getPlotTypeDefinitionUseCase = require('../src/modules/Plots/useCases/getPlotTypeDefinitionUseCase');
const getPlotTypesUseCase = require("../src/modules/Plots/useCases/getPlotTypesUseCase");
const logger = require('../plugins/logger');

function getPlotFields(req, res, next) {
    const plotType = req.params.plotType;

    if (!plotType.length) {
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

function getPlotTypes(req, res,next) {
    const use_case = new getPlotTypesUseCase();
    use_case.run();

    const plotTypes = use_case.getPlotTypes();

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(plotTypes);
    next()
}


const routes = restify.createServer();

routes.use(function (req,res,next) {
    const request_method = req.method
    const request_url = req.url
    logger.log('INFO', `${request_method} ${request_url}` )
    next()
});

routes.get('/definitions/:plotType', getPlotFields);
routes.get('/plotTypes', getPlotTypes);

module.exports = routes;