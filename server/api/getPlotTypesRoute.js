const app = require('../app')
const getPlotTypes = require('./functions/getPlotTypes')

module.exports = app.use(getPlotTypes)
