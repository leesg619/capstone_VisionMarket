import React from 'react';

export const CTX = React.createContext();

const initState = {
    비전 : [
        {from: '비전', msg: '안녕하세요. 저는 비전입니다.'},
        {from: '비전', msg: '어떤 것을 도와드릴까요?'}
    ],
}
function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECIVE MESSAGE':
            return {
                ...state,
                [topic]:[
                    ...state[topic],
                    {from, msg}
                ]
            }
        default :
            return state
    }
}

export default function Store(props){

    const reducerHook = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value = {reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}

