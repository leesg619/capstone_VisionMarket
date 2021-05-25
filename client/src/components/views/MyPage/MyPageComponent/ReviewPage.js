import {  makeStyles, Typography, Box, Paper, Container} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import ReviewedCard from "./ReviewedCard"
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
    root: {
        flexGrow: 1,
        width: '100%',
    },
    panel: {
        backgroundColor: '#fefefe',
    }
  }));
  
  export default function ReviewPage() {
    let reviewCount = 1
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const [reviews, setReviews] = useState([])
    const userId=localStorage.getItem('userId');

    useEffect(() => {
        axios.post('/api/review/getMyReviews', {userId:userId})
        .then(response => {
            console.log(response.data.reviews)
            setReviews(response.data.reviews)
            // reviewCount = reviews.length;
        })
    }, [])
    const ReviewedItems = reviews.map(( review, index) => {
      return <ReviewedCard review = { review } title = {review.post.title} content={review.content} image={review.post.image}/>
    });

    return (
        <Container style={{paddingTop:'2%'}}>
            <Paper className={classes.root}>
              {ReviewedItems}
            </Paper>
      </Container>
    );
  }