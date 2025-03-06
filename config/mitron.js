const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDBga muvaffaqiyatli ulandi");
    } catch (error) {
        console.log(`Xatolik: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
