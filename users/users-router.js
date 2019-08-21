const express = require('express')

const Users = require('./users-model')

const router = express.Router()

const bcrypt = require('bcryptjs')

const restricted = require('../auth/restricted.js')

const jwt = require('jsonwebtoken')
const secrets = require('../auth/secrets.js')

router.get('/', (req, res) => {
    res.send('You are connected')
})

router.post('/register', (req, res) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password)
    user.password = hash

    Users.addUser(user)
        .then(addedUser => {
            const token = generateToken(user)
                
            res.status(201).json({addedUser, token})
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to add user'})
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ message: `Welcome ${user.username}!`, token})
            } else {
                res.status(401).json({ message: 'You shall not pass!!'})
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to login'})
        })
})

router.get('/users', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to fetch users'})
        })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }

    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secrets.jwtSecret, options)


}

module.exports = router

//comment