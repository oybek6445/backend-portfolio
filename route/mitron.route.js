const express = require('express')

let router = express.Router()

let controller = require('../controller/mitron.controller.js')

router.post('/post', controller.writeMessage)
router.get('/alldata', controller.renderMessage)

module.exports = router