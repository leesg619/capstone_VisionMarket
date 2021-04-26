import {
    USER_REGISTER,
    USER_LOGOUT,
    USER_LOGIN,
    USER_AUTH
} from '../_action/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state={}, action) {
    switch (action.type) {
        case USER_AUTH:
            return {...state, userData : action.payload}
        case USER_LOGIN :
            return {...state, loginSuccess : action.payload}
        case USER_LOGOUT :
            return {...state}
        case USER_REGISTER :
            return {...state, register : action.payload}
        default:
            return state
    }
}