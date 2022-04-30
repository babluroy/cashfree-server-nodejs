const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 2000;

// routes path
const merchantPayments = require("./routes/merchant_payment")

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use("/api", merchantPayments);

// starting the server
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})