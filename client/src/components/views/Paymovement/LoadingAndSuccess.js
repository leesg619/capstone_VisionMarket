import React, {useEffect, useState} from 'react'
import { CircularProgress, Grid, Container, makeStyles } from '@material-ui/core'
import {useHistory} from "react-router"


const useStyle = makeStyles((theme) => ({
    root : {
        paddingTop : theme.spacing(20),
        justifyContent : 'center',
        alignContent : "center",
        textAlign : 'center',
        backgroundColor : "inherit"
    }
}))

function LoadingAndSuccess(props) {
    const classes = useStyle()
    const [Loading, setLoading] = useState(true)

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    if(Loading) {
        setTimeout(() => {
            history.push('/')
        }, 1000)
    }
    
    return  (
        <Container component="body">
            <Grid className={classes.root} container md={12}>
                { 
                Loading === false ?
                <Grid item sm={12}>
                    <h1> 완료 </h1>
                </Grid> : 
                <CircularProgress />
                }
            </Grid>
        </Container>
    )
}

export default LoadingAndSuccess
