const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Post } = require('./Post')

const moment = require('moment');

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

reviewSchema.statics.findByPostId = function({postId, voice}){
    return this.find({
        post: postId,
        voice: voice  // true : 음성리뷰, false: 일반리뷰
    })
    .populate('post').
    populate('author')
    .exec();
} // 한 상품 detail : postid로 voice true / false 따로

reviewSchema.statics.findByUserId = function(userId){
    return this.find({
        author: userId
    })
    .populate('post').
    populate('author')
    .exec();
}// 1. 개인이 자기가쓴거 조회 : 상관없이 전부보여주게


// reviewSchema.statics.findBy--- = function(){
//     return this.find({
//         post: postId
//     }).exec();
// }

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review }