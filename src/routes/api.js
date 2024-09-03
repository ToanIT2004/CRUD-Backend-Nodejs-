const express = require('express')
const routerAPI = express.Router()

const { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI } = require('../controllers/apiController')

routerAPI.get('/', (req, res) => {
   res.send("Hello World With API")
});

// Lấy thông tin Users
routerAPI.get('/users', getUsersAPI);

// Tạo mới Users
routerAPI.post('/users', createUserAPI);

// Cập nhật Users
routerAPI.put('/users', updateUserAPI);

// Xóa Users 
routerAPI.delete('/users', deleteUserAPI);



module.exports = routerAPI
