const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://todoappnew1:12345@cluster0.efivloe.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database connected successfully...");
  } catch (error) {
    throw new Error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
