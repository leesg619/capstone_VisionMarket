import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
  }));

export default function Introduce() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <br />
            <Grid item container >
            <Grid item xs={1} />
                <Grid item xs={10}>
                    <Paper className={classes.paper} style={{fontSize:'1.2rem'}}>
                    <Typography variant="h4" component="h2" align="center">
                        Vision Market
                        <hr />
                    </Typography>
                        <br />
                        안녕하세요. 비전마켓입니다. <br />
                        저희 비전마켓은 시각장애인의 웹 쇼핑 환경 개선을 위한 웹 사이트입니다. <br />
                        <br />
                        [ 비전마켓만의 특별한 점 ] <br />
                        첫번째! 저시력 장애인을 위한 고대비, 확대 기능 <br />
                        두번째! 스크린 리더 환경 제공 <br />
                        세번째! 결제 정보 음성 안내 및 음성 결제 기능 제공 <br />
                        네번째! 자세한 상품 정보 검색을 위한 톡집사 기능 제공 <br />
                        다섯번째! 음성을 통한 생생한 리뷰 제공 <br /><br />
                        <hr />
                        <br />
                        [ 개발 팀원 소개 ] <br />
                        고영빈 (201511781) <br />
                        양승훈 (201310413) <br />
                        이석근 (201611830) <br />
                        노원준 (201813109) <br />
                        최유미 (201813113) <br />
                    </Paper>
                </Grid>
            <Grid item xs={1} />
          </Grid>
        </div>
    );}

