import {  Button, Card, CardActions, CardContent, CardHeader ,ButtonGroup, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useState,useEffect } from 'react'




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



    const classes = useStyles();

    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
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
                                4월 26일 월요일 / 배송완료
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
                    <Button style={{fontSize:'1rem'}}>주문취소</Button>
                    <Button style={{fontSize:'1rem'}}>배송조회</Button>
                    <Button style={{fontSize:'1rem'}}>음성리뷰작성</Button>
                    <Button style={{fontSize:'1rem'}} href='reviewWrite'>일반리뷰작성</Button>
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


