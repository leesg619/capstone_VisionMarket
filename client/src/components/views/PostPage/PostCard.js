import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {  useHistory } from "react-router";

//sh 62 원래는 이미지 카드 위에 title을 눌러서 상세보기 페이지로 이동했었으나, 이제 상세보기 버튼을 눌러서 이동하게..
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    width: 320,
    borderRadius: '15px',
  },
  media: {
    height: 140,
  },
  button: {
    justifyContent: 'center',
  }
});


//sh -63 postSearchList에서 상세보기 버튼 클릭 시, 해당 상품의 페이지로 이동
//
export default function MediaCard({post}) {
  const history = useHistory()
  const classes = useStyles();

  return (


      <Card className={classes.root} style={{border:'solid', borderColor:'grey'}}>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" aria-label={post.title}>
            {post.title}
          </Typography>
        </CardContent>
        
        <CardActions className={classes.button}>
         <Typography     
            color="textSecondary"
            display="inline"
            variant="body2"
          >
            {post.pprice}원
          </Typography>
          <CardMedia
         style={{height:"200px", width: "200px"}}
          image={post.image[0]}

          title={post.title}
        />
      </CardActions>
      <CardActions className={classes.button}>
      <Button style={{fontSize:'1rem', textDecoration: 'underline', textUnderlinePosition: 'under'}} aria-label={post.keyword} > #{post.keyword} </Button>
      <Button style={{fontSize:'1rem', textDecoration: 'underline', textUnderlinePosition: 'under'}} aria-label={post.keyword2}> #{post.keyword2} </Button>
      <Button style={{fontSize:'1rem', textDecoration: 'underline', textUnderlinePosition: 'under'}} aria-label={post.keyword3}> #{post.keyword3} </Button>
      </CardActions>
      <CardActions className={classes.button}>
        <Button size="large" aria-label='상세보기'
         onClick={() => {history.push({
          pathname:`/postDetail/${post._id}`
        })}}>상세보기</Button>
        <Button size="large" aria-label='장바구니'>장바구니</Button>
      </CardActions>
    </Card>
  );
}