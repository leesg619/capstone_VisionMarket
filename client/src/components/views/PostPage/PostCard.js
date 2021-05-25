import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
  button: {
    justifyContent: 'center',
  }
});

//sh -63 postSearchList에서 상세보기 버튼 클릭 시, 해당 상품의 페이지로 이동
export default function MediaCard({post}) {
  const history = useHistory()
  const classes = useStyles();

  return (
    // F-36 Card borderColor 변경 및 가격 위치 변경하면서 사진 위치 가운데로 설정 200->250
    // F-53 상세보기, 장바구니 -> 상세보기 버튼만 남기는 방식
      <Card className={classes.root} style={{border:'solid', borderColor:'#505050'}} >
        <CardContent >
          <Typography variant="h5" component="h2" aria-label={post.title}>
            {post.title}
          </Typography>
          <Typography     
            variant="body1"
          >
            {post.pprice}원
          </Typography>
        </CardContent>
        <CardActions >
          <CardMedia
          style={{height:"250px", width: "250px", margin: 'auto'}}
          image={post.image[0]}
          title={post.title}
        />
      </CardActions>
      <CardActions className={classes.button}>
        <Button style={{fontSize:'1.2rem'}} size="large" aria-label='상세보기'
         onClick={() => {history.push({
          pathname:`/postDetail/${post._id}`
        })}}>상세보기</Button>
      </CardActions>
    </Card>
  );
}