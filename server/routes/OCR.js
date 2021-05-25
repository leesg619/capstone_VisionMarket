const express = require('express')
const router = express.Router()
const axois = require('axios')
const config = require('../config/key')

const path = require('path')

const { Post } = require('../models/Post') 
const { default: axios } = require('axios')




router.post('/text/return', (req, res) => {

    const headers  = {
        headers : {
            "Content-Type" : "application/json",
            "X-OCR-SECRET" : config.OCR_API_KEY
        }
    }
    
    let timestamp = new Date().getTime();
    let sumText = "";

    Post.findById(req.body.postId, (err, doc) => {
        if (err) return res.status(400).json({success : false, err})
        
        doc.image.map((image, key ) => {
            if (image === req.body.imageUrl) {
                console.log(path.extname(image))
                var file = 
                axios.post(config.OCR_API_URL, {
                    "images": [
                        {
                          "format": path.extname(image),
                          "name": "medium",
                          "url": `http://127.0.0.1:5000/${image}`
                        //   이미지가 아닌 파일로 전달해야함
                        }
                      ],
                      "lang": "ko",
                      "requestId": "string",
                      "resultType": "string",
                      "timestamp": timestamp,
                      "version" : "V1"
                }, headers, file)
                .then(response => {
                    response.data.images[0].fields.forEach(element => {
                        console.log(element.inferText);
                        sumText += " " + element.inferText;
                    })
                })
                
            }
        })

        return res.status(200).json({success : true, sumText : sumText})
    })
})


module.exports = router