const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Post } = require('./Post')

//인공지능 모델의 상품평가지표를 갱신하고 저장할 모델
const gradeSchema = mongoose.Schema({
    post : {
        type : Schema.Types.ObjectId,
        ref : "Post"
    },
    rating : {  /* (비선호) -1  ~  1 (선호) */
        type : Number,
        default : 0
    }
})

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = { Grade }