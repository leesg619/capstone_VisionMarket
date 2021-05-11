import React, {useState, useEffect} from 'react'
import {Card, Grid, makeStyles, Paper} from '@material-ui/core'


const useStyles = makeStyles((theme) =>({
    mainContainer : {
        position : 'relative',
        backgroundColor : theme.palette.common.white,
        backgroundSize : 'cover'
    },
    gridSecond : {
        backgroundImage : "url(https://source.unsplash.com/random)",
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        padding : theme.spacing(3),
    },
    gridFirst : {
        backgroundPosition : 'center',
        padding : theme.spacing(3),
    }
}))

function SubContent() {

    const classes = useStyles()
    return (
        <Paper>
        <Grid container className={classes.mainContainer}>
        <Grid item md={4} className={classes.gridSecond}>
            </Grid>
            <Grid item md={8} className={classes.gridFirst}>
                <h1>hello</h1>
            </Grid>
        </Grid>
        </Paper>
    )
}

export default SubContent
