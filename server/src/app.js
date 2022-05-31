console.log('Hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// register endpoint which takes a postrequest
// it return a message
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} Your user was registered. Have fun!`
  })
})
app.listen(process.env.PORT || 8081)
