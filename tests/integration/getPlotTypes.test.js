const express = require('express')
const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const data = require('../../src/modules/Plots/useCases/data/plotTypes.json')
const getPlotTypes = require('../../server/api/functions/getPlotTypes')

chai.use(chaiHttp)
describe('Test /plotTypes Route', () => {
  let app
  beforeAll(() => {
    app = express()
    app.use(getPlotTypes)
  })

  function _getPlotTypes () {
    const plotTypes = []

    data.forEach((plotType) => {
      plotTypes.push(plotType)
    })
    return plotTypes
  }

  it('It should return all the defined Plot Types', async (done) => {
    const expectedResult = _getPlotTypes()

    chai.request(app)
      .get('/plotTypes')
      .end((err, res) => {
        expect(res.body).to.be.an.instanceof(Array)
        expect(res.body.length).equals(expectedResult.length)
        done()
      })
  })
})
