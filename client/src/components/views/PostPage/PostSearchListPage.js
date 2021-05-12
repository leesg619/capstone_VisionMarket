import { Grid, makeStyles, Typography, Box, Button} from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'

import Pagination from '@material-ui/lab/Pagination';
import { CardMedia, CardActions, CardContent, CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import PostCard from './PostCard';

import cloth1 from './img/cloth1.jpg';
import cloth2 from './img/cloth2.jpg';
import cloth3 from './img/cloth3.jpg';
import cloth4 from './img/cloth4.jpg';
import cloth5 from './img/cloth5.jpg';
import stussy from './img/stussy.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(10),
        justifyContent: 'center',
        justifyItems: 'center',
        align: 'center',
        justify: "center",
        alignItems: "center"
    },
    number: {
      justifyContent: 'center',
    }
}))


export default function PostSearchListPage(props) {
    const classes = useStyles()
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [size, setSize] = React.useState('');
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const posts = [
        {
          id: 0,
          price: 59000,
          imgSrc: stussy,
          title: 'stussy',
        },
        {
          id: 1,
          price: 120000,
          imgSrc: cloth1,
          title: 'FishTail Coat',
        },
        {
          id: 2,
          price: 69000,
          imgSrc: cloth2,
          title: 'SlimJeans',
        },
        {
          id: 3,
          price: 49000,
          imgSrc: cloth3,
          title: 'WhiteShirts',
        },
        {
          id: 4,
          price: 39000,
          imgSrc: cloth4,
          title: 'PigletTee',
        },
        {
          id: 5,
          price: 39000,
          imgSrc: cloth5,
          title: 'HawkTee',
        }
      ];
      

    return (
      <div className={classes.root}>
        <Grid item container direction="column" spacing={2}>
            <Grid item xs={1} />
            <Grid item xs={10}>
            <Box >
            <Grid container spacing={2} >
                {posts.map((post) => (
                <Grid
                    item
                    key={post.id}
                    lg={3}
                    sm={6}
                    xs={10}
                >
                <PostCard post={post} />
                </Grid>
                ))}
            </Grid>
            </Box>
        {/* <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={5} md={4}>
        <Card>
            <CardHeader
            title={"오리오오"}
            subheader={"오리오"}
            />
            <CardMedia style={{ height : "150px" }} image={cloth1}/>
            <CardContent>
            <Typography variant="body2" component="p">
            설명 <br /><br />
            </Typography>
            <Typography variant="body1" component="p" align="right" >
            별점
            </Typography>
          </CardContent>
        <CardActions className={classes.button}>
        <Button size="large">상세보기</Button>
        <Button size="large">장바구니</Button>
      </CardActions>
      </Card>
      </Grid>
      <Grid item xs={10} sm={5} md={4}>
          <Box className={classes.number}>
          <Pagination
          color="primary"
          count={10}
          size="large"
          />
          </Box>
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid> */}
      </Grid>
      <Grid item xs={1} />
      </Grid>
      </div>
       
    )}