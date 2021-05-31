const config = require("../config/key");
const mongoose = require('mongoose');
const fs = require('fs');

const { Category } =require('./Category')
const { mongoURI } = require("../config/key");

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

mongoose.connect(mongoURI,
    {
        useNewUrlParser : true, useUnifiedTopology : true,
        useCreateIndex : true, useFindAndModify : false
    });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
    //Category 생성
    initCategory();
});