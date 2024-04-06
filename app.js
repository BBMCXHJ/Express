'use strict'

const path = require('path')
const express = require('express')
const app = express()
const port = 3000

// To create a virtual path prefix with static
app.use('/static', express.static(path.join(__dirname, 'public')))

// the following handler is executed for requests to the route '/' 
// whether using GET, POST, PUT, DELETE, or any other HTTP request method supported
app.all('/', (req, res, next) => {
  console.log('Accessing the / section ...')
  next() // pass control to the next handler
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`App is running...\nPlease open the url: http://localhost:${port}`)
})