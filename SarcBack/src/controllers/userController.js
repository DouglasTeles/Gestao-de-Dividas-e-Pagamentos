const helpers = require('../helpers/bcrypt')
const User = require("../models/user");


module.exports = {
  async createUser(req, res) {
    const { name, password, cellphone, isAdmin  } = req.body

    
    try {
        const encryptedPassword = await helpers.encryptPassword(password)

        const hasUser = await User.findOne({cellphone})
        if(hasUser) {
            return res.status(400).json({ message:"User already exists"})
        }

      const createUser = await User.create({
        name,
        password:encryptedPassword,
        cellphone,
        isAdmin,
      });

      createUser.password = undefined
      return res.status(200).json({ message: "Resident created sucessfully",createUser});
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async listUser(req, res) {
    try {
      const allUsers = await User.find();

      return res.status(200).json(allUsers);
    } catch (error) {}
    return res.status(400).json(error);
  },

  async deleteUser(req, res) {
    const {user_id} = req.params

    try {
      const deleteUser = await User.findByIdAndRemove(user_id);

      return res.status(200).json({message:"User deleted", deleteUser});
    } catch (error) {}
    return res.status(400).json(error);
  }
};
