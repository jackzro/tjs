const mysql = require("mysql");
const dbConfig = require('../config/config')

//mysql://bd1eadff1c5fec:692886c2@us-cdbr-east-03.cleardb.com/heroku_2205579f265d37e?reconnect=true
// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'tjs'
// });

const db = mysql.createPool({
    host: dbConfig.dbHost,
    user: dbConfig.dbUser,
    password: dbConfig.dbPass,
    database: dbConfig.dbName
});

db.getConnection((err,connection)=>{
    if(err) throw err;
    console.log("connect",connection)
})

// db.connect((err)=>{
//     if(err){
//         db.connect()
//         // throw err;
//     }else {
//         console.log("mysql connected")
//     }
    
// });

module.exports=db