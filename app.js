require('dotenv').config()
const express = require("express");s
const app = express();
const cors = require('cors')
const router = require("./routes/index")
const port = process.env.PORT || 3001

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(router);

app.listen(port,()=>{
    console.log("server port on 3001")
})