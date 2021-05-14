const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Post } = require('./Post')

const reviewSchema = mongoose.Schema({
    post : {
        type : Schema.Types.ObjectId,
        ref : "Post"
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    content : {
        type : String
    },
    InputTime : {
        type : Date,
        default : moment.now()
    },
    voice : { //음성여부
        type : Boolean,
        default : true
    },
    filepath : { // 음성파일경로
        type : String
    }
})

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review }