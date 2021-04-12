const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const secret = "secret";

const moment = require('moment');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    image : String,
    role : {
        type : Number,
        default : 0
    },
    token : {
        type : String
    },
    tokenExp : {
        type : String
    },
    sex : {
        type : String, // 남자 , 여자
        default: undefined
    },
    age : {
        type : Number
    },
    address : {
        type : String
    },
    point : {
        type : Number
    },
    impaired : { //시각장애 여부
        type : Boolean,
    },
    creditCardNum : {
        type : String
    },
    CVC : {
        type : Number
    },
})

userSchema.pre("save", function( next ) {
    var user = this;
    
    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return next(err);
                user.password = hash;
                next()
            })
        })
    }
    else {
        next();
    }
})

userSchema.methods.comparePassword = function( plainpassword, cb ) {
    bcrypt.compare(plainpassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function( cb ) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), secret);
    var tokenExp = moment().add(1, "hour").valueOf();

    user.token = token;
    user.tokenExp = tokenExp;
    user.save((err, user) => {
        if (err) return cb(err);
        cb(null, user);
    });
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    jwt.verify(token, secret, (err, decoded) => {
        user.findOne({"_id" : decoded, token : token}, (err, user) => {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}

const User = mongoose.model("User", userSchema);

module.exports = { User }