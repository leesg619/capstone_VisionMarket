const express = require('express');
const router = express.Router();

const { AdminPost } = require('../models/AdminPost')

router.post('/admin/post', (req, res) => {
    AdminPost.find({})
})

//
router.get('/searchpost', (req, res) => {
    let searchList = [
        { title: new RegExp(req.searchword) },
        { content: new RegExp(req.searchword) },
    ];        // RegExp 정규표현식 객체로 find

    //
    Post.find({ $or : searchList}, (err, results) => {
        if(err) res.status(400).json({success : false, err})
        return res.status(200).json({success : true, results : results})
    })
    //검색한 결과 출력
})

module.exports = router;