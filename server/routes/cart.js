const express = require('express');
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {Cart} = require('../models/Cart');
const{Post} = require('../models/Post')



//유저id로 해당 유저의 카트 상품 목록 추출
//추출한 목록 각각의 Post정보를 가져오기
//post에 관한 가격 반환
router.post('/cartList',auth, async  (req,res) => {

    try {
       let shoppingList = await  Cart.find({user: req.user._id}).populate('post')
        return res.status(200).json({success: true, "result": 'Success!',shoppingList})
    }catch(err) {
        res.status(200).json({ "status": false, "result": "Cart Create Failed!" })
    }
})

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
router.delete('/',auth, async (req,res) => {

    let cartId = req.body.cartId
try {    
    let result = await Cart.findOneAndDelete({ "_id" : cartId} );
      return res.status(200).json({success: true, "result": 'Success!',result})

    }catch(err) {
        return res.status(200).json({ "status": false, "result": "Request Failed!" })
    }

})

//한 유저의 카트 목록 다 삭제.
router.delete('/allCart',auth, async (req,res) => {
    try {
        await  Cart.deleteMany({'user': req.user._id});
        return res.status(200).json({success: true, "result": 'Success!'})
    }catch(err) {
        return res.status(200).json({ "status": false, "result": "Request Failed!" })
    }
})


module.exports = router;