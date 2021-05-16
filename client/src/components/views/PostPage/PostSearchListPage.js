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
        //paddingTop: theme.spacing(10),
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
    const classes = useStyles();


    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    // 페이지 표시

    const [page, setPage] = React.useState(1);
    
    const handleChange = (event, value) => {
      setPage(value);
    };

    // const [size, setSize] = React.useState('');
    // const handleSizeChange = (event) => {
    //     setSize(event.target.value);
    // };

    const posts = [
        {
          id: 0,
          price: 59000,
          imgSrc: stussy,
          title: 'stussy',
          keyword: '검은색',
          keyword2: '반팔티',
          keyword3: '여름'
        },
        {
          id: 1,
          price: 120000,
          imgSrc: cloth1,
          title: 'FishTail Coat',
          keyword: '갈색코트',
          keyword2: '무릎기장',
          keyword3: '가을'
        },
        {
          id: 2,
          price: 69000,
          imgSrc: cloth2,
          title: 'SlimJeans',
          keyword: '진청바지',
          keyword2: '긴바지',
          keyword3: '빈티지'
        },
        // {
        //   id: 3,
        //   price: 49000,
        //   imgSrc: cloth3,
        //   title: 'WhiteShirts',
        //   keyword: '흰셔츠',
        //   keyword2: '단정한',
        //   keyword3: '긴팔'
        // },
        // {
        //   id: 4,
        //   price: 39000,
        //   imgSrc: cloth4,
        //   title: 'PigletTee',
        //   keyword: '돼지티',
        //   keyword2: '반팔티',
        //   keyword3: '분홍색'
        // },
        // {
        //   id: 5,
        //   price: 39000,
        //   imgSrc: cloth5,
        //   title: 'HawkTee',
        //   keyword: '독수리티',
        //   keyword2: '파란색',
        //   keyword3: '반팔티'
        // }
      ];
      

    return (
      <div className={classes.root}>
        <Grid item container direction="column" style={{margin : "auto"}} spacing={1}>
            <Grid container spacing={2} style={{margin : "auto", justifyContent : 'center', alignContent : "center"}} >
                {posts.map((post) => (
                <Grid
                    item
                    key={post.id}
                    lg={3}
                >
                <PostCard post={post} style={{margin : "auto", justifyContent : 'center', alignContent : "center"}} />
                </Grid>
                ))}
            </Grid>
          <Grid container spacing={2} style={{margin : "auto", justifyContent : 'center', alignContent : "center"}}>
          <Typography>Page: {page}</Typography>
          <Pagination 
          shape="rounded"
          count={10}
          size="large"
          page={page} 
          onChange={handleChange}
          /> 
          </Grid>
      </Grid>
      </div>
    )}