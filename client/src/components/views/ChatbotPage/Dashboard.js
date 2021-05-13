import dog from './1.jpg';
import React, { useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MicIcon from '@material-ui/icons/Mic';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

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
      width: '900px',
      height: '700px',
      maxHeight: '700px',
      padding: '20px',
      overflow: 'auto'
    },
    chatBox: {
      width: '85%'
    },
    button: {
      width: '15%'
    },
    micIcon:{
      color: "#141414",
      '&:hover': {
        color: "#7A7A7A",
        cursor: 'pointer'
      },
    },
    Img:{
      width: '200px',
      height: '200px'
    }
  }));

export default function Dashboard(){
  const classes = useStyles();
  const messagesEndRef = useRef(null);

  // CTX store
  const {allChats, sendChatAction, user} = React.useContext(CTX);
  const topics = Object.keys(allChats);

  // local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [ textValue, changeTextValue ] = React.useState('');

  const {
    interimTranscript,
    finalTranscript,
  } = useSpeechRecognition();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [sendChatAction]);

  useEffect(()=>{
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
      sendChatAction({from: user, msg: finalTranscript, img:'', topic: activeTopic});
    }
  }, [interimTranscript, finalTranscript])

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  function SpeechOnOff(){
    SpeechRecognition.startListening()
  }

    return (
      <div>
        <Typography variant="h4" component="h4" align="center">
          테스트
        </Typography>
        <Grid container justify="center" style={{marginTop: '50px'}}>
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
                      <Chip avatar={<Avatar alt="비전" src={dog}/>} variant="outlined" size="small" label={chat.from}/> 
                       <Typography style={{fontSize:'20px', padding: '5px'}}>{chat.msg}<br/>
                        {chat.img !== '' ? (
                          <img src={chat.img} style={{width:'300px'}}/>
                        ) : (
                          <div/>
                        )}
                       </Typography>
                      </div>
                  ))
                }
                <div ref={messagesEndRef}/>
            </div>
        </div>
        <div className={classes.flex}>
        <TextField 
          id="standard-basic" 
          label="채팅 입력창" 
          className={classes.chatBox}
          value={textValue}
          onChange={e => changeTextValue(e.target.value)}
          onKeyPress = {(ev) => {
            if(ev.key=='Enter'){
              sendChatAction({from: user, msg: textValue, img: '', topic: activeTopic});
              changeTextValue('');
              ev.preventDefault();
            }
          }}
        />
        <MicIcon className={classes.micIcon}
        onClick={SpeechOnOff}
        />
        <Button variant="contained" color="primary"
        onClick={()=> {
          if(textValue!== ''){
            sendChatAction({from: user, msg: textValue, img:'', topic: activeTopic});
            changeTextValue('');
          }
        }}>
        전송
        </Button>
        </div>
        </Grid>
      </Paper>
      </Grid>
      </div>
    );
}