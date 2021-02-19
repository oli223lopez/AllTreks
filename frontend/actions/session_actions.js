import * as SessionApiUtil from '../util/session_api_util'




export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';
//action creators
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => {
    // console.log(`these are the errors: ${JSON.stringify(errors)}`)
   return { type: RECEIVE_SESSION_ERRORS,
    errors}
}

export const removeErrors = ()  => ({    
    type: REMOVE_ERRORS
})  





//thunk action creators

export const login = user => dispatch => {
    // console.log(SessionApiUtil.login(user))

    return SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), 

    err => dispatch(receiveErrors(err)))
}


export const logout = () => dispatch => {
    return SessionApiUtil.logout().then(user => dispatch(logoutCurrentUser()))
}


export const signup = user => dispatch => {
    // console.log(SessionApiUtil.signup(user))

    return SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err)))
}

export const getUser = username => dispatch => {
    return SessionApiUtil.getUser(username)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err)))
}





