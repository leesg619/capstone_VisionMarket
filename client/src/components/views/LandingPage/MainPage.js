import React from "react"
import AppBar from '@material-ui/core/AppBar';
import {  Typography ,Grid, Container,Box   } from "@material-ui/core"
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
 
    h6: {
      fontSize:13
    },
  },
});

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35)
    },
    marginRight: theme.spacing(2),
    width: "80%",
    top:"21%",
    minwidth:"40%"
   
  },
  // xs (extra-small) : 0px ~ 600px
  // sm (small) : 600px ~ 960px
  // md (medium): 960px ~ 1280px
  // lg (large) : 1280px ~ 1920px
  // xl (extra-large) : 1920px ~

  inputInput: {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "24ch"
    },
 
  },

  searchIcon: {

    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    right:"1%",
   
  },

  orderButton: {
    position: "relative",
    margin:0,
    padding:0
  },

  adCard:{
    position:"relative",
    maxWidth: 580,
    height: 350,
    display: "flex",
    alignContent: "center",
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

  firstAppbarContainer: {
    maxWidth:'100%',
   margin:theme.spacing(0,0,0,0),
   padding:theme.spacing(0,0,0,0),
},

firstAppbar: {
  display:"flex",
  position:"static",
},


secondAppbar: {
  position:"relative",
  top:"6%",
  display: "flex",
  alignItems: "center",
},

productToolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
},
main: {
  margin:theme.spacing(0,0,0,0),
},
firstGrid: {
  alignItems:'center',
  justifyContent:'center'
},
BoxComponent:{
  minWidth:'200px',
  textAlign:'center',
  height:'20px',   
  justifyContent:'space-between',
  alignItems:'center',
  display:'flex',
},
BoxComponent2:{
  minWidth:'230px',
  textAlign:'center',
  height:'20px',   
  justifyContent:'space-between',
  alignItems:'center',
  display:'flex',
  color:"#ffffff",
  borderColor:'#B6B5B5'
},
BoxComponent3:{
  minWidth:'110px',
  textAlign:'center',
  height:'20px',   
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
  color:"#ffffff",
  borderColor:'#B6B5B5'
},
firstToolbar: {
  display:"flex",
  flexWrap:'wrap',
},
iconComponent:{
  margin:'0', padding:'0',
  color: '#ffffff'
},
 chatTypo : {
  [theme.breakpoints.down("sm")] : {
    fontSize : "17px"
  }
 },

  }))

  // xs (extra-small) : 0px ~ 600px
  // sm (small) : 600px ~ 960px
  // md (medium): 960px ~ 1280px
  // lg (large) : 1280px ~ 1920px
  // xl (extra-large) : 1920px ~

  function MainPage() {
    const classes = useStyles();

    return (


      <Container className={classes.firstAppbarContainer} component='main' maxWidth='xl' >

      <AppBar className={classes.firstAppbar} style={{backgroundColor:"#616161"}}>
        <Toolbar  className={classes.firstToolbar} p ={0} >
          <Grid container spacing={1}>
            {/* 챗봇로고 */}
           <Grid item xs={12} lg={1} >
             <Box  color="#000000" className={classes.BoxComponent2} p={4} > 
               <IconButton edge="start" style={{margin:'0', padding:'0'}} color="inherit" aria-label="chatBot">
                 <PetsIcon style={{fontSize: '30'}} />
                 <Typography variant="h5" >
                  ChatBot
               </Typography>
               </IconButton>
             </Box>
           </Grid>

           {/* 아이콘들 */}
           <Grid item xs={7} lg={3}>
           <Box  color="#000000" className={classes.BoxComponent3} p={4} >
           <IconButton>
             <Brightness6Icon className={classes.iconComponent} />
           </IconButton>
           <IconButton>
               <ExposureIcon className={classes.iconComponent}/>
           </IconButton>
           <IconButton>
               <RecordVoiceOverIcon className={classes.iconComponent}/>
           </IconButton>
           <IconButton>
               <ZoomInIcon className={classes.iconComponent} />
           </IconButton>
           </Box>
           </Grid>

           {/* 검색창 */}
           <Grid item xs={12} lg={5} >
           <Box color="#000000" className={classes.BoxComponent4} p={2}>
             <div className={classes.search}>
               <SearchIcon  className={classes.searchIcon} />
               <InputBase
                   // placeholder="Search…"
                   classes={{
                     root: classes.inputRoot,
                     input: classes.inputInput,
                   }}
                 />
             </div>
             </Box>
           </Grid>
           {/* 주요버튼 */}
           <Grid item xs>
           <Box className={classes.BoxComponent} p={4} >
             <IconButton edge="start" className={classes.orderButton}  color="inherit" aria-label="orderButton" >
                  <Typography variant="h6">
                주문/반품
                </Typography>
              </IconButton>
              <IconButton edge="start" className={classes.orderButton} color="inherit" aria-label="cartButton">
                <ShoppingCartIcon style={{fontSize: '30'}} />
                  <Typography variant="h6" className={classes.cartTitle}>
                장바구니
                </Typography>
                </IconButton>
                <IconButton edge="start" className={classes.orderButton} color="inherit" aria-label="cartButton">
                <ExitToAppIcon />
                  <Typography variant="h6" className={classes.cartTitle}>
                로그아웃
                </Typography>
                </IconButton>
             </Box>
           </Grid>
          </Grid>
          </Toolbar>
          </AppBar>
       

         
             <AppBar className={classes.secondAppbar}  style={{backgroundColor:"#9e9e9e"}}>
          <Toolbar >

          <IconButton className={classes.allCategory} color="inherit" aria-label="second">
              <Typography variant="h6">
             모든 카테고리
            </Typography>
            </IconButton>

              <IconButton className={classes.allCategory} color="inherit" aria-label="second">
              <Typography variant="h6">
             인기 상품
            </Typography>
            </IconButton>  

              <IconButton className={classes.allCategory} color="inherit" aria-label="second">
              <Typography variant="h6">
             소개 및 안내
            </Typography>
            </IconButton>  

              <IconButton className={classes.allCategory} color="inherit" aria-label="second">
              <Typography variant="h6">
             마이페이지
            </Typography>
            </IconButton> 


          </Toolbar>
          </AppBar> 

          <Grid item xs={12} align="center">
          <Card  className={classes.adCard}>
        <CardContent >
        
          <ThemeProvider theme={theme}>
        <Typography  gutterBottom variant="h5" component="h2" className={classes.adCardTite}>
         당신의 Vision을 들려주세요
          </Typography>
      </ThemeProvider>


          <ThemeProvider theme={theme}>
        <Typography  variant="body1" color="textSecondary" component="p" className={classes.adCardContentTwo}>
        저희 Vision Market은  사용자들의  리뷰를 바탕으로
          </Typography>
      </ThemeProvider>
          <ThemeProvider theme={theme}>
        <Typography  variant="body1" color="textSecondary" component="p" className={classes.adCardContentTwo}>
          시각 장애인들에게 상품을 들려줍니다.
          </Typography>
      </ThemeProvider>
        </CardContent>
        </Card>
      </Grid>
          
           <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Toolbar className={classes.productToolbar}>
                        <Typography
                            variant="h5"
                            component="h2">
                              오늘의 신상품
                        </Typography>
                    </Toolbar>
                    <br/>
                    <NewsContent post={newsPost} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SubContent />
                </Grid>

            </Grid>
          
            </Container>


    
        
            
      
      
    );
  }
  

export default MainPage;