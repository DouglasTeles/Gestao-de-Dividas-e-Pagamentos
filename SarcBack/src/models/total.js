const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    total: {
        type: mongoose.Schema.Types.Number,
        ref: 'Debt'
    } 
    
})
module.exports = mongoose.model('Total', Schema)