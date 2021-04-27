import { Container, makeStyles, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import { Ring } from 'react-awesome-spinners'

const useStyle = makeStyles((theme) => ({
    root : {
        paddingTop : theme.spacing(30),
        padding : theme.spacing(20),
        alignContent : "center",
        justifyContent : 'center',
        textAlign : 'center'
    }
}))

function LoadingAndSuccess(props) {

    const classes = useStyle()
    
    const [SuccessTime, setSuccessTime] = useState(false)

    const timeout = useRef(null)

    timeout.current = setTimeout(() => {
        setSuccessTime(true)
    }, 1000)

    if(SuccessTime) {
        return (
        <Container className={classes.root}>
            <Ring />
        </Container>
        )
    }
    else {
    return (
        <Container className={classes.root}>
            <h1>Success</h1>
        </Container>
    )
    }
}

export default LoadingAndSuccess
