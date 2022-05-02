const mongoose = require('mongoose')
const { object } = require('webidl-conversions')

const userdata = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    cart: {
        type: Object,
        required: true
    }
    

})

module.exports = mongoose.model('userdata', userdata)