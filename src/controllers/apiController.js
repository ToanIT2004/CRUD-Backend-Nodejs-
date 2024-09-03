const { getAllUsers, updateUserById, postCreateUser, deleteUserById } = require('../services/CRUDService')



const getUsersAPI = async (req, res) => {
   let results = await getAllUsers();

   return res.status(200).json(
      {
         errorCode: 0,
         data: results
      }
   );
}

const createUserAPI = async (req, res) => {
   let { email, city, name } = req.body; // Destructure directly from req.body
   let results = await postCreateUser(email, city, name);
   return res.status(200).json({
      data: results
   })
}

const updateUserAPI = async (req, res) => {

   let { email, city, name, userId } = req.body; // Destructure directly from req.body
   let results = await updateUserById(email, city, name, userId);

   return res.status(200).json(
      {
         data: results
      }
   )
}

const deleteUserAPI = async (req, res) => {
   let { userId } = req.body; // Destructure directly from req.body
   let results = await deleteUserById(userId);
   return res.status(200).json(
      {
         data: results
      }
   )
}

module.exports = {
   getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI
}



