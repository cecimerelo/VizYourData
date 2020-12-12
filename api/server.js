import getPlotTypeDefinitionUseCase from "@/src/modules/Plots/useCases/getPlotTypeDefinitionUseCase";

const errors = require('restify-errors');
const restify = require('restify');
const config = require('../config');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.listen(config.PORT)

server.get('/definitions/:plotType', (req, res, next) => {
    try {
        const plotType = req.params.plotType;
        const use_case = new getPlotTypeDefinitionUseCase(plotType);
        use_case.run();

        const definitionFields = use_case.getDefinitionFields();
        res.send(definitionFields);
        next();
    } catch (err) {
        return next(new errors.InvalidContentError(err));
    }
});

module.exports = server;