import { Box, Button, Card, Tabs, Tab, Container, Divider, Grid, makeStyles, Paper, TextField, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CardActions } from "@material-ui/core";
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
            <Typography>{children}</Typography>
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

function createData(name, calories, fat, carbs, protein) {
return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('오픈 기념 쿠폰', 1000, '첫 주문', '5/1', '일회성'),
];

const rows2 = [
    createData('배송비 ㅁㄴㅇㄹㄴㅇㄹㄴㅇㄹ무료', 3000, '제한 없음', '5/1', '일회성'),
    createData('배송비 무료', 3000, '제한 없음', '5/1', '일회성'),
]

export default function CouponPage(){

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(


        <Container>
            <Card elevation={3}>
                <Grid container >
                <Grid item xs={12}>
                    <Typography variant="h6" component="span">
                        사용가능 할인쿠폰 : 1개
                    </Typography>
                </Grid>
                
                <Grid item xs={12} >
                
                    <Typography variant="h6" component="span">
                        <br/>
                        <Divider/>
                        쿠폰 번호 입력 :
                    </Typography>
                    <TextField id="standard-basic" label="쿠폰 번호 입력" style={{width:'50%'}}/>
                    <CardActions style={{justifyContent: 'flex-end'}}>
                        <Button variant="outlined">등록</Button>
                    </CardActions>
                    
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
                <Tab label="사용가능" />
                <Tab label="사용완료 / 기간만료" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0} className={classes.panel}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={{width:'20%'}}>쿠폰명</TableCell>
                        <TableCell style={{width:'20%'}} align="right">할인액</TableCell>
                        <TableCell style={{width:'20%'}} align="right">사용조건</TableCell>
                        <TableCell style={{width:'20%'}} align="right">유효기간</TableCell>
                        <TableCell style={{width:'20%'}} align="right">쿠폰종류</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
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
                        <TableCell style={{width:'20%'}}>쿠폰명</TableCell>
                        <TableCell style={{width:'20%'}} align="right">할인액</TableCell>
                        <TableCell style={{width:'20%'}} align="right">사용조건</TableCell>
                        <TableCell style={{width:'20%'}} align="right">유효기간</TableCell>
                        <TableCell style={{width:'20%'}} align="right">쿠폰종류</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows2.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </TabPanel>
        </Container>
    )

}
