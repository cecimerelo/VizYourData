const getPlotTypeDefinitionUseCase = require('../../../src/modules/Plots/useCases/getPlotTypeDefinitionUseCase')

module.exports = function (req, res) {
  try {
    const plotType = req.params.plotType

    if (!plotType) {
      res.status(404).send({
        error: 'Parameters missing'
      })
    } else {
      // eslint-disable-next-line new-cap
      const useCase = new getPlotTypeDefinitionUseCase(plotType)
      useCase.run()

      const definitionFields = useCase.getDefinitionFields()

      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'X-Requested-With')
      res.send(definitionFields)
    }
  } catch (e) {
    console.log(e)
  }
}
