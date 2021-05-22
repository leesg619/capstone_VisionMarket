import React from 'react';


export const CTX = React.createContext();

const initState = {
    general : [
        {from: '비전', msg: '안녕하세요. 저는 비전입니다.', img:'https://placeimg.com/200/200/any'},
        {from: '비전', msg: '어떤 것을 도와드릴까요?', img:''},
    ],
}

function reducer(state, action){
    const {from, msg, img, link, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            // console.log(from, msg, topic);
            return {
                ...state,
                [topic]:[
                    ...state[topic],
                    {from, msg, img, link}
                ]
            }
        default :
            console.log('default');
            return state
    }
}

export default function Store(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState);
    
    function sendChatAction(value){
        dispatch({type: 'RECEIVE_MESSAGE', payload: value})
        var result = '';
        console.log('값 : ' + value.msg);
        var currentUrl = window.location.host;
        currentUrl = currentUrl.split(':');
        const url='http://'+ currentUrl[0] +':5000/chatbot/send-msg'

        fetch(url,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                msg: value.msg,
                sessionId: value.sessionId
            }),
        })
        .then(response=>response.json())
        .then(response => {
            console.log(response.Reply); 
            result = response.Reply
            dispatch({type: 'RECEIVE_MESSAGE', payload: {from:'비전', msg: result, img: response.Img, link: response.link, topic:"general"}})
        }).catch(function(e){
            console.log('에러!')
        })
        console.log(value);
        
    }

    const user = 'user';
    const img = '';

    return (
        <CTX.Provider value = {{allChats, sendChatAction, img, user}}>
            {props.children}
        </CTX.Provider>
    )
}

