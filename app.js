'use strict'

const path = require('path')
const createError = require('http-errors')
const bodyParser = require('body-parser')
const login = require('./routes/login')
const order = require('./routes/order')

const express = require('express')
const app = express()

// Set template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// To create a static
app.use(express.static(path.join(__dirname, 'public')))
// For post method
app.use(bodyParser.urlencoded({ extended: false }))

// Set rourters
app.use('/login', login)
app.use('/order', order)

// Throw 404 error when the requested url is not exists
app.use(function (req, res, next) {
  next(createError(404, 'request not found!'));
})

module.exports = app
