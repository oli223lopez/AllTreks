import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import * as Actions from './actions/session_actions';
import configureStore from './store/store'
import Root from './components/root'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    //test
    // window.login = Actions.login
    // window.signup = Actions.signup
    // window.logout = Actions.logout
    // window.getState = store.getState 
    // window.dispatch = store.dispatch
    //test


    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
  
  window.store = store

  ReactDOM.render( <Root store = {store}/>, root)
})

