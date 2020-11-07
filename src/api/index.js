const bodyParser = require('body-parser')
const app = require('express')()


app.use(bodyParser.json())
const plotTypes = require('./routes/plotTypes')

app.use(plotTypes)

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}

module.exports = {
    path: '/api',
    handler: app
}
