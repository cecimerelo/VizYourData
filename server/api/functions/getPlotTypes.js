const GetPlotTypesUseCase = require('../../../src/modules/Plots/useCases/getPlotTypesUseCase')

module.exports = function (req, res) {
  try {
    const useCase = new GetPlotTypesUseCase()
    useCase.run()

    const plotTypes = useCase.getPlotTypes()
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
    res.send(plotTypes)
  } catch (e) {
    console.log(e)
  }
}
