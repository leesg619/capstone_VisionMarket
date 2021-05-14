import {
POST_DELETE
} from '../_action/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state={}, action) {
    switch (action.type) {
        case POST_DELETE:
            return {...state, postData : action.payload}
        default:
            return state
    }
}