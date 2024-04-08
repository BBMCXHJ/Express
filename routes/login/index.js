const loginController = require('../../controllers/loginController')
const express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    res.render('login', { title: 'Express Login' })
})

router.post('/', (req, res) => {
    loginController.Login(req.body.email || '', req.body.password || '')
})

module.exports = router