const connectDB = require("./config/mitron");
const app = require("./middleware/app");

require("dotenv").config();


connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishga tushdi`);
});
