const express = require('express');
const router = express.Router();

const { AdminPost } = require('../models/AdminPost')

router.post('/admin/post', (req, res) => {
    AdminPost.find({})
})



module.exports = router;