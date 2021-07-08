const Debt = require('../models/debito')

module.exports = {

    //total = 0;
    //addcont = total = addcont
    //addcont = total = total+addcont


    async createDbt(req, res) {
        const {user_id, cont_id} = req.params
        const {valor, debtTotal} = req.body
        
        try {
            //Adiciona valor a debtos
            const createDebt = await Debt.create({user_id, cont_id, valor, debtTotal})

            //cria um array "debtos" com os valores adicionados
            const Total = await Debt.find({user_id})
           
            const debtos = Total.map(Total => Total.valor)
            console.log(debtos)
            //soma os debtos 
            totalDebts = debtos.reduce((va, debto) => va+debto)

            //salva a soma do total de debitos
            createDebt.debtTotal.push(totalDebts)
            await createDebt.save()                 
            
            
            return res.status(200).json({message:"Debit registered", createDebt, totalDebts})
                   
                        
        } catch (error) {
            return res.status(400).json(error)
        }
       
    },
    async listDebtUser(req, res) {
        
        try {
            const {user_id} = req.params

            const listDebt = await Debt.find({user_id})
            
            const Total = await Debt.find()
            const debtos = Total.map(Total => Total.valor)

            totalDebts = debtos.reduce((va, debto) => va+debto)
            return res.status(200).json({listDebt, totalDebts})
            
           
        } catch (error) {
            return res.status(400).json(error)
        }

    },
    async updateDebtUser(req, res) {
        const {debt_id} = req.params
        
        const {valor} = req.body

        try {
            const updateDebt = await Debt.findOneAndUpdate(debt_id, {valor},{new:true})
            return res.status(200).json(updateDebt)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async deleteDebtUser(req, res){
        const {debt_id} = req.params
        
        try {
            const dellDebtUser = await Debt.findById(debt_id) 
            console.log(dellDebtUser.debtTotal[0])
            
            const Total = await Debt.find({user_id})
           
            const debtos = Total.map(Total => Total.valor)
            console.log(debtos)
            return res.status(200).json({message:"Debit Deleted", dellDebtUser})
        } catch (error) {
            return res.status(400).json(error)
        }

    },

    async deleteAllDebt(req, res) {

        try {
            
            const deleteAllDebt = await Debt.deleteMany()
            return res.status(400).json({message: "All debts has been deleted"})

        } catch (error) {
            return res.status(400).json(error)
        }
    }


}