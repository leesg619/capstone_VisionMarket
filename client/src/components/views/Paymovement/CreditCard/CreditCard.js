import React from 'react'
import { Grid, Typography, Paper, Button, makeStyles } from '@material-ui/core'
import {
    CardHolder,
    CardNumber,
    CardSecurityCode,
    ValidThruMonth,
    ValidThruYear
} from 'reactjs-credit-card/form'
import './enroll.css'
import Card from 'reactjs-credit-card/card'

const useStyle = makeStyles((theme) => ({
    creditCard : {
        paddingTop: theme.spacing(4),
        margin: 'auto',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: "80%"
    },
    cardPadding : {
        padding : theme.spacing(2)
    },
    cardForm : {
        width: "100%",
        paddingTop : theme.spacing(2),
        display : 'relative',
        paddingBottom : theme.spacing(3),
        [theme.breakpoints.down("xs")] : {
            width : "320px"
        }
    },
    cardBtn : {
        marginTop : '1.5rem',
        marginBottom : "0"
    }

}))


function CreditCard() {

    const classes = useStyle()

    return (
        <Grid className={classes.creditCard} component="h4" container>
                    <Grid item md={12}>
                        <h3 style={{ display: 'inline' }}>카드 정보 입력</h3> ( 최초 1회만 )

                    </Grid>
                    <br />
                    <br />
                    <Grid container style={{ width: "80%" }}>
                        <Grid item className={classes.cardPadding} md={6}>
                            <Paper component="body" className={classes.cardForm} variant="outlined" >
                                <form noValidate autoComplete="off">

                                    <div >
                                    <CardNumber className="card-input" style={{width : '80%'}}  placeholder="카드 번호" />
                                    <CardHolder className="card-input" style={{width : '80%'}} placeholder="이름" />
                                    </div>

                                    <div>
                                    <ValidThruMonth className="card-input" />
                                    <ValidThruYear className="card-input" />
                                    <CardSecurityCode placeholder="CVV" className="card-input" style={{ width : "47%"}} />
                                    </div>
                                    <Button className={classes.cardBtn} variant="outlined" type="submit" >등록</Button>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid className={classes.cardPadding} item md={6}><Card /></Grid>
                    </Grid>
                </Grid>
    )
}

export default CreditCard
