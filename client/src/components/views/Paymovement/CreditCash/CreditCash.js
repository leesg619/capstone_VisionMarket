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

    console.log(props.banks)

    const [Banks, setBanks] = useState([])

    setBanks(props.banks)

    const BankComponent = Banks.map((bank, index) => {


        return (
        <Paper variant="outlined">
            <img className={classes.img} src={bank.logo} alt={bank.name} />
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
