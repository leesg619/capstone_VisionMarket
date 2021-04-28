import {makeStyles, Tab, Tabs, Typography, Box, Paper, Container} from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types'
import CancelCard from "./CancelCard";
import RefundWB from "./RefundWB"

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
    }
  }));
  
  export default function Cancel() {
    const cancelCount = 1
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Container>
            <Paper className={classes.root}>
                <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                <Tab label="취소/반품/교환" />
                <Tab label="무통장환불" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0} className={classes.panel}>
                {
                    cancelCount < 1 ? '최근 6개월간 주문하신 내역이 없습니다.' : 
                    <CancelCard/>
                }
                
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.panel}>
                <RefundWB/>
            </TabPanel>
            {
                value==0 ? 
                <div>
                <br/>
                - 취소/반품/교환 신청한 내역을 확인할 수 있습니다.<br/>
                - 하단 상품목록에 없는 상품은 1:1문의 또는 고객센터(1111-1111)로 문의주세요.
                </div>
                : null
            }
            
      </Container>
    );
  }