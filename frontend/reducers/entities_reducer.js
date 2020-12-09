import {combineReducers} from 'redux';
import userReducer from 'users_reducer';


const entitiesReducer = combineReducers({
    user: userReducer
})


export default entitiesReducer
