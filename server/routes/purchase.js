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
router.delete('/delete',auth, (req,res) => {
   
    const purchase =  new Purchase(req.body);
    purchase.user = req.user._id
    purchase.total = req.body.quantity * req.body.price 
    console.log(req.body.quantity * req.body.price )
//유저를 가져와서 //유저의 point에 quantity * 1000을해준다. 왜냐하면 각 물품당 천원씩 적립해 줄거니까..
User.findOneAndUpdate(
    {"_id" : req.user._id},
    {$dec :{"point": req.body.quantity * 1000}},
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

// const transport = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'abc@gmail.com',
//       pass: 'abc1234!',
//     },
//   })

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


module.exports = router;
