const express = require("express");
const router = express.Router();
const { Search } = require('../models/Search')
const { auth } =require('../middlewares/auth')

router.post('/register', (req, res) => {
    var search = new Search(req.body);

    search.save((err, doc) => {
        if (err) return res.status(400).json({success : false, err})
        return res.status(200).json({success : true, search : doc})
    })
})

router.post('/user/data', auth, (req, res) => {
    Search.find({seacher : req.user._id}, (err, searchs) => {
        if (err) return res.status(400).json({success : false, err})
        return res.status(200).json({success : true, searchs : searchs})
    })
})

//


module.exports = router