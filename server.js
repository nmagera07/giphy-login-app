const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const UsersRouter = require('./users/users-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/', UsersRouter)

server.get('/', (req,res) => {
    res.status(200).json({ message: 'You are connected'})
})


module.exports = server