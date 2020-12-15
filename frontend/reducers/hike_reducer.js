import { RECEIVE_ALL_TREKS, RECEIVE_HIKE} from '../actions/hike_actions'


const hikeReducer = (state = {}, action) => {

    switch(action.type){
        case RECEIVE_ALL_TREKS:
            return action.treks
        case RECEIVE_HIKE:
            return Object.assign({}, state, {[action.trek.id]: action.trek})
        default: return state

    }

}

export default hikeReducer