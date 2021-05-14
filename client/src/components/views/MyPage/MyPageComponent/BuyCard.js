import {  Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogTitle, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../_action/post_actions';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 230,
      marginBottom: 10,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
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


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
    }

    const deleteHandleSubmit = (e) => {
        e.preventDefault();

        console.log(postId)

        // let dataToSubmit = {
        //     _id: values.id,
        // }
        // dispatch(deletePost(dataToSubmit))
        //     .then(response => {
        //         if (response.payload.success) {
        //           console.log("성공")
        //         } else {
        //             alert("Failed to sign up")
        //         }
        //     })
    }


    const bull = <span className={classes.bullet}>•</span>;
    return(
        <div>
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Grid container>
                <Grid item xs={12} sm={9}>
                    <CardHeader
                        title={
                            <Typography variant= "h6" color="#000000" style={{marginBottom: '12px'}}>
                                배송완료 {bull} 4/26(월) 도착
                            </Typography>
                        }
                        action={
                            <IconButton aria-label="settings" onClick={handleClickOpen}>
                                <DeleteOutlined />
                            </IconButton>
                        }
                    />
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"주문 내역을 삭제 하시겠습니까?"}</DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose} value='removeNo' color="primary">
                                아니오
                            </Button>
                            <Button onClick={handleClose,deleteHandleSubmit}  value='removeYes' color="primary" autoFocus>
                                네
                            </Button>
                        </DialogActions>
                    </Dialog>
                    
                    <Grid container>   
                    <Grid item xs={3} sm={3}>
                        <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/120x120ex/image/retail/images/2019/12/28/10/7/01178ffe-33c8-4019-bc71-27a4fc55e8d6.jpg" />
                    </Grid>
                    <Grid item xs={9} sm={9}>
                            <Typography style={{marginBottom: '12px'}}>
                                에프씨팩토리 에브리데이 클린미세먼지 방역마스트 [kf94 50개], 1팩 50매입 주문내역 길게 적기
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                41,500원 {bull} 1개
                            </Typography>
                    </Grid>
                    </Grid>    
                    
                    
                </Grid>
                <Grid item xs={12} sm={3}>
                <CardActions>
                    <Button variant="outlined" className={classes.button}>배송조회</Button>
                </CardActions>
                <CardActions>
                    <Button variant="outlined" className={classes.button} >교환, 반품 신청</Button>
                </CardActions>
                <CardActions>
                    <Button variant="outlined" className={classes.button} onClick={() => history.push('/myPage/review')}>리뷰 작성하기</Button>
                </CardActions>
                <CardActions>
                    <Button variant="outlined" className={classes.button}>판매자 문의하기</Button>
                </CardActions>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
        
        </div>
    )
}


