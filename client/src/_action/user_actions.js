import axios from 'axios'
import {
    USER_AUTH,
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER
} from './types'
import { USER_SERVER } from '../components/Config'

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data)

    return {
        type : USER_REGISTER,
        payload : request
    }
}
export function loginUser (dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data)
    console.log(request)
    return {
        type : USER_LOGIN,
        payload : request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data)
    console.log(request)
    return {
        type : USER_LOGOUT,
        payload : request
    }
}

export function authUser() {
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data)
    console.log(request)
    return {
        type : USER_AUTH,
        payload : request
    }
}