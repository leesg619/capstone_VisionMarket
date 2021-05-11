import { Paper, makeStyles, Grid, Typography, Link, Button, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Settings, DoneAll } from '@material-ui/icons'
import Axios from 'axios'
import { ADMIN_POST_SERVER, USER_SERVER } from '../../../Config'

import { registerAdminPost, searchAdminPost } from '../../../../_action/adminPost_action'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    newsCard: {
        position: 'relative',
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.common.white,
        backgroundImage: "url('https://source.unsplash.com/random')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,.3)"
    },
    mainNewsContent: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0
        }
    },
    authComponent: {
        display: 'flex',
        // 버튼 수평 오른쪽 정렬
        justifyContent: "flex-end",
        // 이모티콘 가운데 정렬
        justifyItems: 'center',
        // 수직 아래 정렬
        alignItems: "flex-end"
    },
    textColor: {
        color: 'white',
        
    }
}))

const sampleText = {
    title: "Title Sample",
    description: "description Sample, which codes is best code? can you choice that?",
    linkText: "LinkText Sample",
    linkURL: "http://localhost:3000/",
    image: "https://source.unsplash.com/random"
}

function NewsContent() {

    
    // useSelector를 이용해 state에 저장된 user에 대한 정보를 가져옴
    const user = useSelector(state => state.user)
    const adminPost = useSelector(state => state.adminPost)


    const Auth = () => {
        if(user.userData) {
            return user.userData.isAuth
        }
        else {
            return false
        }
    }

    const [post, setpost] = useState({})
    const [isEmpty, setisEmpty] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        Axios.post(`${ADMIN_POST_SERVER}/find/correct/page`, {pagename : "home_main"})
        .then(response => {
            if(response.data.success) {
                console.log(response.data.posts[0])
                setpost(response.data.posts[0])
            }
            else {
                setpost(sampleText)
            }
        })
    }, [1])
    
    //console.log(post.title)

    const [Title, setTitle] = useState(post.title)
    const [Description, setDescription] = useState(post.description)
    const [LinkText, setLinkText] = useState(post.linkText)
    const [LinkURL, setLinkURL] = useState(post.linkURL)

    const [UseModify, setUseModify] = useState(false)

    const ModifyHandler = (e) => {
        setUseModify(true)
    }


    const LinkContent = (isAuth) => {
        if (isAuth) {
            return (
                <Grid item md={6} className={classes.authComponent}>
                    <Button color="inherit" onClick={ModifyHandler}>
                        <Settings />
                    </Button>
                </Grid>
            )
        }
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        dispatch(registerAdminPost({title : Title, description : Description, linkText : LinkText, linkURL : LinkURL, category : "home_main_feature"}))
        .then(response => {
            if (response.payload.success) {
                console.log(response.payload.postId)
            }
            else {
                alert(response.payload.err)
            }
        })

        setUseModify(false)
    }

    const HandleTitleChange = (e) => {
        setTitle(e.currentTarget.value)
    }

    const HandleDescriptionChange = (e) => {
        setDescription(e.currentTarget.value)
    }

    const HandleLinkTextChange = (e) => {
        setLinkText(e.currentTarget.value)
    }

    const HandleLinkURLChange = (e) => {
        setLinkURL(e.currentTarget.value)
    }



    const IsModified = (UseModify) => {
        if (!UseModify) {
            return (
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainNewsContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {post.description}
                            </Typography>
                            <Link variant="subtitle1" href={post.linkURL}>
                                {post.linkText}
                            </Link>
                            <br />
                        </div>
                    </Grid>
                    {LinkContent(Auth())}
                </Grid>
            )
        }
        else {
            return (

                <form onSubmit={HandleSubmit}>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainNewsContent} >
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    <TextField color="secondary" label="Title" value={Title} onChange={HandleTitleChange} inputProps={{ className: classes.textColor }} variant="filled" />
                                </Typography>
                                <Typography component="h3" gutterBottom>
                                    <TextField color='secondary' label="Description" value={Description} variant="filled" inputProps={{ className: classes.textColor }} onChange={HandleDescriptionChange} />
                                </Typography>
                                <Typography component="h3" gutterBottom>
                                    <TextField color="secondary" label="Link Text" value={LinkText} variant="filled" inputProps={{ className: classes.textColor }} onChange={HandleLinkTextChange} />
                                </Typography>
                                <Typography gutterBottom component="h3">
                                    <TextField color="secondary" label="Link URL" value={LinkURL} variant="filled" inputProps={{ className: classes.textColor }} onChange={HandleLinkURLChange} />
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item md={6} className={classes.authComponent}>
                            <Button color="secondary" type="submit">
                                <DoneAll />
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            )
        }
    }


    const classes = useStyles();
    return (
        <Paper className={classes.newsCard} style={{ backgroundImage: `url("https://source.unsplash.com/random")` }}>
            {<img style={{ display: 'none' }} src="https://source.unsplash.com/random" alt={post.imageText} />}
            {IsModified(UseModify)}
        </Paper>
    )
}

export default NewsContent

NewsContent.propTypes = {
    post: PropTypes.object
}