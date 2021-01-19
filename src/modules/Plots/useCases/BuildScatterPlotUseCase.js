import Dataset from '../Dataset'

class BuildScatterPlotUseCase extends Dataset {
  constructor (xAxis, yAxis, plotType, data) {
    super(data)
    this._xAxis = xAxis
    this._yAxis = yAxis
    this._plotType = plotType
  }

  run () {
    const dataframe = this.convertDataToDataframe()
    return this._buildScatterPlot(dataframe)
  }

  _buildScatterPlot (dataframe) {
    return {
      x: dataframe.select(this._xAxis).toArray(),
      y: dataframe.select(this._yAxis).toArray(),
      mode: 'markers',
      type: this._plotType
    }
  }
}

export default BuildScatterPlotUseCase
