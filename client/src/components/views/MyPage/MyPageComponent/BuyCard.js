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
    const moment = require('moment');


    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [purchase, setPurchase] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
    }

   const deletePurchaseHandler = () => {

    if(window.confirm("해당 상품 주문을 취소 하시겠습니까??") == true) {
    let body = {
        purchaseId:props._id,
        quantity:props.quantity
    }
    axios.post('api/purchase/delete', body)
    .then(response => {
        if(response.data.success) {
            props.deletePurchaseItem(body.purchaseId);
          }
    });
}
}
    console.log(props)

    return(
        <div>
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Grid container>
                <Grid item xs={12} sm={9}>
                    <CardHeader
                        title={
                            <Typography variant= "h6" color="#000000" style={{marginBottom: '12px'}}>
                       주문일: {moment(props.purchaseDate).format("YYYY년M월DD일")} / {moment(props.purchaseDate).add(3, 'days') > moment() ? "배송중":"배송완료"}
                            </Typography>
                        }
                    />
                    <Grid container>   
                    <Grid item xs={3} sm={3}>
                        <img src= {props.post.image[0]}  style ={{width:350,height:300}}/>
                    </Grid>
                    <Grid item xs={9} sm={9}>
                            <Typography style={{marginLeft: '180px',marginBottom: '12px'}}>
                              {props.post.content}
                            </Typography>
                            <Typography className={classes.pos} style={{marginLeft: '180px'}}>
                                {props.quantity}개, {props.total}원
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
                <Button onClick = {deletePurchaseHandler}style={{fontSize:'1rem'}}>주문취소</Button>
                    <Button style={{fontSize:'1rem'}}>배송조회</Button>
                    <Button style={{fontSize:'1rem'}} href={`/reviewVoiceWrite/${props.post._id}`} >음성리뷰작성</Button>
                    <Button style={{fontSize:'1rem'}} href={`/reviewWrite/${props.post._id}`} >일반리뷰작성</Button>
                    <Button style={{fontSize:'1rem'}} href='/qnaPage'>문의하기</Button>
                </ButtonGroup>
                </CardActions>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
        </div>
    )
}