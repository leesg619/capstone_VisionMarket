import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


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
  const classes = useStyles();
  const { productName, imgSrc, productCount, productPrice } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.window}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              상품명 : {productName}
            </Typography>
            <CardMedia
              style={{ height: "150px", width: "150px" }}
              image={imgSrc}
              title={productName}
            />
          </div>
          <div className={classes.windowDummy}></div>
          <div className={classes.window2}>
            <br />
            <Typography className={classes.pos} color="textSecondary">
              {productCount}개, 가격 {productPrice}원<br />
              <Button variant="contained" color="primary" style={{ maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px' }}>+</Button>
        &nbsp;
        <Button variant="contained" color="primary" style={{ maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px' }}>-</Button>
            </Typography>
            <Typography variant="body2" component="p">
              배송비 무료
        </Typography>
            <br />
            <div className={classes.flex}>
              <CardActions>
                <Button variant="contained" color="primary" size="medium">삭제</Button>
              </CardActions>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}