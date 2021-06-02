import React, { useState, useEffect } from 'react'
import { Container, Grid, makeStyles, Paper } from "@material-ui/core"
// import {} from 'react-redux'
import axios from 'axios'

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        width: '80%',
        alignContent: "center",
        justifyContent: "center"
    }

}))


function OCRresult(props) {

    const pictures = props.pictures
    const postID = props.postID

    console.log(pictures)

    if (!pictures) {
        throw Error("OCR을 위한 사진을 제대로 받아오지 못했습니다.")
    }
    if (!postID) {
        throw Error("OCR을 위한 포스트가 제대로 받아오지 못했습니다")
    }

    const [sumText, setSumText] = useState(['']);




    useEffect(() => {

        var sumTexts = [];

        // eslint-disable-next-line array-callback-return
        pictures.map(picture => {
            
            const variable = {
                imageUrl: picture,
                postId: postID
            }
            if (picture.indexOf('http')) {
                axios.post('/api/ocr/localimage/text/return', variable)
                    .then(response => {
                        if (response.data.success) {
                            console.log(response.data.sumText)
                            setSumText(response.data.sumText)
                        }
                        else {
                            alert('매치되는 이미지가 없습니다')
                        }
                    })
            }
            
            else {axios.post('/api/ocr/onlineimage/text/return', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.sumText)
                            setSumText(response.data.sumText)
                }
                else {
                    alert('매치되는 이미지가 없습니다.')
                }
            })}
                

        })

        setSumText(sumTexts);
        console.log(sumText)

    }, [])

    const classes = useStyle()

    return (
        <Container className={classes.root} component="body">
            <Grid container>
                <Grid item sm={6}>
                    {
                        pictures.map((picture, index) => {
                            if (picture.indexOf('http')) {
                                return (
                                    <img width="30%" src={`http://localhost:5000/${picture}`} alt={`OCR 대상사진 ${index}`} />

                                )
                            }
                            else {
                                return (
                                    <img width="30%" src={picture} alt={`OCR 대상사진 ${index}`} />
                                )
                            }
                        })
                    }
                </Grid>
                <Grid item sm={6}>
                    <div aria-label="이미지 문장 설명란">
                        
                        { sumText &&
                            Array.from(Array(1), (e, i) => {
                                return (
                                    <div key={i}>
                                        {sumText}
                                    </div>
                                )
                            })
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OCRresult
