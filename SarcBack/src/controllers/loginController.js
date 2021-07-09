const User = require('../models/user')
const bcrypt = require('../helpers/bcrypt')
module.exports = {

    async login(req, res) {
        const {cellphone, password} = req.body

        try {
            const hasUser = await User.findOne({cellphone})
            if(!hasUser) {
                return res.status(400).json({ message:"User does not exist"})
            }

            const passwordDTO = {
                requestPass: password,
                responsePass:hasUser.password
            }  

            const validPassword = await bcrypt.decryptPassword(passwordDTO)
            
            if(!validPassword){return res.status(400).json({ message:"Invalid password"})}

            hasUser.password = undefined
            return res.status(200).send({ message:"Sucess login", hasUser})

        } catch (error) {
           return res.status(400).send(error) 
        }


    }



}