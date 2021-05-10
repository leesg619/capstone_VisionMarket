const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Category } = require('./Category')

const postSchema = mongoose.Schema({
    title : {
        type : String,
        maxLength : 20
    },
    content : {
        type : String
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User",
        default : null
    },
    pcategory : {
        type : Schema.Types.ObjectId,
        ref : "Category"
    },
    purpose : {
        type : Number,
        /*
            0번 : 일반판매글(default),
            1번 : 자유형식게시글

            운영자 게시물
            10번 : 메인 화면 포스팅,
            11번 : 공지
        */
        default : 0
    },
    image : [{
        type : String
    }],
    pviews : {
        type : Number,
        default : 0
    },
    psales : {
        type : Number,
        default : 0
    },
    pcompany : {
        type : String
    },
    pprice : {
        type : Number
    },
    pstock : {
        type : Number
    },
    /*
    posting : {
        type : Number,
        //게시판 별로 넘버링
    },
    */
}, {timestamps : true})  // cretedAt, updatedAt 자동생성

postSchema.pre('save', function(next){
    var post = this

    User.findById({'_id' : this.author}, (err, doc) => {
        if(err) return next(err)
        if(doc.role === 1) {
            post.purpose = 10   //purpose 변경으로 운영자글 명시
        }
    })
})

const Post = mongoose.model("Post", postSchema);

module.exports = { Post }