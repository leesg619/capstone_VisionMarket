import { Button, Card, CardContent, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 210,
      marginBottom: 10,
      
    },
    text:{
        marginBottom: 5
    }
  });

export default function BuyCard(){
    const classes = useStyles();
    return(
        <Container>
        <Card className={classes.root} elevation={3}>
            <CardContent>
                    <Typography variant="h5" className={classes.text}>홍길동</Typography>
                    <Typography className={classes.text}>경기도 군포시 당동 124 주공 2단지 아파트 123동 4567호</Typography>
                    <Typography className={classes.text}>010-1234-5678</Typography>
                    <Typography className={classes.text}>문 앞</Typography>
                    <Button variant="outlined">수정</Button>
            </CardContent>
        </Card>
        
        </Container>
    )
}