const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());

app.use(express.json())

const PORT = 6000 || process.env.PORT;
app.listen(PORT ,()=>{
    console.log(`server started on ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("hello");
})

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err);
})
app.use('/api/user',require('./routes/userRoute'))

