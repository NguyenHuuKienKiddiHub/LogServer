require("dotenv").config();
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_DB}`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error while connecting mongodb", error.message);
  }
};

module.exports = connectDB;
