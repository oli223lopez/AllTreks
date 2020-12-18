import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import hikeReducer from './hike_reducer'
import nationalParkReducer from './national_parks_reducer'
import reviewReducer from './review_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    hikes: hikeReducer,
    nationalPark: nationalParkReducer,
    review: reviewReducer

})


export default entitiesReducer
