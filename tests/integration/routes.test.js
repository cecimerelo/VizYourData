const express = require('express')
const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const data = require('../../src/modules/Plots/useCases/data/plotTypes.json')
const getPlotFields = require('../../server/api/functions/getPlotFields')
const getPlotTypes = require('../../server/api/functions/getPlotTypes')

chai.use(chaiHttp)

describe('Test /definitions/:plotType Route', () => {
  let app
  beforeAll(() => {
    app = express()
    app.get('/definitions/:plotType', getPlotFields)
  })

  it('I should return the configuration for a record type', (done) => {
    chai.request(app)
      .get('/definitions/scatterPlot')
      .end((err, res) => {
        expect(res.body).to.be.an.instanceof(Array)
        done()
      })
  })

  it('I should return an error', (done) => {
    chai.request(app)
      .get('/definitions/')
      .end((err, res) => {
        expect(res.status).to.be.equal(404)
        done()
      })
  })
})

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
