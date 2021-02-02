import { RECEIVE_NP, RECEIVE_ALL_NP} from '../actions/national_park_actions'


const NationalParkReducer = (state = {}, action) => {

    switch(action.type){
        case RECEIVE_ALL_NP:
            return action.national_parks
        case RECEIVE_NP:
            return action.national_park

        default: return state
    }

}

export default NationalParkReducer