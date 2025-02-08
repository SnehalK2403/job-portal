const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/job-portal";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${MONGO_URI}`);
    } catch (error) {
        console.error("❌ MongoDB Connection Failed", error);
        process.exit(1);
    }
};

module.exports = connectDB;
