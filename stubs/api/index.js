// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const router = require('express').Router()

// eslint-disable-next-line no-undef
module.exports = router

router.get('/constructor/formitems', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    res.send(require('./formitems.json'))
})

router.get('/admin/adminstats', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    res.send(require('./adminstats.json'))
})

router.post('/constructor/submit', (req, res) => {
    res.send()
})
