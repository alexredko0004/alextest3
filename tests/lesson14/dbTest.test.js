import { test, expect} from '@playwright/test'
import mysql from "mysql2"
import { v4 as uuidv4 } from 'uuid';

const username = "Freddie"+Math.floor(Math.random() * 100)
const updatedUsername = "Joshua"+Math.floor(Math.random() * 100)
const emailID = uuidv4();
const email = emailID + '@test.com';
const updatedEmail = 'UPD'+emailID + '@test.com';
var myArray = ['inactive', 'active']; 
var status = myArray[(Math.random() * myArray.length) | 0]



test.describe.serial('DB tests', ()=>{

test('INSERT user', async({request})=>{
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
 let insertData = new Promise ((resolve,reject)=>{
  pool.getConnection((err,connection)=>{
    connection.query(`INSERT INTO automation_heraction.users_oleksii.redko (username,email,status) VALUES ("${username}","${email}","${status}")`, function (error, results, fields) {
        connection.release();
        if (error) reject(error);
        resolve(results)
      });
    })
})
let result = await insertData;
let data = await request.get(`http://localhost:3000/users/${username}`);
let parsed = await data.json();
console.log(parsed)
expect(parsed[0].username).toEqual(`${username}`)
expect(parsed[0].email).toEqual(`${email}`)
expect(parsed[0].status).toContain(`${status}`)
})

test('SELECT particular user', async()=>{
  let pool = await mysql.createPool({
    host:"yh6.h.filess.io",
    user:"automation_heraction",
    password:"a15e5a47817c45a99ca9f32298e1cca90ea3c056",
    database:"automation_heraction"
    // host:"127.0.0.1",
    // user:"root",
    // password:"Test1234!",
    // database:"testdata"
})
 let getData = new Promise ((resolve,reject)=>{
  pool.getConnection((err,connection)=>{
    connection.query(`SELECT * from automation_heraction.users_oleksii.redko where username = "${username}"`, function (error, results, fields) {
        connection.release();
        if (error) reject(error);
        resolve(results)
      });
    })
})
let result = await getData;
expect(result[0].email).toEqual(`${email}`)
expect(result[0].status).toEqual(`${status}`)
console.log(result)
})

test('UPDATE user', async({request},id)=>{
  let pool = await mysql.createPool({
    host:"yh6.h.filess.io",
    user:"automation_heraction",
    password:"a15e5a47817c45a99ca9f32298e1cca90ea3c056",
    database:"automation_heraction"
    // host:"127.0.0.1",
    // user:"root",
    // password:"Test1234!",
    // database:"testdata"
})
 let updateData = new Promise ((resolve,reject)=>{
  pool.getConnection((err,connection)=>{
    connection.query(`UPDATE automation_heraction.users_oleksii.redko SET username = '${updatedUsername}', email = '${updatedEmail}' WHERE username = '${username}'`, function (error, results, fields) {
        connection.release();
        if (error) reject(error);
        resolve(results)
      });
    })
})
let result = await updateData;
let data = await request.get(`http://localhost:3000/users/${username}`);
let parsed = await data.json();
console.log(parsed)
expect(parsed).toEqual([])
let updatedData = await request.get(`http://localhost:3000/users/${updatedUsername}`);
let updatedParsed = await updatedData.json();
console.log(updatedParsed)
expect(updatedParsed[0].username).toEqual(`${updatedUsername}`)
expect(updatedParsed[0].email).toEqual(`${updatedEmail}`)
})

test('DELETE user', async({request})=>{
  let pool = await mysql.createPool({
    host:"yh6.h.filess.io",
    user:"automation_heraction",
    password:"a15e5a47817c45a99ca9f32298e1cca90ea3c056",
    database:"automation_heraction"
    // host:"127.0.0.1",
    // user:"root",
    // password:"Test1234!",
    // database:"testdata"
})
 let deleteData = new Promise ((resolve,reject)=>{
  pool.getConnection((err,connection)=>{
    connection.query(`DELETE FROM automation_heraction.users_oleksii.redko WHERE username = '${updatedUsername}'`, function (error, results, fields) {
        connection.release();
        if (error) reject(error);
        resolve(results)
      });
    })
})
let result = await deleteData;
let data = await request.get(`http://localhost:3000/users/${updatedUsername}`);
let parsed = await data.json();
console.log(parsed)
expect(parsed).toEqual([])
})
})

test.afterAll('CLEAR DATA', async()=>{
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
 let data = new Promise ((resolve,reject)=>{
  pool.getConnection((err,connection)=>{
    connection.query(`DELETE FROM automation_heraction.users_oleksii.redko WHERE username LIKE 'Joshua%'`, function (error, results, fields) {
        connection.release();
        if (error) reject(error);
        resolve(results)
      });
    })
  })
 let result = await data

})