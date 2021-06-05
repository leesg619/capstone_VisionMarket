import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router";
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import PostCard from './PostCard';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    justifyContent: 'center',
    justifyItems: 'center',
    align: 'center',
    justify: "center",
    alignItems: "center"
  },
}))

export default function PostSearchListPage(props) {
  const classes = useStyles();
  const location = useLocation();


    const [posts,setPosts] = useState([])

    const category = 'kwd' in location.state ? location.state.kwd :location.state.category

    useEffect(() => {
      if(!('kwd' in location.state)){
        axios.post(`/api/post/posts_by_category`,category)
        .then(response => {
         console.log("실행")
            if(response.data.success){
              console.log(response)
              setPosts(response.data.post)
            }
        })
      } else{
          axios.post('/api/searchs/searchList', {body:category})
            .then(response => {
                if(response.data.success) {
                  console.log(response.data.searchList);
                  setPosts(response.data.searchList);
                } else{console.log(response.data.result)}
            })
      }
        

        

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
        <Grid container spacing={2} style={{ margin: "auto", justifyContent: 'center', alignContent: "center" }}>
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
  )
}