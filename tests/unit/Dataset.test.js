import { describe, test } from '@jest/globals'
import Dataset from '../../src/modules/Plots/Dataset'

const JSON_FILE_DATA = require('../files/colors.json')

describe('Dataset', () => {
  test('Convert JSON data to dataframe', async () => {
    const useCase = new Dataset(JSON_FILE_DATA)
    const dataframe = await useCase.convertDataToDataframe()
    expect(dataframe.constructor.name).toEqual('DataFrame')
  })
})
