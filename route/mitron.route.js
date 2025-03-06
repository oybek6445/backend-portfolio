const express = require('express')

let router = express.Router()

let controller = require('../controller/mitron.controller.js')

router.post('/post', controller.writeMessage)
router.get('/alldata/:id', controller.messageById)
router.get('/alldata', controller.renderMessage)
router.delete('/alldata/:id', controller.deleteById)
router.patch('/alldata/:id', controller.updateById)

module.exports = router