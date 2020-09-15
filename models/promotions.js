const mongoose = require('mongoose')
require('mongoose-currency').loadType(mongoose)
const Currency = mongoose.Types.Currency
const Schema = mongoose.Schema

const promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String,
        required: true
    },

    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

var Promotions = mongoose.model('Promotions', promoSchema)
module.exports = Promotions