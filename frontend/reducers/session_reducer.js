import {RECEIVE_CURRENT_USER,
        LOGOUT_CURRENT_USER, 
        REMOVE_ERRORS, 
        RECEIVE_SESSION_ERRORS} from '../actions/session_actions'


const SessionReducer = (state = {}, action) => {

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return action.currentUser;
        case LOGOUT_CURRENT_USER:
            return {};
        default: return state
    }


}

export default SessionReducer