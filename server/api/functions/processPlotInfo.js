import BuildScatterPlotUseCase from '../../../src/modules/Plots/useCases/BuildScatterPlotUseCase'

module.exports = function (req, res) {
  try {
    const plotType = req.params.plotType
    const xAxis = req.body.x
    const yAxis = req.body.y
    const data = req.body.data

    if (!plotType.length || !xAxis || !yAxis) {
      res.status(400).send({
        error: 'Parameters missing'
      })
    } else {
      const useCase = new BuildScatterPlotUseCase(xAxis, yAxis, plotType, data)
      const scatterPlot = useCase.run()

      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      res.send(scatterPlot)
    }
  } catch (e) {
    console.log(e)
  }
}
