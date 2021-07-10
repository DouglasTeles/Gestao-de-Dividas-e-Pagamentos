const debtsTotal = require('../models/total')
const User = require('../models/user')
const Debt = require('../models/debito')

module.exports = {

    async listTotal(req, res){
        const {user_id} = req.params

        if (user_id.length === 24) {//verifica se o id passados esta correto
            const hasUser = await User.findById(user_id);           
        if (!hasUser || hasUser == undefined || hasUser == null) {//verifica se o user existe
          return res.status(400).json({ message: "User not found" });
        }

        const Total = await Debt.find({user_id})
        const debtos = Total.map(Total => Total.valor)

        totalDebts = debtos.reduce((va, debto) => va+debto)
        console.log(totalDebts)

        const createTotal = await debtsTotal.create({total:totalDebts})
        return res.status(200).json(createTotal)
        }else{
            return res.status(400).json({message: 'Invalid Parameter'})
        }       
    }

}