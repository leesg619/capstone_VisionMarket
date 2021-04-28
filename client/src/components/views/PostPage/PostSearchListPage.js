import { Avatar, Container, CssBaseline, Grid, makeStyles, Typography, 
    ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, InputLabel, 
    MenuItem, FormHelperText, FormControl, Select, TextField
 } from '@material-ui/core'
import React, { useState } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'

import PostCard2 from './PostCard2';
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
        '& > *': {
          marginTop: theme.spacing(2),
        },
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
          price: 10000,
          media: './img/stussy.jpg',
          title: 'stussy',
        },
        {
          id: 1,
          price: 20000,
          media: './img/cloth1.jpg',
          title: 'FishTail Coat',
        },
        {
          id: 2,
          price: 30000,
          media: './img/cloth2.jpg',
          title: 'SlimJeans',
        },
        {
          id: 3,
          price: 500,
          media: './img/cloth3.jpg',
          title: 'WhiteShirts',
        },
        {
          id: 4,
          price: 1000000,
          media: './img/cloth4.jpg',
          title: 'cloth4',
        },
        {
          id: 5,
          price: 80000,
          description: '제품2',
          media: './img/cloth5.jpg',
          title: 'cloth5',
          totalViews: '835'
        }
      ];
      

    return (
    <>
        <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
        }}
        >
        <Container maxWidth={false}>

        <Grid container spacing = {2}>
            <Grid>
                <DashboardSidebar />
            </Grid>

            <Grid>
            <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
                {posts.map((post) => (
                <Grid
                    item
                    key={post.id}
                    lg={4}
                    md={6}
                    xs={12}
                >
                <PostCard2 post={post} />
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
            
    </Box>
    </>
    )

}