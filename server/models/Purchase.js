const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Post } = require('./Post')
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");


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
        default : moment().format('YYYY-MM-DD')
    },
    total: {
        type: Number,
        default: 0
    },
    arriveDate: {
        type: Date,
        default: moment().add(3, 'days').format('YYYY-MM-DD') 
    }
})


const Purchase = mongoose.model("Purchase", purchaseSchema)

module.exports = { Purchase }