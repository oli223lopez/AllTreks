import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import reviewErrorReducer from './review_error_reducer'


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    review: reviewErrorReducer
})

export default errorsReducer