const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    cont_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Cont'
    },
    total: {
        type: 'number',
        required: true
    } 
    
})
module.exports = mongoose.model('Total', Schema)