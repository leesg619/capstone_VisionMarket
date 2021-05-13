import { Avatar, Container, CssBaseline, Grid, makeStyles, Typography, 
    ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, InputLabel, 
    MenuItem, FormHelperText, FormControl, Select, TextField
 } from '@material-ui/core'
import React, { useState } from 'react'
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