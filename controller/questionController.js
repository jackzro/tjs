const db = require("../db")

class questionController {
    static getAll(req,res){
        let sql = `SELECT * FROM tjs WHERE isAnswered = 0`
        db.query(sql,(err,result)=>{
            if (err) throw err;
            console.log(result)
            res.json(result).status(200)
        })
    }

    static updateQuestionAnswer(req,res){
        let sql = `UPDATE tjs SET isAnswered = 1 WHERE ID = ${req.params.id}`
        db.query(sql,(err,result)=>{

            if (err) throw err;
            console.log(result)
            res.json(result).status(200)
        })
    }

    static getDetail(req,res){
        let sql = `SELECT * FROM tjs WHERE ID = ${req.params.id}`
        db.query(sql,(err,result)=>{
            if (err) throw err;
            console.log(result)
            res.json(result).status(200)
        })
    }

    static getDetailQuestion(req,res){
        let sql = `SELECT * FROM tjs WHERE IDStudent = ${req.params.id}`
        db.query(sql,(err,result)=>{
            if (err) throw err;
            console.log(result)
            res.json(result).status(200)
        })
    }

    static addQuestion(req,res) {
        let question= {
            title:req.body.title,
            image:req.body.image,
            description:req.body.description,
            category:req.body.category,
            isAnswered:req.body.isAnswered,
            IDStudent:req.body.IDStudent,
            nameStudent:req.body.nameStudent
        }
        let sql = `INSERT INTO tjs SET ?`
        db.query(sql,question,(err,result)=>{
            if (err) throw err;
            console.log(result)
            return res.json(result).status(200)
        })
    }
}

module.exports = questionController