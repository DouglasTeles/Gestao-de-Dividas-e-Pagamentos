const Debt = require('../models/debito')

module.exports = {

    //total = 0;
    //addcont = total = addcont
    //addcont = total = total+addcont

    async createDbt(req, res) {
        const {user_id, cont_id} = req.params
        const {valor} = req.body
                
        try {
            const createDebt = await Debt.create({user_id, cont_id, valor})

            const Total = await Debt.find()
            const debtos = Total.map(Total => Total.valor)
            console.log(debtos)
            
            const totalDebts = debtos.reduce((va, debto) => va+debto)
            console.log(totalDebts)                    
            
            return res.status(200).json({message:"Debit registered", createDebt, totalDebts})


            


            
                        
        } catch (error) {
            return res.status(400).json(error)
        }
       
    },

    async listDebtUser(req, res) {
        const {user_id} = req.params

        const listDebt = await Debt.find({user_id})
        return res.status(200).json(listDebt)
    }


}