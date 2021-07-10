const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: 'String', 
        required: true
    },
    valor:{
        type: 'number', 
        required: true
    },
    data:{
        type:'Date',
        default: Date.now()
    }
    
})
module.exports = mongoose.model('Credit', Schema)