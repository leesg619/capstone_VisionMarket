const mongoose = require('mongoose');
const moment = require('moment');

const searchSchema = mongoose.Schema({
    seacher : {
        ref : "User",
        type : mongoose.SchemaTypes.ObjectId
    },
    keyword : {
        type : String
    },
    InputTime : {
        type : Date,
        default : moment.now()
    },
    UpperKey : {
        type : String
    },
    LowerKey : {
        type : String
    }
    /*
    Purpose : {
        type : Number,
        default : 0
    },
    role : {
        type : Number,
        default : 0
    },
    */
})

// searchSchema.pre("save", function( next ) {
    

//     if(search.isModified("Keyword")) {
//         var search = this;
//         var upper = search.keyword.toUpperCase()
//         var lower = search.keyword.toLowerCase()
    
//         search.UpperKey = upper
//         search.LowerKey = lower
        
//         next()
//     } else {
//         next()
//     }
// })


const Search = mongoose.model("Search", searchSchema);


module.exports = { Search }