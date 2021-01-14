const app = require('express')()
const getPlotFields = require('./functions/getPlotFields')

app.get('/definitions/:plotType', getPlotFields)

module.exports = {
  path: '/',
  handler: app
}
