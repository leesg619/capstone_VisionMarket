import dog from './1.jpg';
import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Avatar, Checkbox, FormControlLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MicIcon from '@material-ui/icons/Mic';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import Speech from 'speak-tts';
import {useCookies} from 'react-cookie'
import Linkify from 'react-linkify';


import {CTX} from './Store';
import { Route } from 'react-router';

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
      height: '100%',
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

  const speech = new Speech();

  speech.init({
    volume: 0.5,
    lang: "ko-KR",
    rate: 1,
    pitch: 1,
  })

  export default function Dashboard(){
    const classes = useStyles();
    const messagesEndRef = useRef(null);
    const musictest = useRef(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'))
  
    // CTX store
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats);
     
    // local state
    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
    const [ textValue, changeTextValue ] = React.useState('');
    const [checked, setChecked] = React.useState(true);
    const [count, setCount] = React.useState(2);
    const [isRemember, setIsRemember] =React.useState(false);
    const [token, setToken] = React.useState(Math.random().toString(36).substr(2,11));
    const [cookies, setCookie, removeCookie] = useCookies(['rememberChatToken']);
    const [music, setMusic] = React.useState(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'));
  
    const {
      interimTranscript,
      finalTranscript,
    } = useSpeechRecognition();
  
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    useEffect(()=>{
      if(cookies.rememberChatToken === undefined){
        setToken(token);
        setIsRemember(true);
        setCookie('rememberChatToken', token, {maxAge: 20000});
      }
    }, []);

    useEffect(() => {
      setCount(count+1);
      //보낸 사람이 비전이고 3번째 채팅 이상일 때
      if(allChats.general[count-1].from === "비전" && checked && allChats.general.length > 2){
        speech.speak({
          text: allChats.general[count-1].msg,
          queue: false
        })
        console.log(allChats.general[count-1]);
        //링크 섹션에 값이 들어왔을 때, 이동
        if(allChats.general[count-1].link !== ""){
          window.open(allChats.general[count-1].link);
        }
        //mp3 섹션에 값이 들어왔을 때 플레이
        if(allChats.general[count-1].mp3 !== ""){
          musictest.current.pause();
          musictest.current = new Audio(allChats.general[count-1].mp3);
          musictest.current.play();
        }
        //다시 다른 입력이 들어갔을 때 중지
        else{
          musictest.current.pause();
        }
      }
      scrollToBottom()
    }, [sendChatAction]);
  
    useEffect(()=>{
      if (finalTranscript !== '') {
        console.log('Got final result:', finalTranscript);
        sendChatAction({from: user, msg: finalTranscript, img:'', topic: activeTopic, sessionId: cookies.rememberChatToken});
      }
    }, [interimTranscript, finalTranscript])
  
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }
  
      return (
        <div>
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
                        <Linkify>
                          <Typography style={{fontSize:'20px', padding: '5px'}}>{chat.msg}<br/>
                        
                          {chat.img !== '' ? (
                            <img src={chat.img} style={{width:'300px'}}/>
                          ) : (
                            <div/>
                          )}
                         </Typography>
                         </Linkify>
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
                if(textValue!== ''){
                  sendChatAction({from: user, msg: textValue, img: '', topic: activeTopic, sessionId: cookies.rememberChatToken});
                  changeTextValue('');
                  ev.preventDefault();
                }
              }
            }}
          />
          <MicIcon className={classes.micIcon}
          onClick={SpeechRecognition.startListening}
          />
          <Button variant="contained" color="primary"
          onClick={()=> {
            if(textValue!== ''){
              sendChatAction({from: user, msg: textValue, img:'', topic: activeTopic, sessionId: cookies.rememberChatToken});
              changeTextValue('');
            }
          }}>
          전송
          </Button>
          <FormControlLabel
            defaultChecked
            value="start"
            control={<Checkbox color="primary" checked={checked} onChange={handleChange}/>}
            label="voice"
            labelPlacement="start"
          />
          </div>
          </Grid>
        </Paper>
        </Grid>
        </div>
      );
  }