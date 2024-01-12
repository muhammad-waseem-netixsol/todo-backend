const express = require("express");
const connectDB = require("./db/connectdb");
const dotenv = require("dotenv");
const cors = require("cors");

const todo = require("./routes/Todo");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todo);
const port = 4000;

const DATABASE_URL = process.env.DATABASE_URL;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
   connectDB("mongodb://gorayausman061:Z0GiGTFr4JIPiUvl@ac-3i0kfuy-shard-00-00.vdk3ku9.mongodb.net:27017,ac-3i0kfuy-shard-00-01.vdk3ku9.mongodb.net:27017,ac-3i0kfuy-shard-00-02.vdk3ku9.mongodb.net:27017/CMS?ssl=true&replicaSet=atlas-qooh9o-shard-0&authSource=admin&retryWrites=true&w=majority").then(con => {
    console.log(`Example app listening on port ${port}`);
   }).catch(err => {
    console.log(err)
   }) ;
  
});
