import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { logoutUser } from '../../../../_action/user_actions'
import { Button, makeStyles } from '@material-ui/core'
import {withRouter} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    
}))

function RightMenu(props) {

    const classes = useStyles();

    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    const userHandler = () =>
    {
        dispatch(logoutUser())
        .then(response => {
            if (response.payload.success) {
                props.history.push('/login')
            }
            else {
                alert("logout fail")
            }
        })
    }


    if (user.userData && !user.userData.isAuth){
    return (
        <div className={classes.root}>
            <Button className={classes.handleButton} href="/register" color="inherit">Sign Up</Button>
            <Button href="/login" color="inherit">Login</Button>
        </div>
    )}
    else {
        return (
        <div className={classes.root}>
            <Button  onClick={userHandler} color="inherit" >Logout</Button>
        </div>
        )
    }
}

export default withRouter(RightMenu)
