import { makeStyles, Tab, Tabs, Typography, Box, Paper, Container} from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types'
import BuyCard from "./BuyCard";

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
    panel: {
        backgroundColor: '#fefefe',
    }
  }));
  
  export default function Order() {

    const orderCount = 3;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Container style={{paddingTop:'2%'}}>
            <Paper className={classes.panel}>
              {
                    orderCount < 1 ? '최근 6개월간 주문하신 내역이 없습니다.' : 
                    <div>
                        <BuyCard></BuyCard>
                        <BuyCard></BuyCard>
                    </div>
                }
            </Paper>
      </Container>
    );
  }