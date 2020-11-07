const { Router } = require('express')

const router = Router()

const plotTypes = [
    { name: 'Scatter', key:'0' }
]

router.get('/plotTypes', function (req, res, next) {
    res.json(plotTypes)
})

module.exports = router
