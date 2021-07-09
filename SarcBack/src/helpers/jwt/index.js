const jwt = require('jsonwebtoken')

const secretKey = process.env.TOKEN_SECRET_KEY
const expirantionTime = process.env.TOKEN_EXPIRATION_TIME

module.exports = {

    createToken(payLoad){    

       const token = jwt.sign({payLoad}, secretKey, {expiresIn: expirantionTime})
       return token

    },

    verifyToken(token){

        const validToken = jwt.verify(token, secretKey)
        
        return validToken
    }
}