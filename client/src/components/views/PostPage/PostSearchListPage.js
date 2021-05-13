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

import cloth1 from './img/cloth1.jpg';
import cloth2 from './img/cloth2.jpg';
import cloth3 from './img/cloth3.jpg';
import cloth4 from './img/cloth4.jpg';
import cloth5 from './img/cloth5.jpg';
import stussy from './img/stussy.jpg';
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

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [size, setSize] = React.useState('');
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };


      

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