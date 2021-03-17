const {verifyToken} = require('../helpers/jwt')
const db = require('../db/index')

const authentication = (req,res,next) => {
    if(!req.headers.token){
        return res.status(401).json({
            errors :"Token not found"
        })
    }
    
    const decoded = verifyToken(req.headers.token) 

    let sql = `SELECT * FROM user WHERE ID = "${decoded.id}"`
    req.userId=decoded
    db.query(sql,(err,result)=>{
        if(result[0].ID===decoded.id){
            next()
        }else {
            return res.status(401).json({
                errors :"User not found"
            })
        }
    })
}

module.exports= authentication