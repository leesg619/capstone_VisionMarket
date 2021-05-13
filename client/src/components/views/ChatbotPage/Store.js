import React, {useEffect, useRef} from 'react';
import Speech from 'speak-tts';
//import io from 'socket.io-client'

export const CTX = React.createContext();

const initState = {
    general : [
        {from: '비전', msg: '안녕하세요. 저는 비전입니다.', img:'https://placeimg.com/200/200/any'},
        {from: '비전', msg: '어떤 것을 도와드릴까요?', img:''},
    ],
}

var SpeechEnabled = false;
const speech = new Speech();

function reducer(state, action){
    const {from, msg, img, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            // console.log(from, msg, topic);
            return {
                ...state,
                [topic]:[
                    ...state[topic],
                    {from, msg, img}
                ]
            }
        default :
            console.log('default');
            return state
    }
}

export default function Store(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState);
    
    if(SpeechEnabled){
        if(speech.hasBrowserSupport()){
            console.log("speech synthesis is supported");
        }
        speech.init({
            volume: 0.5,
            lang: "ko-KR",
            rate: 1,
            pitch: 1,
        })
        .then(data => {
            console.log("Speech is ready, voices are available", data);
            SpeechEnabled = false;
        })
    }
    
    function sendChatAction(value){
        dispatch({type: 'RECEIVE_MESSAGE', payload: value})
        var result = '';
        console.log('값 : ' + value.msg);
        const url='http://localhost:5000/chatbot/send-msg'

        fetch(url,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                msg: value.msg
            }),
        })
        .then(response=>response.json())
        .then(response => {
            console.log(response.Reply); 
            result = response.Reply
            dispatch({type: 'RECEIVE_MESSAGE', payload: {from:'비전', msg: result, img: response.Img , topic:"general"}})
            speech.speak({
                text: result,
                queue: false
            })
        }).catch(function(e){
            console.log('에러!')
        })
        console.log(value);
        
    }

    // useEffect(()=>{
    //     if(!socket){
    //         socket = io(':3001')
    //         socket.on('chat-msg', function(msg){
    //             console.log({msg});
    //             dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
    //         })
    //     }
    // })

    const user = 'user';
    const img = '';

    return (
        <CTX.Provider value = {{allChats, sendChatAction, img, user}}>
            {props.children}
        </CTX.Provider>
    )
}

