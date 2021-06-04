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
    const [currentPage, setCurrentPage]= useState(0);  //현재 페이지
    const [postsPerPage] = useState(4);  //한 페이지에서 보여줄 post의 수
    const[currentPosts,setCurrentPosts] = useState([]);

    const category = 'kwd' in location.state ? location.state.kwd :location.state.category

    useEffect(() => {
      if(!('kwd' in location.state)){
        axios.post(`/api/post/posts_by_category`,category)
        .then(response => {
            if(response.data.success){
              console.log(response)
              setPosts(response.data.post)
              setCurrentPage(1);
            }
        })
      } else{
          axios.post('/api/searchs/searchList', {body:category})
            .then(response => {
                if(response.data.success) {
                  console.log(response.data.searchList);
                  setPosts(response.data.searchList);
                  setCurrentPage(1);
                } else{console.log(response.data.result)}
            })
      }
      
    },[])

    useEffect(() => {
      console.log('이팩트실행')
      const indexOfLast = currentPage * postsPerPage; //5,10
      const indexOfFirst = indexOfLast - postsPerPage; // 5-5,10-5
      const currentPostss = posts.slice(indexOfFirst, indexOfLast);
     setCurrentPosts(currentPostss);

    },[currentPage])
  
    const handleChange = (event, value) => {
      setCurrentPage(value);
    };

        
    return (
      <div className={classes.root}>
        <Grid item container direction="column" style={{margin : "auto"}} spacing={1}>
            <Grid container spacing={2} style={{margin : "auto", justifyContent : 'center', alignContent : "center"}} >
                {currentPosts.map((currentPost) => (
                <Grid
                    item
                    key={currentPost.id}
                    lg={3}
                >
                <PostCard post={currentPost} style={{margin : "auto", justifyContent : 'center', alignContent : "center"}} />
                </Grid>
                ))}
            </Grid>
     
        <Grid container spacing={2} style={{ margin: "auto", justifyContent: 'center', alignContent: "center" }}>
          <Pagination
            shape="rounded"
            count={10}
            size="large"
            defaultPage={1}
            onChange={handleChange}
          />
        </Grid>
       </Grid>
</div>
  )
}