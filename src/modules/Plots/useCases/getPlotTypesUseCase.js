class GetPlotTypesUseCase {
  constructor () {
    this._plotTypes = []
  }

  run () {
    const data = require('../useCases/data/plotTypes.json')

    data.forEach((plotType) => {
      this._plotTypes.push(plotType)
    })
  }

  getPlotTypes () {
    return this._plotTypes
  }
}

module.exports = GetPlotTypesUseCase
