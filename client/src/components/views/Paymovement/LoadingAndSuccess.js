import React, {useEffect, useState} from 'react'
import { CircularProgress, Grid, Container, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root : {
        paddingTop : theme.spacing(20),
        justifyContent : 'center',
        alignContent : "center",
        textAlign : 'center'
    }
}))

function LoadingAndSuccess(props) {
    const classes = useStyle()
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    if(Loading) {
        setTimeout(() => {
            props.history.push('/')
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
