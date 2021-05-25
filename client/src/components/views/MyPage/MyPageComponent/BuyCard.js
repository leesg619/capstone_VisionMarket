import {  Button, Card, CardActions, CardContent, CardHeader ,ButtonGroup, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 10,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        minWidth: 160,
        left: 10,
        bottom: 5,
    },
  });

export default function BuyCard(props){


console.log(props)
    const postId = props.postId

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()

    const [open, setOpen] = useState(false);
    const [purchase, setPurchase] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
    }
    const mongoose = require('mongoose');
    const post = mongoose.Types.ObjectId('609a7ea8e8ffe95ab80c19e2');//props.match.params.postId
    const purchase1 = props.purchase;
    console.log(purchase1);
    console.log(post);
    return(
        <div>
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Grid container>
                <Grid item xs={12} sm={9}>
                    <CardHeader
                        title={
                            <Typography variant= "h6" color="#000000" style={{marginBottom: '12px'}}>
                                4월 26일 월요일 / 배송완료
                                
                            </Typography>
                        }
                    />
                    <Grid container>   
                    <Grid item xs={3} sm={3}>
                        <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/120x120ex/image/retail/images/2019/12/28/10/7/01178ffe-33c8-4019-bc71-27a4fc55e8d6.jpg" />
                    </Grid>
                    <Grid item xs={9} sm={9}>
                            <Typography style={{marginBottom: '12px'}}>
                                posttitle 
                            </Typography>
                            <Typography className={classes.pos} >
                                1개, 41500원
                            </Typography>
                    </Grid>
                    </Grid>         
                </Grid>
                <Grid item xs={12} sm={3}>
                <CardActions>
                <ButtonGroup
                    orientation="vertical"
                    fullWidth
                >  
                    <Button style={{fontSize:'1rem'}}>주문취소</Button>
                    <Button style={{fontSize:'1rem'}}>배송조회</Button>
                    <Button style={{fontSize:'1rem'}} href={`/reviewVoiceWrite/${post}`} >음성리뷰작성</Button>
                    <Button style={{fontSize:'1rem'}} href={`/reviewWrite/${post}`} >일반리뷰작성</Button>
                    <Button style={{fontSize:'1rem'}}>문의하기</Button>
                </ButtonGroup>
                </CardActions>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
        </div>
    )
}


