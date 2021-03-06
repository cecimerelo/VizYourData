class getPlotTypeDefinitionUseCase {
  constructor (plotType) {
    this._plotType = plotType
    this._definitionFields = null
  }

  run () {
    // TODO: separate depending the plot type
    this._definitionFields = ['Title', 'xAxis', 'yAxis']
  }

  getDefinitionFields () {
    return this._definitionFields
  }
}

module.exports = getPlotTypeDefinitionUseCase
