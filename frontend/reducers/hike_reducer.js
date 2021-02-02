import { RECEIVE_HIKE, REMOVE_HIKE } from '../actions/hike_action'


const HikeReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_HIKE:
            return action.hike
        case REMOVE_HIKE:
            return {}
        default: return state
    }
}

export default HikeReducer