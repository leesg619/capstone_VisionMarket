import { Box, Card, Tabs, Tab, Container, Grid, makeStyles, Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CardActions } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types'

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
    table: {
        minWidth: 650,
    },
}));

function createData(date, point, status, usage, deadline) {
    return { date, point, status, usage, deadline };
}

const rows = [
    createData('2021-04-20', 1000, '승인 완료', '첫 개시 이벤트', '2022-04-20'),
];

const rows2 = [
    createData('2021-04-21', 500, '승인 완료', '마우스 구매'),
    createData('2021-04-22', 500, '승인 완료', '헤드폰 구매'),
]

export default function PointPage(){

    const cancelCount = 1
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(


        <Container>
            <Card elevation={3}>
                <Grid container >
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" component="div">
                        사용가능 적립금 :<br/> 
                        <CardActions style={{justifyContent: 'flex-end'}}>
                            1000원
                        </CardActions>

                        
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" component="div">
                        한달 내 소멸 예정 적립금 :<br/>
                        <CardActions style={{justifyContent: 'flex-end'}}>
                            0원
                        </CardActions>
                    </Typography> 
                </Grid>
                </Grid>
            </Card>
            <br/>
            <Paper className={classes.root}>
                <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                <Tab label="적립내역" />
                <Tab label="사용내역" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0} className={classes.panel}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={{width:'20%'}}>거래일</TableCell>
                        <TableCell style={{width:'20%'}} align="right">거래 금액</TableCell>
                        <TableCell style={{width:'20%'}} align="right">상태</TableCell>
                        <TableCell style={{width:'20%'}} align="right">비고</TableCell>
                        <TableCell style={{width:'20%'}} align="right">유효기간</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.date}>
                        <TableCell component="th" scope="row">
                            {row.date}
                        </TableCell>
                        <TableCell align="right">{row.point}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.usage}</TableCell>
                        <TableCell align="right">{row.deadline}</TableCell>
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
                        <TableCell style={{width:'20%'}}>거래일</TableCell>
                        <TableCell style={{width:'20%'}} align="right">거래 금액</TableCell>
                        <TableCell style={{width:'20%'}} align="right">상태</TableCell>
                        <TableCell style={{width:'20%'}} align="right">비고</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows2.map((row) => (
                        <TableRow key={row.date}>
                        <TableCell component="th" scope="row">
                            {row.date}
                        </TableCell>
                        <TableCell align="right">{row.point}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.usage}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </TabPanel>
        </Container>
    )

}
