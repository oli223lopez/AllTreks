
import { RECEIVE_NATIONAL_PARK} from '../actions/national_park_actions'



const nationalParkReducer = (state ={}, action) => {

    switch(action.type){
        
        case RECEIVE_NATIONAL_PARK:
            return Object.assign({}, state, {[action.nationalPark.name]: action.nationalPark})
            // return action.nationalPark ///!
        default: return state
    }
}

export default nationalParkReducer