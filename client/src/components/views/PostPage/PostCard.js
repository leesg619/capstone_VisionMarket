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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({post}) {
  const history = useHistory()
  const classes = useStyles();
  return (

      <Card className={classes.root} style={{border:'solid', borderColor:'grey'}}>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" 
             onClick={() => {history.push({
              pathname:`/postDetail/${post._id}`
            })}}>
            {post.title}
          </Typography>
        </CardContent>
        
      <CardActions>
         <Typography
            
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {post.pprice}
          </Typography>
      
          <CardMedia
          style={{height:"150px", width: "150px"}}
          image={post.image}
          title={post.title}
        />
      </CardActions>
    </Card>
  );
}