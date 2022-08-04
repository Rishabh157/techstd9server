require("dotenv").config({ path: "./.env" })
const express = require("express");
const PORT = process.env.PORT
const cors = require("cors");
const multer = require("multer");
// const axios = require("axios");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const upload = multer();

/*************  Middlewares  Start *************/
app.use(cors());
// this is used for parser a Form Data  // 
app.use(upload.array());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client")));
// app.use('/static', express.static(path.join(__dirname, 'client')));
/*************  Middlewares End  *************/

app.get('/first', (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
})

app.post("/submit-form", (req, res) => {
  let userData = req.body
  console.log(userData)
})

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`)
})
