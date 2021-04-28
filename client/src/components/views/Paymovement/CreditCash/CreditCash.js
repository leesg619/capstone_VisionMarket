import { Grid, Paper, makeStyles, TextField, ButtonBase, Button, CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'

const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: "center"
    },
    img: {
        width: "200px",
        height: "60px",
        padding : theme.spacing(1)
    },
    imgDiv : {
        padding : theme.spacing(1)
    },
    accountImg: {
        width: "20%",
        padding: theme.spacing(3),
        justifyContent: "center",
        verticalAlign : "middle"
    },
    divBox : {
        [theme.breakpoints.up('md')] : {
            width : "70%"
        },
        width : "100%",
        padding : theme.spacing(2),
        justifyContent: "center",
        margin: "auto"
    },
    boxColor : {
        backgroundColor : "#eeeeee"
    }

}))

function CreditCash(props) {

    const classes = useStyle()

    const [Banks, setBanks] = useState(props.banks)

    const [loading, setloading] = useState(true)

    const [InputAccount, setInputAccount] = useState(false)

    const [BankSelected, setBankSelected] = useState()
    const [BankNameSelected, setBankNameSelected] = useState()

    const [BankNumber, setBankNumber] = useState()

    const BankHandler = (e) => {
        e.preventDefault()

        setBankSelected(e.target.src)
        setBankNameSelected(e.target.alt)
        setInputAccount(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 1500)
    }, [])

    const BankComponent = Banks.map((bank, index) => {

        return (
            <ButtonBase className={classes.imgDiv} style={{width : "100%"}} type="submit" onClick={BankHandler}>
                <Paper style={{width : "100%"}} variant="outlined">
                    <img className={classes.img} src={bank.logo} alt={bank.name} defaultValue={bank.name} />
                </Paper>
            </ButtonBase>
        )
    })


    if(loading) {
        return (<Grid container className={classes.root} style={{paddingTop : "4rem"}}>
        <CircularProgress />
        </Grid>)
    }
    else if (InputAccount) {
        return (
            <Grid container className={classes.root}>
                <Grid item md={12}>
                    <p><h2 style={{ display: "inline" }}>계좌번호 입력</h2> (최초 1회만)</p>

                </Grid>
                <Grid container style={{ width: "80%" }}>
                    <Grid item md={12}>
                        <div className={classes.divBox} >
                            <form>
                                <Paper variant="outlined">
                                    <div >
                                        <img className={classes.accountImg} src={BankSelected} alt={BankNameSelected} />
                                        <NumberFormat customInput={TextField} name="AccountNumber" style={{ fontSize: "1.5rem", width: "60%", textAlign: "center", verticalAlign : "middle" }} format="####-####-####-####" mask="_" />
                                        </div>
                                </Paper>
                            </form>
                        </div>
                        <div  className={classes.divBox}>
                        <Paper className={classes.boxColor} variant="outlined">
                                    <div >
                                        <p><h4 >이름 </h4>
                                            <h2 >고영빈</h2>
                                        </p>
                                    </div>
                            </Paper>
                        </div>
                        {/* 버튼부분 수정 요망 */}
                        <Button href="/loading" type="submit" variant="outlined" style={{fontSize : "2rem"}}>
                            등록
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <Grid container className={classes.root}>
                <Grid item md={12}>
                    <h2>은행 선택</h2>
                </Grid>
                <Grid container style={{ width: "80%" }}>
                    <Grid item md={12}>
                        <div style={{ width: "450px", justifyContent: "center", margin: "auto" }}>
                            {BankComponent}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default CreditCash
