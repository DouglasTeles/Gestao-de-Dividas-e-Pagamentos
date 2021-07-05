const User = require('../models/user')
module.exports = {

    async login(req, res) {
        const {cellphone, password} = req.body

        try {
            const hasUser = await User.findOne({cellphone})
            if(!hasUser) {
                return res.status(400).json({ message:"User does not exist"})
            }

            const validPassword = await User.findOne({password}).where({cellphone})
            if(!validPassword) {
                return res.status(400).json({ message:"Invalid Password"})
            }

            return res.status(200).send({ message:"Sucess login", hasUser})

        } catch (error) {
           return res.status(400).send(error) 
        }


    }



}