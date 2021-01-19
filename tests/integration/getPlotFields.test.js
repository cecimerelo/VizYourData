const express = require('express')
const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const getPlotFields = require('../../server/api/functions/getPlotFields')

chai.use(chaiHttp)

describe('Test /definitions/:plotType Route', () => {
  let app
  beforeAll(() => {
    app = express()
    app.get('/definitions/:plotType', getPlotFields)
    app.get('/definitions/', getPlotFields)
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
