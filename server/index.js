const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไข users รายคน(ตาม id ที่บันทึกเข้าไป)
DELETE /users/:id สำหรับลบ users รายคน(ตาม id ที่บันทึกเข้าไป)
*/

//path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', (req, res) => {
    res.json(users);
})

/*app.get('/test', (req, res) => {
    let user = {
        name: "John",
        age: 30
    };
    res.json(user);
});*/

//path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({message: "Create user successfully",
        user : user
        });
    //console.log('user', user);
    //res.send(req.body);
});

//path: PUT/user/:id ใช้สำหรับแก้ไขข้อมูล user โดยใช้ id
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    //หา users จาก id ที่ส่งมา
    //ค้นหา userที่แก้ไข
     let selectedUser = users.findIndex(user => user.id == id)
        /*if(user.id == id){
            return true
        }else{
            return false
        }*/
     //res.send(selectedIndex +'')

    //แก้ไขข้อมูล users ที่หาเจอ
    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname
    }

    //users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    //users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname

    res.json({
         message: "Update user successfully",
         data: {
            user: updateUser ,   
            indexUpdated: selectedUser
         }
    })
    //user ที่ update ใหม่ uodate กลับไปเก็บใน users เดิม

    //res.send(id)
})

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id)
    //ลบ
    //delete users[selectedIndex]
    users.splice(selectedIndex, 1)
    res.json({
        message: "Delete user successfully",
        indexDeleted: selectedIndex
    })
})

app.listen(port, () => {
    console.log(`Http Server is running on port ` + port);
});





//const http = require('http');

//const hostname = 'localhost';  // แก้ไขจาก 'loaclhost' เป็น 'localhost'
//const port = 8000;

// เมื่อเปิด เว็บไปที่ http://localhost:8000/ จะเรียกใช้งาน function requireListener
/*const requireListener = function(req, res) {
    res.writeHead(200);  // แก้ไข 'wrieHead' เป็น 'writeHead'
    res.end("My first server!");
}

const server = http.createServer(requireListener);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */
