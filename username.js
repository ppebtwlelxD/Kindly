const mongoose = require('mongoose')
const { object } = require('webidl-conversions')

const username = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    session_start: {
        type: String,
        required: true
    }
    
    /*,
    checkbox_dryret: {
        type: String,
        required: true
    },
    checkbox_toster: {
        type: String,
        required: true
    }
    */

})

module.exports = mongoose.model('username', username)