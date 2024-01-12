const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = async () => {
  try {
    await mongoose.connect(mongodb://gorayausman061:Z0GiGTFr4JIPiUvl@ac-3i0kfuy-shard-00-00.vdk3ku9.mongodb.net:27017,ac-3i0kfuy-shard-00-01.vdk3ku9.mongodb.net:27017,ac-3i0kfuy-shard-00-02.vdk3ku9.mongodb.net:27017/CMS?ssl=true&replicaSet=atlas-qooh9o-shard-0&authSource=admin&retryWrites=true&w=majority");
    console.log("Database connected successfully...");
  } catch (error) {
    throw new Error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
