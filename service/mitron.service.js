const fs = require('fs')

const readData = ()=>{
    return JSON.parse(fs.readFileSync('./config/mitron.json'))
}
let writeData = (body)=>{
    let data1 = readData()
    data1.push(body)
    fs.writeFileSync('./config/mitron.json', JSON.stringify(data1, null), 'utf-8')
}

module.exports = {
    readData,
    writeData
}