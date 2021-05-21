
import { Container, CssBaseline, Grid, makeStyles, Typography, ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, FormHelperText, FormControl, ButtonGroup } from '@material-ui/core'


import React, { useState,useEffect } from 'react'


import { useDispatch } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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

    const [image,setImage] =useState("")
    const [post, setPost] = useState({}) //sh 214
    const postId = props.match.params.postId

    const [detailImage, setDetailImage] = useState([]) //상세이미지추가
    const [voices, setVoices] = useState([]) //음성리뷰추가
    const [texts, setTexts] = useState([]) //일반리뷰추가
    const moment=require('moment');
     useEffect(() => {
 
        axios.get(`/api/post/id?id=${postId}`)
        .then(response => {
            // console.log(response.data.post[0])
            setPost(response.data.post[0])
            setImage(response.data.post[0].image) //sh 214  // 281~284
        })

        axios.post('/api/review/getVoiceReviews', {post:postId})
          .then(response => {
            if (response.data.success) {
              setVoices(response.data.voices)
          } else {
              alert('Failed to get Voice Review')
          }
        })

        axios.post('/api/review/getTextReviews', {post:postId})
          .then(response => {
            if (response.data.success) {
              setTexts(response.data.texts)
          } else {
              alert('Failed to get Text Review')
          }
        })

     }, [])
  const clickVoice = function(file){
    var audioFile = new Audio(file);
    audioFile.autoplay = false;
    audioFile.volume = 0.5;
    audioFile.loop=
    audioFile.play(); 
  }
  const voiceCards = voices.map((voice, index) => {
  return(
    <Box>
      아제발
      <audio
     controls
    >
      <source src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3" type="audio/mp3" />

    </audio>
    {voice.filepath}
        </Box>
    // <ButtonBase onClick={clickVoice(voice.filepath)}>
    // < AudiotrackOutlinedIcon fontSize='large'/>
    // <span>작성자 : {voice.author.name} __ {moment(voice.InputTime).format("YYYY년M월d일")} </span>

    // </ButtonBase>

    )
  })
     
    const handleChangeIndex = (index) => {
        setValue(index);
      };

    const history = useHistory();
    
    //sh-254 장바구니 누르면 해당 데이터를 Cart에 넣고 해당 유저의 장바구니 페이지로 이동
    const clickCartHandler = () => {
      
      let user = props.user
            let body = {
                post: postId,
                size: size,
                quantity: quantity
            }
            console.log(body)
            axios.post('/api/cart/create',body)
            .then(response => {
                if(response.data.status) {
                  history.push({
                    pathname: '/shoppingbascket',
                    state:{user:user}
                  })
                }
            })
    }
    
//이거 일단 보류.. 구매하는 코드임. 근데 사실 여기서는 의미없는데, 나중에 구매할때 사용할 것.
  // const  clickPurchaseHandler = () => {
    
  //   if(props.user.userData.isAuth) {
  //           let body = {
  //               post: postId,
  //               size: size,
  //               quantity: quantity,
  //               price: post.pprice
  //           }
  //          // console.log(body)
  //           axios.post('/api/purchase/create',body)
  //           .then(response => {
  //               if(response.data.success) {
  //                 //결제 페이지로 이동.
  //               }
  //           })
  //       }else {
  //           alert('로그인이 필요합니다.')
  //           history.push('/login')   
  //           }
  // }
    



    //sh (Quantity , Size  175-201 해당 기능 232-238 // 244-246)   ( 상품 추가 이미지 280 ) (대표이미지 수정)
    const[quantity,setQuantity] = useState(1)
 
    const handleMinusQuantityChange = (event) => {
      if(quantity >1) {
        setQuantity(quantity - 1)
      }
    }

    const handlePlusQuantityChange =(event) => {
      setQuantity(quantity+1)
    }

    const [size, setSize] = React.useState('M');
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

      
    <Container component='main' maxWidth="lg" className={classes.container}>
        <CssBaseline />
        <Typography component="div" style={{height: '100vh' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src= {image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography component="h1" variant ="h4" > 
                 {post.title}
                </Typography>
                별점 4.5점 / 총 13개의 상품 리뷰가 있습니다.
                <Divider />
                <List component="nav" >
                <ListItem><ListItemText primary=
                {post.pprice}원 />
                </ListItem>
                </List>

                <FormControl required className={classes.formControl}>
                <Typography variant ="h6" > 
                사이즈
                </Typography>
                <ToggleButtonGroup value={size} exclusive onChange={handleSizeChange}>
                <ToggleButton variant="outlined"  value = "S" style={{fontSize:'1rem'}} aria-label="S사이즈">S</ToggleButton>
                <ToggleButton variant="outlined"  value = "M" style={{fontSize:'1rem'}} aria-label="S사이즈">M</ToggleButton>
                <ToggleButton variant="outlined"  value = "L" style={{fontSize:'1rem'}} aria-label="L사이즈">L</ToggleButton>
                <ToggleButton variant="outlined"  value = "XL" style={{fontSize:'1rem'}} aria-label="XL사이즈">XL</ToggleButton>
                <ToggleButton variant="outlined"  value = "XXL" style={{fontSize:'1rem'}} aria-label="XXL사이즈">XXL</ToggleButton>
                </ToggleButtonGroup>
                <br />
                <Typography variant ="h6" > 
                수량
                </Typography>
                <ButtonGroup>
                <Button variant="outlined" style={{fontSize:'1rem'}} onClick= {handlePlusQuantityChange} aria-label="더하기">+</Button>
                <Button variant="outlined" style={{fontSize:'1rem'}}  aria-label="1개">{quantity}</Button>
                <Button variant="outlined" style={{fontSize:'1rem'}} onClick= {handleMinusQuantityChange} aria-label="빼기">-</Button>
                </ButtonGroup>
                <br />
            </FormControl>
            <ButtonGroup variant="text" fullWidth="true">
                <Button variant="outlined" style={{fontSize:'1.2rem'}} aria-label="장바구니" onClick={clickCartHandler}>장바구니</Button>
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
        <Box width="100%"><img className={classes.img} alt="complex" src={image[1]} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={image[2]} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={image[3]} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={image[4]} /></Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {voiceCards}
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