import { Button, Card, CardActions, CardContent, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    text:{
        marginBottom: 3
    },
    button: {
        justifyContent: 'center',
      }
  });

export default function BuyCard(){
    const classes = useStyles();
    return(
        <Container style={{paddingTop:'2%'}}>
        <Card className={classes.root}>
            <CardContent>
                    <Typography variant="h5" className={classes.text}>홍길동</Typography>
                    <Typography className={classes.text}>경기도 군포시 당동 124 주공 2단지 아파트 123동 4567호</Typography>
                    <Typography className={classes.text}>010-1234-5678</Typography>
                    <Typography className={classes.text}>문 앞</Typography>
            </CardContent>
            <CardActions className={classes.button}>
                <Button style={{fontSize:'1.2rem'}} size="large" aria-label='개인정보수정하기'>
                수정</Button>
            </CardActions>
        </Card>
        </Container>
    )
}