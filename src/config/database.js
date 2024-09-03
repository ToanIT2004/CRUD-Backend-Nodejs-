const mysql = require('mysql2/promise')
require('dotenv').config()

// create the connection database

// Phương pháp cũ không tối ưu 
// const connection = mysql.createConnection({
//    host: process.env.DB_HOST,
//    port: process.env.DB_PORT,
//    user: process.env.DM_USER,
//    password: process.env.DM_PASSWORD,
//    database: process.env.DB_NAME
// })


// Sử dụng connection pool giúp tái sử dụng connection đỡ tiêu tốn tài nguyên cho db
const connection = mysql.createPool({
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DM_USER,
   password: process.env.DM_PASSWORD,
   database: process.env.DB_NAME,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
})

module.exports = connection