import React from 'react'
import { Box, Grid, IconButton, makeStyles, Typography, AppBar, Toolbar, InputBase, Container, Input } from '@material-ui/core'
import { Pets, ZoomIn, Search, RecordVoiceOver, Exposure, Brightness6, ShoppingCart, ExitToApp } from '@material-ui/icons'
import { fade } from "@material-ui/core/styles"

const useStyle = makeStyles((theme) => ({
    BoxComponent2: {
        minWidth: '230px',
        textAlign: 'center',
        height: '20px',
        justifyContent: 'space-between',
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
        right: "1%",

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
        position: "fixed",
        zIndex: "2"
    },

    orderButton: {
        position: "relative",
        margin: 0,
        padding: 0
    },
    BoxComponent: {
        minWidth: '200px',
        textAlign: 'center',
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
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.35)
        },
        marginRight: theme.spacing(2),
        width: "100%",
        top:"21%",
        minwidth:"40%"
       
      },
}))


function Nav() {
    const classes = useStyle()
    return (
        <Container className={classes.firstAppbarContainer} component='main' maxWidth='xl' >
            <AppBar className={classes.firstAppbar} style={{ backgroundColor: "#616161" }}>
                <Toolbar className={classes.firstToolbar} p={1} >
                    <Grid container spacing={1}>
                        {/* 챗봇로고 */}
                        <Grid style={{display : "inline-flex"}} item xs={12} md={3} sm={6} lg={4} spacing={2} >
                            <Box color="#000000" className={classes.BoxComponent2} p={4} >
                                <IconButton edge="start" style={{ margin: '0', padding: '0' }} color="inherit" aria-label="chatBot">
                                    <Typography variant="h5" >
                                        Chat
               </Typography>
                                </IconButton>
                            {/* </Box> */}

                        {/* 아이콘들 */}
                            {/* <Box color="#000000" className={classes.BoxComponent3} p={4} > */}
                                <IconButton aria-label="고대비">
                                    <Brightness6 className={classes.iconComponent} />
                                </IconButton>
                                <IconButton aria-label="확대 축소">
                                    <Exposure className={classes.iconComponent} />
                                </IconButton>
                                <IconButton aria-label="음성검색">
                                    <RecordVoiceOver className={classes.iconComponent} />
                                </IconButton>
                                <IconButton aria-label="확대">
                                    <ZoomIn className={classes.iconComponent} />
                                </IconButton>
                            </Box>
                        </Grid>

                        {/* 검색창 */}
                        <Grid item xs={12} sm={6} lg={5} >
                            <Box aria-label="Search Bar" color="#000000" className={classes.BoxComponent4} p={2}>
                                <div className={classes.search}>
                                    <Search className={classes.searchIcon} />
                                    <InputBase className={classes.inputValue}  />
                                </div>
                            </Box>
                        </Grid>
                        {/* 주요버튼 */}
                        <Grid item xs={12} sm={3} lg={3}>
                            <Box className={classes.BoxComponent} p={4} >
                                <IconButton edge="start" className={classes.orderButton} color="inherit" aria-label="주문 및 반품" >
                                    <Typography>
                                        주문/반품
                </Typography>
                                </IconButton>
                                <IconButton aria-label="Shopping Basket" aria-details="장바구니 링크" href="/shoppingbascket" edge="start" className={classes.orderButton} color="inherit" >
                                    <ShoppingCart  style={{ fontSize: '30' }} />
                                    <Typography  className={classes.cartTitle}>
                                        장바구니
                </Typography>
                                </IconButton>
                                <IconButton edge="start" className={classes.orderButton} color="inherit" aria-label="로그아웃">
                                    <ExitToApp />
                                    <Typography  className={classes.cartTitle}>
                                        로그아웃
                </Typography>
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <AppBar className={classes.secondAppbar} style={{ backgroundColor: "#9e9e9e" }}>
                <Toolbar >

                    <IconButton className={classes.allCategory} color="inherit" aria-label="모든 카테고리">
                        <Typography >
                            모든 카테고리
            </Typography>
                    </IconButton>

                    <IconButton href="/" className={classes.allCategory} color="inherit" aria-label="인기 상품">
                        <Typography>
                            인기 상품
            </Typography>
                    </IconButton>

                    <IconButton className={classes.allCategory} color="inherit" aria-label="소개 및 안내">
                        <Typography >
                            소개 및 안내
            </Typography>
                    </IconButton>

                    <IconButton href="/myPage/order" className={classes.allCategory} color="inherit" aria-label="마이페이지">
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
