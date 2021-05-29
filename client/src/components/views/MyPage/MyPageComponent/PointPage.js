import { Button, Box, Card, Tabs, Tab, Container, Grid, makeStyles, Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CardActions } from "@material-ui/core";
import PropTypes from 'prop-types'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

function TabPanel(props) {
     const { children, value, index, ...other } = props;
   

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.any.isRequired,
value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#fefefe',
    },
    panel: {
        backgroundColor: '#fefefe',
    },
    card: {
        margin: 'auto',
        padding: '1% 1%',
    },
    button: {
        justifyContent: 'center',
    }
}));

function createData(point, usage, deadline) {
    return {point, usage, deadline };
}

const rows = [
    createData(1000, '회원가입 이벤트', '7일후 소멸'),
];

const rows2 = [
    createData(500, '마우스 구매', '21년 4월 21일'),
    createData(500, '헤드폰 구매', '21년 3월 19일'),
]

export default function PointPage(){

    const cancelCount = 1
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    //sh 포인트 조회 91
    const [point,setPoint] = useState(0)
    useEffect(() => {

       axios.get(`/api/users/point`)
       .then(response => {
           if(response.data.success){
               setPoint(response.data.result.point)
           }
       })
   }, [])

    return(
        <Container style={{paddingTop:'2%'}}>
            <Card className={classes.card}>
                    <Typography variant="h6" align='center'>
                        사용가능 적립금은 총 {point}원 입니다.
                    </Typography>
                    <CardActions className={classes.button}>
                    <Button 
                    variant='outlined' 
                    style={{fontSize:'1rem'}} 
                    size="large"
                    href="http://www.kbuwel.or.kr/Assistance/Info">
                        기부하기</Button>
                    </CardActions>
                </Card>
            <br/>
            <Paper className={classes.root}>
                <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                indicatorColor="primary"
                centered
                >
                <Tab style={{fontSize:'1rem'}} label="적립내역" />
                <Tab style={{fontSize:'1rem'}} label="사용내역" />
                </Tabs>

            <TabPanel value={value} index={0} className={classes.panel}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">적립금</TableCell>
                        <TableCell align="center">비고</TableCell>
                        <TableCell align="center">유효기간</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.date}>
                        <TableCell align="center">{row.point}</TableCell>
                        <TableCell align="center">{row.usage}</TableCell>
                        <TableCell align="center">{row.deadline}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
                
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.panel}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">사용금액</TableCell>
                        <TableCell align="center">사용처</TableCell>
                        <TableCell align="center">사용날짜</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows2.map((row) => (
                        <TableRow key={row.date}>
                        <TableCell align="center">{row.point}</TableCell>
                        <TableCell align="center">{row.usage}</TableCell>
                        <TableCell align="center">{row.deadline}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </TabPanel>
            </Paper>
        </Container>
    )

}
