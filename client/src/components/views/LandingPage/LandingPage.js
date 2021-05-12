import { Container, CssBaseline, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import NewsContent from './LandContents/NewsContent'
import { useDispatch, useSelector } from "react-redux"
import { searchAdminPost } from "../../../_action/adminPost_action"
import SubContent from './LandContents/SubContent'



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12)
    },

    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    }

}))


const newsPost = {
    title: "Title Sample",
    description: "description Sample, which codes is best code? can you choice that?",
    linkText: "LinkText Sample",
    linkURL: "http://localhost:3000/",
    image: "https://source.unsplash.com/random"
}

function LandingPage() {

     const classes = useStyles();
    return (
        <Container className={classes.paper} component='main' maxWidth='lg'>
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            variant="h5"
                            component="h2"

                        >
                            Hot Item
                        </Typography>
                    </Toolbar>
                    <br/>
                    <NewsContent post={newsPost} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>
            </Grid>
        </Container>
)
}

export default LandingPage
