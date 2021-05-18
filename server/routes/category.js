const express = require('express');
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {Category} = require('../models/Category');
const {Post} = require('../models/Post');


//카테고리 생성, 카테고리를 고정해놓고 사용 할 지 유동적으로 생성할 수 있게 할지
//아직 미정..
router.post('/create',(req,res) => {

    const category = new Category(req.body)

    category.save((err) => {
        if(err) {  
            console.log(err);
            res.status(200).json({ "status": false, "result": "Category Create Failed!" })
    }
        res.status(200).json({ "status": true, "result": 'Success!'})
    })
})


//전체 카테고리 가져오기
router.get('/', (req,res) => {

    Category.find({})
    .exec((err,categories) => {
        if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
        return res.status(200).json({success: true, "result": 'Success!',categories})
    })
})


module.exports = router;