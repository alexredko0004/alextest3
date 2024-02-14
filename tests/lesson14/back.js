import express from "express"
import mysql from "mysql2"

const app = express()
const PORT = 3000

let pool = mysql.createPool({
    host:"yh6.h.filess.io",
    user:"automation_heraction",
    password:"a15e5a47817c45a99ca9f32298e1cca90ea3c056",
    database:"automation_heraction"
    // host:"127.0.0.1",
    // user:"root",
    // password:"Test1234!",
    // database:"testdata"
})

app.use(express.json())

app.get("/users",(req,res)=>{
    pool.getConnection((err,connection)=>{
        connection.query('SELECT * from automation_heraction.users_oleksii.redko', function (error, results, fields) {
            connection.release();
            if (error) throw error;
            console.log(results);
            res.json(results)
          });
    })
})

app.get("/users/:name",(req,res)=>{
    const {name} = req.params;
    pool.getConnection((err,connection)=>{
        connection.query(`SELECT * from automation_heraction.users_oleksii.redko where username='${name}'`, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            res.json(results)
          });
    })
})

app.post("/users",(req,res)=>{
    let {username,email,status}=req.body;
    pool.getConnection((err,connection)=>{
        connection.query(`INSERT INTO automation_heraction.users_oleksiiredko (username,email,status) VALUES ('${username}','${email}', '${status}')`, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            res.json(results)
          });
    })
})

app.delete("/users/:username",(req,res)=>{
    let {username}=req.body;
    pool.getConnection((err,connection)=>{
        connection.query(`DELETE FROM automation_heraction.users_oleksiiredko WHERE username LIKE '${username}'`, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            res.json(results)
          });
    })
})

app.listen(PORT,()=>{
    console.log("Listening on port 3000")
})