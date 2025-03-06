const Contact = require("../models/mongo");
const service = require("../service/mitron.service");


const writeMessage = async (req, res) => {
    try {
        console.log("Kelib tushgan malumot:", req.body); 
        
        
        const data = Array.isArray(req.body) ? req.body[0] : req.body;

        const name = data.name || data.ism; 
        const email = data.email;
        const message = data.message || data.xabar; 

        
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Barcha maydonlarni toldiring!" });
        }

        const newMessage = new Contact({ name, email, message });
        await newMessage.save();

        res.status(201).json({ message: "Xabar saqlandi!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const messageById = async (req, res)=>{
    try{
        let id = req.params.id
        const messages = await Contact.findById(id)
        res.status(200).json({data : messages})
    }catch(err){
        res.status(404).send(`404 Not Found`)
    }
}

const deleteById = async (req,res)=>{
    try{
        let id = req.params.id  
        const message = await Contact.findByIdAndDelete(id)

    }
    catch{

    }
}

const updateById = async (req, res) => {
    try {
        let id = req.params.id;
        let updateData = req.body; 

        const updatedMessage = await Contact.findByIdAndUpdate(id, updateData, { new: true });
        res.status(201).json({ message: "updated data", data: updatedMessage });
    } catch (err) {
        console.log(err.message)
    }
};



const renderMessage = async (req, res) => {
    try {
        const messages = await Contact.find();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const renderData = (req, res) => {
    res.status(200).json(service.readData());
};

const writeData = (req, res) => {
    service.writeData(req.body);
    res.status(201).json({ message: "Data written successfully" });
};

module.exports = {
    renderData,
    writeData,
    writeMessage,
    renderMessage,
    messageById,
    deleteById,
    updateById
};
