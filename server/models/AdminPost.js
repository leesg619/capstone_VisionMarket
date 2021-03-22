const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminPostSchema = mongoose.Schema({
    admin : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    category : {
        // 'home_feature_main'
        // 'home_feature_part1'
        // 'home_feature_par2'
        type : String,
        unique : 1
    },
    filepath : {
        type :String
    },
    description : {
        type :String
    },
    title : {
        type :String
    },
    linkURL : {
        type :String
    },
    linkText : {
        type :String
    },
    image : String
}, {timestamps : true})

const AdminPost = mongoose.model("AdminPost", adminPostSchema)

module.exports = { AdminPost }