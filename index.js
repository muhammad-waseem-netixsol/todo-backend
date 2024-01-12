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



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
   connectDB().then(con => {
    console.log(`Example app listening on port 3000`);
   }).catch(err => {
    console.log(err)
   }) ;
  
});
