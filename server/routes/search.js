const express = require("express");
const router = express.Router();
const { Search } = require('../models/Search')
const { auth } =require('../middlewares/auth')
const { Post } = require('../models/Post')

router.post('/register', auth, (req, res) => {
    var search = new Search({
        keyword: req.body.keyword,
        searcher: req.user._id
    });

    search.save((err, doc) => {
        if (err) return res.status(400).json({success : false, err});
        return res.status(200).json({success : true});
    })
})

router.post('/user/data', auth, (req, res) => {
    Search.find({seacher : req.user._id}, (err, searchs) => {
        if (err) return res.status(400).json({success : false, err})
        return res.status(200).json({success : true, searchs : searchs})
    })
})

//
// 검색어로 post들 검색해서 리턴 , postSerachList와 연결
router.post('/searchList',auth, (req,res) => {
    let kwd = req.body.body;
    Post.find( { title: new RegExp(kwd) }, (err, searchList) => {
        if(err) return res.status(200).json({ success: false, "result": "Cannot Find SearchList" })
        return res.status(200).json({success: true, "result": 'Success!', searchList})
    })
    
})


module.exports = router