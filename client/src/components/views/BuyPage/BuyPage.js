import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import PayPage from '../Paymovement/PayPage';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import { useLocation } from 'react-router';
const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      padding: theme.spacing(12, 2),
    },
    title: {
      fontSize: 14,
    },
    flex: {
      display: 'flex',
      padding: '2px',
      alignItems: 'center',
      justifyContent: 'center'
    },
    pos: {
      marginBottom: 12,
    },
    window: {
      width: '55%',
      padding: '5px',
    },
    windowDummy: {
      width: '5%',
    },
    window2: {
      width: '40%',
      textAlign: 'right'
    },
  }));

export default function BuyPage(props) {
    const classes = useStyles();
    const [Paynow, setPaynow] = useState(false)
    const [image,setImage] =useState([])
    const [post, setPost] = useState({})
    const location = useLocation();

    console.log(props)
    useEffect(() => {
      axios.get(`/api/post/id?id=${location.state.data.post}`)
      .then(response => {
          console.log(response.data.post[0])
           setPost(response.data.post[0])
           setImage(response.data.post[0].image) //sh 214  // 281~284
      })
  }, [])

    const Payhandle = (e) => {
      e.preventDefault()

      setPaynow(true)
    }

    return(

<Grid item container >
  <Grid item xs={10} sm={8} justify="center" >
      <br />
      <Card className={classes.root}>
          <ShoppingCartIcon fontSize="Large" />


  <Card className={classes.root}>
          <CardContent>
              <div className={classes.flex}>
              <div className={classes.window}>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                  상품명 : {post.title}
                  </Typography>
                  <CardMedia
                  style={{ height: "150px", width: "150px" }}
                  image={image[0]}
                  title={post.title}
                  />
              </div>
          <div className={classes.windowDummy}></div>
          
          <div className={classes.window2}>
          <br />
          <Typography className={classes.pos} color="textSecondary">
              가격 {post.pprice}원<br />
          </Typography>
          <Typography variant="body2" component="p">
                배송비 무료
          </Typography>
          <Typography variant="body2" component="p">
                사이즈 : {location.state.data.size}
          </Typography>
          <Typography variant="body2" component="p">
                수량 : {location.state.data.quantity}
          </Typography>
              <br />
          </div>
      </div>
      </CardContent>
    </Card>

          <hr />
          <div className={classes.flex} style={{ fontSize: '0.9rem' }}>
              상품가격 {post.pprice * location.state.data.quantity}원 + 배송비 0원 = 총 주문금액 {post.pprice * location.state.data.quantity}원
          </div>
          <hr />
          <div className={classes.flex}>
              <Grid item xs={1} />
              <Button onClick={Payhandle} variant="contained" color="primary">
                  구매하기
                </Button>
          </div>
          {
              Paynow && <PayPage postId={post._id} price={post.pprice}  size={location.state.data.size} quantity = {location.state.data.quantity}/>
          }
      </Card>

  </Grid>

</Grid>
    )
}
