import React from 'react'
import { Box, Grid, IconButton, makeStyles, Typography, AppBar, Toolbar, InputBase, Container, Input } from '@material-ui/core'
import { ZoomOut, ZoomIn, RecordVoiceOver, Exposure, Brightness6, ShoppingCart, ExitToApp } from '@material-ui/icons'
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
    firstAppbar: {
        display: "flex",
        position: "relative",
    },
    firstToolbar: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    BoxComponent3: {
        minWidth: '110px',
        textAlign: 'center',
        height: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color: "#ffffff",
        borderColor: '#B6B5B5'
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
    inputValue: {
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "24ch"
        }
    },
    firstAppbarContainer: {
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
    secondAppbar: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },
}))


function Nav() {
    const classes = useStyle();
    return (
        <Container className={classes.firstAppbarContainer} component='main' maxWidth='xl' >
            <AppBar className={classes.firstAppbar} style={{ backgroundColor: "#616161" }}>
                <Toolbar className={classes.firstToolbar} p={1} >
                    <Grid container spacing={1}>

                        {/* 아이콘모음 */}
                        <Grid item xs={12} sm={4}>
                            <Box color="#000000" className={classes.BoxComponent2} p={4} >
                            <div className={classes.root}>
                            <ButtonGroup variant="text" color="inherit">
                            <Button style={{ fontSize: '1rem' }} color="inherit" aria-label="비전마켓">
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
                            <Button size="small" aria-label="확대">
                                <ZoomIn className={classes.iconComponent} />
                            </Button>
                            <Button size="small" aria-label="축소">
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
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} color="inherit" aria-label="주문 및 반품" >
                                        주문/반품
                                </Button>
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} aria-label="장바구니" aria-details="장바구니 링크" href="/shoppingbascket" color="inherit" >
                                <ShoppingCart  style={{ fontSize: '30' }} />
                                        장바구니
                                </Button>
                                <Button className={classes.orderButton} style={{ fontSize: '1rem' }} color="inherit" aria-label="로그아웃">
                                    <ExitToApp />
                                        로그아웃
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <AppBar className={classes.secondAppbar} style={{ backgroundColor: "#9e9e9e" }}>
                <Toolbar >
                    <IconButton color="inherit" aria-label="모든 카테고리">
                        <Typography >
                            모든 카테고리
            </Typography>
                    </IconButton>

                    <IconButton href="/" color="inherit" aria-label="인기 상품">
                        <Typography>
                            인기 상품
            </Typography>
                    </IconButton>

                    <IconButton color="inherit" aria-label="소개 및 안내">
                        <Typography >
                            소개 및 안내
            </Typography>
                    </IconButton>

                    <IconButton href="/myPage/order" color="inherit" aria-label="마이페이지">
                        <Typography >
                            마이페이지
            </Typography>
                    </IconButton>


                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Nav
