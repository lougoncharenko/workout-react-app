// import exercise schema
let exerciseSchema = require("./exercisemodel");

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
// setting up a mongoose connection
const mongoose = require("mongoose");
app.use(cors())
app.use(express.json())
app.options("*", cors())


mongoose.connect("mongodb+srv://louisagonch:L907-air!@cluster0.azy2re6.mongodb.net/?retryWrites=true&w=majority")

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

const Exercise = require("./exercisemodel")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/search"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", require("./route"));



// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

// app.post('/data', (req, res, next) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: 'Thing created successfully!'
//   });
//   res.send("POST Request Called");
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});