const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/plotTypes', (req, res) => {
    res.json([{ key: '0', name:'Scatter' }])
})

module.exports = app