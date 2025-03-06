const express = require('express')
const cors = require('cors'); 


let router = require('../route/mitron.route.js')
let app = express()
app.use(express.json());
const corsOptions = {
    origin: ['https://mitron.uz', 'https://www.mitron.uz', 'http://localhost:3000'],
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: 'Content-Type,Authorization'
}

app.use(cors(corsOptions))

app.use('/api/', router);

module.exports = app;