const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const getHomepage = async (req, res) => {

   let results = await getAllUsers();
   // console.log(results + '123');

   // Chuyển về HTML nó sẽ không nhận được tại vì HTML chỉ nhận kiểu dữ liệu String hoặc Number
   return res.render('home.ejs', { listUsers: results })
}

const getCreateUser = (req, res) => {
   return res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
   // Req.body lấy tất cả name của thẻ form
   console.log("Object:", req.body);

   // Cach 1
   // let email = req.body.email;
   // let name = req.body.name;
   // let city = req.body.city;

   // Cach 2   
   // nó sẽ so sánh biến với key để lấy ra giá trị
   let { email, city, name } = req.body;

   // console.log("email", email);
   // console.log("name", name);
   // console.log("city", city);

   // Callback
   // connection.query(
   //    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
   //    [email, name, city],
   //    function (err, results) {
   //       console.log(results);
   //       res.send('Created user succeed!')
   //    }
   // );

   // Promise
   let [results, fields] = await connection.query(
      `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]
   );

   res.send('Created user succeed')
}

const getUpdatePage = async (req, res) => {
   const userId = req.params.id;

   let user = await getUserById(userId)

   res.render('edit.ejs', { user })
}

const postUpdateUser = async (req, res) => {
   // nó sẽ so sánh biến với key để lấy ra giá trị
   // let email = req.body.email;
   // let name = req.body.name;
   // let city = req.body.city;
   // let userId = req.body.userId;
   let { email, name, city, userId } = req.body;

   // console.log(email, city, name, userId);

   await updateUserById(email, city, name, userId)
   res.redirect('/')
}

const postDeleteUser = async (req, res) => {
   const userId = req.params.id;
   let user = await getUserById(userId)
   res.render('delete.ejs', { user })
}

const postHandleRemoveUser = async (req, res) => {
   const id = req.body.userId;
   await deleteUserById(id)
   res.redirect('/')
}



module.exports = {
   getHomepage,
   getCreateUser,
   postCreateUser,
   getUpdatePage,
   postUpdateUser,
   postDeleteUser,
   postHandleRemoveUser
}