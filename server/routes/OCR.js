const express = require('express')
const router = express.Router()
const axios = require('axios')
const config = require('../config/key')

const FormData = require('form-data')
const Blob = require('Blob')

const fs = require('fs')
const path = require('path')

const { Post } = require('../models/Post')


router.post('/onlineimage/text/return', (req, res) => {
    let timestamp = new Date().getTime();
    var sumText = "";

    Post.findById(req.body.postId, (err, doc) => {
        if (err) return res.status(400).json({success : false, err})
        
        doc.image.map((image, key) => {
            if (image === req.body.imageUrl) {
                console.log(path.extname(image).substr(1, 4))
                
                var filenanme = image
                const headers = {
                    headers : {
                        "Content-Type" : "application/json",
                        "X-OCR-SECRET" : config.OCR_API_KEY
                    }
                }

                axios.post(config.OCR_API_URL, {
                    'lang' : "ko",
                    "requestId" : "string",
                    "timestamp" : timestamp,
                    "version" : "V2",
                    "images" : [
                        {
                            "format" : path.extname(filenanme).substr(1, 4),
                            "name" : "medium",
                            "data" : null,
                            "url" : filenanme
                        }
                    ]
                }, headers)
                .then(response => {
                    response.data.images[0].fields.forEach(element => {
                        console.log(element.inferText)
                        sumText += " " + element.inferText;
                    })

                    return res.status(200).json({success : true, sumText : sumText})
                })
            }
        })
        return res.status(400).json({success : false, err : "매치되는 이미지가 없습니다."})
    })
})

router.post('/localimage/text/return', (req, res) => {

    let timestamp = new Date().getTime();
    var sumText = "";

    Post.findById(req.body.postId, (err, doc) => {
        if (err) return res.status(400).json({ success: false, err })

        doc.image.map((image, key) => {
            if (image === req.body.imageUrl) {
                console.log(path.extname(image).substr(1, 4))
                var filename = image
                let formData = new FormData;

                // api에 정상적으로 데이터를 전달시키기 위한 조건
                // 문자인식을 할 언어 선택, requestId 조건
                // 현재 시간에 적합하게 신호를 주었는가
                // 사용하려는 OCR 버전은 몇인가
                // 이미지의 정보는 어떻게 되는가, 포맷과 임의의 이름 선정, 포맷은 확장자명
                var message = JSON.stringify({
                    "lang": "ko",
                    "requestId": "string",
                    "timestamp": timestamp,
                    "version": "V2",
                    "images": [
                        {
                            "format": path.extname(image).substr(1, path.extname(image).length - 1),
                            "name": "medium"
                        }
                    ],
                })

                // multipart/form-data, 즉 파일과 메시지를 일반적인 form으로 받아서 전달해줘야함
                // 첫번째, 위에 기재한 api 사용 요건에 따른 message
                formData.append('message', message)
                // 두번째, 받아온 파일 경로에 따른 파일을 Stream으로 읽어오기 (Clovar OCR은 Stream의 형태로만 읽어서 출력 가능)
                formData.append('file', fs.createReadStream(filename, { flags: 'r' }))

                // header부분을 config의 형태로 정해줌, 먼저 Content-Type은 파일과 메시지를 받아야하므로 multipart/form-data
                // boundary는 formData에 입력된 Data집합들의 고유의 키 값이라고 볼 수 있음, (바운더리 값이 서로 동일해야함)
                const configA = {
                    headers: {
                        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
                        "X-OCR-SECRET": config.OCR_API_KEY
                    }
                }
                // post방식으로 API에게 요청함, 여기서 필요한 것은 file과 message 정보를 가지고 있는 formData, 그리고 header영역을 가지고 있는
                // configA이다.
                axios.post(config.OCR_API_URL, formData, configA)
                    .then(response => {
                        // 이렇게 받아와진 데이터는 우선 이미지 하나에 대해서 받아오게 되므로, (이미지 하나에 대해서만 OCR을 원했기 때문)
                        // 하나의 이미지의 필드값이 가지고 있는 모든 값에 대해서 inferText, 즉 인식된 문자를 흩뿌린다.
                        // 추가적으로 인식된 문자와 지금 인식하려는 값에 대해서 체크박스 형태로 나타낼 수도 있다.
                        response.data.images[0].fields.forEach(element => {
                            console.log(element.inferText);
                            sumText += " " + element.inferText;
                        });
                        console.log(sumText)

                        return res.status(200).json({ success: true, sumText: sumText })
                    }

                    ).catch((err) => {

                        if (err) { console.log(err); return res.status(400).json({ success: false, err }) }

                    })

            }

        })
    })
}

)


module.exports = router