const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = mongoose.Schema({
    ctype : {
        type : Number,
        default : 0
        /* 0  장애물품  
           1  공용패션
           2  남성패션
           3  여성패션 */
    },
    bigName : {
        type : String,
        maxLength : 20
    },
    smallName : { //대분류
        type : String
    },
    small : { //소분류 필요하면 사용
        type : String,
        maxLength : 20
    }
})



const Category = mongoose.model("Category", categorySchema);

module.exports = { Category }