import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import hikeReducer from './hike_reducer'
import nationalParkReducer from './national_parks_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    hikes: hikeReducer,
    nationalPark: nationalParkReducer
})


export default entitiesReducer
