const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://waseem:netixsol.93@netixsol.bvi8glx.mongodb.net/mern-app");
    console.log("Database connected successfully...");
  } catch (error) {
    throw new Error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
