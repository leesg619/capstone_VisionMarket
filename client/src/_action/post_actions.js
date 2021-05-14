import axios from 'axios'
import {
 POST_DELETE
} from './types'

import { POST_SERVER } from '../components/Config'

export function deletePost (dataToSubmit) {

    const request = axios.delete(`${POST_SERVER}/delete`, dataToSubmit)
    .then(response => response.data)

    return {
        type : POST_DELETE,
        payload : request
    }
}
