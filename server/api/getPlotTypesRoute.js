const app = require('express')()
const getPlotTypes = require('./functions/getPlotTypes')

module.exports = app.get('/plotTypes', getPlotTypes)
