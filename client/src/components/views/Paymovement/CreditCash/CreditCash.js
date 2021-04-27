import { Grid, Paper, makeStyles, Typography } from '@material-ui/core'
import React, {useState} from 'react'
import NumberFormat from 'react-number-format'

const useStyle = makeStyles((theme) => ({
    root : {
        padding : theme.spacing(3),
        justifyContent : 'center',
        alignContent : 'center',
        textAlign : "center"
    },
    img : {
        width : "400px",
        height : "300px"
    }

}))

function CreditCash(props) {

    const [Banks, setBanks] = useState(props.banks)


    const BankComponent = Banks.map((bank, index) => {


        return (
        <Paper variant="outlined">
            {bank.name}
            {bank.logo}
            <img  src={bank.logo} alt={bank.name} />
        </Paper>)
    })

    const classes = useStyle()
    return (
        <Grid container className={classes.root}>
            <Grid item md={12}>
                <h2>은행 선택</h2>
            </Grid>
            <Grid container style={{width : "80%"}}>
                <Grid item md={12}>
                    <Paper  variant="outlined">
                        {BankComponent}
                    </Paper>    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreditCash
