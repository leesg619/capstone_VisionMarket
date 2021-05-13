import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function MediaCard({post}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{border:'solid', borderColor:'grey'}}>
        <CardContent>
          <Typography variant="h5" component="h2" aria-label={post.title}>
            {post.title}
          </Typography>
          <Typography
            display="inline"
            variant="body2"
          >
            {post.price}
          </Typography>
        </CardContent>
      <CardActions className={classes.button}>
      <CardMedia
          style={{height:"200px", width: "200px"}}
          image={post.imgSrc}
          title={post.title}
        />
      </CardActions>
      <CardActions className={classes.button}>
      <Button style={{fontSize:'1rem', textDecoration: 'underline', textUnderlinePosition: 'under'}} aria-label={post.keyword} > #{post.keyword} </Button>
      <Button style={{fontSize:'1rem', textDecoration: 'underline', textUnderlinePosition: 'under'}} aria-label={post.keyword2}> #{post.keyword2} </Button>
      <Button style={{fontSize:'1rem', textDecoration: 'underline', textUnderlinePosition: 'under'}} aria-label={post.keyword3}> #{post.keyword3} </Button>
      </CardActions>
      <CardActions className={classes.button}>
        <Button size="large" href="/postdetail" aria-label='상세보기'>상세보기</Button>
        <Button size="large" aria-label='장바구니'>장바구니</Button>
      </CardActions>
    </Card>
  );
}