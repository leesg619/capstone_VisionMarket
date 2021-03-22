import React, { useState } from 'react'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root : {
        position : "relative",
        color : theme.palette.common.white,
        backgroundSize : "cover",
    },
}))

function SelectionPage(props) {
    const classes = useStyle()

    const { post, src } = props


    return (
        <>
        <Paper className={classes.root}>
            <Grid container>
                <Grid item md={6}>
                    <Typography component="h2" variant="h4">
                        {post.title}
                    </Typography>
                    <Typography>
                        {post.content}
                    </Typography>
                </Grid>
                
            </Grid>
        </Paper>
        </>
    )
}

export default SelectionPage
