const express = require('express');
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {Cart} = require('../models/Cart');




//상품 카트에 넣기
router.post('/create',auth, (req,res) => {
   
    const cart =  new Cart(req.body);
    cart.user = req.user._id
        cart.save((err) => {
            if(err) {  
                console.log(err);
                res.status(200).json({ "status": false, "result": "Cart Create Failed!" })
            
        }
            res.status(200).json({ "status": true, "result": 'Success!'})
        })
})


//상품 카트에서 빼기
router.delete('/delete',auth,(req,res) => {

    let post = req.body.post
    let user = req.user._id

    Cart.findOneAndDelete({ "post" : post , "user":user} )
    .exec((err,cart) => {
        if(err) return res.status(200).json({ "status": false, "result": "Request Failed!" })
        return res.status(200).json({success: true, "result": 'Success!',cart})
    })
})

module.exports = router;
