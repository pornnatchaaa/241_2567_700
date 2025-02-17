
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = [];
//let counter = 1;

let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
    })
}

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไข users รายคน(ตาม id ที่บันทึกเข้าไป)
DELETE /users/:id สำหรับลบ users รายคน(ตาม id ที่บันทึกเข้าไป)
*/

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async (req, res) => {
    const [rows] = await conn.query('SELECT * FROM users');
    res.json(rows);
});

// path = GET /users/:id สำหรับดึง users รายคนออกมา
app.get('/users/:id', async (req, res) => {
    let id = req.params.id;
    const [rows] = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
});

// path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {
    let user = req.body;
    try {
        const [result] = await conn.query('INSERT INTO users SET ?', user);
        const [newUser] = await conn.query('SELECT * FROM users WHERE id = ?', [result.insertId]);

        res.json({
            message: "Create user successfully",
            data: newUser[0]
        });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});

// path = PUT /users/:id ใช้สำหรับแก้ไขข้อมูล user โดยใช้ id
app.put('/users/:id', async (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;

    try {
        const [rows] = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const updatedUser = { ...rows[0], ...updateUser };
        await conn.query('UPDATE users SET firstname = ?, lastname = ?, age = ?, gender = ? WHERE id = ?',
            [updatedUser.firstname, updatedUser.lastname, updatedUser.age, updatedUser.gender, id]);

        res.json({
            message: "Update user successfully",
            data: updatedUser
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
});

// path = DELETE /users/:id สำหรับลบ users รายคนตาม id
app.delete('/users/:id', async (req, res) => {
    let id = req.params.id;

    try {
        const [rows] = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        await conn.query('DELETE FROM users WHERE id = ?', [id]);

        res.json({
            message: "Delete user successfully",
            idDeleted: id
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log(`Http Server is running on port ${port}`);
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
