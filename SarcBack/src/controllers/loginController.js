const User = require('../models/user')
const bcrypt = require('../helpers/bcrypt')
const jwt = require('../helpers/jwt')
module.exports = {

    async login(req, res) {
        const {cellphone, password} = req.body

        try {
            const hasUser = await User.findOne({cellphone})
            if(!hasUser) {
                return res.status(400).json({ message:"User or password invalid"})
            }

            const passwordDTO = {
                requestPass: password,
                responsePass:hasUser.password
            }  

            const validPassword = await bcrypt.decryptPassword(passwordDTO)
            
            if(!validPassword){return res.status(400).json({ message:"User or password invalid"})}

            const payload = {
                cellphone:hasUser.cellphone,
                _id: hasUser._id
            }
            const token = jwt.createToken(payload)

            
            return res.status(200).send({ message:"Sucess login", token})

        } catch (error) {
           return res.status(400).send(error) 
        }


    }



}