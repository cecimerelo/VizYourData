import { describe, test } from '@jest/globals'
import BuildScatterPlotUseCase from '../../src/modules/Plots/useCases/BuildScatterPlotUseCase'

const JSON = require('../files/test_scatter.json')
const JSON_DATA = JSON.data

describe('BuildScatterPlot', () => {
  test('When run called with csv file, then returns a scatter plot', async () => {
    const useCase = new BuildScatterPlotUseCase('GrLivArea', 'SalePrice', 'scatter', JSON_DATA)
    const scatterPlot = await useCase.run()
    expect(scatterPlot.type).toEqual('scatter')
  })
})
