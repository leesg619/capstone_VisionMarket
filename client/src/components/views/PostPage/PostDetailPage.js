import { Container, CssBaseline, Grid, makeStyles, Typography, ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, InputLabel, MenuItem, FormHelperText, FormControl, Select, TableBody } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState,useEffect } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'
import {addCart} from '../../../_action/user_actions'
import { registerUser } from '../../../_action/user_actions'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StarIcon from '@material-ui/icons/Star';


import ex1 from './img/1.jpg'
import ex2 from './img/2.jpg'
import ex0 from './img/0.png'
import ex4 from './img/4.png'

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
        paddingTop : theme.spacing(25)
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


    const [countClick, setCount] = useState(0);
    
    
    const clickHandler = () => {

        let body = {
            post: postId,
            size: size,
            quantity: quantity
        }
        console.log(body)
        axios.post('/api/cart/create',body)
        .then(response => {
            if(response.data.success) {
              console.log(response.data)
            }
        })
    }
    
    


    const[quantity,setQuantity] = useState()
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

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
            <Grid item xs={6} md={6}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src= {post.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={6} md={6}>
                <Typography component="h1" variant ="h4" > {post.title} </Typography>
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />  900개의 상품 리뷰
                <Divider />
                <List component="nav" >
                <ListItem><ListItemText primary={post.pprice} /></ListItem>
                <ListItem><ListItemText primary={post.pcompany} /></ListItem>
                <ListItem><ListItemText primary={post.pcolor} /></ListItem>
                </List>

                <FormControl required className={classes.formControl} >
                    <InputLabel id="demo-simple-select-required-label">Size</InputLabel>
                    <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value= {size}
                    onChange={handleSizeChange}
                    className={classes.selectEmpty}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                    <MenuItem value={"XL"}>XL</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    <Box component="span" m={1}><Button /></Box>
                    <TextField
                        id="standard-number"
                        label="Number*"
                        type="number"
                        value= {quantity}
                        onChange={handleQuantityChange}
                        InputLabelProps={{
                            shrink: true,
                    }}
                    />
                    <Box component="span" m={1}><Button /></Box>
                    <Button variant="outlined"  color="primary" onClick = {clickHandler}>장바구니</Button>
                    <Box component="span" m={1}><Button /></Box>
                    <Button variant="outlined" color="secondary">구매하기</Button>
            </FormControl>
  
            </Grid>

        </Grid>
        
            
        <Paper className={classes.root} >
          <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
          >
          <Tab label="상품 상세" />
          <Tab label="상품 리뷰" />
          <Tab label="배송/교환/반품안내" />
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