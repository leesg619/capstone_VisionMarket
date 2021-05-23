import React, {useState, useEffect} from 'react'
import {Container, Grid} from '@material-ui/core'
import axios from 'axios'

function OCRpage(props) {
    const ditectPost = props.postId

    if (!ditectPost) {
        throw Error("Props로 받아야할 PostID가 없습니다")
    }
    const [DitectImage, setDitectImage] = useState('')

    useEffect(() => {
        
    }, [])

    return (
        <Container component="body">

        </Container>
    )
}

export default OCRpage
