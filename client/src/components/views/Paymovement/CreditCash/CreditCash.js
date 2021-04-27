import { Grid, Paper, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'

const useStyle = makeStyles((theme) => ({
    root : {
        padding : theme.spacing(3),
        justifyContent : 'center',
        alignContent : 'center',
        textAlign : "center"
    }

}))

function CreditCash() {
    const classes = useStyle()
    return (
        <Grid container className={classes.root}>
            <Grid item md={12}>
                <h2>계좌번호 입력</h2>
            </Grid>
            <Grid container style={{width : "80%"}}>
                <Grid item md={12}>
                    <Paper  variant="outlined">
                        <NumberFormat></NumberFormat>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreditCash
