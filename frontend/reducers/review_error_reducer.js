import {RECEIVE_REVIEW, RECEIVE_ERRORS, REMOVE_ERRORS} from '../actions/review_actions'


const reviewErrorReducer = (state = [], action) => {

    switch(action.type){
        case RECEIVE_REVIEW:
            return[]
        case REMOVE_ERRORS:
            return []
        case RECEIVE_ERRORS:
            return action.errors.responseJSON
        default: return state

    }


}

export default reviewErrorReducer