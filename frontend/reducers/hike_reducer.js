import { RECEIVE_ALL_TREKS, RECEIVE_HIKE, SHOW_HIKE, RECEIVE_HIKE_FROM_API } from '../actions/hike_actions'


const hikeReducer = (state = {}, action) => {

    switch(action.type){
        case RECEIVE_ALL_TREKS:
            return action.treks

        case RECEIVE_HIKE:
            debugger
            return Object.assign({}, state, {[action.hike.id]: action.hike})

        case SHOW_HIKE:
            return Object.assign({}, state, { [action.hike.id]: action.hike})
        case RECEIVE_HIKE_FROM_API:
            return Object.assign({}, state, {[action.hike.trails[0].name]: action.hike.trails[0]} )

        default: return state

    }

}

export default hikeReducer