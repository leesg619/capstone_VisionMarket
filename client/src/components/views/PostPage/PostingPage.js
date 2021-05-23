import React, { useState, useEffect } from 'react'
import { Container, Grid, TextField, makeStyles } from "@material-ui/core"
import Axios from 'axios'
import Dropzone from 'react-dropzone'
import { Title, PlusOne } from '@material-ui/icons'
import {useDispatch, connect} from 'react-redux'
import {USER_AUTH} from '../../../_action/types'

const useStyle = makeStyles((theme) => ({
    root : {
        justifyContent : 'center',
        alignItems : 'center',
        alignContent : 'center',
    }
}))



function PostingPage(props) {
    const {userData} = props.user
    console.log(userData)

    const classes = useStyle();

    const [Title, setTitle] = useState('')
    const [FilePath, setFilePath] = useState([])
    const [Filename, setFilename] = useState([])
    const [Content, setContent] = useState('')
    const [Author, setAuthor] = useState(userData.email)
    const [Pcategory, setPcategory] = useState()
    const [Purpose, setPurpose] = useState(0)
    const [Pcolor, setPcolor] = useState()
    const [Psales, setPsales] = useState()
    const [Pcompany, setPcompany] = useState()
    const [Price, setPrice] = useState(0)
    const [Stock, setStock] = useState()
    const [Size, setSize] = useState()


    const onDrop = (files) => {
        let formData = new FormData;
        const config = {
            header : {'content-type' : 'multipart/form-data'}
        }
        formData.append('file', files[0])

        Axios.post('/api/post/uploads/files', formData, config)
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                let filepath = FilePath
                filepath.push(response.data.url)
                setFilePath(filepath)
                setFilename(response.data.fileName)
            }
            else {
                
            }

        })
    }

    const onTitleChange = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onContentChange =(e) => {
        setContent(e.currentTarget.value)
    }

    return (
        <Container className={classes.root} component='body' >
            <Grid className={classes.root} container >
                <Grid item xs={12}>
                    <h2>판매 게시물 업로드</h2>
                </Grid>
                <Grid item xs={12}>
                    <Dropzone
                        onDrop = {onDrop}
                        multiple = {true}
                        maxSize = {100000000000}
                    >
                        {({getRootProps, getInputProps}) => (
                            <div style={{width: '300px', height : '240px', border:'1px solid lightgray'
                            , alignItems:'center', justifyContent : 'center'}} {...getRootProps()}>
                                <input {...getInputProps()} />
                                <PlusOne  />
                            </div>
                        )}
                    </Dropzone>
                </Grid>
                <Grid item xs={6}>
                    <label>제목</label>
                    <TextField variant='outlined' onChange={onTitleChange} type="text" aria-label="제목 입력 칸"  />
                </Grid>
                <Grid item xs={6}>
                    <label>내용</label>
                    <TextField variant="outlined" onChange={onContentChange} type="text" aria-label="내용 입력 칸" />
                </Grid>
            </Grid>
            </Container>
    )
}

export default PostingPage
