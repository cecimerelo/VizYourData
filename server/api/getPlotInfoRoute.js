const app = require('express')()
const getPlotInfo = require('./functions/getPlotInfo')

module.exports = app.get('/plotTypes/scatter/1', getPlotInfo)
