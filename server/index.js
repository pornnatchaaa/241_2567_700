const express = require('express');
const bodyParset = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');

const port = 8000;


app.use(bodyParset.json());
app.use(cors());

let users = [];


//เริ่มต้นการเชื่อมต่อกับ MySQL
let conn = null;
const initMySQL = async () => {
     conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'webdb',
            port: 8830
    })
};
// app.get('/testdb', (req, res) => {
//    let conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '5432',
//         database: 'test',
//         port: 8830
//     }).then(conn => {
//         conn
//         .query('SELECT * FROM users')
//         .then((result)=>{
//             res.json(result[0])
//         })
//         .catch((error) => {
//             console.log(error, error.message);
//             res.status(500).json({error: 'Error fetching users'})
            
//         });
//     });
// });

/*
app.get('/testdbnew/',async (req, res) => {

    try{
      const result = await conn.query('SELECT * FROM users');
    res.json(result[0]);
    } catch (error) {
        console.log(error, error.message);
        res.status(500).json({error: 'Error fetching users'})
    }
    
});
*/


// path:GET  /users ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users',async (req, res) => { 
    const result = await conn.query('SELECT * FROM users');
    res.json(result[0])
});


// path:Post /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/users',async (req, res) => {    
    try{
        let user = req.body;
        const result = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: 'Create new user successfully',
            data: result[0]
        });
    }catch (err) {
        //console.error('error :', error.message)
        res.status(500).json({
          message :'Something went wrong',
          //errorMessage : error.message
        })        
    }   
})


// path:GET  /users/:id สำหรับดึงข้อมูล user รายคนออกมา
app.get('/users/:id',async (req, res) => { 
    try{
   let id = req.params.id;
   //ค้นหา user หรือ index ของ user ที่ต้องการดึงข้อมูล
   const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
   //let selectedIndex = users.findIndex(user => user.id == id);
   if(results[0].length == 0){
    throw {statusCode: 404, message: 'User not found'};
    //res.json(results[0][0])
   }//res.json(results[0][0])
   /*else{
    throw new Error('User not found');
    res.status(404).json({
    message: 'User not found'
    })
   }*/
   res.json(results[0][0]);  
    //res.json(users[selectedIndex]);
    }catch(error){
        let statusCode = error.statusCode || 500;
      //console.error('error :', error.message)
      res.status(500).json({
        message :'Something went wrong',
        //errorMessage : error.message
      })   
    }
});



// PUT /user/:id สำหรับแก้ไขข้อมูล user รายคน (ตาม id)
app.put('/users/:id', async (req, res) => {
    //let id = req.params.id;
    //let updateUser = req.body;
    try{
        let id = req.params.id;
        let updateUser = req.body;
        const result = await conn.query(
            'UPDATE users SET ? WHERE id = ?', 
            [updateUser,id]);
        res.json({
            message: 'Update user successfully',
            data: result[0]
        });
    }catch (err) {
        //console.error('error :', error.message)
        res.status(500).json({
          message :'Something went wrong',
          //errorMessage : error.message
        })        
    }   
    //let selectedIndex = users.findIndex(user => user.id == id);
        //users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
        //users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
        //users[selectedIndex].age = updateUser.age || users[selectedIndex].age;
        //users[selectedIndex].gender = updateUser.gender || users[selectedIndex];

    /*res.json({
        message: 'Update user successfully',
        data:{
            user: updateUser,
            index: selectedIndex
        }
    })*/
});
 

//path: Delete /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id ในการระบุ
app.delete('/users/:id', async (req, res) => {
    try{
        let id = req.params.id;
        //let updateUser = req.body;
        const result = await conn.query('DELETE from users WHERE id = ?', id)
        res.json({
            message: 'Delete user successfully',
            data: result[0]
        });
    }catch (err) {
        //console.error('error :', error.message)
        res.status(500).json({
          message :'Something went wrong',
          //errorMessage : error.message
        })        
    }   
    });
    
    ///let id = req.params.id;
    /*let selectedIndex = users.findIndex(user => user.id == id);
    //ลบ
    users.splice(selectedIndex, 1);
    res.json({
        message: 'Delete user successfully',
        index: selectedIndex
    });
});*/
app.listen(port,async (req, res) => {
    await initMySQL();
  console.log('Http Server is running on port' + port);
})



/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /user สำหรับ create user ใหม่บันทึกเข้าไป
GET /user/:id สำหรับดึง user รายคนออกมาดู
PUT /user/:id สำหรับแก้ไขข้อมูล user รายคน (ตาม id)
DELETE /user/:id สำหรับลบ user รายคน (ตาม id)
*/