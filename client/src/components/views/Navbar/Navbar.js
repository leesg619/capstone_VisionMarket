import React from 'react'
import {useDispatch} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import Sidebar from './Sidebar/Sidebar'
import RightMenu from './Sidebar/RightMenu'


const useStyle = makeStyles((theme) => ({
    root : {
        flexGrow : 1
    },
    menuButton : {
        marginRight : theme.spacing(2),
    },
    title : {
        flexGrow : 1
    }
}))

function Navbar() {
    const dispatch = useDispatch();
    const classes = useStyle();
    
    

    return (
        <div className={classes.root}>
        <AppBar color="inherit" position="fixed" >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Sidebar name="left"/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <a style={{textDecoration : 'none', color : '#000000'}} href="/">Home</a>
                </Typography>
                <RightMenu />
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar


