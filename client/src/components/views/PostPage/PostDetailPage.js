
import { Container, CssBaseline, Grid, makeStyles, Typography, ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, FormHelperText, FormControl, ButtonGroup } from '@material-ui/core'

import TextField from '@material-ui/core/TextField'
import React, { useState,useEffect } from 'react'
import { LockOutlined, SlowMotionVideo, SortOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'

import { useDispatch } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import { useDispatch } from 'react-redux'
import {addCart} from '../../../_action/user_actions'

import { registerUser } from '../../../_action/user_actions'
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ex1 from './img/1.jpg'
import ex2 from './img/2.jpg'
import ex0 from './img/0.png'
import ex4 from './img/4.png'
import red from './img/red.png';

import axios from 'axios'
//image json파일로 만들어서 코드 map 사용, 빼서 사용하면 일일이 하나씩 import할필요없음

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop : theme.spacing(8),
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },

    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    container: {
        padding: theme.spacing(10),
        paddingTop : theme.spacing(10),
        justifyContent: 'center',
        alignContent: 'center'
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
    const theme = useTheme();

    const [post, setPost] = useState({})

    const handleChangeIndex = (index) => {
        setValue(index);
      };

    const history = useHistory();


    

    // href="/shoppingbascket"
    const clickCartHandler = () => {

        if(props.user.userData.isAuth) {
            let body = {
                post: postId,
                size: size,
                quantity: quantity
            }
            console.log(body)
            axios.post('/api/cart/create',body)
            .then(response => {
                if(response.data.success) {
                  alert('장바구니에 해당 상품을 추가했습니다.')
                }
            })
        }else {
            alert('로그인이 필요합니다.')
            history.push('/login')   
            }
    }
    
//이거 일단 보류.. 구매하는 코드임. 근데 사실 여기서는 의미없는데, 나중에 구매할때 사용할 것.
  const  clickPurchaseHandler = () => {
    
    if(props.user.userData.isAuth) {
            let body = {
                post: postId,
                size: size,
                quantity: quantity,
                price: post.pprice
            }
           // console.log(body)
            axios.post('/api/purchase/create',body)
            .then(response => {
                if(response.data.success) {
                  //결제 페이지로 이동.
                }
            })
        }else {
            alert('로그인이 필요합니다.')
            history.push('/login')   
            }
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
                <Button variant="outlined" style={{fontSize:'1rem'}} aria-label="S사이즈">S</Button>
                <Button variant="outlined" style={{fontSize:'1rem'}} aria-label="L사이즈">L</Button>
                <Button variant="outlined" style={{fontSize:'1rem'}} aria-label="XL사이즈">XL</Button>
                <Button variant="outlined" style={{fontSize:'1rem'}} aria-label="XXL사이즈">XXL</Button>
                </ButtonGroup>
                <br />
                <Typography variant ="h6" > 
                수량
                </Typography>
                <ButtonGroup>
                <Button variant="outlined" style={{fontSize:'1rem'}} aria-label="더하기">+</Button>
                <Button variant="outlined" style={{fontSize:'1rem'}} aria-label="1개">1</Button>
                <Button variant="outlined" style={{fontSize:'1rem'}} aria-label="빼기">-</Button>
                </ButtonGroup>
                <br />

            </FormControl>
            <ButtonGroup variant="text" fullWidth="true">
                <Button variant="outlined" style={{fontSize:'1.2rem'}} aria-label="장바구니" href="/shoppingbascket">장바구니</Button>
                <Button variant="outlined" style={{fontSize:'1.2rem'}}  aria-label="바로구매">바로구매</Button>
                </ButtonGroup>
            </Grid>
        </Grid> <br />
        <Divider />
        <br />
        <div className={classes.root}>
      <AppBar position="static" color="default">
          <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                centered
                variant="fullWidth"
          >
          <Tab style={{fontSize:'0.9rem'}} label="상세보기" {...a11yProps(0)} />
          <Tab style={{fontSize:'0.9rem'}} label="음성리뷰" {...a11yProps(1)} />
          <Tab style={{fontSize:'0.9rem'}} label="일반리뷰" {...a11yProps(2)} />
          </Tabs>
          </AppBar>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Box component="span" m={1}><Button /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex0} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex4} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex1} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex2} /></Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          음성리뷰창
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Typography variant="h6" style={{padding:'10px'}}>
        리뷰는 추천순으로 노출됩니다. 총 1개의 리뷰가 있습니다. <br />
        </Typography>
          <Card  variant="outlined">
        <CardContent>
        <Typography gutterBottom variant="h6">
          별점 5점 <br/> 
        </Typography>
        <Typography >
          키 170 / 몸무게 65 <br />
          옵션 : 라지 사이즈 [ 사이즈가 적당해요. ]<br />
          소재가 얇아서 더운 여름에도 가볍게 입고 다닐 것 같아요.
        </Typography>
      </CardContent>
      <CardActions>
        <Button aria-label="리뷰추천하기" variant="outlined" style={{fontSize:'1.1rem'}}>추천</Button>
        <Button aria-label="리뷰비추천하기" variant="outlined" style={{fontSize:'1.1rem'}}>비추천</Button>
        </CardActions>
        </Card>
        </TabPanel>
      </SwipeableViews>
          </div>
        </Typography>
    </Container>


    )
}