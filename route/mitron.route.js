const express = require('express')

let router = express.Router()

let controller = require('../controller/mitron.controller.js')

router.post('/post', controller.writeData)
router.get('/alldata', controller.renderData)

module.exports = router