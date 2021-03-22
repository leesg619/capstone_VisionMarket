const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')

const postSchema = mongoose.Schema({
    title : {
        type : String,
        maxLength : 20
    },
    content : {
        type : String
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    posting : {
        type : Number,
        /*
            게시판 별로 넘버링
        */
    },
    image : {
        type : String
    },
    purpose : {
        type : Number,
        /*
            유저 게시물일 경우
            0번 : 자유게시판,
            1번 : 등등

            운영자 게시물일 경우,
            0번 : 메인 화면 포스팅,
            1번 : 
        */
        default : 0
    },
    adminPost : {
        type : Number,
        default : 0
    }
})

postSchema.pre('save', function(next){
    var post = this

    User.findById({'_id' : this.user}, (err, doc) => {
        if(err) return next(err)
        if(doc.role === 1) {
            post.adminPost = true
        }
    })
})

const Post = mongoose.model("Post", postSchema);

module.exports = { Post }