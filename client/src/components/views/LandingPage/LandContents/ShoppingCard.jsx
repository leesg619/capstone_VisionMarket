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

const ShoppingCard = props => {
    const classes = useStyles();
    const { title, subtitle, description, imgSrc, star } = props;
    return (
        <Card>
            <CardHeader
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height : "150px" }} image={imgSrc}/>
      <CardContent>
        <Typography variant="body2" component="p">
            {description} <br /><br />
        </Typography>
        <Typography variant="body1" component="p" align="right" >
            {star}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="large">상세보기</Button>
        <Button size="large">장바구니</Button>
      </CardActions>
    </Card>
    );
}

export default ShoppingCard;