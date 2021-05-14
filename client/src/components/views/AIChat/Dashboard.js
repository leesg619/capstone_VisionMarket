import dog from './1.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


import {CTX} from './Store';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3, 2),
    },
    flex : {
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '2px'
    },
    chatWindow: {
      width: '100%',
      height: '300px',
      padding: '20px',
    },
    chatBox: {
      width: '85%'
    },
    button: {
      width: '15%'
    },
  }));

export default function Dashboard(){
    const classes = useStyles();

  // CTX store
  const [allChats] = React.useContext(CTX);
  const topics = Object.keys(allChats);

  // local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [ textValue, changeTextValue ] = React.useState('');
    
    return (
      <div>
        <Grid container justify="center">
        <Paper className={classes.root}>
        <Grid item xs={12}>
        <Typography variant="h4" component="h4" align="center">
          인공지능채팅APP
        </Typography>
        <div className={classes.flex}>
            <div className={classes.chatWindow}>
                {
                  allChats[activeTopic].map((chat, i)=>(
                    <div className={classes.flex} key={i}>
                      <Chip avatar={<Avatar alt="비전" src={dog} />} variant="outlined" size="small" label="비전"/> 
                       <Typography style={{fontSize:'15px'}}>{chat.msg}</Typography>
                      </div>
                  ))
                }
            </div>
        </div>
        <div className={classes.flex}>
        <TextField 
        id="standard-basic" 
        label="채팅 입력창" 
        className={classes.chatBox}
        value={textValue}
        onChange={e => changeTextValue(e.target.value)}
        />
        <Button variant="contained" color="primary">
        전송
        </Button>
        </div>
        </Grid>
      </Paper>
      </Grid>
      </div>
    );
}