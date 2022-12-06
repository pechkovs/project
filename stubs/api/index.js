const router = require('express').Router()

module.exports = router

router.get('/constructor/formitems', (req, res) => {
    res.send(require('./formitems.json'))
})
