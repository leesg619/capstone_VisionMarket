import { Avatar, Container, CssBaseline, Grid, makeStyles, Typography, 
    ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, InputLabel, 
    MenuItem, FormHelperText, FormControl, Select, TextField
 } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'

import PostCard from './PostCard';
import Pagination from '@material-ui/lab/Pagination';

import DashboardSidebar from './DashboardSidebar';

import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100vh',
    },
    root: {
        paddingTop: theme.spacing(25),
    },
    
}))


export default function PostSearchListPage(props) {
    const classes = useStyles()
    const dispatch = useDispatch();



     const [posts,setPosts] = useState([])

    useEffect(() => {

        axios.post('/api/post/get/allProducts')
        .then(response => {
            if(response.data.success) {
              console.log(response.data)
              setPosts(response.data.products)
            } else {
                alert("상품을 가져오지 못했습니다.")
            }
        })
    }, [])

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

    // const posts = [
    //     {
    //       id: 0,
    //       price: 59000,
    //       imgSrc: stussy,
    //       title: 'stussy',
    //       keyword: '검은색',
    //       keyword2: '반팔티',
    //       keyword3: '여름'
    //     },
    //     {
    //       id: 1,
    //       price: 120000,
    //       imgSrc: cloth1,
    //       title: 'FishTail Coat',
    //       keyword: '갈색코트',
    //       keyword2: '무릎기장',
    //       keyword3: '가을'
    //     },
    //     {
    //       id: 2,
    //       price: 69000,
    //       imgSrc: cloth2,
    //       title: 'SlimJeans',
    //       keyword: '진청바지',
    //       keyword2: '긴바지',
    //       keyword3: '빈티지'
    //     },
    //     {
    //       id: 3,
    //       price: 49000,
    //       imgSrc: cloth3,
    //       title: 'WhiteShirts',
    //       keyword: '흰셔츠',
    //       keyword2: '단정한',
    //       keyword3: '긴팔'
    //     },
    //     {
    //       id: 4,
    //       price: 39000,
    //       imgSrc: cloth4,
    //       title: 'PigletTee',
    //       keyword: '돼지티',
    //       keyword2: '반팔티',
    //       keyword3: '분홍색'
    //     },
    //     {
    //       id: 5,
    //       price: 39000,
    //       imgSrc: cloth5,
    //       title: 'HawkTee',
    //       keyword: '독수리티',
    //       keyword2: '파란색',
    //       keyword3: '반팔티'
    //     }
    //   ];

    return (
    <>
        <Container maxWidth={false}>

        <Grid item container spacing = {2} className={classes.root}>
            <Grid item xs = {2} sm={2}>
                <DashboardSidebar />
            </Grid>

            <Grid item xs={11} sm={8} justify = "center">
            <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
                {posts.map((post) => (
                <Grid
                    item
                    key={post.id}
                    lg={3}
                    md={6}
                    xs={12}
                >
                <PostCard post={post} />
                </Grid>
                ))}
            </Grid>
            </Box>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3
            }}
            >
            <Pagination
                color="primary"
                count={3}
                size="small"
            />
            </Box>
        </Grid>
        </Grid>
      </Container>
            
    </>
    )

}