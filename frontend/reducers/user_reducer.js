import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'


const UserReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return action.currentUser
        case LOGOUT_CURRENT_USER:   
            return {}
        default: return state
    }
}

export default UserReducer