const errors = require('restify-errors')
const getPlotTypeDefinitionUseCase = require('../../src/modules/Plots/useCases/getPlotTypeDefinitionUseCase')
const getPlotTypesUseCase = require('../../src/modules/Plots/useCases/getPlotTypesUseCase')

function getPlotFields (req, res, next) {
  const plotType = req.params.plotType

  if (!plotType.length) {
    // En el caso de que no se pasaran parámetros en la ruta devuelve un error 400
    return next(new errors.BadRequestError())
  }

  const use_case = new getPlotTypeDefinitionUseCase(plotType)
  use_case.run()

  const definitionFields = use_case.getDefinitionFields()

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.send(definitionFields)
  next()
}

function getPlotTypes (req, res, next) {
  const use_case = new getPlotTypesUseCase()
  use_case.run()

  const plotTypes = use_case.getPlotTypes()

  // Aceptar CORS(Recursos de origen cruzado)
  res.header('Access-Control-Allow-Origin', '*')
  // Indicamos qué encabezados HTTP pueden ser usados durante la solicitud
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  // Enviamos la respuesta
  res.send(plotTypes)
  // Es obligatorio llamar a next() para asegurarnos de que se pasa al siguiente handler de la ruta, según la
  // documentación nunca hay que asumir cuál es el último handler porque esto puede resultar en error en el
  // procesamiento de las requests
  next()
}

module.exports = (server) => {
  // definimos las rutas, el formato es (ruta, handler)
  server.get('/definitions/:plotType', getPlotFields)
  server.get('/plotTypes', getPlotTypes)
}
