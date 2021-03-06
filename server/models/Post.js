
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./User')
const { Category } = require('./Category')

const postSchema = mongoose.Schema({
    title : {
        type : String,
        maxLength : 100
    },
    content : {
        type : String
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User",
        default : null
    },
    //여기가 소분류 ex) 남성패션 -> 의류
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
        type : Number,
        default : 100
    },
    // detailImage : [{
    //     type : String
    // }],
    // /*
    posting : {
        type : Number,
        //게시판 별로 넘버링
    },
    
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


postSchema.methods.compareAuthor = function( user_id ) {
    var post = this
    if(post.author.equals(user_id)){
        result = true
    }else {
        result = false
    }
    return result
   
}


postSchema.statics.findById = function( id ) {
    return this.findOne({_id: id},
        (err, post) => {
            if (err) return console.log(err);
        })
};

postSchema.index({ title: 'text' , content: 'text'});
//검색위해 index추가

const Post = mongoose.model("Post", postSchema);

module.exports = { Post }