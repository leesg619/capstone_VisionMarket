import React, { useState,useEffect } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useLocation } from "react-router";
import {  useHistory } from "react-router-dom";
import { Grid, makeStyles, Typography, Box, Button} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Pagination from '@material-ui/lab/Pagination';
import { CardMedia, CardActions, CardContent, CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import PostCard from './PostCard';

import axios from 'axios'


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
    const location = useLocation();
  console.log(location.state.category) //0여기 0이 들어온다.

     const [posts,setPosts] = useState([])

    useEffect(() => {

        axios.post(`/api/post/get/posts_by_category?category=${location.state.category._id}`)
        .then(response => {
            if(response.data.success){
              setPosts(response.data.post)
            }
        })
    }, [])


    const [page, setPage] = React.useState(1);
    
    const handleChange = (event, value) => {
      setPage(value);
    };

   
      

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
          color="primary"
          count={10}
          size="large"
          page={page} 
          onChange={handleChange}
          /> 
          </Grid>
      </Grid>
      </div>
    )}