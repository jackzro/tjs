const db = require("../db")
const bcrypt = require('bcrypt')
const { generateToken } = require("../helpers/jwt")
const { validationResult } = require('express-validator');
const saltRounds = 10;

class userController {
    static login(req,res){
        const {email,password} = req.body;


        let sql = `SELECT * FROM user WHERE email = "${email}"`
        
        db.query(sql,(err,result)=>{
            if(result.length===0){
                return res.json({errors:"Invalid email or password"}).status(400)
            }
            if(err){
                throw err
            }
            const payload = {
                id:result[0].ID,
                name:result[0].name,
                email:result[0].email,
                role:result[0].role,
                credit:result[0].credit
            }
            if(bcrypt.compareSync(password,result[0].password)){
                const token = generateToken(payload)
                return res.json({token:token}).status(200)
            }else {
                return res.json({errors:"Invalid email or password"}).status(400)
            }
            
        })

    }

    static register(req,res){
        const { name,email, password,role } = req.body;
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }else {
            let sql = `SELECT email FROM user WHERE email = "${email}"`
            db.query(sql,(err,result)=>{
                if(result.length>0){
                    return res.status(409).json({errors:[{msg:"Email is already used"}]}) 
                }else {
                    const bcryptPass = bcrypt.hashSync(password,saltRounds)
                    let user = {
                        name:name,
                        email:email,
                        password:bcryptPass,
                        date:new Date(),
                        role:role,
                        credit:0
                    }
                    let mysql = `INSERT INTO user SET ?`
                    db.query(mysql,user,(err,result)=>{
                        return res.status(201).json({
                            result:"Your Account has been registered"
                        })
                    })
                }
            })
        }  
    }

    static creditPlus(req,res){
        const {id} = req.body
        let sql = `SELECT credit FROM user WHERE id = "${id}"`
        db.query(sql,(error,result)=>{
            const sum = result[0].credit
            let sqlplus = `UPDATE user SET credit  = ${sum+1} WHERE id = "${id}"`
            db.query(sqlplus,(err,resu)=>{
                console.log(resu)
                return res.status(200).json({
                    msg:"Your Credit has added"
                })
            })
            
        })
    }

    static creditMinus(req,res){
        const {id} = req.body
        let sql = `SELECT credit FROM user WHERE id = "${id}"`
        db.query(sql,(error,result)=>{
            const sum = result[0].credit
            let sqlplus = `UPDATE user SET credit  = ${sum-1} WHERE id = "${id}"`
            db.query(sqlplus,(err,resu)=>{
                return res.status(200).json({
                    msg:"Your Credit has decreased"
                })
            })
            
        })
    }

    static hasAnswer(req,res){
        const { id } = req.body
        let sql = `SELECT hasAnswer FROM user WHERE id = "${id}"`
        db.query(sql,(error,result)=>{
            const sum = result[0].credit
            console.log(result[0].credit)
            let sqlplus = `UPDATE user SET hasAnswer  = ${sum+1} WHERE id = "${id}"`
            db.query(sqlplus,(err,resu)=>{
                console.log(resu)
                return res.status(200).json({
                    msg:"Your hasAnswer has added"
                })
            })
            
        })
    }
}

module.exports= userController