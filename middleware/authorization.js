const db = require('../db/index')

const authorization = (req,res,next) => {
    let sql = `SELECT * FROM user WHERE ID = "${req.userId.id}"`
    db.query(sql,(err,result)=>{
        if(result){
            next()
        }else {
            return res.status(401).json({
                errors :"User not Authorization"
            })
        }
    })
}

module.exports = authorization