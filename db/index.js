const mysql = require("mysql");

//mysql://bd1eadff1c5fec:692886c2@us-cdbr-east-03.cleardb.com/heroku_2205579f265d37e?reconnect=true
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'tjs'
// });

const db = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bd1eadff1c5fec',
    password: '692886c2',
    database: 'heroku_2205579f265d37e'
});

db.connect((err)=>{
    if(err){
        throw err;
    }else {
        console.log("mysql connected")
    }
    
});

module.exports=db