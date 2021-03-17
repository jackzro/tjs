const mysql = require("mysql");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tjs'
});

db.connect((err)=>{
    if(err){
        throw err;
    }else {
        console.log("mysql connected")
    }
    
});

module.exports=db