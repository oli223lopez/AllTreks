import {combineReducers} from 'redux'
import UserReducer from './user_reducer'
import HikeReducer from './hike_reducer'
import NationalParkReducer from './national_park_reducer'



const EntitiesReducer = combineReducers({
    users: UserReducer,
    hike: HikeReducer,
    nationalPark: NationalParkReducer

})

export default EntitiesReducer