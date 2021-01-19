const getPlotTypeDefinitionUseCase = require('../../../src/modules/Plots/useCases/getPlotTypeDefinitionUseCase')

module.exports = function (req, res) {
  try {
    const plotType = req.params.plotType

    if (!plotType.length) {
      // En el caso de que no se pasaran parámetros en la ruta devuelve un error 400
      res.status(400).send({
        error: 'Parameters missing'
      })
    }
    // eslint-disable-next-line new-cap
    const useCase = new getPlotTypeDefinitionUseCase(plotType)
    useCase.run()

    const definitionFields = useCase.getDefinitionFields()

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.send(definitionFields)
  } catch (e) {
    console.log(e)
  }
}
