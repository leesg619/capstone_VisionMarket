const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { Review } = require("../models/Review");

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
        if (ext !== '.m4a') {
            console.log('it is not voice file');
            return cb(res.status(400).end('only m4a is allowed'), false);
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


module.exports = router;