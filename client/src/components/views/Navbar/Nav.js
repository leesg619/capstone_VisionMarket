import React,{useState} from 'react'
import { Box, Grid, makeStyles,  AppBar, Toolbar, InputBase, Container } from '@material-ui/core'
import { useHistory } from 'react-router';
import axios from "axios";
import { ZoomOut, ZoomIn, RecordVoiceOver, Exposure, Brightness6, ShoppingCart, ExitToApp, ZoomInSharp } from '@material-ui/icons'

import { fade } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SearchIcon from '@material-ui/icons/Search';


const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    BoxComponent2: {
        minWidth: '230px',
        textAlign: 'center',
        height: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color: "#ffffff",
        borderColor: '#B6B5B5'
        
    },
    appbar: {
        display: "flex",
        position: "relative",
    },
    toolbar: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    iconComponent: {
        margin: '0', padding: '0',
        color: '#ffffff'
    },
    searchIcon: {
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        right: "-2%",
        padding: theme.spacing(0, 2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.35)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
    appbarContainer: {
        maxWidth: '100%',
        margin: theme.spacing(0, 0, 0, 0),
        padding: theme.spacing(0, 0, 0, 0),
        position: "relative",
        zIndex: "2"
    },
    orderButton: {
        position: "relative",
        margin: 0,
        padding: 0
    },
    BoxComponent: {
        minWidth: '200px',
        height: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
    },
}))


function Nav(props) {
    const classes = useStyle();
    
    // ??????, ?????? ??????
    var nowZoom = 100;
    function zoomOut() {
        nowZoom = nowZoom - 20;
        if(nowZoom <= 100) nowZoom = 100;
        zooms();
    }

    function zoomIn() {
        nowZoom = nowZoom + 20;
        if(nowZoom >= 200) nowZoom = 200;
        zooms();
    }

    function zomReset(){
        nowZoom = 100;
        zooms();
    }

    function zooms(){
        document.body.style.zoom = nowZoom + '%';
    }


    //sh-119 ?????????????????? 193
    const histroy = useHistory()
    const clickLogoutHandler = () => {
      
        axios.get(`/api/users/logout`)
        .then(response => {
            histroy.push('/')
        })
      }
  
    //seokgeun ????????????
    const [kwd, setKwd] = useState("");
    const handleChangeKwd = (event) => {
        setKwd(event.currentTarget.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.post('/api/searchs/register', {keyword:kwd})
        .then((response) => {
            console.log('??????????????? ????????????');
        }).catch((err) => {
            console.warn(err);
        })

        window.location.replace("/postsearchlist");

        histroy.push({
            pathname: '/postsearchlist',
            state:{
              category: "",
              kwd: kwd
            }
        })

    }

    return (
        <Container className={classes.appbarContainer} component='main' maxWidth='xl' >
            <AppBar className={classes.appbar} style={{ backgroundColor: "#303030" }}>
                <Toolbar className={classes.toolbar} p={1} >
                    <Grid container spacing={1}>

                        {/* ???????????????  F-146 ????????? ?????? ?????? */}
                        <Grid item xs={12} sm={4}>
                            <Box color="#000000" className={classes.BoxComponent2} p={4} >
                            <div className={classes.root}>
                            <ButtonGroup variant="text" color="inherit">
                            <Button style={{ fontSize: '1rem' }} color="inherit" aria-label="???????????? ????????????" href="/">
                            ??????
                            </Button>
                            <Button style={{ fontSize: '1rem' }} color="inherit" aria-label="?????? ????????????" href="/chat">
                            Chat
                            </Button>
                            <Button size="small" aria-label="???????????? ????????????">
                                <RecordVoiceOver className={classes.iconComponent} />
                            </Button>
                            <Button size="small" aria-label="????????????" onClick={zoomIn}>
                                <ZoomIn className={classes.iconComponent} />
                            </Button>
                            <Button size="small" aria-label="????????????" onClick={zoomOut}>
                                <ZoomOut className={classes.iconComponent} />
                            </Button>
                            </ButtonGroup>
                            </div>
                            </Box>
                        </Grid>

                        {/* ????????? */}
                        <Grid item xs={12} sm={4} >
                            <Box p={2}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                <SearchIcon />
                                </div>
                                <form onSubmit={SubmitHandler}>
                                <InputBase
                                onChange={handleChangeKwd}
                                placeholder=" ?????????..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': '?????????' }}
                                />
                                </form>
                            </div>
                            </Box>
                        </Grid>

                        {/* ????????? */}
                        <Grid item xs={12} sm={4}>
                            <Box className={classes.BoxComponent} p={4} >
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} color="inherit" aria-label="?????????????????? ????????????" href="/myCategory" >
                                        ???????????????
                                </Button>
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} aria-label="??????????????? ????????????" href="/shoppingbascket" color="inherit" >
                                <ShoppingCart  style={{ fontSize: '30' }} />
                                        ????????????
                                </Button>
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} color="inherit" aria-label="??????????????????" onClick ={clickLogoutHandler}>
                                    <ExitToApp />
                                        ????????????
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Nav
