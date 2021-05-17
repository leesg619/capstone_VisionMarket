const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Post } = require('./Post')
const moment = require('moment');
//장바구니, 다대다모델, 빈번한 DB접근
const cartSchema = mongoose.Schema({
    post : {
        type : Schema.Types.ObjectId,
        ref : "Post"
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    size: {
        type: String
    },
    quantity : {
        type : Number
    },
    cartDate : {
        type : Date,
        default : moment.now()
    },
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = { Cart }