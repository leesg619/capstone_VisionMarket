import React, { useState } from 'react'
import { Grid, Container,  makeStyles, Paper, Typography, ButtonBase} from '@material-ui/core'
import CreditCard from './CreditCard/CreditCard'
import CreditCash from './CreditCash/CreditCash'

const useStyle = makeStyles((theme => ({
    root: {
        paddingTop: theme.spacing(15),
        backgroundColor : theme.palette.action.hover,
        height : '100%',
        paddingBottom : "30%"
    },
    mainTitle: {
        padding : theme.spacing(3),
        borderColor : theme.palette.action.selected
    },
    creditTitle: {
        width: '100%',
        borderColor : theme.palette.action.selected
    },
    enrollement: {
        padding : theme.spacing(3),
    },

})))

function EnrollmentCreditPage(props) {
    const classes = useStyle();

    const [SelectCredit, setSelectCredit] = useState(false)
    const [SelectCash, setSelectCash] = useState(false)

    const [CreditNum, setCreditNum] = useState()

    const HandlingCredit = (e) => {
        e.preventDefault()
        if (SelectCredit === true || SelectCash === true) {
            setSelectCredit(false)
        }
        else {
            setSelectCredit(true)
        }
    }
    const HandlingCash = (e) => {
        e.preventDefault()
        if (SelectCash === true || SelectCredit === true) {
            setSelectCash(false)
        }
        else {
            setSelectCash(true)
        }
    }



    const CreditCardComponent = (Action) => {
        if (Action) {
            return (
               <CreditCard />
            )
        }
        else {
            return null
        }
    }

    const CreditCashComponent = (Action) => {
        if (Action) {
            return (
                <CreditCash />
            )
        }
        else {
            return null
        }
    }

    return (
        <Container className={classes.root} component="body">
            <Grid container>
                <Grid item component="h2" xs={12}>
                    <Paper variant="outlined" className={classes.mainTitle} >결제 수단 등록</Paper>

                </Grid>
                <Grid className={classes.enrollement} component="h2" item xs={6}>
                    <form onSubmit={HandlingCredit}>
                        <ButtonBase type="submit" style={{ alignContent: "center", textAlign: "center", width: '100%' }}>
                            <Paper variant="outlined" className={classes.creditTitle} >
                                <Typography component="h2">
                                    <h2>
                                        신용카드
                        </h2>
                                </Typography>
                            </Paper>
                        </ButtonBase>
                    </form>
                </Grid>
                <Grid className={classes.enrollement} component="h2" item xs={6}>
                    <form onSubmit={HandlingCash}>
                        <ButtonBase type="submit" style={{ alignContent: "center", textAlign: "center", width: '100%' }}>
                            <Paper variant="outlined" className={classes.creditTitle} >
                                <Typography component="h2">
                                    <h2>
                                        계좌번호
                        </h2>
                                </Typography>
                            </Paper>
                        </ButtonBase>
                    </form>
                </Grid>
                {CreditCardComponent(SelectCredit)}
                {CreditCashComponent(SelectCash)}
            </Grid>
        </Container>
    )

}

export default EnrollmentCreditPage
