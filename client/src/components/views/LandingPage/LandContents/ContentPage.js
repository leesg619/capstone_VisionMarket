import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    root : {
        position : "relative",
        backgroundImage : "url()"
    }
}))


function ContentPage() {
    return (
        <Paper>
            <Grid container>
                <Grid item md={6}>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ContentPage
