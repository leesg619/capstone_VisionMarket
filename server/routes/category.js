const express = require('express');
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {Category} = require('../models/Category');



router.post('/create'),(req,res) => {

    const category = new Category(req.body)

    category.save((err) => {
        if(err) {  
            console.log(err);
            res.status(200).json({ "status": false, "result": "Category Create Failed!" })
    }
        res.status(200).json({ "status": true, "result": 'Success!'})
    })
}

module.exports = router;

// //전체 카테고리 가져오기
// router.post('/get/allCategories', (req,res) => {

//     Category.find({})
//     .exec((err,categories) => {
//         if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
//         return res.status(200).json({success: true, "result": 'Success!',categories})
//     })
// })

// //카테고리 검색
// router.get('/get/category_by_id', (req,res) => {
   
//     let category = req.query.id
//     const category =  new Category(req.body);
//     categ.author = req.user._id
//         product.save((err) => {
//             if(err) {  
//                 console.log(err);
//                 res.status(200).json({ "status": false, "result": "Product Create Failed!" })
            
//         }
//             res.status(200).json({ "status": true, "result": 'Success!'})
//         })
//})

