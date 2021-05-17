import { Container, CssBaseline, Grid, makeStyles, Typography, ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, FormHelperText, FormControl, ButtonGroup } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState,useEffect } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux';

import { registerUser } from '../../../_action/user_actions'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StarIcon from '@material-ui/icons/Star';


import ex1 from './img/1.jpg'
import ex2 from './img/2.jpg'
import ex0 from './img/0.png'
import ex4 from './img/4.png'
import red from './img/red.png';

import axios from 'axios'
//image json파일로 만들어서 코드 map 사용, 빼서 사용하면 일일이 하나씩 import할필요없음

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop : theme.spacing(8),
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },

    root: {
        flexGrow: 1,
    },
    container: {
        padding: theme.spacing(10),
        paddingTop : theme.spacing(15)
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100vh',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

export default function PostDetailPage(props) {
    const classes = useStyles()
    const dispatch = useDispatch();

    const [post, setPost] = useState({})
    
   const postId = props.match.params.postId
    useEffect(() => {

        axios.get(`/api/post/get/posts_by_id?id=${postId}&type=single`)
        .then(response => {
            console.log(response.data.post[0])
             setPost(response.data.post[0])
        })
    }, [])
  
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [size, setSize] = React.useState('');
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    return (
    <Container component='main' maxWidth="lg" className={classes.container}>
        <CssBaseline />
        <Typography component="div" style={{height: '100vh' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src= {red} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography component="h1" variant ="h4" > 
                {/* {post.title}  */}
                빨간색 꽃무늬 원피스
                </Typography>
                별점 4.5점 / 총 13개의 상품 리뷰가 있습니다.
                <Divider />
                <List component="nav" >
                <ListItem><ListItemText primary=
                //{post.pprice} />
                "49000원" />
                </ListItem>
                </List>
                <FormControl required className={classes.formControl}>
                <Typography variant ="h6" > 
                사이즈
                </Typography>
                <ButtonGroup>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="XS사이즈">XS</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="S사이즈">S</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="L사이즈">L</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="XL사이즈">XL</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="XXL사이즈">XXL</Button>
                </ButtonGroup>
                <br />
                <Typography variant ="h6" > 
                수량
                </Typography>
                <ButtonGroup>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="1개">1</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="2개">2</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="3개">3</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="4개">4</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="5개">5</Button>
                <Button style={{fontSize:'1rem', border:'solid'}} aria-label="대량구매창으로 넘어가기">대량구매</Button>
                </ButtonGroup>
                <br />
            </FormControl>
            <ButtonGroup variant="text" fullWidth="true">
                <Button style={{fontSize:'1.2rem', border:'solid'}} size="large" aria-label="장바구니" href="/shoppingbascket">장바구니</Button>
                <Button style={{fontSize:'1.2rem', border:'solid'}} size="large" aria-label="바로구매">바로구매</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
        <br />
        <Paper className={classes.root} >
          <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                centered
          >
          <Tab style={{fontSize:'1.2rem'}} label="상품 상세 보기" />
          <Tab style={{fontSize:'1.2rem'}} label="음성리뷰 3개 듣기" />
          <Tab style={{fontSize:'1.2rem'}} label="기본리뷰 10개 보기" />
          </Tabs>
        </Paper>
        <Box component="span" m={1}><Button /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex0} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex4} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex1} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex2} /></Box>
        

        </Typography>
        

    </Container>

    )
}