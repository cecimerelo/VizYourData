const app = require('express')()
const bodyParser = require('body-parser')
const postPlotInfo = require('./functions/processPlotInfo')

app.use(bodyParser.json())
app.use(bodyParser.raw())

module.exports = app.post('/plotTypes/:plotType', postPlotInfo)
