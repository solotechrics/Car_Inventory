const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(`Error connceting to MongoDB:`, error);
        process.exit(1);
    }
};

module.exports = dbConnection;
