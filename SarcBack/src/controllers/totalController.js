const totalDebts = require('../models/total')
const Debt = require('../models/debito')

module.exports = {

    async listTotal(req, res){
        const {user_id} = req.params
            
        const Total = await Debt.find({user_id})
        const debtos = Total.map(Total => Total.valor)

        totalDebts = debtos.reduce((va, debto) => va+debto)

        const createTotal = await totalDebts.create({total:totalDebts})
        return res.status(200).json(createTotal)
        
    }

}