import React, {useState} from 'react'
import { Grid, Container, Button, makeStyles, Card, Paper, Select, Typography, ButtonBase, TextField, Box, Input } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const useStyle = makeStyles((theme => ({
    root : {
        paddingTop : theme.spacing(8)
    },
    mainTitle : {
        paddingLeft : theme.spacing(3),
        paddingTop : theme.spacing(3),
        paddingBottom : theme.spacing(3)
    },
    creditTitle : {
        width : '100%'
    },
    enrollement : {
        marginTop : theme.spacing(3),
    },

    creditCard : {
        paddingTop : theme.spacing(4),
        alignContent : 'center',
        margin : 'auto'
    },
    creditNumber : {
        paddingLeft : theme.spacing(1),
        paddingRight : theme.spacing(1)
    }
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

    function onlyNumber(event) {
        if ((event.keyCode < 48) || (event.keyCode > 57))
            event.returnValue = false;
    }

    const validationSchema = Yup.object().shape({
        creditNumber : Yup.string().min(15, "카드 번호는 총 16자리가 필요합니다.").required("카드번호를 입력해주세요").max(20),
        cashNumber : Yup.string().min(15, '계좌번호는 총 16자리가 필요합니다.').required("계좌번호를 입력해주세요").max(20)
    })




    const formik = useFormik({
        initialValues : {
            creditNumber : '',
            cashNumber : ''
        },
        validationSchema : validationSchema,
        


    })
    console.log(formik.values.creditNumber)
    if ((formik.values.creditNumber.length % 4 === 0 ) && formik.values.creditNumber.length !== 20
        && formik.values.creditNumber !== "" && (formik.values.creditNumber) !== '-') {
        formik.values.creditNumber = formik.values.creditNumber + '-'
    } 

    const CreditCard = (Action) => {
        if (Action) {
            return (
                <div>
                    <Grid className={classes.creditCard} style={{  alignContent : 'center', justifyContent : 'center', textAlign : 'center', width: "80%"}} component="h4" item md={12}>
                        <Typography component="h2"><h3 style={{display : 'inline'}}>카드 정보 입력</h3> ( 최초 1회만 )</Typography>
                        <Box component="span" >
                            <br/>
                            카드번호
                        <form noValidate autoComplete="off">
                            <TextField
                                variant="outlined"
                                margin='normal'
                                value={formik.values.creditNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                autoComplete = "off"
                                required
                                name="creditNumber"
                                id="creditNumber"
                            />
                        </form>
                        </Box>
                    </Grid>
                    <Grid>

                    </Grid>
                </div>
            )
        }
        else {
            return null
        }
    }


    return (
        <Container className={classes.root} component="body">
            <Grid container md={12}>
                <Grid item component="h2" md={12}>
                    <Paper className={classes.mainTitle} >결제 수단 등록</Paper>
                    
                </Grid>
                <Grid className={classes.enrollement} component="h2" item md={6}>
                    <form onSubmit={HandlingCredit}>
                    <ButtonBase type="submit" style={{ alignContent : "center", textAlign : "center", width : '100%'}}>
                    <Paper className={classes.creditTitle} >
                        <Typography component="h2">
                            <h2>
                        신용카드
                        </h2>
                        </Typography>
                        </Paper>
                        </ButtonBase>
                        </form>
                </Grid>
                <Grid className={classes.enrollement} component="h2" item md={6}>
                    <form onSubmit={HandlingCredit}>
                    <ButtonBase type="submit" style={{ alignContent : "center", textAlign : "center", width : '100%'}}>
                    <Paper className={classes.creditTitle} >
                        <Typography component="h2">
                            <h2>
                        계좌번호
                        </h2>
                        </Typography>
                        </Paper>
                        </ButtonBase>
                        </form>
                </Grid>
                <Grid item md={12}>
                    {CreditCard(SelectCredit)}
                </Grid>
            </Grid>
        </Container>
    )

}

export default EnrollmentCreditPage
