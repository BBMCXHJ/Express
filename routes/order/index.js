
const express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    let people = ['geddy', 'neil', 'alex']
    res.render('order', { title: 'Order List', people: people })
})

module.exports = router