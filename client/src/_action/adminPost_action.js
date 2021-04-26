import {
    ADMINPOST_SEARCH,
    ADMINPOST_SAVE
}from './types'
import { ADMIN_POST_SERVER } from '../components/Config'
import axios from 'axios'

export function searchAdminPost(dataToSubmit) {
    const request = axios.post(`${ADMIN_POST_SERVER}/find/correct/page`, dataToSubmit)
    .then(response => response.data)

    return {
        type : ADMINPOST_SEARCH,
        payload : request
    }
}

export function registerAdminPost(dataToSubmit) {
    const request = axios.post(`${ADMIN_POST_SERVER}/save/post`, dataToSubmit)
    .then(response => response.data)

    return {
        type : ADMINPOST_SAVE,
        payload : request
    }
}