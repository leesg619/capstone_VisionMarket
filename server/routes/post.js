const express = require('express');
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {Post} = require('../models/Post');
const {Category} = require('../models/Category');



//상품 등록
router.post('/create',auth, (req,res) => {
   
    const product =  new Post(req.body);
    product.author = req.user._id
        product.save((err) => {
            if(err) {  
                console.log(err);
                res.status(200).json({ "status": false, "result": "Product Create Failed!" })
            
        }
            res.status(200).json({ "status": true, "result": 'Success!'})
        })
})

//상품 삭제
router.delete('/delete',auth, async (req,res) => {

try {
        const product = await Post.findById(req.body._id);
        
        if(product.compareAuthor(req.user._id)) {
            Post.findOneAndDelete({"_id":req.body._id}).exec()
           return  res.status(200).json({ "status": true, "result": "Success!" })
        } else {
         return   res.status(200).json({ "status": true, "result": '다른 이의 게시물을 삭제할 수 없습니다.'})
        }
    } catch(err) {
        return   res.status(200).json({ "status": false, "result": "Delete Failed!" })
    }    
})

//개인이 등록한 상품 모두 조회
router.post('/read/user/allProducts',auth,(req,res) => {
    Post.find({'author' : req.user._id})
    .exec((err,products) => {
        if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
        return res.status(200).json({success: true, "result": 'Success!',products})
    })
})

//상품 수정
router.post('/update',auth, async (req,res) => {

    try {
        const product = await Post.findById(req.body._id);
    if(product.compareAuthor(req.user._id)) {
        Post.findOneAndUpdate({"_id":req.body._id},
    {
        title: req.body.title,
        content:req.body.content
    })
       return  res.status(200).json({ "status": true, "result": "Success!" })
    } else {
     return   res.status(200).json({ "status": true, "result": '다른 이의 게시물을 수정할 수 없습니다.'})
    }
} catch(err) {
    return   res.status(200).json({ "status": false, "result": "Delete Failed!" })
}    
})

//전체 상품 조회
router.post('/get/allProducts',(req,res) => {
    Post.find({})
    .populate('author')
    .exec((err,products) => {
        if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
        return res.status(200).json({success: true, "result": 'Success!',products})
    })
})


//상품 정보 디테일한거 한 개
router.get('/get/posts_by_id',  (req,res) => {

    let type = req.query.type
    let postId = req.query.id
     Post.find({_id: postId})
    .populate('author')
    .exec((err,post) => {
        if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
        return res.status(200).json({success: true, "result": 'Success!',post})
    })
})
//상품 카테고리에 맞는거 조회
router.post('/get/posts_by_category', (req,res) => {

    let categoryId = req.query.category
   
 
    Post.find({pcategory:categoryId})
    .exec((err,post) => {
        if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
        return res.status(200).json({success: true, "result": 'Success!',post})
    })
})

// onClick={() => {history.push({
//     pathname: "/postDetail/${post._id}" })}}
module.exports = router;