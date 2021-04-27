import { Avatar, Container, CssBaseline, Grid, makeStyles, Typography, 
    ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, InputLabel, 
    MenuItem, FormHelperText, FormControl, Select, TextField
 } from '@material-ui/core'
import React, { useState } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'

import stussy from './stussy.jpg';

import PostListToolbar from './PostListToolbar';
import PostCard from './PostCard';
import posts from './posts';

import Pagination from '@material-ui/lab/Pagination';

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
        <PostListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {posts.map((post) => (
              <Grid
                item
                key={post.id}
                lg={4}
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
      </Container>
    </Box>
    </>
    )

}