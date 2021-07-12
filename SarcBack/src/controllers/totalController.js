const debtsTotal = require('../models/total')
const User = require('../models/user')
const Debt = require('../models/debito')
const Credit = require('../models/credit')

module.exports = {

    async listTotal(req, res){
        const {user_id} = req.params

        if (user_id.length === 24) {//verifica se o id passados esta correto
            const hasUser = await User.findById(user_id);           
        if (!hasUser || hasUser == undefined || hasUser == null) {//verifica se o user existe
          return res.status(400).json({ message: "User not found" });
        }

        //Busca todos os debitos
        const Total = await Debt.find({user_id})
        if(Total.length < 1){//Verifica se há dividas cadastradas.
            return res.status(200).json({ message:"No debts for this user!"}) 
        }    
        //Se houver dividas cadastradas, irá somar o total    
        const debtos = Total.map(Total => Total.valor)
        totalDebts = debtos.reduce((va, debto) => va+debto)
        

        //Busca todos os créditos
        const cretidTotal = await Credit.find({user_id})
        if(cretidTotal.length < 1){//Se não houver créditos cadastrados, nada será sbtraido da divida total
            totalCreditos = 0
            totalDebts = (totalDebts - totalCreditos)
            const createTotal = await debtsTotal.create({total:totalDebts})
            return res.status(200).json(createTotal)
        }
        //Se houver créditos cadastrados, irá somar o total de créditos
        const creditos = cretidTotal.map(cretidTotal => cretidTotal.valor)
        totalCreditos = creditos.reduce((va, creditos) => va+creditos)
        

        //subtrai os créditos dos débitos
        totalDebts = (totalDebts - totalCreditos)
        

        const createTotal = await debtsTotal.create({total:totalDebts})
        return res.status(200).json(createTotal)
        }else{
            return res.status(400).json({message: 'Invalid Parameter'})
        }       
    }

}