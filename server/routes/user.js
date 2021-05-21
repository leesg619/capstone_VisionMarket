const express = require('express');
const router = express.Router();
const { User } =require('../models/User')
const { auth } = require("../middlewares/auth");

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
})

router.post("/register", (req, res) => {
    var user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.status(400).json({success : false, err});
        return res.status(200).json({success : true, doc});
    })
})

router.post("/login", (req, res) => {
    User.findOne({email : req.body.email}, (err, user) => {
        if (!user) {
            return res.status(400).json({success : false, msg : "이메일을 확인해주세요"})
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(err) return res.status.apply(400).json({success : false, err})
            if (!isMatch) {
                res.status(400).json({success : false, msg : "패스워드를 확인해주세요"})
            }
            user.generateToken((err, user) => {
                if (err) return res.status.json({success : false, err});
                res.cookie("w_auth", user.token);
                res.cookie("w_authExp", user.tokenExp)
                .status(200).json({loginSuccess : true, userId : user._id})
            })
        })
    })
})

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({_id : req.user._id, token : req.token}, {token : "", tokenExp : ""}, (err, user) => {
        if (err) res.status(400).json({success : false, err});
        res.status(200).json({success : true})
    })
})

//유저 보유 포인트 조회
router.get("/point",auth, async (req,res) => {
    let userId = req.user._id

    try {
        let result = await User.findOne({_id: userId});
        return res.status(200).json({success: true, "result": 'Success!',result})

    }catch(err) {
        return res.status(200).json({ "status": false, "result": "Request Failed!" })
    }
    
})

module.exports = router;