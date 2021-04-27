import React from "react"
import AppBar from '@material-ui/core/AppBar';
import {  Typography ,ButtonGroup,Grid,Container, CssBaseline, Paper   } from "@material-ui/core"
import { fade,makeStyles } from "@material-ui/core/styles"
import PetsIcon from '@material-ui/icons/Pets';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from "@material-ui/core/InputBase";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExposureIcon from '@material-ui/icons/Exposure';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import SubContent from './LandContents/SubContent'
import NewsContent from './LandContents/NewsContent'


const newsPost = {
  title: "Title Sample",
  description: "description Sample, which codes is best code? can you choice that?",
  linkText: "LinkText Sample",
  linkURL: "http://localhost:3000/",
  image: "https://source.unsplash.com/random"
}

const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: 20
    },
    h4: {
      fontSize:30
    },
  
  }
});

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  chatBotButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },

  inputInput: {
    padding: theme.spacing(1, 4, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch"
    }
  },

  searchIcon: {
    padding: theme.spacing(0, 70),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  orderButton: {
    position: "absolute",
    right : "18%",

  },

  cartTitle: {
    paddingLeft: theme.spacing(1),
    margin: theme.spacing(0)
  },

  cartIcon: {
    marginLeft: theme.spacing(1),
  },
  
  cartButton: {
    padding: theme.spacing(0),
    position: "absolute",
    right : "26%"
  },

  marketLogo: {
    position: "absolute",
    right:"2%",
    color:"#00e5ff",
  },
  secondAppbar: {
    display: "flex",
    alignItems: "center",
    justifyItems:"center",
  },

  adCard:{
    position:"relative",
    display: "flex",
    maxWidth: 1000,
    height: 350,
    left:"17%",
    alignContent: "space-between",
    justifyContent:"center",
  },
  adCardTite: {
    position:"relative",
    top:"10%",
    left:"7%"
  },
  adCardContentOne: {
    position:"relative",

  },
  adCardContentTwo: {
    position:"relative",
    top:"35%",
  },

  todayNewProduct: {
    marginTop: theme.spacing(12)
},

productToolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
},
girstGrid: {
  alignItems:'center',
  justifyContent:'center'
},


  }))



  function MainPage() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
          <Grid container alignItems="center" >
          <Grid item xs={6}>
          <ButtonGroup color="inherit" aria-label="outlined primary button group" className={classes.iconGroup}>
            {/* 챗봇 버튼 */}
            <IconButton>
            <PetsIcon />
            </IconButton>
            {/* 명암도 외 버튼들.. */}
            <IconButton>
            <Brightness6Icon />
            </IconButton>

            <IconButton>
            <ExposureIcon />
            </IconButton>

            <IconButton>
            <RecordVoiceOverIcon />
            </IconButton>
        
            <IconButton>
            <ZoomInIcon />
            </IconButton>

            </ButtonGroup>
            </Grid>
          <Grid item  xs={6} >
        {/* 검색 창 */}
        <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </Grid>
          </Grid>
        </Toolbar>
        </AppBar>
         </div>
          
/* 
          <Grid item  xs={4}>
          <IconButton edge="start" className={classes.orderButton}  color="inherit" aria-label="orderButton" >
              <Typography variant="h6">
              주문/반품
            </Typography>
            </IconButton>

            <IconButton edge="start" className={classes.cartButton} color="inherit" aria-label="cartButton">
            <div className={classes.cartIcon}>
            <ShoppingCartIcon />
            </div>
              <Typography variant="h6" className={classes.cartTitle}>
              장바구니
            </Typography>
            </IconButton>

            <IconButton className={classes.marketLogo} color="inherit" aria-label="marketLogo">
              <Typography variant="h4">
              Vision Market
            </Typography>
            </IconButton>  
          </Grid>
          </Grid>
          </Grid>
  
          </Toolbar>
        </AppBar> */
       
    //       <AppBar position="static" className={classes.secondAppbar} color ="secondary">
    //       <Toolbar >

    //       <IconButton className={classes.allCategory} color="inherit" aria-label="second">
    //           <Typography variant="h6">
    //          모든 카테고리
    //         </Typography>
    //         </IconButton>

    //           <IconButton className={classes.allCategory} color="inherit" aria-label="second">
    //           <Typography variant="h6">
    //          인기 상품
    //         </Typography>
    //         </IconButton>  

    //           <IconButton className={classes.allCategory} color="inherit" aria-label="second">
    //           <Typography variant="h6">
    //          소개 및 안내
    //         </Typography>
    //         </IconButton>  

    //           <IconButton className={classes.allCategory} color="inherit" aria-label="second">
    //           <Typography variant="h6">
    //          마이페이지
    //         </Typography>
    //         </IconButton> 

    //       </Toolbar>
    //     </AppBar>


    //     <Card className={classes.adCard}>
    //     <CardContent>

    //       <ThemeProvider theme={theme}>
    //     <Typography  gutterBottom variant="h4" component="h2" className={classes.adCardTite}>
    //      당신의 Vision을 들려주세요
    //       </Typography>
    //   </ThemeProvider>


    //       <ThemeProvider theme={theme}>
    //     <Typography  variant="body1" color="textSecondary" component="p" className={classes.adCardContentTwo}>
    //     저희 Vision Market은  사용자들의  리뷰를 바탕으로
    //       </Typography>
    //   </ThemeProvider>
    //       <ThemeProvider theme={theme}>
    //     <Typography  variant="body1" color="textSecondary" component="p" className={classes.adCardContentTwo}>
    //       시각 장애인들에게 상품을 들려줍니다.
    //       </Typography>
    //   </ThemeProvider>
    //     </CardContent>
    // </Card>
    
        
    // <Container className={classes.todayNewProduct} component='main' maxWidth='lg'>
    //         <CssBaseline />
    //         <Grid container spacing={2}>

    //             <Grid item xs={12}>
    //                 <Toolbar className={classes.productToolbar}>
    //                     <Typography
    //                         variant="h5"
    //                         component="h2">
    //                           오늘의 신상품
    //                     </Typography>
    //                 </Toolbar>
    //                 <br/>
    //                 <NewsContent post={newsPost} />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //             <Grid item xs={12} sm={6}>
    //                 <SubContent />
    //             </Grid>

    //         </Grid>
    //     </Container>
    //   </div>
    
    );
  }
  

export default MainPage;