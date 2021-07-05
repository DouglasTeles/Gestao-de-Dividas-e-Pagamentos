const Debt = require('../models/debito')

module.exports = {

    //total = 0;
    //addcont = total = addcont
    //addcont = total = total+addcont

    async createDbt(req, res) {
        const {user_id, cont_id} = req.params
        const {valor} = req.body
       
        try {
            const Total = await Debt.find()
            return res.status(200).json({Total})
            




            //const createDebt = await Debt.create({user_id, cont_id, valor})
            //return res.status(200).json({message:"Debit registered", createDebt})
                        
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