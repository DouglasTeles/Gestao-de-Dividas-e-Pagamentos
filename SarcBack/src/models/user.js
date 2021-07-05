const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    name: {
        type:'String',
        required: true
    },
    password: {
        type:'String',
        required: true
    },
    cellphone: {
        type:'number',
        required: true
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default: false
    }

})
module.exports = mongoose.model('User', Schema)