const bodyParser = require('body-parser')
const express = require('express')
const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const postPlotInfo = require('../../server/api/functions/processPlotInfo')

chai.use(chaiHttp)

const MODE = 'markers'
const TYPE = 'scatter'
const PAYLOAD = require('../files/test_scatter.json')
const WRONG_PAYLOAD = require('../files/test_scatter_wrong.json')

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
