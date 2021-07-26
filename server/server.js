const express = require('express')
const path = require('path')

const liftRoutes = require('./routes/lifts')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/lifts', liftRoutes)

module.exports = server
