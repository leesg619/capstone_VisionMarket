const mongoose = require('mongoose')
const Schema = mongoose.Schema

//인공지능 모델의 상품평가지표를 갱신하고 저장할 모델
const recommendSchema = mongoose.Schema({
    sessionId : {
        type : String,
        maxLength: 12
    },
    productId : {  
        type : Number,
        default : 0
    }
})

const recommend = mongoose.model("Recommend", recommendSchema);

module.exports = { recommend }