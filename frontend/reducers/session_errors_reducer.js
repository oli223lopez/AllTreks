import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_ERRORS} from '../actions/session_actions';



const sessionErrorsReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER:           
        return [];
        case REMOVE_ERRORS: 
        return [];
        case RECEIVE_SESSION_ERRORS:
            // console.log(action.errors.responseJSON)
            return action.errors.responseJSON
        default: return state
    }
}

export default sessionErrorsReducer