const express = require('express')
const bodyParser = require('body-parser')
const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const data = require('../../src/modules/Plots/useCases/data/plotTypes.json')
const getPlotFields = require('../../server/api/functions/getPlotFields')
const getPlotTypes = require('../../server/api/functions/getPlotTypes')
const postPlotInfo = require('../../server/api/functions/processPlotInfo')

const MODE = 'markers'
const TYPE = 'scatter'
const PAYLOAD = require('../files/test_scatter.json')
const WRONG_PAYLOAD = require('../files/test_scatter_wrong.json')

chai.use(chaiHttp)

describe('Test /definitions/:plotType Route', () => {
  let app
  beforeAll(() => {
    app = express()
    app.get('/definitions/:plotType', getPlotFields)
  })

  it('I should return the configuration for a record type', (done) => {
    chai.request(app)
      .get('/definitions/scatter')
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

describe('Test /plotTypes/scatter Route', () => {
  let app

  beforeAll(() => {
    app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.raw())

    app.post('/plotTypes/:plotType', postPlotInfo)
  })

  it('It should return a Scatter Plot Structure', async(done) => {
    chai
      .request(app)
      .post('/plotTypes/scatter')
      .send(PAYLOAD)
      .end((err, res) => {
        expect(res.body.x).to.be.an.instanceof(Array)
        expect(res.body.y).to.be.an.instanceof(Array)
        expect(res.body.mode).equals(MODE)
        expect(res.body.type).equals(TYPE)
        done()
      })
  })

  it('It should return error 400', async(done) => {
    chai
      .request(app)
      .post('/plotTypes/scatter')
      .send(WRONG_PAYLOAD)
      .end((err, res) => {
        expect(res.status).to.be.equal(400)
        done()
      })
  })
})
