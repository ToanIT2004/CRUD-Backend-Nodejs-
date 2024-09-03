const connection = require("../config/database")

const getAllUsers = async (req, res) => {
   let [results, fields] = await connection.query('select * from Users')
   return results;
}

const getUserById = async (userId) => {
   let [results, fields] = await connection.query(
      `select * from Users where id= ? `, [userId]
   );

   let user = results && results.length > 0 ? results[0] : {};

   return user
}

const postCreateUser = async (email, city, name) => {
   // let { email, city, name } = req.body;

   // Promise
   let [results, fields] = await connection.query(
      `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]
   );

   return results;
}

const updateUserById = async (email, city, name, userId) => {
   let [results, fields] = await connection.query(
      `UPDATE Users SET email = ?, name = ?, City= ? WHERE id = ?`, [email, name, city, userId]
   );

   return results;
}

const deleteUserById = async (userId) => {
   let [results, fields] = await connection.query(
      ` DELETE FROM Users WHERE id = ?`, [userId]
   );
   return results;
}

module.exports = {
   getAllUsers, getUserById, updateUserById, deleteUserById, postCreateUser
}