import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    window.login = SessionApiUtil.login
    window.signup = SessionApiUtil.signup
    window.logout = SessionApiUtil.logout
  

    ReactDOM.render( <h1>howdy</h1>, root)
})

