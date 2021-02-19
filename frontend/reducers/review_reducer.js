import {CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW} from '../actions/review_actions'


const ReviewReducer = (state = {}, action) => {

    switch(action.type){
        case CREATE_REVIEW:
            return action.review
        case UPDATE_REVIEW:
            return action.review
        case DELETE_REVIEW:
            return state
        default: return state

    }
}

export default ReviewReducer 