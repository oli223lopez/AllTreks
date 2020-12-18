import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions'




const reviewReducer = (state = {}, action) => {

    switch(action.type){
        case RECEIVE_REVIEW:
            return action.review
        case REMOVE_REVIEW:
            const newState = Object.values({}, state)
            delete newState[action.reviewId]
            return newState
        default: return state
        
    }

}


export default reviewReducer