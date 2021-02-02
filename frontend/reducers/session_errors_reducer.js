import {RECEIVE_SESSION_ERRORS, REMOVE_ERRORS} from '../actions/session_actions'


const SessionErrorsReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON;
        case REMOVE_ERRORS:
            return []
        default: return state
    }
}

export default SessionErrorsReducer