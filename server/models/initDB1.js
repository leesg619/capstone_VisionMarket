// Post.js pre(save)부분 주석 후 진행
const config = require("../config/key");
const mongoose = require('mongoose');
const fs = require('fs');

const { Category } =require('./Category')
const { Post } =require('./Post')
const { User } =require('./User')

const manPants = require('../../manPants.json');
const womanPants = require('../../womanPants.json');
const slacksPants = require('../../slacksPants.json');
const T_Shirts = require('../../T_Shirts.json');
const Hoody = require('../../Hoody.json');

const { mongoURI } = require("../config/key");


function initPost(json_file){

    for(let i=0; i<json_file.length; i++){
        let post = new Post(json_file[i]);
        post.author = mongoose.Types.ObjectId('6093b3c222b3d04d6438839f');
        post.pcategory = mongoose.Types.ObjectId('6099327d8cf49c15d4c09888');
        // category _id값 직접대입
        post.pstock = 100;
        
        post.save((err, post) => {
            if(err) {console.log(err);}
            console.log(post);
        })
    }

}

mongoose.connect(mongoURI,
    {
        useNewUrlParser : true, useUnifiedTopology : true,
        useCreateIndex : true, useFindAndModify : false
    });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");

    // Posts 생성
    for(let i=0; i<manPants.length; i++){
        let post = new Post(manPants[i]);
        post.author = mongoose.Types.ObjectId('6093b3c222b3d04d6438839f');
        post.pcategory = mongoose.Types.ObjectId('6099327d8cf49c15d4c09888');
        // author, category _id값 직접대입
        post.pstock = 100;
        post.save(function (err, post){
            if(err) return console.log(err);
            console.log(post);
        })
    }

    for(let i=0; i<womanPants.length; i++){
        let post = new Post(womanPants[i]);
        post.author = mongoose.Types.ObjectId('6093b3c222b3d04d6438839f');
        post.pcategory = mongoose.Types.ObjectId('6099327d8cf49c15d4c09889');
        // author, category _id값 직접대입
        post.pstock = 100;
        post.save(function (err, post){
            if(err) return console.log(err);
            console.log(post);
        })
    }

    for(let i=0; i<slacksPants.length; i++){
        let post = new Post(slacksPants[i]);
        post.author = mongoose.Types.ObjectId('6093b3c222b3d04d6438839f');
        post.pcategory = mongoose.Types.ObjectId('6099327d8cf49c15d4c0988e');
        // author, category _id값 직접대입
        post.pstock = 100;
        post.save(function (err, post){
            if(err) return console.log(err);
            console.log(post);
        })
    }

    for(let i=0; i<T_Shirts.length; i++){
        let post = new Post(T_Shirts[i]);
        post.author = mongoose.Types.ObjectId('6093b3c222b3d04d6438839f');
        post.pcategory = mongoose.Types.ObjectId('6099327d8cf49c15d4c0988c');
        // author, category _id값 직접대입
        post.pstock = 100;
        post.save(function (err, post){
            if(err) return console.log(err);
            console.log(post);
        })
    }

    for(let i=0; i<Hoody.length; i++){
        let post = new Post(Hoody[i]);
        post.author = mongoose.Types.ObjectId('6093b3c222b3d04d6438839f');
        post.pcategory = mongoose.Types.ObjectId('6099327d8cf49c15d4c0988d');
        // author, category _id값 직접대입
        post.pstock = 100;
        post.save(function (err, post){
            if(err) return console.log(err);
            console.log(post);
        })
    }
});

