const Cont = require('../models/cont')

module.exports = {

    async createCont(req, res) {
        const {title,description } = req.body

       try {
        const hasCont = await Cont.findOne({title})
        if(hasCont){
            return res.status(400).json({message:"Cont already registered"})
        }

        const createCont = await Cont.create({title, description})
        return res.status(200).json({message:"Cont registered", createCont})
           
       } catch (error) {
           return res.status(400).json(error)
       }
    },

    async listCont(req, res){
       
        try {

            const conts = await Cont.find()
            return res.status(200).json(conts)
            
        } catch (error) {
            return res.status(400).json(error)
        }       
       
    },

    async deleteCont(req, res){

        const {cont_id} = req.params

        try {
            const hasCont = await Cont.findById(cont_id)
            if (!hasCont){
                return res.status(400).json({message:"Cont not found"})
            }   
            const deleteCont = await Cont.findByIdAndRemove(cont_id)
            return res.status(200).json({message:"Cont has been deleted", hasCont})

        } catch (error) {
            return res.status(200).json({message:"Cont not found"})
        }

    }
}