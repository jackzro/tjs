const express = require("express");
const app = express();
const cors = require('cors')
const router = require("./routes/index")

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(router);

app.listen("3001",()=>{
    console.log("server port on 3001")
})