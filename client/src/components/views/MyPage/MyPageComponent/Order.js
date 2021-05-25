import { makeStyles, Tab, Tabs, Typography, Box, Paper, Container} from "@material-ui/core";
import PropTypes from 'prop-types'
import BuyCard from "./BuyCard";
import axios from 'axios';
import React, { useState,useEffect } from 'react'


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


    //sh 유저가 구매한 목록 받아와서 BuyCard에 뿌려준다.
    const [purchaseList,setPurchaseList] = useState([])
    useEffect(() => {

        axios.get(`/api/purchase/purchaseList`)
        .then(response => {
            if(response.data.success){
               if(response.data.success) {
                console.log(response)
                setPurchaseList(response.data.purchaseList)
                
            }
        }
        })
    }, [])

    const getPurchaseList = (PurchaseListObj) => {
      return (
          <BuyCard {...PurchaseListObj} deletePurchaseItem={e => deletePurchaseItem(e)}></BuyCard>
      );
  }

  function deletePurchaseItem(purchaseId){ 
    setPurchaseList(purchaseList.filter(item => item._id !== purchaseId))
}

    return (
        <Container style={{paddingTop:'2%'}}>
            <Paper className={classes.panel}>
              {
                    orderCount < 1 ? '최근 6개월간 주문하신 내역이 없습니다.' : 
                    <div>
                        {purchaseList.map(PurchaseListObj => getPurchaseList(PurchaseListObj))}
                    </div>
                }
            </Paper>
      </Container>
    );
  }