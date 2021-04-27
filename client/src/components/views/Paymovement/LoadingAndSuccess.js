import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Ring } from 'react-awesome-spinners'

const useStyle = makeStyles((theme) => ({
    root : {
        padding : theme.spacing(20)
    }
}))

function LoadingAndSuccess(props) {

    const classes = useStyle()

    const SuccessComponent = setTimeout((cb) => {
        return (
            <Typography component="h1">
                Success!
            </Typography>
        )
    }, 6000)


    return (
        <Container className={classes.root}>
            {SuccessComponent(Ring)}
        </Container>
    )
}

export default LoadingAndSuccess
