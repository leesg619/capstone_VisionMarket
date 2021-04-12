const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Post } = require('./Post')

const purchaseSchema = mongoose.Schema({
    post : {
        type : Schema.Types.ObjectId,
        ref : "Post"
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    quantity : {
        type : Number
    },
    discount : {
        type : Number,
        default : 0
    },
    purchaseDate : {
        type : Date,
        default : moment.now()
    },
})

const Purchase = mongoose.model("Purchase", purchaseSchema)

module.exports = { Purchase }