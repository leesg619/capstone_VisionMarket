import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({post}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea href={`/postDetail/${post._id}`}>
   
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
        </CardContent>
        
      </CardActionArea>
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