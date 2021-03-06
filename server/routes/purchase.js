const express = require('express');
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {Purchase} = require('../models/Purchase');
const  { User} =require('../models/User')
const nodemailer = require('nodemailer');
const config = require("../config/key");
//상품 구매시 해당 유저에게 구매 수량*1000원을 point로 주고, 구매한 Purchase에 저장.
router.post('/create',auth, (req,res) => {
   
    const purchase =  new Purchase(req.body);
    purchase.user = req.user._id
    purchase.total = req.body.quantity * req.body.price
    purchase.size = req.body.size 
    console.log(req.body.quantity * req.body.price )
//유저를 가져와서 //유저의 point에 quantity * 1000을해준다. 왜냐하면 각 물품당 천원씩 적립해 줄거니까..
User.findOneAndUpdate(
    {"_id" : req.user._id},
    {$inc :{"point": req.body.quantity * 1000}},
    {new:true},
    (err,user) => {
        if(err) res.status(200).json({ "status": false, "result": "Purchase Create Failed!" })
    }
    )

    purchase.save((err) => {
            if(err) {  
                console.log(err);
                res.status(200).json({ "status": false, "result": "Purchase Create Failed!" })
            
        }
            res.status(200).json({ "status": true, "result": 'Success!'})
        })
})


//상품 환불시 해당 유저에게 지급된 point를 제거하고 해당 데이터를 제거한다.
router.post('/delete',auth,  (req,res) => {
   
let deletedPoint =  req.body.quantity * -1000;
User.findOne({"_id":req.user._id},(err,user) => {
    user.deletePoint(deletedPoint);
    if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
});
    Purchase.findOneAndDelete({'_id':req.body.purchaseId})
    .exec((err) => {
        if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
        return res.status(200).json({success: true, "result": 'Success!'})
    })
})

//구매 목록 가져오기
router.get('/purchaseList',auth, async (req,res)=> {
   let userId = req.user._id
    try {
       let purchaseList = await Purchase.find({user:userId}).populate('post');
       return res.status(200).json({success: true, "result": 'Success!',purchaseList})
    }catch(err) {
        res.status(200).json({ "status": false, "result": "Cart Create Failed!" })
    }
    
})



const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    port: "427",
    auth: {
      user: config.NODEMAILER_USER,
      pass: config.NODEMAILER_PASS,
    },
  })


router.post('/qnaRequest', (req, res, next) => {
    const text = req.body.content
    transporter.sendMail({
        from: req.body.email,        //보내는 사람 주소 지정해줘도 auth email이네요
        to: "gkwoap@gmail.com" ,           //받는 사람 주소 (관리자)제걸로했어요
        subject: "문의합니다 "+"email:"+req.body.email,         //제목
        text: req.body.content+"\n전화번호: "+req.body.phone,            //본문
})
    .then(send => res.json(send))
    .catch(err => next(err))

    return res.status(200).json({success: true})
})


router.post('/createMany',auth, (req,res) => {
    // console.log(req.body.shopList.ShoppingList);
    let quantities = 0;
    for( var shop of req.body.shopList.ShoppingList){
        quantities +=shop.quantity;
        const purchase =  new Purchase({
            post: shop.post._id,
            quantity: shop.quantity,
            user: req.user._id,
            total: shop.quantity * shop.post.pprice,
        });
    
        purchase.save((err) => {
            if(err) {  
                console.log(err);
                res.status(200).json({ "status": false, "result": "Purchase Create Failed!" })
            }  
        })
    }
        User.findOneAndUpdate(
        {"_id" : req.user._id},
        {$inc :{"point": quantities * 1000}},
        {new:true},
        (err,user) => {
            if(err) res.status(200).json({ "status": false, "result": "Purchase Create Failed!" })
        }
    )


    res.status(200).json({ status: true, "result": 'Success!'})
})


module.exports = router;