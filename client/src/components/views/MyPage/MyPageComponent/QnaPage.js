import { Box, Button, Card, CardContent, Container, Divider, Grid, Input, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Phone } from '@material-ui/icons';
const useStyles = makeStyles({
    root: {
      height: 180,
      minHeight: 180,
      marginBottom: 10,
    },
    pos: {
      marginBottom: 12,
    },
    BoxComponent:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        margin:'auto'
    },
    InputBoxComponent:{
        height:'240px',
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    }
  });

export default function QnaPage(props){
    const classes = useStyles();

    const [content, setContent] = useState("");//문의내용
    const [phone, setPhone] = useState("");//핸드폰번호
    const [user, setUser] = useState({});
    const userId=localStorage.getItem('userId');

    const handleChangeContent = (event) => {
        setContent(event.currentTarget.value)
    }

    const handleChangePhone = (event) => {
        setPhone(event.currentTarget.value)
    }

    useEffect(() => {
        axios.get(`api/users/auth`)
        .then(response =>{
            setUser(response.data);
            console.log(user.email);
        })
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();

        if (content === "" || phone === "") {
            return alert('문의내용 및 안내받을 휴대폰 번호를 입력해주세요.')
        }

        const variables = {
            email: user.email,
            content: content,
            phone: phone
        }

        axios.post('/api/purchase/qnaRequest', variables)
            .then(response => {
                if (response.data.success) {
                    alert('문의가 정상적으로 완료되었습니다.')
                    props.history.push('/order')
                } else {
                    alert('문의에 실패하였습니다.')
                }
            })

    }
    return(
        <div>
        <Container style={{paddingTop:'2%'}}>
        <Divider/>
        <br/>
        <form>
        <Divider/>
        <Box className={classes.InputBoxComponent}>
            <Grid container>
                <Grid item xs={12}>
                <Box style={{display:'flex'}}>
                    <TextField
                    id="outlined-multiline-static"
                    label="문의내용"
                    multiline
                    rows={8}
                    variant="outlined"
                    style={{ width:'1200px'}}
                    onChange={handleChangeContent}
                    value={content}
                />

                    </Box>
                    <br/>

                    <Box style={{display:'flex'}}>
                    <TextField
                    id="outlined-multiline-static"
                    label="전화번호"
                    multiline
                    rows={1}
                    variant="outlined"
                    style={{ width:'1200px'}}
                    onChange={handleChangePhone}
                    value={phone}
                />
                    </Box>
                </Grid>
            </Grid>
        </Box>

        <Box className={classes.BoxComponent}>
            <Button onClick={onSubmit}variant="outlined" style={{fontSize:'1.2rem', width:'120px', marginTop:'20px', marginBottom:'20px'}}>등록하기</Button>
        </Box>
        </form>
        </Container>
        
        </div>
    )
}