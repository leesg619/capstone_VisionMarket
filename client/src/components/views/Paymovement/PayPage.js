import React, { useState, useEffect } from 'react'
import { Grid, Container, makeStyles, Card, Input, Paper, Button, CircularProgress } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import { Check } from '@material-ui/icons'
import LoadingAndSuccess from './LoadingAndSuccess'
import axios from 'axios';

const useStyle = makeStyles((theme) => ({
    root: {
        // paddingTop : theme.spacing(12)
        backgroundColor : "white"
    },
    creditCard: {
        paddingTop: theme.spacing(4),
        margin: 'auto',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: "100%"
    },
    cardPadding: {
        padding: theme.spacing(2)
    },
    cardForm: {
        width: "100%",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            width: "320px"
        }
    },
    card: {
        border: '1px solid #dddddd',
        padding: '0 0.8rem',
        fontSize: '1rem',
        lineHeight: '2rem',
        margin: '0.2rem',
        color: '#666666',
        backgroundColor: '#f8f8f8'
    },
    cardBtn: {
        marginTop: '1.5rem',
        marginBottom: "0",
        backgroundColor : theme.palette.primary
    }
}))


function PayPage(props) {
    const classes = useStyle()

    const [Success, setSuccess] = useState(false)


    const SuccessHandle = (e) => {
        e.preventDefault()
        
        if(props.postId !== undefined){
            let body = {
                post: props.postId,
                quantity: 1,
                price: props.price,
            }

            axios.post('/api/purchase/create',body)
            .then(response => {
                
                if(response.data.success) {
                    setSuccess(true)
                    alert('구매에 성공하였습니다.');
                    props.history.push('/order')
                }
            })
        }
        else if(props.ShoppingList !== undefined){ //일반 쇼핑카트 결제
            // const ShoppingList = props.ShoppingList;
            // for (let i=0; i< (props.ShoppingList.length); i++){
            // }

                // axios.post('/api/purchase/createMany', body)

        }
       
    }

    

    return (
        <Container component="body" className={classes.root}>
            <Grid className={classes.creditCard} component="h4" container>

                {Success ? 
                <LoadingAndSuccess />  :
                <div>
                <Grid item md={12}>
                    <h3 >내 카드 정보</h3>
                </Grid>
                    <Grid item style={{margin : 'auto'}} className={classes.cardPadding} sm={6}>
                        <Paper component="body" className={classes.cardForm} variant="outlined" >
                            <form noValidate autoComplete="off">

                                <div >
                                    <NumberFormat disabled value="4321431243214321" format="####-####-####-####" className={classes.card} style={{ width: '68%' }} placeholder="카드 번호" />
                                    <img style={{ width: "12%", verticalAlign: "middle" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1024px-Visa.svg.png" alt="VISA" />
                                    <Input disabled className={classes.card} value="KO YEONG BIN" style={{ width: '80%' }} placeholder="이름" />
                                </div>

                                <div>
                                </div>
                                {/* 버튼 부분 수정해야함 */}
                                <Button onClick={SuccessHandle} className={classes.cardBtn} variant="contained" color="primary" type="submit" >결제</Button>
                            </form>
                        </Paper>
                    </Grid>
                </div>
            }

                
            </Grid>
        </Container>
    )
}

export default PayPage
