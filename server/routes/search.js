const express = require("express");
const router = express.Router();
const { Search } = require('../models/Search')
const { auth } =require('../middlewares/auth')

router.post('/register', (req, res) => {
    var search = new Search(req.body);

    search.save((err, doc) => {
        if (err) return res.status(400).json({success : false, err})
        return res.status(200).json({success : true, search : doc})
    })
})

router.post('/user/data', auth, (req, res) => {
    Search.find({seacher : req.user._id}, (err, searchs) => {
        if (err) return res.status(400).json({success : false, err})
        return res.status(200).json({success : true, searchs : searchs})
    })
})

//
router.get('/searchpost', (req, res) => {
    let searchList = [
        { title: new RegExp(req.searchword) },
        { content: new RegExp(req.searchword) },
    ];        // RegExp 정규표현식 객체로 find

    // searchword로 Search 만들어서 kwyrod랑 검색자 저장
    // 검색한 즉시 해당 단어 넣을지 or 상품 선택하면 그 상품의 title을 넣을지...

    //
    Post.find({ $or : searchList}, (err, results) => {
        if(err) res.status(400).json({success : false, err})
        return res.status(200).json({success : true, results : results})
    })
})

module.exports = router