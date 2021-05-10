const config = require("../config/key");
const mongoose = require('mongoose');
const fs = require('fs');

const { Category } =require('./Category')
const { Post } =require('./Post')
const { User } =require('./User')

// const json_file =fs.readFileSync("manPants.json");
// console.log(json_file.toString());
const manPants = require('../../manPants.json');

const connect = mongoose.connect(config.mongoURI, 
    {
        useNewUrlParser : true, useUnifiedTopology : true,
        useCreateIndex : true, useFindAndModify : false
    })
    .then(()=>console.log("MongoDB Connect..."))
    .catch(err => console.log(err));

function initCategory(){
    const cates = []

    const cate1 = new Category({
        cname: '남성바지',
        ctype: 0,
        large: '남성의류',
    });

    const cate2 = new Category({
        cname: '여성바지',
        ctype: 0,
        large: '여성의류',
    });

    const cate3 = new Category({
        cname: '여성니트',
        ctype: 0,
        large: '여성의류',
    });

    const cate4 = new Category({
        cname: '여성종합의류',
        ctype: 0,
        large: '여성의류',
    });
    const cate5 = new Category({
        cname: '티셔츠',
        ctype: 0,
        large: '공용의류'
    });

    const cate6 = new Category({
        cname: '후드티셔츠',
        ctype: 0,
        large: '공용의류'
    });

    const cate7 = new Category({
        cname: '슬랙스',
        ctype: 0,
        large: '공용의류'
    });


    const cate8 = new Category({
        cname: '장애보조물품',
        ctype: 1,
        large: '장애보조물품'
    });

    cates.push(cate1, cate2, cate3, cate4, cate5, cate6, cate7, cate8);
    console.log(cates);
    
    for(let i=0; i<cates.length; i++){
        cates[i].save((err, cate) => {
            if(err) {console.log(err);}
            console.log(cate);
        })
    }
}


function initPost(){

    User.findOne({role: 1}, (err, user) =>{
        if(!user){
            console.log("찾지못함");
            return;
        }
        console.log(user);

        for(let i=0; i<json_file.length; i++){
            let post = new Post(json_file[i]);
            post.author = user;
            post.pcategory = mongoose.Types.ObjectId('6099327d8cf49c15d4c09888');
            // category _id값 직접대입
            post.pstock = 100;

        }
    })

}

// initCategory();

// var user = User.findOne({email: 'gkwoap@nate.com'}).exec(function(err, docs){
//     return docs;
// });

// initPost();