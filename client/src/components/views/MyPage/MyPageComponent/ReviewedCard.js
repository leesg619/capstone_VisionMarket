import { Button, Card, CardActions, CardContent, ButtonGroup, Grid, makeStyles, Typography } from '@material-ui/core'
import { CancelScheduleSend } from '@material-ui/icons';
import React, { useState } from 'react'

const useStyles = makeStyles({
    root: {
      marginBottom: 10,
    },
  });

export default function CancelCard(){
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
    }

    return(
        <Card className={classes.root} elevation={3}>
        <CardContent>
                <Grid container spacing={1}>
                <Grid item xs={12} sm={9}>
                    <Grid container justify='center'>   
                    <Grid item xs={4} sm={2}>
                        <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/120x120ex/image/retail/images/2019/12/28/10/7/01178ffe-33c8-4019-bc71-27a4fc55e8d6.jpg" />
                    </Grid>
                    <Grid item xs={8} sm={10}>
                            <Typography style={{marginBottom: '12px'}}>
                                에프씨팩토리 에브리데이 클린미세먼지 방역마스트 [kf94 50개], 1팩 50매입 주문내역 길게 적기
                            </Typography>
                            <Typography >
                                리뷰 : 너무 좋아요 !! <br/>
                                파워디지몬 파워레인저 <br/>
                                방가방가햄토리
                            </Typography>
                    </Grid> 
                    </Grid>     
                </Grid>
                <Grid item xs={12} sm={3}>
                <CardActions >
                <ButtonGroup
                    orientation="vertical"
                    fullWidth
                >
                    <Button aria-label='리뷰수정하기' style={{fontSize:'1rem'}}>수정</Button>
                    <Button aria-label='리뷰삭제하기' style={{fontSize:'1rem'}}>삭제</Button>
                </ButtonGroup>
                </CardActions>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}