const express = require('express')
// Lưu ý nếu export = object thì ở đây phải là object
const { getHomepage, postCreateUser, getCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')
const router = express.Router()

// Khai báo route
router.get('/', getHomepage)
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)


module.exports = router