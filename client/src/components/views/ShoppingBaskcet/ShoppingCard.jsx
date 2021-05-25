import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import React, { useState } from 'react';

import axios from 'axios'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  pos: {
    marginBottom: 12,
  },
  window: {
    width: '55%',
  },
  windowDummy: {
    width: '5%',
  },
  window2: {
    width: '40%',
    textAlign: 'right'
  },
});

export default function ShoppingCard(props) {
  const classes = useStyles()

  //sh -42~ 73  => 83,87,88,95
const [postQuantity,setPostQuantity] = useState(props.quantity)

let post = {
  productName: props.post.title,
  imgSrc: props.post.image[0],
  productCount: postQuantity,
  productPrice: postQuantity * props.post.pprice
}


const handleMinusQuantityChange = () => {
  if(postQuantity >1) {
    setPostQuantity(postQuantity - 1)
  }
}

const handlePlusQuantityChange =() => {
  setPostQuantity(postQuantity+1)
}
const removeCartItem = () => {

  axios.delete('/api/cart/', {
    data: { // 서버에서 req.body.{} 로 확인할 수 있다.
      cartId: props._id 
  }})
  .then(response => {
    if(response.data.success) {
      console.log(response.data.result._id)
      props.deleteShoppingItem(response.data.result._id)
    }
  })
}



  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.window}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              상품명 : {post.productName}
            </Typography>
            <CardMedia
              style={{ height: "150px", width: "150px" }}
              image={post.imgSrc}
              title={post.productName}
            />
          </div>
          <div className={classes.windowDummy}></div>
          <div className={classes.window2}>
            <br />
            <Typography className={classes.pos} color="textSecondary">
              {post.productCount}개, 가격 {post.productPrice}원<br />
              <Button variant="contained" color="primary" onClick= {handlePlusQuantityChange} style={{ maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px' }}>+</Button>
        &nbsp;
        <Button variant="contained" color="primary" onClick= {handleMinusQuantityChange} style={{ maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px' }}>-</Button>
            </Typography>
            <Typography variant="body2" component="p">
              배송비 무료
        </Typography>
            <br />
            <div className={classes.flex}>
              <CardActions>
                <Button variant="contained" color="primary" size="medium" onClick ={removeCartItem}>삭제</Button>
              </CardActions>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}