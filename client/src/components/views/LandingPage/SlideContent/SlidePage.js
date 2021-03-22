import { makeStyles, Slide } from '@material-ui/core'
import React from 'react'
import NewsContent from '../LandContents/NewsContent'

const useStyle = makeStyles((theme) => ({
    root : {
        display : "flex",
        height : "100%",
        transitionProperty : "transform",
        alignContent : "center",
        justifyContent : "center"
    },
    img : {
        width : "100%"
    }
}))


function SlidePage(props) {
    const classes = useStyle()

    const {currentImage, src,  direction} = props

    if(!src) {
        throw new Error("Src is not in props")
    }


    return (
        <div key={currentImage} className={classes.root}>
        <Slide in={true} direction={direction}>
            <img src={src} className={classes.img} alt="" />
        </Slide>
        </div>
    )
}

export default SlidePage
