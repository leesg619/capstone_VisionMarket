const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Post } = require('./Post')
const { Purchase } = require('./Purchase')

//구매목록과 매칭. 후에 관련기능 구현시 확실히.
const usePointSchema = mongoose.Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    purchase : {
        type : Schema.Types.ObjectId,
        ref : "Purchase"
    },
    used : {
        type : Number,
        default : 0
    },
    useDate : {
        type : Date,
        default : moment.now()
    },

})

const UsePoint = mongoose.model("UsePoint", usePointSchema)

module.exports = { UsePoint }