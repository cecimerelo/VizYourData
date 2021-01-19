const app = require('express')()
const getPlotFields = require('./functions/getPlotFields')

module.exports = app.get('/definitions/:plotType', getPlotFields)
