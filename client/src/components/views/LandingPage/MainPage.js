import React, { useEffect } from "react"
import AppBar from '@material-ui/core/AppBar';
import { Typography, Grid, Container, Paper, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';
import SubContent from './LandContents/SubContent'
import CssBaseline from '@material-ui/core/CssBaseline';
import ShoppingCard from './LandContents/ShoppingCard';
import Content from './LandContents/Content'
import axios from 'axios'

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
      fontSize: 13
    },
  },
});

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    padding: '20px',
  },
  AppbarContainer: {
    maxWidth: '100%',
    margin: theme.spacing(0, 0, 0, 0),
    padding: theme.spacing(0, 0, 0, 0),
    position: "relative",
    zIndex: "2"
  },
  productToolbar: {
    top: "10%",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  appbar2: {
    position: "relative",
    display: "relative",
    alignItems: "center",
  },
}))

function MainPage() {
  const classes = useStyles();
  const [mainPosts, setMainPosts] = React.useState([]);

  useEffect(() => {

    axios.post('/api/post/get/mainProducts')
      .then(response => {
        if (response.data.success) {
          console.log(response)
          setMainPosts(response.data.products)
        }
      })
  }, []);


  return (
    <div>
      <div className={classes.flex}>
        <Container>
          <React.Fragment>
            <CssBaseline />
            <Paper elevation={3}>
              <Typography
                variant="h5"
                style={{ textAlign: 'center' }}>
                <br />
      당신의 Vision을 들려주세요.
      <br />
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ textAlign: 'center' }}
              >
                저희 Vision Market은 사용자들의 리뷰를 바탕으로
      <br />
      시각 장애인들에게 상품을 들려줍니다.
      </Typography>
              <br />
            </Paper>
          </React.Fragment>
        </Container>
      </div>
      <div>
        <Container className={classes.AppbarContainer} >
          <AppBar className={classes.appbar2} style={{ backgroundColor: "#505050" }}>
            <Toolbar >
              <Button color="inherit" aria-label="모든 카테고리" href="/category" style={{ fontSize: '1.2rem' }}>
                모든 카테고리
                    </Button>
              <Button color="inherit" aria-label="소개 및 안내" href="/introduce" style={{ fontSize: '1.2rem' }}>
                소개 및 안내
                    </Button>
            </Toolbar>
          </AppBar>
        </Container>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Toolbar className={classes.productToolbar}>
              <Typography
                variant="h5">
                오늘의 인기상품
                        </Typography>
            </Toolbar>
          </Grid>

          {mainPosts.map((post) => (
                <Grid item xs={6} sm={3}>
                  <Grid container direction="column">
                    <Grid item container>
                    <ShoppingCard 
                      title={post.title}
                      subtitle={post.pprice}
                      imgSrc={post.image[0]}
                      description={post.content}
                      star="5점만점 4.5점"
                    />
                    </Grid>
                  </Grid>
                </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}


export default MainPage;