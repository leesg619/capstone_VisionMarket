import React, {useState, useEffect} from 'react'
import {Container, Grid} from '@material-ui/core'
import axios from 'axios'
import { NaverOCR_KEY } from '../../../OCRkey'

const path = require('path')


function OCRpage(props) {
    const { ditectPost } = props
    const { imageData } = props



    /*  OCR 이미지 날리는 방식
{
    "images": [
      {
        "format": "jpeg",
        "name": "medium",
        "data": null,
        "url": "https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/retail/images/615119903589168-4faaa5f6-1722-4ee1-bd1b-d210cf45d900.jpg"
      }
    ],
    "lang": "ko",
    "requestId": "string",
    "resultType": "string",
    "timestamp": {{$timestamp}},
    "version": "V1"
} */

    if (!ditectPost) {
        throw Error("Props로 받아야할 PostID가 없습니다")
    }
    if (!imageData) {
        throw Error("props로 받야할 이미지가 없습니다.")
    }

    useEffect(() => {
        axios.get(`/api/post/${ditectPost}`)
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                setpostData(response.data.post)

                var variables = {
                    "images": [
                        {
                          "format": "jpeg",
                          "name": "medium",
                          "data": null,
                          "url": `http://localhost:5000/${DitectImage}`
                        }
                      ],
                      "lang": "ko",
                      "requestId": "string",
                      "resultType": "string",
                      "timestamp": Date.now(),
                      "version" : "V1"
                }
            }
            else {
                alert('postId를 잘못 받아왔습니다.')
            }
        })
    }, [])

    const [postData, setpostData] = useState()
    const [DitectImage, setDitectImage] = useState(imageData)


    return (
        <Container component="body">

        </Container>
    )
}

export default OCRpage
