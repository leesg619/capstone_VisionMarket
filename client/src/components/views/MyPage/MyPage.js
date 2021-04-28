import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import Grids from "./Grids";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(12)
    }
}))

const MyPage = (props)=>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Divider/>
            <br/>

            <Grids {...props}/>
        </div>
        
        
    )
}

export default MyPage