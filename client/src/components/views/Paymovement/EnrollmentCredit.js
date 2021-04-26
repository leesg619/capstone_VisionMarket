import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements,  } from '@stripe/react-stripe-js'
import { Container, makeStyles, Paper, Stepper } from '@material-ui/core'

const stripe = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')

const useStyle = makeStyles((theme) => ({
    container : {

    }
}))

function EnrollmentCredit() {
    const classes = useStyle()
    return (
        <Container maxWidth="md" className={classes.container}>
            <Paper>
                <Elements stripe={stripe}>
                    <Stepper />
                </Elements>
            </Paper>
        </Container>
    )
}

export default EnrollmentCredit
