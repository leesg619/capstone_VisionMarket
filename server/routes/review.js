const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { Review } = require("../models/Review");
const { Post } = require("../models/Post");
const { User } = require("../models/User");
const { auth } = require("../middlewares/auth");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/reviews/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    
})

var upload = multer({ storage: storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp3') {
            console.log('it is not mp3 file');
            return cb(res.status(400).end('only mp3 is allowed'), false);
        }
        cb(null, true)
    }
}).single("file")


router.post("/uploadfiles", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

});


router.post("/uploadReview", (req, res) => {

    const review = new Review(req.body)

    review.save((err, doc) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })

});

//음성파일을 텍스트로변환
router.post("/transform", (req, res) => {

    // 음성정보 받아오기

    // 변환하여 저장하기

});


module.exports = router;