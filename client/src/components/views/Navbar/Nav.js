import React,{useState} from 'react'
import { Box, Grid, IconButton, makeStyles, Typography, AppBar, Toolbar, InputBase, Container, Input } from '@material-ui/core'

import { useLocation, useHistory } from "react-router";
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
  
    // 확대, 축소 기능
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


    return (
        <Container className={classes.appbarContainer} component='main' maxWidth='xl' >
            <AppBar className={classes.appbar} style={{ backgroundColor: "#303030" }}>
                <Toolbar className={classes.toolbar} p={1} >
                    <Grid container spacing={1}>

                        {/* 아이콘모음 */}
                        <Grid item xs={12} sm={4}>
                            <Box color="#000000" className={classes.BoxComponent2} p={4} >
                            <div className={classes.root}>
                            <ButtonGroup variant="text" color="inherit">
                            <Button style={{ fontSize: '1rem' }} color="inherit" aria-label="비전마켓" href="/">
                            메인
                            </Button>
                            <Button style={{ fontSize: '1rem' }} color="inherit" aria-label="챗봇" href="/chat">
                            Chat
                            </Button>
                            <Button size="small" aria-label="고대비">
                                <Brightness6 className={classes.iconComponent} />
                            </Button>
                            <Button size="small" aria-label="음성검색">
                                <RecordVoiceOver className={classes.iconComponent} />
                            </Button>
                            <Button size="small" aria-label="확대" onClick={zoomIn}>
                                <ZoomIn className={classes.iconComponent} />
                            </Button>
                            <Button size="small" aria-label="축소" onClick={zoomOut}>
                                <ZoomOut className={classes.iconComponent} />
                            </Button>
                            </ButtonGroup>
                            </div>
                            </Box>
                        </Grid>

                        {/* 검색창 */}
                        <Grid item xs={12} sm={4} >
                            <Box p={2}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                <SearchIcon />
                                </div>
                                <InputBase
                                placeholder=" 검색창..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': '검색창' }}
                                />
                            </div>
                            </Box>
                        </Grid>

                        {/* 주버튼 */}
                        <Grid item xs={12} sm={4}>
                            <Box className={classes.BoxComponent} p={4} >
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} color="inherit" aria-label="마이페이지" href="/myPage/order" >
                                        마이페이지
                                </Button>
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} aria-label="장바구니" aria-details="장바구니 링크" href="/shoppingbascket" color="inherit" >
                                <ShoppingCart  style={{ fontSize: '30' }} />
                                        장바구니
                                </Button>
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} color="inherit" aria-label="로그아웃" href="/login">
                                    <ExitToApp />
                                        로그아웃
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
