import {
    ADMINPOST_SAVE,
    ADMINPOST_SEARCH
} from '../_action/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state={}, action) {
    switch (action.type) {
        case ADMINPOST_SAVE:
            return {...state, register : action.payload}
        case ADMINPOST_SEARCH : 
            return {...state, aPostData : action.payload}
        default:
            return state
    }
}