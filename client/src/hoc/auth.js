/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { authUser } from '../_action/user_actions';
import { useSelector, useDispatch } from 'react-redux'


export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        let user = useSelector(state => state.user)
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(authUser()).then(response => {
                console.log(response)
                // 로그인하지 않았을때
                if(!response.payload.isAuth) {
                    // 그러나 로그인에 대한 권한이 필요할때
                    if(option) {
                        props.history.push('/login')
                    }
                }
                // 로그인 했을 때
                else {
                    // admin page를 지원하는 경우
                    if(adminRoute && !response.payload.isAuth) {
                        props.history.push('/')
                    }
                    // 로그인 한걸 지원하지 않는경우
                    else {
                        if (option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])
        return (
            <SpecificComponent {...props} user={user}/>
        )
    }
    return AuthenticationCheck;
}