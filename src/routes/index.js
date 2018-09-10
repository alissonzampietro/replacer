const express = require('express')
const app = express()
const TextManager = require('../controllers/text/')

app.get('/txt', TextManager.replaceSpecialCharacters.bind(TextManager))

module.exports = app