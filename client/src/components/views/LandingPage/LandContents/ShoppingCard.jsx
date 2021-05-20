import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CardMedia, CardActions, CardContent, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
    button: {
      justifyContent :'center'
    },
  });

//F-31 장바구니 버튼 삭제 및 별점 삭제, WHY? 별점은 신상품일 경우 리뷰가 없어 필요없는 정보들이 될 것 같아서
const ShoppingCard = props => {
    const classes = useStyles();
    const { title, subtitle, description, imgSrc} = props;
    return (
        <Card>
            <CardHeader
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height : "150px" }} image={imgSrc}/>
      <CardContent>
        <Typography variant="body1">
            {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="large"  style={{fontSize:'1.2rem'}}>상세보기</Button>
      </CardActions>
    </Card>
    );
}

export default ShoppingCard;