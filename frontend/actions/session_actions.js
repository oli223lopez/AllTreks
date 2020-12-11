import * as SessionApiUtil from '../util/session_api_util'




export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
//action creators
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})





//thunk action creators

export const login = user => dispatch => {
    return SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
}


export const logout = () => dispatch => {
    return SessionApiUtil.logout().then(user => dispatch(logoutCurrentUser()))
}


export const signup = user => dispatch => {
    return SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)))
}






