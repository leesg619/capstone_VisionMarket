import { Grid, makeStyles, Slide } from '@material-ui/core'

import { Slideshow } from "@material-ui/icons"
import React, {useState} from 'react'
import NewsContent from '../LandContents/NewsContent'
import SlidePage from './SlidePage'

const useStyle = makeStyles((theme) => ({
    slideWrap : {
        position : "relative",
        width : "inherit",
    },
    slideBox : {
        width : "100%",
        overflow : "hidden"
    },
    slideContent : {
        width : "inherit",
        display : "table",
        float : "left"
    },

    img : {}
}))

function SlideContent(props) {
    const { images, autoPlay } = props
    if (!images) {
        throw new Error("No Images!")
    }
    const classes = useStyle();

    const [direction, setDirection] = useState("left")
    const [currentImage, setCurrentImage] = useState(0)
    const [autoPlayTimeout, setAutoPlayTimeout] = useState()
    const [mouseOver, setMouseOver] = useState(false)

    const getNextPage = () => (currentImage + 1) % images.length;
    const getPrePage = () => (currentImage ? currentImage : images.length) - 1
    
    const restartAutoPlay = () => {
        clearTimeout(autoPlayTimeout);
        setAutoPlayTimeout(null);
    }

    if (autoPlay && !autoPlayTimeout) {
        let timeout =
        setTimeout(() => {
            setDirection('left')
            setCurrentImage(getNextPage())
            restartAutoPlay()  
        }, 3000);

        setAutoPlayTimeout(timeout)
    }



    return (
        <div className={classes.slideWrap}>
            <div className={classes.slideBox}>
                <SlidePage currentImage={currentImage} src={images[currentImage]} direction={direction} classes={{img : classes.img}} />
            </div>
        </div>
    )
}

export default SlideContent
