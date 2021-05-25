import { makeStyles, Tab, Tabs, Typography, Box, Paper, Container} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import BuyCard from "./BuyCard";

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

    let orderCount = 3;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const [purchases, setPurchases] = useState([]);
    const userId=localStorage.getItem('userId');
    useEffect(() => {
        axios.get('/api/purchase/getPurchases', {userId:userId})
        .then(response => {
            console.log(response.data.purchases)
            setPurchases(response.data.purchases)
                // orderCount = purchases.length;
        })
    }, [])


    const PurchaseItems = purchases.map(( purchase, index) => {
      return <BuyCard postId={purchase.post._id} purchase={purchase}></BuyCard>
    });

    return (
        <Container style={{paddingTop:'2%'}}>
            <Paper className={classes.panel}>
              {
                    orderCount < 1 ? '최근 6개월간 주문하신 내역이 없습니다.' : 
                    <div>
                        <BuyCard></BuyCard>
                        <BuyCard></BuyCard>
                        {PurchaseItems}
                    </div>
                }
            </Paper>
      </Container>
    );
  }