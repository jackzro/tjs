const db = require("../db")

class answerController {

    static getAnswer(req,res){
        let sql = `SELECT * FROM answer WHERE IDquestion = ${req.params.id}`
        db.query(sql,(err,result)=>{
            if (err) throw err;
            console.log(result)
            return res.json(result).status(200)
        })
    }


    static postAnswer(req,res){
        let answer= {
            image:req.body.image,
            description:req.body.description,
            IDteacher:req.body.IDteacher,
            nameTeacher:req.body.nameTeacher,
            IDquestion:req.body.IDquestion,
            date:new Date()
        }
        let sql = `INSERT INTO answer SET ?`
        db.query(sql,answer,(err,result)=>{
            if (err) throw err;
            console.log(result)
            return res.json(result).status(200)
        })
    }
}


module.exports=answerController