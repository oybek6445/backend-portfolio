let service = require('../service/mitron.service.js')

const renderData = (req,res)=>{
    res.status(200).json(service.readData())
}

const writeData = (req,res)=>{
service.writeData(req.body)
}

module.exports = {
    renderData,
    writeData
}