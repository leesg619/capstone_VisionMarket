import {  makeStyles, Typography, Box, Paper, Container} from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types'
import ReviewableCard from "./ReviewableCard"
import ReviewedCard from "./ReviewedCard"

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
    const cancelCount = 1
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Container style={{paddingTop:'2%'}}>
            <Paper className={classes.root}>
              <ReviewedCard/>
              <ReviewedCard/>
            </Paper>
      </Container>
    );
  }