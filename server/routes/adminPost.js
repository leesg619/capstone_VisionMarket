const express = require('express');
const router = express.Router()
const { AdminPost } = require('../models/AdminPost')
const path = require('path')
const multer = require('multer')

let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads/admin/page")
    },
    filename : (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    var ext = path.extname(file.originalname)
    if (ext !== ".jpg" && ext !== '.png' && ext !== '.gif' && ext !== '.jpeg') {
        cb(res.status(400).json({success : false, error : "Only image type can do"}))
    }
    cb(null, true)
}

const uploads = multer({storage : storage, fileFilter : fileFilter})

router.post('/find/correct/page', (req, res) => {
    AdminPost.find({category : {$regex:`^${req.body.pagename}`}}, (err, posts) => {
        if(err) return res.status(400).json({success : false, err})
        return res.status(200).json({success : true, posts : posts})
    })
})

router.post('/modify/post', (req, res) => {
    AdminPost.findOneAndUpdate({'_id' : req.body.postId, category : req.body.category}, (err, post) => {
        if (err) return res.status(400).json({success : false, err})
        return res.status(200).json({success : true, post : post})
    })
})

router.post('/save/post', (req, res) => {
    var adminPost = new AdminPost(req.body)
    
    adminPost.save((err, doc) => {
        if (err) return res.status(400).json({success :false, err})
        return res.status(200).json({success : true, postId : doc._id})
    })
})


module.exports = router