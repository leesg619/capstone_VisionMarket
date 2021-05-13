
import { combineReducers } from 'redux'
import user from './user_reducer'
import adminPost from './adminPost_reducer'
import post from './post_reducer'

const rootReducer = combineReducers({
    user,
    adminPost,
    post

})

export default rootReducer;